# ToolVault — Digital Tools Store

A clean, static e-commerce frontend for selling online tools.  
Buyers pay you via **Cash App** (`$josephdaniel20`). No card data is ever collected on this site.

## Features

- Product catalog (6 sample digital tools — easy to edit)
- Shopping cart with localStorage persistence
- Checkout form (name + email for delivery)
- Clear Cash App payment instructions + Order ID system
- Fully static — works on **GitHub Pages**, Netlify, Vercel, or any static host
- Mobile-friendly, modern dark UI

## How payments work

1. Customer adds tools to cart and goes to checkout.
2. They enter name + email (so you know where to send the digital files).
3. Site generates a unique **Order ID** (e.g. `TV-M5K2-X9PQ`).
4. Customer is instructed to send the exact amount to **$josephdaniel20** on Cash App and put the Order ID in the payment note.
5. You check Cash App for the payment + Order ID, then email the tools to the customer.

This is a **manual fulfillment** flow (perfect for digital products and low volume). It does **not** process cards or connect to any payment API.

## Quick start (GitHub Pages)

1. Create a new GitHub repository (e.g. `toolvault` or `store`).
2. Upload the contents of this folder (`index.html`, `app.js`, `README.md`).
3. Go to **Settings → Pages**.
4. Under “Source”, choose **Deploy from a branch** → `main` / `/ (root)`.
5. Wait a minute, then open `https://YOUR_USERNAME.github.io/REPO_NAME/`.

That’s it. No build step required.

## Customize the products

Open `app.js` and edit the `PRODUCTS` array:

```js
{
  id: 'unique-id',
  name: 'Tool Name',
  description: 'Short description...',
  price: 19.99,
  icon: 'fa-solid-icon-name',  // Font Awesome 6 free icons
  tag: 'Popular'               // or null
}
```

Change prices, add/remove tools, update icons as you like.

## Customize branding

- Store name / tagline: edit `index.html` (search for “ToolVault”).
- Cash App cashtag: already set to `$josephdaniel20`. Search-and-replace if you ever change it.
- Colors: Tailwind config in the `<script>` tag of `index.html` (cash green).

## Important notes

- **No real card processing.** Collecting credit-card numbers yourself is insecure and usually illegal without PCI compliance. This site intentionally never asks for card details.
- For higher volume or automatic delivery you would later add a real payment provider (Stripe + Cash App Pay, Square, etc.) and a backend. This starter keeps things simple and free.
- Orders are stored only in the buyer’s browser `localStorage` (for their own reference). You will see the Order ID + amount in Cash App when they pay.
- Digital goods are typically non-refundable after delivery — the footer already mentions this.

## File structure

```
toolshop/
├── index.html   ← main page + UI
├── app.js       ← products, cart, checkout logic
└── README.md    ← this file
```

## License

Use freely for your own store. Replace the sample products with your real tools.
