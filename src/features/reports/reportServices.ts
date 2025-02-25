import { Report } from "@prisma/client";
import prisma from "../../configs/prismaClient";
import { Guid } from "guid-typescript";
export const registerReportAsync = (report: Omit<Report, "id">) => {
  return prisma.report.create({
    data: {
      ...report,
      reportId: Guid.create().toString(),
    },
    omit: {
      id: true,
      updatedAt: true,
      userId: true,
    },
    include: {
      User: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const getReportsAsync = () => {
  return prisma.report.findMany({
    omit: { updatedAt: true, id: true },
    orderBy: { createdAt: "desc" },
  });
};
