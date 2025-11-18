document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const worldMap = document.getElementById('world-map') as HTMLElement;
    const personContainer = document.getElementById('person-container') as HTMLElement;
    const personEmoji = document.getElementById('person-emoji') as HTMLElement;
    const personLabel = document.getElementById('person-label') as HTMLElement;
    const airportImg = document.getElementById('airport-img') as HTMLElement;
    const airportContainer = document.getElementById('airport-container') as HTMLElement;
    const airportLabel = document.getElementById('airport-label') as HTMLElement;
    const awayAirportPlaceholder = document.getElementById('away-airport-placeholder') as HTMLButtonElement;
    const passportOfficeContainer = document.getElementById('passport-office-container') as HTMLElement;
    const restaurantContainer = document.getElementById('restaurant-container') as HTMLButtonElement;
    const giftShopContainer = document.getElementById('gift-shop-container') as HTMLButtonElement;
    const mfGroupContainer = document.getElementById('mf-group-container') as HTMLElement;
    const luggageContainer = document.getElementById('luggage-container') as HTMLElement;
    const settingsContainer = document.getElementById('settings-container') as HTMLElement;
    const officerMessage = document.getElementById('officer-message') as HTMLElement;
    const passportDialog = document.getElementById('passport-dialog') as HTMLElement;
    const settingsDialog = document.getElementById('settings-dialog') as HTMLElement;
    const applyPassportBtn = document.getElementById('apply-passport-btn') as HTMLButtonElement;
    const successMessage = document.getElementById('success-message') as HTMLElement;
    const successText = document.getElementById('success-text') as HTMLElement;
    const scoreEl = document.getElementById('score') as HTMLElement;
    const flightsDialog = document.getElementById('flights-dialog') as HTMLElement;
    const flightsContainer = document.getElementById('flights-container') as HTMLElement;
    const flightTooltip = document.getElementById('flight-tooltip') as HTMLElement;
    const planeAnimationDialog = document.getElementById('plane-animation') as HTMLElement;
    const passportCelebration = document.getElementById('passport-celebration') as HTMLElement;
    const visaAnimationDialog = document.getElementById('visa-animation') as HTMLElement;
    const visaStickerEmoji = document.getElementById('visa-sticker-emoji') as HTMLElement;
    const cityImageContainer = document.getElementById('city-image-container') as HTMLElement;
    const cityImage = document.getElementById('city-image') as HTMLImageElement;
    const restaurantViewContainer = document.getElementById('restaurant-view-container') as HTMLElement;
    const restaurantImage = document.getElementById('restaurant-image') as HTMLImageElement;
    const captionContainer = document.getElementById('caption-container') as HTMLElement;
    const cityTitle = document.getElementById('city-title') as HTMLElement;
    const cityEmojis = document.getElementById('city-emojis') as HTMLElement;
    const visitedCitiesList = document.getElementById('visited-cities-list') as HTMLElement;
    const visitedList = document.getElementById('visited-list') as HTMLUListElement;
    const giftShopDialog = document.getElementById('gift-shop-dialog') as HTMLElement;
    const giftShopItemsContainer = document.getElementById('gift-shop-items-container') as HTMLElement;
    const exitGiftShopBtn = document.getElementById('exit-gift-shop-btn') as HTMLButtonElement;
    const souvenirsContainer = document.getElementById('souvenirs-container') as HTMLElement;
    const souvenirsList = document.getElementById('souvenirs-list') as HTMLElement;
    
    // Restaurant & Minigame Elements (Legacy and repurposed)
    const minigameDialog = document.getElementById('minigame-dialog') as HTMLElement;
    const staffDialog = document.getElementById('staff-dialog') as HTMLElement;
    const memoryMatchBtn = document.getElementById('memory-match-btn') as HTMLButtonElement;
    const gemSwapBtn = document.getElementById('gem-swap-btn') as HTMLButtonElement;
    const friesContainer = document.getElementById('fries-container') as HTMLElement;
    const bagDropzone = document.getElementById('bag-dropzone') as HTMLElement;
    const minigameTitle = document.getElementById('minigame-title');
    const staffStatus = document.getElementById('staff-status') as HTMLElement;
    const hireWorkerBtn = document.getElementById('hire-worker-btn') as HTMLButtonElement;
    const promoteWorkerBtn = document.getElementById('promote-worker-btn') as HTMLButtonElement;
    const workerAnimationContainer = document.getElementById('worker-animation-container') as HTMLElement;
    const workerAnimationRow = document.getElementById('worker-animation-row') as HTMLElement;
    
    // New Minigame Elements
    const memoryGameDialog = document.getElementById('memory-game-dialog') as HTMLElement;
    const memoryGameGrid = document.getElementById('memory-game-grid') as HTMLElement;
    const gemSwapDialog = document.getElementById('gem-swap-dialog') as HTMLElement;
    const gemSwapGrid = document.getElementById('gem-swap-grid') as HTMLElement;
    
    // Settings Elements
    const playerNameInput = document.getElementById('player-name-input') as HTMLInputElement;
    const sfxMuteBtn = document.getElementById('sfx-mute-btn') as HTMLButtonElement;
    const musicMuteBtn = document.getElementById('music-mute-btn') as HTMLButtonElement;
    const settingsOkBtn = document.getElementById('settings-ok-btn') as HTMLButtonElement;
    const emojiOptionButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-emoji-option]'));

    // --- NEW Cafe Tycoon Elements ---
    const cafeWorldContainer = document.getElementById('cafe-world-container') as HTMLElement;
    const carryCounter = document.getElementById('carry-counter') as HTMLElement;
    const servingSlots = document.getElementById('serving-slots') as HTMLElement;
    const returnToWorldBtn = document.getElementById('return-to-world-btn') as HTMLButtonElement;
    const cafePlayer = document.getElementById('cafe-player') as HTMLElement;
    const cafeUpgradesBtn = document.getElementById('cafe-upgrades-btn') as HTMLButtonElement;
    const cafeUpgradesDialog = document.getElementById('cafe-upgrades-dialog') as HTMLElement;
    const hireCollectorBtn = document.getElementById('hire-collector-btn') as HTMLButtonElement;
    const hireCookBtn = document.getElementById('hire-cook-btn') as HTMLButtonElement;
    const cafeWorkerCollector = document.getElementById('cafe-worker-collector') as HTMLElement;
    const cafeWorkerCook = document.getElementById('cafe-worker-cook') as HTMLElement;
    const stationPotatoBin = document.getElementById('station-potato-bin') as HTMLElement;
    const stationSlicer = document.getElementById('station-slicer') as HTMLElement;
    const stationFryer = document.getElementById('station-fryer') as HTMLElement;
    const cafeBranchBanner = document.getElementById('cafe-branch-banner') as HTMLElement;
    const cafeBranchTitle = document.getElementById('cafe-branch-title') as HTMLElement;
    const cafeBranchMenu = document.getElementById('cafe-branch-menu') as HTMLElement;
    const cafeQueue = document.getElementById('cafe-queue') as HTMLElement;
    const cafeDishStack = document.getElementById('cafe-dish-stack') as HTMLElement;
    const cafeCashStack = document.getElementById('cafe-cash-stack') as HTMLElement;
    const cafeCustomerTables = document.getElementById('cafe-customer-tables') as HTMLElement;
    const cafeCityChip = document.getElementById('cafe-city-chip') as HTMLElement;
    const cafeMoneyTotal = document.getElementById('cafe-money-total') as HTMLElement;
    const cafeOrdersTotal = document.getElementById('cafe-orders-total') as HTMLElement;
    const cafeReadyTotal = document.getElementById('cafe-ready-total') as HTMLElement;
    const cafeOrdersList = document.getElementById('cafe-orders-list') as HTMLElement;
    const cafeReadyList = document.getElementById('cafe-ready-list') as HTMLElement;
    const cafeInventoryItems = document.getElementById('cafe-inventory-items') as HTMLElement;
    const cafeCarryBadge = document.getElementById('cafe-carry-badge') as HTMLElement;
    const cafeCapacityText = document.getElementById('cafe-capacity-text') as HTMLElement;
    const cafeInstructionRibbon = document.getElementById('cafe-instruction-ribbon') as HTMLElement;
    const cafeRibbonClose = document.getElementById('cafe-ribbon-close') as HTMLButtonElement;
    const cafeRibbonShow = document.getElementById('cafe-ribbon-show') as HTMLButtonElement;
    const cafeOpenTutorialBtn = document.getElementById('cafe-open-tutorial') as HTMLButtonElement;
    const cafeTutorialOverlay = document.getElementById('cafe-tutorial-overlay') as HTMLElement;
    const cafeTutorialClose = document.getElementById('cafe-close-tutorial') as HTMLButtonElement;


    // --- Audio Engine ---
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();

    function playSound(type: 'move' | 'earn' | 'success' | 'takeoff' | 'error' | 'click' | 'passport-get' | 'stamp' | 'pop' | 'welcome' | 'ding-dong' | 'card-flip') {
        if (isSfxMuted) return;
        if (!audioCtx || audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        if (!audioCtx) return;

        const now = audioCtx.currentTime;
        
        const gainNode = audioCtx.createGain();
        gainNode.connect(audioCtx.destination);
        
        if (type === 'pop') {
            const osc = audioCtx.createOscillator();
            osc.type = 'sine';
            gainNode.gain.setValueAtTime(0.1, now);
            osc.frequency.setValueAtTime(800, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.connect(gainNode);
            osc.start(now);
            osc.stop(now + 0.05);
        } else if (type === 'earn') {
            const osc = audioCtx.createOscillator();
            gainNode.gain.setValueAtTime(0.15, now);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, now); // A5 note
            osc.frequency.setValueAtTime(1046.50, now + 0.05); // C6 note
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
            osc.connect(gainNode);
            osc.start(now);
            osc.stop(now + 0.2);
        } else if (type === 'click') {
            const osc = audioCtx.createOscillator();
            osc.type = 'sine';
            gainNode.gain.setValueAtTime(0.2, now);
            osc.frequency.setValueAtTime(200, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            osc.connect(gainNode);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'stamp') {
             const osc = audioCtx.createOscillator();
             osc.type = 'triangle';
             gainNode.gain.setValueAtTime(0.3, now);
             osc.frequency.setValueAtTime(150, now);
             osc.frequency.exponentialRampToValueAtTime(50, now + 0.2);
             gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
             osc.connect(gainNode);
             osc.start(now);
             osc.stop(now + 0.2);
        } else if (type === 'passport-get' || type === 'welcome') {
            const osc = audioCtx.createOscillator();
            gainNode.gain.setValueAtTime(0.2, now);
            osc.type = 'sine';
            const notes = type === 'welcome' ? [523, 784, 1046] : [523, 659, 784, 1046];
            notes.forEach((freq, i) => {
                 osc.frequency.setValueAtTime(freq, now + i * 0.1);
            });
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + (notes.length * 0.1 + 0.1));
            osc.connect(gainNode);
            osc.start(now);
            osc.stop(now + (notes.length * 0.1 + 0.1));
        } else if (type === 'success') {
            const osc = audioCtx.createOscillator();
            gainNode.gain.setValueAtTime(0.15, now);
            osc.type = 'sine';
            const notes = [440, 554, 659];
            notes.forEach((freq, i) => {
                osc.frequency.setValueAtTime(freq, now + i * 0.15);
            });
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + (notes.length * 0.15 + 0.2));
            osc.connect(gainNode);
            osc.start(now);
            osc.stop(now + (notes.length * 0.15 + 0.2));
        } else if(type === 'ding-dong') {
            const osc = audioCtx.createOscillator();
            gainNode.gain.setValueAtTime(0.2, now);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1200, now);
            osc.frequency.setValueAtTime(900, now + 0.2);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
            osc.connect(gainNode);
            osc.start(now);
            osc.stop(now + 0.6);
        } else if (type === 'takeoff') {
            const osc = audioCtx.createOscillator();
            gainNode.gain.setValueAtTime(0.2, now);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(100, now);
            osc.frequency.exponentialRampToValueAtTime(1500, now + 1.5);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
            osc.connect(gainNode);
            osc.start(now);
            osc.stop(now + 1.5);
        } else if (type === 'error') {
             const osc = audioCtx.createOscillator();
            gainNode.gain.setValueAtTime(0.1, now);
            osc.type = 'square';
            osc.frequency.setValueAtTime(100, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
            osc.connect(gainNode);
            osc.start(now);
            osc.stop(now + 0.2);
        } else if (type === 'card-flip') {
            const osc = audioCtx.createOscillator();
            osc.type = 'triangle';
            gainNode.gain.setValueAtTime(0.1, now);
            osc.frequency.setValueAtTime(1200, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.connect(gainNode);
            osc.start(now);
            osc.stop(now + 0.08);
        }
    }
    
    // --- Advanced Audio Engine (Unchanged) ---
    interface CitySound { notes: string[]; durations: number | number[]; oscType: string; filter: { type: string; cutoff: number; Q: number; }; adsr: { attack: number; decay: number; sustain: number; release: number; }; amp: number; vibrato?: { depth: number; rate: number; }; percussion?: { noiseTime: number; noiseGain: number; }; }
    const citySoundData: Record<string, CitySound> = { "Istanbul": { notes: ["D4","Eb4","F#4","G4","A4","F#4"], durations: 0.45, oscType: "sawtooth", filter: { type:"lowpass", cutoff:1200, Q:1.0 }, adsr: { attack:0.005, decay:0.12, sustain:0.35, release:0.3 }, amp: 0.12, vibrato: { depth:6, rate:5 } }, "Paris": { notes: ["G4","B4","D5","B4"], durations: 0.6, oscType: "triangle", filter: { type:"bandpass", cutoff:900, Q:1.4 }, adsr: { attack:0.02, decay:0.08, sustain:0.7, release:0.2 }, amp: 0.14, vibrato: { depth:2.5, rate:5 } }, "Kyoto": { notes: ["D4","E4","G4","A4","C5"], durations: 0.6, oscType: "sine", filter: { type:"lowpass", cutoff:1800, Q:0.8 }, adsr: { attack:0.01, decay:0.15, sustain:0.4, release:0.4 }, amp: 0.11, vibrato: { depth:4, rate:4 } }, "Sydney": { notes: ["A2"], durations: 3.0, oscType: "square", filter: { type:"lowpass", cutoff:500, Q:1.0 }, adsr: { attack:0.05, decay:0.2, sustain:0.8, release:0.8 }, amp: 0.12, percussion: { noiseTime:0.6, noiseGain:0.08 } }, "Barcelona": { notes: ["E4","F4","G4","B4","E5"], durations: 0.35, oscType: "sawtooth", filter: { type:"lowpass", cutoff:2200, Q:0.9 }, adsr: { attack:0.002, decay:0.08, sustain:0.3, release:0.25 }, amp: 0.13, vibrato: { depth:5, rate:6 } }, "London": { notes: ["C4","E4","G4","C5"], durations: 0.45, oscType: "triangle", filter: { type:"bandpass", cutoff:900, Q:1.8 }, adsr: { attack:0.01, decay:0.08, sustain:0.5, release:0.2 }, amp: 0.15 }, "New York": { notes: ["Bb3","D4","F4","Ab4","Bb4"], durations: 0.35, oscType: "sawtooth", filter: { type:"bandpass", cutoff:900, Q:1.5 }, adsr: { attack:0.01, decay:0.07, sustain:0.45, release:0.18 }, amp: 0.14, vibrato: { depth:7, rate:5 } }, "Bangkok": { notes: ["E4","F#4","G#4","B4","C#5"], durations: 0.45, oscType: "square", filter: { type:"lowpass", cutoff:3600, Q:0.7 }, adsr: { attack:0.002, decay:0.06, sustain:0.25, release:0.22 }, amp: 0.12 }, "Cape Town": { notes: ["C4","D4","E4","G4","A4","G4"], durations: 0.45, oscType: "sine", filter: { type:"lowpass", cutoff:1800, Q:0.5 }, adsr: { attack:0.002, decay:0.06, sustain:0.3, release:0.18 }, amp: 0.11 }, "Budapest": { notes: ["A3","C#4","D4","E4","G#4","A4"], durations: 0.4, oscType: "sawtooth", filter: { type:"lowpass", cutoff:2100, Q:1.0 }, adsr: { attack:0.01, decay:0.08, sustain:0.4, release:0.25 }, amp: 0.13 }, "Cairo": { notes: ["D4","E4","F#4","G4","A4"], durations: 0.45, oscType: "sawtooth", filter: { type:"lowpass", cutoff:1200, Q:1.0 }, adsr: { attack:0.005, decay:0.12, sustain:0.35, release:0.3 }, amp: 0.12, vibrato: { depth:6, rate:5 } }, "Jeddah": { notes: ["C4","D4","E4","F4","G4"], durations: 0.45, oscType: "sawtooth", filter: { type:"lowpass", cutoff:1100, Q:1.0 }, adsr: { attack:0.005, decay:0.12, sustain:0.33, release:0.28 }, amp: 0.12, vibrato: { depth:5, rate:5 } }, "Karachi": { notes: ["C4","Db4","E4","F4","G4","Ab4","B4","C5"], durations: 0.38, oscType: "sawtooth", filter: { type:"lowpass", cutoff:1400, Q:1.1 }, adsr: { attack:0.005, decay:0.1, sustain:0.3, release:0.25 }, amp: 0.12, vibrato: { depth:6, rate:5.5 } }, "Toronto": { notes: ["G3", "C4", "C4", "D4", "E4"], durations: [0.7, 0.3, 0.4, 0.7, 0.7], oscType: "triangle", filter: { type:"lowpass", cutoff:1800, Q:1.0 }, adsr: { attack:0.02, decay:0.1, sustain:0.7, release:0.4 }, amp: 0.15 } };
    function noteToFreq(note: string): number | null { const noteRegex = /^([A-Ga-g])([#b]?)(-?\d+)$/; const m = note.match(noteRegex); if (!m) return null; let [, letter, accidental, octave] = m; letter = letter.toUpperCase(); const semitoneMap: {[key: string]: number} = { 'C':0,'D':2,'E':4,'F':5,'G':7,'A':9,'B':11 }; let semis = semitoneMap[letter]; if (accidental === '#') semis += 1; if (accidental === 'b') semis -= 1; const midi = (parseInt(octave,10) + 1) * 12 + semis; const freq = 440 * Math.pow(2, (midi - 69)/12); return +freq.toFixed(3); }
    function applyADSR(param: AudioParam, startTime: number, attack: number, decay: number, sustainLevel: number, release: number, duration: number) { const t0 = startTime; param.cancelScheduledValues(t0); param.setValueAtTime(0.0001, t0); param.exponentialRampToValueAtTime(1.0, t0 + attack); param.exponentialRampToValueAtTime(Math.max(0.0001, sustainLevel), t0 + attack + decay); const releaseStart = t0 + duration; param.setValueAtTime(Math.max(0.0001, sustainLevel), releaseStart); param.exponentialRampToValueAtTime(0.0001, releaseStart + release); }
    function playCitySound(cityName: keyof typeof citySoundData) { 
        if (isMusicMuted) return;
        const data = citySoundData[cityName]; if (!data) return; if (audioCtx.state === 'suspended') audioCtx.resume(); const start = audioCtx.currentTime + 0.05; const master = audioCtx.createGain(); master.gain.value = data.amp; master.connect(audioCtx.destination); let vibOsc: OscillatorNode | null = null, vibGain: GainNode | null = null; if (data.vibrato) { vibOsc = audioCtx.createOscillator(); vibOsc.type = "sine"; vibOsc.frequency.value = data.vibrato.rate; vibGain = audioCtx.createGain(); vibGain.gain.value = data.vibrato.depth; vibOsc.connect(vibGain); vibOsc.start(start); } if (data.percussion) { const noiseBuf = audioCtx.createBuffer(1, audioCtx.sampleRate * 1.0, audioCtx.sampleRate); const arr = noiseBuf.getChannelData(0); for (let i=0; i<arr.length; i++) arr[i] = (Math.random()*2-1) * Math.exp(-i/(audioCtx.sampleRate*0.25)); const src = audioCtx.createBufferSource(); src.buffer = noiseBuf; const g = audioCtx.createGain(); g.gain.value = data.percussion.noiseGain; src.connect(g); g.connect(master); src.start(start + data.percussion.noiseTime); } let time = start; data.notes.forEach((note, idx) => { const hz = noteToFreq(note); if (!hz) return; const dur = Array.isArray(data.durations) ? data.durations[idx] ?? data.durations[0] : data.durations; const osc = audioCtx.createOscillator(); osc.type = data.oscType as OscillatorType || "sine"; osc.frequency.value = hz; if (vibGain) vibGain.connect(osc.frequency); const filter = audioCtx.createBiquadFilter(); filter.type = data.filter.type as BiquadFilterType || "lowpass"; filter.frequency.value = data.filter.cutoff; filter.Q.value = data.filter.Q || 1.0; const gainNode = audioCtx.createGain(); gainNode.gain.value = 0.0001; osc.connect(filter); filter.connect(gainNode); gainNode.connect(master); applyADSR(gainNode.gain, time, data.adsr.attack, data.adsr.decay, data.adsr.sustain, data.adsr.release, dur); osc.start(time); osc.stop(time + dur + data.adsr.release + 0.02); time += dur; }); }

    // --- Game State ---
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let hasPassport = false;
    let score = 0;
    let currentLocation = 'Toronto';
    let currentMovePromise: Function | null = null;
    let isInteracting = false; // Prevents multiple interactions at once
    let isLuggageFollowing = false;
    let isFacingRight = false; // Emoji faces left by default
    let playerName = 'Person';
    let isSfxMuted = false;
    let isMusicMuted = false;
    let animationPromiseResolver: Function | null = null;
    let draggedItem: HTMLElement | null = null;
    const supportsCoarsePointer = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
    let visitedCities = new Set<string>();
    let collectedSouvenirs = new Map<string, { name: string; emoji: string; cost: number }>();
    let unlockedRecipes = new Map<string, { name: string; emoji: string; cost: number }>();
    let hasWorker = false;
    let workerLevel = 0;
    let workerIntervalId: number | null = null;
    let hasPlayedMinigame = false;
    let haveMinigamesBeenUnlocked = false;
    
    // --- Cafe Tycoon State ---
    let cafeActive = false;
    let potatoes: HTMLElement[] = [];
    let carriedItems = 0;
    let maxCarry = 10;
    let carryType: 'none' | 'potato' | 'sliced' = 'none';
    const POTATO_SPAWN_INTERVAL = 3000; // ms
    let potatoSpawnTimer: number | null = null;
    let cafePlayerX = window.innerWidth / 2, cafePlayerY = window.innerHeight / 2;
    let cafePlayerTargetX = cafePlayerX, cafePlayerTargetY = cafePlayerY;
    let currentCafeMovePromise: Function | null = null;
    let hasCollector = false;
    let hasCook = false;
    let collectorIntervalId: number | null = null;
    let cookIntervalId: number | null = null;
    let isCollectorBusy = false;
    let isCookBusy = false;
    let cafeBranchCity = 'Istanbul';
    let cafeCustomers: CafeCustomer[] = [];
    let cafeReadyDishes: { dish: CafeDish; element: HTMLElement; createdAt: number }[] = [];
    let cafeCashDrops: { value: number; element: HTMLElement; isTip: boolean }[] = [];
    let cafeCustomerSpawnId: number | null = null;
    let cafeKitchenLoopId: number | null = null;
    let cafeServingLoopId: number | null = null;
    let cafePatienceLoopId: number | null = null;
    let cafeCustomerCounter = 1;
    let cafeActiveMenu: CafeDish[] = [];
    let cafeRibbonTimer: number | null = null;


    // --- Data ---
    const flightData = [
        { city: 'Istanbul', airline: 'Turkish Airlines', cost: 750, airport: 'IST', time: 10.5, lang: 'tr-TR', welcomeMessage: 'İstanbul\'a hoşgeldiniz!', nativePhrase: 'Çok güzel!', fact: 'Did you know? Istanbul is the only city that straddles two continents, Europe and Asia.', fact2: 'Local Tip: For a true taste of the city, try a "simit" (a circular bread with sesame seeds) from a street vendor.', visa: '🇹🇷', fontFamily: "'Meie Script', cursive", flagColors: ['#E30A17', '#FFFFFF'], emojis: ['🇹🇷', '🕌', '🧿', '☕️', '🥙', '🐈', '⛵', '📿'], cityImage: 'https://images.unsplash.com/photo-1636537511494-c3e558e0702b?auto=format&fit=crop&w=1932&q=80', airportImage: 'https://i.ibb.co/HL7Vz4Fz/istanbu-lairport.jpg', restaurantImage: 'https://i.ibb.co/VYYjjP8g/istanbulcafe.jpg', souvenirs: [{ name: 'Turkish Delight', emoji: '🍬', cost: 25 }, { name: 'Evil Eye Charm', emoji: '🧿', cost: 40 }], recipe: { name: 'Kebab Recipe', emoji: '🥙', cost: 400 } },
        { city: 'Paris', airline: 'Air France', cost: 650, airport: 'CDG', time: 7.5, lang: 'fr-FR', welcomeMessage: 'Bienvenue à Paris!', nativePhrase: 'Oh là là!', fact: 'Did you know? The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the iron.', fact2: 'Local Tip: Skip the tourist traps! Find a local "boulangerie" for a fresh sandwich. It\'s cheaper and more authentic.', visa: '🇫🇷', fontFamily: "'Parisienne', cursive", flagColors: ['#0055A4', '#FFFFFF', '#EF4135'], emojis: ['🇫🇷', '🥐', '🍷', '🎨', '🗼', '🧀', '🧑‍🎨', '👗', '🥖'], cityImage: 'https://images.unsplash.com/photo-1499621574732-72324384dfbc?auto=format&fit=crop&w=1974&q=80', airportImage: 'https://images.unsplash.com/photo-1672310708154-771583101dbb?auto=format&fit=crop&w=1974&q=80', restaurantImage: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', souvenirs: [{ name: 'Mini Eiffel Tower', emoji: '🗼', cost: 50 }, { name: 'Beret', emoji: '👒', cost: 75 }], recipe: { name: 'Croissant Recipe', emoji: '🥐', cost: 350 } },
        { city: 'Kyoto', airline: 'Japan Airlines', cost: 1350, airport: 'KIX', time: 14.0, lang: 'ja-JP', welcomeMessage: '京都へようこそ！', nativePhrase: 'Subarashii.', fact: 'Did you know? Kyoto has over 1,600 Buddhist temples and 400 Shinto shrines.', fact2: 'Local Tip: When visiting Gion, you might spot a real Geiko (Geisha). Remember to be respectful and not block their path.', visa: '🇯🇵', fontFamily: "'Yuji Syuku', serif", flagColors: ['#FFFFFF', '#BC002D'], emojis: ['🇯🇵', '🌸', '🏯', '🍣', '🍵', '🎋', '⛩️', '👘', '🦊'], cityImage: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', airportImage: 'https://i.ibb.co/r1yvJvz/kyoto-airport.webp', restaurantImage: 'https://i.ibb.co/zWnmTCFC/kyoto-resturant.jpg', souvenirs: [{ name: 'Folding Fan', emoji: '🪭', cost: 60 }, { name: 'Omamori Charm', emoji: '🧧', cost: 45 }], recipe: { name: 'Sushi Recipe', emoji: '🍣', cost: 700 } },
        { city: 'Sydney', airline: 'Qantas', cost: 1550, airport: 'SYD', time: 22.0, lang: 'en-AU', welcomeMessage: 'G\'day mate, welcome to Sydney!', nativePhrase: 'No worries, mate.', fact: 'Did you know? The Sydney Opera House design was inspired by the peeling of an orange.', fact2: 'Local Tip: Take the ferry from Circular Quay to Manly for stunning harbor views that rival any expensive tour.', visa: '🇦🇺', fontFamily: "'Poppins', sans-serif", flagColors: ['#00008B', '#FFFFFF', '#FF0000'], emojis: ['🇦🇺', '🐨', '🦘', '🏄‍♂️', '🌉', '☀️', '🚤', '🍖', '🏖️'], cityImage: 'https://i.ibb.co/kVd0ZSQD/sydney-view.jpg', airportImage: 'https://i.ibb.co/dJLYQTFX/sydney-airport.webp', restaurantImage: 'https://i.ibb.co/NnrW4gvb/sydney-resturant.jpg', souvenirs: [{ name: 'Boomerang', emoji: '🪃', cost: 55 }, { name: 'Koala Plushie', emoji: '🐨', cost: 80 }], recipe: { name: 'Meat Pie Recipe', emoji: '🥧', cost: 800 } },
        { city: 'Barcelona', airline: 'Iberia', cost: 700, airport: 'BCN', time: 8.0, lang: 'es-ES', welcomeMessage: '¡Bienvenido a Barcelona!', nativePhrase: '¡Qué guay!', fact: 'Did you know? Barcelona\'s famous Sagrada Família has been under construction for over 140 years.', fact2: 'Local Tip: Enjoy "tapas" like a local by bar-hopping in the El Born or Gràcia neighborhoods, not on La Rambla.', visa: '🇪🇸', fontFamily: "'Lobster', cursive", flagColors: ['#AA151B', '#F1BF00'], emojis: ['🇪🇸', '💃', '⚽️', '🥘', '🦎', '🏛️', '🍤', '🎶', ' Gaudí '], cityImage: 'https://i.ibb.co/6R7LVS9r/barcelona-view.jpg', airportImage: 'https://i.ibb.co/356j3tp0/barcelonaairport.jpg', restaurantImage: 'https://i.ibb.co/pBBq1vK4/barcelonarestaurnat.jpg', souvenirs: [{ name: 'Mosaic Lizard', emoji: '🦎', cost: 65 }, { name: 'Paella Pan', emoji: '🥘', cost: 90 }], recipe: { name: 'Paella Recipe', emoji: '🥘', cost: 450 } },
        { city: 'London', airline: 'British Airways', cost: 680, airport: 'LHR', time: 7.0, lang: 'en-GB', welcomeMessage: 'Welcome to London, cheers!', nativePhrase: 'Lovely jubbly!', fact: 'Did you know? The London Underground is the oldest underground railway network in the world, known as "the Tube".', fact2: 'Local Tip: Many of London\'s best museums, like the British Museum and the National Gallery, are completely free to enter!', visa: '🇬🇧', fontFamily: "'Playfair Display', serif", flagColors: ['#012169', '#FFFFFF', '#C8102E'], emojis: ['🇬🇧', '👑', '💂‍♂️', '☕️', '🚌', '🏛️', '☔', '🎭', '☎️'], cityImage: 'https://i.ibb.co/7tYdKH3q/london-view.jpg', airportImage: 'https://i.ibb.co/RGV7cyH4/213.jpg', restaurantImage: 'https://i.ibb.co/S73wF2Yn/london-esturant.jpg', souvenirs: [{ name: 'Double Decker Bus', emoji: '🚌', cost: 60 }, { name: 'Royal Guard Hat', emoji: '💂‍♂️', cost: 90 }], recipe: { name: 'Fish & Chips Recipe', emoji: '🐟', cost: 380 } },
        { city: 'New York', airline: 'Delta Airlines', cost: 250, airport: 'JFK', time: 1.8, lang: 'en-US', welcomeMessage: 'Welcome to the Big Apple!', nativePhrase: "How you doin'?", fact: 'Did you know? The first pizzeria in the United States was opened in New York City in 1905.', fact2: 'Local Tip: Walk across the Brooklyn Bridge from Brooklyn towards Manhattan for an unforgettable skyline view.', visa: '🇺🇸', fontFamily: "'Oswald', sans-serif", flagColors: ['#B22234', '#FFFFFF', '#3C3B6E'], emojis: ['🇺🇸', '🗽', '🚕', '🍎', '🏙️', '🍕', '🥨', '🎭', '🎷'], cityImage: 'https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&w=2074&q=80', airportImage: 'https://i.ibb.co/KjTM5CmD/IMG-20251112-WA0009.jpg', restaurantImage: 'https://i.ibb.co/6cx5HxXn/IMG-20251112-WA0010.jpg', souvenirs: [{ name: 'I ❤️ NY Shirt', emoji: '👕', cost: 40 }, { name: 'Statue of Liberty', emoji: '🗽', cost: 80 }], recipe: { name: 'Pizza Recipe', emoji: '🍕', cost: 250 } },
        { city: 'Bangkok', airline: 'Thai Airways', cost: 1100, airport: 'BKK', time: 21.0, lang: 'th-TH', welcomeMessage: 'ยินดีต้อนรับสู่กรุงเทพ!', nativePhrase: 'Sawasdee krap.', fact: 'Did you know? Bangkok\'s full ceremonial name is one of the longest city names in the world.', fact2: 'Local Tip: A ride on a Chao Phraya Express Boat is a cheap and scenic way to see the city and avoid the traffic.', visa: '🇹🇭', fontFamily: "'Sriracha', cursive", flagColors: ['#A51931', '#FFFFFF', '#2E428B'], emojis: ['🇹🇭', '🐘', '🥭', '🛶', '🙏', '🛺', '🌶️', 'ക്ഷേത്ര', '🍜'], cityImage: 'https://i.ibb.co/GfKqhFJn/bangkok-view.jpg', airportImage: 'https://i.ibb.co/8DM8g3CP/IMG-20251112-WA0006.jpg', restaurantImage: 'https://i.ibb.co/397cnnCz/IMG-20251112-WA0005.jpg', souvenirs: [{ name: 'Tuk-Tuk Model', emoji: '🛺', cost: 50 }, { name: 'Elephant Pants', emoji: '🐘', cost: 65 }], recipe: { name: 'Curry Recipe', emoji: '🍛', cost: 600 } },
        { city: 'Cape Town', airline: 'South African Airways', cost: 1300, airport: 'CPT', time: 22.5, lang: 'en-ZA', welcomeMessage: 'Welcome to Cape Town!', nativePhrase: 'Howzit!', fact: 'Did you know? Cape Town is home to the incredibly rich Cape Floral Kingdom, a World Heritage site.', fact2: 'Local Tip: For the best sunset, skip the crowds on Table Mountain and hike to the top of Lion\'s Head or Signal Hill.', visa: '🇿🇦', fontFamily: "'Ubuntu', sans-serif", flagColors: ['#007A4D', '#FFB612', '#000000'], emojis: ['🇿🇦', '🐧', '🦁', '🍇', '⛰️', '🌺', '🐋', '🎨', '🥁'], cityImage: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', airportImage: 'https://i.ibb.co/3y5M0c9q/Whats-App-Image-2025-11-12-at-11-03-36-AM.jpg', restaurantImage: 'https://i.ibb.co/BHDGY6Ps/Whats-App-Image-2025-11-12-at-11-03-36-AM-2.jpg', souvenirs: [{ name: 'Vuvuzela', emoji: '🎺', cost: 35 }, { name: 'Beaded Animal', emoji: '🦒', cost: 70 }], recipe: { name: 'Biltong Recipe', emoji: '🥩', cost: 680 } },
        { city: 'Budapest', airline: 'Lufthansa', cost: 850, airport: 'BUD', time: 10.5, lang: 'hu-HU', welcomeMessage: 'Üdvözöljük Budapesten!', nativePhrase: 'Egészségedre!', fact: 'Did you know? Budapest is known as the "City of Spas" with over 120 thermal springs.', fact2: 'Local Tip: Don\'t miss the unique atmosphere of the "ruin bars" in the old Jewish Quarter, built in abandoned buildings.', visa: '🇭🇺', fontFamily: "'Cinzel', serif", flagColors: ['#CD2A3E', '#FFFFFF', '#436F4D'], emojis: ['🇭🇺', '🏰', '🌶️', '♨️', '🎻', '🌉', '🥘', '🍷', '큐브'], cityImage: 'https://i.ibb.co/FNgHB1R/budapest-view.jpg', airportImage: 'https://i.ibb.co/VYz2Lh21/budapest-airport.jpg', restaurantImage: 'https://i.ibb.co/5hrFPW52/buapest-resturant.jpg', souvenirs: [{ name: 'Paprika Spice', emoji: '🌶️', cost: 30 }, { name: 'Rubik\'s Cube', emoji: '🧊', cost: 50 }], recipe: { name: 'Goulash Recipe', emoji: '🍲', cost: 500 } },
        { city: 'Cairo', airline: 'EgyptAir', cost: 950, airport: 'CAI', time: 11.5, lang: 'ar-EG', welcomeMessage: 'أهلاً بك في القاهرة!', nativePhrase: 'Yalla bina!', fact: 'Did you know? Cairo is home to the Great Pyramids of Giza, the only one of the Seven Wonders of the Ancient World still standing.', fact2: 'Local Tip: When shopping in the Khan el-Khalili bazaar, friendly bargaining is expected and part of the fun!', visa: '🇪🇬', fontFamily: "'Almendra', serif", flagColors: ['#CE1126', '#FFFFFF', '#000000'], emojis: ['🇪🇬', '🐪', '📜', '🏺', '🏜️', '🔺', '🐱', '⛵', '🪶'], cityImage: 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', airportImage: 'https://i.ibb.co/MyD3QvYf/cairo-airport.webp', restaurantImage: 'https://i.ibb.co/wNxDxCCt/cairo-resturant.jpg', souvenirs: [{ name: 'Pyramid Statue', emoji: '🔺', cost: 85 }, { name: 'Papyrus Scroll', emoji: '📜', cost: 60 }], recipe: { name: 'Falafel Recipe', emoji: '🧆', cost: 550 } },
        { city: 'Jeddah', airline: 'Saudia', cost: 1250, airport: 'JED', time: 14.5, lang: 'ar-SA', welcomeMessage: 'أهلاً بك في جدة!', nativePhrase: "Masha'Allah.", fact: 'Did you know? Jeddah is known as the "Gateway to the Two Holy Mosques" for its proximity to Mecca and Medina.', fact2: 'Local Tip: Stroll along the Corniche at sunset to see the spectacular King Fahd\'s Fountain, one of the tallest in the world.', visa: '🇸🇦', fontFamily: "'Amiri', serif", flagColors: ['#006C35', '#FFFFFF'], emojis: ['🇸🇦', '🌴', '🌊', '🕌', '☕', '🏜️', ' DATES ', '🕋'], cityImage: 'https://i.ibb.co/Kzp5ZpGq/jeddah-view.jpg', airportImage: 'https://i.ibb.co/nNGSStYR/Whats-App-Image-2025-11-12-at-11-09-24-AM.jpg', restaurantImage: 'https://i.ibb.co/0P67q79/IMG-20251112-WA0001.jpg', souvenirs: [{ name: 'Prayer Beads', emoji: '📿', cost: 40 }, { name: 'Dates', emoji: '🌴', cost: 30 }], recipe: { name: 'Kabsa Recipe', emoji: '🍛', cost: 650 } },
        { city: 'Karachi', airline: 'PIA', cost: 1150, airport: 'KHI', time: 16.0, lang: 'ur-PK', welcomeMessage: 'کراچی میں خوش آمدید!', nativePhrase: 'Jee, bilkul.', fact: 'Did you know? Karachi is Pakistan\'s largest city and is known as the "City of Lights" for its vibrant nightlife.', fact2: 'Local Tip: Don\'t miss a chance to try a Bun Kebab, a classic Karachi street food, from a vendor at Burns Road Food Street.', visa: '🇵🇰', fontFamily: "'Noto Nastaliq Urdu', serif", flagColors: ['#006600', '#FFFFFF'], emojis: ['🇵🇰', '🕌', '🌊', '🐐', '🏏', '🛺', '☕', '⭐', '🌙'], cityImage: 'https://i.ibb.co/p6JnBPJd/4-W8o-Sd-QXQENtrmdc-Lu-Gu-w0q-Fh-Rc4-FBa-EG31-MKk-Eit0.webp', airportImage: 'https://i.ibb.co/tMWn5R3R/karachiairport.jpg', restaurantImage: 'https://i.ibb.co/8L0cS2YZ/karachirestaurant.jpg', souvenirs: [{ name: 'Ajrak Shawl', emoji: '🧣', cost: 75 }, { name: 'Truck Art Model', emoji: '🚚', cost: 95 }], recipe: { name: 'Biryani Recipe', emoji: '🍛', cost: 620 } }
    ];

    const recipeNarration: Record<string, string> = {
        'Paris': "Ah, zee croissant! So flaky, so buttery, it is like a little piece of heaven, non?",
        'Kyoto': "Behold, sushi! Such harmony, such precision. A taste of wabi-sabi.",
        'Sydney': "Right, a meat pie! Chuck this little beauty in your gob, mate. Fair dinkum!",
        'Barcelona': "¡Paella! The taste of the sun, the sea, the fiesta! ¡Olé!",
        'London': "Right then, fish and chips! A proper classic, innit? Smashing!",
        'New York': "Hey, I'm cookin' here! A New York slice. Fuggedaboutit.",
        'Istanbul': "Kebab, my friend! The king of street food. Come, eat!",
        'Bangkok': "Thai curry! So spicy, so fragrant... Aroi mak mak!",
        'Cape Town': "Biltong! It's not just dried meat, bru. It's a way of life. Lekker!",
        'Budapest': "Goulash, the heart of Hungary! A warm hug in a bowl.",
        'Cairo': "Falafel! The food of the pharaohs... maybe. Yalla!",
        'Jeddah': "Kabsa. The scent of hospitality... a treasure of the desert.",
        'Karachi': "Biryani! This is not just food, it is an emotion! Wah, bhai, wah!"
    };

    const availableFoods: { name: string; emoji: string; reward: number; }[] = [
        { name: 'Fries', emoji: '🍟', reward: 200 }
    ];

    type CafeDish = { name: string; emoji: string; reward: number; signature?: boolean; locked?: boolean; city: string; };
    type CafeCustomer = { id: number; element: HTMLElement; order: CafeDish; patience: number; state: 'queue' | 'eating' | 'leaving'; mood: 'happy' | 'angry' | 'neutral'; tableIndex?: number; seatEl?: HTMLElement; };
    type CafeMenuConfig = { signature: { name: string; emoji: string; } | null; sides: { name: string; emoji: string; }[]; accent?: string; };
    const defaultCafeMenu: CafeMenuConfig = { signature: { name: 'World Tour Fries', emoji: '🍟' }, sides: [{ name: 'Airport Coffee', emoji: '☕️' }] };
    const cafeCityMenus: Record<string, CafeMenuConfig> = {
        'Istanbul': { signature: { name: 'Kebab Plate', emoji: '🥙' }, sides: [{ name: 'Simit Circle', emoji: '🥯' }, { name: 'Turkish Tea', emoji: '☕️' }] },
        'Paris': { signature: { name: 'Croissant', emoji: '🥐' }, sides: [{ name: 'Baguette Sandwich', emoji: '🥖' }, { name: 'Cheese Platter', emoji: '🧀' }, { name: 'Coffee', emoji: '☕️' }] },
        'Kyoto': { signature: { name: 'Sushi Set', emoji: '🍣' }, sides: [{ name: 'Matcha Tea', emoji: '🍵' }, { name: 'Sakura Mochi', emoji: '🍡' }] },
        'Sydney': { signature: { name: 'Meat Pie', emoji: '🥧' }, sides: [{ name: 'BBQ Skewer', emoji: '🍖' }, { name: 'Flat White', emoji: '☕️' }] },
        'Barcelona': { signature: { name: 'Paella Bowl', emoji: '🥘' }, sides: [{ name: 'Tapas Plate', emoji: '🍤' }, { name: 'Sangria', emoji: '🍷' }] },
        'London': { signature: { name: 'Fish & Chips', emoji: '🐟🍟' }, sides: [{ name: 'Tea & Biscuits', emoji: '☕🍪' }] },
        'New York': { signature: { name: 'Slice of Pizza', emoji: '🍕' }, sides: [{ name: 'Soft Pretzel', emoji: '🥨' }, { name: 'NYC Coffee', emoji: '☕' }] },
        'Bangkok': { signature: { name: 'Curry Bowl', emoji: '🍛' }, sides: [{ name: 'Mango Sticky Rice', emoji: '🥭🍚' }, { name: 'Noodles', emoji: '🍜' }] },
        'Cape Town': { signature: { name: 'Biltong Plate', emoji: '🥩' }, sides: [{ name: 'Wine Tasting', emoji: '🍷' }, { name: 'Rooibos Tea', emoji: '☕' }] },
        'Budapest': { signature: { name: 'Goulash', emoji: '🍲' }, sides: [{ name: 'Paprika Chips', emoji: '🌶️' }, { name: 'Bread Basket', emoji: '🥖' }] },
        'Cairo': { signature: { name: 'Falafel Plate', emoji: '🧆' }, sides: [{ name: 'Koshary Bowl', emoji: '🍚' }, { name: 'Mint Tea', emoji: '☕' }] },
        'Jeddah': { signature: { name: 'Kabsa', emoji: '🍛' }, sides: [{ name: 'Dates Plate', emoji: '🌴' }, { name: 'Arabic Coffee', emoji: '☕' }] },
        'Karachi': { signature: { name: 'Biryani', emoji: '🍛' }, sides: [{ name: 'Bun Kebab', emoji: '🍔' }, { name: 'Doodh Patti', emoji: '☕️' }] },
        'Toronto': { signature: { name: 'Runway Fries', emoji: '🍟' }, sides: [{ name: 'Maple Latte', emoji: '🍁☕️' }] },
    };
    const cafeCustomerEmojis = ['🙂', '🧕', '👨‍💼', '🧳', '👔', '📸', '🧑‍🍳'];

    // --- Game State Persistence ---
    function saveGameState() {
        try {
            const state = {
                score,
                playerName,
                playerEmoji: personEmoji.textContent,
                currentLocation,
                hasPassport,
                visitedCities: Array.from(visitedCities),
                collectedSouvenirs: Array.from(collectedSouvenirs.entries()),
                unlockedRecipes: Array.from(unlockedRecipes.entries()),
                hasWorker,
                workerLevel,
                hasCollector, // Cafe automation
                hasCook, // Cafe automation
            };
            localStorage.setItem('travelGameState', JSON.stringify(state));
        } catch (error) {
            console.error("Failed to save game state:", error);
        }
    }

    function loadGameState() {
        try {
            const savedState = localStorage.getItem('travelGameState');
            if (savedState) {
                const state = JSON.parse(savedState);
                
                score = state.score ?? 0;
                playerName = state.playerName ?? 'Person';
                currentLocation = state.currentLocation ?? 'Toronto';
                hasPassport = state.hasPassport ?? false;
                visitedCities = new Set(state.visitedCities ?? []);
                collectedSouvenirs = new Map(state.collectedSouvenirs ?? []);
                unlockedRecipes = new Map(state.unlockedRecipes ?? []);
                hasWorker = state.hasWorker ?? false;
                workerLevel = state.workerLevel ?? 0;
                hasCollector = state.hasCollector ?? false;
                hasCook = state.hasCook ?? false;

                // Apply loaded state to UI
                scoreEl.textContent = `$${score}`;
                personLabel.textContent = playerName;
                playerNameInput.value = playerName;
                updateSelectedEmoji(state.playerEmoji ?? '🧍');

                if (currentLocation !== 'Toronto') {
                    const flight = flightData.find(f => f.city === currentLocation);
                    if (flight) {
                        showCityView(flight);
                    }
                } else {
                    showHomeView();
                }

                visitedList.innerHTML = '';
                visitedCities.forEach(city => {
                    const li = document.createElement('li');
                    li.textContent = city;
                    visitedList.appendChild(li);
                });
                if (visitedCities.size > 0) visitedCitiesList.classList.remove('hidden');

                souvenirsList.innerHTML = '';
                collectedSouvenirs.forEach(item => {
                     const el = document.createElement('div');
                     el.className = 'souvenir-item';
                     el.textContent = `${item.emoji} ${item.name}`;
                     souvenirsList.appendChild(el);
                });
                
                updateAvailableFoods();
                if (hasWorker) {
                    startWorkerInterval();
                }
            } else {
                updateScore(500); // Start new players with 500
            }
        } catch (error) {
            console.error("Failed to load game state:", error);
            updateScore(500); // Fallback for corrupted data
        }
        updateButtonStates();
    }


    // --- Utility Functions ---
    function speak(text: string, lang = 'en-US'): Promise<void> {
        return new Promise((resolve) => {
            if (isSfxMuted || typeof SpeechSynthesisUtterance === "undefined" || typeof speechSynthesis === "undefined") { resolve(); return; }
            const doSpeak = () => {
                if (speechSynthesis.speaking || speechSynthesis.pending) speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = lang;
                utterance.rate = 1.3; // Speak faster
                const voices = speechSynthesis.getVoices();
                const voice = voices.find(v => v.lang === lang) || voices.find(v => v.lang.startsWith(lang.split('-')[0]));
                if (voice) utterance.voice = voice;
                utterance.onend = () => resolve();
                utterance.onerror = (e: SpeechSynthesisErrorEvent) => { console.error(`SpeechSynthesis Error: ${e.error}`, e); resolve(); };
                setTimeout(() => { speechSynthesis.speak(utterance); }, 50);
            };
            if (speechSynthesis.getVoices().length > 0) doSpeak(); else speechSynthesis.onvoiceschanged = doSpeak;
        });
    }
    
    async function handleInsufficientFunds() {
        playSound('error');
        await speak("Not enough money!");
    }

    function typeMessage(text: string, element: HTMLElement, typeDelay: number, displayDuration: number): Promise<void> {
        return new Promise(resolve => {
            element.innerHTML = '';
            let i = 0;
            const intervalId = window.setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(intervalId);
                    setTimeout(() => { resolve(); }, displayDuration);
                }
            }, typeDelay);
        });
    }

    function showEarningToast(amount: number) {
        const toastContainer = document.getElementById('toast-container');
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = `+$${amount} 💰`;
        toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 2900); // A bit less than animation duration
    }
    
    function updateMinigameUnlockStatus() {
        const memoryUnlockCount = 2;
        const gemSwapUnlockCount = 5;

        // Memory Match
        if (visitedCities.size >= memoryUnlockCount) {
            memoryMatchBtn.disabled = false;
            memoryMatchBtn.textContent = 'Memory Match';
            if (!haveMinigamesBeenUnlocked) {
                playSound('ding-dong');
                haveMinigamesBeenUnlocked = true;
            }
        } else {
            memoryMatchBtn.disabled = true;
            memoryMatchBtn.textContent = memoryMatchBtn.dataset.unlockText || 'Locked';
        }
        
        // Gem Swap
        if (visitedCities.size >= gemSwapUnlockCount) {
            gemSwapBtn.disabled = false;
            gemSwapBtn.textContent = 'Gem Swap';
        } else {
            gemSwapBtn.disabled = true;
            gemSwapBtn.textContent = gemSwapBtn.dataset.unlockText || 'Locked';
        }
    }

    function updateButtonStates() {
        applyPassportBtn.disabled = score < 200;
        
        flightData.forEach(flight => {
            const btn = document.getElementById(`flight-btn-${flight.city}`) as HTMLButtonElement | null;
            if (btn) {
                if (score >= flight.cost) {
                    btn.classList.add('affordable');
                    btn.classList.remove('unaffordable');
                } else {
                    btn.classList.add('unaffordable');
                    btn.classList.remove('affordable');
                }
            }
        });

        if (!giftShopDialog.classList.contains('hidden')) {
            const flight = flightData.find(f => f.city === currentLocation);
            if (flight) {
                // Souvenirs
                if (flight.souvenirs) {
                    flight.souvenirs.forEach(item => {
                        const btn = document.getElementById(`souvenir-btn-${item.name.replace(/\s+/g, '-')}`) as HTMLButtonElement | null;
                        if (btn) {
                            const hasItem = collectedSouvenirs.has(item.name);
                            btn.disabled = hasItem || score < item.cost;
                            if (hasItem && !btn.querySelector('.visited-checkmark')) btn.innerHTML += ' <span class="visited-checkmark">✅</span>';
                        }
                    });
                }
                // Recipe
                const recipeBtn = document.getElementById(`recipe-btn-${flight.recipe.name.replace(/\s+/g, '-')}`) as HTMLButtonElement | null;
                if (recipeBtn) {
                    const hasRecipe = unlockedRecipes.has(flight.city);
                    recipeBtn.disabled = hasRecipe || score < flight.recipe.cost;
                    if (hasRecipe && !recipeBtn.querySelector('.visited-checkmark')) recipeBtn.innerHTML += ' <span class="visited-checkmark">✅</span>';
                }
            }
        }
        
        // Staff buttons
        hireWorkerBtn.disabled = score < 1000 || hasWorker;
        const promotionCost = 1000 * (workerLevel + 1);
        promoteWorkerBtn.disabled = score < promotionCost || !hasWorker;
        
        updateMinigameUnlockStatus();

        // Cafe Upgrade Buttons
        hireCollectorBtn.disabled = hasCollector || score < 500;
        hireCookBtn.disabled = hasCook || score < 1500;
    }

    function updateScore(amount: number) {
        score += amount;
        scoreEl.textContent = `$${score}`;
        updateButtonStates();
        saveGameState();
        refreshCafeHUD();
    }

    // --- Movement & Game Loop ---
    function moveTo(targetElement: HTMLElement) {
        return new Promise<void>(resolve => {
            const rect = targetElement.getBoundingClientRect();
            targetX = rect.left + rect.width / 2;
            targetY = rect.top + rect.height / 2;
            currentMovePromise = resolve;
        });
    }

    let lastFrameTime = performance.now();
    function gameLoop() {
        const now = performance.now();
        const deltaTime = Math.min(0.1, (now - lastFrameTime) / 1000); // Delta in seconds, clamped
        lastFrameTime = now;

        if (!cafeActive) {
            // Main player movement
            const dx = targetX - x;
            const dy = targetY - y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 1) {
                const easing = 1 - Math.pow(0.85, deltaTime * 60); // Frame-rate independent easing
                x += dx * easing;
                y += dy * easing;
                
                if (dx > 1 && !isFacingRight) {
                    isFacingRight = true;
                    personEmoji.style.transform = 'scaleX(-1)';
                } else if (dx < -1 && isFacingRight) {
                    isFacingRight = false;
                    personEmoji.style.transform = 'scaleX(1)';
                }
            } else if (currentMovePromise) {
                currentMovePromise();
                currentMovePromise = null;
            }
            
            personContainer.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

            if (isLuggageFollowing) {
                luggageContainer.style.transform = `translate(${x - 25}px, ${y + 10}px)`;
                luggageContainer.style.zIndex = '4';
            }
        } else {
             // Cafe player movement
            const dx = cafePlayerTargetX - cafePlayerX;
            const dy = cafePlayerTargetY - cafePlayerY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 5) { // Increased threshold for snapping
                const speed = 300 * deltaTime; // pixels per second
                cafePlayerX += (dx / distance) * speed;
                cafePlayerY += (dy / distance) * speed;
            } else {
                cafePlayerX = cafePlayerTargetX;
                cafePlayerY = cafePlayerTargetY;
                if (currentCafeMovePromise) {
                    currentCafeMovePromise();
                    currentCafeMovePromise = null;
                }
            }
            cafePlayer.style.transform = `translate(${cafePlayerX}px, ${cafePlayerY}px) translate(-50%, -50%)`;
        }

        requestAnimationFrame(gameLoop);
    }

    // --- UI Logic ---
    function showCityView(flight: (typeof flightData)[0]) {
        passportOfficeContainer.classList.add('hidden');
        airportContainer.classList.add('hidden');
        mfGroupContainer.classList.add('hidden');
        cityImageContainer.classList.remove('hidden');
        restaurantContainer.classList.remove('hidden');
        giftShopContainer.classList.remove('hidden');
        awayAirportPlaceholder.classList.remove('hidden');
        cityTitle.classList.remove('hidden');
        cityEmojis.style.display = 'flex';
        
        currentLocation = flight.city;
        cityImage.src = flight.cityImage;

        if (flight.airportImage) {
            awayAirportPlaceholder.innerHTML = `<span class="return-home-text">Return to Toronto</span>`;
            awayAirportPlaceholder.style.backgroundImage = `url('${flight.airportImage}')`;
            awayAirportPlaceholder.classList.add('has-thumbnail');
        } else {
            awayAirportPlaceholder.innerHTML = `✈️ Return to Toronto`;
            awayAirportPlaceholder.style.backgroundImage = '';
            awayAirportPlaceholder.classList.remove('has-thumbnail');
        }
        awayAirportPlaceholder.setAttribute('aria-label', 'Return to Toronto');
        awayAirportPlaceholder.setAttribute('title', 'Return to Toronto');

        cityTitle.textContent = flight.city;
        cityTitle.style.fontFamily = flight.fontFamily;
        const gradient = `linear-gradient(45deg, ${flight.flagColors.join(', ')})`;
        cityTitle.style.setProperty('--flag-gradient', gradient);

        cityEmojis.innerHTML = flight.emojis.map(e => `<span>${e}</span>`).join('');
        saveGameState();
    }

    function showHomeView() {
        cityImageContainer.classList.add('hidden');
        restaurantContainer.classList.add('hidden');
        giftShopContainer.classList.add('hidden');
        awayAirportPlaceholder.classList.add('hidden');
        awayAirportPlaceholder.classList.remove('has-thumbnail');
        awayAirportPlaceholder.style.backgroundImage = '';
        cityTitle.classList.add('hidden');
        cityEmojis.style.display = 'none';

        passportOfficeContainer.classList.remove('hidden');
        airportContainer.classList.remove('hidden');
        mfGroupContainer.classList.remove('hidden');

        // Reset luggage position to its CSS default
        luggageContainer.style.transform = '';
        luggageContainer.style.zIndex = '2';

        currentLocation = 'Toronto';
        captionContainer.innerHTML = '';
        saveGameState();
    }

    function playPassportCelebration() {
        passportCelebration.classList.add('active');
        const containerRect = passportCelebration.getBoundingClientRect();
        
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * (containerRect.width / 2);
            sparkle.style.left = `${containerRect.width / 2 + Math.cos(angle) * radius}px`;
            sparkle.style.top = `${containerRect.height / 2 + Math.sin(angle) * radius}px`;
            const travelDist = 100 + Math.random() * 100;
            sparkle.style.setProperty('--tx', `${Math.cos(angle) * travelDist}px`);
            sparkle.style.setProperty('--ty', `${Math.sin(angle) * travelDist}px`);
            passportCelebration.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }
        
        playSound('passport-get');
        setTimeout(() => passportCelebration.classList.remove('active'), 2500);
    }
    
    function playGenericCelebration(containerId: string, message: string) {
        const celebrationContainer = document.getElementById(containerId) as HTMLElement;
        if (!celebrationContainer) return;

        celebrationContainer.innerHTML = `<div class="celebration-text">${message}</div>`;
        celebrationContainer.classList.remove('hidden');

        for (let i = 0; i < 30; i++) {
            const firework = document.createElement('div');
            firework.className = 'firework';
            
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * 50;
            firework.style.left = `calc(50% + ${Math.cos(angle) * radius}px)`;
            firework.style.top = `calc(50% + ${Math.sin(angle) * radius}px)`;
            firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

            const travelDist = 150 + Math.random() * 200;
            firework.style.setProperty('--tx', `${Math.cos(angle) * travelDist}px`);
            firework.style.setProperty('--ty', `${Math.sin(angle) * travelDist}px`);
            firework.style.animationDelay = `${Math.random() * 0.5}s`;
            
            celebrationContainer.appendChild(firework);
        }
        
        playSound('success');

        return new Promise<void>(resolve => {
             setTimeout(() => {
                celebrationContainer.classList.add('hidden');
                celebrationContainer.innerHTML = '';
                resolve();
            }, 4000);
        });
    }

    async function playNarrationSequence(flight: (typeof flightData)[0]) {
        try {
            await speak(`Welcome aboard flight ${flight.airline} to ${flight.city}. The flight time will be ${flight.time} hours.`, 'en-US');
            if (currentLocation !== flight.city) return;
            await new Promise(res => setTimeout(res, 200));
            playCitySound(flight.city as keyof typeof citySoundData);

            await typeMessage(flight.welcomeMessage, captionContainer, 50, 4000); if (currentLocation !== flight.city) return;
            await speak(flight.welcomeMessage, flight.lang); if (currentLocation !== flight.city) return;
            await typeMessage(flight.nativePhrase, captionContainer, 50, 3000); if (currentLocation !== flight.city) return;
            await speak(flight.nativePhrase, flight.lang); if (currentLocation !== flight.city) return;
            await typeMessage(flight.fact, captionContainer, 50, 7000); if (currentLocation !== flight.city) return;
            await speak(flight.fact, flight.lang); if (currentLocation !== flight.city) return;
            await typeMessage(flight.fact2, captionContainer, 50, 7000); if (currentLocation !== flight.city) return;
            await speak(flight.fact2, flight.lang);
        } catch (error) { console.error("Error during travel sequence:", error); } 
        finally { if (currentLocation === flight.city) captionContainer.innerHTML = ''; }
    }

    function createSkippableAnimation(duration: number, dialog: HTMLElement): Promise<void> {
        return new Promise<void>(resolve => {
            animationPromiseResolver = resolve;
            const timeoutId = setTimeout(() => resolve(), duration);

            const skip = () => {
                clearTimeout(timeoutId);
                resolve();
            };
            dialog.addEventListener('click', skip, { once: true });
        }).finally(() => {
            animationPromiseResolver = null;
            dialog.removeEventListener('click', () => {}); // Clean up listener
        });
    }

    async function travelTo(flight: (typeof flightData)[0]) {
        isInteracting = true;
        updateScore(-flight.cost);
        flightsDialog.classList.add('hidden');
        
        document.body.classList.add('away');
        document.body.style.backgroundColor = '#000';
        
        await moveTo(luggageContainer);
        isLuggageFollowing = true;
        await moveTo(airportImg);
        isLuggageFollowing = false;

        const planeEmoji = planeAnimationDialog.querySelector('#plane-emoji-anim') as HTMLElement;
        planeAnimationDialog.classList.remove('hidden');
        playSound('takeoff');
        
        const animationPromise = createSkippableAnimation(3000, planeAnimationDialog);
        
        planeEmoji.textContent = '🛫';
        setTimeout(() => { if(animationPromiseResolver) planeEmoji.textContent = '✈️'; }, 500);
        setTimeout(() => { if(animationPromiseResolver) planeEmoji.textContent = '🛬'; }, 2500);
        
        await animationPromise;
        
        planeAnimationDialog.classList.add('hidden');
        planeEmoji.textContent = '✈️'; // Reset for next time
        
        visaStickerEmoji.textContent = flight.visa;
        visaAnimationDialog.classList.remove('hidden');
        playSound('stamp');
        await createSkippableAnimation(2000, visaAnimationDialog);
        visaAnimationDialog.classList.add('hidden');

        showCityView(flight);

        if (!visitedCities.has(flight.city)) {
            visitedCities.add(flight.city);
            const li = document.createElement('li');
            li.textContent = flight.city;
            visitedList.appendChild(li);
            saveGameState();
        }

        if (visitedCities.size > 0) visitedCitiesList.classList.remove('hidden');
        updateMinigameUnlockStatus();
        
        isInteracting = false;
        playNarrationSequence(flight);
    }
    
    async function playHomeNarration() {
        try {
            await speak(`Welcome back to Toronto.`);
            if (currentLocation !== 'Toronto') return;
            await new Promise(res => setTimeout(res, 200));
            playCitySound('Toronto');
            await typeMessage('Welcome home!', captionContainer, 50, 4000);
        } catch (error) { console.error("Error during return home sequence:", error); }
        finally { if (currentLocation === 'Toronto') captionContainer.innerHTML = ''; }
    }

    async function returnHome() {
        isInteracting = true;
        
        document.body.classList.remove('away');
        document.body.style.backgroundColor = '#111';

        await moveTo(awayAirportPlaceholder);
        
        const planeEmoji = planeAnimationDialog.querySelector('#plane-emoji-anim') as HTMLElement;
        planeAnimationDialog.classList.remove('hidden');
        playSound('takeoff');
        
        const animationPromise = createSkippableAnimation(3000, planeAnimationDialog);
        
        planeEmoji.textContent = '🛫';
        setTimeout(() => { if(animationPromiseResolver) planeEmoji.textContent = '✈️'; }, 500);
        setTimeout(() => { if(animationPromiseResolver) planeEmoji.textContent = '🛬'; }, 2500);
        
        await animationPromise;

        planeAnimationDialog.classList.add('hidden');
        planeEmoji.textContent = '✈️'; // Reset
        
        showHomeView();
        isInteracting = false;
        playHomeNarration();
    }

    // --- Minigame, Restaurant & Worker Logic ---
    function updateAvailableFoods() {
        availableFoods.length = 1; // Reset but keep fries
        unlockedRecipes.forEach(recipe => {
             availableFoods.push({
                name: recipe.name.replace(' Recipe', ''),
                emoji: recipe.emoji,
                reward: 200 + Math.round(recipe.cost / 10)
            });
        });
    }

    type BagDropOptions = {
        velocity?: number;
    };

    function completeBagDrop(food: HTMLElement, options?: BagDropOptions) {
        const reward = parseInt(food.dataset.reward ?? '0', 10);
        if (Number.isNaN(reward) || reward <= 0) return;

        if (draggedItem === food) {
            draggedItem = null;
        }

        const bagRect = bagDropzone.getBoundingClientRect();
        const bagCenterX = bagRect.left + bagRect.width / 2;
        const bagCenterY = bagRect.top + bagRect.height / 2;
        const foodRect = food.getBoundingClientRect();
        const foodCenterX = foodRect.left + foodRect.width / 2;
        const foodCenterY = foodRect.top + foodRect.height / 2;
        const currentTx = parseFloat(food.style.getPropertyValue('--tx') || '0');
        const currentTy = parseFloat(food.style.getPropertyValue('--ty') || '0');
        const targetTx = currentTx + (bagCenterX - foodCenterX);
        const targetTy = currentTy + (bagCenterY - foodCenterY);

        const velocity = options?.velocity ?? 0;
        const travelDuration = Math.max(200, Math.min(420, 420 - velocity * 120));

        food.classList.remove('is-dragging');
        food.style.pointerEvents = 'none';
        food.style.transition = `transform ${travelDuration}ms cubic-bezier(0.22, 0.7, 0.32, 1), opacity ${travelDuration}ms ease-out`;
        food.style.setProperty('--tx', `${targetTx}px`);
        food.style.setProperty('--ty', `${targetTy}px`);
        food.style.setProperty('--scale', '0.45');
        food.style.opacity = '0';

        updateScore(reward);
        playSound('earn');
        showEarningToast(reward);

        const respawnDelay = 1000;
        setTimeout(() => food.remove(), travelDuration + 20);
        setTimeout(() => {
            if (availableFoods.length === 0) return;
            createFoodItem(true);
        }, respawnDelay);
    }

    function createFoodItem(playSpawnAnimation = false) {
        if (availableFoods.length === 0) return;
        const foodData = availableFoods[Math.floor(Math.random() * availableFoods.length)];

        const food = document.createElement('div');
        food.className = 'fry';
        food.dataset.reward = foodData.reward.toString();
        const enableNativeDrag = !supportsCoarsePointer;
        food.draggable = enableNativeDrag;
        
        const emoji = document.createElement('span');
        emoji.textContent = foodData.emoji;
        
        const label = document.createElement('span');
        label.className = 'food-label';
        label.textContent = foodData.name;
        
        food.appendChild(emoji);
        food.appendChild(label);

        if (enableNativeDrag) {
            food.addEventListener('dragstart', (e) => {
                draggedItem = food;
                e.dataTransfer!.setData('text/plain', food.dataset.reward!);
                setTimeout(() => {
                    food.classList.add('is-dragging');
                }, 0);
            });

            food.addEventListener('dragend', () => {
                food.classList.remove('is-dragging');
                draggedItem = null;
            });
        }

        if (supportsCoarsePointer) {
            let pointerStart: { x: number; y: number; time: number } | null = null;
            let lastMove: { x: number; y: number; time: number } | null = null;

            const isInsideBag = (clientX: number, clientY: number, padding = 0) => {
                const bagRect = bagDropzone.getBoundingClientRect();
                return (
                    clientX >= bagRect.left - padding &&
                    clientX <= bagRect.right + padding &&
                    clientY >= bagRect.top - padding &&
                    clientY <= bagRect.bottom + padding
                );
            };

            food.style.touchAction = 'none';

            food.addEventListener('pointerdown', (event) => {
                // This logic works for mouse, touch, and pen, so we don't check pointerType.
                pointerStart = { x: event.clientX, y: event.clientY, time: Date.now() };
                draggedItem = food;
                food.classList.add('is-dragging');
                event.preventDefault(); // Prevents text selection on desktop
            });

            food.addEventListener('pointerup', (event) => {
                if (!pointerStart) {
                    return;
                }

                const releaseInfo = lastMove ?? { x: event.clientX, y: event.clientY, time: performance.now() };
                const totalTime = Math.max(1, releaseInfo.time - pointerStart.time);
                const totalDistance = Math.hypot(releaseInfo.x - pointerStart.x, releaseInfo.y - pointerStart.y);
                const velocity = totalDistance / totalTime;
                const bagRect = bagDropzone.getBoundingClientRect();
                const bagCenterX = bagRect.left + bagRect.width / 2;
                const bagCenterY = bagRect.top + bagRect.height / 2;

                const releaseVectorX = releaseInfo.x - pointerStart.x;
                const releaseVectorY = releaseInfo.y - pointerStart.y;
                const releaseMagnitude = Math.hypot(releaseVectorX, releaseVectorY);
                const toBagX = bagCenterX - releaseInfo.x;
                const toBagY = bagCenterY - releaseInfo.y;
                const toBagDistance = Math.hypot(toBagX, toBagY);
                const directionScore =
                    releaseMagnitude > 0 && toBagDistance > 0
                        ? (releaseVectorX * toBagX + releaseVectorY * toBagY) / (releaseMagnitude * toBagDistance)
                        : 0;

                const quickFlick = totalTime < 450 && releaseMagnitude > 30 && directionScore > 0.15 && toBagDistance < Math.max(180, bagRect.width * 1.6);
                const inBag = isInsideBag(releaseInfo.x, releaseInfo.y, 32);

                bagDropzone.classList.toggle('over', inBag);

                if (inBag || quickFlick) {
                    bagDropzone.classList.add('over');
                    completeBagDrop(food, { velocity });
                    setTimeout(() => bagDropzone.classList.remove('over'), 220);
                } else {
                    food.classList.remove('is-dragging');
                    food.style.transition = 'transform 0.22s ease';
                    food.style.setProperty('--tx', '0px');
                    food.style.setProperty('--ty', '0px');
                    setTimeout(() => {
                        food.style.transition = '';
                        food.style.removeProperty('--tx');
                        food.style.removeProperty('--ty');
                    }, 220);
                    bagDropzone.classList.remove('over');
                }

                pointerStart = null;
                food.classList.remove('is-dragging');
                draggedItem = null;
            });

            food.addEventListener('pointercancel', (event) => {
                if (!pointerStart) return;
                pointerStart = null;
                food.classList.remove('is-dragging');
                draggedItem = null;
            });

            food.addEventListener('pointermove', (event) => {
                if (!pointerStart) {
                    return;
                }

                const deltaX = event.clientX - pointerStart.x;
                const deltaY = event.clientY - pointerStart.y;

                food.style.setProperty('--tx', `${deltaX}px`);
                food.style.setProperty('--ty', `${deltaY}px`);

                lastMove = { x: event.clientX, y: event.clientY, time: performance.now() };
                const insideBag = isInsideBag(event.clientX, event.clientY, 24);
                bagDropzone.classList.toggle('over', insideBag);
                event.preventDefault();
            }, { passive: false });
        }

        friesContainer.appendChild(food);

        if (playSpawnAnimation) {
            food.classList.add('fry--spawning');
            requestAnimationFrame(() => {
                food.classList.remove('fry--spawning');
            });
        }
    }

    function setupMinigame() {
        if (!hasPlayedMinigame) {
            speak("put the fries in the bag");
            hasPlayedMinigame = true;
        }
        if (minigameTitle) {
            minigameTitle.textContent = '';
        }
        bagDropzone.textContent = '🛍️';
        friesContainer.innerHTML = '';
        for (let i = 0; i < 4; i++) createFoodItem(true);
    }

    function animateWorker() {
        if (availableFoods.length === 0) return;
        const foodData = availableFoods[Math.floor(Math.random() * availableFoods.length)];
        
        const food = document.createElement('span');
        food.textContent = foodData.emoji;
        food.className = 'worker-anim-item';
        food.id = 'worker-anim-food';
        food.style.top = '50%';
        workerAnimationRow.appendChild(food);

        setTimeout(() => { food.remove(); }, 3900);
    }

    function startWorkerInterval() {
        if (workerIntervalId) clearInterval(workerIntervalId);
        if (!hasWorker) {
            workerAnimationContainer.classList.add('hidden');
            return;
        };

        const interval = 10000 / workerLevel;
        workerIntervalId = window.setInterval(() => {
            if (availableFoods.length === 0) return;
            const foodData = availableFoods[Math.floor(Math.random() * availableFoods.length)];
            updateScore(foodData.reward);
            showEarningToast(foodData.reward);
            animateWorker();
        }, interval);
        workerAnimationContainer.classList.remove('hidden');
    }
    
    // --- New Minigames Logic ---
    let firstCard: HTMLElement | null = null, secondCard: HTMLElement | null = null;
    let lockBoard = false;
    let memoryGameTotalPairs = 0;

    function playSparkleEffect(targetElement: HTMLElement) {
        const rect = targetElement.getBoundingClientRect();
        const sparkleContainer = document.body;
        for (let i = 0; i < 10; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle-effect';
            sparkle.style.left = `${rect.left + rect.width / 2}px`;
            sparkle.style.top = `${rect.top + rect.height / 2}px`;
            const angle = Math.random() * 2 * Math.PI;
            const travelDist = 20 + Math.random() * 30;
            sparkle.style.setProperty('--tx', `${Math.cos(angle) * travelDist}px`);
            sparkle.style.setProperty('--ty', `${Math.sin(angle) * travelDist}px`);
            sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            sparkle.style.animationDelay = `${Math.random() * 0.2}s`;
            sparkleContainer.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }
    }

    function setupMemoryGame() {
        memoryGameGrid.innerHTML = '';
        firstCard = secondCard = null;
        lockBoard = false;
        
        const itemMap = new Map<string, string>();
        collectedSouvenirs.forEach(s => itemMap.set(s.emoji, s.name));
        unlockedRecipes.forEach(r => itemMap.set(r.emoji, r.name.replace(' Recipe', '')));
        
        let items = Array.from(itemMap.keys());
        if (items.length < 8) {
            const defaults = new Map([['🍟', 'Fries'], ['⭐', 'Star'], ['💎', 'Gem'], ['🎁', 'Gift'], ['🎈', 'Balloon'], ['🎉', 'Party'], ['❤️', 'Heart'], ['💯', 'Score']]);
            defaults.forEach((name, emoji) => {
                if(items.length < 8) {
                    items.push(emoji);
                    itemMap.set(emoji, name);
                }
            });
        }

        items = items.slice(0, 8); 
        memoryGameTotalPairs = items.length;
        const gameItems = [...items, ...items].sort(() => 0.5 - Math.random());
        
        gameItems.forEach(itemEmoji => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.dataset.item = itemEmoji;
            card.innerHTML = `
                <div class="memory-card-face card-front"></div>
                <div class="memory-card-face card-back">
                    <div class="card-emoji">${itemEmoji}</div>
                    <span class="card-label">${itemMap.get(itemEmoji)}</span>
                </div>
            `;
            card.addEventListener('click', flipCard);
            memoryGameGrid.appendChild(card);
        });
    }
    
    function flipCard(this: HTMLElement) {
        if (lockBoard || this === firstCard || this.classList.contains('is-matched')) return;
        playSound('card-flip');
        this.classList.add('is-flipped');
        
        if (!firstCard) {
            firstCard = this;
            return;
        }
        
        secondCard = this;
        lockBoard = true;
        checkForMatch();
    }
    
    async function handleMemoryGameWin() {
        updateScore(1000);
        await playGenericCelebration('memory-game-win-celebration', 'You Win! +$1000');
        memoryGameDialog.classList.add('hidden');
    }
    
    function checkForMatch() {
        const isMatch = firstCard!.dataset.item === secondCard!.dataset.item;
        isMatch ? disableCards() : unflipCards();
    }
    
    function disableCards() {
        firstCard!.classList.add('is-matched');
        secondCard!.classList.add('is-matched');
        playSparkleEffect(firstCard!);
        playSparkleEffect(secondCard!);
        firstCard!.removeEventListener('click', flipCard);
        secondCard!.removeEventListener('click', flipCard);
        updateScore(50);
        playSound('earn');
        
        const matchedPairs = document.querySelectorAll('.memory-card.is-matched').length / 2;
        if (matchedPairs === memoryGameTotalPairs) {
            handleMemoryGameWin();
        }

        resetBoard();
    }
    
    function unflipCards() {
        setTimeout(() => {
            firstCard!.classList.remove('is-flipped');
            secondCard!.classList.remove('is-flipped');
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    function getCafeMenuConfig(city: string): CafeMenuConfig {
        return cafeCityMenus[city] ?? defaultCafeMenu;
    }

    function resolveCafeCityBranch(): string {
        if (cafeCityMenus[currentLocation]) return currentLocation;
        const visitedCity = Array.from(visitedCities).find(city => cafeCityMenus[city]);
        if (visitedCity) return visitedCity;
        return 'Istanbul';
    }

    function getCafeAccent(city: string): string {
        const flight = flightData.find(f => f.city === city);
        return flight?.flagColors?.[0] ?? '#8b5a2b';
    }

    function buildCafeMenu(city: string): CafeDish[] {
        const config = getCafeMenuConfig(city);
        const recipe = flightData.find(f => f.city === city)?.recipe;
        const signatureBase = Math.max(60, Math.round(((recipe?.cost ?? 360) / 3)));
        const sideBase = Math.max(28, Math.round(signatureBase * 0.45));
        const signatureUnlocked = config.signature ? (unlockedRecipes.has(city) || !flightData.find(f => f.city === city)) : false;
        const menu: CafeDish[] = [];

        if (config.signature) {
            const reward = signatureUnlocked ? signatureBase : Math.round(signatureBase * 0.6);
            menu.push({
                name: config.signature.name,
                emoji: config.signature.emoji,
                reward,
                signature: true,
                locked: !signatureUnlocked,
                city
            });
        }

        config.sides.forEach((side, index) => {
            const reward = Math.max(18, Math.round(sideBase * (1.05 - index * 0.08)));
            menu.push({ name: side.name, emoji: side.emoji, reward, city });
        });

        return menu;
    }

    function renderCafeMenuChips(menu: CafeDish[]) {
        cafeBranchMenu.innerHTML = menu.map(dish => `
            <span class="cafe-chip ${dish.locked ? 'locked' : ''}">
                <span class="chip-label">${dish.emoji}</span>
                ${dish.name} · $${dish.reward}${dish.signature ? ' ⭐' : ''}${dish.locked ? ' (preview)' : ''}
            </span>
        `).join('');
    }
    
    const GRID_SIZE = 8;
    let gemGrid: (string | null)[][] = [];
    let selectedGem: { row: number, col: number } | null = null;
    let isSwapping = false;
    let gemSwapGems: string[] = [];
    
    function setupGemSwapGame() {
        gemSwapGrid.innerHTML = '';
        gemGrid = [];
        gemSwapGems = [];

        collectedSouvenirs.forEach(s => gemSwapGems.push(s.emoji));
        unlockedRecipes.forEach(r => gemSwapGems.push(r.emoji));
        visitedCities.forEach(city => {
            const flight = flightData.find(f => f.city === city);
            if (flight && flight.emojis) {
                gemSwapGems.push(...flight.emojis.slice(1, 4)); // Add some cultural emojis
            }
        });
        
        gemSwapGems = [...new Set(gemSwapGems)];
        if (gemSwapGems.length < 6) {
            const defaultGems = ['💎', '💍', '👑', '💰', '🪙', '🔮'];
            gemSwapGems.push(...defaultGems.slice(0, 6 - gemSwapGems.length));
        }

        for (let r = 0; r < GRID_SIZE; r++) {
            gemGrid[r] = [];
            for (let c = 0; c < GRID_SIZE; c++) {
                 do {
                    gemGrid[r][c] = gemSwapGems[Math.floor(Math.random() * gemSwapGems.length)];
                } while (
                    (c >= 2 && gemGrid[r][c] === gemGrid[r][c-1] && gemGrid[r][c] === gemGrid[r][c-2]) ||
                    (r >= 2 && gemGrid[r][c] === gemGrid[r-1][c] && gemGrid[r][c] === gemGrid[r-2][c])
                );
            }
        }
        renderGemGrid();
    }

    function renderGemGrid() {
        gemSwapGrid.innerHTML = '';
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                const gem = document.createElement('div');
                gem.className = 'gem';
                gem.textContent = gemGrid[r][c];
                gem.dataset.row = r.toString();
                gem.dataset.col = c.toString();
                gem.addEventListener('click', handleGemClick);
                gemSwapGrid.appendChild(gem);
            }
        }
    }
    
    async function handleGemClick(e: MouseEvent) {
        if (isSwapping) return;
        const target = e.currentTarget as HTMLElement;
        const row = parseInt(target.dataset.row!);
        const col = parseInt(target.dataset.col!);
        
        if (!selectedGem) {
            selectedGem = { row, col };
            target.classList.add('selected');
        } else {
            const prevSelected = document.querySelector('.gem.selected');
            prevSelected?.classList.remove('selected');
            
            const isAdjacent = Math.abs(selectedGem.row - row) + Math.abs(selectedGem.col - col) === 1;
            if (isAdjacent) {
                isSwapping = true;
                await swapGems(selectedGem.row, selectedGem.col, row, col);
                const matches = findMatches();
                if (matches.length > 0) {
                    await handleMatches(matches);
                } else {
                    await swapGems(selectedGem.row, selectedGem.col, row, col);
                }
                isSwapping = false;
            }
            selectedGem = null;
        }
    }

    async function swapGems(r1: number, c1: number, r2: number, c2: number) {
        [gemGrid[r1][c1], gemGrid[r2][c2]] = [gemGrid[r2][c2], gemGrid[r1][c1]];
        renderGemGrid();
        await new Promise(res => setTimeout(res, 200));
    }
    
    function findMatches(): { row: number, col: number }[] {
        const matches: { row: number, col: number }[] = [];
        const toMatch = (r: number, c: number) => { if (!matches.some(m => m.row === r && m.col === c)) matches.push({row:r, col:c}); };
        for (let r = 0; r < GRID_SIZE; r++) { for (let c = 0; c < GRID_SIZE - 2; c++) { if (gemGrid[r][c] && gemGrid[r][c] === gemGrid[r][c+1] && gemGrid[r][c] === gemGrid[r][c+2]) { toMatch(r,c); toMatch(r,c+1); toMatch(r,c+2); } } }
        for (let c = 0; c < GRID_SIZE; c++) { for (let r = 0; r < GRID_SIZE - 2; r++) { if (gemGrid[r][c] && gemGrid[r][c] === gemGrid[r+1][c] && gemGrid[r][c] === gemGrid[r+2][c]) { toMatch(r,c); toMatch(r+1,c); toMatch(r+2,c); } } }
        return matches;
    }
    
    async function handleMatches(matches: { row: number, col: number }[]) {
        matches.forEach(m => {
            const el = document.querySelector(`.gem[data-row='${m.row}'][data-col='${m.col}']`);
            if (el) {
                el.classList.add('matched');
                playSparkleEffect(el as HTMLElement);
            }
            updateScore(10);
        });
        playSound('earn');
        await new Promise(res => setTimeout(res, 300));
        matches.forEach(m => { gemGrid[m.row][m.col] = null; });
        for (let c = 0; c < GRID_SIZE; c++) {
            let emptyRow = GRID_SIZE - 1;
            for (let r = GRID_SIZE - 1; r >= 0; r--) {
                if (gemGrid[r][c] !== null) {
                    [gemGrid[r][c], gemGrid[emptyRow][c]] = [gemGrid[emptyRow][c], gemGrid[r][c]];
                    emptyRow--;
                }
            }
        }
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (gemGrid[r][c] === null) {
                    gemGrid[r][c] = gemSwapGems[Math.floor(Math.random() * gemSwapGems.length)];
                }
            }
        }
        renderGemGrid();
        await new Promise(res => setTimeout(res, 200));
        const newMatches = findMatches();
        if (newMatches.length > 0) {
            await handleMatches(newMatches);
        }
    }


    function closeAllDialogs() {
        document.querySelectorAll('.dialog-container').forEach(d => d.classList.add('hidden'));
    }

    // --- Cafe Tycoon Logic ---
    function resetCafeStacks() {
        cafeQueue.innerHTML = '';
        cafeDishStack.innerHTML = '';
        cafeCashStack.innerHTML = '';
        cafeCustomerTables.innerHTML = '';
        cafeCustomers = [];
        cafeReadyDishes = [];
        cafeCashDrops = [];
        for (let i = 0; i < 3; i++) {
            const table = document.createElement('div');
            table.className = 'cafe-table';
            cafeCustomerTables.appendChild(table);
        }
        refreshCafeHUD();
    }

    function renderOrdersList() {
        if (!cafeOrdersList) return;
        cafeOrdersList.innerHTML = '';
        cafeCustomers.filter(c => c.state === 'queue').forEach(customer => {
            const row = document.createElement('li');
            row.className = 'order-row';
            row.innerHTML = `<span>${customer.order.emoji} ${customer.order.name}</span><small>Patience: ${customer.patience}s</small>`;
            cafeOrdersList.appendChild(row);
        });
    }

    function renderReadyList() {
        if (!cafeReadyList) return;
        cafeReadyList.innerHTML = '';
        cafeReadyDishes.forEach((dishStack, idx) => {
            const row = document.createElement('li');
            row.className = 'order-row';
            row.innerHTML = `<span>${dishStack.dish.emoji} ${dishStack.dish.name}</span><small>Stack #${idx + 1}</small>`;
            cafeReadyList.appendChild(row);
        });
    }

    function renderInventoryPanel() {
        if (!cafeInventoryItems) return;
        cafeInventoryItems.innerHTML = '';
        const carrying = document.createElement('li');
        carrying.className = 'order-row';
        const typeIcon = carryType === 'potato' ? '🥔' : carryType === 'sliced' ? '🔪' : '👐';
        carrying.innerHTML = `<span>${typeIcon} Carrying</span><small>${carriedItems}/${maxCarry}</small>`;
        cafeInventoryItems.appendChild(carrying);
    }

    function refreshCafeHUD() {
        if (cafeMoneyTotal) cafeMoneyTotal.textContent = `$${score}`;
        if (cafeCityChip) cafeCityChip.textContent = `${cafeBranchCity} Branch`;
        const queueCount = cafeCustomers.filter(c => c.state === 'queue').length;
        if (cafeOrdersTotal) cafeOrdersTotal.textContent = `${queueCount}`;
        if (cafeReadyTotal) cafeReadyTotal.textContent = `${cafeReadyDishes.length}`;
        if (cafeCarryBadge) cafeCarryBadge.textContent = `Carrying ${carriedItems} ${carryType === 'potato' ? '🥔' : carryType === 'sliced' ? '🔪' : ''}`;
        if (cafeCapacityText) cafeCapacityText.textContent = `Capacity ${carriedItems}/${maxCarry}`;
        renderOrdersList();
        renderReadyList();
        renderInventoryPanel();
    }

    function showCafeRibbon() {
        cafeInstructionRibbon?.classList.add('show');
        cafeRibbonClose?.classList.remove('hidden');
        cafeRibbonShow?.classList.add('hidden');
        if (cafeRibbonTimer) clearTimeout(cafeRibbonTimer);
        cafeRibbonTimer = window.setTimeout(() => hideCafeRibbon(), 5000);
    }

    function hideCafeRibbon() {
        cafeInstructionRibbon?.classList.remove('show');
        cafeRibbonClose?.classList.add('hidden');
        cafeRibbonShow?.classList.remove('hidden');
    }

    function updateDishStackPositions() {
        cafeReadyDishes.forEach((item, index) => {
            item.element.style.transform = `translate(-50%, ${-index * 10}px)`;
        });
    }

    function updateCashStackPositions() {
        cafeCashDrops.forEach((item, index) => {
            item.element.style.transform = `translate(-50%, ${-index * 8}px)`;
        });
    }

    function updateCafeQueuePositions() {
        Array.from(cafeQueue.children).forEach((child, idx) => {
            (child as HTMLElement).style.transform = `translateY(${idx * -4}px)`;
        });
    }

    function spawnCafeCustomer() {
        if (!cafeActive || cafeActiveMenu.length === 0) return;
        const order = cafeActiveMenu[Math.floor(Math.random() * cafeActiveMenu.length)];
        const patience = 10 + Math.floor(Math.random() * 8);
        const customerEl = document.createElement('div');
        customerEl.className = 'cafe-customer';
        customerEl.innerHTML = `
            <span class="customer-emoji">${cafeCustomerEmojis[Math.floor(Math.random() * cafeCustomerEmojis.length)]}</span>
            <span class="order-bubble">${order.emoji}</span>
            <div class="customer-patience"><div class="fill" style="width:100%"></div></div>
        `;
        cafeQueue.appendChild(customerEl);
        cafeCustomers.push({ id: cafeCustomerCounter++, element: customerEl, order, patience, state: 'queue', mood: 'neutral' });
        updateCafeQueuePositions();
        refreshCafeHUD();
    }

    function cookCafeDishForQueue() {
        if (!cafeActive || cafeActiveMenu.length === 0) return;
        const waitingOrder = cafeCustomers.find(c => c.state === 'queue');
        const dish = waitingOrder?.order ?? cafeActiveMenu[Math.floor(Math.random() * cafeActiveMenu.length)];
        const item = document.createElement('div');
        item.className = 'stack-item';
        item.innerHTML = `<span class="plate">${dish.emoji}</span> <span>${dish.name}</span>`;
        cafeDishStack.appendChild(item);
        cafeReadyDishes.unshift({ dish, element: item, createdAt: Date.now() });
        updateDishStackPositions();
        refreshCafeHUD();
    }

    function placeCustomerAtTable(customer: CafeCustomer) {
        const tables = Array.from(cafeCustomerTables.children) as HTMLElement[];
        let targetIndex = customer.tableIndex ?? tables.findIndex(t => !t.querySelector('.seated-customer'));
        if (targetIndex === -1) targetIndex = 0;
        customer.tableIndex = targetIndex;
        const table = tables[targetIndex];
        table.querySelector('.seated-customer')?.remove();
        const seated = document.createElement('div');
        seated.className = 'seated-customer';
        seated.innerHTML = `<div class="mood">🙂</div><div class="dish">${customer.order.emoji}</div>`;
        table.appendChild(seated);
        customer.seatEl = seated;
    }

    function addCafeCash(amount: number, isTip: boolean) {
        const item = document.createElement('div');
        item.className = `cash-item ${isTip ? 'tip' : ''}`;
        item.textContent = isTip ? '💰' : '💵';
        cafeCashStack.appendChild(item);
        cafeCashDrops.unshift({ value: amount, element: item, isTip });
        updateCashStackPositions();
        refreshCafeHUD();
    }

    function collectCafeCash() {
        if (cafeCashDrops.length === 0) return;
        let total = 0;
        cafeCashDrops.forEach(drop => {
            total += drop.value;
            drop.element.remove();
        });
        cafeCashDrops = [];
        updateScore(total);
        showEarningToast(total);
        playSound('earn');
        refreshCafeHUD();
    }

    function serveCafeQueue() {
        if (!cafeActive || cafeCustomers.length === 0 || cafeReadyDishes.length === 0) return;
        const nextCustomer = cafeCustomers.find(c => c.state === 'queue');
        if (!nextCustomer) return;

        const matchingIndex = cafeReadyDishes.findIndex(stack => stack.dish.emoji === nextCustomer.order.emoji);
        const stackItem = matchingIndex >= 0 ? cafeReadyDishes.splice(matchingIndex, 1)[0] : cafeReadyDishes.pop();
        if (!stackItem) return;
        stackItem.element.remove();
        updateDishStackPositions();

        placeCustomerAtTable(nextCustomer);
        nextCustomer.element.remove();
        nextCustomer.state = 'eating';
        updateCafeQueuePositions();

        const seatMood = nextCustomer.seatEl?.querySelector('.mood') as HTMLElement | null;
        if (seatMood) seatMood.textContent = '😋';

        setTimeout(() => {
            const tipChance = nextCustomer.order.signature ? 0.35 : 0.15;
            const tip = Math.random() < tipChance;
            const reward = nextCustomer.order.reward + (tip ? Math.round(nextCustomer.order.reward * 0.3) : 0);
            addCafeCash(reward, tip);
            nextCustomer.seatEl?.remove();
            cafeCustomers = cafeCustomers.filter(c => c.id !== nextCustomer.id);
            refreshCafeHUD();
        }, 1400);
    }

    function tickCafePatience() {
        if (!cafeActive) return;
        cafeCustomers.forEach(customer => {
            if (customer.state !== 'queue') return;
            customer.patience -= 1;
            const fill = customer.element.querySelector('.customer-patience .fill') as HTMLElement | null;
            if (fill) fill.style.width = `${Math.max(0, (customer.patience / 16) * 100)}%`;
            if (customer.patience <= 0) {
                customer.element.classList.add('angry');
                customer.element.innerHTML = `<span class="customer-emoji">😡</span><span class="order-bubble">${customer.order.emoji}</span>`;
                setTimeout(() => customer.element.remove(), 300);
                cafeCustomers = cafeCustomers.filter(c => c.id !== customer.id);
                updateCafeQueuePositions();
                refreshCafeHUD();
            }
        });
    }

    function setupCafeBranch(city: string) {
        cafeBranchCity = city;
        cafeActiveMenu = buildCafeMenu(city);
        resetCafeStacks();
        renderCafeMenuChips(cafeActiveMenu);
        const accent = getCafeAccent(city);
        cafeWorldContainer.style.setProperty('--cafe-accent', accent);
        cafeBranchBanner.style.border = `2px solid ${accent}`;
        cafeBranchTitle.textContent = `Fajr's Café · ${city}`;
        const flight = flightData.find(f => f.city === city);
        if (flight?.restaurantImage) {
            cafeWorldContainer.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.08)), url(${flight.restaurantImage})`;
            cafeWorldContainer.style.backgroundSize = 'cover';
            cafeWorldContainer.style.backgroundPosition = 'center';
        } else {
            cafeWorldContainer.style.backgroundImage = '';
        }
        refreshCafeHUD();
    }

    function startCafeBranchLoops() {
        if (cafeCustomerSpawnId) clearInterval(cafeCustomerSpawnId);
        if (cafeKitchenLoopId) clearInterval(cafeKitchenLoopId);
        if (cafeServingLoopId) clearInterval(cafeServingLoopId);
        if (cafePatienceLoopId) clearInterval(cafePatienceLoopId);

        cafeCustomerSpawnId = window.setInterval(spawnCafeCustomer, 3500);
        cafeKitchenLoopId = window.setInterval(cookCafeDishForQueue, 2600);
        cafeServingLoopId = window.setInterval(serveCafeQueue, 1500);
        cafePatienceLoopId = window.setInterval(tickCafePatience, 1000);

        spawnCafeCustomer();
        cookCafeDishForQueue();
    }

    function stopCafeBranchLoops() {
        if (cafeCustomerSpawnId) clearInterval(cafeCustomerSpawnId);
        if (cafeKitchenLoopId) clearInterval(cafeKitchenLoopId);
        if (cafeServingLoopId) clearInterval(cafeServingLoopId);
        if (cafePatienceLoopId) clearInterval(cafePatienceLoopId);
        cafeCustomerSpawnId = cafeKitchenLoopId = cafeServingLoopId = cafePatienceLoopId = null;
        cafeActiveMenu = [];
        resetCafeStacks();
    }

    function moveEntityInCafe(targetElement: HTMLElement) {
        return new Promise<void>(resolve => {
            const rect = targetElement.getBoundingClientRect();
            cafePlayerTargetX = rect.left + rect.width / 2;
            cafePlayerTargetY = rect.top + rect.height / 2;
            currentCafeMovePromise = resolve;
        });
    }

    function spawnPotato() {
        if (!cafeActive) return;
        const pot = document.createElement('div');
        pot.className = 'potato';
        pot.textContent = '🥔';
        pot.style.left = `${10 + Math.random() * 80}%`;
        pot.style.top = `${40 + Math.random() * 50}%`;
        cafeWorldContainer.appendChild(pot);
        potatoes.push(pot);

        pot.addEventListener('click', async () => {
            if (isInteracting) return;
            if (carryType !== 'none' && carryType !== 'potato') return;
            if (carriedItems >= maxCarry) return;
            
            isInteracting = true;
            await moveEntityInCafe(pot);

            pot.remove();
            potatoes = potatoes.filter(p => p !== pot);
            carriedItems++;
            carryType = 'potato';
            updateCarryCounter();
            playSound('click');
            isInteracting = false;
        });
    }

    function updateCarryCounter() {
        carryCounter.textContent = `Carrying: ${carriedItems} ${carryType === 'potato' ? '🥔' : carryType === 'sliced' ? '🔪' : ''}`;
        refreshCafeHUD();
    }

    function resetCarry() {
        carriedItems = 0;
        carryType = 'none';
        updateCarryCounter();
    }

    async function handleStationClick(e: MouseEvent) {
        if (!cafeActive || isInteracting) return;
        const station = (e.target as HTMLElement).closest('.station');
        if (!station) return;
        const type = station.getAttribute('data-type');
        
        isInteracting = true;
        await moveEntityInCafe(station as HTMLElement);

        if (type === 'slicer' && carryType === 'potato' && carriedItems > 0) {
            carriedItems--;
            if (carriedItems === 0) carryType = 'sliced';
            updateCarryCounter();
            playSound('click');
            const icon = station.querySelector('.station-icon')!;
            const originalIcon = icon.textContent;
            icon.textContent = '✅';
            setTimeout(() => icon.textContent = originalIcon, 800);
        } else if (type === 'fryer' && carryType === 'sliced') {
            const fries = document.createElement('div');
            fries.className = 'serving-slot';
            fries.textContent = '🍟';
            servingSlots.appendChild(fries);
            resetCarry();
            updateScore(10);
            playSound('earn');
            showEarningToast(10);
            setTimeout(() => {
                if (fries.isConnected) fries.remove();
            }, 3000);
        }

        isInteracting = false;
    }

    function enterCafeView() {
        cafeActive = true;
        worldMap.classList.add('hidden');
        cafeWorldContainer.classList.remove('hidden');
        personContainer.classList.add('hidden');
        cafePlayer.textContent = personEmoji.textContent || '🧍';
        
        cafePlayerX = window.innerWidth / 2;
        cafePlayerY = window.innerHeight * 0.8;
        cafePlayerTargetX = cafePlayerX;
        cafePlayerTargetY = cafePlayerY;

        cafeBranchCity = resolveCafeCityBranch();
        setupCafeBranch(cafeBranchCity);
        refreshCafeHUD();
        showCafeRibbon();
        startCafeBranchLoops();

        potatoSpawnTimer = window.setInterval(spawnPotato, POTATO_SPAWN_INTERVAL);
        spawnPotato();

        updateButtonStates();
        // Start automation if unlocked
        if (hasCollector) {
            cafeWorkerCollector.classList.remove('hidden');
            startCollectorAutomation();
        }
        if (hasCook) {
            cafeWorkerCook.classList.remove('hidden');
            startCookAutomation();
        }
    }

    function exitCafeView() {
        cafeActive = false;
        worldMap.classList.remove('hidden');
        cafeWorldContainer.classList.add('hidden');
        personContainer.classList.remove('hidden');
        hideCafeRibbon();

        stopCafeBranchLoops();

        if (potatoSpawnTimer) clearInterval(potatoSpawnTimer);
        if (collectorIntervalId) clearInterval(collectorIntervalId);
        if (cookIntervalId) clearInterval(cookIntervalId);

        potatoes.forEach(p => p.remove());
        potatoes = [];
        resetCarry();
        servingSlots.innerHTML = '';
    }

    function startCollectorAutomation() {
        if(collectorIntervalId) clearInterval(collectorIntervalId);
        collectorIntervalId = window.setInterval(async () => {
            if (isCollectorBusy || potatoes.length === 0 || (carryType !== 'none' && carryType !== 'potato') || carriedItems >= maxCarry) return;

            isCollectorBusy = true;
            const targetPotato = potatoes[0];
            
            const collectorRect = cafeWorkerCollector.getBoundingClientRect();
            const potatoRect = targetPotato.getBoundingClientRect();
            
            cafeWorkerCollector.style.transform = `translate(${potatoRect.left}px, ${potatoRect.top}px)`;
            await new Promise(r => setTimeout(r, 1000));
            
            if(targetPotato.isConnected) {
                targetPotato.remove();
                potatoes.shift();
                carriedItems++;
                carryType = 'potato';
                updateCarryCounter();
            }

            const binRect = stationPotatoBin.getBoundingClientRect();
            cafeWorkerCollector.style.transform = `translate(${binRect.left}px, ${binRect.top}px)`;
            await new Promise(r => setTimeout(r, 1000));

            isCollectorBusy = false;
        }, 5000);
    }
    
    function startCookAutomation() {
        if(cookIntervalId) clearInterval(cookIntervalId);
        cookIntervalId = window.setInterval(async () => {
             if (isCookBusy || carriedItems === 0) return;

             isCookBusy = true;
             
             if(carryType === 'potato') {
                const slicerRect = stationSlicer.getBoundingClientRect();
                cafeWorkerCook.style.transform = `translate(${slicerRect.left}px, ${slicerRect.top}px)`;
                await new Promise(r => setTimeout(r, 1000));

                carriedItems--;
                if(carriedItems === 0) carryType = 'sliced';
                updateCarryCounter();
             }
             
             if(carryType === 'sliced') {
                const fryerRect = stationFryer.getBoundingClientRect();
                cafeWorkerCook.style.transform = `translate(${fryerRect.left}px, ${fryerRect.top}px)`;
                await new Promise(r => setTimeout(r, 1000));
                
                const fries = document.createElement('div');
                fries.className = 'serving-slot';
                fries.textContent = '🍟';
                servingSlots.appendChild(fries);
                resetCarry();
                updateScore(10);
                showEarningToast(10);
                setTimeout(() => { if (fries.isConnected) fries.remove(); }, 3000);
             }

             const startRect = stationSlicer.getBoundingClientRect();
             cafeWorkerCook.style.transform = `translate(${startRect.right + 20}px, ${startRect.top}px)`;
             await new Promise(r => setTimeout(r, 1000));

             isCookBusy = false;

        }, 7000);
    }


    // --- Event Listeners & Game Init ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllDialogs();
        }
    });

    document.body.addEventListener('click', async (e) => {
        const target = e.target as HTMLElement;
        
        if (cafeActive) {
            handleStationClick(e as MouseEvent);
            return; // Don't process other clicks in cafe view
        }
        
        // Prevent player movement when interacting with UI
        if (target.closest('.dialog-container, .action-button, [id$="-container"], .button-42, .button-5, .button-85, .button-14, #cafe-world-container')) {
             // Let other handlers below process the click
        } else if (!cafeActive) { // Prevent movement when in cafe view
            targetX = e.clientX;
            targetY = e.clientY;
        }

        const openDialog = document.querySelector('.dialog-container:not(.hidden)');
        if (openDialog && !target.closest('.dialog-container') && !target.closest('.action-button') && !target.closest('[id$="-container"]') && !target.closest('.button-42') && !target.closest('.button-5') && !target.closest('.button-85') && !target.closest('.button-14')) {
             openDialog.classList.add('hidden');
             return;
        }

        if (isInteracting) return;

        // DIALOG INTERACTIONS
        if (target.id === 'exit-gift-shop-btn') {
            playSound('click'); giftShopDialog.classList.add('hidden'); return;
        }
        if (target.matches('[data-dialog]')) {
             playSound('click');
             const dialogId = target.getAttribute('data-dialog');
             document.getElementById(dialogId!)?.classList.add('hidden');
             return;
        }
        if (passportDialog.contains(target) && target === applyPassportBtn) {
            if (score >= 200) {
                updateScore(-200);
                hasPassport = true;
                passportDialog.classList.add('hidden');
                speak("Congratulations! You now have a passport!");
                playPassportCelebration();
            } else {
                handleInsufficientFunds();
            }
            return;
        }
        if (flightsDialog.contains(target)) {
            const button = target.closest('.button-42');
            if (button) {
                const city = button.getAttribute('data-city');
                const flight = flightData.find(f => f.city === city);
                if (flight) {
                    if (score >= flight.cost) {
                        playSound('ding-dong');
                        travelTo(flight);
                    } else {
                        handleInsufficientFunds();
                    }
                }
            }
            return;
        }
        if (giftShopDialog.contains(target)) {
            const button = target.closest('.button-14') as HTMLButtonElement | null;
            if (button && !button.disabled) {
                const itemName = button.getAttribute('data-name')!;
                const itemType = button.getAttribute('data-type')!;
                const flight = flightData.find(f => f.city === currentLocation)!;
                let cost = 0;
                let item;

                if (itemType === 'souvenir') {
                    item = flight.souvenirs.find(s => s.name === itemName)!;
                    cost = item.cost;
                } else if (itemType === 'recipe') {
                    item = flight.recipe;
                    cost = item.cost;
                }
                
                if (score >= cost) {
                    if (itemType === 'souvenir') {
                        updateScore(-cost);
                        collectedSouvenirs.set(itemName, item as any);
                        const el = document.createElement('div');
                        el.className = 'souvenir-item';
                        el.textContent = `${item!.emoji} ${item!.name}`;
                        souvenirsList.appendChild(el);
                    } else if (itemType === 'recipe') {
                        updateScore(-cost);
                        unlockedRecipes.set(flight.city, item as any);
                        playGenericCelebration('recipe-celebration', `${item!.name} added to Fajr's Café!`);
                        updateAvailableFoods();
                        if (cafeActive && cafeBranchCity === flight.city) {
                            setupCafeBranch(cafeBranchCity);
                            startCafeBranchLoops();
                        }
                        const narration = recipeNarration[flight.city];
                        if (narration) speak(narration, flight.lang);
                    }
                    playSound('success');
                    updateButtonStates();
                } else {
                    handleInsufficientFunds();
                }
            }
            return;
        }

        if (target === memoryMatchBtn && !memoryMatchBtn.disabled) { setupMemoryGame(); memoryGameDialog.classList.remove('hidden'); return; }
        if (target === gemSwapBtn && !gemSwapBtn.disabled) { setupGemSwapGame(); gemSwapDialog.classList.remove('hidden'); return; }

        if (staffDialog.contains(target)) {
             if(target === hireWorkerBtn && !hireWorkerBtn.disabled) {
                if (score >= 1000) {
                    updateScore(-1000);
                    hasWorker = true;
                    workerLevel = 1;
                    startWorkerInterval();
                    staffDialog.classList.add('hidden');
                } else {
                    handleInsufficientFunds();
                }
             } else if (target === promoteWorkerBtn && !promoteWorkerBtn.disabled) {
                const cost = 1000 * (workerLevel + 1);
                if(score >= cost) {
                    updateScore(-cost);
                    workerLevel++;
                    startWorkerInterval();
                    staffDialog.classList.add('hidden');
                } else {
                    handleInsufficientFunds();
                }
             }
             return;
        }
        
        // WORLD INTERACTIONS
        const interactionTarget = target.closest('#passport-office-container, #airport-container, #mf-group-container, #restaurant-container:not(.hidden), #gift-shop-container:not(.hidden), #luggage-container, #settings-container, #away-airport-placeholder:not(.hidden)');
        if (interactionTarget) {
            playSound('click');
            isInteracting = true;
            closeAllDialogs();
            
            if (interactionTarget.id !== 'luggage-container') {
                await moveTo(interactionTarget as HTMLElement);
            }
            
            if (interactionTarget.id === 'passport-office-container') {
                 if (hasPassport) {
                    officerMessage.querySelector('#speech-bubble')!.textContent = "You already have a passport!";
                    officerMessage.classList.remove('hidden');
                } else {
                    updateButtonStates();
                    passportDialog.classList.remove('hidden');
                }
            } else if (interactionTarget.id === 'mf-group-container') {
                enterCafeView();
            } else if (interactionTarget.id === 'luggage-container') {
                souvenirsContainer.classList.remove('hidden');
            } else if (interactionTarget.id === 'settings-container') {
                settingsDialog.classList.remove('hidden');
            } else if (interactionTarget.id === 'airport-container' || interactionTarget.id === 'away-airport-placeholder') {
                if (!hasPassport) {
                    officerMessage.querySelector('#speech-bubble')!.textContent = "You must have a passport to travel";
                    officerMessage.classList.remove('hidden');
                } else if (currentLocation === 'Toronto') {
                     flightsContainer.innerHTML = flightData.map(f => `
                        <button class="button-42" role="button" data-city="${f.city}" id="flight-btn-${f.city}">
                            <span class="flight-flag">${f.visa}</span>
                            <span class="flight-city-name">${f.city}</span>
                            <span class="flight-cost">$${f.cost}</span>
                            ${visitedCities.has(f.city) ? '<span class="visited-checkmark">✅</span>' : ''}
                        </button>
                    `).join('');
                    updateButtonStates();
                    flightsDialog.classList.remove('hidden');
                } else {
                    await returnHome();
                }
            } else if (interactionTarget.id === 'restaurant-container') {
                const flight = flightData.find(f => f.city === currentLocation);
                if (flight) {
                    restaurantImage.src = flight.restaurantImage;
                    restaurantViewContainer.classList.remove('hidden');
                }
            } else if (interactionTarget.id === 'gift-shop-container') {
                const flight = flightData.find(f => f.city === currentLocation);
                if (flight) {
                    let itemsHTML = '';
                    if (flight.souvenirs) {
                        itemsHTML += flight.souvenirs.map(item => `
                            <button class="gift-item button-14" role="button" data-name="${item.name}" data-type="souvenir" id="souvenir-btn-${item.name.replace(/\s+/g, '-')}">
                                ${item.emoji} ${item.name}<br>
                                $${item.cost}
                            </button>
                        `).join('');
                    }
                     itemsHTML += `<button class="gift-item button-14 recipe-item" role="button" data-name="${flight.recipe.name}" data-type="recipe" id="recipe-btn-${flight.recipe.name.replace(/\s+/g, '-')}}">
                        📖 ${flight.recipe.name}<br>
                        $${flight.recipe.cost}
                    </button>`;
                    giftShopItemsContainer.innerHTML = itemsHTML;
                    updateButtonStates();
                    giftShopDialog.classList.remove('hidden');
                }
            }
            isInteracting = false;
        }
    });
    
    // Settings Listeners
    const initialEmoji = personEmoji.textContent || '🧍';

    const updateSelectedEmoji = (emoji: string) => {
        personEmoji.textContent = emoji;
        emojiOptionButtons.forEach(btn => {
            const isSelected = btn.dataset.emojiOption === emoji;
            btn.classList.toggle('selected', isSelected);
            btn.setAttribute('aria-pressed', isSelected.toString());
        });
    };

    emojiOptionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const emoji = btn.dataset.emojiOption;
            if (!emoji) return;
            playSound('click');
            updateSelectedEmoji(emoji);
        });
    });

    playerNameInput.addEventListener('input', () => {
        playerName = playerNameInput.value.trim() || 'Person';
        personLabel.textContent = playerName;
    });

    sfxMuteBtn.addEventListener('click', () => {
        isSfxMuted = !isSfxMuted;
        sfxMuteBtn.textContent = isSfxMuted ? '🔇' : '🔊';
    });

    musicMuteBtn.addEventListener('click', () => {
        isMusicMuted = !isMusicMuted;
        musicMuteBtn.textContent = isMusicMuted ? '🔇' : '🎵';
    });
    
    settingsOkBtn.addEventListener('click', () => {
        settingsDialog.classList.add('hidden');
        saveGameState();
    });

    // Tooltip and Hover Sound Logic
    document.body.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement;
        const flightButton = target.closest('.button-42');
        
        if (flightButton) {
            const city = flightButton.getAttribute('data-city');
            const flight = flightData.find(f => f.city === city);
            if (flight) {
                flightTooltip.innerHTML = `<strong>${flight.airline}</strong><br>Airport: ${flight.airport}<br>Time: ${flight.time}h`;
                flightTooltip.style.opacity = '1';
            }
        }

        const interactiveElement = target.closest('.action-button, .button-42, .button-5, .button-14, .button-85, #passport-office-container, #airport-container, #mf-group-container, #restaurant-container, #gift-shop-container, #luggage-container, #settings-container, #away-airport-placeholder');
        if (interactiveElement && !interactiveElement.hasAttribute('data-hover-sound-played')) {
            playSound('pop');
            interactiveElement.setAttribute('data-hover-sound-played', 'true');
            interactiveElement.addEventListener('mouseleave', () => {
                interactiveElement.removeAttribute('data-hover-sound-played');
                if (flightButton) flightTooltip.style.opacity = '0';
            }, { once: true });
        }
    });
    
    document.body.addEventListener('mousemove', (e) => {
         if (flightTooltip.style.opacity === '1') {
            flightTooltip.style.left = `${e.clientX + 15}px`;
            flightTooltip.style.top = `${e.clientY + 15}px`;
         }
    });

    // Minigame Drag/Drop Listeners
    bagDropzone.addEventListener('dragover', e => {
        e.preventDefault();
        bagDropzone.classList.add('over');
    });

    bagDropzone.addEventListener('dragleave', () => {
        bagDropzone.classList.remove('over');
    });

    bagDropzone.addEventListener('drop', e => {
        e.preventDefault();
        bagDropzone.classList.remove('over');
        if (draggedItem) {
            completeBagDrop(draggedItem);
        }
    });
    
    // Cafe Tycoon Listeners
    returnToWorldBtn.addEventListener('click', () => {
        exitCafeView();
        const mfRect = mfGroupContainer.getBoundingClientRect();
        targetX = mfRect.left + mfRect.width / 2;
        targetY = mfRect.top + mfRect.height / 2;
    });

    cafeCashStack.addEventListener('click', () => {
        if (!cafeActive) return;
        collectCafeCash();
    });

    cafeRibbonClose?.addEventListener('click', hideCafeRibbon);
    cafeRibbonShow?.addEventListener('click', showCafeRibbon);

    cafeOpenTutorialBtn?.addEventListener('click', () => {
        cafeTutorialOverlay?.classList.remove('hidden');
    });

    cafeTutorialClose?.addEventListener('click', () => {
        cafeTutorialOverlay?.classList.add('hidden');
    });

    cafeUpgradesBtn.addEventListener('click', () => {
        updateButtonStates();
        cafeUpgradesDialog.classList.remove('hidden');
    });
    
    hireCollectorBtn.addEventListener('click', () => {
        const cost = 500;
        if (score >= cost && !hasCollector) {
            updateScore(-cost);
            hasCollector = true;
            cafeWorkerCollector.classList.remove('hidden');
            startCollectorAutomation();
            cafeUpgradesDialog.classList.add('hidden');
            saveGameState();
        } else {
            handleInsufficientFunds();
        }
    });
    
    hireCookBtn.addEventListener('click', () => {
        const cost = 1500;
        if (score >= cost && !hasCook) {
            updateScore(-cost);
            hasCook = true;
            cafeWorkerCook.classList.remove('hidden');
            startCookAutomation();
            cafeUpgradesDialog.classList.add('hidden');
            saveGameState();
        } else {
            handleInsufficientFunds();
        }
    });


    // --- Game initialization ---
    function init() {
        loadGameState();
        updateSelectedEmoji(personEmoji.textContent || '🧍');
        playSound('welcome');
        updateMinigameUnlockStatus();
        
        // Save game state periodically
        setInterval(saveGameState, 60000); // Save every minute
        window.addEventListener('beforeunload', saveGameState);

        gameLoop();
        
        // Hide loading screen
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }

    init();
});