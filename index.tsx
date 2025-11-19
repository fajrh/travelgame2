interface DishType {
  name: string;
  raw: string;
  cooked: string;
  cookMs: number;
  value: number;
}

interface Customer {
  id: number;
  element: HTMLElement;
  patienceFill: HTMLElement;
  order: DishType;
  createdAt: number;
  angerTimeout: number;
  banterInterval: number | null;
  banterEl: HTMLElement;
}

interface ReadyDish {
  id: number;
  dish: DishType;
  bornAt: number;
  element: HTMLElement;
}

interface Theme {
  name: string;
  flag: string;
  gradient: string;
  ambientEmoji: string[];
  overlay?: string;
}

interface StaffState {
  prep: boolean;
  fry: boolean;
  runner: boolean;
  cleaner: boolean;
}

const dishes: DishType[] = [
  { name: 'fries', raw: '🥔', cooked: '🍟', cookMs: 2400, value: 18 },
  { name: 'ramen', raw: '🍜', cooked: '🍜', cookMs: 3200, value: 30 },
  { name: 'sushi', raw: '🍣', cooked: '🍣', cookMs: 3600, value: 34 },
  { name: 'pizza', raw: '🍕', cooked: '🍕', cookMs: 3400, value: 32 },
];

const themes: Theme[] = [
  {
    name: 'New York',
    flag: '🇺🇸',
    gradient: 'linear-gradient(135deg,#090d19,#1b2645,#2a2a72)',
    ambientEmoji: ['💨', '🚕', '⭐️'],
    overlay: 'rgba(255,215,0,0.06)',
  },
  {
    name: 'Istanbul',
    flag: '🇹🇷',
    gradient: 'linear-gradient(135deg,#4f1c29,#a6322d,#f2a65a)',
    ambientEmoji: ['🕌', '☕️', '✨'],
    overlay: 'rgba(255,120,80,0.08)',
  },
  {
    name: 'Paris',
    flag: '🇫🇷',
    gradient: 'linear-gradient(135deg,#2b1b2f,#bd3f77,#ff9a8b)',
    ambientEmoji: ['🌸', '✨', '🗼'],
    overlay: 'rgba(255,150,190,0.08)',
  },
  {
    name: 'Tokyo',
    flag: '🇯🇵',
    gradient: 'linear-gradient(135deg,#1a1d2f,#36315b,#e64298)',
    ambientEmoji: ['🌸', '🎏', '💫'],
    overlay: 'rgba(255,105,180,0.1)',
  },
];

const staffEmojis: Record<keyof StaffState, string> = {
  prep: '🧑‍🍳',
  fry: '👨‍🍳',
  runner: '🏃‍♂️',
  cleaner: '🧹',
};

const chatterLines = [
  'Put the fries in the bag!',
  'Joshua better see this.',
  'Crunch mode activated.',
  'I flew in for these.',
  'Need meme fuel now!',
  'My vlog is rolling...',
];

  const template = `
    <div class="hud">
      <div class="hud-section">
        <div class="logo-chip">FJ</div>
        <div class="flag-chip pulse" id="theme-flag">🇺🇸</div>
      </div>
      <div class="hud-section">
        <div class="cash-counter" id="cash-counter"><span>💸</span><span id="cash-value">0</span></div>
        <div class="xp-bar"><div class="xp-fill" id="xp-fill"></div></div>
      </div>
      <div class="hud-section">
        <button class="hud-btn" id="menu-btn" aria-label="menu">
          <span class="btn-icon">⚙️</span>
          <span class="btn-label small">Menu</span>
        </button>
        <button class="hud-btn" id="notify-btn" aria-label="notify">
          <span class="btn-icon">🔔</span>
          <span class="btn-label small">Alerts</span>
        </button>
      </div>
    </div>
    <div id="chaos-banner" class="chaos-banner"></div>
    <div class="world">
      <div class="lane" id="customers-lane">
        <div class="lane-tip prompt-chip">Serve memes fast!</div>
      </div>
      <div class="lane" id="stations-lane">
        <div class="station glow" id="station-bin">
          <div class="emoji">🥔</div>
          <div class="prompt-chip">Tap potatoes</div>
        </div>
        <div class="station" id="station-fryer">
          <div class="emoji">🔥</div>
          <div class="prompt-chip">Let them sizzle</div>
        </div>
        <div class="station" id="station-pass">
          <div class="emoji">📦</div>
          <div class="ready-stack" id="ready-stack"></div>
          <div class="prompt-chip">Serve the queue</div>
        </div>
      </div>
      <div class="lane" id="rewards-lane">
        <div class="prompt-chip lane-tip">Grab cash to hire staff</div>
        <div class="cash-pile" id="cash-pile"></div>
        <div id="tip-combo">✨ TIP STREAK! ✨</div>
      </div>
    </div>
    <div class="bottom-bar">
      <button class="action-btn" data-action="store">
        <span class="btn-icon">🛒</span>
        <span class="btn-label">Store</span>
      </button>
      <button class="action-btn" data-action="upgrades">
        <span class="btn-icon">⚡</span>
        <span class="btn-label">Boost</span>
      </button>
      <button class="action-btn" data-action="travel">
        <span class="btn-icon">✈️</span>
        <span class="btn-label">Travel</span>
      </button>
      <button class="action-btn" data-action="staff">
        <span class="btn-icon">👥</span>
        <span class="btn-label">Staff</span>
      </button>
      <button class="action-btn" data-action="stats">
        <span class="btn-icon">📊</span>
        <span class="btn-label">Stats</span>
      </button>
    </div>
    <div class="modal-sheet" id="action-sheet"></div>
  `;

class TinySynth {
  private ctx: AudioContext | null;

  constructor() {
    this.ctx = null;
  }

  private getCtx() {
    if (this.ctx) {
      return this.ctx;
    }
    const Ctx = window.AudioContext || (window as any).webkitAudioContext;
    if (!Ctx) return null;
    this.ctx = new Ctx();
    return this.ctx;
  }

  play(type: 'pop' | 'cash' | 'steam' | 'serve' | 'combo') {
    const ctx = this.getCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    gain.gain.value = 0.18;
    gain.connect(ctx.destination);
    osc.connect(gain);
    if (type === 'pop') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.stop(ctx.currentTime + 0.12);
    } else if (type === 'cash') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(720, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === 'steam') {
      const noise = ctx.createBufferSource();
      const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.2, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      noise.buffer = buffer;
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      noise.connect(gain);
      noise.start();
      noise.stop(ctx.currentTime + 0.2);
      osc.disconnect();
      return;
    } else if (type === 'serve') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(500, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(1000, ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.stop(ctx.currentTime + 0.2);
    } else {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(900, ctx.currentTime + 0.18);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.stop(ctx.currentTime + 0.3);
    }
  }
}

const synth = new TinySynth();

function initCafe() {
  const root = document.getElementById('game-root');
  const effectsLayer = document.getElementById('effects-layer');
  const ambientLayer = document.getElementById('ambient-layer');
  if (!root || !effectsLayer || !ambientLayer) return;
  root.innerHTML = template;

  const flagChip = document.getElementById('theme-flag') as HTMLElement;
  const chaosBanner = document.getElementById('chaos-banner') as HTMLElement;
  const cashValueEl = document.getElementById('cash-value') as HTMLElement;
  const xpFillEl = document.getElementById('xp-fill') as HTMLElement;
  const customersLane = document.getElementById('customers-lane') as HTMLElement;
  const stationBin = document.getElementById('station-bin') as HTMLElement;
  const stationFryer = document.getElementById('station-fryer') as HTMLElement;
  const stationPass = document.getElementById('station-pass') as HTMLElement;
  const readyStack = document.getElementById('ready-stack') as HTMLElement;
  const cashPile = document.getElementById('cash-pile') as HTMLElement;
  const tipComboEl = document.getElementById('tip-combo') as HTMLElement;
  const actionSheet = document.getElementById('action-sheet') as HTMLElement;

  const staffLayer = document.createElement('div');
  staffLayer.id = 'staff-layer';
  document.body.appendChild(staffLayer);
  const arrow = document.createElement('div');
  arrow.className = 'floating-arrow';
  arrow.textContent = '👆';
  document.body.appendChild(arrow);
  function positionArrow() {
    const rect = stationBin.getBoundingClientRect();
    arrow.style.left = `${rect.left + rect.width / 2 - 24}px`;
    arrow.style.top = `${rect.bottom + 8}px`;
  }
  positionArrow();
  window.addEventListener('resize', positionArrow);

  let currentTheme = 0;
  let unlockedDishes = [dishes[0]];
  let customers: Customer[] = [];
  let readyDishes: ReadyDish[] = [];
  let cash = 0;
  let xp = 0;
  let combo = 0;
  let lastServe = 0;
  let customerId = 0;
  let dishId = 0;
  let autoBinTimer: number | null = null;
  let runnerTimer: number | null = null;
  let currentSheetAction: string | null = null;
  let cookBoost = 1;
  let tipBoost = 1;
  let chaosActive = false;
  const staffState: StaffState = { prep: false, fry: false, runner: false, cleaner: false };
  const chaosEvents = [
    {
      icon: '🚨',
      label: 'FRIES IN THE BAG!!!',
      duration: 8000,
      start: () => {
        cookBoost = 0.45;
        tipBoost = 2;
      },
      end: () => {
        cookBoost = 1;
        tipBoost = 1;
      },
    },
    {
      icon: '🍹',
      label: '1700 SOMEWHERE',
      duration: 7000,
      start: () => {
        tipBoost = 3;
      },
      end: () => {
        tipBoost = 1;
      },
    },
    {
      icon: '🧢',
      label: 'CAPTAIN OF NY',
      duration: 7000,
      start: () => {
        customerRush();
      },
      end: () => undefined,
    },
  ];

  function setTheme(index: number) {
    currentTheme = index % themes.length;
    const theme = themes[currentTheme];
    document.body.style.background = theme.gradient;
    flagChip.textContent = theme.flag;
    ambientLayer.innerHTML = '';
    for (let i = 0; i < 10; i++) {
      const petal = document.createElement('div');
      petal.className = 'ambient-petal';
      petal.textContent = theme.ambientEmoji[i % theme.ambientEmoji.length];
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDelay = `${Math.random() * 6}s`;
      ambientLayer.appendChild(petal);
    }
  }

  setTheme(0);

  function updateCash(amount: number) {
    cash += amount;
    cashValueEl.textContent = cash.toLocaleString();
    cashValueEl.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(1)' },
      ],
      { duration: 300 }
    );
  }

  function updateXp(value: number) {
    xp = Math.min(100, xp + value);
    xpFillEl.style.width = `${xp}%`;
  }

  function createParticles(kind: 'steam' | 'cash' | 'heart' | 'spark', x: number, y: number) {
    const emojiMap = {
      steam: '♨️',
      cash: '💸',
      heart: '💖',
      spark: '✨',
    } as const;
    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('div');
      particle.className = 'emoji-bubble';
      particle.textContent = emojiMap[kind];
      particle.style.pointerEvents = 'none';
      particle.style.transform = `translate(${x}px, ${y}px) scale(0.6)`;
      effectsLayer.appendChild(particle);
      const dx = (Math.random() - 0.5) * 120;
      const dy = (Math.random() - 0.5) * 120;
      particle.animate(
        [
          { transform: `translate(${x}px, ${y}px) scale(0.6)`, opacity: 0.9 },
          { transform: `translate(${x + dx}px, ${y + dy}px) scale(0.2)`, opacity: 0 },
        ],
        { duration: 600, easing: 'ease-out' }
      ).onfinish = () => particle.remove();
    }
  }

  function getCenter(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }

  function spawnIngredient(dish: DishType, origin: 'player' | 'staff') {
    const start = getCenter(stationBin);
    const end = getCenter(stationFryer);
    const bubble = document.createElement('div');
    bubble.className = 'emoji-bubble';
    bubble.textContent = dish.raw;
    bubble.style.transform = `translate(${start.x - 26}px, ${start.y - 26}px)`;
    effectsLayer.appendChild(bubble);
    bubble.animate(
      [
        { transform: `translate(${start.x - 26}px, ${start.y - 26}px) scale(0.8)` },
        {
          transform: `translate(${(start.x + end.x) / 2 - 26}px, ${(start.y + end.y) / 2 - 70}px) rotate(20deg) scale(1.2)`,
        },
        { transform: `translate(${end.x - 26}px, ${end.y - 26}px)` },
      ],
      { duration: 600, easing: 'ease-out' }
    ).onfinish = () => {
      bubble.remove();
      startCooking(dish);
    };
    synth.play('pop');
    if (origin === 'player') {
      stationBin.animate(
        [
          { transform: 'scale(1)' },
          { transform: 'scale(1.08)' },
          { transform: 'scale(1)' },
        ],
        { duration: 200 }
      );
    }
  }

  function startCooking(dish: DishType) {
    const cookTime = (staffState.fry ? dish.cookMs * 0.75 : dish.cookMs) * cookBoost;
    synth.play('steam');
    const center = getCenter(stationFryer);
    createParticles('steam', center.x, center.y);
    setTimeout(() => finishCooking(dish), cookTime);
  }

  function finishCooking(dish: DishType) {
    const card = document.createElement('div');
    card.className = 'ready-dish';
    card.textContent = dish.cooked;
    readyStack.prepend(card);
    const item: ReadyDish = { id: dishId++, dish, bornAt: performance.now(), element: card };
    readyDishes.push(item);
    card.addEventListener('pointerdown', () => deliverDish(item));
    attemptServeQueue();
    if (staffState.runner && !runnerTimer) {
      runnerTimer = window.setTimeout(() => {
        deliverNextAuto();
        runnerTimer = null;
      }, 400);
    }
    synth.play('serve');
  }

  function deliverNextAuto() {
    const next = readyDishes[0];
    if (next) {
      deliverDish(next);
    }
  }

  function deliverDish(item: ReadyDish) {
    const customer = customers.find((c) => c.order === item.dish);
    if (!customer) return false;
    readyDishes = readyDishes.filter((d) => d.id !== item.id);
    item.element.remove();
    const from = getCenter(stationPass);
    const to = getCenter(customer.element);
    const flyer = document.createElement('div');
    flyer.className = 'emoji-bubble';
    flyer.textContent = item.dish.cooked;
    flyer.style.transform = `translate(${from.x - 26}px, ${from.y - 26}px)`;
    effectsLayer.appendChild(flyer);
    flyer.animate(
      [
        { transform: `translate(${from.x - 26}px, ${from.y - 26}px) scale(1)` },
        {
          transform: `translate(${(from.x + to.x) / 2 - 26}px, ${(from.y + to.y) / 2 - 90}px) rotate(10deg) scale(1.2)`,
        },
        { transform: `translate(${to.x - 26}px, ${to.y - 26}px)` },
      ],
      { duration: 500, easing: 'ease-out' }
    ).onfinish = () => flyer.remove();
    handleServe(customer, item.dish);
    return true;
  }

  function handleServe(customer: Customer, dish: DishType) {
    cleanupCustomer(customer);
    createParticles('heart', getCenter(customer.element).x, getCenter(customer.element).y - 20);
    synth.play('serve');
    clearTimeout(customer.angerTimeout);
    customers = customers.filter((c) => c.id !== customer.id);
    customer.element.classList.remove('angry');
    customer.element.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.2) rotate(-8deg)' },
        { transform: 'scale(1)' },
      ],
      { duration: 400 }
    ).onfinish = () => customer.element.remove();
    const now = performance.now();
    if (now - lastServe < 3500) {
      combo += 1;
    } else {
      combo = 1;
    }
    lastServe = now;
    tipComboEl.style.opacity = combo > 1 ? '1' : '0';
    tipComboEl.textContent = `✨ TIP COMBO x${combo}! ✨`;
    const basePay = dish.value;
    const tip = combo > 1 ? combo * 4 : 0;
    const total = Math.round((basePay + tip) * tipBoost);
    spawnCashToken(total, customer.element);
    updateXp(5);
  }

  function attemptServeQueue() {
    let served = false;
    do {
      served = false;
      for (const item of readyDishes) {
        if (deliverDish(item)) {
          served = true;
          break;
        }
      }
    } while (served);
  }

  function cleanupCustomer(customer: Customer) {
    if (customer.banterInterval) {
      window.clearInterval(customer.banterInterval);
      customer.banterInterval = null;
    }
    customer.banterEl.classList.remove('show');
  }

  function spawnCashToken(amount: number, origin: HTMLElement) {
    const start = getCenter(origin);
    const token = document.createElement('div');
    token.className = 'emoji-bubble collectible';
    token.textContent = '💵';
    token.style.transform = `translate(${start.x - 26}px, ${start.y - 26}px)`;
    effectsLayer.appendChild(token);
    let collected = false;
    const collect = () => {
      if (collected) return;
      collected = true;
      token.style.pointerEvents = 'none';
      const hud = getCenter(cashPile);
      token.animate(
        [
          { transform: `translate(${start.x - 26}px, ${start.y - 26}px) scale(1)` },
          {
            transform: `translate(${(start.x + hud.x) / 2 - 26}px, ${(start.y + hud.y) / 2 - 40}px) scale(1.2)`,
          },
          { transform: `translate(${hud.x - 26}px, ${hud.y - 26}px) scale(0.4)` },
        ],
        { duration: 500, easing: 'ease-in' }
      ).onfinish = () => token.remove();
      updateCash(amount);
      createParticles('cash', hud.x, hud.y);
      synth.play('cash');
    };
    token.addEventListener('pointerdown', collect);
    if (staffState.runner) {
      window.setTimeout(collect, 600);
    } else {
      window.setTimeout(() => {
        if (!collected) collect();
      }, 2000);
    }
  }

  function spawnCustomer() {
    const order = unlockedDishes[Math.floor(Math.random() * unlockedDishes.length)];
    const avatarPool = ['🙂', '🧕', '👳‍♂️', '🧑‍💼', '🤠', '😎'];
    const card = document.createElement('div');
    card.className = 'customer';
    const bubble = document.createElement('div');
    bubble.className = 'order-bubble';
    bubble.textContent = order.cooked;
    const avatar = document.createElement('div');
    avatar.textContent = avatarPool[Math.floor(Math.random() * avatarPool.length)];
    avatar.style.fontSize = '40px';
    const patience = document.createElement('div');
    patience.className = 'patience';
    const fill = document.createElement('div');
    fill.className = 'patience-fill';
    patience.appendChild(fill);
    const banter = document.createElement('div');
    banter.className = 'banter-bubble';
    banter.textContent = chatterLines[Math.floor(Math.random() * chatterLines.length)];
    card.appendChild(bubble);
    card.appendChild(avatar);
    card.appendChild(patience);
    card.appendChild(banter);
    customersLane.appendChild(card);
    const id = customerId++;
    const patienceMs = 15000;
    const createdAt = performance.now();
    const customer: Customer = {
      id,
      element: card,
      patienceFill: fill,
      order,
      createdAt,
      angerTimeout: 0,
      banterInterval: null,
      banterEl: banter,
    };
    const speak = () => {
      banter.textContent = chatterLines[Math.floor(Math.random() * chatterLines.length)];
      banter.classList.add('show');
      setTimeout(() => banter.classList.remove('show'), 1800);
    };
    const shouldChat = Math.random() > 0.25;
    const angerTimeout = window.setTimeout(() => {
      card.classList.add('angry');
      card.animate(
        [
          { transform: 'translateX(0)' },
          { transform: 'translateX(-200px)' },
        ],
        { duration: 600, easing: 'ease-in' }
      ).onfinish = () => card.remove();
      cleanupCustomer(customer);
      customers = customers.filter((c) => c.id !== id);
    }, patienceMs);
    customer.angerTimeout = angerTimeout;
    customers.push(customer);
    if (shouldChat) {
      setTimeout(() => speak(), 1200 + Math.random() * 1800);
      customer.banterInterval = window.setInterval(() => speak(), 5000 + Math.random() * 3500);
    }
    function tickPatience() {
      const elapsed = performance.now() - createdAt;
      const ratio = Math.max(0, 1 - elapsed / patienceMs);
      fill.style.width = `${ratio * 100}%`;
      if (ratio > 0) {
        requestAnimationFrame(tickPatience);
      }
    }
    tickPatience();
    attemptServeQueue();
  }

  function scheduleCustomers() {
    spawnCustomer();
    setInterval(spawnCustomer, 5000);
  }

  scheduleCustomers();

  function customerRush() {
    for (let i = 0; i < 3; i++) {
      setTimeout(spawnCustomer, i * 600);
    }
  }

  function triggerChaosEvent() {
    if (chaosActive) return;
    chaosActive = true;
    const event = chaosEvents[Math.floor(Math.random() * chaosEvents.length)];
    chaosBanner.textContent = `${event.icon} ${event.label}`;
    chaosBanner.classList.add('show');
    event.start();
    createParticles('spark', getCenter(stationFryer).x, getCenter(stationFryer).y - 40);
    setTimeout(() => {
      chaosBanner.classList.remove('show');
      event.end();
      chaosActive = false;
    }, event.duration);
  }

  setInterval(() => {
    if (Math.random() > 0.5) {
      spawnCustomer();
    }
  }, 12000);

  setInterval(() => {
    if (!chaosActive) {
      triggerChaosEvent();
    }
  }, 45000);

  function openSheet(action: string) {
    currentSheetAction = action;
    actionSheet.classList.add('show');
    if (action === 'upgrades') {
      actionSheet.innerHTML = '';
      const speed = document.createElement('div');
      speed.className = 'bubble-option';
      speed.innerHTML = '<span>⚡</span><small>+25% cook</small><strong>$120</strong>';
      speed.addEventListener('pointerdown', () => {
        if (cash >= 120) {
          updateCash(-120);
          stationFryer.classList.add('glow');
        }
      });
      actionSheet.appendChild(speed);
      const storage = document.createElement('div');
      storage.className = 'bubble-option';
      storage.innerHTML = '<span>📦</span><small>+stack</small><strong>$90</strong>';
      storage.addEventListener('pointerdown', () => {
        if (cash >= 90) {
          updateCash(-90);
          readyStack.style.maxHeight = '240px';
        }
      });
      actionSheet.appendChild(storage);
    } else if (action === 'staff') {
      actionSheet.innerHTML = '';
      (Object.keys(staffState) as (keyof StaffState)[]).forEach((role) => {
        const option = document.createElement('div');
        option.className = 'bubble-option';
        const hired = staffState[role];
        option.innerHTML = `<span>${staffEmojis[role]}</span><strong>${hired ? 'ON' : '$150'}</strong>`;
        option.addEventListener('pointerdown', () => {
          if (!hired && cash >= 150) {
            updateCash(-150);
            hireStaff(role);
            option.innerHTML = `<span>${staffEmojis[role]}</span><strong>ON</strong>`;
          }
        });
        actionSheet.appendChild(option);
      });
    } else if (action === 'travel') {
      actionSheet.innerHTML = '';
        themes.forEach((theme, idx) => {
          const option = document.createElement('div');
          option.className = 'bubble-option';
          option.innerHTML = `<span>${theme.flag}</span><strong>${theme.name}</strong>`;
          option.addEventListener('pointerdown', () => {
            setTheme(idx);
            closeSheet();
          });
          actionSheet.appendChild(option);
        });
      } else {
      actionSheet.innerHTML = '<div class="bubble-option"><span>⭐️</span><strong>Coming</strong></div>';
    }
  }

  function closeSheet() {
    actionSheet.classList.remove('show');
    currentSheetAction = null;
  }

  document.querySelectorAll<HTMLButtonElement>('.action-btn').forEach((btn) => {
    btn.addEventListener('pointerdown', () => {
      const action = btn.dataset.action;
      if (!action) return;
      if (!actionSheet.classList.contains('show')) {
        openSheet(action);
      } else if (currentSheetAction === action) {
        closeSheet();
      } else {
        openSheet(action);
      }
    });
  });

  stationBin.addEventListener('pointerdown', () => {
    spawnIngredient(unlockedDishes[0], 'player');
    arrow.remove();
  });
  stationPass.addEventListener('pointerdown', () => deliverNextAuto());

  function hireStaff(role: keyof StaffState) {
    if (staffState[role]) return;
    staffState[role] = true;
    if (role === 'prep') {
      if (autoBinTimer) window.clearInterval(autoBinTimer);
      autoBinTimer = window.setInterval(() => spawnIngredient(unlockedDishes[0], 'staff'), 1800);
      summonStaff(role);
    } else if (role === 'runner') {
      summonStaff(role);
    } else if (role === 'fry') {
      summonStaff(role);
    } else if (role === 'cleaner') {
      summonStaff(role);
      setInterval(() => createParticles('spark', getCenter(stationPass).x, getCenter(stationPass).y), 6000);
    }
  }

  function summonStaff(role: keyof StaffState) {
    const avatar = document.createElement('div');
    avatar.className = 'staff-avatar';
    avatar.textContent = staffEmojis[role];
    staffLayer.appendChild(avatar);
    const animate = () => {
      let from: { x: number; y: number };
      let to: { x: number; y: number };
      if (role === 'prep') {
        from = getCenter(stationBin);
        to = getCenter(stationFryer);
      } else if (role === 'runner') {
        from = getCenter(stationPass);
        to = getCenter(customersLane);
      } else {
        from = getCenter(stationFryer);
        to = getCenter(stationPass);
      }
      avatar.animate(
        [
          { transform: `translate(${from.x - 32}px, ${from.y - 32}px)` },
          { transform: `translate(${to.x - 32}px, ${to.y - 32}px)` },
          { transform: `translate(${from.x - 32}px, ${from.y - 32}px)` },
        ],
        { duration: role === 'runner' ? 1800 : 2200, iterations: Infinity }
      );
    };
    animate();
    window.addEventListener('resize', animate);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCafe);
} else {
  initCafe();
}
