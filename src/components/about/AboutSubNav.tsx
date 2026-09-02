"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "history", label: "Our History" },
  { id: "governance", label: "Corporate Governance" },
];

export default function AboutSubNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-20 z-40 border-b border-ink-100 bg-white/95 backdrop-blur lg:top-[114px]">
      <Container>
        <nav className="flex gap-2 overflow-x-auto py-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === s.id
                  ? "bg-flow-600 text-white"
                  : "text-ink-600 hover:bg-ink-50"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}
