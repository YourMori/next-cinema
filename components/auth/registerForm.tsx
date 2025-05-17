"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

interface RegisterFormProps {
  onSuccess: () => void;
  onSwitch: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!username) {
      setError("Введите имя пользователя");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      });

      const contentType = res.headers.get("content-type");
      const data = contentType?.includes("application/json") ? await res.json() : { message: await res.text() };

      if (!res.ok) {
        throw new Error(data.message || "Ошибка регистрации");
      }

      const signInRes = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (signInRes?.error) {
        throw new Error(signInRes.error);
      }

      onSuccess();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Registration error:", err);
      setError(err.message || "Ошибка сервера");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 py-2 bg-primary border-border text-textPrimary placeholder-text-secondaryLight h-9"
        autoComplete="username"
      />
      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="px-4 py-2 bg-primary border-border text-textPrimary placeholder-text-secondaryLight h-9"
        autoComplete="name"
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="px-4 py-2 bg-primary border-border text-textPrimary placeholder-text-secondaryLight h-9"
        autoComplete="new-password"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit" disabled={loading} className="rounded-md">
        {loading ? "Загрузка..." : "Зарегистрироваться"}
      </Button>

      <Button variant="ghost" type="button" onClick={onSwitch} className="rounded-md">
        Уже есть аккаунт?
      </Button>
    </form>
  );
};
