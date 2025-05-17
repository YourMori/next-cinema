"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { OAuthButtons } from "./oAuthButtons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema, TFormLoginValues } from "./schemas";
import { FormInput } from "../ui";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

interface LoginFormProps {
  // onSuccess: () => void;
  onSwitch: () => void;
  onClose: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSwitch, onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const response = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!response?.ok) {
        throw Error();
      }

      toast.success("Вы успешно вошли в аккаунт");

      onClose?.();
    } catch (error) {
      console.error("Error [LOGIN]", error);
      toast.error("Не удалось войти в аккаунт");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <FormInput placeholder="Email" type="email" required {...form.register("email")} />
      <FormInput placeholder="Пароль" type="password" required {...form.register("password")} />

      <OAuthButtons />

      <Button type="submit" className="rounded-md">
        {form.formState.isSubmitting ? "Вход..." : "Войти"}
      </Button>

      <Button variant="ghost" type="button" className="rounded-md" onClick={onSwitch}>
        Создать аккаунт
      </Button>
    </form>
  );
};
