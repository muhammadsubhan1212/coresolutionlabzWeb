import { faqs, industries, processSteps, services, siteConfig } from "@/lib/data";

export type QuickReply = { label: string; message: string };

export type BotResponse = {
  text: string;
  quickReplies?: QuickReply[];
};

type Intent = {
  id: string;
  keywords: string[];
  respond: () => BotResponse;
};

function normalize(input: string) {
  return input
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreKeywords(message: string, keywords: string[]) {
  let score = 0;
  for (const keyword of keywords) {
    if (message.includes(keyword)) score += keyword.split(" ").length;
  }
  return score;
}

const defaultQuickReplies: QuickReply[] = [
  { label: "Our services", message: "What services do you offer?" },
  { label: "Pricing", message: "How much does a project cost?" },
  { label: "Talk to a human", message: "I want to talk to a human" },
];

const intents: Intent[] = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "salam", "assalam", "asalam", "good morning", "good evening", "good afternoon"],
    respond: () => ({
      text: `Hey there 👋 I'm the ${siteConfig.name} assistant. I can tell you about our services, pricing, process, or how to reach the team. What would you like to know?`,
      quickReplies: defaultQuickReplies,
    }),
  },
  {
    id: "thanks",
    keywords: ["thank", "thanks", "shukriya", "appreciate", "great help", "awesome thanks"],
    respond: () => ({
      text: "You're very welcome! Anything else you'd like to know about our services or process?",
      quickReplies: defaultQuickReplies,
    }),
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "budget", "quote", "how much", "rate", "charges", "fees"],
    respond: () => ({
      text: faqs.find((f) => f.question.toLowerCase().includes("price"))?.answer ??
        "We scope every project individually and provide a fixed-quote or milestone-based estimate before any work begins — no surprises. Share a bit about your project and we'll get you a real number.",
      quickReplies: [
        { label: "Get a free consultation", message: "I want a free consultation" },
        { label: "Our services", message: "What services do you offer?" },
      ],
    }),
  },
  {
    id: "process",
    keywords: ["process", "how do you work", "how it works", "timeline", "steps", "engagement", "methodology"],
    respond: () => ({
      text: `Every engagement follows the same disciplined process: ${processSteps
        .map((s) => s.title)
        .join(" → ")}. You'll always know what phase you're in and what's next.`,
      quickReplies: defaultQuickReplies,
    }),
  },
  {
    id: "industries",
    keywords: ["industry", "industries", "sector", "domain", "vertical", "who do you work with"],
    respond: () => ({
      text: `We bring domain experience across ${industries
        .slice(0, 5)
        .map((i) => i.name)
        .join(", ")}, and more. Which industry are you in?`,
      quickReplies: defaultQuickReplies,
    }),
  },
  {
    id: "human",
    keywords: ["human", "agent", "talk to someone", "real person", "representative", "call me", "speak to", "team member"],
    respond: () => ({
      text: `Happy to connect you directly. You can WhatsApp us at ${siteConfig.phone}, call ${siteConfig.phoneSecondary}, or email ${siteConfig.email} — someone from the team will respond within one business day.`,
      quickReplies: [{ label: "Open WhatsApp", message: "whatsapp" }],
    }),
  },
  {
    id: "contact",
    keywords: ["contact", "email", "phone", "number", "address", "location", "office", "reach you", "where are you"],
    respond: () => ({
      text: `You can reach us at ${siteConfig.email}, or call ${siteConfig.phone} / ${siteConfig.phoneSecondary}. Our office is at ${siteConfig.location}.`,
      quickReplies: defaultQuickReplies,
    }),
  },
];

for (const service of services) {
  intents.push({
    id: service.slug,
    keywords: [
      service.title.toLowerCase(),
      service.shortTitle.toLowerCase(),
      ...service.slug.split("-"),
    ],
    respond: () => ({
      text: `${service.description} Key focus areas: ${service.points.join(", ")}.`,
      quickReplies: [
        { label: "Get a free consultation", message: "I want a free consultation" },
        { label: "See other services", message: "What services do you offer?" },
      ],
    }),
  });
}

intents.push({
  id: "services-overview",
  keywords: ["service", "services", "what do you do", "what do you offer", "offer", "capabilities", "help with"],
  respond: () => ({
    text: `We cover the full stack: ${services.map((s) => s.shortTitle).join(", ")}. Ask about any of these and I'll go deeper.`,
    quickReplies: services.slice(0, 4).map((s) => ({ label: s.shortTitle, message: s.title })),
  }),
});

intents.push({
  id: "consultation",
  keywords: ["consultation", "free consultation", "book a call", "schedule", "get started", "start a project", "hire you"],
  respond: () => ({
    text: "Great — the fastest way to get started is the contact form below, or WhatsApp us directly and we'll schedule a free consultation within one business day.",
    quickReplies: [{ label: "Open WhatsApp", message: "whatsapp" }],
  }),
});

for (const faq of faqs) {
  const keywords = normalize(faq.question)
    .split(" ")
    .filter((w) => w.length > 3);
  intents.push({
    id: `faq-${faq.question.slice(0, 12)}`,
    keywords,
    respond: () => ({ text: faq.answer, quickReplies: defaultQuickReplies }),
  });
}

const fallback: BotResponse = {
  text: "I want to make sure you get a proper answer — could you rephrase that, or pick one of the topics below? For anything specific, our team typically replies within one business day.",
  quickReplies: defaultQuickReplies,
};

export function getBotReply(rawMessage: string): BotResponse {
  const message = normalize(rawMessage);
  if (!message) return fallback;

  let best: { intent: Intent; score: number } | null = null;
  for (const intent of intents) {
    const score = scoreKeywords(message, intent.keywords);
    if (score > 0 && (!best || score > best.score)) {
      best = { intent, score };
    }
  }

  if (best) return best.intent.respond();
  return fallback;
}

export const initialGreeting: BotResponse = {
  text: `Hi! I'm the ${siteConfig.name} assistant 👋 Ask me about our services, pricing, process, or how to get in touch — I'll do my best to help, and connect you with the team for anything more specific.`,
  quickReplies: defaultQuickReplies,
};
