import React from "react";
import { cn } from "@/lib/utils";

function Container({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-[40px]", className)} {...props}>
      {children}
    </div>
  );
}

export { Container };
