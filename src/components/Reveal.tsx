import { ReactNode } from "react";
import { FadeIn } from "@/components/motion/Motion";

interface RevealProps {
  children: ReactNode;
  /** Delay in milliseconds. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "p" | "span";
  distance?: number;
}

/** Thin compatibility wrapper over the shared motion system. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  distance = 22,
}: RevealProps) {
  return (
    <FadeIn as={as} delay={delay / 1000} className={className} distance={distance}>
      {children}
    </FadeIn>
  );
}
