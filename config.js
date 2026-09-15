/* ============================================================
   Renders SITE_CONFIG (from config.js) into the page and wires
   up all interactions. You shouldn't need to edit this file —
   edit config.js instead.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.SITE_CONFIG;
  if (!cfg) {
    console.error("SITE_CONFIG not found — make sure config.js loads before script.js");
    return;
  }

  const daysTogether = calcDaysTogether(cfg.relationshipStart);

  fillOpeningScreen(cfg);
  fillHero(cfg, daysTogether);
  fillLdr(cfg);
  fillTimeline(cfg);
  fillLoveCards(cfg);
  fillGallery(cfg);
  fillWishlist(cfg);
  fillLetter(cfg, daysTogether);
  fillFinale(cfg);

  initOpeningScreen();
  initFloatingHearts();
  initFlipCards();
  initEnvelope();
  initFinaleButton();
});

/* ---------- helpers ---------- */

function calcDaysTogether(startISO) {
  const start = new Date(startISO);
  const now = new Date();
  const ms = now - start;
  return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)));
}

function fillToken(text, cfg, days) {
  return text
    .replaceAll("{{partner}}", cfg.partner)
    .replaceAll("{{you}}", cfg.you)
    .replaceAll("{{days}}", days);
}

/* ---------- section renderers ---------- */

function fillOpeningScreen(cfg) {
  document.getElementById("opening-monthsary-label").textContent = cfg.monthsaryLabel;
  document.getElementById("opening-title").textContent = `For ${cfg.partner}`;
  document.getElementById("opening-sub").textContent =
    `A little something from ${cfg.you}, across the distance.`;
}

function fillHero(cfg, days) {
  document.getElementById("hero-kicker").textContent = `happy ${cfg.monthsaryLabel.toLowerCase()}`;
  document.getElementById("hero-title").textContent = `Our ${cfg.monthsaryLabel}`;
  document.getElementById("day-count").textContent = days;
}

function fillLdr(cfg) {
  document.getElementById("ldr-flag-you").textContent = cfg.yourFlag;
  document.getElementById("ldr-city-you").textContent = cfg.yourCity.split(",")[0];
  document.getElementById("ldr-flag-partner").textContent = cfg.partnerFlag;
  document.getElementById("ldr-city-partner").textContent = cfg.partnerCity.split(",")[0];
  document.getElementById("ldr-distance").textContent =
    `~${cfg.distanceKm} km apart, 0 km apart in every way that matters`;
}

function fillTimeline(cfg) {
  const list = document.getElementById("timeline-list");
  list.innerHTML = cfg.timeline.map(item => `
    <div class="timeline-item">
      <span class="timeline-icon">${item.icon || "💛"}</span>
      <span class="timeline-date">${item.date}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `).join("");
}

function fillLoveCards(cfg) {
  const grid = document.getElementById("flip-grid");
  grid.innerHTML = cfg.loveList.map((card, i) => `
    <div class="flip-card" data-index="${i}">
      <div class="flip-card-inner">
        <div class="flip-card-front">${card.front}</div>
        <div class="flip-card-back">${card.back}</div>
      </div>
    </div>
  `).join("");
}

function fillGallery(cfg) {
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = cfg.photos.map(photo => `
    <figure class="gallery-item">
      <img
        src="${photo.src}"
        alt="${photo.caption || "memory"}"
        loading="lazy"
        onerror="this.replaceWith(Object.assign(document.createElement('div'), {
          className: 'gallery-placeholder',
          innerHTML: '<span class=\\'cam\\'>📷</span><span>add ' + '${photo.src}' + '</span>'
        }))"
      >
      ${photo.caption ? `<figcaption class="gallery-caption">${photo.caption}</figcaption>` : ""}
    </figure>
  `).join("");
}

function fillWishlist(cfg) {
  const ul = document.getElementById("wishlist");
  ul.innerHTML = cfg.wishlist.map(item => `<li>${item}</li>`).join("");
}

function fillLetter(cfg, days) {
  const letterEl = document.getElementById("letter-paper");
  const filled = fillToken(cfg.letter, cfg, days);
  const paragraphs = filled.split("\n\n").map(p => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");
  letterEl.innerHTML = paragraphs;
}

function fillFinale(cfg) {
  document.getElementById("finale-reveal").textContent = cfg.finalSurpriseText;
}

/* ---------- interactions ---------- */

function initOpeningScreen() {
  const screen = document.getElementById("opening-screen");
  const btn = document.getElementById("open-site-btn");
  btn.addEventListener("click", () => {
    screen.classList.add("opening-hide");
    document.body.style.overflow = "";
    setTimeout(() => { screen.style.display = "none"; }, 900);
  });
  document.body.style.overflow = "hidden";
  screen.addEventListener("transitionend", () => {
    if (screen.classList.contains("opening-hide")) {
      document.body.style.overflow = "";
    }
  });
}

function initFloatingHearts() {
  const layer = document.getElementById("hearts-layer");
  const emojis = ["💛", "💕", "💌", "🩷"];
  const MAX_HEARTS = 14;

  function spawnHeart() {
    if (layer.childElementCount >= MAX_HEARTS) return;
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.setProperty("--drift", `${(Math.random() - 0.5) * 120}px`);
    const duration = 9 + Math.random() * 8;
    heart.style.animationDuration = `${duration}s`;
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
  }

  for (let i = 0; i < 5; i++) {
    setTimeout(spawnHeart, i * 700);
  }
  setInterval(spawnHeart, 2200);
}

function initFlipCards() {
  document.querySelectorAll(".flip-card").forEach(card => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    const toggle = () => card.classList.toggle("is-flipped");
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });
}

function initEnvelope() {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter-paper");

  function openEnvelope() {
    const isOpen = envelope.classList.toggle("is-open");
    envelope.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      setTimeout(() => {
        letter.classList.add("is-visible");
        letter.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    } else {
      letter.classList.remove("is-visible");
    }
  }

  envelope.addEventListener("click", openEnvelope);
  envelope.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openEnvelope();
    }
  });
}

function initFinaleButton() {
  const btn = document.getElementById("finale-btn");
  const reveal = document.getElementById("finale-reveal");
  btn.addEventListener("click", () => {
    reveal.classList.add("is-visible");
    burstConfetti();
    reveal.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function burstConfetti() {
  const layer = document.getElementById("confetti-layer");
  const emojis = ["💛", "💕", "💌", "🩷", "✨"];
  const count = 24;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-heart";
    piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const angle = Math.random() * Math.PI * 2;
    const distance = 120 + Math.random() * 220;
    piece.style.setProperty("--cx", `${Math.cos(angle) * distance}px`);
    piece.style.setProperty("--cy", `${Math.sin(angle) * distance}px`);
    piece.style.left = "50%";
    piece.style.top = "40%";
    piece.style.animationDelay = `${Math.random() * 0.2}s`;
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 1800);
  }
}