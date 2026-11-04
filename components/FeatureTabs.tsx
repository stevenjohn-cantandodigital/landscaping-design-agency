"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { img } from "@/lib/site";
import { Gear, Pin, Search } from "./Icons";

const tabs = [
  {
    label: "Websites",
    caption: "Fast, mobile-first sites that put your best patios, plantings and lawns up front, with clear pages for design-build, hardscaping, lawn care and maintenance, and an estimate button on every screen.",
    src: img.crewHouseMow(1100, 1100),
    alt: "Landscaping crew mowing and trimming the lawn of a brick home",
    icon: <Gear />,
  },
  {
    label: "Search",
    caption: "Service and town pages written to rank for “landscapers near me”, “patio installation” and “lawn care service” in the neighborhoods you actually want to work in.",
    src: img.paverLaying(1100, 1100),
    alt: "Hardscape installer setting pavers by hand",
    icon: <Search />,
  },
  {
    label: "Leads",
    caption: "Every call, form and estimate request tracked, so you know which pages bring in full backyard builds and maintenance contracts, not just one-time mow quotes.",
    src: img.patioFirePit(1100, 1100),
    alt: "Finished backyard patio with a stone fire pit and Adirondack chairs",
    icon: <Pin />,
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let n = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") n = (i + 1) % tabs.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
    else return;
    e.preventDefault();
    setActive(n);
    refs.current[n]?.focus();
  };

  return (
    <div className="panel feature-panel reveal">
      <div className="tabs">
        <div className="tab-list" role="tablist" aria-label="What we build" aria-orientation="vertical">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              id={`ft-tab-${i}`}
              aria-selected={active === i}
              aria-controls="ft-panel"
              tabIndex={active === i ? 0 : -1}
              className="tab-btn"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {t.label}
              <sup>(0{i + 1})</sup>
            </button>
          ))}
        </div>
        <div className="tab-foot">
          <p>We don&rsquo;t sell you a template. We build the landscaping website your next homeowner calls from.</p>
          <Link href="/contact#schedule" className="btn">
            Schedule a Call
          </Link>
        </div>
      </div>
      <div className="tab-visual" id="ft-panel" role="tabpanel" aria-labelledby={`ft-tab-${active}`}>
        {tabs.map((t, i) => (
          <img
            key={t.label}
            src={t.src}
            alt={active === i ? t.alt : ""}
            aria-hidden={active !== i}
            data-active={active === i}
            loading="lazy"
            decoding="async"
            width={1100}
            height={1100}
          />
        ))}
        <div className="tab-caption">
          <span className="ic">{tabs[active].icon}</span>
          <span>{tabs[active].caption}</span>
        </div>
      </div>
    </div>
  );
}
