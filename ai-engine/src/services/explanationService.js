export const enhanceExplanation = (data) => {
  if (data.intent === "permit_application" && data.fields?.property_size > 200) {
    return "Your application requires manual review because the property size exceeds the standard residential limit.";
  }

  if (data.intent === "grievance") {
    return "Your grievance has been registered and will be reviewed by the appropriate department.";
  }

  return data.explanation;
};
