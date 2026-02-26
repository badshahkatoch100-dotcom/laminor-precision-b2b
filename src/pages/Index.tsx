import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ChefSection } from "@/components/home/ChefSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { B2BSection } from "@/components/home/B2BSection";
import { QualitySection } from "@/components/home/QualitySection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ProductsSection />
        <B2BSection />
        <QualitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
