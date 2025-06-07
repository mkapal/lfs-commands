import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { cn } from "../util/tailwind";

export type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function Link({ className, ...props }: LinkProps) {
  return <a {...props} className={cn(" text-slate-900", className)} />;
}
