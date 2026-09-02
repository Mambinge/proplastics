"use client";

import { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { Branch, branches } from "@/data/branches";

function mapSrc(branch: Branch) {
  const delta = 0.06;
  const bbox = [
    branch.lng - delta,
    branch.lat - delta,
    branch.lng + delta,
    branch.lat + delta,
  ].join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${branch.lat},${branch.lng}`;
}

export default function BranchLocator() {
  const [active, setActive] = useState<Branch>(branches[0]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
      <div className="space-y-3">
        {branches.map((b) => (
          <button
            key={b.name}
            onClick={() => setActive(b)}
            className={`w-full rounded-md border p-4 text-left transition-colors ${
              active.name === b.name
                ? "border-flow-400 bg-flow-50"
                : "border-ink-200 bg-white hover:border-flow-200"
            }`}
          >
            <p className="font-semibold text-brand-950">{b.name}</p>
            <p className="mt-1 text-sm text-ink-600">{b.role}</p>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-500">
              <MapPin className="h-3.5 w-3.5 shrink-0" /> {b.address}
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-ink-500">
              <Phone className="h-3.5 w-3.5 shrink-0" /> {b.phone}
            </div>
          </button>
        ))}
        <p className="text-xs text-ink-400">
          Branch locations are indicative — contact us to confirm the exact address nearest you.
        </p>
      </div>

      <div className="h-[420px] overflow-hidden rounded-md border border-ink-200 lg:h-[520px]">
        <iframe
          key={active.name}
          title={`Map showing ${active.name}`}
          src={mapSrc(active)}
          className="h-full w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
