"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { getBotReply, initialGreeting, type QuickReply } from "@/lib/chatbot";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
  quickReplies?: QuickReply[];
};

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `msg-${idCounter}`;
}

export function ChatWidget({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: nextId(), role: "bot", text: initialGreeting.text, quickReplies: initialGreeting.quickReplies },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  function handleOpen() {
    onOpenChange(true);
    setHasOpenedOnce(true);
  }

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === "whatsapp") {
      window.open(
        `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi! I found you via the CoreSolutionLabz website and I'd like to know more.")}`,
        "_blank"
      );
      return;
    }

    setMessages((prev) => [...prev, { id: nextId(), role: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    const delay = 500 + Math.min(trimmed.length * 12, 700);
    window.setTimeout(() => {
      const reply = getBotReply(trimmed);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "bot", text: reply.text, quickReplies: reply.quickReplies },
      ]);
    }, delay);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-modal="false"
            aria-label={`${siteConfig.name} chat assistant`}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 z-[56] flex h-[min(600px,calc(100dvh-140px))] w-[min(370px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_60px_-16px_rgba(15,23,42,0.28)] sm:bottom-28 sm:right-6"
          >
            <div className="flex items-center justify-between gap-3 bg-primary px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Image src="/assets/logo/icon-white.png" alt="" width={22} height={22} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[14.5px] font-semibold text-white">{siteConfig.name} Assistant</p>
                  <p className="flex items-center gap-1.5 text-[12px] text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Automated · replies instantly
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-surface px-4 py-5">
              {messages.map((message) => (
                <div key={message.id} className="flex flex-col gap-2">
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed",
                      message.role === "bot"
                        ? "self-start rounded-bl-sm bg-white text-primary shadow-sm"
                        : "self-end rounded-br-sm bg-primary text-white"
                    )}
                  >
                    {message.text}
                  </div>
                  {message.role === "bot" && message.quickReplies ? (
                    <div className="flex flex-wrap gap-2">
                      {message.quickReplies.map((reply) => (
                        <button
                          key={reply.label}
                          type="button"
                          onClick={() => sendMessage(reply.message)}
                          className="rounded-full border border-border bg-white px-3 py-1.5 text-[12.5px] font-medium text-secondary transition-colors duration-200 hover:border-secondary hover:bg-secondary-50"
                        >
                          {reply.label}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              {isTyping ? (
                <div className="flex w-fit items-center gap-1 self-start rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-muted/60"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              ) : null}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border bg-white p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                aria-label="Message"
                className="flex-1 rounded-full border border-border bg-surface px-4 py-2.5 text-[13.5px] text-primary outline-none transition-colors duration-200 focus:border-secondary"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-all duration-200 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => (open ? onOpenChange(false) : handleOpen())}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-4 right-4 z-[57] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_12px_28px_-8px_rgba(15,23,42,0.4)] transition-colors duration-200 hover:bg-secondary sm:bottom-6 sm:right-6"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X size={22} /> : <MessageCircle size={22} />}
          </motion.span>
        </AnimatePresence>
        {!hasOpenedOnce ? (
          <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-accent" />
        ) : null}
      </motion.button>
    </>
  );
}
