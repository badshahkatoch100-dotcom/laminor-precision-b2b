import { useI18n } from "@/i18n/I18nProvider";

export function Footer() {
  const { t, cv } = useI18n();
  const { chef } = cv;

  return (
    <footer className="bg-burgundy border-t border-champagne/20 text-cream-warm">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-cream">{chef.name}</p>
            <p className="label-uppercase text-champagne/80 mt-2">
              {chef.role} · {chef.location}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-sm">
            <a
              href={`mailto:${chef.email}`}
              className="text-cream-warm/70 hover:text-champagne transition-colors"
            >
              {chef.email}
            </a>
            <a
              href={`tel:+91${chef.phones[0].replace(/\s/g, "")}`}
              className="text-cream-warm/70 hover:text-champagne transition-colors"
            >
              {chef.phones[0]}
            </a>
          </div>
        </div>
        <p className="text-cream-warm/40 text-xs mt-10">
          {t("footer.rights", {
            year: new Date().getFullYear(),
            name: chef.name,
          })}
        </p>
      </div>
    </footer>
  );
}
