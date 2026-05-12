/* ============================================================
   UstaGo — App Logic
   ============================================================ */

const CATEGORY_TITLES = {
  electric: 'Электрик',
  cleaning: 'Клининг',
};

const SERVICES_BY_CAT = {
  cleaning: [
    { id: 'master-clean', name: 'Master Clean', emoji: '🧴', grad: 'linear-gradient(135deg,#FDE8EC 0%,#FFD3DA 100%)',
      tags: '#генеральнаяуборка #влажнаяуборка', city: 'Ташкент', rating: 4.9, reviews: 127, price: 300000 },
    { id: 'cleanpro', name: 'CleanPro', emoji: '💧', grad: 'linear-gradient(135deg,#E0F0FF 0%,#B8DFFF 100%)',
      tags: '#уборкапослеремонта #сантехника', city: 'Ташкент', rating: 4.7, reviews: 86, price: 280000 },
    { id: 'home-clean', name: 'Home Clean', emoji: '🏠', grad: 'linear-gradient(135deg,#E8F5E9 0%,#C8E6C9 100%)',
      tags: '#влажнаяуборка #квартиры #офисы', city: 'Ташкент', rating: 4.8, reviews: 92, price: 250000 },
    { id: 'chisto', name: 'Chisto+', emoji: '✨', grad: 'linear-gradient(135deg,#FFF8E1 0%,#FFE082 100%)',
      tags: '#генеральнаяуборка #ковры', city: 'Ташкент', rating: 4.6, reviews: 64, price: 320000 },
    { id: 'eco-clean', name: 'EcoClean', emoji: '🌿', grad: 'linear-gradient(135deg,#E8F5E9 0%,#A5D6A7 100%)',
      tags: '#эко #безхимии #дети', city: 'Ташкент', rating: 5.0, reviews: 41, price: 350000 },
    { id: 'fast-clean', name: 'FastClean', emoji: '⚡', grad: 'linear-gradient(135deg,#FFF3E0 0%,#FFCC80 100%)',
      tags: '#быстро #24часа #экспресс', city: 'Ташкент', rating: 4.5, reviews: 53, price: 230000 },
  ],
  electric: [
    { id: 'voltlab', name: 'VoltLab', emoji: '⚡', grad: 'linear-gradient(135deg,#FFF8E1 0%,#FFD54F 100%)',
      tags: '#электромонтаж #розетки', city: 'Ташкент', rating: 4.8, reviews: 98, price: 80000 },
    { id: 'amp-master', name: 'AmpMaster', emoji: '🔌', grad: 'linear-gradient(135deg,#FFFDE7 0%,#FFF176 100%)',
      tags: '#люстры #проводка #щитки', city: 'Ташкент', rating: 4.7, reviews: 73, price: 120000 },
    { id: 'elektro', name: 'Elektro Service', emoji: '💡', grad: 'linear-gradient(135deg,#FFF3E0 0%,#FFB74D 100%)',
      tags: '#освещение #аварийный', city: 'Ташкент', rating: 4.9, reviews: 145, price: 150000 },
    { id: 'svetuz', name: 'SvetUz', emoji: '🔋', grad: 'linear-gradient(135deg,#FCE4EC 0%,#F48FB1 100%)',
      tags: '#умныйдом #монтаж', city: 'Ташкент', rating: 4.6, reviews: 58, price: 200000 },
    { id: 'volta', name: 'Volta', emoji: '🌟', grad: 'linear-gradient(135deg,#E8EAF6 0%,#9FA8DA 100%)',
      tags: '#диагностика #ремонт', city: 'Ташкент', rating: 4.8, reviews: 67, price: 100000 },
    { id: 'energy', name: 'Energy Pro', emoji: '🔧', grad: 'linear-gradient(135deg,#F3E5F5 0%,#CE93D8 100%)',
      tags: '#электрика #безопасность', city: 'Ташкент', rating: 4.7, reviews: 81, price: 130000 },
  ],
};

const SERVICE_OFFERS = {
  cleaning: [
    { id: 'full-apt', name: 'Полная уборка квартиры', price: 300000, icon: '🏡' },
    { id: 'post-reno', name: 'Уборка после ремонта', price: 500000, icon: '🧱' },
    { id: 'windows', name: 'Мытьё окон', price: 200000, icon: '🪟' },
    { id: 'carpets', name: 'Стирка ковров', price: 150000, icon: '🧶' },
    { id: 'office', name: 'Уборка офиса', price: 400000, icon: '🏢' },
  ],
  electric: [
    { id: 'outlet', name: 'Установка розеток', price: 80000, icon: '🔌' },
    { id: 'chandelier', name: 'Монтаж люстры', price: 150000, icon: '💡' },
    { id: 'wiring', name: 'Прокладка проводки', price: 400000, icon: '⚡' },
    { id: 'panel', name: 'Сборка щитка', price: 350000, icon: '🔋' },
    { id: 'diag', name: 'Диагностика сети', price: 100000, icon: '🔧' },
  ],
};

const REVIEWS_BY_SERVICE = {
  default: [
    { name: 'Алишер', initial: 'А', date: '3 дня назад', rating: 5,
      text: 'Отличная работа! Команда приехала вовремя, всё сделали аккуратно и быстро. Очень доволен результатом, обязательно закажу ещё.' },
    { name: 'Дилнора', initial: 'Д', date: 'на прошлой неделе', rating: 5,
      text: 'Мастера профессионалы своего дела. Использовали современное оборудование и эко-средства. Рекомендую!' },
    { name: 'Бекзод', initial: 'Б', date: '2 недели назад', rating: 4,
      text: 'Хороший сервис, всё чисто. Немного задержались, но извинились и компенсировали. В целом — отлично.' },
    { name: 'Малика', initial: 'М', date: 'месяц назад', rating: 5,
      text: 'Заказывала генеральную уборку — результат превзошёл ожидания. Цена адекватная, качество на высоте.' },
  ],
};

const FEATURED = [
  { id: 'master-clean', cat: 'cleaning' },
  { id: 'voltlab', cat: 'electric' },
  { id: 'eco-clean', cat: 'cleaning' },
  { id: 'elektro', cat: 'electric' },
];

const MOCK_ORDERS = {
  active: [
    { id: 'o1', service: 'Master Clean', sub: 'Полная уборка · Пн 09:00', price: 300000, status: 'В пути', emoji: '🧴' },
  ],
  done: [
    { id: 'o2', service: 'VoltLab', sub: 'Установка розеток · 12 апр', price: 240000, status: 'Завершён', emoji: '⚡' },
    { id: 'o3', service: 'Home Clean', sub: 'Уборка квартиры · 5 апр', price: 250000, status: 'Завершён', emoji: '🏠' },
    { id: 'o4', service: 'Elektro Service', sub: 'Монтаж люстры · 1 апр', price: 150000, status: 'Завершён', emoji: '💡' },
  ],
};

const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const HOURS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'];

/* ---------- State ---------- */
const state = {
  currentCat: 'cleaning',
  currentService: null,
  selectedOffers: new Set(),
  selectedSlot: { day: 'Пн', hour: '09:00' },
  favorites: new Set(JSON.parse(localStorage.getItem('ustago.favs') || '[]')),
  regCats: new Set(),
  regStep: 1,
  payMethod: 'click',
  promoApplied: false,
  promoDiscount: 0,
  theme: localStorage.getItem('ustago.theme') || 'light',
  ordersTab: 'active',
};

const SERVICE_FEE = 15000;

/* ---------- Helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

function showToast(msg, ms = 2200) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove('show'), ms);
}

function go(screen, params = {}) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  const target = $(`[data-screen="${screen}"]`);
  if (!target) return;
  target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Update bottom nav highlight
  $$('.nav-tab').forEach(t => t.classList.toggle('is-active', t.dataset.go === screen));

  // Per-screen prep
  if (screen === 'services') renderServicesGrid();
  if (screen === 'favorites') renderFavorites();
  if (screen === 'orders') renderOrders();
  if (screen === 'profile') updateProfile();
  if (screen === 'home') renderFeatured();
  if (screen === 'register') resetRegStep();
}

function formatPrice(n) { return n.toLocaleString('ru-RU'); }
function persistFavs() { localStorage.setItem('ustago.favs', JSON.stringify([...state.favorites])); }

function findService(id) {
  for (const cat of Object.values(SERVICES_BY_CAT)) {
    const found = cat.find(s => s.id === id);
    if (found) return found;
  }
  return null;
}

/* ---------- Home ---------- */
function renderFeatured() {
  const rail = $('#featured-rail');
  rail.innerHTML = FEATURED.map(f => {
    const s = SERVICES_BY_CAT[f.cat].find(x => x.id === f.id);
    if (!s) return '';
    return `
      <article class="feat-card" data-id="${s.id}" data-cat="${f.cat}">
        <div class="feat-img" style="background:${s.grad}">${s.emoji}</div>
        <div class="feat-body">
          <div class="feat-name">${s.name}</div>
          <div class="feat-meta">
            <span class="feat-rating"><svg class="icon icon-xs star"><use href="#i-star"/></svg> ${s.rating}</span>
            <span>·</span>
            <span>от ${formatPrice(s.price)} сум</span>
          </div>
        </div>
      </article>`;
  }).join('');
  $$('.feat-card', rail).forEach(c => {
    c.addEventListener('click', () => {
      state.currentCat = c.dataset.cat;
      openDetail(c.dataset.id);
    });
  });
}

/* ---------- Services list ---------- */
function renderServicesGrid() {
  const grid = $('#services-grid');
  const cat = state.currentCat;
  const list = SERVICES_BY_CAT[cat] || [];
  $('#services-title').textContent = CATEGORY_TITLES[cat] || 'Сервисы';
  grid.innerHTML = list.map(s => svcCardHTML(s)).join('');
  bindSvcCards(grid);
}

function svcCardHTML(s) {
  const fav = state.favorites.has(s.id);
  return `
    <article class="svc-card" data-id="${s.id}">
      <div class="svc-card__img" style="background:${s.grad}">${s.emoji}</div>
      <button class="svc-card__fav ${fav ? 'is-fav' : ''}" data-fav="${s.id}" aria-label="В избранное">
        <svg class="icon icon-sm"><use href="#i-heart"/></svg>
      </button>
      <div class="svc-card__rate">
        <svg class="icon"><use href="#i-star"/></svg> ${s.rating}
      </div>
      <div class="svc-card__body">
        <div class="svc-card__name">${s.name}</div>
        <div class="svc-card__tags">${s.tags}</div>
      </div>
      <div class="svc-card__foot">
        <span class="svc-card__city"><svg class="icon icon-xs"><use href="#i-pin"/></svg> ${s.city}</span>
        <span class="svc-card__price">от ${formatPrice(s.price)} с</span>
      </div>
    </article>`;
}

function bindSvcCards(scope) {
  $$('.svc-card', scope).forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-fav]')) return;
      const id = card.dataset.id;
      const svc = findService(id);
      if (svc) {
        for (const [cat, list] of Object.entries(SERVICES_BY_CAT)) {
          if (list.find(s => s.id === id)) { state.currentCat = cat; break; }
        }
        openDetail(id);
      }
    });
  });
  $$('[data-fav]', scope).forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.fav;
      toggleFav(id);
      // Re-render whichever grid we're in
      const grid = btn.closest('.services-grid');
      if (grid && grid.id === 'services-grid') renderServicesGrid();
      if (grid && grid.id === 'favs-grid') renderFavorites();
    });
  });
}

function toggleFav(id) {
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  persistFavs();
}

/* ---------- Filter chips ---------- */
function bindFilters() {
  $$('#filter-chips .chip').forEach(c => {
    c.addEventListener('click', () => {
      $$('#filter-chips .chip').forEach(x => x.classList.remove('is-active'));
      c.classList.add('is-active');
      // Visual only — no real filtering for demo
      showToast(`Фильтр: ${c.textContent.trim()}`);
    });
  });
}

/* ---------- Detail ---------- */
function openDetail(serviceId) {
  const svc = findService(serviceId);
  if (!svc) return;
  state.currentService = svc;
  state.selectedOffers = new Set();

  $('#detail-name').textContent = svc.name;
  $('#detail-desc').textContent = `Профессиональный ${state.currentCat === 'cleaning' ? 'клининг' : 'электро'} сервис с опытом 5+ лет. Качественные работы с гарантией.`;

  const hero = $('#detail-hero');
  hero.style.background = svc.grad;
  $('#detail-hero-emoji').textContent = svc.emoji;

  const fav = $('#detail-fav');
  fav.classList.toggle('is-fav', state.favorites.has(svc.id));
  fav.onclick = () => {
    toggleFav(svc.id);
    fav.classList.toggle('is-fav', state.favorites.has(svc.id));
  };

  renderServiceOffers();
  renderTimeTable();
  renderReviews();
  updateCtaTotal();

  // Reset to first tab
  $$('.tab').forEach(t => t.classList.toggle('is-active', t.dataset.tab === 'services'));
  $$('.tab-pane').forEach(p => p.classList.toggle('is-active', p.dataset.pane === 'services'));

  go('detail');
}

function renderServiceOffers() {
  const offers = SERVICE_OFFERS[state.currentCat] || [];
  const wrap = $('#service-list');
  wrap.innerHTML = offers.map(o => `
    <button class="svc ${state.selectedOffers.has(o.id) ? 'is-selected' : ''}" data-offer="${o.id}">
      <div class="svc__ico">${o.icon}</div>
      <div class="svc__body">
        <div class="svc__title">${o.name}</div>
        <div class="svc__price">от ${formatPrice(o.price)} сум</div>
      </div>
      <div class="svc__check"><svg class="icon"><use href="#i-check"/></svg></div>
    </button>
  `).join('');
  $$('[data-offer]', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.offer;
      if (state.selectedOffers.has(id)) state.selectedOffers.delete(id);
      else state.selectedOffers.add(id);
      renderServiceOffers();
      updateCtaTotal();
    });
  });
}

function renderTimeTable() {
  const wrap = $('#time-table');
  wrap.innerHTML = DAYS.slice(0, 4).map(d => `
    <div class="time-row">
      <span class="time-day">${d}</span>
      ${HOURS.map(h => `
        <button class="time-slot ${state.selectedSlot.day === d && state.selectedSlot.hour === h ? 'is-selected' : ''}" data-day="${d}" data-hour="${h}">${h}</button>
      `).join('')}
    </div>
  `).join('');
  $$('.time-slot', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedSlot = { day: btn.dataset.day, hour: btn.dataset.hour };
      renderTimeTable();
    });
  });
}

function renderReviews() {
  const wrap = $('#reviews-list');
  const reviews = REVIEWS_BY_SERVICE.default;
  wrap.innerHTML = reviews.map(r => `
    <article class="review">
      <div class="review-head">
        <div class="review-avatar">${r.initial}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-date">${r.date}</div>
        </div>
        <div class="review-stars">
          ${Array.from({ length: r.rating }, () => '<svg class="icon"><use href="#i-star"/></svg>').join('')}
        </div>
      </div>
      <p class="review-text">${r.text}</p>
    </article>
  `).join('');
}

function bindTabs() {
  $$('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      $$('.tab').forEach(t => t.classList.toggle('is-active', t === tab));
      $$('.tab-pane').forEach(p => p.classList.toggle('is-active', p.dataset.pane === target));
    });
  });
}

function selectedOffersTotal() {
  const offers = (SERVICE_OFFERS[state.currentCat] || []).filter(o => state.selectedOffers.has(o.id));
  return offers.reduce((s, o) => s + o.price, 0);
}

function updateCtaTotal() {
  $('#cta-total').textContent = formatPrice(selectedOffersTotal());
}

/* ---------- Order ---------- */
function buildOrder() {
  const offers = (SERVICE_OFFERS[state.currentCat] || []).filter(o => state.selectedOffers.has(o.id));
  const sum = offers.reduce((s, o) => s + o.price, 0);
  const discount = state.promoApplied ? state.promoDiscount : 0;
  const total = sum + SERVICE_FEE - discount;
  $('#order-items').innerHTML = offers.map(o => `<li>${o.name} — ${formatPrice(o.price)} сум</li>`).join('') || '<li>Услуги не выбраны</li>';
  $('#order-time').textContent = `${state.selectedSlot.day} ${state.selectedSlot.hour}`;
  $('#bd-services').textContent = `${formatPrice(sum)} сум`;
  $('#bd-fee').textContent = `${formatPrice(SERVICE_FEE)} сум`;
  $('#bd-discount-row').hidden = !state.promoApplied;
  if (state.promoApplied) $('#bd-discount').textContent = `−${formatPrice(discount)} сум`;
  $('#order-total').textContent = formatPrice(total);
}

function bindPayment() {
  $$('.pay-card').forEach(c => {
    c.addEventListener('click', () => {
      $$('.pay-card').forEach(x => x.classList.remove('is-active'));
      c.classList.add('is-active');
      state.payMethod = c.dataset.pay;
    });
  });
  $('#apply-promo').addEventListener('click', () => {
    const code = $('#promo').value.trim().toUpperCase();
    if (!code) return showToast('Введите промокод');
    if (code === 'FIRST20') {
      const sum = selectedOffersTotal();
      state.promoApplied = true;
      state.promoDiscount = Math.round(sum * 0.2);
      buildOrder();
      showToast('Промокод применён: −20%');
    } else {
      state.promoApplied = false;
      state.promoDiscount = 0;
      buildOrder();
      showToast('Неверный промокод');
    }
  });
}

/* ---------- Favorites ---------- */
function renderFavorites() {
  const ids = [...state.favorites];
  const grid = $('#favs-grid');
  const empty = $('#favs-empty');
  if (ids.length === 0) {
    grid.innerHTML = '';
    grid.hidden = true;
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  grid.hidden = false;
  grid.innerHTML = ids.map(id => {
    const s = findService(id);
    return s ? svcCardHTML(s) : '';
  }).join('');
  bindSvcCards(grid);
  $('#profile-fav-count').textContent = ids.length;
}

/* ---------- Orders ---------- */
function renderOrders() {
  const list = $('#orders-list');
  const empty = $('#orders-empty');
  const tab = state.ordersTab;
  const items = MOCK_ORDERS[tab] || [];
  $$('.o-tab').forEach(t => t.classList.toggle('is-active', t.dataset.otab === tab));
  if (items.length === 0) {
    list.innerHTML = '';
    list.hidden = true;
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  list.hidden = false;
  list.innerHTML = items.map(o => `
    <article class="order-row">
      <div class="order-row-ico">${o.emoji}</div>
      <div class="order-row-body">
        <div class="order-row-title">${o.service}</div>
        <div class="order-row-meta">${o.sub}</div>
      </div>
      <div class="order-row-side">
        <div class="order-row-price">${formatPrice(o.price)} с</div>
        <div class="order-row-status status--${tab === 'active' ? 'active' : 'done'}">${o.status}</div>
      </div>
    </article>
  `).join('');
}

function bindOrdersTabs() {
  $$('.o-tab').forEach(t => {
    t.addEventListener('click', () => {
      state.ordersTab = t.dataset.otab;
      renderOrders();
    });
  });
}

/* ---------- Profile / theme ---------- */
function updateProfile() {
  $('#profile-fav-count').textContent = state.favorites.size;
  syncThemeLabel();
}

function applyTheme() {
  $('#app').dataset.theme = state.theme;
  syncThemeLabel();
}
function syncThemeLabel() {
  const isDark = state.theme === 'dark';
  const label = $('#theme-label');
  if (label) label.textContent = isDark ? 'Тёмная' : 'Светлая';
  const ico = $('#theme-ico');
  if (ico) ico.firstElementChild?.setAttribute('href', isDark ? '#i-sun' : '#i-moon');
}
function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('ustago.theme', state.theme);
  applyTheme();
}

/* ---------- Register multi-step ---------- */
function resetRegStep() {
  state.regStep = 1;
  updateRegStep();
}
function updateRegStep() {
  $$('.reg-step').forEach(s => s.classList.toggle('is-active', Number(s.dataset.step) === state.regStep));
  $('#reg-progress').style.width = `${state.regStep * 50}%`;
  $('#reg-step-pill').textContent = `${state.regStep}/2`;
}

/* ---------- Time / status bar ---------- */
function updateTime() {
  const t = new Date();
  const hh = String(t.getHours()).padStart(2, '0');
  const mm = String(t.getMinutes()).padStart(2, '0');
  $('#sb-time').textContent = `${hh}:${mm}`;
}

/* ---------- Wire-up ---------- */
function bind() {
  // Navigation
  $$('[data-go]').forEach(el => {
    el.addEventListener('click', (e) => {
      const target = el.dataset.go;
      if (target === 'services') {
        const cat = el.dataset.cat;
        if (cat) state.currentCat = cat;
      }
      if (target === 'order') {
        if (state.selectedOffers.size === 0) {
          showToast('Выберите хотя бы одну услугу');
          return;
        }
        buildOrder();
      }
      go(target);
    });
  });

  bindFilters();
  bindTabs();
  bindPayment();
  bindOrdersTabs();

  // Pay button
  $('#pay-btn').addEventListener('click', () => {
    const phone = $('#phone').value.trim();
    const address = $('#address').value.trim();
    if (!phone || !address) return showToast('Заполните номер и адрес');
    showToast('Заявка отправлена! Спасибо 🎉', 2600);
    setTimeout(() => {
      state.selectedOffers = new Set();
      state.promoApplied = false;
      $('#promo').value = '';
      go('orders');
    }, 1400);
  });

  // Register
  $$('.reg-cat').forEach(b => {
    b.addEventListener('click', () => {
      const c = b.dataset.cat;
      if (state.regCats.has(c)) state.regCats.delete(c);
      else state.regCats.add(c);
      b.classList.toggle('is-selected', state.regCats.has(c));
    });
  });
  $('#reg-next').addEventListener('click', () => {
    if (state.regCats.size === 0) return showToast('Выберите хотя бы одну категорию');
    state.regStep = 2;
    updateRegStep();
  });
  $('#reg-back').addEventListener('click', () => {
    state.regStep = 1;
    updateRegStep();
  });
  $('#submit-reg').addEventListener('click', () => {
    if (!$('#reg-name').value.trim()) return showToast('Введите имя');
    if (!$('#reg-phone').value.trim()) return showToast('Введите телефон');
    if (!$('#reg-city').value) return showToast('Выберите город');
    if (!$('#reg-tos').checked) return showToast('Согласитесь с условиями');
    showToast('Заявка отправлена! Свяжемся скоро 🎉', 2600);
    $('#reg-name').value = '';
    $('#reg-phone').value = '';
    $('#reg-city').value = '';
    $('#reg-exp').value = '';
    state.regCats = new Set();
    $$('.reg-cat').forEach(b => b.classList.remove('is-selected'));
    setTimeout(() => go('home'), 1400);
  });

  // Theme toggle
  $('#theme-toggle').addEventListener('click', toggleTheme);

  // Quick: support
  $$('[data-action="support"]').forEach(b => b.addEventListener('click', () => showToast('Скоро откроется чат поддержки')));

  // Time tick
  updateTime();
  setInterval(updateTime, 30 * 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  bind();
  renderFeatured();
  renderServicesGrid();
  renderServiceOffers();
  renderTimeTable();
  renderReviews();
  updateProfile();
});
