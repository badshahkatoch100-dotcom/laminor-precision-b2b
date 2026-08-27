import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { expertise } from "@/data/cv";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-padding bg-cream">
      <div className="section-container">
        <SectionHeading
          eyebrow="Culinary Expertise"
          title="Disciplines practised daily, at scale."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {expertise.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 40}
              className="bg-cream p-8 lg:p-10 transition-colors duration-300 hover:bg-cream-warm"
            >
              <span className="label-uppercase text-champagne block mb-4">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="heading-subsection text-xl text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
