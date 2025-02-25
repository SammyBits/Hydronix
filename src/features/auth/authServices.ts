import { User } from "@prisma/client";
import prisma from "../../configs/prismaClient";

export const isValidUser = async (username: string): Promise<boolean> => {
  let user: User | null = null;
  console.log(username);
  try {
    user = await prisma.user.findFirst({
      where: { name: username },
    });
  } catch (error) {
    console.log(error);
  }
  return user !== null;
};
