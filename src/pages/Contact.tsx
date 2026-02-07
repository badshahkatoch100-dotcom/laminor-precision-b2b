import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/home/ContactSection";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-burgundy">
          <div className="section-container">
            <span className="label-uppercase text-champagne mb-4 block">Contact</span>
            <h1 className="heading-display text-cream max-w-3xl">
              Let's Work Together
            </h1>
            <p className="text-body text-cream-warm/70 mt-6 max-w-xl">
              Whether you're ready to place an order or want to learn more about 
              partnering with Laminor, we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="section-padding bg-cream">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="heading-subsection text-foreground mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-burgundy/5 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-burgundy" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="label-uppercase text-foreground/60 block mb-1">Email</span>
                      <a href="mailto:info@laminor.com" className="text-foreground hover:text-champagne transition-colors">
                        info@laminor.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-burgundy/5 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-burgundy" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="label-uppercase text-foreground/60 block mb-1">Phone</span>
                      <a href="tel:+15551234567" className="text-foreground hover:text-champagne transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-burgundy/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-burgundy" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="label-uppercase text-foreground/60 block mb-1">Location</span>
                      <p className="text-foreground">
                        123 Artisan Avenue<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="label-uppercase text-foreground/60 mb-4">Business Hours</h3>
                  <p className="text-foreground">
                    Monday – Friday<br />
                    7:00 AM – 5:00 PM
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Deliveries available seven days a week
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2 bg-cream-warm p-8 lg:p-12">
                <h2 className="heading-subsection text-foreground mb-8">Request Collaboration</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Inline contact form for the contact page
import { useState } from "react";

const businessTypes = [
  "Restaurant",
  "Café",
  "Hotel",
  "Event Catering",
  "Corporate",
  "Other",
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="label-uppercase text-foreground mb-2 block">
            Your Name
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border 
                       focus:border-champagne focus:ring-1 focus:ring-champagne 
                       outline-none transition-colors text-foreground"
          />
        </div>
        <div>
          <label htmlFor="contact-businessName" className="label-uppercase text-foreground mb-2 block">
            Business Name
          </label>
          <input
            type="text"
            id="contact-businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border 
                       focus:border-champagne focus:ring-1 focus:ring-champagne 
                       outline-none transition-colors text-foreground"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-email" className="label-uppercase text-foreground mb-2 block">
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border 
                       focus:border-champagne focus:ring-1 focus:ring-champagne 
                       outline-none transition-colors text-foreground"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="label-uppercase text-foreground mb-2 block">
            Phone
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card border border-border 
                       focus:border-champagne focus:ring-1 focus:ring-champagne 
                       outline-none transition-colors text-foreground"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-businessType" className="label-uppercase text-foreground mb-2 block">
          Type of Business
        </label>
        <select
          id="contact-businessType"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-card border border-border 
                     focus:border-champagne focus:ring-1 focus:ring-champagne 
                     outline-none transition-colors text-foreground appearance-none
                     cursor-pointer"
        >
          <option value="">Select your business type</option>
          {businessTypes.map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="label-uppercase text-foreground mb-2 block">
          Message (Optional)
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-card border border-border 
                     focus:border-champagne focus:ring-1 focus:ring-champagne 
                     outline-none transition-colors text-foreground resize-none"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full btn-primary"
        >
          Request Collaboration
        </button>
      </div>
    </form>
  );
}

export default Contact;
