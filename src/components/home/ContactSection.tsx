import { useState } from "react";

const businessTypes = [
  "Restaurant",
  "Café",
  "Hotel",
  "Event Catering",
  "Corporate",
  "Other",
];

export function ContactSection() {
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
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section-padding bg-cream-warm">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="label-uppercase text-champagne mb-4 block">Get in Touch</span>
            <h2 className="heading-section text-foreground mb-4">
              Request Collaboration
            </h2>
            <p className="text-muted-foreground">
              Tell us about your business and we'll be in touch within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="label-uppercase text-foreground mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
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
                <label htmlFor="businessName" className="label-uppercase text-foreground mb-2 block">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
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
                <label htmlFor="email" className="label-uppercase text-foreground mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
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
                <label htmlFor="phone" className="label-uppercase text-foreground mb-2 block">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
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
              <label htmlFor="businessType" className="label-uppercase text-foreground mb-2 block">
                Type of Business
              </label>
              <select
                id="businessType"
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
              <label htmlFor="message" className="label-uppercase text-foreground mb-2 block">
                Message (Optional)
              </label>
              <textarea
                id="message"
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
        </div>
      </div>
    </section>
  );
}
