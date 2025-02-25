import { Hono } from "hono";
import { User as ModelUser } from "@prisma/client";
import { getUsersAsync, registerUserAsync } from "./userServices";
import { zValidator } from "@hono/zod-validator";
import { userSchema } from "./userSchema";
const userController = new Hono();

userController.get("/", async (c) => {
  const users = await getUsersAsync();
  if (!users) return c.json({ message: "No users found" }, 404);

  return c.json(users);
});

userController.post("/", zValidator("json", userSchema), async (c) => {
  try {
    const data = await c.req.json<Omit<ModelUser, "id">>();
    console.log(data);
    const user = await registerUserAsync(data);
    return c.json({ message: "User created", user });
  } catch (error) {
    return c.json({ message: "Error creating user" }, 400);
  }
});

export default userController;
