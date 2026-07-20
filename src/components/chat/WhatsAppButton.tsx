"use client";

import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/data";

export function WhatsAppButton({ visible }: { visible: boolean }) {
  const message = encodeURIComponent(
    "Hi! I found you via the CoreSolutionLabz website and I'd like to know more."
  );

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-[84px] right-4 z-[55] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgba(15,23,42,0.4)] transition-transform duration-200 hover:scale-105 sm:bottom-[92px] sm:right-6"
        >
          <WhatsAppIcon size={26} />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
