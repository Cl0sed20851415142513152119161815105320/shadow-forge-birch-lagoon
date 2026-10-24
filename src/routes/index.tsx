import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { cashUrl, money, tiktokUrl, type Product } from "@/lib/catalog";
import { useShop } from "@/lib/use-shop";
import { ICON_MAP, TikTokMark } from "@/components/icons";

export const Route = createFileRoute("/")({ component: ShopPage });

type Line = { id: string; qty: number };

function ShopPage() {
  const { config } = useShop();
  const [cart, setCart] = useState<Line[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState<{ id: string; email: string; total: number } | null>(null);

  const count = cart.reduce((n, l) => n + l.qty, 0);
  const lines = useMemo(
    () =>
      cart
        .map((l) => {
          const product = config.products.find((p) => p.id === l.id);
          return product ? { product, qty: l.qty } : null;
        })
        .filter((x): x is { product: Product; qty: number } => !!x),
    [cart, config.products],
  );
  const total = lines.reduce((n, l) => n + l.product.price * l.qty, 0);

  function add(id: string) {
    setCart((prev) => {
      const hit = prev.find((l) => l.id === id);
      if (hit) return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { id, qty: 1 }];
    });
  }

  function setQty(id: string, qty: number) {
    setCart((prev) => (qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => (l.id === id ? { ...l, qty } : l))));
  }

  function placeOrder() {
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    const id = `TV-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    setOrder({ id, email: email.trim(), total });
    setCheckout(false);
    setCart([]);
    setName("");
    setEmail("");
  }

  const handle = config.tiktok.replace(/^@/, "") || "iifatality";
  const tag = config.cashtag.replace(/^\$/, "") || "josephdaniel20";

  return (
    <div className="min-h-screen text-fg">
      <header className="sticky top-0 z-30 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-primary font-display text-lg font-extrabold text-primary-ink">
              {config.name.slice(0, 1).toUpperCase()}
            </div>
            <div>
              <p className="font-display text-lg font-bold leading-none">{config.name}</p>
              <p className="mt-1 text-xs text-muted">${tag}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/editor"
              className="hidden rounded-xl border border-border px-3 py-2 text-sm text-muted hover:text-fg sm:inline"
            >
              Website editor
            </Link>
            <a
              href={tiktokUrl(handle)}
              target="_blank"
              rel="noreferrer"
              aria-label={`TikTok @${handle}`}
              className="grid size-11 place-items-center rounded-xl bg-surface-2 ring-1 ring-border transition hover:ring-primary"
            >
              <TikTokMark className="size-6" />
            </a>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative grid size-11 place-items-center rounded-xl bg-surface-2 ring-1 ring-border"
              aria-label="Open cart"
            >
              <ShoppingBag className="size-5" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-primary text-xs font-bold text-primary-ink">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20">
        <section className="py-12 md:py-16">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Instant digital delivery
          </p>
          <h1 className="max-w-xl font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Tools that ship
            <span className="block text-primary">the moment you pay.</span>
          </h1>
          <p className="mt-4 max-w-lg text-muted">{config.tagline}</p>
        </section>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.products.map((p) => {
            const Icon = ICON_MAP[p.icon] ?? ICON_MAP.code;
            return (
              <article key={p.id} className="flex flex-col rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-primary/40">
                <div className="mb-4 flex items-start justify-between">
                  <div className="grid size-12 place-items-center rounded-xl bg-surface-2 text-primary">
                    <Icon className="size-5" />
                  </div>
                  {p.tag ? (
                    <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">{p.tag}</span>
                  ) : null}
                </div>
                <h2 className="font-display text-xl font-bold">{p.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-2xl font-extrabold text-primary">{money(p.price)}</span>
                  <button
                    type="button"
                    onClick={() => add(p.id)}
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-4 font-semibold text-primary-ink"
                  >
                    <Plus className="size-4" /> Add
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <p className="text-sm text-muted">{config.name} · digital goods · pay with Cash App</p>
          <div className="flex items-center gap-4">
            <Link to="/editor" className="text-sm text-muted underline-offset-4 hover:underline sm:hidden">
              Website editor
            </Link>
            <a href={tiktokUrl(handle)} target="_blank" rel="noreferrer" className="text-sm font-semibold text-fg">
              @{handle}
            </a>
          </div>
        </div>
      </footer>

      {cartOpen && (
        <div className="fixed inset-0 z-40 bg-bg/70" onClick={() => setCartOpen(false)}>
          <aside
            className="ml-auto flex h-full w-full max-w-md flex-col border-l border-border bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <h2 className="font-display text-lg font-bold">Cart</h2>
              <button type="button" className="grid size-11 place-items-center rounded-xl bg-surface-2" onClick={() => setCartOpen(false)} aria-label="Close cart">
                <X className="size-5" />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {lines.length === 0 && <p className="py-12 text-center text-muted">Nothing here yet.</p>}
              {lines.map(({ product, qty }) => (
                <div key={product.id} className="flex gap-3 rounded-xl border border-border bg-surface-2 p-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{product.name}</p>
                    <p className="text-sm text-primary">{money(product.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button type="button" className="grid size-8 place-items-center rounded-lg bg-surface" onClick={() => setQty(product.id, qty - 1)} aria-label="Decrease">
                        <Minus className="size-3" />
                      </button>
                      <span className="w-6 text-center text-sm">{qty}</span>
                      <button type="button" className="grid size-8 place-items-center rounded-lg bg-surface" onClick={() => setQty(product.id, qty + 1)} aria-label="Increase">
                        <Plus className="size-3" />
                      </button>
                    </div>
                  </div>
                  <button type="button" className="text-muted hover:text-danger" onClick={() => setQty(product.id, 0)} aria-label="Remove">
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="space-y-3 border-t border-border p-4">
              <div className="flex justify-between font-display text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">{money(total)}</span>
              </div>
              <button
                type="button"
                disabled={lines.length === 0}
                onClick={() => {
                  setCartOpen(false);
                  setCheckout(true);
                }}
                className="h-12 w-full rounded-xl bg-primary font-bold text-primary-ink disabled:opacity-40"
              >
                Checkout
              </button>
            </div>
          </aside>
        </div>
      )}

      {checkout && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-bg/75 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-surface p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-xl font-bold">Checkout</h2>
              <button type="button" className="grid size-11 place-items-center rounded-xl bg-surface-2" onClick={() => setCheckout(false)} aria-label="Close">
                <X className="size-5" />
              </button>
            </div>
            <ul className="space-y-1 text-sm text-muted">
              {lines.map(({ product, qty }) => (
                <li key={product.id} className="flex justify-between">
                  <span>{product.name} × {qty}</span>
                  <span>{money(product.price * qty)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 flex justify-between font-display text-lg font-bold">
              <span>Due</span>
              <span className="text-primary">{money(total)}</span>
            </p>
            <label className="mt-4 block text-sm text-muted">
              Name
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 h-12 w-full rounded-xl border border-border bg-surface-2 px-3 text-fg outline-none focus:border-primary" />
            </label>
            <label className="mt-3 block text-sm text-muted">
              Email for delivery
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1 h-12 w-full rounded-xl border border-border bg-surface-2 px-3 text-fg outline-none focus:border-primary" />
            </label>
            <div className="mt-4 rounded-xl border border-primary/30 bg-bg p-4 text-sm">
              <p className="font-semibold text-fg">Pay with Cash App</p>
              <p className="mt-1 text-muted">
                Send {money(total)} to <span className="font-semibold text-primary">${tag}</span>. After you place the order, put the Order ID in the note.
              </p>
              <a href={cashUrl(tag)} target="_blank" rel="noreferrer" className="mt-3 inline-flex h-11 items-center rounded-xl bg-primary px-4 font-bold text-primary-ink">
                Open ${tag}
              </a>
            </div>
            <button type="button" onClick={placeOrder} className="mt-4 h-12 w-full rounded-xl bg-primary font-bold text-primary-ink">
              Place order
            </button>
            <p className="mt-2 text-center text-xs text-muted">No card numbers are collected here.</p>
          </div>
        </div>
      )}

      {order && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-bg/75 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 text-center">
            <p className="text-sm text-muted">Order ID</p>
            <p className="mt-1 font-display text-2xl font-extrabold tracking-wide text-primary">{order.id}</p>
            <p className="mt-4 text-sm text-muted">
              Send <span className="text-primary">{money(order.total)}</span> to ${tag} and put this ID in the Cash App note. Tools go to {order.email} after the payment shows up.
            </p>
            <a href={cashUrl(tag)} target="_blank" rel="noreferrer" className="mt-5 flex h-12 items-center justify-center rounded-xl bg-primary font-bold text-primary-ink">
              Pay on Cash App
            </a>
            <button type="button" onClick={() => setOrder(null)} className="mt-2 h-11 w-full rounded-xl bg-surface-2">
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
