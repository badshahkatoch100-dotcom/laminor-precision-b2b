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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Professional Profile"
              title="A career built in production kitchens."
            />
            <Reveal delay={80} className="space-y-6">
              <p className="text-body text-foreground">{chef.profile}</p>
              <p className="text-body text-muted-foreground">
                His work spans flight kitchens, cruise operations, international
                restaurants, luxury train hospitality, hotels and retail food
                operations — environments where consistency, food safety and volume
                are non-negotiable.
              </p>

              <blockquote className="border-l-2 border-champagne pl-6 py-1">
                <p className="font-serif text-xl md:text-2xl leading-snug text-foreground">
                  Currently {chef.currentPosition.title} at{" "}
                  {chef.currentPosition.org}.
                </p>
                <footer className="text-sm text-muted-foreground mt-2">
                  {chef.currentPosition.location}
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <h3 className="label-uppercase text-muted-foreground mb-5">
                Core Disciplines
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="bg-cream px-6 py-7 transition-colors duration-300 hover:bg-cream-warm"
                  >
                    <span className="heading-card text-foreground block">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={180} className="mt-12">
              <h3 className="label-uppercase text-muted-foreground mb-5">Key Skills</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-border px-4 py-2 text-sm text-muted-foreground
                               transition-colors duration-300 hover:border-champagne hover:text-foreground"
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
