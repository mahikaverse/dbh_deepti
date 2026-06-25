import { z } from "zod";

export const createArtworkSchema = z.object({
  title: z.string().min(3).max(100),

  description: z.string().min(10).max(3000),

  imageUrl: z.string().url(),

  category: z.enum([
    "SPIRITUAL",
    "NATURE",
    "PORTRAIT",
    "ABSTRACT",
    "LANDSCAPE",
    "SKETCH",
    "HERITAGE",
    "MODERN",
    "OTHER",
  ]),

  medium: z.string().optional(),

  width: z.number().positive().optional(),

  height: z.number().positive().optional(),

  price: z.number().positive(),

  frameAvailable: z.boolean().default(false),
});

export type CreateArtworkInput = z.infer<typeof createArtworkSchema>;