"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function MobileMenu({
  open,
  onClose,
  triggerRef,
}: {
  open: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const main = document.getElementById("main-content");
    const headerBar = document.getElementById("site-header-bar");

    if (!open) return;

    const original = document.body.style.overflow;
    const trigger = triggerRef?.current;
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    headerBar?.setAttribute("inert", "");
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = original;
      main?.removeAttribute("inert");
      headerBar?.removeAttribute("inert");
      trigger?.focus();
    };
  }, [open, triggerRef]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-primary/40 backdrop-blur-[2px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-y-0 right-0 z-[70] flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-6">
              <Image
                src="/assets/logo/icon-full-color.png"
                alt={siteConfig.name}
                width={36}
                height={36}
                className="h-8 w-8"
              />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors duration-200 hover:border-secondary hover:text-secondary"
              >
                <X size={18} />
              </button>
            </div>

            <nav aria-label="Mobile primary" className="flex flex-1 flex-col gap-1 px-6 py-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="border-b border-border py-4 text-lg font-medium text-primary transition-colors duration-200 hover:text-secondary"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.08 + index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="border-t border-border px-6 py-6">
              <Button href="#contact" onClick={onClose} className="w-full" size="lg">
                Get Free Consultation
              </Button>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
