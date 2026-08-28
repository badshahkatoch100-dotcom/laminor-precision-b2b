import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { certifications, education } from "@/data/cv";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding bg-cream-warm">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications & Training"
          title="Trained to international safety and management standards."
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {certifications.map((cert, index) => (
            <Reveal
              as="li"
              key={cert.title}
              delay={index * 40}
              className="bg-cream-warm px-6 py-7 sm:px-8"
            >
              <h3 className="text-foreground font-medium">{cert.title}</h3>
              {cert.org && (
                <p className="text-muted-foreground text-sm mt-1">{cert.org}</p>
              )}
            </Reveal>
          ))}
        </ul>

        {/* Education */}
        <div id="education" className="mt-20 pt-16 border-t border-border">
          <Reveal>
            <span className="label-uppercase text-champagne mb-4 block">Education</span>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
              <span className="heading-subsection text-champagne">{education.year}</span>
              <div>
                <h3 className="heading-subsection text-xl text-foreground">
                  {education.degree}
                </h3>
                <p className="text-muted-foreground mt-1">{education.institute}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
