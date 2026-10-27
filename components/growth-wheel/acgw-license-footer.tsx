import { Info, ExternalLink } from "lucide-react";
import { ACGW_LICENSE_TEXT, ACGW_LICENSE_URL } from "./wheel-license-info";

type AcgwLicenseFooterProps = {
  lang?: "pl" | "en";
  className?: string;
};

export function AcgwLicenseFooter({
  lang = "pl",
  className = "",
}: AcgwLicenseFooterProps) {
  const isEn = lang === "en";

  return (
    <footer
      aria-label={isEn ? "Model license" : "Licencja modelu"}
      className={`mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500 ${className}`}
    >
      <div className="flex flex-col gap-2 rounded-none border border-slate-200/80 bg-slate-50 p-4 leading-relaxed">
        <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-700 font-semibold">
          <Info className="size-3.5 text-indigo-600" aria-hidden="true" />
          <span>{isEn ? "License & Attribution" : "Licencja i autorzy modelu"}</span>
        </div>
        <p className="text-[11px] leading-relaxed text-slate-600">
          {ACGW_LICENSE_TEXT}
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-1 font-mono text-[10px]">
          <a
            href={ACGW_LICENSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 underline underline-offset-2 transition-colors"
          >
            Creative Commons Attribution-ShareAlike 4.0 International
            <ExternalLink className="size-2.5" aria-hidden="true" />
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="https://agilecoachinggrowthwheel.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors"
          >
            agilecoachinggrowthwheel.org
            <ExternalLink className="size-2.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
