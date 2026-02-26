import { Link } from "react-router-dom";
import chefPortrait from "@/assets/chef-portrait.png";

interface ChefSectionProps {
  variant?: "compact" | "full";
}

export function ChefSection({ variant = "compact" }: ChefSectionProps) {
  return (
    <section className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Chef Portrait */}
          <div className="overflow-hidden">
            <img
              src={chefPortrait}
              alt="Laminor Head Pastry Chef"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Credibility Text */}
          <div>
            <span className="label-uppercase text-champagne mb-4 block">Leadership</span>
            <h2 className="heading-section text-foreground mb-8">
              Chef Led. International Experience.
            </h2>
            <div className="gold-line mb-8" />

            <div className="space-y-6">
              <p className="text-body text-foreground leading-relaxed">
                Professionally trained pastry chef with international experience across 
                hospitality, aviation, and cruise catering operations.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                Worked across the USA, Middle East, and India in high-pressure 
                production environments.
              </p>
              {variant === "full" && (
                <p className="text-body text-muted-foreground leading-relaxed">
                  Experience includes Princess Cruises, TajSATS Flight Catering, 
                  Air India Flight Catering Mumbai, and Starbucks.
                </p>
              )}
              <p className="text-body text-muted-foreground leading-relaxed">
                Specialized in precision pastry, consistency at scale, and quality 
                control for professional kitchens.
              </p>
            </div>

            <div className="mt-10">
              <Link to="/contact" className="btn-outline">
                Work With Laminor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
