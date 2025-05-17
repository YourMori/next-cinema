"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, FormInput } from "./ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema, TFormRegisterValues } from "./auth/schemas";
import { toast } from "sonner";
import { updateUserInfo } from "@/app/api/actions/updateUserInfo";
import { User } from "next-auth";

interface ProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: User;
}

export const ProfileModal = ({ open, onOpenChange, data }: ProfileDialogProps) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: data.email || "",
      username: data.name || "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        username: data.username,
        password: data.password,
      });

      toast.success("Данные обновлены 📝", {
        icon: "✅",
      });
    } catch (error) {
      console.error("Error [UPDATE]", error);
      toast.error("Ошибка при обновлении данных", {
        icon: "❌",
      });
    }
  };

  return (
    <Dialog isOpen={open} onClose={() => onOpenChange(false)}>
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2">Редактировать профиль</h2>
        <p className="mb-4 text-sm text-textSecondary">Измените ваши данные</p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormInput placeholder="Name" autoComplete="name" {...form.register("username")} />
          <FormInput placeholder="Email" type="email" {...form.register("email")} />
          <FormInput placeholder="New password" type="password" {...form.register("password")} />
          <FormInput placeholder="Confirm password" type="password" {...form.register("confirmPassword")} />
          <div className="flex justify-end gap-2">
            <Button type="button" className="rounded-md" onClick={() => onOpenChange(false)}>
              Отмена
            </Button>
            <Button type="submit" className="rounded-md">
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};
