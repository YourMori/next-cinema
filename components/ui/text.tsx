import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("text-textPrimary", {
  variants: {
    size: {
      sm: "text-12px",
      base: "text-14px",
      md: "text-20px",
      lg: "text-48px",
    },
    weight: {
      regular: "font-regular",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    textColor: {
      primary: "text-textPrimary",
      secondary: "text-textSecondary",
      custom: "",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "regular",
    textColor: "primary",
  },
});

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {}

function Text({ className, size, weight, textColor, children, ...props }: TextProps) {
  return (
    <p className={cn(textVariants({ size, weight, textColor }), className)} {...props}>
      {children}
    </p>
  );
}

export { Text, textVariants };
