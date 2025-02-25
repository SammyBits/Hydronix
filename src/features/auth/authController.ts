import { sign } from "hono/jwt";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { authSchema } from "./authSchema";
import { isValidUser } from "./authServices";

const authController = new Hono();

authController.post("/login", zValidator("form", authSchema), async (c) => {
  try {
    const data = await c.req.formData();
    const username = data.get("username") as string;
    let user = await isValidUser(username);

    if (!user) {
      return c.json({ message: "Invalid username" }, 401);
    }

    const token = await sign({ userId: data }, process.env.JWT_SECRET!);

    return c.json({ token });
  } catch (error: any) {
    return c.json({ message: "Error logging in", error }, 400);
  }
});

export default authController;
