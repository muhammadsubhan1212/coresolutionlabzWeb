"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItem = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-surface/60"
            >
              <span className="text-[15px] font-medium text-primary">{item.question}</span>
              <Plus
                size={18}
                className={cn(
                  "shrink-0 text-secondary transition-transform duration-200 ease-out",
                  isOpen && "rotate-45"
                )}
              />
            </button>
            <div
              id={`faq-panel-${index}`}
              role="region"
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <p className="min-h-0 px-6 pb-5 text-[14.5px] leading-relaxed text-muted">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
