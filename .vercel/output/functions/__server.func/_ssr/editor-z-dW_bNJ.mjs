import { i as __toESM } from "../_runtime.mjs";
import { K as require_jsx_runtime, q as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Plus, r as Trash2 } from "../_libs/lucide-react.mjs";
import { c as useShop, r as ICON_OPTIONS, t as DEFAULT_CONFIG } from "./icons-BTAR6id4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/editor-z-dW_bNJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EditorPage() {
	const { config, ready, save, reset } = useShop();
	const [draft, setDraft] = (0, import_react.useState)(DEFAULT_CONFIG);
	const [saved, setSaved] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (ready) setDraft(config);
	}, [ready, config]);
	function patch(partial) {
		setDraft((d) => ({
			...d,
			...partial
		}));
		setSaved(false);
	}
	function patchProduct(id, partial) {
		setDraft((d) => ({
			...d,
			products: d.products.map((p) => p.id === id ? {
				...p,
				...partial
			} : p)
		}));
		setSaved(false);
	}
	function addProduct() {
		const id = `tool-${Date.now().toString(36)}`;
		setDraft((d) => ({
			...d,
			products: [...d.products, {
				id,
				name: "New tool",
				description: "What buyers get.",
				price: 9.99,
				icon: "code",
				tag: ""
			}]
		}));
		setSaved(false);
	}
	function removeProduct(id) {
		setDraft((d) => ({
			...d,
			products: d.products.filter((p) => p.id !== id)
		}));
		setSaved(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-3xl items-center justify-between px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-bold",
					children: "Website editor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Changes stay in this browser until you publish files yourself."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "rounded-xl bg-surface-2 px-4 py-2 text-sm font-semibold ring-1 ring-border",
					children: "View shop"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl space-y-6 px-4 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "Store"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								value: draft.name,
								onChange: (v) => patch({ name: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Cash App tag",
								value: draft.cashtag,
								onChange: (v) => patch({ cashtag: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "TikTok handle",
								value: draft.tiktok,
								onChange: (v) => patch({ tiktok: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Tagline",
								value: draft.tagline,
								onChange: (v) => patch({ tagline: v })
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold",
							children: "Products"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: addProduct,
							className: "inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-4 font-semibold text-primary-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add tool"]
						})]
					}), draft.products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Name",
										value: p.name,
										onChange: (v) => patchProduct(p.id, { name: v })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Price",
										value: String(p.price),
										onChange: (v) => patchProduct(p.id, { price: Number(v) || 0 }),
										type: "number"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-muted",
										children: ["Icon", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: p.icon,
											onChange: (e) => patchProduct(p.id, { icon: e.target.value }),
											className: "mt-1 h-12 w-full rounded-xl border border-border bg-surface-2 px-3 text-fg",
											children: ICON_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: o.key,
												children: o.label
											}, o.key))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Badge (optional)",
										value: p.tag,
										onChange: (v) => patchProduct(p.id, { tag: v })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-3 block text-sm text-muted",
								children: ["Description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: p.description,
									onChange: (e) => patchProduct(p.id, { description: e.target.value }),
									rows: 3,
									className: "mt-1 w-full rounded-xl border border-border bg-surface-2 px-3 py-2 text-fg outline-none focus:border-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => removeProduct(p.id),
								className: "mt-3 inline-flex items-center gap-2 text-sm text-danger",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), " Remove"]
							})
						]
					}, p.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3 pb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								save(draft);
								setSaved(true);
							},
							className: "h-12 rounded-xl bg-primary px-6 font-bold text-primary-ink",
							children: "Save changes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								reset();
								setDraft(DEFAULT_CONFIG);
								setSaved(false);
							},
							className: "h-12 rounded-xl bg-surface-2 px-6 ring-1 ring-border",
							children: "Reset defaults"
						}),
						saved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "self-center text-sm text-primary",
							children: "Saved. Open the shop to see it."
						})
					]
				})
			]
		})]
	});
}
function Field({ label, value, onChange, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm text-muted",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-1 h-12 w-full rounded-xl border border-border bg-surface-2 px-3 text-fg outline-none focus:border-primary"
		})]
	});
}
//#endregion
export { EditorPage as component };
