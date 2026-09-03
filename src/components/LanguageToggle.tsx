import { LANGUAGES, useI18n } from "@/i18n/I18nProvider";

interface LanguageToggleProps {
  className?: string;
}

/** Compact EN / ES switch. Applies instantly and persists across visits. */
export function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("common.languageLabel")}
      className={`inline-flex items-center border border-champagne/35 ${className}`}
    >
      {LANGUAGES.map(({ code, label }) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            aria-label={code === "es" ? t("common.switchToSpanish") : t("common.switchToEnglish")}
            className={`label-uppercase px-3 py-2 transition-colors duration-300
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne
                        ${
                          isActive
                            ? "bg-champagne text-burgundy"
                            : "text-cream-warm/70 hover:text-champagne"
                        }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
