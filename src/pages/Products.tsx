import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import productCake from "@/assets/product-cake.jpg";
import productCheesecake from "@/assets/product-cheesecake.jpg";
import productTart from "@/assets/product-tart.jpg";

const categories = [
  {
    name: "Gâteaux",
    subtitle: "Signature Cakes",
    description: "Rich, layered creations from classic chocolate to contemporary flavor profiles.",
    image: productCake,
    items: ["Chocolate Fondant", "Opera Cake", "Fraisier", "Black Forest", "Mille-Feuille"],
  },
  {
    name: "Cheesecakes",
    subtitle: "Classic & Contemporary",
    description: "From traditional New York style to innovative seasonal variations.",
    image: productCheesecake,
    items: ["New York Classic", "Basque Burnt", "Japanese Soufflé", "Caramel Sea Salt", "Berry Swirl"],
  },
  {
    name: "Tartes",
    subtitle: "French Pies & Tarts",
    description: "Buttery crusts filled with seasonal fruits, rich ganaches, and silky custards.",
    image: productTart,
    items: ["Tarte Tatin", "Lemon Tart", "Chocolate Ganache", "Mixed Berry", "Pear Frangipane"],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-burgundy">
          <div className="section-container">
            <span className="label-uppercase text-champagne mb-4 block">Our Creations</span>
            <h1 className="heading-display text-cream max-w-3xl">
              Product Catalogue
            </h1>
            <p className="text-body text-cream-warm/70 mt-6 max-w-xl">
              Each creation is crafted for professional service—portioned, packaged, 
              and ready for your kitchen.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-cream">
          <div className="section-container">
            <div className="space-y-24">
              {categories.map((category, index) => (
                <div 
                  key={category.name}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative overflow-hidden bg-burgundy aspect-[4/3]">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="label-uppercase text-champagne mb-2 block">
                      {category.subtitle}
                    </span>
                    <h2 className="heading-section text-foreground mb-4">
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      {category.description}
                    </p>

                    <div className="border-t border-border pt-6">
                      <span className="label-uppercase text-foreground/60 mb-4 block">
                        Selection Includes
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {category.items.map((item) => (
                          <li 
                            key={item}
                            className="text-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-24 pt-16 border-t border-border">
              <h3 className="heading-subsection text-foreground mb-4">
                Request the Full Catalogue
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Our complete product list includes seasonal specials, sizing options, 
                and wholesale pricing for qualified partners.
              </p>
              <Link to="/contact" className="btn-primary">
                Request Product List
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
