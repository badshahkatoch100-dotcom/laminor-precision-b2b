import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { countries, environments } from "@/data/cv";

export function InternationalSection() {
  return (
    <section id="international" className="section-padding bg-burgundy">
      <div className="section-container">
        <SectionHeading
          eyebrow="International Experience"
          title="Three countries. Six hospitality environments."
          tone="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-px">
            {countries.map((country, index) => (
              <Reveal
                key={country.name}
                delay={index * 60}
                className="border-t border-champagne/20 py-8 last:border-b"
              >
                <h3 className="heading-subsection text-cream mb-2">{country.name}</h3>
                <p className="text-cream-warm/60 text-sm">{country.detail}</p>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal delay={80}>
              <h3 className="label-uppercase text-champagne mb-6">Environments</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {environments.map((env) => (
                  <li
                    key={env}
                    className="border border-champagne/20 px-5 py-6 text-cream-warm/80
                               transition-colors duration-300 hover:border-champagne/50"
                  >
                    {env}
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
