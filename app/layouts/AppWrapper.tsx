"use client";

import { MainLayout, Providers, Sidebar } from ".";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="flex min-h-screen">
        <Sidebar />
        <MainLayout>{children}</MainLayout>
      </div>
    </Providers>
  );
}
