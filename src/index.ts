import { ApiException, fromHono } from "chanfana";
import { cors } from 'hono/cors'
import { Hono } from "hono";
import { tasksRouter } from "./endpoints/tasks/router";
import { contentsRouter} from "./endpoints/contents/router";
import { applicationsRouter} from "./endpoints/applications/router";
import { ApplicationCreateEndpoint } from "./endpoints/applications/applicationCreateOpenAPI";
import { ContentfulStatusCode } from "hono/utils/http-status";
import { DummyEndpoint } from "./endpoints/dummyEndpoint";

// Start a Hono app

const app = new Hono<{ Bindings: Env }>();

// Apply CORS middleware globally
app.use("/*", cors({
  origin: (origin: string | undefined) => {
    // Allow only *.svelte-3.pages.dev
    if (typeof origin === "string" && /https?:\/\/.+\.svelte-3\.pages\.dev$/.test(origin)) {
      return origin;
    }
    return ""; // Disallow other origins
  },
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

app.onError((err, c) => {
  if (err instanceof ApiException) {
    // If it's a Chanfana ApiException, let Chanfana handle the response
    return c.json(
      { success: false, errors: err.buildResponse() },
      err.status as ContentfulStatusCode,
    );
  }

  console.error("Global error handler caught:", err); // Log the error if it's not known

  // For other errors, return a generic 500 response
  return c.json(
    {
      success: false,
      errors: [{ code: 7000, message: "Internal Server Error" }],
    },
    500,
  );
});

// Setup OpenAPI registry
const openapi = fromHono(app, {
  docs_url: "/",
  schema: {
    info: {
      title: "My Awesome API",
      version: "2.0.0",
      description: "This is the documentation for my awesome API.",
    },
  },
});

// Register Tasks Sub router
openapi.route("/tasks", tasksRouter);

openapi.route("/contents", contentsRouter);

openapi.route("/applications", applicationsRouter);
// Register OpenAPI POST endpoint for applications
openapi.post("/applications", ApplicationCreateEndpoint);

// Register other endpoints
openapi.post("/dummy/:slug", DummyEndpoint);

export default openapi;
