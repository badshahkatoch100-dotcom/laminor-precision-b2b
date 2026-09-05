import { useCallback, useEffect, useRef } from "react";

/**
 * Prepares the document for printing / PDF export:
 * - swaps document.title so the browser's "Save as PDF" filename + running
 *   header match the exported document (in the active language),
 * - marks <html> with `is-printing` so print-only chrome can react,
 * - restores everything once the print dialog closes.
 */
export function usePrint(documentTitle: string) {
  const previousTitle = useRef<string | null>(null);

  const restore = useCallback(() => {
    document.documentElement.classList.remove("is-printing");
    if (previousTitle.current !== null) {
      document.title = previousTitle.current;
      previousTitle.current = null;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("afterprint", restore);
    return () => {
      window.removeEventListener("afterprint", restore);
      restore();
    };
  }, [restore]);

  return useCallback(async () => {
    previousTitle.current = document.title;
    document.title = documentTitle;
    document.documentElement.classList.add("is-printing");

    /* Let lazy images decode and layout settle before the snapshot. */
    const images = Array.from(document.images);
    await Promise.all(
      images.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.addEventListener("load", () => resolve(), { once: true });
              img.addEventListener("error", () => resolve(), { once: true });
            })
      )
    );
    if (typeof document.fonts?.ready?.then === "function") {
      await document.fonts.ready;
    }
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

    window.print();
    /* Safari/Firefox may not fire afterprint reliably. */
    window.setTimeout(restore, 1500);
  }, [documentTitle, restore]);
}
