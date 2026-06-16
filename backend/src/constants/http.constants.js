export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
};

export const ERROR_CODES = {
  VALIDATION_ERROR: "VALIDATION_ERROR",
  AUTH_ERROR: "AUTH_ERROR",
  NOT_FOUND: "NOT_FOUND",
  CONFLICT: "CONFLICT",
  FORBIDDEN: "FORBIDDEN",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  UPLOAD_ERROR: "UPLOAD_ERROR",
};

export const AGENCY_SECTION_CONTENT = {
  quote: "We don't deliver projects and disappear. We build the system, then stay long enough to make sure it works.",
  description: [
    "A lot of our clients came to us after another agency built something and left. The site looked fine on launch day. Six months in, something stopped working, the agency wasn't answering calls, and the client was paying someone else to figure out how it was built.",
    "That's the part we wanted to fix. We deliver the project and then support your growth for as long as you want us around — dashboards, real numbers, regular discussions, consulting on what you actually need next. AIT isn't another agency. We're a growth partner. Most of our oldest clients are still with us four or five years later for that reason."
  ],
  features: [
    {
      title: "An AMC that's actually used.",
      description: "Most agency AMCs are a line on an invoice. Ours is a working contract — small monthly retainer, real response times, and a person on our side who knows your project."
    },
    {
      title: "Same dashboard, same view.",
      description: "You see what we see. Tasks, blockers, decisions. We don't email status updates because the dashboard is the status update."
    },
    {
      title: "Monthly review calls.",
      description: "Not a report we mail you. A call where we go through what shipped, what didn't, and what your business needs next. Once a month, every month, for as long as you're with us."
    },
    {
      title: "A team that doesn't churn.",
      description: "The people who built your project are the same people who maintain it. You're not handed off to a junior support person after launch."
    }
  ],
  footer: "This is the part most clients tell us they wish their last agency had done.",
  footerLinkText: "See how we work →",
  footerLink: "/how-we-work"
};
