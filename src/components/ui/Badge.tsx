import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-flow-50 px-3 py-1 text-xs font-semibold text-flow-700 ring-1 ring-flow-200">
      {children}
    </span>
  );
}
