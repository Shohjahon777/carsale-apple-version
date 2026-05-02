"use client";

import { Reveal, SectionTag } from "./atoms";

export function VideoSection({
  t,
  videoSrc,
}: {
  t: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  videoSrc?: string;
}) {
  return (
    <section id="video" className="section">
      <div className="container">
        <Reveal>
          <SectionTag>Walkthrough</SectionTag>
          <h2 className="section-title">
            See the{" "}
            <em>flow</em>
            {" "}in 60 seconds.
          </h2>
          <p className="section-lede">
            A quick product tour — sales, CRM, call center, and PDI working together in one calm system.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="video-shell">
            {videoSrc ? (
              <video
                className="video-el"
                src={videoSrc}
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <div className="video-placeholder" role="img" aria-label="Video placeholder">
                <div className="video-placeholder-inner">
                  <div className="video-dot" />
                  <div className="video-lines">
                    <div className="video-line strong" />
                    <div className="video-line" />
                    <div className="video-line" />
                  </div>
                </div>
                <div className="video-placeholder-cta">Drop a demo video here (MP4) — ready for integration.</div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

