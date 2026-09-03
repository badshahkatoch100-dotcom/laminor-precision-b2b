import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, en, type Dictionary } from "./ui";
import * as cvEn from "@/data/cv";
import * as cvEs from "@/data/cv.es";

export type Lang = "en" | "es";

export const LANGUAGES: { code: Lang; label: string; locale: string }[] = [
  { code: "en", label: "EN", locale: "en-US" },
  { code: "es", label: "ES", locale: "es-ES" },
];

const STORAGE_KEY = "site-lang";

/** Locale-aware CV content. Proper nouns stay untranslated inside the dictionaries. */
const cvByLang = {
  en: {
    chef: cvEn.chef,
    career: cvEn.career,
    development: cvEn.development,
    expertise: cvEn.expertise,
    skills: cvEn.skills,
    countries: cvEn.countries,
    environments: cvEn.environments,
    achievements: cvEn.achievements,
    certifications: cvEn.certifications,
    languages: cvEn.languages,
    education: cvEn.education,
    interests: cvEn.interests,
  },
  es: {
    chef: cvEs.chefEs,
    career: cvEs.careerEs,
    development: cvEs.developmentEs,
    expertise: cvEs.expertiseEs,
    skills: cvEs.skillsEs,
    countries: cvEs.countriesEs,
    environments: cvEs.environmentsEs,
    achievements: cvEs.achievementsEs,
    certifications: cvEs.certificationsEs,
    languages: cvEs.languagesEs,
    education: cvEs.educationEs,
    interests: cvEs.interestsEs,
  },
} as const;

export type CvContent = (typeof cvByLang)["en"];

type Vars = Record<string, string | number>;

interface I18nValue {
  lang: Lang;
  locale: string;
  setLang: (lang: Lang) => void;
  /** Dot-path lookup with English fallback and {placeholder} interpolation. */
  t: (path: string, vars?: Vars) => string;
  /** Locale-resolved dictionary (for arrays and nested objects). */
  d: Dictionary;
  cv: CvContent;
  formatNumber: (value: number, options?: Intl.NumberFormatOptions) => string;
  formatDate: (value: Date | string | number, options?: Intl.DateTimeFormatOptions) => string;
  formatRelativeTime: (value: number, unit: Intl.RelativeTimeFormatUnit) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

function resolve(source: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (acc, key) =>
        acc && typeof acc === "object" ? (acc as Record<string, unknown>)[key] : undefined,
      source
    );
}

function interpolate(template: string, vars?: Vars) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match
  );
}

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "es") return stored;
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — language still applies for this session */
    }
  }, []);

  const locale = lang === "es" ? "es-ES" : "en-US";
  const d = dictionaries[lang] ?? en;

  /* Keep document language and head metadata in sync with the selection. */
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = d.meta.title;
    const set = (selector: string, value: string) => {
      const el = document.head.querySelector<HTMLMetaElement>(selector);
      if (el) el.content = value;
    };
    set('meta[name="description"]', d.meta.description);
    set('meta[property="og:title"]', d.meta.title);
    set('meta[property="og:description"]', d.meta.description);
    set('meta[name="twitter:title"]', d.meta.title);
    set('meta[name="twitter:description"]', d.meta.description);
    const ogLocale = document.head.querySelector<HTMLMetaElement>('meta[property="og:locale"]');
    if (ogLocale) ogLocale.content = lang === "es" ? "es_ES" : "en_US";
  }, [lang, d]);

  const value = useMemo<I18nValue>(() => {
    const t = (path: string, vars?: Vars) => {
      const hit = resolve(d, path);
      const fallback = resolve(en, path);
      const raw = typeof hit === "string" ? hit : typeof fallback === "string" ? fallback : null;
      if (raw === null) {
        if (import.meta.env.DEV) console.warn(`[i18n] Missing translation key: ${path}`);
        return path;
      }
      return interpolate(raw, vars);
    };

    return {
      lang,
      locale,
      setLang,
      t,
      d,
      cv: cvByLang[lang],
      formatNumber: (v, options) => new Intl.NumberFormat(locale, options).format(v),
      formatDate: (v, options = { dateStyle: "long" }) =>
        new Intl.DateTimeFormat(locale, options).format(new Date(v)),
      formatRelativeTime: (v, unit) =>
        new Intl.RelativeTimeFormat(locale, { numeric: "auto" }).format(v, unit),
    };
  }, [lang, locale, setLang, d]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  return ctx;
}
