import { Hono } from "hono";
import reportController from "./features/reports/reportController";
const app = new Hono();

// ROUTES
app.route("/api/v1/reports", reportController);

export default {
  fetch: app.fetch,
  port: 1234,
};
