import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { CareerSection } from "@/components/portfolio/CareerSection";
import { ExpertiseSection } from "@/components/portfolio/ExpertiseSection";
import { InternationalSection } from "@/components/portfolio/InternationalSection";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { LanguagesSection } from "@/components/portfolio/LanguagesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { chef, career, education, languages } from "@/data/cv";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: chef.name,
  jobTitle: chef.role,
  email: `mailto:${chef.email}`,
  telephone: chef.phones.map((p) => `+91${p.replace(/\s/g, "")}`),
  address: { "@type": "PostalAddress", addressLocality: "Barcelona", addressCountry: "ES" },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.institute },
  knowsLanguage: languages.map((l) => l.name),
  hasOccupation: career.map((c) => ({
    "@type": "Occupation",
    name: c.title,
    occupationLocation: { "@type": "Place", name: c.location },
  })),
};

const Index = () => (
  <div className="min-h-screen bg-background">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <ExpertiseSection />
      <InternationalSection />
      <AchievementsSection />
      <CertificationsSection />
      <LanguagesSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
