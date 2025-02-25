import { Hono } from "hono";
import reportController from "./features/reports/reportController";
import userController from "./features/users/userController";
const app = new Hono();

// ROUTES
app.route("/api/v1/reports", reportController);
app.route("/api/v1/users", userController);

export default {
  fetch: app.fetch,
  port: 1234,
};
