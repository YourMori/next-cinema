"use client";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NextTopLoader />
      <Toaster />
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};
