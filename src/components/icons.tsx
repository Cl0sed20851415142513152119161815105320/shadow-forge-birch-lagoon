import {
  Activity,
  Bot,
  CalendarDays,
  Code2,
  KeyRound,
  Search,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/catalog";

export const ICON_MAP: Record<IconKey, LucideIcon> = {
  search: Search,
  key: KeyRound,
  pulse: Activity,
  code: Code2,
  bot: Bot,
  calendar: CalendarDays,
};

export const ICON_OPTIONS: { key: IconKey; label: string }[] = [
  { key: "search", label: "Search" },
  { key: "key", label: "Key" },
  { key: "pulse", label: "Pulse" },
  { key: "code", label: "Code" },
  { key: "bot", label: "Bot" },
  { key: "calendar", label: "Calendar" },
];

export function TikTokMark({ className }: { className?: string }) {
  const note =
    "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z";
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#25F4EE" d={note} transform="translate(-0.7 0.35)" />
      <path fill="#FE2C55" d={note} transform="translate(0.7 -0.25)" />
      <path fill="#ffffff" d={note} />
    </svg>
  );
}
