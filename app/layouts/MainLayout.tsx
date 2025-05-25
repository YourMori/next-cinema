"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Search, Bell, MessageSquare } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Input, Button, Container } from "@/components/ui";
import { AuthModal, UserDropdown } from "@/components/auth";
import { useSearchMovies } from "@/hooks";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const canGoBack = typeof window !== "undefined" && window.history.length > 1;
  const canGoForward = false;

  const [authOpen, setAuthOpen] = useState(false);

  const { status } = useSession();
  const prevStatus = useRef(status);

  const [searchQuery, setSearchQuery] = useState("");
  const { results, loading } = useSearchMovies(searchQuery);

  useEffect(() => {
    let toastMessage = "";

    if (searchParams.has("verified")) {
      toastMessage = "Почта успешно подтверждена!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, { duration: 3000 });
      }, 1000);
    }
  }, []);

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {searchQuery && (
              <div className="absolute top-[110%] left-0 w-[300px] bg-secondary border border-border rounded-md shadow-lg z-50">
                {loading ? (
                  <div className="p-3 text-sm text-primary">Загрузка...</div>
                ) : results.length > 0 ? (
                  results.map((movie) => (
                    <Link
                      href={`/movie/${movie.id}`}
                      key={movie.id}
                      className="block px-4 py-2 hover:bg-mutedHover/50 text-sm text-textPrimary"
                      onClick={() => setSearchQuery("")}
                    >
                      {movie.title} ({movie.release_year})
                    </Link>
                  ))
                ) : (
                  <div className="p-3 text-sm text-Primary">Ничего не найдено</div>
                )}
              </div>
            )}
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
