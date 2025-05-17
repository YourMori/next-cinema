"use client";

import React, { useState } from "react";
import { Dialog } from "../ui";
import { Button } from "@/components/ui/button";
import { LoginForm } from "./loginForm";
import { RegisterForm } from "./registerForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-6">{isLogin ? "Вход" : "Регистрация"}</h2>

        {isLogin ? (
          <LoginForm onSwitch={() => setIsLogin(false)} onClose={onClose} />
        ) : (
          <RegisterForm onSuccess={onClose} onSwitch={() => setIsLogin(true)} />
        )}

        <Button variant="default" onClick={onClose} className="mt-4 w-full rounded-md">
          Закрыть
        </Button>
      </div>
    </Dialog>
  );
};
