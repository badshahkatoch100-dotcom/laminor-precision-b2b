import { Award, Truck, Utensils, Leaf } from "lucide-react";

const trustPoints = [
  {
    icon: Utensils,
    title: "Professional Pastry Chefs",
    description: "Trained in classical French technique",
  },
  {
    icon: Award,
    title: "Consistent Production",
    description: "Same excellence, every single time",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "On schedule, perfectly packaged",
  },
  {
    icon: Leaf,
    title: "Premium Ingredients",
    description: "Sourced from trusted suppliers",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-uppercase text-champagne mb-4 block">Why Laminor</span>
          <div className="gold-line mx-auto" />
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {trustPoints.map((point, index) => (
            <div 
              key={point.title}
              className="text-center p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full 
                              bg-burgundy/5 text-burgundy mb-6">
                <point.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="heading-subsection text-xl text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
