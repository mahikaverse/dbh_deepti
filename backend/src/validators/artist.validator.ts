import { z } from "zod";

export const applyArtistSchema = z.object({
  phone: z.string().min(10).max(15),

  bio: z.string().max(1000).optional(),

  address: z.string().min(10).max(500),

  dob: z.coerce.date(),

  instagram: z.string().url().optional(),

  portfolio: z.string().url().optional(),

  profileImage: z.string().url().optional(),
});

export type ApplyArtistInput = z.infer<typeof applyArtistSchema>;