"use client";

import { Popover } from "@base-ui/react/popover";
import { ExternalLink, Info } from "lucide-react";

const SOURCE_URL = "https://agilecoachinggrowthwheel.org";

export function SourceInfo() {
  return (
    <Popover.Root>
      <Popover.Trigger
        openOnHover
        delay={100}
        closeDelay={200}
        aria-label="Źródło modelu"
        className="flex size-8 shrink-0 cursor-pointer items-center justify-center border border-slate-200 bg-white text-slate-500 transition-colors hover:border-indigo-300 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[popup-open]:border-indigo-300 data-[popup-open]:text-indigo-600"
      >
        <Info className="size-4" aria-hidden="true" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner
          side="bottom"
          align="end"
          sideOffset={6}
          className="z-50"
        >
          <Popover.Popup className="flex w-64 flex-col gap-1 border border-slate-200 bg-white p-3 text-slate-900 shadow-lg outline-none">
            <Popover.Title className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Źródło modelu
            </Popover.Title>
            <Popover.Description className="text-xs leading-relaxed text-slate-600">
              Model kompetencji oparty na Agile Coaching Growth Wheel.
            </Popover.Description>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
            >
              agilecoachinggrowthwheel.org
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
