import { i as __toESM } from "../_runtime.mjs";
import { K as require_jsx_runtime, q as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ShoppingBag, o as Plus, r as Trash2, s as Minus, t as X } from "../_libs/lucide-react.mjs";
import { a as cashUrl, c as useShop, i as TikTokMark, n as ICON_MAP, o as money, s as tiktokUrl } from "./icons-BTAR6id4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQNeo-Zg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ShopPage() {
	const { config } = useShop();
	const [cart, setCart] = (0, import_react.useState)([]);
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	const [checkout, setCheckout] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [order, setOrder] = (0, import_react.useState)(null);
	const count = cart.reduce((n, l) => n + l.qty, 0);
	const lines = (0, import_react.useMemo)(() => cart.map((l) => {
		const product = config.products.find((p) => p.id === l.id);
		return product ? {
			product,
			qty: l.qty
		} : null;
	}).filter((x) => !!x), [cart, config.products]);
	const total = lines.reduce((n, l) => n + l.product.price * l.qty, 0);
	function add(id) {
		setCart((prev) => {
			if (prev.find((l) => l.id === id)) return prev.map((l) => l.id === id ? {
				...l,
				qty: l.qty + 1
			} : l);
			return [...prev, {
				id,
				qty: 1
			}];
		});
	}
	function setQty(id, qty) {
		setCart((prev) => qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => l.id === id ? {
			...l,
			qty
		} : l));
	}
	function placeOrder() {
		if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
		const id = `TV-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
		setOrder({
			id,
			email: email.trim(),
			total
		});
		setCheckout(false);
		setCart([]);
		setName("");
		setEmail("");
	}
	const handle = config.tiktok.replace(/^@/, "") || "iifatality";
	const tag = config.cashtag.replace(/^\$/, "") || "josephdaniel20";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-border bg-bg/80 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-10 place-items-center rounded-xl bg-primary font-display text-lg font-extrabold text-primary-ink",
							children: config.name.slice(0, 1).toUpperCase()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-bold leading-none",
							children: config.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: ["$", tag]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/editor",
								className: "hidden rounded-xl border border-border px-3 py-2 text-sm text-muted hover:text-fg sm:inline",
								children: "Website editor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: tiktokUrl(handle),
								target: "_blank",
								rel: "noreferrer",
								"aria-label": `TikTok @${handle}`,
								className: "grid size-11 place-items-center rounded-xl bg-surface-2 ring-1 ring-border transition hover:ring-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TikTokMark, { className: "size-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setCartOpen(true),
								className: "relative grid size-11 place-items-center rounded-xl bg-surface-2 ring-1 ring-border",
								"aria-label": "Open cart",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-primary text-xs font-bold text-primary-ink",
									children: count
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-12 md:py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",
							children: "Instant digital delivery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "max-w-xl font-display text-4xl font-extrabold tracking-tight md:text-6xl",
							children: ["Tools that ship", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-primary",
								children: "the moment you pay."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-muted",
							children: config.tagline
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: config.products.map((p) => {
						const Icon = ICON_MAP[p.icon] ?? ICON_MAP.code;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-primary/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-12 place-items-center rounded-xl bg-surface-2 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
									}), p.tag ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary",
										children: p.tag
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-bold",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
									children: p.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-2xl font-extrabold text-primary",
										children: money(p.price)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => add(p.id),
										className: "inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-4 font-semibold text-primary-ink",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add"]
									})]
								})
							]
						}, p.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [config.name, " · digital goods · pay with Cash App"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/editor",
							className: "text-sm text-muted underline-offset-4 hover:underline sm:hidden",
							children: "Website editor"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: tiktokUrl(handle),
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm font-semibold text-fg",
							children: ["@", handle]
						})]
					})]
				})
			}),
			cartOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 bg-bg/70",
				onClick: () => setCartOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "ml-auto flex h-full w-full max-w-md flex-col border-l border-border bg-surface",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-bold",
								children: "Cart"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "grid size-11 place-items-center rounded-xl bg-surface-2",
								onClick: () => setCartOpen(false),
								"aria-label": "Close cart",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 space-y-3 overflow-y-auto p-4",
							children: [lines.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "py-12 text-center text-muted",
								children: "Nothing here yet."
							}), lines.map(({ product, qty }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 rounded-xl border border-border bg-surface-2 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-semibold",
											children: product.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-primary",
											children: money(product.price)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "grid size-8 place-items-center rounded-lg bg-surface",
													onClick: () => setQty(product.id, qty - 1),
													"aria-label": "Decrease",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-6 text-center text-sm",
													children: qty
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "grid size-8 place-items-center rounded-lg bg-surface",
													onClick: () => setQty(product.id, qty + 1),
													"aria-label": "Increase",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3" })
												})
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-muted hover:text-danger",
									onClick: () => setQty(product.id, 0),
									"aria-label": "Remove",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})]
							}, product.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 border-t border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between font-display text-lg font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: money(total)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: lines.length === 0,
								onClick: () => {
									setCartOpen(false);
									setCheckout(true);
								},
								className: "h-12 w-full rounded-xl bg-primary font-bold text-primary-ink disabled:opacity-40",
								children: "Checkout"
							})]
						})
					]
				})
			}),
			checkout && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 grid place-items-center bg-bg/75 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-bold",
								children: "Checkout"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "grid size-11 place-items-center rounded-xl bg-surface-2",
								onClick: () => setCheckout(false),
								"aria-label": "Close",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1 text-sm text-muted",
							children: lines.map(({ product, qty }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									product.name,
									" × ",
									qty
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(product.price * qty) })]
							}, product.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 flex justify-between font-display text-lg font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Due" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: money(total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 block text-sm text-muted",
							children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								className: "mt-1 h-12 w-full rounded-xl border border-border bg-surface-2 px-3 text-fg outline-none focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-3 block text-sm text-muted",
							children: ["Email for delivery", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: email,
								onChange: (e) => setEmail(e.target.value),
								type: "email",
								className: "mt-1 h-12 w-full rounded-xl border border-border bg-surface-2 px-3 text-fg outline-none focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-xl border border-primary/30 bg-bg p-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-fg",
									children: "Pay with Cash App"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-muted",
									children: [
										"Send ",
										money(total),
										" to ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-semibold text-primary",
											children: ["$", tag]
										}),
										". After you place the order, put the Order ID in the note."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: cashUrl(tag),
									target: "_blank",
									rel: "noreferrer",
									className: "mt-3 inline-flex h-11 items-center rounded-xl bg-primary px-4 font-bold text-primary-ink",
									children: ["Open $", tag]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: placeOrder,
							className: "mt-4 h-12 w-full rounded-xl bg-primary font-bold text-primary-ink",
							children: "Place order"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-center text-xs text-muted",
							children: "No card numbers are collected here."
						})
					]
				})
			}),
			order && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 grid place-items-center bg-bg/75 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-2xl border border-border bg-surface p-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Order ID"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-2xl font-extrabold tracking-wide text-primary",
							children: order.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted",
							children: [
								"Send ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: money(order.total)
								}),
								" to $",
								tag,
								" and put this ID in the Cash App note. Tools go to ",
								order.email,
								" after the payment shows up."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: cashUrl(tag),
							target: "_blank",
							rel: "noreferrer",
							className: "mt-5 flex h-12 items-center justify-center rounded-xl bg-primary font-bold text-primary-ink",
							children: "Pay on Cash App"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOrder(null),
							className: "mt-2 h-11 w-full rounded-xl bg-surface-2",
							children: "Done"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { ShopPage as component };
