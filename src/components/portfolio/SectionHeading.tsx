import { Reveal } from "@/components/Reveal";

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
  return (
    <Reveal className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}>
      <span className="label-uppercase text-champagne mb-4 block">{eyebrow}</span>
      <h2
        className={`heading-section max-w-3xl ${
          tone === "dark" ? "text-foreground" : "text-cream"
        } ${centered ? "mx-auto" : ""}`}
      >
        {title}
      </h2>
      <div className={`gold-line mt-6 ${centered ? "mx-auto" : ""}`} />
      {intro && (
        <p
          className={`text-body mt-6 max-w-2xl ${centered ? "mx-auto" : ""} ${
            tone === "dark" ? "text-muted-foreground" : "text-cream-warm/70"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
