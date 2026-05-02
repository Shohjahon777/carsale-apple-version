"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "./hooks";

export const Arrow = ({ size = 14 }: { size?: number }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14m-6-7l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Plus = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Check = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12.5l4.5 4.5L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <span className="section-tag">
    <span className="dot" /> {children}
  </span>
);

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 24, filter: "blur(4px)" }
      }
      whileInView={
        reduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-10%" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const CarMark = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 70" fill="none" aria-hidden="true">
    <path
      d="M10 6 H54 A6 6 0 0 1 60 12 V42 A6 6 0 0 1 54 48 H38 L32 60 L26 48 H10 A6 6 0 0 1 4 42 V12 A6 6 0 0 1 10 6 Z"
      fill="#A78BFA"
    />
    <path
      d="M16 28 C18 22, 22 19, 32 19 C42 19, 46 22, 48 28 L50 32 L14 32 Z"
      fill="#fff"
    />
    <rect x="14" y="32" width="36" height="2" rx="1" fill="#fff" />
    <circle cx="22" cy="27" r="1.6" fill="#A78BFA" />
    <circle cx="42" cy="27" r="1.6" fill="#A78BFA" />
    <path
      d="M19 36 C24 41, 40 41, 45 36"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const Wordmark = () => (
  <span
    style={{
      fontFamily: "var(--f-italic)",
      fontStyle: "italic",
      fontSize: 26,
      letterSpacing: "-0.01em",
      lineHeight: 1,
    }}
  >
    <span style={{ color: "var(--cream)" }}>car</span>
    <span style={{ color: "var(--purple)" }}>sale</span>
  </span>
);

export function RisingWords({
  words,
  emIndex = -1,
  delay = 0,
}: {
  words: string[];
  emIndex?: number;
  delay?: number;
}) {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <motion.span
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.8,
                    ease: [0.2, 0.7, 0.2, 1],
                    delay: (delay + i * 90) / 1000,
                  }
            }
            className={"inline-block" + (i === emIndex ? " em" : "")}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </>
  );
}
