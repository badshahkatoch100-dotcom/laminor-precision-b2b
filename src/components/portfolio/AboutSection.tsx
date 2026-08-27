import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { chef, skills } from "@/data/cv";

const highlights = [
  "Bakery & Pastry",
  "Mass Food Production",
  "International Hospitality",
  "Kitchen Operations",
  "HACCP & Food Safety",
  "Cost Management",
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Professional Profile" title="A career built in production kitchens." />
            <Reveal delay={80}>
              <p className="text-body text-foreground leading-relaxed mb-6">
                {chef.profile}
              </p>
              <p className="text-body text-muted-foreground leading-relaxed mb-6">
                His work spans flight kitchens, cruise operations, international
                restaurants, luxury train hospitality, hotels and retail food
                operations — environments where consistency, food safety and volume
                are non-negotiable.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                Currently {chef.currentPosition.title} at {chef.currentPosition.org},{" "}
                {chef.currentPosition.location}.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                {highlights.map((item) => (
                  <li key={item} className="bg-cream px-6 py-8">
                    <span className="heading-subsection text-xl text-foreground block">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={180} className="mt-10">
              <h3 className="label-uppercase text-foreground/60 mb-4">Key Skills</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-border px-4 py-2 text-sm text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
