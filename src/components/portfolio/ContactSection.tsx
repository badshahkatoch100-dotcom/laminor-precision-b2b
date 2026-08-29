import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { chef } from "@/data/cv";

const telHref = (phone: string) => `tel:+91${phone.replace(/\s/g, "")}`;

const linkClass =
  "text-cream hover:text-champagne transition-colors break-words " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-burgundy">
      <div className="section-container">
        <Reveal className="max-w-3xl">
          <span className="label-uppercase text-champagne mb-4 block">Contact</span>
          <h2 className="heading-section text-cream">
            Open to professional opportunities.
          </h2>
          <div className="gold-line mt-6 mb-6" />
          <p className="text-body text-cream-warm/70">
            For roles, consulting or collaboration in flight catering, hospitality
            and high-volume production kitchens.
          </p>
        </Reveal>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-champagne/20 border border-champagne/20">
          <Reveal className="bg-burgundy p-8">
            <Mail className="w-5 h-5 text-champagne mb-4" strokeWidth={1.5} aria-hidden="true" />
            <span className="label-uppercase text-cream-warm/50 block mb-2">Email</span>
            <a href={`mailto:${chef.email}`} className={linkClass}>
              {chef.email}
            </a>
          </Reveal>

          <Reveal delay={60} className="bg-burgundy p-8">
            <Phone className="w-5 h-5 text-champagne mb-4" strokeWidth={1.5} aria-hidden="true" />
            <span className="label-uppercase text-cream-warm/50 block mb-2">Phone</span>
            <ul className="space-y-1.5">
              {chef.phones.map((phone) => (
                <li key={phone}>
                  <a href={telHref(phone)} className={`${linkClass} tabular`}>
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="bg-burgundy p-8">
            <MapPin className="w-5 h-5 text-champagne mb-4" strokeWidth={1.5} aria-hidden="true" />
            <span className="label-uppercase text-cream-warm/50 block mb-2">Location</span>
            <p className="text-cream">{chef.location}</p>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-12">
          <a
            href={`mailto:${chef.email}`}
            className="btn-gold w-full sm:w-auto"
          >
            Get In Touch
          </a>
        </Reveal>
      </div>
    </section>
  );
}
