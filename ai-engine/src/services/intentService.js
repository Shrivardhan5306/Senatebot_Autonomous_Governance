export const validateIntent = (intent) => {
  const allowed = [
    "permit_application",
    "grievance",
    "status_tracking",
    "information_request"
  ];

  return allowed.includes(intent);
};
