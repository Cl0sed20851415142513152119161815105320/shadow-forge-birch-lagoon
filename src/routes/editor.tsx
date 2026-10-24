import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { DEFAULT_CONFIG, type Product, type ShopConfig } from "@/lib/catalog";
import { useShop } from "@/lib/use-shop";
import { ICON_OPTIONS } from "@/components/icons";

export const Route = createFileRoute("/editor")({ component: EditorPage });

function EditorPage() {
  const { config, ready, save, reset } = useShop();
  const [draft, setDraft] = useState<ShopConfig>(DEFAULT_CONFIG);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (ready) setDraft(config);
  }, [ready, config]);

  function patch(partial: Partial<ShopConfig>) {
    setDraft((d) => ({ ...d, ...partial }));
    setSaved(false);
  }

  function patchProduct(id: string, partial: Partial<Product>) {
    setDraft((d) => ({
      ...d,
      products: d.products.map((p) => (p.id === id ? { ...p, ...partial } : p)),
    }));
    setSaved(false);
  }

  function addProduct() {
    const id = `tool-${Date.now().toString(36)}`;
    setDraft((d) => ({
      ...d,
      products: [
        ...d.products,
        { id, name: "New tool", description: "What buyers get.", price: 9.99, icon: "code", tag: "" },
      ],
    }));
    setSaved(false);
  }

  function removeProduct(id: string) {
    setDraft((d) => ({ ...d, products: d.products.filter((p) => p.id !== id) }));
    setSaved(false);
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <div>
            <p className="font-display text-lg font-bold">Website editor</p>
            <p className="text-xs text-muted">Changes stay in this browser until you publish files yourself.</p>
          </div>
          <Link to="/" className="rounded-xl bg-surface-2 px-4 py-2 text-sm font-semibold ring-1 ring-border">
            View shop
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-6 px-4 py-8">
        <section className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="font-display text-lg font-bold">Store</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Field label="Name" value={draft.name} onChange={(v) => patch({ name: v })} />
            <Field label="Cash App tag" value={draft.cashtag} onChange={(v) => patch({ cashtag: v })} />
            <Field label="TikTok handle" value={draft.tiktok} onChange={(v) => patch({ tiktok: v })} />
            <Field label="Tagline" value={draft.tagline} onChange={(v) => patch({ tagline: v })} />
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">Products</h2>
            <button type="button" onClick={addProduct} className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-4 font-semibold text-primary-ink">
              <Plus className="size-4" /> Add tool
            </button>
          </div>
          {draft.products.map((p) => (
            <article key={p.id} className="rounded-2xl border border-border bg-surface p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Name" value={p.name} onChange={(v) => patchProduct(p.id, { name: v })} />
                <Field
                  label="Price"
                  value={String(p.price)}
                  onChange={(v) => patchProduct(p.id, { price: Number(v) || 0 })}
                  type="number"
                />
                <label className="block text-sm text-muted">
                  Icon
                  <select
                    value={p.icon}
                    onChange={(e) => patchProduct(p.id, { icon: e.target.value as Product["icon"] })}
                    className="mt-1 h-12 w-full rounded-xl border border-border bg-surface-2 px-3 text-fg"
                  >
                    {ICON_OPTIONS.map((o) => (
                      <option key={o.key} value={o.key}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
                <Field label="Badge (optional)" value={p.tag} onChange={(v) => patchProduct(p.id, { tag: v })} />
              </div>
              <label className="mt-3 block text-sm text-muted">
                Description
                <textarea
                  value={p.description}
                  onChange={(e) => patchProduct(p.id, { description: e.target.value })}
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-border bg-surface-2 px-3 py-2 text-fg outline-none focus:border-primary"
                />
              </label>
              <button type="button" onClick={() => removeProduct(p.id)} className="mt-3 inline-flex items-center gap-2 text-sm text-danger">
                <Trash2 className="size-4" /> Remove
              </button>
            </article>
          ))}
        </section>

        <div className="flex flex-wrap gap-3 pb-10">
          <button
            type="button"
            onClick={() => {
              save(draft);
              setSaved(true);
            }}
            className="h-12 rounded-xl bg-primary px-6 font-bold text-primary-ink"
          >
            Save changes
          </button>
          <button
            type="button"
            onClick={() => {
              reset();
              setDraft(DEFAULT_CONFIG);
              setSaved(false);
            }}
            className="h-12 rounded-xl bg-surface-2 px-6 ring-1 ring-border"
          >
            Reset defaults
          </button>
          {saved && <p className="self-center text-sm text-primary">Saved. Open the shop to see it.</p>}
        </div>
      </main>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block text-sm text-muted">
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 h-12 w-full rounded-xl border border-border bg-surface-2 px-3 text-fg outline-none focus:border-primary"
      />
    </label>
  );
}
