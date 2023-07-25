import { z } from "zod";

export const registerSchema = z.object({
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
