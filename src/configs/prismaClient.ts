import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["error", "warn"],
  errorFormat: "pretty",
  transactionOptions: {
    timeout: 10000,
  },
});

export default prisma;
