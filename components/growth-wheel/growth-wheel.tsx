"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { RotateCcw } from "lucide-react";
import {
  COMPETENCIES,
  DEFAULT_RATINGS,
  type CompetencyId,
  type Rating,
} from "@/lib/growth-wheel-data";
import { CompetencyPanel } from "./competency-panel";
import { CompetencyWheel } from "./competency-wheel";
import { RadarChart } from "./radar-chart";
import { SiteHeader } from "./site-header";
import { AssessmentSummaryDialog } from "./assessment-summary-dialog";
import { SourceInfo } from "./source-info";
import type { ReportPayload } from "./report-form";

import { useLanguage } from "@/lib/i18n/language-context";
import { COMPETENCIES_EN } from "@/lib/growth-wheel-data-en";
import {
  loadAuditRatings,
  saveAuditRatings,
  loadActiveCompetency,
  saveActiveCompetency,
  clearAllAuditCookies,
} from "@/lib/growth-wheel-cookies";

type GrowthWheelProps = {
  initialRatings?: Record<CompetencyId, Rating> | null;
  initialActiveId?: CompetencyId | null;
  onSubmitReport?: (payload: ReportPayload) => Promise<void> | void;
};

function GrowthWheelContent({
  initialRatings,
  initialActiveId,
}: GrowthWheelProps) {
  const { language, t } = useLanguage();
  const isEn = language === "en";
  const activeCompetencies = isEn ? COMPETENCIES_EN : COMPETENCIES;

  const searchParams = useSearchParams();
  const focusParam =
    searchParams.get("focus") ||
    searchParams.get("area") ||
    searchParams.get("kompetencja");

  // Inicjalizacja ocen z cookies (lub initialRatings przekazanego z SSR, lub domyślnych)
  const [ratings, setRatings] = useState<Record<CompetencyId, Rating>>(() => {
    if (typeof window !== "undefined") {
      const cookieSaved = loadAuditRatings();
      if (cookieSaved) return cookieSaved;
    }
    return initialRatings ?? DEFAULT_RATINGS;
  });

  // Inicjalizacja aktywnej kompetencji: focusParam z URL ma pierwszeństwo,
  // potem cookies/SSR, a ostatecznie pierwsza kompetencja z listy
  const [activeId, setActiveId] = useState<CompetencyId>(() => {
    if (focusParam) {
      const match = activeCompetencies.find(
        (c) => c.id === focusParam || c.href.endsWith(`/${focusParam}`)
      );
      if (match) return match.id;
    }
    if (initialActiveId) return initialActiveId;
    if (typeof window !== "undefined") {
      const cookieActive = loadActiveCompetency();
      if (cookieActive) return cookieActive;
    }
    return activeCompetencies[0].id;
  });

  // Synchronizacja po montowaniu w przeglądarce (na wypadek przejść client-side)
  useEffect(() => {
    const cookieSaved = loadAuditRatings();
    if (cookieSaved) {
      setRatings(cookieSaved);
    }
    if (!focusParam) {
      const cookieActive = loadActiveCompetency();
      if (cookieActive) {
        setActiveId(cookieActive);
      }
    }
  }, [focusParam]);

  // Gdy URL zawiera parametr focus (np. po kliknięciu "Oceń tę kompetencję w kole" na podstronie)
  useEffect(() => {
    if (focusParam) {
      const match = activeCompetencies.find(
        (c) => c.id === focusParam || c.href.endsWith(`/${focusParam}`)
      );
      if (match) {
        setActiveId(match.id);
        saveActiveCompetency(match.id);
      }
    }
  }, [focusParam, activeCompetencies]);

  const handleRatingChange = (id: CompetencyId, rating: Rating) => {
    setRatings((prev) => {
      const next = { ...prev, [id]: rating };
      saveAuditRatings(next);
      return next;
    });
  };

  const handleSelectCompetency = (id: CompetencyId) => {
    setActiveId(id);
    saveActiveCompetency(id);
  };

  const handleResetRatings = () => {
    setRatings(DEFAULT_RATINGS);
    clearAllAuditCookies();
  };

  const isModified = Object.entries(ratings).some(
    ([id, score]) => DEFAULT_RATINGS[id as CompetencyId] !== score
  );

  const activeIndex = activeCompetencies.findIndex(
    (competency) => competency.id === activeId,
  );
  const activeCompetency = activeCompetencies[activeIndex] || activeCompetencies[0];
  const values = Object.values(ratings);
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;

  return (
    <div className="flex min-h-dvh flex-col bg-white text-slate-950 lg:h-dvh lg:overflow-hidden">
      <SiteHeader />
      <main className="flex flex-1 flex-col lg:grid lg:min-h-0 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
        <section
          aria-labelledby="map-heading"
          className="flex flex-col bg-slate-50 lg:min-h-0"
        >
          <header className="flex items-start justify-between gap-6 border-b border-slate-200 px-6 py-5 md:px-10">
            <div className="flex flex-col gap-1">
              <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                {t.growthWheel.mapHeading}
              </p>
              <h2
                id="map-heading"
                className="text-lg font-semibold tracking-tight"
              >
                {t.growthWheel.mapSubheading}
              </h2>
            </div>
            <SourceInfo />
          </header>
          <div className="flex flex-1 items-center justify-center px-4 py-8 sm:px-10 lg:min-h-0">
            <div className="aspect-square w-full max-w-[720px] lg:h-full lg:w-auto lg:max-w-full">
              <CompetencyWheel
                ratings={ratings}
                activeId={activeId}
                onSelect={handleSelectCompetency}
              />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="wheel-heading"
          className="flex flex-col lg:min-h-0 lg:border-l lg:border-slate-200"
        >
          <header className="flex items-start justify-between gap-6 border-b border-slate-200 px-6 py-5 md:px-10">
            <div className="flex flex-col gap-1">
              <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                {t.growthWheel.auditHeading}
              </p>
              <h1
                id="wheel-heading"
                className="text-lg font-semibold tracking-tight"
              >
                Agile Coaching Growth Wheel
              </h1>
            </div>
            <div className="flex items-center gap-6 text-right">
              <dl className="flex gap-6">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                    {t.growthWheel.average}
                  </dt>
                  <dd className="font-mono text-lg font-semibold text-indigo-600">
                    {average.toFixed(1)}
                  </dd>
                </div>
                <div className="hidden sm:block">
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                    {t.growthWheel.areas}
                  </dt>
                  <dd className="font-mono text-lg font-semibold">
                    {activeCompetencies.length}
                  </dd>
                </div>
              </dl>
              {isModified && (
                <button
                  type="button"
                  onClick={handleResetRatings}
                  title={t.growthWheel.resetRatings}
                  aria-label={t.growthWheel.resetRatings}
                  className="inline-flex items-center gap-1.5 border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-[11px] text-slate-600 hover:border-slate-400 hover:text-slate-950 transition-colors cursor-pointer"
                >
                  <RotateCcw className="size-3 text-slate-400" aria-hidden="true" />
                  <span className="hidden sm:inline">{t.growthWheel.resetRatings}</span>
                </button>
              )}
            </div>
          </header>

          <div className="flex-1 lg:min-h-0 lg:overflow-y-auto">
            <div className="flex justify-center border-b border-slate-200 bg-slate-50 px-4 py-8 sm:px-10">
              <div className="flex w-full max-w-[520px] flex-col gap-4">
                <RadarChart
                  ratings={ratings}
                  activeId={activeId}
                  onSelect={handleSelectCompetency}
                  onRatingChange={handleRatingChange}
                />
                <p className="text-center text-xs leading-relaxed text-slate-500 text-pretty">
                  {t.growthWheel.dragHint}
                </p>
              </div>
            </div>
            <div className="px-6 py-8 md:px-10">
              <CompetencyPanel
                key={activeId}
                competency={activeCompetency}
                index={activeIndex}
                total={activeCompetencies.length}
                rating={ratings[activeId]}
                onRatingChange={(rating) => handleRatingChange(activeId, rating)}
              />
            </div>
          </div>

          <div className="sticky bottom-0 border-t border-slate-200 bg-white px-6 py-3.5 md:px-10 z-10 shadow-xs">
            <AssessmentSummaryDialog
              ratings={ratings}
              average={average}
              competencies={activeCompetencies}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export function GrowthWheel(props: GrowthWheelProps) {
  return (
    <Suspense fallback={<div className="flex min-h-dvh flex-col bg-white" />}>
      <GrowthWheelContent {...props} />
    </Suspense>
  );
}
