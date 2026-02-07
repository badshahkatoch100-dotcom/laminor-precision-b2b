import { Link } from "react-router-dom";
import { CalendarDays, Package, BarChart3, ClipboardList } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Weekly Supply",
    description: "Scheduled deliveries tailored to your service rhythm",
  },
  {
    icon: Package,
    title: "Custom Orders",
    description: "Bespoke creations for your unique menu requirements",
  },
  {
    icon: BarChart3,
    title: "Volume Consistency",
    description: "Reliable output from small batches to large events",
  },
  {
    icon: ClipboardList,
    title: "Clear Process",
    description: "Straightforward ordering with dedicated support",
  },
];

export function B2BSection() {
  return (
    <section className="section-padding bg-burgundy">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="label-uppercase text-champagne mb-4 block">For Partners</span>
            <h2 className="heading-section text-cream mb-6">
              Built for Professional Kitchens
            </h2>
            <p className="text-body text-cream-warm/70 mb-10 max-w-lg">
              Laminor partners with restaurants, hotels, cafés, and event caterers 
              who demand consistent quality and reliable service.
            </p>

            <Link
              to="/partnerships"
              className="inline-flex items-center justify-center px-8 py-4 
                         bg-champagne text-burgundy font-medium tracking-wide 
                         uppercase text-sm transition-all duration-300
                         hover:bg-champagne-light"
            >
              Become a Partner
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 border border-champagne/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-8 h-8 text-champagne mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-cream mb-2">{feature.title}</h3>
                <p className="text-cream-warm/60 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
