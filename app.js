// =========================================================================
// 1. 八大關卡資料庫（依課文一天的時間順序：起床 → 睡前 → 超人的愛）
// =========================================================================
const STATION_COUNT = 8;

const STATIONS_DATA = [
  {
    badge: "第一關", title: "清晨的叫醒鬧鐘", shortTitle: "叫我起床",
    icon: "⏰", color: "amber", clueEmoji: "🌅",
    clueText: "【AR 互動回饋：鬧鐘響了！】一大早，爸爸和媽媽會叫我起床……",
    poster: ["一大早・叫我起床", "爸爸媽媽早安！", "#fef3c7", "#d97706"],
    questions: [
      {
        type: "課文是非題",
        prompt: "一大早，是爸爸和媽媽叫「我」起床。",
        options: [{ label: "○ 正確", value: "true" }, { label: "✕ 錯誤", value: "false" }],
        correctValue: "true",
        explanation: "課文第一句就提到，一大早爸爸和媽媽會叫「我」起床，開啟忙碌的一天。"
      },
      {
        type: "360AR 情境實踐題",
        prompt: "【情境】早上爸爸媽媽輕聲叫你起床，你怎麼做最有禮貌、最體貼？",
        options: [
          { label: "(A) 蒙住頭繼續睡，假裝沒聽到", value: "A" },
          { label: "(B) 笑著說「爸爸媽媽早安」，並自己起床整理好", value: "B" },
          { label: "(C) 生氣大叫，怪他們吵醒自己", value: "C" }
        ],
        correctValue: "B",
        explanation: "爸爸媽媽早上很忙，我們有禮貌地問早並自己整理好，就是體貼父母的表現。"
      }
    ]
  },
  {
    badge: "第二關", title: "餐桌上的愛心早餐", shortTitle: "愛心早餐",
    icon: "🍳", color: "orange", clueEmoji: "🥪",
    clueText: "【AR 互動回饋：愛心早餐出現！】爸爸和媽媽會替我準備早餐……",
    poster: ["愛心早餐", "爸媽為我準備好了", "#ffedd5", "#ea580c"],
    questions: [
      {
        type: "課文是非題",
        prompt: "爸爸和媽媽會替「我」準備早餐。",
        options: [{ label: "○ 正確", value: "true" }, { label: "✕ 錯誤", value: "false" }],
        correctValue: "true",
        explanation: "課文提到爸爸和媽媽叫我起床後，會替我準備早餐。"
      },
      {
        type: "品德核心選擇題",
        prompt: "課文《我的超人爸爸媽媽》主要是想教導我們哪一項品德核心價值？",
        options: [
          { label: "(A) 誠實守信", value: "A" },
          { label: "(B) 禮 — 孝悌", value: "B" },
          { label: "(C) 公平正義", value: "C" },
          { label: "(D) 勇敢冒險", value: "D" }
        ],
        correctValue: "B",
        explanation: "本單元屬於品德教育「禮」之下的「孝悌」篇，引導孩子體會父母的辛勞並心存感恩。"
      }
    ]
  },
  {
    badge: "第三關", title: "校門口的上學接送", shortTitle: "送我上學",
    icon: "🚌", color: "sky", clueEmoji: "🎒",
    clueText: "【AR 互動回饋：校車出現！】吃完早餐後，爸爸和媽媽接著送我上學……",
    poster: ["送我上學", "謝謝爸爸媽媽", "#e0f2fe", "#0284c7"],
    questions: [
      {
        type: "課文是非題",
        prompt: "準備好早餐後，爸爸和媽媽會接著送「我」上學。",
        options: [{ label: "○ 正確", value: "true" }, { label: "✕ 錯誤", value: "false" }],
        correctValue: "true",
        explanation: "課文說爸爸媽媽替我準備早餐後，「接著送我上學」。"
      },
      {
        type: "360AR 情境實踐題",
        prompt: "【情境】爸爸媽媽把你送到校門口，你下車前可以怎麼做？",
        options: [
          { label: "(A) 頭也不回直接跑進學校", value: "A" },
          { label: "(B) 對爸爸媽媽說「謝謝，我會認真上課，再見！」", value: "B" },
          { label: "(C) 抱怨他們太早出門", value: "C" }
        ],
        correctValue: "B",
        explanation: "說一聲謝謝與再見，是對父母接送辛勞最簡單的回報。"
      }
    ]
  },
  {
    badge: "第四關", title: "趕去公司上班", shortTitle: "趕去上班",
    icon: "💼", color: "indigo", clueEmoji: "🏢",
    clueText: "【AR 互動回饋：公事包出現！】送我上學之後，爸爸和媽媽還要趕到公司上班……",
    poster: ["趕到公司上班", "爸媽辛苦了", "#e0e7ff", "#4f46e5"],
    questions: [
      {
        type: "課文是非題",
        prompt: "送「我」上學後，爸爸和媽媽還要趕到公司上班。",
        options: [{ label: "○ 正確", value: "true" }, { label: "✕ 錯誤", value: "false" }],
        correctValue: "true",
        explanation: "課文寫到爸爸媽媽送我上學後，還要趕到公司上班，所以一天非常忙碌。"
      },
      {
        type: "品德核心選擇題",
        prompt: "看到爸爸媽媽早上又要照顧我、又要趕去上班，我們心裡應該怎麼想？",
        options: [
          { label: "(A) 這是應該的，不需要說謝謝", value: "A" },
          { label: "(B) 他們很辛苦，我要心存感恩、體貼他們", value: "B" },
          { label: "(C) 與我無關", value: "C" }
        ],
        correctValue: "B",
        explanation: "孝悌的第一步，就是看見並感謝父母的辛勞。"
      }
    ]
  },
  {
    badge: "第五關", title: "安親班的輪流接送", shortTitle: "安親班接送",
    icon: "🕰️", color: "emerald", clueEmoji: "🧸",
    clueText: "【AR 互動回饋：時鐘敲響！】下班後，爸爸和媽媽會輪流到安親班來接我。",
    poster: ["輪流來接我", "爸爸、媽媽一起分擔", "#d1fae5", "#059669"],
    questions: [
      {
        type: "課文是非題",
        prompt: "下班後，只有媽媽會去安親班接「我」回家。",
        options: [{ label: "○ 正確", value: "true" }, { label: "✕ 錯誤", value: "false" }],
        correctValue: "false",
        explanation: "課文提到下班後，爸爸和媽媽會「輪流」到安親班接孩子，夫妻一起分擔照顧責任。"
      },
      {
        type: "360AR 情境實踐題",
        prompt: "【情境】爸爸（或媽媽）下班後趕到安親班接你，你看到他時應該？",
        options: [
          { label: "(A) 假裝沒看到，繼續玩玩具", value: "A" },
          { label: "(B) 開心打招呼，說「謝謝您來接我，辛苦了」", value: "B" },
          { label: "(C) 責怪他怎麼這麼晚才來", value: "C" }
        ],
        correctValue: "B",
        explanation: "爸媽下班後還要趕來接我，一句關心的話，能讓他們的疲累一掃而空。"
      }
    ]
  },
  {
    badge: "第六關", title: "廚房的晚餐與作業", shortTitle: "晚餐作業",
    icon: "🍲", color: "teal", clueEmoji: "📒",
    clueText: "【AR 互動回饋：晚餐香味飄來！】回家後，爸爸媽媽不但要準備晚餐，還要檢查我的作業和幫我洗澡。",
    poster: ["準備晚餐・檢查作業", "回家後的忙碌", "#ccfbf1", "#0d9488"],
    questions: [
      {
        type: "品德核心選擇題",
        prompt: "根據課文內容，下班回家後，爸爸媽媽不會做下列哪一件事？",
        options: [
          { label: "(A) 準備晚餐", value: "A" },
          { label: "(B) 檢查作業和幫忙洗澡", value: "B" },
          { label: "(C) 自己玩手機遊戲不理人", value: "C" },
          { label: "(D) 睡前念故事書", value: "D" }
        ],
        correctValue: "C",
        explanation: "爸爸媽媽下班後將時間都用來照顧與陪伴孩子，包含煮晚餐、看功課、洗澡與說故事。"
      },
      {
        type: "360AR 情境實踐題",
        prompt: "【情境】超人爸爸媽媽剛接你回家，還要忙著準備晚餐。這時你怎麼做最能展現「孝悌」的精神？",
        options: [
          { label: "(A) 吵著要立刻看電視，催促大人快點煮飯", value: "A" },
          { label: "(B) 主動把書包放好、自己先拿出作業，並說一聲「您們辛苦了！」", value: "B" },
          { label: "(C) 把玩具丟得滿地都是，等大人來收拾", value: "C" }
        ],
        correctValue: "B",
        explanation: "體貼父母的辛勞，從做好自己分內的事（收書包、寫作業）與主動表達感謝開始。"
      }
    ]
  },
  {
    badge: "第七關", title: "浴室與床邊故事", shortTitle: "洗澡故事",
    icon: "📚", color: "violet", clueEmoji: "🌙",
    clueText: "【AR 互動回饋：小夜燈亮起！】洗好澡後，睡覺前，爸爸媽媽還會念故事給我聽，讓我安心進入夢鄉。",
    poster: ["睡前故事時間", "安心進入夢鄉", "#ede9fe", "#7c3aed"],
    questions: [
      {
        type: "課文是非題",
        prompt: "睡覺前，爸爸媽媽會念故事給「我」聽，讓「我」安心進入夢鄉。",
        options: [{ label: "○ 正確", value: "true" }, { label: "✕ 錯誤", value: "false" }],
        correctValue: "true",
        explanation: "父母即使工作與家務繁忙，睡前仍用心陪伴孩子閱讀、給予滿滿的安全感。"
      },
      {
        type: "品德核心選擇題",
        prompt: "為什麼故事中的「我」覺得爸爸媽媽像「超人」一樣？",
        options: [
          { label: "(A) 因為他們會穿著紅色披風在天上飛", value: "A" },
          { label: "(B) 因為他們每天忙著上班與照顧家人，像超人一樣飛來飛去卻不喊累", value: "B" },
          { label: "(C) 因為他們力氣很大可以舉起汽車", value: "C" },
          { label: "(D) 因為他們會變魔術", value: "D" }
        ],
        correctValue: "B",
        explanation: "孩子觀察到父母兼顧工作與家庭、無微不至地付出，因此把父母比喻為無所不能的超人。"
      }
    ]
  },
  {
    badge: "第八關", title: "衣帽架上的超人披風", shortTitle: "超人披風",
    icon: "🦸", color: "rose", clueEmoji: "❤️",
    clueText: "【AR 互動回饋：紅色超人披風飄揚！】爸爸媽媽笑著說：「因為我們愛你啊！為你付出的一切，我們都不會累。」家人健康陪伴真快樂！",
    poster: ["家人健康陪伴真快樂", "我愛我的超人爸爸、媽媽！", "#ffe4e6", "#e11d48"],
    questions: [
      {
        type: "品德核心選擇題",
        prompt: "當孩子問爸爸媽媽「每天這麼忙不會累嗎？」，爸爸媽媽為什麼回答「不會累」？",
        options: [
          { label: "(A) 因為他們都不需要睡覺", value: "A" },
          { label: "(B) 因為他們愛孩子，為孩子付出的一切都不會覺得累", value: "B" },
          { label: "(C) 因為他們在公司都沒有做事", value: "C" },
          { label: "(D) 因為有人幫他們做完所有家事", value: "D" }
        ],
        correctValue: "B",
        explanation: "父母對子女無私的愛，讓他們把辛苦化為甜蜜的付出。"
      },
      {
        type: "品德核心選擇題",
        prompt: "課文最後提醒我們，什麼樣的生活最讓人感到幸福？",
        options: [
          { label: "(A) 每天都有買不完的新玩具", value: "A" },
          { label: "(B) 家人健康陪伴真快樂", value: "B" },
          { label: "(C) 不用寫作業也不用上學", value: "C" },
          { label: "(D) 每天都可以吃大餐", value: "D" }
        ],
        correctValue: "B",
        explanation: "課文結尾金句為「家人健康陪伴真快樂」，強調家人彼此健康、互相陪伴才是最珍貴的快樂。"
      },
      {
        type: "360AR 情境實踐題",
        prompt: "【終極任務】睡前爸爸媽媽念完故事書後，你還可以對他們做什麼暖心舉動？",
        options: [
          { label: "(A) 給爸爸媽媽一個大大的擁抱，並說「我愛我的超人爸爸、媽媽！」", value: "A" },
          { label: "(B) 抱怨故事太短，生氣不肯睡覺", value: "B" },
          { label: "(C) 偷偷爬起來繼續玩玩具", value: "C" }
        ],
        correctValue: "A",
        explanation: "像課文中的主角一樣，勇敢向家人表達愛與感謝，能讓家庭關係更加溫暖快樂。"
      }
    ]
  }
];

// 為每一關計算 3D 位置（環繞房間，每關相隔 45°）
const STATION_RADIUS = 4.2;
STATIONS_DATA.forEach((s, i) => {
  s.id = i;
  s.targetYaw = -i * (Math.PI * 2 / STATION_COUNT);
  s.position = {
    x: -Math.sin(s.targetYaw) * STATION_RADIUS,
    y: 1.6,
    z: -Math.cos(s.targetYaw) * STATION_RADIUS
  };
});

// 各色系樣式對照表
const COLOR_STYLES = {
  amber:   { hotspot: "from-amber-400 to-orange-500 border-amber-200",   header: "from-amber-500 to-orange-500", nav: "bg-amber-50 hover:bg-amber-100 border-amber-200" },
  orange:  { hotspot: "from-orange-400 to-red-500 border-orange-200",    header: "from-orange-500 to-red-500",   nav: "bg-orange-50 hover:bg-orange-100 border-orange-200" },
  sky:     { hotspot: "from-sky-400 to-blue-600 border-sky-200",         header: "from-sky-500 to-blue-600",     nav: "bg-sky-50 hover:bg-sky-100 border-sky-200" },
  indigo:  { hotspot: "from-indigo-500 to-purple-600 border-indigo-200", header: "from-indigo-500 to-purple-600", nav: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200" },
  emerald: { hotspot: "from-emerald-400 to-green-600 border-emerald-200", header: "from-emerald-500 to-green-600", nav: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200" },
  teal:    { hotspot: "from-teal-400 to-cyan-600 border-teal-200",       header: "from-teal-500 to-cyan-600",    nav: "bg-teal-50 hover:bg-teal-100 border-teal-200" },
  violet:  { hotspot: "from-violet-500 to-fuchsia-600 border-violet-200", header: "from-violet-500 to-fuchsia-600", nav: "bg-violet-50 hover:bg-violet-100 border-violet-200" },
  rose:    { hotspot: "from-rose-500 to-red-600 border-rose-200",        header: "from-rose-500 to-red-600",     nav: "bg-rose-50 hover:bg-rose-100 border-rose-200" }
};

// =========================================================================
// 2. 應用程式狀態
// =========================================================================
const state = {
  studentName: "",
  studentSeat: "",
  completedStations: new Array(STATION_COUNT).fill(false),
  currentStationId: null,
  currentQuestionIndex: 0,
  questionAnswered: false,
  isArCameraActive: false,
  yaw: 0, pitch: 0,
  targetYaw: 0, targetPitch: 0,
  isAutoRotatingToTarget: false,
  isDragging: false,
  lastPointerX: 0, lastPointerY: 0,
  dragDistance: 0
};

// =========================================================================
// 3. 音效與語音
// =========================================================================
let synth = null;
function initAudio() {
  if (!synth && typeof Tone !== "undefined") {
    synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: "triangle" },
      envelope: { attack: 0.02, decay: 0.2, sustain: 0.1, release: 0.5 }
    }).toDestination();
    synth.volume.value = -8;
  }
}

function playSound(type) {
  try {
    initAudio();
    if (!synth) return;
    const now = Tone.now();
    if (type === "click") {
      synth.triggerAttackRelease("C5", "16n", now);
    } else if (type === "correct") {
      synth.triggerAttackRelease(["C5", "E5", "G5"], "8n", now);
      synth.triggerAttackRelease("C6", "4n", now + 0.15);
    } else if (type === "wrong") {
      synth.triggerAttackRelease("E4", "16n", now);
      synth.triggerAttackRelease("C4", "8n", now + 0.12);
    } else if (type === "victory") {
      synth.triggerAttackRelease("C5", "8n", now);
      synth.triggerAttackRelease("E5", "8n", now + 0.12);
      synth.triggerAttackRelease("G5", "8n", now + 0.24);
      synth.triggerAttackRelease(["C6", "E6", "G6"], "2n", now + 0.36);
    }
  } catch (e) { /* 忽略音訊例外 */ }
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    showToast("您的瀏覽器不支援語音朗讀功能");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-TW";
  utterance.rate = 0.92;
  utterance.pitch = 1.1;
  window.speechSynthesis.speak(utterance);
}

let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById("toast-msg");
  el.textContent = msg;
  el.classList.remove("opacity-0");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add("opacity-0"), 3000);
}

// =========================================================================
// 4. Three.js 360° 居家場景（八個關卡場景）
// =========================================================================
let scene, camera, renderer;
let roomGroup;
const floatingItems = [];
const hotspotElements = [];

function createWoodTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512; canvas.height = 512;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f3d5b5";
  ctx.fillRect(0, 0, 512, 512);
  ctx.strokeStyle = "#d4a373";
  ctx.lineWidth = 3;
  for (let i = 0; i < 512; i += 64) {
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke();
  }
  return new THREE.CanvasTexture(canvas);
}

function createWallPosterTexture(title, subtitle, bgColor, accentColor) {
  const canvas = document.createElement("canvas");
  canvas.width = 512; canvas.height = 384;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, 512, 384);
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 16;
  ctx.strokeRect(16, 16, 480, 352);
  ctx.textAlign = "center";
  ctx.fillStyle = "#1e293b";
  drawZhuyinLine(ctx, title, 256, 185, 40);
  ctx.fillStyle = accentColor;
  drawZhuyinLine(ctx, subtitle, 256, 250, 28);
  return new THREE.CanvasTexture(canvas);
}

function mesh(geo, color, opts) {
  return new THREE.Mesh(geo, new THREE.MeshStandardMaterial(Object.assign({ color }, opts || {})));
}
function box(w, h, d, color, x, y, z) {
  const m = mesh(new THREE.BoxGeometry(w, h, d), color);
  m.position.set(x, y, z);
  return m;
}
function cyl(rt, rb, h, color, x, y, z, seg) {
  const m = mesh(new THREE.CylinderGeometry(rt, rb, h, seg || 24), color);
  m.position.set(x, y, z);
  return m;
}

function addTable(g) {
  g.add(box(2.2, 0.12, 1.2, 0xd97706, 0, 0.85, 0));
  [[-0.9, -0.45], [0.9, -0.45], [-0.9, 0.45], [0.9, 0.45]].forEach(([lx, lz]) => {
    g.add(cyl(0.06, 0.06, 0.85, 0x92400e, lx, 0.425, lz, 12));
  });
}

function addFloatingOrb(g, color, emissive, y) {
  const orb = mesh(new THREE.OctahedronGeometry(0.22), color, { emissive, emissiveIntensity: 0.4 });
  orb.position.set(0, y || 1.9, 0);
  g.add(orb);
  floatingItems.push(orb);
}

// 依關卡編號建立對應的 3D 道具
function buildStationProps(i, g) {
  switch (i) {
    case 0: { // 起床：小床 + 床頭鬧鐘
      g.add(box(1.8, 0.4, 1.2, 0x60a5fa, 0, 0.25, 0));
      g.add(box(1.2, 0.2, 0.4, 0xfef08a, 0, 0.55, -0.35));
      g.add(box(0.5, 0.6, 0.5, 0x92400e, 1.3, 0.3, 0));
      const clock = cyl(0.2, 0.2, 0.08, 0xf59e0b, 1.3, 0.8, 0.1, 24);
      clock.rotation.x = Math.PI / 2;
      g.add(clock);
      addFloatingOrb(g, 0xfde047, 0xf59e0b);
      break;
    }
    case 1: { // 早餐：餐桌 + 荷包蛋 + 書包
      addTable(g);
      g.add(cyl(0.28, 0.24, 0.04, 0xffffff, -0.35, 0.93, 0.1, 24));
      const yolk = mesh(new THREE.SphereGeometry(0.09, 16, 16), 0xfacc15);
      yolk.scale.y = 0.5; yolk.position.set(-0.35, 0.96, 0.1); g.add(yolk);
      g.add(box(0.45, 0.55, 0.28, 0xef4444, 0.5, 1.18, 0));
      g.add(box(0.32, 0.25, 0.08, 0xfacc15, 0.5, 1.08, 0.16));
      addFloatingOrb(g, 0xfb923c, 0xea580c);
      break;
    }
    case 2: { // 上學：黃色校車
      g.add(box(2.2, 0.9, 0.95, 0xfacc15, 0, 0.75, 0));
      g.add(box(1.8, 0.35, 0.02, 0x38bdf8, 0, 0.95, 0.49));
      [[-0.7, 0.45], [0.7, 0.45], [-0.7, -0.45], [0.7, -0.45]].forEach(([wx, wz]) => {
        const w = cyl(0.2, 0.2, 0.12, 0x1e293b, wx, 0.2, wz, 16);
        w.rotation.x = Math.PI / 2;
        g.add(w);
      });
      addFloatingOrb(g, 0x38bdf8, 0x0284c7);
      break;
    }
    case 3: { // 上班：辦公桌 + 筆電 + 公事包
      g.add(box(2.0, 0.1, 0.9, 0x78716c, 0, 0.78, 0));
      g.add(box(0.1, 0.78, 0.8, 0x57534e, -0.9, 0.39, 0));
      g.add(box(0.1, 0.78, 0.8, 0x57534e, 0.9, 0.39, 0));
      g.add(box(0.6, 0.04, 0.4, 0x9ca3af, -0.3, 0.85, 0.05));
      const screen = box(0.6, 0.4, 0.03, 0x1e293b, -0.3, 1.06, -0.15);
      screen.rotation.x = -0.2; g.add(screen);
      g.add(box(0.5, 0.35, 0.15, 0x92400e, 0.6, 1.03, 0.1));
      addFloatingOrb(g, 0x818cf8, 0x4f46e5);
      break;
    }
    case 4: { // 安親班：積木 + 小書包 + 時鐘
      g.add(box(0.5, 0.5, 0.5, 0xef4444, -0.5, 0.25, 0));
      g.add(box(0.5, 0.5, 0.5, 0x3b82f6, 0.1, 0.25, 0));
      g.add(box(0.5, 0.5, 0.5, 0xfacc15, -0.2, 0.75, 0));
      g.add(box(0.4, 0.5, 0.25, 0x22c55e, 0.9, 0.25, 0.1));
      const rim = cyl(0.42, 0.42, 0.08, 0xf59e0b, 0, 2.2, -1.2, 32);
      rim.rotation.x = Math.PI / 2; g.add(rim);
      const face = cyl(0.35, 0.35, 0.09, 0xffffff, 0, 2.2, -1.19, 32);
      face.rotation.x = Math.PI / 2; g.add(face);
      addFloatingOrb(g, 0x34d399, 0x059669);
      break;
    }
    case 5: { // 晚餐作業：餐桌 + 鍋子 + 作業本
      addTable(g);
      g.add(cyl(0.22, 0.22, 0.25, 0x9ca3af, -0.5, 1.0, 0, 20));
      g.add(box(0.5, 0.03, 0.38, 0xffffff, 0.5, 0.92, 0.1));
      const pencil = cyl(0.015, 0.015, 0.3, 0xfacc15, 0.6, 0.95, 0.1, 8);
      pencil.rotation.z = Math.PI / 2; g.add(pencil);
      addFloatingOrb(g, 0x2dd4bf, 0x0d9488);
      break;
    }
    case 6: { // 洗澡與故事：浴缸 + 矮凳上的故事書 + 小夜燈
      g.add(box(1.8, 0.5, 0.9, 0xf8fafc, 0, 0.3, 0));
      g.add(box(1.6, 0.04, 0.7, 0x7dd3fc, 0, 0.53, 0));
      g.add(cyl(0.25, 0.25, 0.5, 0x92400e, 1.4, 0.25, 0.1, 16));
      g.add(box(0.4, 0.05, 0.5, 0xf472b6, 1.4, 0.55, 0.1));
      const moon = mesh(new THREE.SphereGeometry(0.25, 20, 20), 0xfde047, { emissive: 0xfacc15, emissiveIntensity: 0.7 });
      moon.position.set(0, 1.6, 0);
      g.add(moon);
      floatingItems.push(moon);
      break;
    }
    case 7: { // 超人披風：衣帽架 + 紅披風 + 金扣環
      g.add(cyl(0.06, 0.08, 2.2, 0x78350f, 0, 1.1, 0, 12));
      g.add(cyl(0.45, 0.45, 0.08, 0x78350f, 0, 0.04, 0, 24));
      const cape = new THREE.Mesh(
        new THREE.ConeGeometry(0.75, 1.45, 4, 1, true),
        new THREE.MeshStandardMaterial({ color: 0xdc2626, side: THREE.DoubleSide, emissive: 0x991b1b, emissiveIntensity: 0.25 })
      );
      cape.position.set(0, 1.35, 0.15);
      cape.scale.set(1.1, 1, 0.45);
      g.add(cape);
      floatingItems.push(cape);
      g.add((() => {
        const c = mesh(new THREE.SphereGeometry(0.14, 16, 16), 0xfacc15, { emissive: 0xeab308, emissiveIntensity: 0.4 });
        c.position.set(0, 1.98, 0.3);
        return c;
      })());
      break;
    }
  }
}

function initThreeScene() {
  const container = document.getElementById("scene-container");
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 1.6, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0xdbeafe, 1);
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.85));
  const dirLight = new THREE.DirectionalLight(0xfffbeb, 0.7);
  dirLight.position.set(3, 6, 2);
  scene.add(dirLight);

  roomGroup = new THREE.Group();
  scene.add(roomGroup);

  const woodTex = createWoodTexture();
  woodTex.wrapS = THREE.RepeatWrapping;
  woodTex.wrapT = THREE.RepeatWrapping;
  woodTex.repeat.set(6, 6);

  const floor = new THREE.Mesh(new THREE.CircleGeometry(7.5, 48), new THREE.MeshStandardMaterial({ map: woodTex }));
  floor.rotation.x = -Math.PI / 2;
  roomGroup.add(floor);

  const rug = mesh(new THREE.CircleGeometry(2.0, 36), 0xfef08a);
  rug.rotation.x = -Math.PI / 2;
  rug.position.y = 0.01;
  roomGroup.add(rug);

  const wall = new THREE.Mesh(
    new THREE.CylinderGeometry(6.2, 6.2, 4.5, 48, 1, true),
    new THREE.MeshStandardMaterial({ color: 0xf0f9ff, side: THREE.BackSide })
  );
  wall.position.y = 2.25;
  roomGroup.add(wall);

  const ceiling = mesh(new THREE.CircleGeometry(6.2, 48), 0xffffff);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.y = 4.5;
  roomGroup.add(ceiling);

  // 建立八個關卡場景
  STATIONS_DATA.forEach((s, i) => {
    const g = new THREE.Group();
    g.position.set(s.position.x, 0, s.position.z);
    g.rotation.y = s.targetYaw;
    buildStationProps(i, g);

    const poster = new THREE.Mesh(
      new THREE.PlaneGeometry(2.0, 1.5),
      new THREE.MeshBasicMaterial({ map: createWallPosterTexture(s.poster[0], s.poster[1], s.poster[2], s.poster[3]) })
    );
    poster.position.set(0, 2.9, -1.6);
    g.add(poster);

    roomGroup.add(g);
  });

  createHotspotElements();
  setupCameraControls(container);
  window.addEventListener("resize", onWindowResize);
}

function createHotspotElements() {
  const layer = document.getElementById("hotspots-layer");
  layer.innerHTML = "";
  hotspotElements.length = 0;

  STATIONS_DATA.forEach((station, idx) => {
    const btn = document.createElement("button");
    btn.className = "ar-hotspot pointer-events-auto group flex flex-col items-center focus:outline-none";
    btn.innerHTML = `
      <div class="relative flex items-center justify-center">
        <span class="hotspot-pulse absolute w-14 h-14 rounded-full bg-white/70"></span>
        <div class="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${COLOR_STYLES[station.color].hotspot} border-4 shadow-xl flex items-center justify-center text-2xl sm:text-3xl text-white">
          ${station.icon}
        </div>
        <span id="hotspot-done-${idx}" class="hidden absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white text-white text-xs font-black items-center justify-center shadow">✓</span>
      </div>
      <div class="mt-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm shadow-md border border-slate-200 text-center">
        <div class="text-[11px] sm:text-xs font-black text-slate-800 whitespace-nowrap">${station.badge}：${station.shortTitle}</div>
      </div>
    `;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openStationQuiz(idx);
    });
    layer.appendChild(btn);
    hotspotElements.push({
      el: btn,
      pos3D: new THREE.Vector3(station.position.x, station.position.y, station.position.z)
    });
  });
}

// 建立底部八關導覽列
function createStationNav() {
  const nav = document.getElementById("station-nav");
  nav.innerHTML = "";
  STATIONS_DATA.forEach((s, idx) => {
    const btn = document.createElement("button");
    btn.id = `nav-station-${idx}`;
    btn.className = `relative flex flex-col items-center justify-center gap-0.5 p-1.5 rounded-2xl border-2 transition active:scale-95 ${COLOR_STYLES[s.color].nav}`;
    btn.innerHTML = `
      <span class="text-lg leading-none">${s.icon}</span>
      <span class="text-[10px] sm:text-[11px] font-black text-slate-700 leading-tight">${s.badge}</span>
      <span class="text-[10px] text-slate-500 leading-tight">${s.shortTitle}</span>
      <span id="nav-check-${idx}" class="hidden absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white text-[10px] font-black items-center justify-center">✓</span>
    `;
    btn.onclick = () => focusStation(idx);
    nav.appendChild(btn);
  });
}

// =========================================================================
// 5. 360° 環顧控制
// =========================================================================
function setupCameraControls(domElement) {
  domElement.addEventListener("mousedown", (e) => {
    state.isDragging = true;
    state.isAutoRotatingToTarget = false;
    state.lastPointerX = e.clientX;
    state.lastPointerY = e.clientY;
    state.dragDistance = 0;
  });

  window.addEventListener("mousemove", (e) => {
    if (!state.isDragging) return;
    const dx = e.clientX - state.lastPointerX;
    const dy = e.clientY - state.lastPointerY;
    state.lastPointerX = e.clientX;
    state.lastPointerY = e.clientY;
    state.dragDistance += Math.abs(dx) + Math.abs(dy);
    state.yaw += dx * 0.0045;
    state.pitch = Math.max(-0.45, Math.min(0.45, state.pitch + dy * 0.0035));
  });

  window.addEventListener("mouseup", () => { state.isDragging = false; });

  domElement.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      state.isDragging = true;
      state.isAutoRotatingToTarget = false;
      state.lastPointerX = e.touches[0].clientX;
      state.lastPointerY = e.touches[0].clientY;
      state.dragDistance = 0;
    }
  }, { passive: true });

  domElement.addEventListener("touchmove", (e) => {
    if (!state.isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - state.lastPointerX;
    const dy = e.touches[0].clientY - state.lastPointerY;
    state.lastPointerX = e.touches[0].clientX;
    state.lastPointerY = e.touches[0].clientY;
    state.yaw += dx * 0.0055;
    state.pitch = Math.max(-0.45, Math.min(0.45, state.pitch + dy * 0.004));
  }, { passive: true });

  domElement.addEventListener("touchend", () => { state.isDragging = false; });
}

function focusStation(stationIdx) {
  playSound("click");
  const station = STATIONS_DATA[stationIdx];
  const TWO_PI = Math.PI * 2;
  const currentNorm = ((state.yaw % TWO_PI) + TWO_PI) % TWO_PI;
  const targetNorm = ((station.targetYaw % TWO_PI) + TWO_PI) % TWO_PI;
  let diff = targetNorm - currentNorm;
  if (diff > Math.PI) diff -= TWO_PI;
  if (diff < -Math.PI) diff += TWO_PI;
  state.targetYaw = state.yaw + diff;
  state.targetPitch = 0;
  state.isAutoRotatingToTarget = true;
}

function onWindowResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  if (state.isAutoRotatingToTarget) {
    state.yaw += (state.targetYaw - state.yaw) * 0.1;
    state.pitch += (state.targetPitch - state.pitch) * 0.1;
    if (Math.abs(state.targetYaw - state.yaw) < 0.01) state.isAutoRotatingToTarget = false;
  }

  camera.rotation.order = "YXZ";
  camera.rotation.y = state.yaw;
  camera.rotation.x = state.pitch;

  const time = performance.now() * 0.002;
  floatingItems.forEach((item, i) => {
    item.position.y += Math.sin(time + i) * 0.0015;
    item.rotation.y += 0.01;
  });

  const widthHalf = window.innerWidth / 2;
  const heightHalf = window.innerHeight / 2;

  hotspotElements.forEach((item) => {
    const projected = item.pos3D.clone().project(camera);
    if (projected.z < 1) {
      item.el.style.left = `${projected.x * widthHalf + widthHalf}px`;
      item.el.style.top = `${-(projected.y * heightHalf) + heightHalf}px`;
      item.el.style.opacity = "1";
      item.el.style.pointerEvents = "auto";
    } else {
      item.el.style.opacity = "0";
      item.el.style.pointerEvents = "none";
    }
  });

  renderer.render(scene, camera);
}

// =========================================================================
// 6. AR 實境相機模式
// =========================================================================
let mediaStream = null;
async function toggleArCameraMode() {
  playSound("click");
  const videoEl = document.getElementById("ar-video");
  const toggleText = document.getElementById("ar-toggle-text");

  if (!state.isArCameraActive) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showToast("此裝置不支援相機，維持 360° 虛擬居家環景模式");
      return;
    }
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false });
      videoEl.srcObject = mediaStream;
      videoEl.style.display = "block";
      roomGroup.visible = false;
      renderer.setClearColor(0x000000, 0);
      state.isArCameraActive = true;
      toggleText.textContent = "返回 360°";
      showToast("📷 已開啟 AR 實境模式！左右轉動尋找空間中的關卡熱點");
    } catch (err) {
      showToast("無法取得相機權限，已為您保留 360° 虛擬居家環景");
    }
  } else {
    if (mediaStream) {
      mediaStream.getTracks().forEach((t) => t.stop());
      mediaStream = null;
    }
    videoEl.style.display = "none";
    roomGroup.visible = true;
    renderer.setClearColor(0xdbeafe, 1);
    state.isArCameraActive = false;
    toggleText.textContent = "AR 實境";
    showToast("🏠 已切換回 360° 溫馨居家環景");
  }
}

// =========================================================================
// 7. 關卡測驗邏輯
// =========================================================================
function openStationQuiz(stationIdx) {
  playSound("click");
  state.currentStationId = stationIdx;
  state.currentQuestionIndex = 0;
  const station = STATIONS_DATA[stationIdx];

  document.getElementById("quiz-header").className =
    `p-4 bg-gradient-to-r ${COLOR_STYLES[station.color].header} text-white flex items-center justify-between`;
  document.getElementById("quiz-station-icon").textContent = station.icon;
  document.getElementById("quiz-station-subtitle").textContent = `${station.badge}（共 ${STATION_COUNT} 關）AR 互動任務`;
  document.getElementById("quiz-station-title").textContent = station.title;
  document.getElementById("ar-clue-svg").textContent = station.clueEmoji;
  document.getElementById("ar-clue-text").textContent = station.clueText;

  renderCurrentQuestion();

  const modal = document.getElementById("quiz-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeQuizModal() {
  window.speechSynthesis && window.speechSynthesis.cancel();
  const modal = document.getElementById("quiz-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function renderCurrentQuestion() {
  const station = STATIONS_DATA[state.currentStationId];
  const q = station.questions[state.currentQuestionIndex];
  state.questionAnswered = false;

  document.getElementById("question-type-badge").textContent = q.type;
  document.getElementById("question-counter").textContent = `第 ${state.currentQuestionIndex + 1} / ${station.questions.length} 題`;
  document.getElementById("question-text").textContent = q.prompt;

  document.getElementById("btn-speak-question").onclick = () => {
    const optionsText = q.options.map((o) => o.label).join("，");
    speakText(`${q.prompt}。選項有：${optionsText}`);
  };

  document.getElementById("feedback-box").classList.add("hidden");

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 border-slate-200 bg-slate-50 hover:bg-sky-50 hover:border-sky-400 font-bold text-slate-800 text-sm sm:text-base transition active:scale-[0.99] flex items-center justify-between gap-2";
    btn.innerHTML = `<span>${opt.label}</span><span class="status-icon text-lg"></span>`;
    btn.onclick = () => handleOptionSelect(opt.value, btn);
    optionsContainer.appendChild(btn);
  });
}

function handleOptionSelect(selectedValue, btnEl) {
  if (state.questionAnswered) return;

  const station = STATIONS_DATA[state.currentStationId];
  const q = station.questions[state.currentQuestionIndex];
  const isCorrect = selectedValue === q.correctValue;

  const feedbackBox = document.getElementById("feedback-box");
  const feedbackTitle = document.getElementById("feedback-title");
  const feedbackExplanation = document.getElementById("feedback-explanation");
  const nextBtn = document.getElementById("btn-next-question");

  if (isCorrect) {
    state.questionAnswered = true;
    playSound("correct");

    document.querySelectorAll(".option-btn").forEach((b) => b.classList.add("opacity-60", "cursor-default"));
    btnEl.classList.remove("opacity-60", "bg-slate-50", "border-slate-200");
    btnEl.classList.add("bg-emerald-50", "border-emerald-500", "text-emerald-900");
    btnEl.querySelector(".status-icon").textContent = "✅";

    feedbackBox.className = "p-4 rounded-2xl border-2 bg-emerald-50 border-emerald-300 text-emerald-900 block";
    feedbackTitle.innerHTML = "<span>🎉 太棒了，答對囉！</span>";
    feedbackExplanation.textContent = `解析：${q.explanation}`;

    const isLast = state.currentQuestionIndex >= station.questions.length - 1;
    nextBtn.textContent = isLast ? "完成本關任務 ✨" : "下一題 ➔";
    nextBtn.onclick = () => advanceQuestionOrCompleteStation();
  } else {
    playSound("wrong");
    btnEl.classList.remove("bg-slate-50", "border-slate-200");
    btnEl.classList.add("bg-rose-50", "border-rose-400", "text-rose-800");
    btnEl.querySelector(".status-icon").textContent = "❌";

    feedbackBox.className = "p-4 rounded-2xl border-2 bg-rose-50 border-rose-300 text-rose-900 block";
    feedbackTitle.innerHTML = "<span>💡 再想一想喔！</span>";
    feedbackExplanation.textContent = "別灰心，再仔細看看上面的「AR 情境線索」，重新選擇正確答案吧！";
    nextBtn.textContent = "重新作答";
    nextBtn.onclick = () => feedbackBox.classList.add("hidden");
  }
}

function advanceQuestionOrCompleteStation() {
  const station = STATIONS_DATA[state.currentStationId];
  if (state.currentQuestionIndex < station.questions.length - 1) {
    state.currentQuestionIndex++;
    renderCurrentQuestion();
    return;
  }

  state.completedStations[state.currentStationId] = true;
  updateProgressUI();
  closeQuizModal();

  if (state.completedStations.every(Boolean)) {
    triggerGrandVictory();
  } else {
    const left = state.completedStations.filter((d) => !d).length;
    showToast(`🌟 通過「${station.badge}：${station.shortTitle}」！還剩 ${left} 關`);
    // 自動帶領學生前往下一個尚未完成的關卡
    const nextIdx = STATIONS_DATA.findIndex((_, k) => !state.completedStations[(state.currentStationId + 1 + k) % STATION_COUNT]);
    if (nextIdx !== -1) focusStation((state.currentStationId + 1 + nextIdx) % STATION_COUNT);
  }
}

function updateProgressUI() {
  const doneCount = state.completedStations.filter(Boolean).length;
  document.getElementById("progress-badge").textContent = `${doneCount} / ${STATION_COUNT}`;
  const themeProgress = document.getElementById("theme-progress-xiaoti");
  if (themeProgress) {
    themeProgress.textContent = doneCount === STATION_COUNT ? "🏅 已通關" : `闖關 ${doneCount} / ${STATION_COUNT}`;
  }

  state.completedStations.forEach((done, idx) => {
    const navCheck = document.getElementById(`nav-check-${idx}`);
    const hotspotDone = document.getElementById(`hotspot-done-${idx}`);
    navCheck.classList.toggle("hidden", !done);
    navCheck.classList.toggle("flex", done);
    hotspotDone.classList.toggle("hidden", !done);
    hotspotDone.classList.toggle("flex", done);
  });
}

// =========================================================================
// 8. 通關慶祝
// =========================================================================
function triggerGrandVictory() {
  playSound("victory");
  launchConfetti();
  const modal = document.getElementById("certificate-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeCertificateModal() {
  const modal = document.getElementById("certificate-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function resetAllProgress() {
  state.completedStations = new Array(STATION_COUNT).fill(false);
  updateProgressUI();
  closeCertificateModal();
  focusStation(0);
  showToast("🔄 已重置所有關卡，重新開始八關挑戰吧！");
}

function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#ef4444", "#facc15", "#38bdf8", "#4ade80", "#f472b6"];
  const pieces = Array.from({ length: 110 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * 200,
    r: 6 + Math.random() * 6,
    color: colors[Math.floor(Math.random() * colors.length)],
    vy: 2.5 + Math.random() * 3.5,
    vx: -2 + Math.random() * 4,
    rot: Math.random() * Math.PI * 2
  }));

  let frames = 0;
  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.rot += 0.08;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.6);
      ctx.restore();
    });
    frames++;
    if (frames < 240) requestAnimationFrame(drawConfetti);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  drawConfetti();
}

// =========================================================================
// 品德主題選單：選擇主題後才進入闖關畫面
// =========================================================================
const THEMES = [
  { key: "xiaoti",  name: "孝悌", sub: "我的超人爸爸媽媽", icon: "🦸", color: "from-rose-400 to-red-500",      open: true },
  { key: "hezuo",   name: "合作", sub: "敬請期待",         icon: "🤝", color: "from-sky-400 to-blue-500",      open: false },
  { key: "zunzhong",name: "尊重", sub: "敬請期待",         icon: "🙇", color: "from-indigo-400 to-purple-500", open: false },
  { key: "chengshi",name: "誠實", sub: "敬請期待",         icon: "💎", color: "from-emerald-400 to-green-500", open: false },
  { key: "fuze",    name: "負責", sub: "敬請期待",         icon: "🎒", color: "from-amber-400 to-orange-500",  open: false },
  { key: "guanhuai",name: "關懷", sub: "敬請期待",         icon: "💗", color: "from-pink-400 to-fuchsia-500",  open: false }
];

function renderThemeMenu() {
  const grid = document.getElementById("theme-grid");
  grid.innerHTML = "";
  THEMES.forEach((t) => {
    const card = document.createElement("button");
    card.className = `relative text-left p-4 sm:p-5 rounded-3xl shadow-lg border-4 border-white transition active:scale-95 ${t.open ? "bg-gradient-to-br " + t.color + " hover:brightness-105" : "bg-slate-200 opacity-70"}`;
    card.innerHTML = `
      <div class="text-4xl sm:text-5xl mb-2">${t.icon}</div>
      <div class="text-xl sm:text-2xl font-black ${t.open ? "text-white" : "text-slate-500"}">${t.name}</div>
      <div class="text-xs sm:text-sm font-bold ${t.open ? "text-white/90" : "text-slate-500"}">${t.sub}</div>
      ${t.open
        ? `<div id="theme-progress-${t.key}" class="mt-3 inline-block px-2.5 py-1 rounded-full bg-white/90 text-rose-600 text-xs font-black">闖關 0 / ${STATION_COUNT}</div>`
        : `<div class="mt-3 inline-block px-2.5 py-1 rounded-full bg-white/70 text-slate-500 text-xs font-black">🔒 即將開放</div>`}
    `;
    card.onclick = () => {
      if (t.open) startTheme(t.key);
      else { playSound("wrong"); showToast(`「${t.name}」主題即將開放，敬請期待！`); }
    };
    grid.appendChild(card);
  });
}

function showThemeMenu() {
  playSound("click");
  document.getElementById("theme-greeting").textContent =
    `${state.studentSeat} 號 ${state.studentName} 同學，你好！`;
  document.getElementById("theme-menu").classList.remove("hidden");
}

function startTheme(key) {
  playSound("correct");
  document.getElementById("theme-menu").classList.add("hidden");
  focusStation(0);
  showToast("👆 點擊發光熱點，開始「孝悌」八關闖關！");
}

// =========================================================================
// 9. 課文繪本與初始化
// =========================================================================
function openStoryModal() {
  playSound("click");
  const modal = document.getElementById("story-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeStoryModal() {
  window.speechSynthesis && window.speechSynthesis.cancel();
  const modal = document.getElementById("story-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

window.onload = function () {
  initThreeScene();
  createStationNav();
  animate();

  document.getElementById("btn-start-experience").addEventListener("click", async () => {
    const name = document.getElementById("student-name").value.trim();
    const seat = parseInt(document.getElementById("student-seat").value, 10);
    const errorEl = document.getElementById("student-error");

    if (!name || !Number.isInteger(seat) || seat < 1 || seat > 99) {
      errorEl.classList.remove("hidden");
      return;
    }
    errorEl.classList.add("hidden");

    state.studentName = name;
    state.studentSeat = String(seat);

    const tag = document.getElementById("student-tag");
    tag.textContent = `${state.studentSeat} 號 ${state.studentName}`;
    tag.classList.remove("hidden");
    document.getElementById("certificate-student").textContent = `${state.studentSeat} 號　${state.studentName}`;

    if (typeof Tone !== "undefined" && Tone.context.state !== "running") {
      await Tone.start();
    }
    playSound("correct");
    document.getElementById("welcome-modal").classList.add("hidden");
    showThemeMenu();
  });

  document.getElementById("btn-back-to-login").addEventListener("click", () => {
    document.getElementById("theme-menu").classList.add("hidden");
    document.getElementById("welcome-modal").classList.remove("hidden");
  });

  renderThemeMenu();

  document.getElementById("btn-story").addEventListener("click", openStoryModal);
  document.getElementById("btn-read-full-story").addEventListener("click", () => {
    speakText("禮，孝悌。一，我的超人爸爸媽媽。一大早，爸爸和媽媽會叫我起床，替我準備早餐，接著送我上學，還要趕到公司上班。下班後，爸爸和媽媽會輪流到安親班來接我。回家後，不但要準備晚餐，還要檢查我的作業和幫我洗澡。睡覺前，還會念故事給我聽，讓我安心進入夢鄉。有一次，我對爸爸和媽媽說：爸爸、媽媽，您們每天這麼忙，像超人一樣飛來飛去，您們不會累嗎？爸爸和媽媽笑著說：不會啊！因為我們愛你啊！為你付出的一切，我們都不會累。我也開心說：我愛我的超人爸爸、媽媽！家人健康陪伴真快樂。");
  });

  document.getElementById("btn-ar-toggle").addEventListener("click", toggleArCameraMode);
};

// =========================================================================
// 10. 注音模組：國字 → 拼音 → 注音符號，標註在國字上方
// =========================================================================
const ZY_INITIAL = {
  b: "ㄅ", p: "ㄆ", m: "ㄇ", f: "ㄈ", d: "ㄉ", t: "ㄊ", n: "ㄋ", l: "ㄌ",
  g: "ㄍ", k: "ㄎ", h: "ㄏ", j: "ㄐ", q: "ㄑ", x: "ㄒ",
  zh: "ㄓ", ch: "ㄔ", sh: "ㄕ", r: "ㄖ", z: "ㄗ", c: "ㄘ", s: "ㄙ"
};
const ZY_FINAL = {
  a: "ㄚ", o: "ㄛ", e: "ㄜ", "ê": "ㄝ", ai: "ㄞ", ei: "ㄟ", ao: "ㄠ", ou: "ㄡ",
  an: "ㄢ", en: "ㄣ", ang: "ㄤ", eng: "ㄥ", er: "ㄦ",
  i: "ㄧ", ia: "ㄧㄚ", io: "ㄧㄛ", ie: "ㄧㄝ", iao: "ㄧㄠ", iu: "ㄧㄡ", iou: "ㄧㄡ",
  ian: "ㄧㄢ", in: "ㄧㄣ", iang: "ㄧㄤ", ing: "ㄧㄥ",
  u: "ㄨ", ua: "ㄨㄚ", uo: "ㄨㄛ", uai: "ㄨㄞ", ui: "ㄨㄟ", uei: "ㄨㄟ",
  uan: "ㄨㄢ", un: "ㄨㄣ", uen: "ㄨㄣ", uang: "ㄨㄤ", ong: "ㄨㄥ", ueng: "ㄨㄥ",
  "ü": "ㄩ", "üe": "ㄩㄝ", "üan": "ㄩㄢ", "ün": "ㄩㄣ", iong: "ㄩㄥ"
};
const ZY_TONE = { 2: "ˊ", 3: "ˇ", 4: "ˋ" };

function pinyinToZhuyin(py) {
  let s = String(py).toLowerCase().replace(/v/g, "ü");
  if (!/^[a-zêü]+[0-5]?$/.test(s)) return "";
  let tone = 1;
  const tm = s.match(/[0-5]$/);
  if (tm) { tone = parseInt(tm[0], 10); s = s.slice(0, -1); }
  if (tone === 0) tone = 5;

  let ini = "", fin = s;
  const two = s.slice(0, 2);
  if (two === "zh" || two === "ch" || two === "sh") { ini = two; fin = s.slice(2); }
  else if (ZY_INITIAL[s[0]]) { ini = s[0]; fin = s.slice(1); }
  else if (s[0] === "y") {
    if (s[1] === "u" || s[1] === "ü") fin = "ü" + s.slice(2);
    else if (s[1] === "i") fin = s.slice(1);
    else fin = "i" + s.slice(1);
  } else if (s[0] === "w") {
    fin = s[1] === "u" ? s.slice(1) : "u" + s.slice(1);
  }

  if ((ini === "j" || ini === "q" || ini === "x") && fin[0] === "u") fin = "ü" + fin.slice(1);
  if (/^(zh|ch|sh|r|z|c|s)$/.test(ini) && fin === "i") fin = "";

  let zyFinal = "";
  if (fin !== "") {
    zyFinal = ZY_FINAL[fin];
    if (zyFinal === undefined) return "";
  }
  const base = (ZY_INITIAL[ini] || "") + zyFinal;
  if (!base) return "";
  return tone === 5 ? "˙" + base : base + (ZY_TONE[tone] || "");
}

// 常見詞彙讀音校正（輕聲等）
try {
  if (window.pinyinPro && pinyinPro.customPinyin) {
    pinyinPro.customPinyin({
      "爸爸": "bà ba", "媽媽": "mā ma", "我們": "wǒ men", "您們": "nín men", "你們": "nǐ men"
    });
  }
} catch (e) { /* 忽略 */ }

// 一串連續國字 → 注音陣列
function zhuyinList(run) {
  const chars = Array.from(run);
  try {
    if (!window.pinyinPro) return chars.map(() => "");
    const arr = pinyinPro.pinyin(run, { type: "array", toneType: "num" });
    return chars.map((_, i) => pinyinToZhuyin(arr[i] || ""));
  } catch (e) {
    return chars.map(() => "");
  }
}

// 任意字串 → 與字元對齊的注音陣列（非國字為空字串）
function zhuyinOfString(text) {
  const out = [];
  text.split(/([\u4e00-\u9fff]+)/).forEach((seg) => {
    if (!seg) return;
    if (/^[\u4e00-\u9fff]+$/.test(seg)) out.push(...zhuyinList(seg));
    else Array.from(seg).forEach(() => out.push(""));
  });
  return out;
}

// 拆解注音：符號、聲調、是否輕聲
function splitZhuyin(zy) {
  let light = false, tone = "", sym = zy;
  if (sym.startsWith("˙")) { light = true; sym = sym.slice(1); }
  const last = sym.slice(-1);
  if ("ˊˇˋ".includes(last)) { tone = last; sym = sym.slice(0, -1); }
  return { sym, tone, light };
}

// 在 3D 海報（Canvas）上畫「國字＋右側直式注音」
function drawZhuyinLine(ctx, text, cx, y, size) {
  const chars = Array.from(text);
  const zys = zhuyinOfString(text);
  const unit = 1.4; // 每個字（含注音）佔的寬度倍數
  size = Math.min(size, 440 / (chars.length * unit));
  const step = size * unit;
  let x = cx - (chars.length * step) / 2 + size / 2;
  chars.forEach((ch, i) => {
    ctx.textAlign = "center";
    ctx.font = `bold ${size}px sans-serif`;
    ctx.fillText(ch, x, y);
    if (zys[i]) {
      const z = splitZhuyin(zys[i]);
      const syms = Array.from(z.sym);
      const zs = size * 0.36;
      const colX = x + size * 0.72;
      const midY = y - size * 0.35;
      const top = midY - (syms.length * zs) / 2;
      ctx.font = `bold ${Math.round(zs)}px sans-serif`;
      syms.forEach((s2, k) => ctx.fillText(s2, colX, top + (k + 0.85) * zs));
      if (z.tone) ctx.fillText(z.tone, colX + zs * 0.95, midY + zs * 0.3);
      if (z.light) ctx.fillText("˙", colX, top - zs * 0.05);
    }
    x += step;
  });
}

// 把 DOM 內所有國字改成 <ruby>字<rt>注音</rt></ruby>
const ZY_SKIP = "script,style,svg,.zy-c,textarea,input,canvas,title";
function annotateNode(node) {
  if (node.nodeType === 3) {
    const p = node.parentNode;
    if (!p || !p.closest || p.closest(ZY_SKIP)) return;
    if (!/[\u4e00-\u9fff]/.test(node.nodeValue)) return;
    const frag = document.createDocumentFragment();
    node.nodeValue.split(/([\u4e00-\u9fff]+)/).forEach((seg) => {
      if (!seg) return;
      if (/^[\u4e00-\u9fff]+$/.test(seg)) {
        const list = zhuyinList(seg);
        Array.from(seg).forEach((ch, i) => {
          if (!list[i]) { frag.appendChild(document.createTextNode(ch)); return; }
          const z = splitZhuyin(list[i]);
          const wrap = document.createElement("span");
          wrap.className = "zy-c";
          const base = document.createElement("span");
          base.textContent = ch;
          const right = document.createElement("span");
          right.className = "zy-r";
          const col = document.createElement("span");
          col.className = "zy-col";
          if (z.light) {
            const dot = document.createElement("span");
            dot.className = "zy-dot";
            dot.textContent = "˙";
            col.appendChild(dot);
          }
          const sym = document.createElement("span");
          sym.className = "zy-sym";
          sym.textContent = z.sym;
          col.appendChild(sym);
          right.appendChild(col);
          if (z.tone) {
            const tn = document.createElement("span");
            tn.className = "zy-tone";
            tn.textContent = z.tone;
            right.appendChild(tn);
          }
          wrap.appendChild(base);
          wrap.appendChild(right);
          frag.appendChild(wrap);
        });
      } else {
        frag.appendChild(document.createTextNode(seg));
      }
    });
    p.replaceChild(frag, node);
  } else if (node.nodeType === 1) {
    if (node.matches(ZY_SKIP)) return;
    Array.from(node.childNodes).forEach(annotateNode);
  }
}

// 監看畫面變動：之後動態產生的文字（題目、選項、提示）也會自動加注音
const zyObserver = new MutationObserver((muts) => {
  zyObserver.disconnect();
  muts.forEach((m) => m.addedNodes.forEach((n) => { if (n.isConnected) annotateNode(n); }));
  zyObserver.observe(document.body, { childList: true, subtree: true });
});
annotateNode(document.body);
zyObserver.observe(document.body, { childList: true, subtree: true });
  
