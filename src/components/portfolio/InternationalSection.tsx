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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <ul>
            {countries.map((country, index) => (
              <Reveal
                as="li"
                key={country.name}
                delay={index * 60}
                className="border-t border-champagne/20 py-7 last:border-b"
              >
                <h3 className="heading-subsection text-cream">{country.name}</h3>
                <p className="text-cream-warm/60 text-sm mt-2 leading-relaxed">
                  {country.detail}
                </p>
              </Reveal>
            ))}
          </ul>

          <div>
            <Reveal delay={80}>
              <h3 className="label-uppercase text-champagne mb-6">Environments</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-champagne/20 border border-champagne/20">
                {environments.map((env) => (
                  <li
                    key={env}
                    className="bg-burgundy px-6 py-7 text-cream-warm/85 text-[0.9375rem]
                               transition-colors duration-300 hover:text-champagne"
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
