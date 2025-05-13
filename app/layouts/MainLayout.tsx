"use client";

import { ChevronLeft, ChevronRight, Search, Bell, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage, Input, Button, Container } from "@/components/ui";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const canGoBack = typeof window !== "undefined" && window.history.length > 1;
  const canGoForward = false;

  return (
    <Container className="flex flex-col overflow-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 h-[44px] py-[44px] flex items-center justify-between">
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
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#BCBCBC]" />
            <Input
              placeholder="Search everything"
              className="pl-10 bg-[#2a2b2e] border-none text-white placeholder-[#BCBCBC] w-[300px] h-[36px] rounded-[6px]"
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
          <Avatar className="w-[24px] h-[24px] mr-[16px] cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </Container>
  );
};
