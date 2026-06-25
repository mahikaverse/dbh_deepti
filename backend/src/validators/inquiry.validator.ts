import { z } from "zod";

export const createInquirySchema = z.object({
  artworkId: z.string().min(1),

  preferredFrame: z.string().optional(),

  preferredSize: z.string().optional(),

  message: z.string().max(1000).optional(),
});

export type CreateInquiryInput =
  z.infer<typeof createInquirySchema>;