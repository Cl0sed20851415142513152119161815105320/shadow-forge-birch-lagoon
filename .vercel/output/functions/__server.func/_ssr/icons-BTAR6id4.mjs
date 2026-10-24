import { i as __toESM } from "../_runtime.mjs";
import { K as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as KeyRound, d as Bot, f as Activity, l as CodeXml, u as CalendarDays } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/icons-BTAR6id4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_CONFIG = {
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
			tag: "Popular"
		},
		{
			id: "pass-gen",
			name: "Password Vault Generator",
			description: "Strong passwords and passphrases. Offline-capable, nothing leaves the browser.",
			price: 9.99,
			icon: "key",
			tag: ""
		},
		{
			id: "uptime",
			name: "Uptime Monitor Toolkit",
			description: "Self-hosted checks plus a dashboard template. Email alerts included.",
			price: 19.99,
			icon: "pulse",
			tag: ""
		},
		{
			id: "snippet",
			name: "Code Snippet Manager",
			description: "Search and share reusable snippets. Web app and a VS Code starter.",
			price: 14.99,
			icon: "code",
			tag: "New"
		},
		{
			id: "prompt",
			name: "AI Prompt Engineering Pack",
			description: "200+ prompts for coding, marketing, and research across major models.",
			price: 17.99,
			icon: "bot",
			tag: "Best seller"
		},
		{
			id: "social",
			name: "Social Media Scheduler",
			description: "Plan posts, draft captions, export calendars for X, Instagram, and LinkedIn.",
			price: 22.99,
			icon: "calendar",
			tag: ""
		}
	]
};
var STORAGE_KEY = "toolvault-config-v1";
function money(n) {
	return `$${n.toFixed(2)}`;
}
function tiktokUrl(handle) {
	return `https://www.tiktok.com/@${handle.replace(/^@/, "").trim() || "iifatality"}`;
}
function cashUrl(tag) {
	return `https://cash.app/$${tag.replace(/^\$/, "").trim() || "josephdaniel20"}`;
}
function read() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return DEFAULT_CONFIG;
		const parsed = JSON.parse(raw);
		if (!parsed?.products?.length || !parsed.name) return DEFAULT_CONFIG;
		return parsed;
	} catch {
		return DEFAULT_CONFIG;
	}
}
function useShop() {
	const [config, setConfig] = (0, import_react.useState)(DEFAULT_CONFIG);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setConfig(read());
		setReady(true);
	}, []);
	return {
		config,
		ready,
		save: (0, import_react.useCallback)((next) => {
			setConfig(next);
			localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
		}, []),
		reset: (0, import_react.useCallback)(() => {
			localStorage.removeItem(STORAGE_KEY);
			setConfig(DEFAULT_CONFIG);
		}, [])
	};
}
var ICON_MAP = {
	search: Search,
	key: KeyRound,
	pulse: Activity,
	code: CodeXml,
	bot: Bot,
	calendar: CalendarDays
};
var ICON_OPTIONS = [
	{
		key: "search",
		label: "Search"
	},
	{
		key: "key",
		label: "Key"
	},
	{
		key: "pulse",
		label: "Pulse"
	},
	{
		key: "code",
		label: "Code"
	},
	{
		key: "bot",
		label: "Bot"
	},
	{
		key: "calendar",
		label: "Calendar"
	}
];
function TikTokMark({ className }) {
	const note = "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#25F4EE",
				d: note,
				transform: "translate(-0.7 0.35)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FE2C55",
				d: note,
				transform: "translate(0.7 -0.25)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#ffffff",
				d: note
			})
		]
	});
}
//#endregion
export { cashUrl as a, useShop as c, TikTokMark as i, ICON_MAP as n, money as o, ICON_OPTIONS as r, tiktokUrl as s, DEFAULT_CONFIG as t };
