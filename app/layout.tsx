import type { Metadata } from "next";
import "./globals.css";
import { MainLayout, Sidebar } from "./layouts";

export const metadata: Metadata = {
  title: "Mori Cinema",
  description: "Movie platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-primary text-textPrimary font-lora font-14px tracking-[0.06em]">
        {/* Контейнер для сайдбара и основного контента */}
        <div className="flex min-h-screen">
          <Sidebar />
          {/* Основной контент */}
          <MainLayout>{children}</MainLayout>
        </div>
      </body>
    </html>
  );
}
