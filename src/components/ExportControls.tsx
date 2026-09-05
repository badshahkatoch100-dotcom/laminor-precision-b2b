import { Download, Printer } from "lucide-react";
import { toast } from "sonner";
import { usePrint } from "@/hooks/use-print";
import { useI18n } from "@/i18n/I18nProvider";

interface ExportControlsProps {
  /** `compact` = header/toolbar chips, `stacked` = full-width buttons (mobile menu, contact). */
  variant?: "compact" | "stacked";
  tone?: "light" | "dark";
  onAction?: () => void;
  className?: string;
}

export function ExportControls({
  variant = "compact",
  tone = "light",
  onAction,
  className = "",
}: ExportControlsProps) {
  const { t, cv, lang } = useI18n();
  const fileTitle = `${cv.chef.name.replace(/\s+/g, "_")}_CV_${lang.toUpperCase()}`;
  const print = usePrint(fileTitle);

  const run = (mode: "pdf" | "print") => {
    onAction?.();
    toast(t(mode === "pdf" ? "export.pdfToast" : "export.printToast"));
    /* Give the toast time to close so it never lands in the export. */
    window.setTimeout(() => void print(), 350);
  };

  if (variant === "stacked") {
    return (
      <div className={`no-print flex flex-col gap-3 ${className}`}>
        <button type="button" onClick={() => run("pdf")} className="btn-gold w-full">
          {t("export.pdf")}
        </button>
        <button
          type="button"
          onClick={() => run("print")}
          className={tone === "light" ? "btn-ghost-light w-full" : "btn-ghost w-full"}
        >
          {t("export.print")}
        </button>
      </div>
    );
  }

  const base =
    tone === "light"
      ? "border-champagne/50 text-champagne hover:bg-champagne hover:text-burgundy"
      : "border-border text-foreground hover:border-champagne hover:text-champagne";

  return (
    <div
      className={`no-print flex items-center gap-2 ${className}`}
      role="group"
      aria-label={t("export.groupLabel")}
    >
      <button
        type="button"
        onClick={() => run("pdf")}
        title={t("export.pdf")}
        aria-label={t("export.pdfAria")}
        className={`inline-flex items-center gap-2 border px-3 py-2 label-uppercase transition-colors duration-300
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne ${base}`}
      >
        <Download className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="hidden 2xl:inline">{t("export.pdf")}</span>
      </button>
      <button
        type="button"
        onClick={() => run("print")}
        title={t("export.print")}
        aria-label={t("export.printAria")}
        className={`inline-flex items-center gap-2 border px-3 py-2 label-uppercase transition-colors duration-300
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne ${base}`}
      >
        <Printer className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="sr-only">{t("export.print")}</span>
      </button>
    </div>
  );
}
