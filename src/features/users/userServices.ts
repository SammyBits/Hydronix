import { Guid } from "guid-typescript";
import prisma from "../../configs/prismaClient";
import { User } from "@prisma/client";

export const registerUserAsync = (user: Omit<User, "id">) => {
  return prisma.user.create({
    data: {
      ...user,
      userId: Guid.create().toString(),
    },
    omit: {
      id: true,
      updatedAt: true,
    },
  });
};

export const getUsersAsync = () => {
  return prisma.user.findMany({
    omit: { updatedAt: true, id: true },
    orderBy: { createdAt: "desc" },
  });
};
