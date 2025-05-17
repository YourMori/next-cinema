"use client";

import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Search, Bell, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Input, Button, Container } from "@/components/ui";
import { AuthModal, UserDropdown } from "@/components/auth";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const canGoBack = typeof window !== "undefined" && window.history.length > 1;
  const canGoForward = false;

  const [authOpen, setAuthOpen] = React.useState(false);

  const { status } = useSession();
  const prevStatus = useRef(status);

  useEffect(() => {
    if (prevStatus.current === "authenticated" && status === "unauthenticated") {
      toast.success("Вы вышли из аккаунта");
    }
    prevStatus.current = status;
  }, [status]);

  return (
    <Container className="flex flex-col w-full">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-primary pt-[44px] pb-[22px] mb-[22px] border-b border-border flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            rounded={"full"}
            className={cn("p-2", canGoBack ? "text-textPrimary" : "text-textSecondary")}
            onClick={() => canGoBack && router.back()}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            rounded={"full"}
            className={cn("p-2", canGoForward ? "text-textPrimary" : "text-textSecondary")}
            onClick={() => canGoForward && router.forward()}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondaryLight" />
            <Input
              placeholder="Search everything"
              className="pl-12 bg-primary border-border text-textPrimary placeholder-text-secondaryLight w-[300px] h-[36px] rounded-xl"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="p-2 text-white">
            <MessageSquare className="w-5 h-5" />
          </Button>
          <Button variant="ghost" className="p-2 text-white">
            <Bell className="w-5 h-5" />
          </Button>

          {/* Dropdown Avatar */}
          <UserDropdown onSignIn={() => setAuthOpen(true)} onSignOut={() => console.log("Signed out")} />
        </div>
      </header>

      {/* Main content */}
      <main className="overflow-auto min-w-full">{children}</main>

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </Container>
  );
};
