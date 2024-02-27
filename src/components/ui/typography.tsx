import { ReactNode } from "react";
import { cn } from "@/lib/utils.ts";

interface Props {
  className?: string;
  children: ReactNode;
}

export function H4({ className, children }: Props) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function P({ children }: Props) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}
