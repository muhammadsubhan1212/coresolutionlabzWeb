"use client";

import { useState } from "react";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { WhatsAppButton } from "@/components/chat/WhatsAppButton";

export function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <WhatsAppButton visible={!chatOpen} />
      <ChatWidget open={chatOpen} onOpenChange={setChatOpen} />
    </>
  );
}
