import { z } from "zod";

export const passwordSchemas = z.string().min(6, { message: "Введите пароль" });

export const formLoginSchema = z.object({
  email: z.string().email({ message: "Введите почту" }),
  password: passwordSchemas,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      username: z.string().min(2, { message: "Введите имя" }),
      confirmPassword: passwordSchemas,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
