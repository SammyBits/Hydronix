import { Hono } from "hono";
import { Report as ModelReport } from "@prisma/client";
import { ReportType } from "./types";
import { getReportsAsync, registerReportAsync } from "./reportServices";
import { validator } from "hono/validator";
import { zValidator } from "@hono/zod-validator";

import { reportSchema } from "./reportSchema";

const reportController = new Hono();

reportController.get("/", async (c) => {
  const reports = await getReportsAsync();
  if (!reports) return c.json({ message: "No reports found" }, 404);

  return c.json(reports);
});

reportController.post("/", zValidator("json", reportSchema), async (c) => {
  try {
    const data = await c.req.json<Omit<ModelReport, "id">>();
    const report = await registerReportAsync(data);
    return c.json({ message: "Report created", report });
  } catch (error) {
    return c.json({ message: "Error creating report" }, 400);
  }
});

export default reportController;
