import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { career } from "@/data/cv";

export function CareerSection() {
  const entries = [...career].reverse();

  return (
    <section id="experience" className="section-padding bg-cream-warm">
      <div className="section-container">
        <SectionHeading
          eyebrow="Career Journey"
          title="Two decades across kitchens, kitchens at altitude and kitchens at sea."
          intro="From hotel kitchens in Hyderabad to flight catering in Mumbai — a documented progression through bakery, pastry and high-volume production."
        />

        <ol className="relative max-w-4xl border-l border-border pl-6 sm:pl-10">
          {entries.map((entry, index) => (
            <Reveal
              as="li"
              key={`${entry.org}-${entry.period}`}
              delay={index * 50}
              className="relative pb-12 last:pb-0"
            >
              <span
                aria-hidden="true"
                className={`absolute -left-[31px] sm:-left-[47px] top-2 w-3 h-3 rotate-45 ${
                  entry.current ? "bg-champagne" : "bg-border"
                }`}
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
                <span className="label-uppercase text-champagne sm:w-32 shrink-0 mb-2 sm:mb-0">
                  {entry.period}
                </span>
                <div>
                  <h3 className="heading-subsection text-xl text-foreground">
                    {entry.org}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{entry.location}</p>
                  <p className="text-foreground mt-3 font-medium">{entry.title}</p>
                  <ul className="mt-2 space-y-1">
                    {entry.points.map((point) => (
                      <li key={point} className="text-muted-foreground text-sm leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
