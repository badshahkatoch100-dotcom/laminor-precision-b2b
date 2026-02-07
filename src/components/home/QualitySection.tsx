const qualities = [
  {
    number: "01",
    title: "Controlled Recipes",
    description: "Each creation follows precise specifications developed through rigorous testing.",
  },
  {
    number: "02",
    title: "Precise Baking",
    description: "Temperature, timing, and technique monitored at every stage of production.",
  },
  {
    number: "03",
    title: "Quality Checks",
    description: "Multiple inspection points ensure consistent excellence before delivery.",
  },
];

export function QualitySection() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-uppercase text-champagne mb-4 block">Our Process</span>
          <h2 className="heading-section text-foreground mb-4">
            Discipline in Every Detail
          </h2>
          <div className="gold-line mx-auto" />
        </div>

        {/* Qualities */}
        <div className="max-w-4xl mx-auto">
          {qualities.map((quality, index) => (
            <div 
              key={quality.number}
              className={`flex gap-8 py-10 animate-fade-in ${
                index !== qualities.length - 1 ? "border-b border-border" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="label-uppercase text-champagne font-medium min-w-[3rem]">
                {quality.number}
              </span>
              <div>
                <h3 className="heading-subsection text-xl text-foreground mb-2">
                  {quality.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {quality.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
