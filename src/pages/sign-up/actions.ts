import { z } from "zod";

const loginSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }).trim(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .trim(),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm password must be at least 8 characters." })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export async function signUp(previousState: any, formData: FormData) {
  console.log("Form data submitted:", Object.fromEntries(formData));
}
