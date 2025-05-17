"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({ isOpen, onClose, children, className }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className={cn("bg-primary rounded-xl text-textPrimary p-4 w-full max-w-md", className)} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
