import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChefSection } from "@/components/home/ChefSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-burgundy">
          <div className="section-container">
            <span className="label-uppercase text-champagne mb-4 block">About</span>
            <h1 className="heading-display text-cream max-w-3xl">
              Craftsmanship Born from Discipline
            </h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-cream">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="gold-line mb-8" />
              <p className="text-body text-foreground mb-8 leading-relaxed">
                Laminor was founded on a simple principle: professional kitchens deserve 
                pastry that meets their exacting standards. Every creation that leaves 
                our atelier is the result of precise technique, premium ingredients, 
                and unwavering attention to detail.
              </p>
              <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                Our team of pastry chefs brings decades of combined experience from 
                leading establishments across Europe and North America. We understand 
                the demands of high-volume service without compromising on quality.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                From intimate cafés to five-star hotels, we partner with establishments 
                that share our commitment to excellence. Each relationship is built on 
                trust, consistency, and a mutual respect for the craft.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-cream-warm">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="label-uppercase text-champagne mb-4 block">Our Values</span>
              <h2 className="heading-section text-foreground">
                The Laminor Standard
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Precision",
                  description: "Every measurement, every temperature, every timing—controlled and consistent.",
                },
                {
                  title: "Integrity",
                  description: "Premium ingredients with transparent sourcing. No shortcuts, no substitutions.",
                },
                {
                  title: "Reliability",
                  description: "Your reputation depends on consistency. So does ours.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center p-8">
                  <h3 className="heading-subsection text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-burgundy">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="label-uppercase text-champagne mb-4 block">Our Team</span>
              <h2 className="heading-section text-cream mb-8">
                Chef-Led Excellence
              </h2>
              <p className="text-body text-cream-warm/70 mb-8">
                Our culinary team is led by pastry professionals trained in classical 
                French technique, with experience in Michelin-starred restaurants and 
                luxury hotels around the world.
              </p>
              <p className="text-cream-warm/60">
                Every member of our production team shares a commitment to the 
                highest standards of craftsmanship and professionalism.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
