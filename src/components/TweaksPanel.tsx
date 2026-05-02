"use client";

import { useState } from "react";

export function TweaksPanel({ children, title = "Tweaks" }: { children: React.ReactNode; title?: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className={"tweaks-panel" + (open ? "" : " collapsed")}>
      <div className="tweaks-head" onClick={() => setOpen((o) => !o)}>
        <span>{title}</span>
        <button className="toggle" aria-label="Toggle tweaks">{open ? "–" : "+"}</button>
      </div>
      {open && <div>{children}</div>}
    </div>
  );
}

export function TweakSection({ label }: { label: string }) {
  return <div className="tweak-section">{label}</div>;
}

export function TweakRadio<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div className="tweak-row">
      <label>{label}</label>
      <div className="tweak-radio">
        {options.map((o) => (
          <button
            key={o.value}
            className={value === o.value ? "active" : ""}
            onClick={() => onChange(o.value)}
            type="button"
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function TweakToggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className={"tweak-toggle" + (value ? " on" : "")} onClick={() => onChange(!value)}>
      <span>{label}</span>
      <span className="switch" />
    </div>
  );
}
