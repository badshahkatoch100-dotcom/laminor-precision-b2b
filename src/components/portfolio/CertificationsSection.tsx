import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "@/components/motion/Motion";
import { certifications, education } from "@/data/cv";

export function CertificationsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="section-padding bg-cream-warm">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications & Training"
          title="Trained to international safety and management standards."
        />

        <ul className="border-t border-border max-w-5xl">
          {certifications.map((cert, index) => {
            const isActive = activeIndex === index;
            return (
              <FadeIn
                as="li"
                key={cert.title}
                delay={index * 0.05}
                distance={14}
                className="border-b border-border"
              >
                <div
                  tabIndex={0}
                  role="group"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onFocus={() => setActiveIndex(index)}
                  onBlur={() => setActiveIndex(null)}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={`relative flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-8
                              px-1 sm:px-4 py-6 transition-colors duration-300 cursor-default
                              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne
                              ${isActive ? "bg-cream" : ""}`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-0 bottom-0 w-px bg-champagne transition-transform duration-500 origin-top
                                ${isActive ? "scale-y-100" : "scale-y-0"}`}
                  />
                  <h3
                    className={`text-[1.0625rem] font-medium leading-snug transition-transform duration-500
                                ${isActive ? "sm:translate-x-2 text-foreground" : "text-foreground"}`}
                  >
                    {cert.title}
                  </h3>
                  {cert.org && (
                    <p
                      className={`label-uppercase shrink-0 transition-colors duration-300 ${
                        isActive ? "text-champagne" : "text-muted-foreground"
                      }`}
                    >
                      {cert.org}
                    </p>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </ul>

        {/* Education */}
        <div id="education" className="mt-16 lg:mt-20 pt-14 border-t border-border">
          <FadeIn>
            <span className="label-uppercase text-champagne mb-5 block">Education</span>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10">
              <span className="font-serif text-3xl text-champagne tabular shrink-0">
                {education.year}
              </span>
              <div>
                <h3 className="heading-subsection text-foreground">
                  {education.degree}
                </h3>
                <p className="text-muted-foreground mt-2">{education.institute}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
