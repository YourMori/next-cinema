import React from "react";
import { cn } from "@/lib/utils"; // если используешь clsx/tailwind-merge

interface DetailCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const DetailCard: React.FC<DetailCardProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("bg-secondary rounded-xl shadow-md p-6", className)} {...props}>
      {children}
    </div>
  );
};
