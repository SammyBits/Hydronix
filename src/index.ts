import { Hono } from "hono";
import reportController from "./features/reports/reportController";
import userController from "./features/users/userController";
import authController from "./features/auth/authController";
const app = new Hono();

// ROUTES
app.route("/api/v1/reports", reportController);
app.route("/api/v1/users", userController);
app.route("/api/v1/auth", authController);

export default {
  fetch: app.fetch,
  port: 1234,
};
