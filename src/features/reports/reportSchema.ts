import { z } from "zod";
import { ReportType } from "./types";

export const reportSchema = z.object({
  report: z.object({
    userId: z.string(),
    title: z.string(),
    description: z.string().optional(),
    type: z.nativeEnum(ReportType),
    coordinates: z.string(),
  }),
});
