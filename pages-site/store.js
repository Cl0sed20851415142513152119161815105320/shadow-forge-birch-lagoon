const KEY = "toolvault-pages-v1";
const DEFAULTS = {
  name: "ToolVault",
  tagline: "Premium online tools. Instant after Cash App.",
  cashtag: "josephdaniel20",
  tiktok: "iifatality",
  products: [
    { id: "seo", name: "SEO Analyzer Pro", description: "Site audits, keywords, speed scores, and competitor gaps.", price: 24.99, tag: "Popular" },
    { id: "pass", name: "Password Vault Generator", description: "Strong passwords and passphrases. Nothing leaves the browser.", price: 9.99, tag: "" },
    { id: "up", name: "Uptime Monitor Toolkit", description: "Self-hosted checks plus a dashboard template.", price: 19.99, tag: "" },
    { id: "snip", name: "Code Snippet Manager", description: "Search and share reusable snippets.", price: 14.99, tag: "New" },
    { id: "ai", name: "AI Prompt Engineering Pack", description: "200+ prompts for coding, marketing, and research.", price: 17.99, tag: "Best seller" },
    { id: "soc", name: "Social Media Scheduler", description: "Plan posts and export calendars.", price: 22.99, tag: "" }
  ]
};
function loadConfig() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULTS);
    const data = JSON.parse(raw);
    if (!data.products || !data.name) return structuredClone(DEFAULTS);
    return data;
  } catch {
    return structuredClone(DEFAULTS);
  }
}
function saveConfig(config) {
  localStorage.setItem(KEY, JSON.stringify(config));
}
function money(n) {
  return "$" + Number(n).toFixed(2);
}
function cleanTag(tag) {
  return String(tag || "josephdaniel20").replace(/^\$/, "").trim();
}
function cleanHandle(handle) {
  return String(handle || "iifatality").replace(/^@/, "").trim();
}
