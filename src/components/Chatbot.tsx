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

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "bot", content: "Hi there! How can I help you with Carsale today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const beep = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
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
      // ignore
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Auto-open once per visitor and greet.
  useEffect(() => {
    const seen = localStorage.getItem("carsale_chat_seen");
    if (seen) return;
    localStorage.setItem("carsale_chat_seen", "1");
    const tOpen = window.setTimeout(() => setIsOpen(true), 650);
    const tGreet = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          role: "bot",
          content:
            "Hello — I’m the Carsale assistant. I can help you explore modules, pricing, rollout steps, and integrations. What are you looking for?",
        },
      ]);
    }, 1050);
    return () => {
      window.clearTimeout(tOpen);
      window.clearTimeout(tGreet);
    };
  }, []);

  // Reset unread when opened.
  useEffect(() => {
    if (isOpen) setUnread(0);
  }, [isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Mock API delay
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)],
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      if (!isOpen) {
        setUnread((c) => Math.min(99, c + 1));
        beep();
      }
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="chatbot-panel mb-4 w-[340px] sm:w-[380px] h-[500px] max-h-[calc(100vh-120px)] backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="chatbot-head flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="chatbot-title font-medium text-sm">Carsale Assistant</h3>
                  <p className="chatbot-sub text-xs">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="chatbot-close p-2 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-body flex-1 overflow-y-auto p-5 flex flex-col gap-4">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] ${
                    msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`chatbot-avatar w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === "user" ? "is-user" : "is-bot"
                    }`}
                  >
                    {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div
                    className={`chatbot-bubble px-4 py-2.5 rounded-2xl text-[13.5px] leading-relaxed ${
                      msg.role === "user" ? "is-user" : "is-bot"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 max-w-[85%]"
                >
                  <div className="chatbot-avatar w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 is-bot">
                    <Bot size={14} />
                  </div>
                  <div className="chatbot-bubble px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1 is-bot">
                    <Loader2 size={14} className="animate-spin" />
                    <span className="text-xs">Typing...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chatbot-foot p-4">
              <form
                onSubmit={handleSend}
                className="chatbot-form flex items-center gap-2 rounded-full px-2 py-1.5 transition-all"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="chatbot-input flex-1 bg-transparent border-none focus:outline-none text-sm px-3"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="chatbot-send p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors"
                >
                  <Send size={16} className="ml-0.5" />
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
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center hover:bg-blue-700 transition-colors"
          aria-label={isOpen ? "Close assistant" : "Open assistant"}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
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
