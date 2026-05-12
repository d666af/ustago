/* ============================================================
   UstaGo — App Logic
   Single-page navigation, selection state, totals.
   ============================================================ */

const CATEGORY_TITLES = {
  plumber: 'Сантехник сервисы',
  electric: 'Электрик сервисы',
  carpenter: 'Плотник сервисы',
  cleaning: 'Клининг сервисы',
};

const CATEGORY_EMOJI = {
  plumber: '🔧',
  electric: '⚡',
  carpenter: '🔨',
  cleaning: '🧽',
};

const SERVICES_BY_CAT = {
  cleaning: [
    { id: 'master-clean', name: 'Master Clean', emoji: '🧴', grad: 'linear-gradient(135deg,#FDE8EC 0%,#FFD3DA 100%)',
      tags: ['#генеральнаяуборка', '#влажнаяуборка', '#уборкачастныхдомов'], city: 'Ташкент' },
    { id: 'cleanpro', name: 'CleanPro', emoji: '💧', grad: 'linear-gradient(135deg,#E0F0FF 0%,#B8DFFF 100%)',
      tags: ['#уборкапослеремонта', '#уборкасантекники', '#генеральнаяуборка'], city: 'Ташкент' },
    { id: 'home-clean', name: 'Home Clean', emoji: '🏠', grad: 'linear-gradient(135deg,#E8F5E9 0%,#C8E6C9 100%)',
      tags: ['#влажнаяуборка', '#уборкаквартир', '#уборкаофисов'], city: 'Ташкент' },
    { id: 'chisto', name: 'Chisto+', emoji: '✨', grad: 'linear-gradient(135deg,#FFF8E1 0%,#FFE082 100%)',
      tags: ['#генеральнаяуборка', '#влажнаяуборка', '#стиркаковров'], city: 'Ташкент' },
  ],
  plumber: [
    { id: 'water-master', name: 'WaterMaster', emoji: '🚰', grad: 'linear-gradient(135deg,#E3F2FD 0%,#90CAF9 100%)',
      tags: ['#замена_труб', '#установкасмесителей', '#аварийныйвыезд'], city: 'Ташкент' },
    { id: 'aqua-pro', name: 'Aqua Pro', emoji: '🔧', grad: 'linear-gradient(135deg,#E1F5FE 0%,#81D4FA 100%)',
      tags: ['#сантехника', '#канализация', '#водоснабжение'], city: 'Ташкент' },
    { id: 'plumb24', name: 'Plumb 24', emoji: '💦', grad: 'linear-gradient(135deg,#E0F7FA 0%,#80DEEA 100%)',
      tags: ['#круглосуточно', '#утечки', '#радиаторы'], city: 'Ташкент' },
    { id: 'sant-uz', name: 'SantUz', emoji: '🛁', grad: 'linear-gradient(135deg,#EDE7F6 0%,#B39DDB 100%)',
      tags: ['#сантехник', '#установкаванн', '#душевыекабины'], city: 'Ташкент' },
  ],
  electric: [
    { id: 'voltlab', name: 'VoltLab', emoji: '⚡', grad: 'linear-gradient(135deg,#FFF8E1 0%,#FFD54F 100%)',
      tags: ['#электромонтаж', '#розетки', '#автоматы'], city: 'Ташкент' },
    { id: 'amp-master', name: 'AmpMaster', emoji: '🔌', grad: 'linear-gradient(135deg,#FFFDE7 0%,#FFF176 100%)',
      tags: ['#электрика', '#люстры', '#проводка'], city: 'Ташкент' },
    { id: 'elektro', name: 'Elektro Service', emoji: '💡', grad: 'linear-gradient(135deg,#FFF3E0 0%,#FFB74D 100%)',
      tags: ['#освещение', '#щитки', '#аварийный'], city: 'Ташкент' },
    { id: 'svetuz', name: 'SvetUz', emoji: '🔋', grad: 'linear-gradient(135deg,#FCE4EC 0%,#F48FB1 100%)',
      tags: ['#умныйдом', '#электромонтаж', '#диагностика'], city: 'Ташкент' },
  ],
  carpenter: [
    { id: 'wood-master', name: 'WoodMaster', emoji: '🪵', grad: 'linear-gradient(135deg,#EFEBE9 0%,#BCAAA4 100%)',
      tags: ['#мебельназаказ', '#двери', '#полы'], city: 'Ташкент' },
    { id: 'derevo', name: 'Derevo+', emoji: '🔨', grad: 'linear-gradient(135deg,#F3E5F5 0%,#CE93D8 100%)',
      tags: ['#плотник', '#столярка', '#ремонтмебели'], city: 'Ташкент' },
    { id: 'craft', name: 'CraftPro', emoji: '🪚', grad: 'linear-gradient(135deg,#FBE9E7 0%,#FFAB91 100%)',
      tags: ['#мебель', '#установкадверей', '#покраска'], city: 'Ташкент' },
    { id: 'masterwood', name: 'Master Wood', emoji: '🪑', grad: 'linear-gradient(135deg,#E8EAF6 0%,#9FA8DA 100%)',
      tags: ['#столяр', '#кухни', '#ремонт'], city: 'Ташкент' },
  ],
};

const SERVICE_OFFERS = {
  cleaning: [
    { id: 'full-apt', name: 'Полная уборка квартиры', price: 300000, icon: '🏡' },
    { id: 'post-reno', name: 'Уборка после ремонта', price: 500000, icon: '🧱' },
    { id: 'windows', name: 'Мытьё окон', price: 200000, icon: '🪟' },
    { id: 'carpets', name: 'Стирка ковров', price: 150000, icon: '🧶' },
  ],
  plumber: [
    { id: 'fix-leak', name: 'Устранение утечки', price: 150000, icon: '💧' },
    { id: 'install-mixer', name: 'Установка смесителя', price: 200000, icon: '🚰' },
    { id: 'pipe-replace', name: 'Замена труб', price: 450000, icon: '🔧' },
    { id: 'emergency', name: 'Аварийный выезд', price: 300000, icon: '🚨' },
  ],
  electric: [
    { id: 'outlet', name: 'Установка розеток', price: 80000, icon: '🔌' },
    { id: 'chandelier', name: 'Монтаж люстры', price: 150000, icon: '💡' },
    { id: 'wiring', name: 'Прокладка проводки', price: 400000, icon: '⚡' },
    { id: 'panel', name: 'Сборка щитка', price: 350000, icon: '🔋' },
  ],
  carpenter: [
    { id: 'door', name: 'Установка двери', price: 250000, icon: '🚪' },
    { id: 'furniture', name: 'Сборка мебели', price: 180000, icon: '🪑' },
    { id: 'floor', name: 'Укладка пола', price: 400000, icon: '🪵' },
    { id: 'shelves', name: 'Монтаж полок', price: 120000, icon: '📏' },
  ],
};

const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const HOURS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'];

/* ---------- State ---------- */
const state = {
  currentCat: 'cleaning',
  currentService: null,    // selected service brand
  selectedOffers: new Set(),
  selectedSlot: { day: 'Пн', hour: '09:00' },
  favorites: new Set(),
  regCats: new Set(),
};

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

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
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function formatPrice(n) {
  return n.toLocaleString('ru-RU');
}

/* ---------- Renderers ---------- */
function renderServicesGrid() {
  const grid = $('#services-grid');
  const cat = state.currentCat;
  const list = SERVICES_BY_CAT[cat] || [];
  $('#services-title').textContent = CATEGORY_TITLES[cat] || 'Сервисы';
  grid.innerHTML = list.map(s => `
    <article class="service-card" data-id="${s.id}">
      <button class="service-card__fav ${state.favorites.has(s.id) ? 'is-fav' : ''}" data-fav="${s.id}" aria-label="В избранное">
        <svg viewBox="0 0 24 24" fill="${state.favorites.has(s.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
      </button>
      <div class="service-card__img" style="background:${s.grad}">
        <span>${s.emoji}</span>
      </div>
      <div class="service-card__body">
        <div class="service-card__name">${s.name}</div>
        <div class="service-card__tags">${s.tags.join(' ')}</div>
      </div>
      <div class="service-card__city">
        <span>${s.city}</span>
        <span class="dots">···</span>
      </div>
    </article>
  `).join('');

  $$('.service-card', grid).forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-fav]')) return;
      const id = card.dataset.id;
      openDetail(id);
    });
  });
  $$('[data-fav]', grid).forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.fav;
      if (state.favorites.has(id)) state.favorites.delete(id);
      else state.favorites.add(id);
      renderServicesGrid();
    });
  });
}

function openDetail(serviceId) {
  const cat = state.currentCat;
  const list = SERVICES_BY_CAT[cat] || [];
  const svc = list.find(s => s.id === serviceId);
  if (!svc) return;
  state.currentService = svc;
  state.selectedOffers = new Set();

  $('#detail-name').textContent = svc.name;
  const hero = $('#detail-hero');
  hero.style.setProperty('--hero-grad', svc.grad);
  hero.innerHTML = `<span>${svc.emoji}</span>`;

  const fav = $('#detail-fav');
  fav.classList.toggle('is-fav', state.favorites.has(svc.id));
  fav.onclick = () => {
    if (state.favorites.has(svc.id)) state.favorites.delete(svc.id);
    else state.favorites.add(svc.id);
    fav.classList.toggle('is-fav', state.favorites.has(svc.id));
    const svg = fav.querySelector('svg');
    svg.setAttribute('fill', state.favorites.has(svc.id) ? 'currentColor' : 'none');
  };

  renderServiceOffers();
  renderTimeTable();
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
      <div class="svc__check">✓</div>
    </button>
  `).join('');

  $$('[data-offer]', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.offer;
      if (state.selectedOffers.has(id)) state.selectedOffers.delete(id);
      else state.selectedOffers.add(id);
      renderServiceOffers();
    });
  });
}

function renderTimeTable() {
  const wrap = $('#time-table');
  wrap.innerHTML = DAYS.slice(0, 4).map(d => `
    <div class="time-row">
      <span class="time-day">${d}:</span>
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

function buildOrder() {
  const offers = (SERVICE_OFFERS[state.currentCat] || []).filter(o => state.selectedOffers.has(o.id));
  const total = offers.reduce((s, o) => s + o.price, 0);
  $('#order-items').innerHTML = offers.map(o => `<li>${o.name}</li>`).join('') || '<li>Услуги не выбраны</li>';
  $('#order-total').textContent = formatPrice(total);
  const startVerb = state.currentCat === 'cleaning' ? 'уборки' : 'работ';
  $('#order-time').textContent = `${state.selectedSlot.day} ${state.selectedSlot.hour.replace(/^0/, '')}`;
  $('.start-time').firstChild.textContent = `Начало ${startVerb}: `;
}

/* ---------- Wire up ---------- */
function bind() {
  // Generic data-go navigation
  $$('[data-go]').forEach(el => {
    el.addEventListener('click', (e) => {
      const target = el.dataset.go;
      if (target === 'services') {
        const cat = el.dataset.cat;
        if (cat) state.currentCat = cat;
        renderServicesGrid();
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

  // Pay button
  $('#pay-btn').addEventListener('click', () => {
    const phone = $('#phone').value.trim();
    const address = $('#address').value.trim();
    if (!phone || !address) {
      showToast('Заполните номер и адрес');
      return;
    }
    showToast('Заявка отправлена! Спасибо 🎉', 2800);
    setTimeout(() => {
      state.selectedOffers = new Set();
      go('home');
    }, 1400);
  });

  // Register screen
  $$('.reg-cat').forEach(b => {
    b.addEventListener('click', () => {
      const c = b.dataset.cat;
      if (state.regCats.has(c)) state.regCats.delete(c);
      else state.regCats.add(c);
      b.classList.toggle('is-selected', state.regCats.has(c));
    });
  });

  $('#submit-reg').addEventListener('click', () => {
    const inputs = $$('.reg-form input, .reg-form select');
    const [name, phone, city] = inputs.map(i => i.value.trim());
    if (state.regCats.size === 0) return showToast('Выберите хотя бы одну категорию');
    if (!name) return showToast('Введите имя');
    if (!phone) return showToast('Введите номер телефона');
    if (!city) return showToast('Выберите город');
    showToast('Заявка отправлена! Скоро свяжемся 🎉', 2800);
    inputs.forEach(i => (i.value = ''));
    state.regCats = new Set();
    $$('.reg-cat').forEach(b => b.classList.remove('is-selected'));
    setTimeout(() => go('home'), 1400);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  bind();
  renderServicesGrid();
  renderServiceOffers();
  renderTimeTable();
});
