// ToolVault Store — Frontend only. Payments go through Cash App.

const PRODUCTS = [
  {
    id: 'seo-kit',
    name: 'SEO Analyzer Pro',
    description: 'Full website audit tool: keywords, meta tags, speed scores, competitor gaps. Browser-based + export reports.',
    price: 24.99,
    icon: 'fa-magnifying-glass-chart',
    tag: 'Popular'
  },
  {
    id: 'pass-gen',
    name: 'Password Vault Generator',
    description: 'Generate ultra-strong passwords, passphrases, and secure notes. Offline-capable, zero tracking.',
    price: 9.99,
    icon: 'fa-key',
    tag: null
  },
  {
    id: 'uptime',
    name: 'Uptime Monitor Toolkit',
    description: 'Lightweight monitoring scripts + dashboard template. Email/SMS alerts ready. Self-hostable.',
    price: 19.99,
    icon: 'fa-heart-pulse',
    tag: null
  },
  {
    id: 'snippet',
    name: 'Code Snippet Manager',
    description: 'Organize, search, and share reusable code snippets across languages. VS Code + web version included.',
    price: 14.99,
    icon: 'fa-code',
    tag: 'New'
  },
  {
    id: 'prompt',
    name: 'AI Prompt Engineering Pack',
    description: '200+ battle-tested prompts for ChatGPT, Claude, Grok & more. Categories: coding, marketing, research.',
    price: 17.99,
    icon: 'fa-robot',
    tag: 'Best Seller'
  },
  {
    id: 'social',
    name: 'Social Media Scheduler',
    description: 'Plan posts, generate captions, and export calendars. Works with X, Instagram, LinkedIn (CSV + API helpers).',
    price: 22.99,
    icon: 'fa-calendar-days',
    tag: null
  }
];

// Cart state
let cart = JSON.parse(localStorage.getItem('toolvault_cart') || '[]');

function saveCart() {
  localStorage.setItem('toolvault_cart', JSON.stringify(cart));
  updateCartUI();
}

function formatPrice(n) {
  return '$' + n.toFixed(2);
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// Render products
function renderProducts() {
  const grid = document.getElementById('productGrid');
  document.getElementById('productCount').textContent = PRODUCTS.length;

  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 hover:shadow-xl hover:shadow-cash-500/5">
      <div class="p-6">
        <div class="flex items-start justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cash-500 text-xl">
            <i class="fa-solid ${p.icon}"></i>
          </div>
          ${p.tag ? `<span class="text-xs font-semibold bg-cash-500/15 text-cash-500 px-2.5 py-1 rounded-full">${p.tag}</span>` : ''}
        </div>
        <h3 class="text-lg font-bold mb-2">${p.name}</h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-5">${p.description}</p>
        <div class="flex items-center justify-between">
          <span class="text-2xl font-extrabold text-cash-500">${formatPrice(p.price)}</span>
          <button onclick="addToCart('${p.id}')"
            class="bg-slate-800 hover:bg-cash-500 hover:text-slate-900 text-sm font-semibold px-4 py-2.5 rounded-xl transition flex items-center gap-2 border border-slate-700 hover:border-cash-500">
            <i class="fa-solid fa-plus"></i> Add
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function addToCart(id) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();

  // Visual feedback
  const badge = document.getElementById('cartCount');
  badge.classList.add('cart-badge');
  setTimeout(() => badge.classList.remove('cart-badge'), 300);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else saveCart();
}

function updateCartUI() {
  const count = getCartCount();
  const badge = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');
  const itemsEl = document.getElementById('cartItems');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (count > 0) {
    badge.textContent = count;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }

  totalEl.textContent = formatPrice(getCartTotal());
  checkoutBtn.disabled = count === 0;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="text-center py-12 text-slate-500">
        <i class="fa-solid fa-cart-shopping text-4xl mb-3 opacity-40"></i>
        <p>Your cart is empty</p>
      </div>`;
    return;
  }

  itemsEl.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    return `
      <div class="flex gap-4 bg-slate-800/50 rounded-xl p-3 border border-slate-800">
        <div class="w-11 h-11 rounded-lg bg-slate-800 flex items-center justify-center text-cash-500 flex-shrink-0">
          <i class="fa-solid ${p.icon}"></i>
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="font-semibold text-sm truncate">${p.name}</h4>
          <p class="text-cash-500 font-bold text-sm">${formatPrice(p.price)}</p>
          <div class="flex items-center gap-2 mt-2">
            <button onclick="changeQty('${p.id}', -1)" class="w-7 h-7 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm flex items-center justify-center">−</button>
            <span class="text-sm font-medium w-6 text-center">${item.qty}</span>
            <button onclick="changeQty('${p.id}', 1)" class="w-7 h-7 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm flex items-center justify-center">+</button>
          </div>
        </div>
        <button onclick="removeFromCart('${p.id}')" class="text-slate-500 hover:text-red-400 self-start">
          <i class="fa-solid fa-trash-can text-sm"></i>
        </button>
      </div>`;
  }).join('');
}

// Checkout
function openCheckout() {
  if (cart.length === 0) return;
  document.getElementById('cartOverlay').classList.add('hidden');
  document.getElementById('checkoutModal').classList.remove('hidden');

  const total = getCartTotal();
  document.getElementById('checkoutTotal').textContent = formatPrice(total);
  document.getElementById('payAmount').textContent = formatPrice(total);

  const summary = document.getElementById('checkoutSummary');
  summary.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return `<div class="flex justify-between text-slate-300">
      <span>${p.name} × ${item.qty}</span>
      <span>${formatPrice(p.price * item.qty)}</span>
    </div>`;
  }).join('');
}

function generateOrderId() {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `TV-${ts}-${rand}`;
}

function placeOrder() {
  const name = document.getElementById('customerName').value.trim();
  const email = document.getElementById('customerEmail').value.trim();

  if (!name || !email) {
    alert('Please enter your name and email so we can deliver your tools.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  const orderId = generateOrderId();
  const total = getCartTotal();
  const items = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return { name: p.name, qty: item.qty, price: p.price };
  });

  // Store order locally (for your reference if you open the same browser later)
  const orders = JSON.parse(localStorage.getItem('toolvault_orders') || '[]');
  orders.push({
    id: orderId,
    name,
    email,
    items,
    total,
    createdAt: new Date().toISOString(),
    status: 'awaiting_payment'
  });
  localStorage.setItem('toolvault_orders', JSON.stringify(orders));

  // Show success
  document.getElementById('checkoutModal').classList.add('hidden');
  document.getElementById('orderIdDisplay').textContent = orderId;
  document.getElementById('successOrderNote').textContent = orderId;
  document.getElementById('successAmount').textContent = formatPrice(total);
  document.getElementById('successEmail').textContent = email;
  document.getElementById('successModal').classList.remove('hidden');

  // Clear cart
  cart = [];
  saveCart();
}

// Event listeners
document.getElementById('cartBtn').addEventListener('click', () => {
  document.getElementById('cartOverlay').classList.remove('hidden');
});
document.getElementById('closeCart').addEventListener('click', () => {
  document.getElementById('cartOverlay').classList.add('hidden');
});
document.getElementById('cartOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'cartOverlay') document.getElementById('cartOverlay').classList.add('hidden');
});
document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
document.getElementById('closeCheckout').addEventListener('click', () => {
  document.getElementById('checkoutModal').classList.add('hidden');
});
document.getElementById('checkoutModal').addEventListener('click', (e) => {
  if (e.target.id === 'checkoutModal') document.getElementById('checkoutModal').classList.add('hidden');
});
document.getElementById('placeOrderBtn').addEventListener('click', placeOrder);
document.getElementById('closeSuccess').addEventListener('click', () => {
  document.getElementById('successModal').classList.add('hidden');
});

// Init
renderProducts();
updateCartUI();
