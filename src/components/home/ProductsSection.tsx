import { Link } from "react-router-dom";
import productCake from "@/assets/product-cake.jpg";
import productCheesecake from "@/assets/product-cheesecake.jpg";
import productTart from "@/assets/product-tart.jpg";

const products = [
  {
    name: "Gâteaux",
    subtitle: "Signature Cakes",
    image: productCake,
  },
  {
    name: "Cheesecakes",
    subtitle: "Classic & Contemporary",
    image: productCheesecake,
  },
  {
    name: "Tartes",
    subtitle: "French Pies & Tarts",
    image: productTart,
  },
];

export function ProductsSection() {
  return (
    <section className="section-padding bg-cream-warm">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-uppercase text-champagne mb-4 block">Our Creations</span>
          <h2 className="heading-section text-foreground mb-4">
            Artisanal Excellence
          </h2>
          <div className="gold-line mx-auto" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="group relative overflow-hidden bg-burgundy animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="heading-subsection text-cream mb-1">{product.name}</h3>
                <p className="text-cream-warm/70 text-sm">{product.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/products"
            className="btn-outline"
          >
            View Full Product Range
          </Link>
        </div>
      </div>
    </section>
  );
}
