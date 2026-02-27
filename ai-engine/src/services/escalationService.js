export const checkEscalation = (data) => {
  let escalate = false;
  let reason = "";
  let riskScore = 0;

  if (!data.intent) {
    escalate = true;
    reason = "Intent not detected clearly";
    riskScore += 30;
  }

  if (data.confidence < 0.75) {
    escalate = true;
    reason = "Low confidence score";
    riskScore += 25;
  }

  if (data.fields?.property_size && data.fields.property_size > 200) {
    escalate = true;
    reason = "Property size exceeds residential limit";
    riskScore += 40;
  }

  if (data.risk_indicators?.length > 0) {
    riskScore += 20;
  }

  return {
    escalate,
    reason,
    riskScore
  };
};
