import { z } from "zod";

const optionalUrl = (message: string) =>
  z.preprocess(
    (value) => {
      if (
        value === "" ||
        value === null ||
        value === undefined
      ) {
        return undefined;
      }

      return value;
    },

    z.string().url(message).optional()
  );

export const applyArtistSchema = z.object({
  phone: z
    .string()
    .min(
      10,
      "Please enter a valid phone number."
    )
    .max(
      15,
      "Phone number is too long."
    ),

  bio: z
    .string()
    .max(
      1000,
      "Bio should be less than 1000 characters."
    )
    .optional(),

  address: z
    .string()
    .min(
      2,
      "Please enter your complete address."
    )
    .max(
      550,
      "Address is too long."
    ),

  dob: z
  .string()
  .min(
    1,
    "Please select your date of birth."
  )
  .transform((value) => new Date(value)),

  instagram: optionalUrl(
    "Please enter a valid Instagram profile link."
  ),

  portfolio: optionalUrl(
    "Please enter a valid portfolio website link."
  ),

  profileImage: z
    .string()
    .url(
      "Please upload a valid profile image."
    )
    .optional(),
});

export type ApplyArtistInput =
  z.infer<typeof applyArtistSchema>;