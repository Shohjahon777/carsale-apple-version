"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "./hooks";

/** Intrinsic dimensions of brand assets in /public */
const LOGO_ICON = { w: 820, h: 1004 };
const LOGO_HORIZONTAL = { w: 695, h: 202 };
const LOGO_STACKED = { w: 2076, h: 1208 };

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

/** Pin + car mark only (sidebar, small UI) */
export const CarMark = ({ size = 28 }: { size?: number }) => (
  <Image
    src="/icon.png"
    alt=""
    width={LOGO_ICON.w}
    height={LOGO_ICON.h}
    className="carsale-mark"
    style={{ width: size, height: size, objectFit: "contain" }}
    sizes={`${size}px`}
    aria-hidden
  />
);

/** Full horizontal lockup: icon + wordmark */
export const CarsaleLogo = ({
  height = 34,
  className = "",
  priority = false,
}: {
  height?: number;
  className?: string;
  priority?: boolean;
}) => {
  const w = Math.round((height * LOGO_HORIZONTAL.w) / LOGO_HORIZONTAL.h);
  return (
    <Image
      src="/logo-horizontal.png"
      alt="Carsale"
      width={LOGO_HORIZONTAL.w}
      height={LOGO_HORIZONTAL.h}
      className={`carsale-logo-horizontal ${className}`.trim()}
      style={{ height, width: "auto", maxWidth: "100%" }}
      sizes={`${w}px`}
      priority={priority}
    />
  );
};

/** Stacked logo with tagline — decorative watermark */
export const CarsaleLogoStacked = ({
  className = "",
  width: widthPx,
  maxWidth = "min(92vw, 640px)",
}: {
  className?: string;
  width?: number;
  maxWidth?: string;
}) => (
  <Image
    src="/logo-stacked.png"
    alt=""
    width={LOGO_STACKED.w}
    height={LOGO_STACKED.h}
    className={`carsale-logo-stacked ${className}`.trim()}
    style={
      widthPx != null
        ? { width: widthPx, height: "auto" }
        : { width: "100%", maxWidth, height: "auto" }
    }
    sizes="(max-width: 768px) 92vw, 640px"
    aria-hidden
  />
);

/** @deprecated Prefer CarsaleLogo — kept for imports that expect a “wordmark” block */
export const Wordmark = ({ height = 30 }: { height?: number }) => <CarsaleLogo height={height} />;

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
