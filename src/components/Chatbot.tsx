"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
};

const MOCK_RESPONSES = [
  "Hello! I'm your Carsale assistant. How can I help you today?",
  "Carsale is a comprehensive platform for car dealerships, integrating sales, CRM, and more.",
  "Our pricing starts at $299/mo for the Starter tier.",
  "Yes, we offer full integration with your existing inventory systems.",
  "You can book a demo by clicking the 'Book a Demo' button in the navigation.",
];

const CHAT_SNOOZE_KEY = "carsale_chat_snooze_until";
const CHAT_DISMISS_KEY = "carsale_chat_dismiss";

function readSnooze(): number {
  if (typeof window === "undefined") return 0;
  const raw = localStorage.getItem(CHAT_SNOOZE_KEY);
  if (!raw) return 0;
  const n = parseInt(raw, 10);
  return Number.isFinite(n) ? n : 0;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "bot", content: "Hi there! How can I help you with Carsale today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isOpenRef = useRef(isOpen);
  const autoOpenTimer = useRef<number | null>(null);
  const greetTimer = useRef<number | null>(null);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  const beep = () => {
    try {
      const AudioCtx = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = 880;
      g.gain.value = 0.0001;
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      const t0 = ctx.currentTime;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.12, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.12);
      o.stop(t0 + 0.14);
      o.onended = () => ctx.close();
    } catch {
      /* ignore */
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(CHAT_DISMISS_KEY) === "1") return;
    const snoozeUntil = readSnooze();
    if (snoozeUntil > Date.now()) return;

    const hero = document.getElementById("top");
    const heroBottom = hero ? hero.getBoundingClientRect().bottom + window.scrollY : 600;
    let opened = false;

    const tryOpen = () => {
      if (opened) return;
      opened = true;
      if (autoOpenTimer.current != null) window.clearTimeout(autoOpenTimer.current);
      if (greetTimer.current != null) window.clearTimeout(greetTimer.current);
      setIsOpen(true);
      setUnread(0);
      greetTimer.current = window.setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: String(Date.now()),
            role: "bot",
            content:
              "Hello — I'm the Carsale assistant. I can help you explore modules, pricing, rollout steps, and integrations. What are you looking for?",
          },
        ]);
      }, 400) as unknown as number;
    };

    const onScroll = () => {
      if (window.scrollY + window.innerHeight * 0.2 >= heroBottom) tryOpen();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    autoOpenTimer.current = window.setTimeout(() => tryOpen(), 8000) as unknown as number;

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (autoOpenTimer.current != null) window.clearTimeout(autoOpenTimer.current);
      if (greetTimer.current != null) window.clearTimeout(greetTimer.current);
    };
  }, []);

  const snoozeDay = () => {
    const until = Date.now() + 24 * 60 * 60 * 1000;
    try {
      localStorage.setItem(CHAT_SNOOZE_KEY, String(until));
    } catch {
      /* ignore */
    }
    setIsOpen(false);
  };

  const dismissForever = () => {
    try {
      localStorage.setItem(CHAT_DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setIsOpen(false);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)],
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      if (!isOpenRef.current) {
        setUnread((c) => Math.min(99, c + 1));
        beep();
      }
    }, 1500);
  };

  return (
    <div className="chatbot-root">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="chatbot-panel mb-4 w-[min(380px,calc(100vw-32px))] h-[min(500px,calc(100vh-120px))] max-h-[calc(100vh-120px)] backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            <div className="chatbot-head flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="chatbot-launcher-icon w-8 h-8 rounded-full flex items-center justify-center text-white">
                  <Bot size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="chatbot-title font-medium text-sm">Carsale Assistant</h3>
                  <p className="chatbot-sub text-xs">Always here to help</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="chatbot-close p-2 rounded-full transition-colors"
                aria-label="Close assistant"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="chatbot-body flex-1 overflow-y-auto p-5 flex flex-col gap-4">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}
                >
                  <div
                    className={`chatbot-avatar w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === "user" ? "is-user" : "is-bot"
                    }`}
                  >
                    {msg.role === "user" ? <User size={14} aria-hidden="true" /> : <Bot size={14} aria-hidden="true" />}
                  </div>
                  <div className={`chatbot-bubble px-4 py-2.5 rounded-2xl text-[13.5px] leading-relaxed ${msg.role === "user" ? "is-user" : "is-bot"}`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 max-w-[85%]">
                  <div className="chatbot-avatar w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 is-bot">
                    <Bot size={14} aria-hidden="true" />
                  </div>
                  <div className="chatbot-bubble px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1 is-bot">
                    <Loader2 size={14} className="animate-spin" aria-hidden="true" />
                    <span className="text-xs">Typing...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-foot p-4">
              <div className="flex flex-wrap gap-2 justify-center mb-2 text-[11px] font-mono uppercase tracking-wide text-[var(--cream-mute)]">
                <button type="button" className="chatbot-muted-link" onClick={snoozeDay}>
                  Remind me tomorrow
                </button>
                <span aria-hidden="true">·</span>
                <button type="button" className="chatbot-muted-link" onClick={dismissForever}>
                  Don&apos;t show again
                </button>
              </div>
              <form onSubmit={handleSend} className="chatbot-form flex items-center gap-2 rounded-full px-2 py-1.5 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="chatbot-input flex-1 bg-transparent border-none focus:outline-none text-sm px-3"
                  aria-label="Message to assistant"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="chatbot-send p-2 text-white rounded-full disabled:opacity-50 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={16} className="ml-0.5" aria-hidden="true" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen((prev) => {
              const next = !prev;
              if (next) setUnread(0);
              return next;
            });
          }}
          className="chatbot-launcher w-14 h-14 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          aria-label={isOpen ? "Close assistant" : "Open assistant"}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <MessageSquare size={24} aria-hidden="true" />}
        </motion.button>
        {unread > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 rounded-full bg-red-500 text-white text-[12px] leading-[22px] text-center font-medium shadow">
            {unread > 99 ? "99+" : unread}
          </span>
        )}
      </div>
    </div>
  );
}
