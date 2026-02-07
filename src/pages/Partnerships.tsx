import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We discuss your menu, service style, and volume requirements to understand your needs.",
  },
  {
    number: "02",
    title: "Tasting Session",
    description: "Sample our products in person and provide feedback on selections for your establishment.",
  },
  {
    number: "03",
    title: "Custom Proposal",
    description: "Receive a tailored product list, pricing, and delivery schedule designed for your operation.",
  },
  {
    number: "04",
    title: "Ongoing Partnership",
    description: "Regular deliveries, seasonal updates, and dedicated support for your account.",
  },
];

const expectations = [
  "Minimum order quantities may apply based on delivery zone",
  "Weekly or bi-weekly delivery schedules available",
  "Custom orders require 72-hour advance notice",
  "All products arrive ready to serve or with simple finishing required",
  "Dedicated account manager for orders and support",
  "Seasonal menu updates and exclusive early access",
];

const Partnerships = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-burgundy">
          <div className="section-container">
            <span className="label-uppercase text-champagne mb-4 block">For Business</span>
            <h1 className="heading-display text-cream max-w-3xl">
              Partner with Laminor
            </h1>
            <p className="text-body text-cream-warm/70 mt-6 max-w-xl">
              We supply restaurants, cafés, hotels, and premium event caterers 
              with consistently exceptional pastry.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-cream">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="label-uppercase text-champagne mb-4 block">How It Works</span>
              <h2 className="heading-section text-foreground">
                Our Process
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`flex gap-8 py-10 ${
                    index !== processSteps.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="label-uppercase text-champagne font-medium min-w-[3rem]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="heading-subsection text-xl text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expectations Section */}
        <section className="section-padding bg-burgundy">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="label-uppercase text-champagne mb-4 block">What to Expect</span>
                <h2 className="heading-section text-cream mb-6">
                  Clear Terms, Reliable Service
                </h2>
                <p className="text-body text-cream-warm/70">
                  We believe in transparent partnerships. Here's what you can expect 
                  when working with Laminor.
                </p>
              </div>

              <div className="space-y-4">
                {expectations.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" />
                    <span className="text-cream-warm/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="section-padding bg-cream-warm">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="label-uppercase text-champagne mb-4 block">Our Partners</span>
              <h2 className="heading-section text-foreground">
                Who We Work With
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              {["Fine Dining", "Boutique Cafés", "Luxury Hotels", "Premium Events"].map((type) => (
                <div key={type} className="p-8 border border-border bg-card">
                  <span className="font-serif text-xl text-foreground">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-cream">
          <div className="section-container text-center">
            <h2 className="heading-section text-foreground mb-4">
              Ready to Begin?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Contact us to schedule a tasting and discuss how Laminor 
              can serve your establishment.
            </p>
            <Link to="/contact" className="btn-primary">
              Become a Partner
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partnerships;
