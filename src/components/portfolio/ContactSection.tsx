import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FadeIn, TextReveal, Magnetic } from "@/components/motion/Motion";
import { useI18n } from "@/i18n/I18nProvider";
import { ExportControls } from "@/components/ExportControls";

const telHref = (phone: string) => `tel:+91${phone.replace(/\s/g, "")}`;

const linkClass =
  "text-cream hover:text-champagne transition-colors break-words " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne";

export function ContactSection() {
  const { t, cv } = useI18n();
  const { chef } = cv;

  return (
    <section id="contact" className="section-padding bg-burgundy relative overflow-hidden">
      <div className="section-container relative">
        <div className="max-w-3xl">
          <FadeIn distance={12} duration={0.5}>
            <span className="label-uppercase text-champagne mb-4 block">
              {t("contact.eyebrow")}
            </span>
          </FadeIn>

          <TextReveal
            key={t("contact.title")}
            text={t("contact.title")}
            as="h2"
            className="heading-section text-cream"
          />

          <FadeIn delay={0.15}>
            <div className="gold-line mt-6 mb-6" />
            <p className="text-body text-cream-warm/70">{t("contact.intro")}</p>
          </FadeIn>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-champagne/20 border border-champagne/20">
          <FadeIn className="bg-burgundy p-8 transition-colors duration-500 hover:bg-burgundy-light">
            <Mail className="w-5 h-5 text-champagne mb-4" strokeWidth={1.5} aria-hidden="true" />
            <span className="label-uppercase text-cream-warm/50 block mb-2">
              {t("common.email")}
            </span>
            <a href={`mailto:${chef.email}`} className={linkClass}>
              {chef.email}
            </a>
          </FadeIn>

          <FadeIn delay={0.08} className="bg-burgundy p-8 transition-colors duration-500 hover:bg-burgundy-light">
            <Phone className="w-5 h-5 text-champagne mb-4" strokeWidth={1.5} aria-hidden="true" />
            <span className="label-uppercase text-cream-warm/50 block mb-2">
              {t("common.phone")}
            </span>
            <ul className="space-y-1.5">
              {chef.phones.map((phone) => (
                <li key={phone}>
                  <a href={telHref(phone)} className={`${linkClass} tabular`}>
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.16} className="bg-burgundy p-8 transition-colors duration-500 hover:bg-burgundy-light">
            <MapPin className="w-5 h-5 text-champagne mb-4" strokeWidth={1.5} aria-hidden="true" />
            <span className="label-uppercase text-cream-warm/50 block mb-2">
              {t("common.location")}
            </span>
            <p className="text-cream">{chef.location}</p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="mt-12">
          <Magnetic className="block sm:inline-block">
            <a href={`mailto:${chef.email}`} className="btn-gold group w-full sm:w-auto">
              {t("contact.cta")}
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>
          </Magnetic>
        </FadeIn>

        <FadeIn delay={0.24} className="mt-10 max-w-md">
          <span className="label-uppercase text-cream-warm/50 block mb-4">
            {t("export.groupLabel")}
          </span>
          <ExportControls variant="stacked" tone="light" />
        </FadeIn>
      </div>
    </section>
  );
}
