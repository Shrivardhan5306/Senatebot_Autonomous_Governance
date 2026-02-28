export const buildLanguagePrompt = (language, message) => {
  return `
Language: ${language || "English"}

User Message:
${message}

Respond in the same language.
`;
};
