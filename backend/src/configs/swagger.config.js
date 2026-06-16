import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "An Idea Tech — Backend API",
      version: "1.0.0",
      description: "Complete CMS + Public API documentation for An Idea Tech digital agency platform.",
      contact: {
        name: "An Idea Tech",
        email: "dev@anideatech.com",
      },
    },
    servers: [
      {
        url: process.env.API_BASE_URL || "http://localhost:5000/api/v1",
        description: "Development Server",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        ApiResponse: {
          type: "object",
          properties: {
            success: { type: "boolean" },
            message: { type: "string" },
            data: { type: "object", nullable: true },
            error: { type: "object", nullable: true },
          },
        },
        PaginatedResponse: {
          type: "object",
          properties: {
            data: { type: "array", items: {} },
            nextCursor: { type: "string", nullable: true },
            hasMore: { type: "boolean" },
          },
        },
      },
    },
    security: [{ BearerAuth: [] }],
    tags: [
      { name: "Auth",         description: "Authentication endpoints" },
      { name: "Home",         description: "Public home page aggregation" },
      { name: "Services",     description: "Agency services" },
      { name: "Projects",     description: "Case studies & projects" },
      { name: "Blogs",        description: "Blog posts" },
      { name: "Feeds",        description: "Company updates & announcements" },
      { name: "Testimonials", description: "Client testimonials" },
      { name: "Careers",      description: "Job listings & applications" },
      { name: "Contact",      description: "Contact & lead forms" },
      { name: "Admin",        description: "Admin CMS — all require Bearer token" },
    ],
  },
  apis: ["./src/routes/**/*.js"],
};

export const swaggerSpec = swaggerJSDoc(options);
