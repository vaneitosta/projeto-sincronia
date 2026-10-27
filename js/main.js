// Sincronia — dados originais preservados; atmosferas e recursos sensoriais opcionais.
(function () {
"use strict";

const palettes = [["#f5f7f2", "#35483e", "#526f60"], ["#f5f4f8", "#434354", "#66647c"], ["#f1f6f8", "#344b55", "#52717e"], ["#f8f5f0", "#554b42", "#786854"], ["#f3f6f4", "#3c4e49", "#58746a"], ["#f5f5f2", "#464b48", "#646d64"], ["#f2f5f7", "#3b4c59", "#587183"], ["#f7f4f0", "#544d46", "#75695c"], ["#faf7eb", "#514b39", "#786c40"], ["#faf3f4", "#58484d", "#86636e"], ["#f1f5f8", "#354b5b", "#56738a"], ["#f5f7f3", "#35453f", "#506e61"]];
const messages = ["Você merece um momento de tranquilidade, mesmo nos dias difíceis.", "Nem tudo precisa ser resolvido hoje. Um passo de cada vez também é caminho.", "Seu valor não depende de quanto você conseguiu produzir hoje.", "É possível acolher o que você sente sem precisar encontrar todas as respostas agora.", "Pequenos gestos de cuidado também fazem parte de uma vida significativa.", "Você pode reconhecer suas dificuldades sem diminuir suas conquistas.", "Descansar é uma necessidade humana, não uma falha.", "Há espaço para recomeçar com calma, respeitando seu próprio ritmo.", "Uma conversa com alguém de confiança pode tornar um dia difícil menos solitário.", "Você não precisa transformar cada momento em uma grande decisão.", "Alguns dias pedem coragem; outros, gentileza consigo mesmo.", "Sentir-se inseguro não apaga tudo o que você já aprendeu.", "A esperança também pode ser discreta: às vezes, ela começa com um pequeno cuidado.", "Comparar sua trajetória com a de outras pessoas não revela todo o seu valor.", "Permita-se apreciar algo simples hoje, sem exigir que isso resolva tudo.", "Você pode buscar apoio sem precisar justificar seu sofrimento.", "Nem todo pensamento precisa virar uma ação. Há liberdade em observar e refletir.", "É possível respeitar seu passado e continuar descobrindo novos interesses.", "Seu ritmo não precisa ser igual ao de ninguém.", "Um instante de pausa pode ser um presente para a sua atenção.", "Aquilo que você sente merece atenção, mesmo quando é difícil colocar em palavras.", "Uma pausa breve pode ajudar você a perceber o que precisa neste momento.", "Você pode aprender aos poucos, sem cobrar de si respostas imediatas.", "Seus esforços merecem reconhecimento, inclusive os que ninguém vê.", "Cada pessoa tem uma história que não cabe em comparações.", "Gentileza consigo mesmo pode tornar o cotidiano mais leve.", "Pequenos momentos de tranquilidade também merecem espaço no dia.", "O que parece simples para alguém pode exigir muito esforço de outra pessoa.", "Ouvir alguém com atenção é uma forma valiosa de cuidado.", "Você não precisa estar animado o tempo todo para merecer companhia e respeito.", "Alguns sentimentos ficam mais compreensíveis quando conversamos sobre eles.", "Você pode reconhecer seus limites sem desvalorizar suas capacidades.", "Buscar clareza pode ser mais útil do que cobrar certezas.", "Uma lembrança agradável pode trazer conforto, sem apagar as dificuldades do presente.", "Às vezes, cuidar de algo pequeno já é uma maneira de cuidar de si.", "Você pode valorizar o caminho percorrido mesmo que ainda tenha dúvidas.", "Existem muitas formas de demonstrar força, inclusive pedir companhia.", "Um dia difícil não resume quem você é.", "Seu tempo de descanso também tem valor.", "Você não precisa encontrar uma lição em tudo o que acontece.", "Uma conversa tranquila pode abrir espaço para novas perspectivas.", "Observe o que lhe faz bem sem transformar isso em mais uma cobrança.", "Nem toda conquista precisa ser grande para ser importante.", "Há dignidade nos pequenos cuidados cotidianos.", "Você pode sentir saudade e, ainda assim, encontrar momentos de alegria.", "A vida cotidiana também é feita de instantes que merecem atenção.", "Quando as palavras faltam, a presença de alguém confiável pode ajudar.", "Você merece ser tratado com respeito, inclusive por si mesmo.", "Fazer algo no próprio ritmo não diminui seu esforço.", "Uma mudança de perspectiva pode começar com uma pergunta gentil.", "Você pode respeitar suas emoções sem deixar que elas definam toda a sua história.", "Nem sempre precisamos explicar imediatamente o que sentimos.", "Valorizar uma pequena alegria não significa ignorar os problemas.", "Cuidar das relações também pode significar ouvir e ser ouvido.", "Você pode reservar um instante para apreciar o que está ao seu redor.", "O que você viveu faz parte de sua história, mas não precisa ser sua única definição.", "Seu jeito de aprender e descobrir o mundo merece respeito.", "É possível ser gentil e reconhecer que existem dias complicados.", "Uma palavra acolhedora não resolve tudo, mas pode oferecer companhia por um instante.", "Você pode celebrar uma pequena conquista sem se comparar a ninguém.", "Você pode mudar de ideia quando descobre algo novo sobre si.", "Um limite dito com respeito também pode cuidar de uma relação.", "Há dias em que fazer o possível já ocupa toda a nossa energia.", "Escutar com curiosidade pode aproximar pessoas que pensam diferente.", "Uma decisão pode esperar enquanto você reúne o que precisa para tomá-la.", "Você pode celebrar uma conquista sem esconder o esforço que ela exigiu.", "Nem toda pausa precisa ter uma explicação.", "Recomeçar pode ser continuar de um jeito que faz mais sentido agora.", "O carinho pode aparecer em um gesto simples e atento.", "Você pode gostar da própria companhia e também sentir falta de alguém.", "O que você aprende sobre seus limites pode orientar suas próximas escolhas.", "Um pedido de ajuda pode começar com poucas palavras.", "A beleza de um momento não depende de ele ser compartilhado.", "Você pode reconhecer um erro e escolher como reparar o que for possível.", "Algumas respostas ganham forma quando damos tempo à pergunta.", "Ter dúvidas também faz parte de prestar atenção à vida.", "Seu dia pode conter cansaço e uma pequena alegria ao mesmo tempo.", "Você pode agradecer o que recebeu e reconhecer o que ainda lhe falta.", "Há conversas que precisam mais de escuta do que de conselho.", "Uma escolha pequena pode abrir espaço para algo que importa a você.", "Você pode cuidar de alguém sem esquecer suas próprias necessidades.", "A paciência com o aprendizado vale para você também.", "Nem todo convite precisa ser aceito para que exista afeto.", "Perceber que algo mudou pode ser o começo de uma nova compreensão.", "Você pode guardar uma boa lembrança sem precisar voltar ao que passou.", "Fazer uma pergunta sincera pode ser uma forma de se aproximar.", "O cuidado pode estar em diminuir uma cobrança que já não ajuda.", "Você pode escolher com quem dividir o que está vivendo.", "Uma relação pode ganhar espaço quando há respeito pelas diferenças.", "Seu interesse por algo novo não precisa começar com habilidade.", "O silêncio pode ser descanso quando é uma escolha sua.", "Você pode reconhecer o que deu certo sem negar o que foi difícil.", "A atenção que você oferece aos outros também pode voltar para você.", "Um plano pode mudar sem que todo o caminho perca o sentido.", "Há valor em notar as pessoas que tornam seu cotidiano mais acolhedor.", "Você pode aprender a dizer o que precisa com calma e clareza.", "Um encontro simples pode deixar uma lembrança importante.", "Reconhecer uma necessidade é diferente de precisar resolvê-la imediatamente.", "Você pode desfrutar de um momento bom sem saber quanto tempo ele vai durar.", "Às vezes, estar presente já é uma maneira de demonstrar afeto."];

const root = document.documentElement;
const byId = (id) => document.getElementById(id);
const output = byId("message");
const status = byId("action-status");
const receive = byId("receive");
const copy = byId("copy");
const share = byId("share");
const panel = byId("access-panel");
const access = byId("access-toggle");
const mediaQuery = (query) => typeof window.matchMedia === "function"
  ? window.matchMedia(query) : {matches:false};
const motionQuery = mediaQuery("(prefers-reduced-motion: reduce)");
const contrastQuery = mediaQuery("(forced-colors: active), (prefers-contrast: more)");
// Tarefas visuais opcionais são limitadas, canceláveis e não ficam em segundo plano.
const optionalJobs = new Set();
let optionalSuspended = false;
function afterPaint(task) {
  if (document.hidden || optionalSuspended) return () => {};
  let frame, timer;
  const cancel = () => {
    if (frame !== undefined && window.cancelAnimationFrame) window.cancelAnimationFrame(frame);
    if (timer !== undefined) window.clearTimeout(timer);
    optionalJobs.delete(cancel);
  };
  const run = () => { optionalJobs.delete(cancel); if (!document.hidden && !optionalSuspended) task(); };
  optionalJobs.add(cancel);
  if (typeof window.requestAnimationFrame === "function") {
    frame = window.requestAnimationFrame(() => { timer = window.setTimeout(run, 0); });
  } else timer = window.setTimeout(run, 0);
  return cancel;
}
// Endereço público do projeto, também incluído nas mensagens compartilhadas.
const PUBLIC_URL = "https://vaneitosta.github.io/projeto-sincronia/";
const atmospheres = [
  {name:"Renovação", sound:"brisa", frequency:420, tone:196, art:'<path d="M90 340Q-40 70 200 110Q300 260 90 340ZM760 870Q650 620 910 690Q990 840 760 870Z"/>'},
  {name:"Serenidade", sound:"toque", frequency:680, tone:261.63, art:'<path d="M-60 180Q240 20 190 370T140 720M850 260Q700 440 920 580T900 940"/>'},
  {name:"Equilíbrio", sound:"agua", frequency:780, tone:220, art:'<path d="M-60 180Q100 70 250 180T550 180M650 820Q800 690 1060 820M700 860Q850 740 1050 860"/>'},
  {name:"Reflexão", sound:"vento", frequency:520, tone:174.61, art:'<path d="M50-50Q260 170 80 420M100-50Q310 180 130 420M880 580Q700 800 950 1050"/>'},
  {name:"Harmonia", sound:"brisa", frequency:600, tone:207.65, art:'<path d="M80 350Q0 80 260 100Q260 300 80 350ZM800 900Q700 640 950 650Q970 860 800 900ZM80 350L230 130M800 900L930 680"/>'},
  {name:"Tranquilidade", sound:"toque", frequency:720, tone:293.66, art:'<path d="M40 150L210 70L290 240L120 320ZM750 750L870 630L990 750L870 870Z"/><circle cx="100" cy="800" r="55"/>'},
  {name:"Introspecção", sound:"agua", frequency:540, tone:164.81, art:'<path d="M-60 250Q100 120 270 250M-60 290Q100 160 270 290M750 760Q920 620 1080 760M750 800Q920 660 1080 800"/>'},
  {name:"Acolhimento", sound:"vento", frequency:360, tone:185, art:'<rect x="30" y="80" width="230" height="230" rx="95"/><rect x="780" y="700" width="200" height="220" rx="95"/>'},
  {name:"Esperança", sound:"brisa", frequency:900, tone:246.94, art:'<path d="M80 180L-30 80M115 150L80-30M160 140L190-20M840 870L1020 980M860 830L1040 860M820 900L840 1060"/>'},
  {name:"Cuidado", sound:"vento", frequency:650, tone:233.08, art:'<path d="M80 330Q-40 60 220 110Q320 290 80 330ZM120 350Q200 90 310 240Q320 370 120 350ZM800 880Q700 620 930 680Q1000 820 800 880Z"/>'},
  {name:"Serenidade", sound:"agua", frequency:680, tone:196, art:'<path d="M-60 100C360 100-120 450 200 450M-60 150C300 150-100 500 200 500M850 600C650 800 1100 780 850 1050"/>'},
  {name:"Gratidão", sound:"cristal", frequency:1100, tone:523.25, art:'<circle cx="80" cy="150" r="9"/><circle cx="180" cy="230" r="5"/><circle cx="240" cy="90" r="7"/><circle cx="850" cy="760" r="8"/><circle cx="940" cy="850" r="5"/><circle cx="780" cy="930" r="6"/>'}
];
// Os 12 temas mensais usam as paletas originais sem alterações.
const monthIds = ["janeiro","fevereiro","marco","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const monthLabels = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const themes = atmospheres.map((profile, index) => ({
  ...profile, id: monthIds[index], label: monthLabels[index] + " — " + profile.name,
  palette: palettes[index], light: palettes[index][2], duration: 240 + (index % 4) * 25,
  halo: 10 + index, lift: index % 2 ? -.5 : 0, filled: [0,4,9,11].includes(index)
}));
themes.push(
  {id:"aurora", label:"Aurora", name:"Aurora", palette:["#f2edff","#35234f","#7040bd"], light:"#41c9a0", duration:300, halo:24, lift:-.5, filled:false, sound:"cristal", frequency:880, tone:392, interval:1.5, art:'<path d="M-80 300Q150-80 350 140M-60 350Q160-30 370 190M700 920Q870 610 1080 760"/>'},
  {id:"oceano", label:"Oceano", name:"Oceano", palette:["#e6f6ff","#123e55","#006a91"], light:"#25bfd1", duration:325, halo:20, lift:0, filled:false, sound:"agua", frequency:440, tone:146.83, sweep:.65, art:'<path d="M-80 150Q100-30 300 150T650 150M-80 210Q100 30 300 210T650 210M650 820Q840 620 1060 820M650 880Q840 680 1060 880"/>'},
  {id:"solar", label:"Solar", name:"Solar", palette:["#fff4db","#503716","#995000"], light:"#f4b629", duration:275, halo:28, lift:-.5, filled:false, sound:"toque", frequency:740, tone:329.63, interval:1.25, art:'<circle cx="100" cy="120" r="110"/><circle cx="100" cy="120" r="155"/><path d="M820 790L1030 1000M860 730L1080 810M760 850L800 1080"/>'}
);
const themeById = (id) => themes.find(theme => theme.id === id);
const STORAGE_KEY = "sincronia.preferences.v1";
const defaults = () => ({version:2, textSize:"normal", mode:"auto", quality:"auto", manualTheme:"janeiro", largeText:false, highContrast:false, reducedMotion:false, decorationOff:false});
const featuredNames = {aurora:"Bruma Lilás", oceano:"Maré Serena", solar:"Luz da Manhã"};
const wallpaperFamilies = {
  aurora:"bruma", oceano:"mare", solar:"luz"
};
let wallpaperRequest = 0;
let wallpaperKey = "";
let wallpaperResizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(wallpaperResizeTimer);
  wallpaperResizeTimer = window.setTimeout(updateWallpaper, 150);
});
function updateWallpaper() {
  const wallpaper = byId("wallpaper");
  const prefs = currentPreferences();
  const disabled = document.hidden || optionalSuspended || prefs.decorationOff || prefs.highContrast || contrastQuery.matches;
  wallpaper.hidden = disabled;
  if (disabled) {
    wallpaperRequest++;
    wallpaperKey = "";
    wallpaper.style.backgroundImage = "none";
    root.dataset.wallpaper = "off";
    return;
  }
  if (!activeTheme) return;
  const family = wallpaperFamilies[activeTheme.id] || activeTheme.id;
  const screenWidth = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
  const size = connection && connection.saveData ? "tiny" : effectiveQuality === "economy" ? "small"
    : screenWidth > 3840 ? "8k" : screenWidth > 1600 ? "4k" : "large";
  const key = family + "-" + size;
  root.dataset.wallpaper = family;
  if (key === wallpaperKey) return;
  wallpaperKey = key;
  const request = ++wallpaperRequest;
  const url = new URL("assets/wallpapers/" + key + ".webp", document.baseURI).href;
  const image = new Image();
  image.onload = () => {
    if (request !== wallpaperRequest || document.hidden || optionalSuspended) return;
    wallpaper.style.backgroundImage = 'url("' + url + '")';
  };
  image.onerror = () => {
    if (request !== wallpaperRequest) return;
    wallpaper.style.backgroundImage = "none";
    wallpaperKey = "";
  };
  image.src = url;
}
function validatePreferences(value) {
  if (!value || typeof value !== "object" || ![1,2].includes(value.version)) return defaults();
  const clean = defaults();
  if (["auto","random","manual"].includes(value.mode)) clean.mode = value.mode;
  if (["auto","economy","balanced","maximum"].includes(value.quality)) clean.quality = value.quality;
  if (themeById(value.manualTheme)) clean.manualTheme = value.manualTheme;
  for (const key of ["largeText","highContrast","reducedMotion","decorationOff"]) {
    if (typeof value[key] === "boolean") clean[key] = value[key];
  }
  clean.textSize = ["normal","large","extra-large"].includes(value.textSize)
    ? value.textSize : clean.largeText ? "large" : "normal";
  clean.largeText = clean.textSize !== "normal";
  return clean;
}
let storageAvailable = true;
function storageNotice() {
  byId("storage-help").textContent = storageAvailable
    ? "Preferências salvas somente neste navegador, quando permitido. Som e vibração sempre começam desligados."
    : "O armazenamento local não está disponível. As preferências valem somente nesta sessão.";
}
function loadPreferences() {
  let raw;
  try { raw = window.localStorage.getItem(STORAGE_KEY); }
  catch (_) { storageAvailable = false; return defaults(); }
  if (!raw) return defaults();
  try { return validatePreferences(JSON.parse(raw)); }
  catch (_) { return defaults(); } // Dados inválidos não bloqueiam a experiência.
}
let preferences = loadPreferences();
let previewPreferences = null;
let demoTheme = null;
let randomTheme = null;
let activeTheme = null;
let renderedArt = null;
let artPending = false;
function scheduleThemeArt() {
  if (artPending || document.hidden || optionalSuspended || currentPreferences().decorationOff || renderedArt === activeTheme.id + ":" + effectiveQuality) return;
  artPending = true;
  afterPaint(() => {
    artPending = false;
    if (document.hidden || currentPreferences().decorationOff) return;
    try {
      const art = byId("atmosphere-art");
      if (art) {
        let markup = activeTheme.art;
        if (effectiveQuality === "economy") markup = (markup.match(/<(?:path|circle|rect)\b[^>]*\/>/) || [""])[0];
        if (effectiveQuality === "maximum") markup += '<g opacity=".2" transform="translate(18 12)">' + activeTheme.art + '</g>';
        art.innerHTML = markup;
        renderedArt = activeTheme.id + ":" + effectiveQuality;
      }
    } catch (_) { /* SVG decorativo nunca bloqueia mensagens. */ }
  });
}
const currentPreferences = () => previewPreferences || preferences;
const qualityNames = {economy:"Econômica", balanced:"Equilibrada", maximum:"Máxima"};
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
let effectiveQuality = "economy";
let automaticQuality = "economy";
let evaluationUsed = false;
let evaluationRunning = false;
let evaluationTimer;
let qualityObserver;
let evaluationStart = 0;
let longTaskCount = 0;
let worstLongTask = 0;
const interactionSamples = [];
const clock = () => window.performance.now();
function qualityLimit() {
  const prefs = currentPreferences();
  if (connection && connection.saveData) return "Economia de dados ativa.";
  if (prefs.highContrast || contrastQuery.matches) return "Alto contraste prioritário.";
  if (prefs.reducedMotion || motionQuery.matches) return "Redução de movimento prioritária.";
  if (prefs.decorationOff) return "Efeitos decorativos desativados.";
  return "";
}
function applyQuality() {
  const prefs = currentPreferences();
  const limit = qualityLimit();
  const level = limit ? "economy" : prefs.quality === "auto" ? automaticQuality : prefs.quality;
  if (effectiveQuality !== level) {
    stopMessageAnimation();
    effectiveQuality = level;
    root.dataset.quality = level;
    renderedArt = null;
  }
  byId("quality-mode").value = prefs.quality;
  const text = "Nível aplicado: " + qualityNames[level] + ". " + (limit || (prefs.quality === "auto"
    ? "Seleção automática conservadora; sem monitoramento contínuo." : "Escolha manual."));
  if (byId("quality-status").textContent !== text) byId("quality-status").textContent = text;
  if (activeTheme) scheduleThemeArt();
  updateWallpaper();
}
function recordLongTasks(entries) {
  for (const entry of entries) {
    longTaskCount = Math.min(20, longTaskCount + 1);
    worstLongTask = Math.max(worstLongTask, entry.duration);
  }
}
function finishQualityEvaluation(allowUpgrade) {
  if (qualityObserver) {
    recordLongTasks(qualityObserver.takeRecords());
    qualityObserver.disconnect();
    qualityObserver = null;
  }
  window.clearTimeout(evaluationTimer);
  evaluationRunning = false;
  if (allowUpgrade && interactionSamples.length >= 2 && worstLongTask < 120 && longTaskCount < 3 && Math.max(...interactionSamples) < 80) {
    automaticQuality = "balanced";
  }
  interactionSamples.length = 0;
  applyQuality();
}
function startQualityEvaluation() {
  if (evaluationUsed || demoTheme || currentPreferences().quality !== "auto" || document.hidden) return;
  evaluationUsed = true;
  if (qualityLimit() || !window.performance || typeof window.performance.now !== "function" ||
      typeof window.requestAnimationFrame !== "function" || typeof window.PerformanceObserver !== "function" ||
      !window.PerformanceObserver.supportedEntryTypes || !window.PerformanceObserver.supportedEntryTypes.includes("longtask")) return;
  try {
    qualityObserver = new window.PerformanceObserver(list => recordLongTasks(list.getEntries()));
    qualityObserver.observe({type:"longtask"});
    evaluationRunning = true;
    evaluationStart = clock();
    evaluationTimer = window.setTimeout(() => finishQualityEvaluation(true), 5000);
  } catch (_) {
    if (qualityObserver) qualityObserver.disconnect();
    qualityObserver = null;
    evaluationRunning = false;
  }
}
function sampleInteraction(start) {
  if (!evaluationRunning || interactionSamples.length >= 3) return;
  // Reserva uma posição antes de agendar; mesmo cliques rápidos geram no máximo 3 amostras.
  const index = interactionSamples.length;
  interactionSamples.push(Infinity);
  afterPaint(() => {
    if (!evaluationRunning) return;
    interactionSamples[index] = clock() - start;
    if (interactionSamples.length === 3 && !interactionSamples.includes(Infinity) && clock() - evaluationStart >= 1200) finishQualityEvaluation(true);
  });
}
byId("quality-mode").addEventListener("change", () => {
  currentPreferences().quality = byId("quality-mode").value;
  if (evaluationRunning) finishQualityEvaluation(false);
  applyQuality();
  savePreferences();
  startQualityEvaluation();
});
function accessibilityQualityChanged() {
  stopMessageAnimation();
  if (evaluationRunning) finishQualityEvaluation(false);
  applyQuality();
}
for (const query of [motionQuery, contrastQuery]) {
  if (query.addEventListener) query.addEventListener("change", accessibilityQualityChanged);
  else if (query.addListener) query.addListener(accessibilityQualityChanged);
}
if (connection && connection.addEventListener) connection.addEventListener("change", accessibilityQualityChanged);
function savePreferences() {
  if (demoTheme) return;
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences)); storageAvailable = true; }
  catch (_) { storageAvailable = false; }
  storageNotice();
}
function chooseRandomTheme() {
  const previousId = activeTheme ? activeTheme.id : randomTheme;
  const available = themes.filter(theme => theme.id !== previousId);
  randomTheme = available[Math.floor(Math.random() * available.length)].id;
}
function resolvedTheme() {
  if (demoTheme) return themeById(demoTheme);
  if (preferences.mode === "manual") return themeById(preferences.manualTheme);
  if (preferences.mode === "random") {
    if (!randomTheme) chooseRandomTheme();
    return themeById(randomTheme);
  }
  return themes[new Date().getMonth()];
}
function updateMonthlyPalette() {
  const theme = resolvedTheme();
  if (!activeTheme || theme.id !== activeTheme.id) {
    const [bg, ink, accent] = theme.palette;
    root.style.setProperty("--bg", bg);
    root.style.setProperty("--ink", ink);
    root.style.setProperty("--accent", accent);
    root.style.setProperty("--muted", ink);
    root.style.setProperty("--light", theme.light);
    root.style.setProperty("--halo", theme.halo + "px");
    root.style.setProperty("--halo-color", theme.light + "28");
    root.dataset.theme = theme.id;
    root.dataset.month = String(themes.indexOf(theme) < 12 ? themes.indexOf(theme) + 1 : 0);
    root.dataset.filled = String(theme.filled || false);
    root.dataset.atmosphere = theme.name;
    activeTheme = theme;
  }
  updateWallpaper();
  for (const button of document.querySelectorAll("[data-featured-theme], [data-month-theme]")) {
    button.setAttribute("aria-pressed", String((button.dataset.featuredTheme || button.dataset.monthTheme) === theme.id));
  }
  byId("featured-theme-status").textContent = (demoTheme ? "Prévia: " : "Atmosfera: ") + (featuredNames[theme.id] || theme.label);
  scheduleThemeArt();
  const label = (demoTheme ? "Prévia: " : "Tema atual: ") + theme.label;
  if (byId("theme-current").textContent !== label) byId("theme-current").textContent = label;
  document.querySelector('meta[name="theme-color"]').setAttribute("content",
    root.classList.contains("high-contrast") ? "#ffffff" : theme.palette[0]);
}
function syncPreferences() {
  const prefs = currentPreferences();
  const toggles = {contrast:["high-contrast",prefs.highContrast], motion:["reduced-motion",prefs.reducedMotion], decoration:["decoration-off",prefs.decorationOff]};
  for (const [id, [className, enabled]] of Object.entries(toggles)) {
    root.classList.toggle(className, enabled);
    byId(id).setAttribute("aria-pressed", String(enabled));
  }
  root.classList.toggle("large-text", prefs.textSize === "large");
  root.classList.toggle("extra-large-text", prefs.textSize === "extra-large");
  byId("size").value = prefs.textSize;
  byId("contrast").textContent = prefs.highContrast ? "Cores originais" : "Alto contraste";
  byId("theme-mode").value = preferences.mode;
  byId("theme-mode").disabled = !!demoTheme;
  byId("theme-choice").value = preferences.manualTheme;
  byId("theme-choice").disabled = !!demoTheme;
  byId("manual-theme-row").hidden = preferences.mode !== "manual";
  byId("random-theme").hidden = preferences.mode !== "random";
  byId("random-theme").disabled = !!demoTheme;
  byId("demo-panel").hidden = !demoTheme;
  byId("demo-toggle").setAttribute("aria-expanded", String(!!demoTheme));
  byId("demo-toggle").textContent = demoTheme ? "Encerrar demonstração temporária" : "Abrir demonstração temporária";
  if (demoTheme) byId("demo-theme").value = demoTheme;
  applyQuality();
  schedulePaletteCheck();
  storageNotice();
}
let themeOptionsReady = false;
function ensureThemeOptions() {
  if (themeOptionsReady) return;
  for (const id of ["theme-choice","demo-theme"]) {
    const fragment = document.createDocumentFragment();
    for (const theme of themes) {
      const option = document.createElement("option");
      option.value = theme.id;
      option.textContent = theme.label;
      fragment.appendChild(option);
    }
    byId(id).appendChild(fragment);
  }
  const gallery = byId("monthly-themes");
  for (const theme of themes.slice(0, 12)) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "month-choice secondary";
    button.dataset.monthTheme = theme.id;
    button.setAttribute("aria-pressed", String(activeTheme && activeTheme.id === theme.id));
    const image = document.createElement("img");
    image.alt = "";
    image.loading = "lazy";
    if (connection && connection.saveData) image.hidden = true;
    else image.src = "assets/wallpapers/" + theme.id + "-small.webp";
    image.width = 160;
    image.height = 100;
    const label = document.createElement("span");
    label.textContent = theme.label;
    button.append(image, label);
    button.addEventListener("click", () => {
      if (demoTheme) closeDemo();
      preferences.mode = "manual";
      preferences.manualTheme = theme.id;
      stopMessageAnimation();
      syncPreferences(); savePreferences();
      announce("Atmosfera selecionada: " + theme.label + ".");
    });
    gallery.appendChild(button);
  }
  themeOptionsReady = true;
}
byId("theme-mode").addEventListener("change", () => {
  if (demoTheme) return;
  preferences.mode = byId("theme-mode").value;
  if (preferences.mode === "random") chooseRandomTheme();
  syncPreferences(); savePreferences();
});
byId("theme-choice").addEventListener("change", () => {
  if (demoTheme) return;
  preferences.manualTheme = byId("theme-choice").value;
  syncPreferences(); savePreferences();
});
byId("random-theme").addEventListener("click", () => {
  if (!demoTheme) { chooseRandomTheme(); updateMonthlyPalette(); }
});
for (const button of document.querySelectorAll("[data-featured-theme]")) {
  button.addEventListener("click", () => {
    preferences.mode = "manual";
    preferences.manualTheme = button.dataset.featuredTheme;
    stopMessageAnimation();
    syncPreferences();
    savePreferences();
    announce("Atmosfera selecionada: " + featuredNames[preferences.manualTheme] + ".");
  });
}
function closeDemo() {
  demoTheme = null;
  previewPreferences = null;
  byId("demo-message").textContent = "";
  stopMessageAnimation();
  syncPreferences();
}
byId("demo-toggle").addEventListener("click", () => {
  if (demoTheme) closeDemo();
  else {
    demoTheme = activeTheme.id;
    previewPreferences = {...preferences};
    syncPreferences();
  }
});
byId("demo-theme").addEventListener("change", () => {
  demoTheme = byId("demo-theme").value;
  stopMessageAnimation();
  syncPreferences();
});
byId("demo-close").addEventListener("click", () => { closeDemo(); byId("demo-toggle").focus(); });
let paletteTimer;
function schedulePaletteCheck() {
  window.clearTimeout(paletteTimer);
  updateMonthlyPalette();
  if (document.hidden || preferences.mode !== "auto" || demoTheme) return;
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  paletteTimer = window.setTimeout(schedulePaletteCheck,
    Math.max(1, Math.min(60000, midnight.getTime() - now.getTime())));
}
window.addEventListener("focus", schedulePaletteCheck);
window.addEventListener("pageshow", () => {
  optionalSuspended = false;
  schedulePaletteCheck();
  if (speechPrepared && !panel.hidden) refreshLocalVoice();
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    window.clearTimeout(paletteTimer);
    suspendOptionalResources();
  }
  else {
    optionalSuspended = false;
    schedulePaletteCheck();
    if (speechPrepared && !panel.hidden) refreshLocalVoice();
  }
});
// A inicialização fica ao final, após os controles e recursos opcionais.
// Embaralhamento integral, sem repetição entre as bordas dos ciclos.
let queue = [];
let previous = null;
function refill() {
  queue = Array.from({length: messages.length}, (_, i) => i);
  for (let i = queue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [queue[i], queue[j]] = [queue[j], queue[i]];
  }
  if (queue.length > 1 && queue[queue.length - 1] === previous) {
    [queue[0], queue[queue.length - 1]] = [queue[queue.length - 1], queue[0]];
  }
}
function announce(text) {
  const inSettings = panel.open;
  // Conteúdo fora de um diálogo modal fica inerte, inclusive para leitores de tela.
  status.textContent = inSettings ? "" : text;
  byId("settings-status").textContent = inSettings ? text : "";
}
function closeResetConfirmation(restoreFocus = true) {
  byId("reset-confirm").hidden = true;
  byId("reset-settings").setAttribute("aria-expanded", "false");
  if (restoreFocus) byId("reset-settings").focus();
}
let settingsScrollPosition = null;
let settingsReturnFocus = access;
function lockSettingsScroll() {
  if (settingsScrollPosition) return;
  settingsScrollPosition = {x: window.scrollX, y: window.scrollY};
  document.body.style.setProperty("--settings-scroll-top", -settingsScrollPosition.y + "px");
  root.classList.add("settings-open");
  document.body.classList.add("settings-open");
}
function unlockSettingsScroll() {
  const previousScroll = settingsScrollPosition;
  settingsScrollPosition = null;
  root.classList.remove("settings-open");
  document.body.classList.remove("settings-open");
  document.body.style.removeProperty("--settings-scroll-top");
  if (previousScroll) window.scrollTo(previousScroll.x, previousScroll.y);
}
function closeSettings() {
  stopSpeech();
  if (demoTheme) closeDemo();
  closeResetConfirmation(false);
  if (panel.open) panel.close();
  panel.hidden = true;
  unlockSettingsScroll();
  byId("settings-status").textContent = "";
  access.setAttribute("aria-expanded", "false");
  for (const button of document.querySelectorAll(".corner-tools [aria-haspopup=dialog]")) button.setAttribute("aria-expanded", "false");
  settingsReturnFocus.focus({preventScroll: true});
}
byId("close-access").addEventListener("click", closeSettings);
byId("size").addEventListener("change", () => {
  const prefs = currentPreferences();
  prefs.textSize = byId("size").value;
  prefs.largeText = prefs.textSize !== "normal";
  stopMessageAnimation();
  syncPreferences(); savePreferences();
});
function openSettings(category, trigger) {
  settingsReturnFocus = trigger;
  selectSettingsCategory(category);
  if (!panel.hidden) { closeSettings(); return; }
  ensureThemeOptions();
  syncPreferences();
  lockSettingsScroll();
  panel.hidden = false;
  try { panel.showModal(); }
  catch (error) {
    panel.hidden = true;
    unlockSettingsScroll();
    throw error;
  }
  byId("access-title").focus();
  prepareSpeech();
  trigger.setAttribute("aria-expanded", String(!panel.hidden));
}
access.addEventListener("click", () => openSettings("accessibility", access));
byId("themes-shortcut")?.addEventListener("click", event => openSettings("appearance", event.currentTarget));
byId("info-shortcut")?.addEventListener("click", event => openSettings("information", event.currentTarget));
function dismissSettingsLayer() {
  if (!byId("reset-confirm").hidden) closeResetConfirmation();
  else if (demoTheme) {
    closeDemo();
    byId("demo-toggle").focus();
  } else closeSettings();
}
panel.addEventListener("cancel", (event) => {
  event.preventDefault();
  dismissSettingsLayer();
});
const settingsCategories = {
  accessibility: [".reading-settings", ".appearance-settings"],
  appearance: [".theme-settings", ".quality-settings"],
  sound: [".sensory-settings"],
  preferences: [".privacy-settings", ".reset-settings"],
  information: [".information-settings"]
};
function selectSettingsCategory(category) {
  if (!Object.hasOwn(settingsCategories, category)) return;
  // Sair da prévia restaura as opções antes de mostrar outra categoria.
  if (category !== "appearance" && demoTheme) closeDemo();
  closeResetConfirmation(false);
  for (const button of panel.querySelectorAll("[data-settings-category]")) {
    button.setAttribute("aria-pressed", String(button.dataset.settingsCategory === category));
  }
  for (const [key, selectors] of Object.entries(settingsCategories)) {
    for (const selector of selectors) {
      const section = panel.querySelector(selector);
      if (section) section.hidden = key !== category;
    }
  }
  for (const note of panel.querySelectorAll("[data-settings-note]")) {
    note.hidden = note.dataset.settingsNote !== category;
  }
  byId("settings-status").textContent = "";
  panel.querySelector(".settings-content").scrollTop = 0;
}
for (const button of panel.querySelectorAll("[data-settings-category]")) {
  button.addEventListener("click", () => selectSettingsCategory(button.dataset.settingsCategory));
}
selectSettingsCategory("accessibility");
const runningAnimations = new Set();
const responseOwners = new Map();
function stopMessageAnimation() {
  for (const animation of runningAnimations) animation.cancel();
  runningAnimations.clear();
  responseOwners.clear();
  for (const button of [receive, byId("demo-play")]) button.classList.remove("theme-response");
}
for (const [id, key] of Object.entries({contrast:"highContrast",motion:"reducedMotion",decoration:"decorationOff"})) {
  byId(id).addEventListener("click", () => {
    const prefs = currentPreferences();
    prefs[key] = !prefs[key];
    stopMessageAnimation();
    syncPreferences();
    savePreferences();
  });
}
function animateInteraction(target, button) {
  stopMessageAnimation();
  if (effectiveQuality === "economy" || document.hidden || motionQuery.matches || currentPreferences().reducedMotion || !target.animate) return;
  try {
    const theme = activeTheme;
    const animation = target.animate([{opacity:.85},{opacity:1}], {duration:theme.duration,easing:"ease-out"});
    runningAnimations.add(animation);
    animation.onfinish = () => runningAnimations.delete(animation);
    if (!currentPreferences().decorationOff && !currentPreferences().highContrast && !contrastQuery.matches && button.animate) {
      if (effectiveQuality === "maximum") button.classList.add("theme-response");
      const response = button.animate([
        {transform:"translateY(0)"},
        {transform:"translateY(" + theme.lift + "px)"},
        {transform:"translateY(0)"}
      ], {duration:theme.duration,easing:"ease-out"});
      runningAnimations.add(response);
      responseOwners.set(button, response);
      const clearResponse = () => {
        runningAnimations.delete(response);
        if (responseOwners.get(button) === response) {
          responseOwners.delete(button);
          button.classList.remove("theme-response");
        }
      };
      response.onfinish = clearResponse;
      response.oncancel = clearResponse;
    }
  } catch (_) { /* Conteúdo permanece visível sem Web Animations. */ }
}


// Leitura sob comando: somente vozes identificadas pelo navegador como locais.
// Não usa reconhecimento de fala, microfone, detecção de leitor de tela ou serviço remoto.
let speechEngine;
let localVoice;
let speechUtterance;
let speechGeneration = 0;
let lastSpokenText = "";
let speechPrepared = false;
let speechEventsAdded = false;
function syncSpeechControls() {
  const canRead = !!localVoice && !!output.textContent && !document.hidden && !optionalSuspended;
  byId("read-message").disabled = !canRead;
  byId("stop-reading").disabled = !speechUtterance;
  byId("repeat-reading").disabled = !canRead || !lastSpokenText || lastSpokenText !== output.textContent;
}
function refreshLocalVoice() {
  if (!speechEngine || document.hidden || optionalSuspended) return;
  try {
    const voices = speechEngine.getVoices().filter(voice => voice.localService === true && /^pt(?:-|$)/i.test(voice.lang));
    localVoice = voices.find(voice => /^pt-BR$/i.test(voice.lang)) || voices[0] || null;
    byId("speech-availability").textContent = localVoice
      ? "Voz local disponível: " + localVoice.lang + ". A leitura só usa vozes que o navegador identifica como locais."
      : "Não há voz local em português disponível. As mensagens continuam em texto e podem ser lidas pelo seu leitor de tela.";
  } catch (_) {
    localVoice = null;
    byId("speech-availability").textContent = "Não foi possível acessar uma voz local. As mensagens continuam disponíveis em texto.";
  }
  syncSpeechControls();
}
function prepareSpeech() {
  speechPrepared = true;
  try {
    speechEngine = window.speechSynthesis;
    if (!speechEngine || typeof speechEngine.getVoices !== "function" || typeof speechEngine.speak !== "function" ||
        typeof speechEngine.cancel !== "function" || typeof window.SpeechSynthesisUtterance !== "function") throw new Error("speech unavailable");
    if (!speechEventsAdded && speechEngine.addEventListener) {
      speechEngine.addEventListener("voiceschanged", refreshLocalVoice);
      speechEventsAdded = true;
    }
    refreshLocalVoice();
  } catch (_) {
    localVoice = null;
    byId("speech-availability").textContent = "Leitura em voz alta indisponível neste navegador. Todas as mensagens continuam em texto.";
    syncSpeechControls();
  }
}
function stopSpeech() {
  speechGeneration++;
  const owned = speechUtterance;
  speechUtterance = null;
  if (owned) {
    owned.onstart = owned.onend = owned.onerror = null;
    try { speechEngine.cancel(); } catch (_) {}
    byId("speech-status").textContent = "Leitura interrompida.";
  }
  syncSpeechControls();
}
function readCurrentMessage() {
  if (!speechPrepared) prepareSpeech();
  if (!localVoice || !output.textContent || document.hidden || optionalSuspended) return;
  stopSpeech();
  // Silencia apenas o efeito em andamento, preservando a opção de som do visitante.
  for (const resource of [...audioNodes]) resource.dispose();
  suspendIdleAudio();
  const text = output.textContent;
  const generation = ++speechGeneration;
  try {
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.voice = localVoice;
    utterance.lang = localVoice.lang;
    utterance.rate = 1;
    utterance.pitch = 1;
    speechUtterance = utterance;
    byId("speech-status").textContent = "Preparando leitura.";
    utterance.onstart = () => {
      if (generation !== speechGeneration) return;
      lastSpokenText = text;
      byId("speech-status").textContent = "Lendo mensagem.";
      syncSpeechControls();
    };
    const finish = (error) => {
      if (generation !== speechGeneration) return;
      speechUtterance = null;
      utterance.onstart = utterance.onend = utterance.onerror = null;
      const interrupted = error && ["canceled","interrupted"].includes(error.error);
      byId("speech-status").textContent = !error ? "Leitura concluída."
        : interrupted ? "Leitura interrompida." : "Falha na leitura.";
      if (error && !interrupted) announce("Não foi possível concluir a leitura. A mensagem continua disponível em texto.");
      const restoreFocus = document.activeElement === byId("stop-reading");
      syncSpeechControls();
      if (restoreFocus) (byId("read-message").disabled ? access : byId("read-message")).focus();
    };
    utterance.onend = () => finish();
    utterance.onerror = finish;
    syncSpeechControls();
    speechEngine.speak(utterance);
  } catch (_) {
    stopSpeech();
    byId("speech-status").textContent = "Falha na leitura.";
    announce("A leitura em voz alta não está disponível agora. A mensagem continua em texto.");
  }
}
byId("read-message").addEventListener("click", readCurrentMessage);
byId("repeat-reading").addEventListener("click", readCurrentMessage);
byId("stop-reading").addEventListener("click", () => {
  stopSpeech();
  (byId("read-message").disabled ? access : byId("read-message")).focus();
});
// Síntese local: nenhuma gravação, recurso remoto ou som ao carregar/trocar o mês.
const AudioEngine = window.AudioContext || window.webkitAudioContext;
let audioContext;
let soundEnabled = false;
function syncSoundControls() {
  byId("sound").setAttribute("aria-pressed", String(soundEnabled));
  byId("sound").textContent = soundEnabled ? "Som: ligado" : "Som: desligado";
  const quick = byId("quick-sound");
  quick.setAttribute("aria-pressed", String(soundEnabled));
  quick.setAttribute("aria-label", soundEnabled ? "Desativar som breve das mensagens" : "Ativar som breve das mensagens");
  quick.querySelector("span").textContent = soundEnabled ? "Som ligado" : "Som desligado";
}
let soundRequest = 0;
let lastSoundAt = -Infinity;
const audioNodes = new Set();
let idlePreparation;
let noiseBuffer;
let resumePending;
function suspendIdleAudio() {
  if (soundEnabled && audioContext && audioContext.state === "running" && audioNodes.size === 0 && audioContext.suspend) {
    try { const pending = audioContext.suspend(); if (pending && pending.catch) pending.catch(() => {}); } catch (_) {}
  }
}
function resumeAudioOnInteraction() {
  if (!soundEnabled || !audioContext || audioContext.state !== "suspended" || resumePending) return;
  const context = audioContext;
  try {
    const pending = Promise.resolve(context.resume()).catch(() => {}).finally(() => {
      if (resumePending && resumePending.context === context) resumePending = null;
    });
    resumePending = {context, promise:pending};
  } catch (_) {}
}
function releaseAudio() {
  soundEnabled = false;
  resumePending = null;
  soundRequest++;
  if (idlePreparation !== undefined && window.cancelIdleCallback) window.cancelIdleCallback(idlePreparation);
  idlePreparation = undefined;
  for (const node of [...audioNodes]) node.dispose();
  const context = audioContext;
  audioContext = null;
  noiseBuffer = null;
  lastSoundAt = -Infinity;
  soundEnabled = false;
  syncSoundControls();
  if (context && context.state !== "closed") {
    try { const closing = context.close(); if (closing && closing.catch) closing.catch(() => {}); } catch (_) {}
  }
}
function suspendOptionalResources() {
  optionalSuspended = true;
  for (const cancel of [...optionalJobs]) cancel();
  artPending = false;
  sensoryRequest++;
  stopMessageAnimation();
  if (evaluationRunning) finishQualityEvaluation(false);
  releaseAudio();
  stopSpeech();
  localVoice = null;
  vibrationEnabled = false;
  byId("vibration").setAttribute("aria-pressed", "false");
  byId("vibration").textContent = "Vibração: desligada";
  if (typeof navigator.vibrate === "function") { try { navigator.vibrate(0); } catch (_) {} }
  updateWallpaper();
}
window.addEventListener("pagehide", () => {
  window.clearTimeout(paletteTimer);
  suspendOptionalResources();
});
function prepareNoiseBuffer() {
  // Um único buffer mono, no máximo 24 kHz (~67 KB em memória), só após opt-in.
  if (!soundEnabled || !audioContext || noiseBuffer) return;
  try {
    const sampleRate = Math.min(24000, audioContext.sampleRate);
    const buffer = audioContext.createBuffer(1, Math.ceil(sampleRate * .7), sampleRate);
    const samples = buffer.getChannelData(0);
    for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
    noiseBuffer = buffer;
    suspendIdleAudio();
  } catch (_) { /* A mensagem funciona sem buffer de som. */ }
}
function scheduleSoundPreparation() {
  if (typeof window.requestIdleCallback === "function") {
    idlePreparation = window.requestIdleCallback(() => { idlePreparation = undefined; prepareNoiseBuffer(); }, {timeout:1000});
  } else afterPaint(prepareNoiseBuffer);
}
byId("sound").disabled = !AudioEngine;
byId("quick-sound").disabled = !AudioEngine;
async function toggleSound() {
  const request = ++soundRequest;
  soundEnabled = !soundEnabled;
  syncSoundControls();
  if (!soundEnabled) { releaseAudio(); return; }

  try {
    if (!audioContext || audioContext.state === "closed") {
      audioContext = new AudioEngine();
      noiseBuffer = null;
    }
    await audioContext.resume();
    if (request !== soundRequest) return;
    if (audioContext.state !== "running") throw new Error("audio unavailable");
    scheduleSoundPreparation();
    announce("Som ativado. Um som breve acompanhará as próximas mensagens.");
  } catch (_) {
    if (request !== soundRequest) return;
    releaseAudio();
    announce("O som não está disponível neste navegador. As mensagens continuam funcionando.");
  }
}
byId("sound").addEventListener("click", toggleSound);
byId("quick-sound").addEventListener("click", toggleSound);
function playMonthlySound() {
  if (!soundEnabled || !audioContext || audioContext.state !== "running" || document.hidden) return;
  if (speechUtterance) { suspendIdleAudio(); return; }
  const now = audioContext.currentTime;
  // O relógio do áudio para durante suspend(); o limite entre cliques usa tempo real.
  const feedbackTime = window.performance && typeof window.performance.now === "function"
    ? window.performance.now() / 1000 : Date.now() / 1000;
  if (feedbackTime - lastSoundAt < .8) { suspendIdleAudio(); return; }
  lastSoundAt = feedbackTime;
  let gain, source, filter, resource;
  try {
    const profile = activeTheme;
    if (profile.sound !== "toque" && profile.sound !== "cristal" && !noiseBuffer) { suspendIdleAudio(); return; }
    gain = audioContext.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(.025, now + .1);
    gain.gain.linearRampToValueAtTime(0, now + .65);
    gain.connect(audioContext.destination);

    if (profile.sound === "toque" || profile.sound === "cristal") {
      source = audioContext.createOscillator();
      source.type = "sine";
      source.frequency.setValueAtTime(profile.tone, now);
      source.frequency.exponentialRampToValueAtTime(profile.tone * (profile.interval || (profile.sound === "cristal" ? 2 : 1.01)), now + .6);
      source.connect(gain);
    } else {
      source = audioContext.createBufferSource();
      source.buffer = noiseBuffer;
      filter = audioContext.createBiquadFilter();
      filter.type = "bandpass";
      filter.Q.value = profile.sound === "agua" ? 2 : .4;
      filter.frequency.setValueAtTime(profile.frequency, now);
      filter.frequency.linearRampToValueAtTime(profile.frequency * (profile.sweep || (profile.sound === "agua" ? 1.4 : .8)), now + .6);
      source.connect(filter);
      filter.connect(gain);
    }
    resource = {dispose() {
      if (!audioNodes.delete(resource)) return;
      source.onended = null;
      try { source.stop(); } catch (_) {}
      source.disconnect();
      if (filter) filter.disconnect();
      gain.disconnect();
      suspendIdleAudio();
    }};
    audioNodes.add(resource);
    source.onended = resource.dispose;
    source.start(now);
    source.stop(now + .7);
  } catch (_) {
    if (resource) resource.dispose();
    else {
      if (source) { try { source.stop(); } catch (_) {} source.disconnect(); }
      if (filter) filter.disconnect();
      if (gain) gain.disconnect();
    }
  }
}
let vibrationEnabled = false;
byId("vibration").hidden = typeof navigator.vibrate !== "function";
byId("vibration-availability").textContent = typeof navigator.vibrate === "function"
  ? "A vibração é opcional e depende também das configurações do aparelho."
  : "Este navegador não oferece vibração para o site. Som e mensagens continuam disponíveis.";
byId("vibration").addEventListener("click", () => {
  vibrationEnabled = !vibrationEnabled;
  byId("vibration").setAttribute("aria-pressed", String(vibrationEnabled));
  byId("vibration").textContent = vibrationEnabled ? "Vibração: ligada" : "Vibração: desligada";
  if (!vibrationEnabled) { try { navigator.vibrate(0); } catch (_) {} }
});
let sensoryRequest = 0;
let cancelSensoryJob;
function scheduleSensoryFeedback() {
  if (cancelSensoryJob) cancelSensoryJob();
  cancelSensoryJob = null;
  if (!soundEnabled && !vibrationEnabled) return;
  const request = ++sensoryRequest;
  resumeAudioOnInteraction();
  cancelSensoryJob = afterPaint(async () => {
    cancelSensoryJob = null;
    if (request !== sensoryRequest || document.hidden) return;
    if (vibrationEnabled) { try { navigator.vibrate(20); } catch (_) {} }
    if (resumePending) await resumePending.promise;
    if (request === sensoryRequest && !document.hidden) playMonthlySound();
  });
}
receive.addEventListener("click", () => {
  stopSpeech();
  lastSpokenText = "";
  syncSpeechControls();
  if (demoTheme) { byId("demo-play").click(); return; }
  const interactionStart = evaluationRunning ? clock() : 0;
  updateMonthlyPalette();
  if (!queue.length) refill();
  const index = queue.pop();
  previous = index;
  stopMessageAnimation();
  output.textContent = messages[index];
  byId("speech-status").textContent = "Leitura desligada.";
  syncSpeechControls();
  receive.textContent = "Receber outra mensagem";
  copy.disabled = false;
  share.disabled = false;
  status.textContent = "";
  animateInteraction(output, receive);
  sampleInteraction(interactionStart);
  scheduleSensoryFeedback();

});

function configuredPublicURL() {
  if (!PUBLIC_URL) return "";
  try {
    const url = new URL(PUBLIC_URL);
    if (url.protocol !== "https:" || url.username || url.password || !url.hostname.includes(".")) return "";
    if (/^(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(url.hostname) || /\.(local|localhost|test|invalid|example)$/.test(url.hostname)) return "";
    return url.href;
  } catch (_) { return ""; }
}
let manualReturnFocus;
function showManualCopy(text, source) {
  manualReturnFocus = source;
  byId("manual-copy").hidden = false;
  byId("copy-text").value = text;
  byId("copy-text").focus();
  byId("copy-text").select();
  announce("A cópia automática não está disponível. O texto está selecionado para cópia manual.");
}
byId("close-copy").addEventListener("click", () => {
  byId("manual-copy").hidden = true;
  if (manualReturnFocus) manualReturnFocus.focus();
});
async function copyText(text, source, success) {
  try {
    if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error("clipboard unavailable");
    await navigator.clipboard.writeText(text);
    announce(success);
  } catch (_) { showManualCopy(text, source); }
}
copy.addEventListener("click", () => {
  if (output.textContent) copyText(output.textContent, copy, "Mensagem copiada.");
});
let sharePending = false;
share.addEventListener("click", async () => {
  if (!output.textContent || sharePending) return;
  const publicURL = configuredPublicURL();
  // Manter o link no próprio texto evita perdê-lo em destinos que ignoram url.
  const payload = {text: output.textContent + (publicURL ? "\n\n" + publicURL : "")};
  if (typeof navigator.share === "function") {
    sharePending = true;
    share.disabled = true;
    try {
      await navigator.share(payload);
      announce("Mensagem compartilhada.");
      return;
    } catch (error) {
      const reason = error && error.name;
      if (reason === "AbortError") { announce("Compartilhamento cancelado ou sem destino disponível. Você pode usar Copiar."); return; }
      const explanation = reason === "NotAllowedError"
        ? "O navegador bloqueou o compartilhamento neste contexto."
        : reason === "InvalidStateError"
          ? "Já existe um compartilhamento em andamento ou a página não está ativa."
          : reason === "TypeError"
            ? "O navegador não aceitou os dados para compartilhar."
            : "Não foi possível abrir ou concluir o compartilhamento do sistema.";
      announce(explanation + " Use Copiar para enviar a mensagem pelo aplicativo que preferir.");
      return;
    } finally {
      sharePending = false;
      share.disabled = !output.textContent;
    }
  }
  await copyText(payload.text, share,
    "Este navegador não oferece compartilhamento nativo. Mensagem copiada; cole no aplicativo que preferir.");
});
// Atalhos direcionais complementam os controles nativos; não prendem o foco.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (panel.open) {
      // Evita que o mesmo Escape feche a confirmação e também o diálogo nativo.
      event.preventDefault();
      dismissSettingsLayer();
    } else if (!byId("manual-copy").hidden && byId("manual-copy").contains(document.activeElement)) {
      byId("close-copy").click();
    }
    return;
  }
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
  if (event.target.matches("select, textarea, input")) return;
  const controls = Array.from(document.querySelectorAll("button, select"))
    .filter(control => !control.disabled && control.getClientRects().length > 0 && (!panel.open || panel.contains(control)));
  const index = controls.indexOf(document.activeElement);
  if (index === -1) return;
  const next = index + (event.key === "ArrowDown" ? 1 : -1);
  if (next < 0 || next >= controls.length) return;
  event.preventDefault();
  controls[next].focus();
});
byId("demo-play").addEventListener("click", () => {
  // Não chama refill(), não consome a fila nem altera a mensagem principal.
  byId("demo-message").textContent = messages[0];
  animateInteraction(byId("demo-message"), byId("demo-play"));
  scheduleSensoryFeedback();
});
byId("reset-settings").addEventListener("click", () => {
  byId("reset-confirm").hidden = false;
  byId("reset-settings").setAttribute("aria-expanded", "true");
  byId("cancel-reset").focus();
});
byId("cancel-reset").addEventListener("click", () => closeResetConfirmation());
byId("confirm-reset").addEventListener("click", () => {
  closeResetConfirmation();
  demoTheme = null;
  previewPreferences = null;
  randomTheme = null;
  if (evaluationRunning) finishQualityEvaluation(false);
  automaticQuality = "economy";
  preferences = defaults();
  byId("demo-message").textContent = "";
  stopMessageAnimation();
  releaseAudio();
  stopSpeech();
  lastSpokenText = "";
  byId("speech-status").textContent = "Leitura desligada.";
  localVoice = null;
  vibrationEnabled = false;
  byId("vibration").setAttribute("aria-pressed", "false");
  byId("vibration").textContent = "Vibração: desligada";
  if (typeof navigator.vibrate === "function") { try { navigator.vibrate(0); } catch (_) {} }
  try { window.localStorage.removeItem(STORAGE_KEY); storageAvailable = true; }
  catch (_) { storageAvailable = false; }
  syncPreferences();
  startQualityEvaluation();
  if (speechPrepared && !panel.hidden) refreshLocalVoice();
  announce("Configurações padrão do Sincronia restauradas. As mensagens e os dados de outros sites foram preservados.");
});
syncPreferences();
startQualityEvaluation();
}());
