"use client";

import React from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FormInput } from "../ui";
import { formRegisterSchema, TFormRegisterValues } from "./schemas";
import { registerUser } from "@/app/api/actions/registerUser";

interface RegisterFormProps {
  onClose: () => void;
  onSwitch: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onClose, onSwitch }) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
      });

      toast.success("Вы успешно зарегистрировались! Подтвердите вашу почту.");

      onClose?.();
    } catch (e) {
      toast.error("Неверный email или пароль");
      console.log("Error register form", e);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <FormInput placeholder="Email" type="email" required {...form.register("email")} />
      <FormInput placeholder="Username" type="text" required {...form.register("username")} />
      <FormInput placeholder="New password" type="password" {...form.register("password")} />
      <FormInput placeholder="Confirm password" type="password" {...form.register("confirmPassword")} />

      <Button type="submit" className="rounded-md">
        Зарегистрироваться
      </Button>

      <Button variant="ghost" type="button" className="rounded-md" onClick={onSwitch}>
        Уже есть аккаунт?
      </Button>
    </form>
  );
};
