import { z } from "zod";

export const registerSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, {
      message: "Username must contain at least 3 characters",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Please type a valid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
  gender: z
    .string({
      required_error: "Gender is required",
    }),
  bornDate: z
    .string({
      required_error: "Born date is required",
    }),
});

export const loginSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .optional(),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email()
    .optional(),
  password: z.string({
    required_error: "Password is required",
  }),
});
