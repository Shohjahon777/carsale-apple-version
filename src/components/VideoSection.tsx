"use client";

import { Reveal, SectionTag } from "./atoms";
import type { VideoCopy } from "@/types/site-dictionary";

export type { VideoCopy };

export function VideoSection({
  t,
  videoSrc,
}: {
  t: { video: VideoCopy };
  videoSrc?: string;
}) {
  const v = t.video;
  return (
    <section id="video" className="section">
      <div className="container">
        <Reveal>
          <SectionTag>{v.tag}</SectionTag>
          <h2 className="section-title">
            {v.titleBefore}
            <em>{v.titleEm}</em>
            {v.titleAfter}
          </h2>
          <p className="section-lede">{v.lede}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="video-shell">
            {videoSrc ? (
              <video
                className="video-el"
                src={videoSrc}
                controls
                playsInline
                preload="none"
                poster=""
              />
            ) : (
              <div className="video-placeholder" role="img" aria-label={v.placeholderCta}>
                <div className="video-placeholder-inner">
                  <div className="video-dot" aria-hidden="true" />
                  <div className="video-lines" aria-hidden="true">
                    <div className="video-line strong" />
                    <div className="video-line" />
                    <div className="video-line" />
                  </div>
                </div>
                <div className="video-placeholder-cta">{v.placeholderCta}</div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
