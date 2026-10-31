import { z } from "zod";

const result = z.object({
  pk1: z.number(),
  serie: z.string(),
  movimiento: z.string(),
  fecha_hora: z.string(),
  ubicacion: z.string(),
  supplierName: z.string(),
});

export const smcData = z.object({
  data: z.array(result),
});
