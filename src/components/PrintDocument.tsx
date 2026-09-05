import { useI18n } from "@/i18n/I18nProvider";

/**
 * Print-only cover header and running footer. Hidden on screen; laid out by the
 * print stylesheet so every exported page carries the document title.
 */
export function PrintDocument() {
  const { t, cv, formatDate } = useI18n();
  const { chef } = cv;

  return (
    <>
      <header className="print-only print-masthead" aria-hidden="true">
        <div>
          <p className="print-masthead-name">{chef.name}</p>
          <p className="print-masthead-role">{chef.role}</p>
        </div>
        <div className="print-masthead-meta">
          <p>{chef.email}</p>
          <p>{chef.phones.join(" · ")}</p>
          <p>{chef.location}</p>
        </div>
      </header>

      <div className="print-only print-runner" aria-hidden="true">
        <span>{t("export.documentTitle", { name: chef.name })}</span>
        <span>{formatDate(new Date(), { dateStyle: "long" })}</span>
      </div>
    </>
  );
}
