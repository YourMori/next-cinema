"use client";

import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";

export const OAuthButtons: React.FC = () => {
  const handleOAuthSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: "/", redirect: false });
  };

  return (
    <div className="flex gap-2">
      <Button
        type="button"
        variant="default"
        rounded={"md"}
        onClick={() => handleOAuthSignIn("github")}
        className="flex items-center gap-2"
      >
        <FaGithub className="w-6 h-6" />
      </Button>
      <Button
        type="button"
        variant="default"
        rounded={"md"}
        onClick={() => handleOAuthSignIn("google")}
        className="flex items-center gap-2"
      >
        <FaGoogle className="w-6 h-6" />
      </Button>
    </div>
  );
};
