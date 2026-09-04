import { motion, useReducedMotion } from "motion/react";
import { FadeIn, TextReveal, EASE } from "@/components/motion/Motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const centered = align === "center";
  const reduce = useReducedMotion();

  return (
    <div className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}>
      <FadeIn distance={12} duration={0.5}>
        <span className="label-uppercase text-champagne mb-4 block">{eyebrow}</span>
      </FadeIn>

      <TextReveal
        key={title}
        text={title}
        as="h2"
        className={`heading-section max-w-3xl ${
          tone === "dark" ? "text-foreground" : "text-cream"
        } ${centered ? "mx-auto" : ""}`}
      />

      <motion.div
        aria-hidden="true"
        className={`h-px w-16 bg-accent mt-6 origin-left ${centered ? "mx-auto" : ""}`}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
      />

      {intro && (
        <FadeIn delay={0.15}>
          <p
            className={`text-body mt-6 max-w-2xl ${centered ? "mx-auto" : ""} ${
              tone === "dark" ? "text-muted-foreground" : "text-cream-warm/70"
            }`}
          >
            {intro}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
