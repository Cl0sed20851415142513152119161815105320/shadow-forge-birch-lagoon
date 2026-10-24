export type IconKey = "search" | "key" | "pulse" | "code" | "bot" | "calendar";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: IconKey;
  tag: string;
};

export type ShopConfig = {
  name: string;
  tagline: string;
  cashtag: string;
  tiktok: string;
  products: Product[];
};

export const DEFAULT_CONFIG: ShopConfig = {
  name: "ToolVault",
  tagline: "Premium online tools. Instant after Cash App.",
  cashtag: "josephdaniel20",
  tiktok: "iifatality",
  products: [
    {
      id: "seo-kit",
      name: "SEO Analyzer Pro",
      description: "Site audits, keywords, speed scores, and competitor gaps. Export a clean report.",
      price: 24.99,
      icon: "search",
      tag: "Popular",
    },
    {
      id: "pass-gen",
      name: "Password Vault Generator",
      description: "Strong passwords and passphrases. Offline-capable, nothing leaves the browser.",
      price: 9.99,
      icon: "key",
      tag: "",
    },
    {
      id: "uptime",
      name: "Uptime Monitor Toolkit",
      description: "Self-hosted checks plus a dashboard template. Email alerts included.",
      price: 19.99,
      icon: "pulse",
      tag: "",
    },
    {
      id: "snippet",
      name: "Code Snippet Manager",
      description: "Search and share reusable snippets. Web app and a VS Code starter.",
      price: 14.99,
      icon: "code",
      tag: "New",
    },
    {
      id: "prompt",
      name: "AI Prompt Engineering Pack",
      description: "200+ prompts for coding, marketing, and research across major models.",
      price: 17.99,
      icon: "bot",
      tag: "Best seller",
    },
    {
      id: "social",
      name: "Social Media Scheduler",
      description: "Plan posts, draft captions, export calendars for X, Instagram, and LinkedIn.",
      price: 22.99,
      icon: "calendar",
      tag: "",
    },
  ],
};

export const STORAGE_KEY = "toolvault-config-v1";

export function money(n: number) {
  return `$${n.toFixed(2)}`;
}

export function tiktokUrl(handle: string) {
  const h = handle.replace(/^@/, "").trim() || "iifatality";
  return `https://www.tiktok.com/@${h}`;
}

export function cashUrl(tag: string) {
  const t = tag.replace(/^\$/, "").trim() || "josephdaniel20";
  return `https://cash.app/$${t}`;
}
