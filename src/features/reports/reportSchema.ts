import { z } from "zod";
import { ReportType } from "./types";

export const reportSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  type: z.nativeEnum(ReportType),
  coordinates: z.string(),
});
