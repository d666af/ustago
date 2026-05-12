/* ============================================================
   Cleanix — App Logic (cleaning-only)
   ============================================================ */

const SUB_CATEGORIES = [
  { id: 'apartment',  name: 'Уборка квартиры',     icon: '🏡', ico_class: 'sub-card__ico--indigo', priceFrom: 300000 },
  { id: 'general',    name: 'Генеральная',          icon: '✨', ico_class: 'sub-card__ico--orange', priceFrom: 450000 },
  { id: 'post-reno',  name: 'После ремонта',        icon: '🧱', ico_class: 'sub-card__ico--mix',    priceFrom: 500000 },
  { id: 'office',     name: 'Уборка офиса',         icon: '🏢', ico_class: 'sub-card__ico--navy',   priceFrom: 400000 },
  { id: 'windows',    name: 'Мытьё окон',           icon: '🪟', ico_class: 'sub-card__ico--indigo', priceFrom: 200000 },
  { id: 'carpets',    name: 'Стирка ковров',        icon: '🧶', ico_class: 'sub-card__ico--orange', priceFrom: 150000 },
  { id: 'sofa',       name: 'Химчистка мебели',     icon: '🛋️', ico_class: 'sub-card__ico--mix',    priceFrom: 280000 },
  { id: 'eco',        name: 'Эко-уборка',           icon: '🌿', ico_class: 'sub-card__ico--navy',   priceFrom: 350000 },
];

const SERVICES = [
  { id: 'master-clean', name: 'Master Clean', emoji: '🧴', grad: 'linear-gradient(135deg,#EEF1FE 0%,#C9D2FF 100%)',
    tags: '#генеральная #окна #ковры', city: 'Ташкент', rating: 4.9, reviews: 127, priceFrom: 300000, badge: 'Топ' },
  { id: 'cleanpro', name: 'CleanPro', emoji: '💧', grad: 'linear-gradient(135deg,#FFE9DC 0%,#FFC299 100%)',
    tags: '#послеремонта #офис #эко', city: 'Ташкент', rating: 4.7, reviews: 86, priceFrom: 280000 },
  { id: 'home-clean', name: 'Home Clean', emoji: '🏠', grad: 'linear-gradient(135deg,#E1F5E9 0%,#A5DCC1 100%)',
    tags: '#квартиры #офисы #влажная', city: 'Ташкент', rating: 4.8, reviews: 92, priceFrom: 250000 },
  { id: 'chisto', name: 'Chisto+', emoji: '✨', grad: 'linear-gradient(135deg,#FFF6E1 0%,#FFE082 100%)',
    tags: '#генеральная #ковры #окна', city: 'Ташкент', rating: 4.6, reviews: 64, priceFrom: 320000 },
  { id: 'eco-clean', name: 'EcoClean', emoji: '🌿', grad: 'linear-gradient(135deg,#E8F5E9 0%,#A5D6A7 100%)',
    tags: '#эко #без_химии #дети #животные', city: 'Ташкент', rating: 5.0, reviews: 41, priceFrom: 350000, badge: 'Эко' },
  { id: 'fast-clean', name: 'FastClean', emoji: '⚡', grad: 'linear-gradient(135deg,#FCE5E8 0%,#FFA8B2 100%)',
    tags: '#быстро #24часа #экспресс', city: 'Ташкент', rating: 4.5, reviews: 53, priceFrom: 230000 },
  { id: 'brillo', name: 'Brillo', emoji: '💎', grad: 'linear-gradient(135deg,#EDE7F6 0%,#B39DDB 100%)',
    tags: '#премиум #вилл #коттеджи', city: 'Ташкент', rating: 4.9, reviews: 38, priceFrom: 600000, badge: 'VIP' },
  { id: 'shine', name: 'Shine Co', emoji: '🌟', grad: 'linear-gradient(135deg,#E0F7FA 0%,#80DEEA 100%)',
    tags: '#влажная #окна #ванная', city: 'Ташкент', rating: 4.7, reviews: 72, priceFrom: 240000 },
];

const OFFERS = [
  { id: 'full-apt',    name: 'Полная уборка квартиры', price: 300000, icon: '🏡' },
  { id: 'general',     name: 'Генеральная уборка',     price: 450000, icon: '✨' },
  { id: 'post-reno',   name: 'Уборка после ремонта',   price: 500000, icon: '🧱' },
  { id: 'windows',     name: 'Мытьё окон',             price: 200000, icon: '🪟' },
  { id: 'carpets',     name: 'Стирка ковров',          price: 150000, icon: '🧶' },
  { id: 'sofa',        name: 'Химчистка мебели',       price: 280000, icon: '🛋️' },
  { id: 'office',      name: 'Уборка офиса',           price: 400000, icon: '🏢' },
  { id: 'eco-extra',   name: 'Эко-средства (+)',       price:  50000, icon: '🌿' },
];

const REVIEWS = [
  { name: 'Алишер', initial: 'А', date: '3 дня назад', rating: 5,
    text: 'Отличная работа! Команда приехала вовремя, всё сделали аккуратно и быстро. Очень доволен результатом.' },
  { name: 'Дилнора', initial: 'Д', date: 'на прошлой неделе', rating: 5,
    text: 'Мастера — профессионалы своего дела. Использовали современное оборудование и эко-средства. Рекомендую!' },
  { name: 'Бекзод', initial: 'Б', date: '2 недели назад', rating: 4,
    text: 'Хороший сервис, всё чисто. Немного задержались, но извинились и компенсировали. В целом — отлично.' },
  { name: 'Малика', initial: 'М', date: 'месяц назад', rating: 5,
    text: 'Заказывала генеральную уборку — результат превзошёл ожидания. Цена адекватная, качество на высоте.' },
];

const FEATURED_IDS = ['master-clean', 'eco-clean', 'brillo', 'chisto'];

const MOCK_ORDERS = {
  active: [
    { id: 'o1', service: 'Master Clean', sub: 'Полная уборка · Пн 09:00', price: 300000, status: 'В пути', emoji: '🧴' },
  ],
  done: [
    { id: 'o2', service: 'Home Clean',  sub: 'Уборка квартиры · 5 апр', price: 250000, status: 'Завершён', emoji: '🏠' },
    { id: 'o3', service: 'EcoClean',    sub: 'Эко-уборка · 1 апр',       price: 350000, status: 'Завершён', emoji: '🌿' },
    { id: 'o4', service: 'CleanPro',    sub: 'После ремонта · 28 мар',   price: 500000, status: 'Завершён', emoji: '💧' },
  ],
};

const REG_SERVICES = [
  { id: 'apartment',  name: 'Уборка квартир', icon: '🏡' },
  { id: 'general',    name: 'Генеральная',    icon: '✨' },
  { id: 'office',     name: 'Уборка офисов',  icon: '🏢' },
  { id: 'post-reno',  name: 'После ремонта',  icon: '🧱' },
  { id: 'windows',    name: 'Мытьё окон',     icon: '🪟' },
  { id: 'carpets',    name: 'Стирка ковров',  icon: '🧶' },
];

const RU_WEEKDAYS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const HOURS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

/* ---------- State ---------- */
const state = {
  currentService: null,
  selectedOffers: new Set(),
  selectedDate: null,
  selectedHour: '10:00',
  favorites: new Set(JSON.parse(localStorage.getItem('cleanix.favs') || '[]')),
  regServices: new Set(),
  regStep: 1,
  payMethod: 'click',
  promoApplied: false,
  promoDiscount: 0,
  theme: localStorage.getItem('cleanix.theme') || 'light',
  ordersTab: 'active',
  activeSubCategory: null,
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

function go(screen) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  const target = $(`[data-screen="${screen}"]`);
  if (!target) return;
  target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
  $$('.nav-tab').forEach(t => t.classList.toggle('is-active', t.dataset.go === screen));

  if (screen === 'services')  renderServicesGrid();
  if (screen === 'favorites') renderFavorites();
  if (screen === 'orders')    renderOrders();
  if (screen === 'profile')   updateProfile();
  if (screen === 'home')      renderHome();
  if (screen === 'register')  resetRegStep();
}

function formatPrice(n) { return n.toLocaleString('ru-RU'); }
function persistFavs() { localStorage.setItem('cleanix.favs', JSON.stringify([...state.favorites])); }
function findService(id) { return SERVICES.find(s => s.id === id) || null; }

/* ---------- Home ---------- */
function renderHome() {
  renderSubGrid();
  renderFeatured();
}

function renderSubGrid() {
  const wrap = $('#sub-grid');
  wrap.innerHTML = SUB_CATEGORIES.slice(0, 6).map(c => `
    <button class="sub-card" data-sub="${c.id}">
      <div class="sub-card__ico ${c.ico_class}">${c.icon}</div>
      <div class="sub-card__name">${c.name}</div>
      <div class="sub-card__price">от ${formatPrice(c.priceFrom)} сум</div>
    </button>
  `).join('');
  $$('[data-sub]', wrap).forEach(b => {
    b.addEventListener('click', () => {
      state.activeSubCategory = b.dataset.sub;
      go('services');
    });
  });
}

function renderFeatured() {
  const rail = $('#featured-rail');
  rail.innerHTML = FEATURED_IDS.map(id => {
    const s = findService(id);
    if (!s) return '';
    return `
      <article class="feat-card" data-id="${s.id}">
        <div class="feat-img" style="background:${s.grad}">${s.emoji}
          ${s.badge ? `<span class="feat-badge">${s.badge}</span>` : ''}
        </div>
        <div class="feat-body">
          <div class="feat-name">${s.name}</div>
          <div class="feat-meta">
            <span class="feat-rating"><svg class="icon icon-xs star"><use href="#i-star"/></svg> ${s.rating}</span>
            <span>·</span>
            <span>от ${formatPrice(s.priceFrom)} сум</span>
          </div>
        </div>
      </article>`;
  }).join('');
  $$('.feat-card', rail).forEach(c => c.addEventListener('click', () => openDetail(c.dataset.id)));
}

/* ---------- Services list ---------- */
function renderServicesGrid() {
  const grid = $('#services-grid');
  const sub = state.activeSubCategory;
  let list = SERVICES;
  if (sub) {
    const subDef = SUB_CATEGORIES.find(c => c.id === sub);
    $('#services-title').textContent = subDef ? subDef.name : 'Клининг сервисы';
  } else {
    $('#services-title').textContent = 'Клининг сервисы';
  }
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
        <span class="svc-card__price">от ${formatPrice(s.priceFrom)} с</span>
      </div>
    </article>`;
}

function bindSvcCards(scope) {
  $$('.svc-card', scope).forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-fav]')) return;
      openDetail(card.dataset.id);
    });
  });
  $$('[data-fav]', scope).forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFav(btn.dataset.fav);
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
  $('#detail-desc').textContent = `Профессиональный клининг сервис с опытом 5+ лет. Качественная уборка квартир, домов и офисов. Гарантия чистоты и скорости!`;

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
  renderDateRail();
  renderHourGrid();
  renderReviews();
  updateCtaTotal();

  $$('.tab').forEach(t => t.classList.toggle('is-active', t.dataset.tab === 'services'));
  $$('.tab-pane').forEach(p => p.classList.toggle('is-active', p.dataset.pane === 'services'));

  go('detail');
}

function renderServiceOffers() {
  const wrap = $('#service-list');
  wrap.innerHTML = OFFERS.map(o => `
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

function renderDateRail() {
  const wrap = $('#date-rail');
  const today = new Date();
  const days = [];
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  if (!state.selectedDate) state.selectedDate = days[0].toDateString();
  wrap.innerHTML = days.map(d => {
    const key = d.toDateString();
    const sel = state.selectedDate === key;
    return `
      <button class="date-pill ${sel ? 'is-selected' : ''}" data-date="${key}">
        <span class="d-day">${RU_WEEKDAYS[d.getDay()]}</span>
        <span class="d-num">${d.getDate()}</span>
      </button>`;
  }).join('');
  $$('[data-date]', wrap).forEach(b => {
    b.addEventListener('click', () => {
      state.selectedDate = b.dataset.date;
      renderDateRail();
    });
  });
}

function renderHourGrid() {
  const wrap = $('#hour-grid');
  wrap.innerHTML = HOURS.map(h => `
    <button class="hour-slot ${state.selectedHour === h ? 'is-selected' : ''}" data-hour="${h}">${h}</button>
  `).join('');
  $$('[data-hour]', wrap).forEach(b => {
    b.addEventListener('click', () => {
      state.selectedHour = b.dataset.hour;
      renderHourGrid();
    });
  });
}

function renderReviews() {
  const wrap = $('#reviews-list');
  wrap.innerHTML = REVIEWS.map(r => `
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
  return OFFERS.filter(o => state.selectedOffers.has(o.id)).reduce((s, o) => s + o.price, 0);
}

function updateCtaTotal() {
  $('#cta-total').textContent = formatPrice(selectedOffersTotal());
}

/* ---------- Order ---------- */
function formatDateShort(key) {
  if (!key) return '';
  const d = new Date(key);
  return `${RU_WEEKDAYS[d.getDay()]} ${d.getDate()}`;
}

function buildOrder() {
  const offers = OFFERS.filter(o => state.selectedOffers.has(o.id));
  const sum = offers.reduce((s, o) => s + o.price, 0);
  const discount = state.promoApplied ? state.promoDiscount : 0;
  const total = sum + SERVICE_FEE - discount;
  $('#order-items').innerHTML = offers.map(o => `<li>${o.name} — ${formatPrice(o.price)} сум</li>`).join('') || '<li>Услуги не выбраны</li>';
  $('#order-time').textContent = `${formatDateShort(state.selectedDate)} · ${state.selectedHour}`;
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
      state.promoApplied = true;
      state.promoDiscount = Math.round(selectedOffersTotal() * 0.2);
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

/* ---------- Profile ---------- */
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
  localStorage.setItem('cleanix.theme', state.theme);
  applyTheme();
}

/* ---------- Register ---------- */
function renderRegServices() {
  const wrap = $('#reg-services');
  wrap.innerHTML = REG_SERVICES.map(s => `
    <button class="reg-svc ${state.regServices.has(s.id) ? 'is-selected' : ''}" data-rs="${s.id}">
      <span class="reg-emoji">${s.icon}</span>
      <span>${s.name}</span>
    </button>
  `).join('');
  $$('[data-rs]', wrap).forEach(b => {
    b.addEventListener('click', () => {
      const id = b.dataset.rs;
      if (state.regServices.has(id)) state.regServices.delete(id);
      else state.regServices.add(id);
      renderRegServices();
    });
  });
}

function resetRegStep() {
  state.regStep = 1;
  updateRegStep();
}
function updateRegStep() {
  $$('.reg-step').forEach(s => s.classList.toggle('is-active', Number(s.dataset.step) === state.regStep));
  $('#reg-progress').style.width = `${state.regStep * 50}%`;
  $('#reg-step-pill').textContent = `${state.regStep}/2`;
}

/* ---------- Time ---------- */
function updateTime() {
  const t = new Date();
  const hh = String(t.getHours()).padStart(2, '0');
  const mm = String(t.getMinutes()).padStart(2, '0');
  $('#sb-time').textContent = `${hh}:${mm}`;
}

/* ---------- Wire-up ---------- */
function bind() {
  $$('[data-go]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.go;
      if (target === 'services') state.activeSubCategory = null;
      if (target === 'order') {
        if (state.selectedOffers.size === 0) return showToast('Выберите хотя бы одну услугу');
        buildOrder();
      }
      go(target);
    });
  });

  bindFilters();
  bindTabs();
  bindPayment();
  bindOrdersTabs();

  $('#pay-btn').addEventListener('click', () => {
    const phone = $('#phone').value.trim();
    const address = $('#address').value.trim();
    if (!phone || !address) return showToast('Заполните номер и адрес');
    showToast('Заявка отправлена! Спасибо ✨', 2600);
    setTimeout(() => {
      state.selectedOffers = new Set();
      state.promoApplied = false;
      $('#promo').value = '';
      go('orders');
    }, 1400);
  });

  $('#reg-next').addEventListener('click', () => {
    if (state.regServices.size === 0) return showToast('Выберите хотя бы одну услугу');
    state.regStep = 2;
    updateRegStep();
  });
  $('#reg-back').addEventListener('click', () => {
    state.regStep = 1;
    updateRegStep();
  });
  $('#submit-reg').addEventListener('click', () => {
    if (!$('#reg-name').value.trim())  return showToast('Введите имя');
    if (!$('#reg-phone').value.trim()) return showToast('Введите телефон');
    if (!$('#reg-city').value)         return showToast('Выберите город');
    if (!$('#reg-tos').checked)        return showToast('Согласитесь с условиями');
    showToast('Заявка отправлена! Свяжемся скоро 🎉', 2600);
    $('#reg-name').value = '';
    $('#reg-phone').value = '';
    $('#reg-city').value = '';
    $('#reg-exp').value = '';
    state.regServices = new Set();
    renderRegServices();
    setTimeout(() => go('home'), 1400);
  });

  $('#theme-toggle').addEventListener('click', toggleTheme);
  $$('[data-action="support"]').forEach(b => b.addEventListener('click', () => showToast('Скоро откроется чат поддержки')));

  updateTime();
  setInterval(updateTime, 30 * 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  bind();
  renderHome();
  renderServicesGrid();
  renderServiceOffers();
  renderDateRail();
  renderHourGrid();
  renderReviews();
  renderRegServices();
  updateProfile();
});
