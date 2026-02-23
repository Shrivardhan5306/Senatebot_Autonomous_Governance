import { systemPrompt } from "../prompts/systemPrompt.js";
import { generateAIResponse } from "../services/openaiService.js";
import { checkEscalation } from "../services/escalationService.js";
import { enhanceExplanation } from "../services/explanationService.js";
import { validateIntent } from "../services/intentService.js";
import { detectLanguage, buildLanguagePrompt } from "../utils/languageHandler.js";

/*
  In-memory session store
  (For hackathon demo. In production use database like Redis/MongoDB)
*/
const sessionStore = {};

const aiController = async (req, res) => {
  try {
    const { message, session_id } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

    // 🔹 Generate session ID if not provided
    const sessionId = session_id || "default-session";

    if (!sessionStore[sessionId]) {
      sessionStore[sessionId] = [];
    }

    // 🔹 Detect Language Automatically
    const detectedLanguage = detectLanguage(message);

    // 🔹 Add user message to session memory
    sessionStore[sessionId].push({
      role: "user",
      content: message
    });

    // 🔹 Build Prompt with Context Memory
    const prompt = [
      { role: "system", content: systemPrompt },
      ...sessionStore[sessionId],
      {
        role: "user",
        content: buildLanguagePrompt(detectedLanguage, message)
      }
    ];

    // 🔹 Call OpenAI
    const aiRawResponse = await generateAIResponse(prompt);

    let parsed;

    try {
      parsed = JSON.parse(aiRawResponse);
    } catch (err) {
      return res.status(500).json({
        error: "AI returned invalid JSON",
        raw: aiRawResponse
      });
    }

    // 🔹 Store AI response in session memory
    sessionStore[sessionId].push({
      role: "assistant",
      content: aiRawResponse
    });

    // 🔹 Validate Intent
    if (!validateIntent(parsed.intent)) {
      parsed.intent = "information_request";
    }

    // 🔹 Escalation & Risk Logic
    const escalation = checkEscalation(parsed);

    // 🔹 Decision Engine
    let decision = "under_review";

    if (!escalation.escalate && parsed.intent === "permit_application") {
      decision = "auto_approved";
    }

    if (parsed.intent === "grievance") {
      decision = "grievance_registered";
    }

    if (escalation.escalate) {
      decision = "escalated_to_officer";
    }

    // 🔹 SLA Assignment Logic
    let sla_days = 7;

    if (escalation.riskScore >= 70) sla_days = 2;
    if (parsed.intent === "grievance") sla_days = 5;

    // 🔹 Enhanced Explanation
    const finalExplanation = enhanceExplanation(parsed);

    // 🔹 Audit Trail
    const audit = {
      ai_confidence: parsed.confidence || 0,
      risk_score: escalation.riskScore || 0,
      escalation_triggered: escalation.escalate,
      escalation_reason: escalation.reason
    };

    // 🔹 Final Structured Governance Response
    return res.json({
      session_id: sessionId,
      detected_language: detectedLanguage,
      intent: parsed.intent || null,
      fields: parsed.fields || {},
      confidence: parsed.confidence || 0,
      risk_indicators: parsed.risk_indicators || [],
      explanation: finalExplanation || "",
      escalate: escalation.escalate,
      escalation_reason: escalation.reason,
      risk_score: escalation.riskScore,
      decision,
      sla_days,
      audit
    });

  } catch (error) {
    console.error("AI Controller Error:", error);

    return res.status(500).json({
      error: "Advanced AI processing failed"
    });
  }
};

export default aiController;
