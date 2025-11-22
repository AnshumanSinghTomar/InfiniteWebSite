// --- Seeded RNG -------------------------------------------------------------
function seededRNG(seed) {
  let x = seed ? seed >>> 0 : Math.floor(Math.random() * 0xffffffff);
  return () => {
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
    return (x >>> 0) / 0xffffffff;
  };
}

function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}

function rInt(rng, min, max) {
  return Math.floor(rng() * (max - min + 1)) + min;
}

// --- Data -------------------------------------------------------------------
const FACTS = [
  "Honey never spoils.",
  "Wombats produce cube-shaped poop.",
  "Bananas are berries, strawberries aren’t.",
  "A group of flamingos is a ‘flamboyance’.",
  "The inventor of the Pringles can is buried in one.",
  "Octopuses have three hearts.",
  "Sharks existed before trees.",
  "A day on Venus is longer than a year on Venus.",
  "There are more stars in the universe than grains of sand on Earth.",
  "Butterflies taste with their feet.",
  "A snail can sleep for up to three years.",
  "Humans share 60% of their DNA with bananas.",
  "Cows have best friends and get stressed when separated.",
  "Scotland’s national animal is the unicorn.",
  "An ostrich’s eye is bigger than its brain.",
  "Tigers have striped skin, not just striped fur.",
  "Banging your head against a wall burns 150 calories an hour (but don’t try it!).",
  "You can't hum while holding your nose closed.",
  "Polar bear fur is actually transparent, not white.",
  "Koalas sleep up to 22 hours a day.",
  "The heart of a blue whale is the size of a small car.",
  "The Eiffel Tower can grow more than 6 inches during summer heat.",
  "Some cats are allergic to humans.",
  "A bolt of lightning is five times hotter than the sun’s surface.",
  "Jellyfish have been around for over 500 million years.",
  "Peanuts aren't nuts—they're legumes.",
  "Sloths can hold their breath longer than dolphins.",
  "The longest English word has 189,819 letters.",
  "An ant can lift 50 times its body weight.",
  "Cheetahs can't roar—they meow like housecats.",
  "Blue eyes actually contain no blue pigment.",
  "Rabbits can't vomit.",
  "The moon has moonquakes.",
  "Your brain is sometimes more active when you're asleep than when awake.",
  "Sea otters hold hands when they sleep.",
  "The shortest war in history lasted about 38 minutes.",
  "Tomatoes were once considered poisonous in Europe.",
  "A cloud can weigh over a million pounds.",
  "Bees can recognize human faces.",
  "Some turtles can breathe through their butts."
];

const WORDS = [
  "zephyr", "tessera", "murmuration", "gossamer", "nocturne",
  "plinth", "sprocket", "carousel", "whorl", "umbra",
  "solstice", "quill", "astral", "echolalia", "hinterland",
  "palimpsest", "lilt", "cobblestone", "vellum", "labyrinth",
  "ephemera", "citadel", "glimmer", "parallax", "seraph",
  "quasar", "hearth", "inkling", "moonward", "fen",
  "rappel", "rune", "bramble", "silhouette", "timbre",
  "harbinger", "rift", "wisp", "canticle", "loam"
];

const STORIES = [
  rng => `Once upon a neon dusk, a ${pick(rng, WORDS)} met a ${pick(rng, WORDS)} carrying ${pick(rng, WORDS)}.`,
  rng => `In a whispering library, a ${pick(rng, WORDS)} accidentally read tomorrow’s last page.`,
  rng => `Legend says if you shout '${pick(rng, WORDS)}', a ${pick(rng, WORDS)} will begin to dance.`,

  rng => `A restless ${pick(rng, WORDS)} drifted across the old sky, searching for a forgotten ${pick(rng, WORDS)}.`,
  rng => `Beneath the trembling bridge, a ${pick(rng, WORDS)} traded secrets with a hidden ${pick(rng, WORDS)}.`,
  rng => `The clocktower chimed ${pick(rng, WORDS)} and the town fell silent.`,
  rng => `A wandering ${pick(rng, WORDS)} discovered a doorway carved entirely from ${pick(rng, WORDS)}.`,
  rng => `The night market sold jars of bottled ${pick(rng, WORDS)} for a single ${pick(rng, WORDS)}.`,
  rng => `Every midnight, a ${pick(rng, WORDS)} rewrote the stars in its own ${pick(rng, WORDS)} language.`,
  rng => `On the abandoned pier, a ${pick(rng, WORDS)} hummed the color of ${pick(rng, WORDS)}.`,

  rng => `A storm of ${pick(rng, WORDS)} swept through the valley, leaving trails of ${pick(rng, WORDS)} behind.`,
  rng => `The ancient machine awoke and whispered '${pick(rng, WORDS)}' to anyone brave enough to listen.`,
  rng => `A ${pick(rng, WORDS)} challenged a ${pick(rng, WORDS)} to a race across the shifting dunes.`,
  rng => `Inside the crystal cavern, a ${pick(rng, WORDS)} found a heartbeat that wasn’t its own.`,
  rng => `Rumor claims a ${pick(rng, WORDS)} guards the only remaining ${pick(rng, WORDS)} in existence.`,
  rng => `A lonely ${pick(rng, WORDS)} painted the horizon with strokes of ${pick(rng, WORDS)}.`,
  rng => `During the eclipse, a ${pick(rng, WORDS)} briefly remembered being human.`,
  rng => `A caravan of ${pick(rng, WORDS)} crossed the desert, guided only by ${pick(rng, WORDS)}.`,
  rng => `When the bell rang thrice, the ${pick(rng, WORDS)} awakened the sleeping ${pick(rng, WORDS)}.`,
  rng => `From the depths of the forest emerged a ${pick(rng, WORDS)} carrying a single ${pick(rng, WORDS)}.`,

  rng => `The lighthouse glowed with ${pick(rng, WORDS)}, leading wanderers back to forgotten shores.`,
  rng => `A ${pick(rng, WORDS)} composed music no ear had ever heard, yet everyone remembered.`,
  rng => `The old map marked a trail only visible to a ${pick(rng, WORDS)} at sunrise.`,
  rng => `A mischievous ${pick(rng, WORDS)} swapped dreams with a sleeping ${pick(rng, WORDS)}.`,
  rng => `A traveler traded a ${pick(rng, WORDS)} for safe passage through the whispering winds.`,
  rng => `A ${pick(rng, WORDS)} unearthed an echo shaped like a forgotten ${pick(rng, WORDS)}.`,
  rng => `The moon blinked, startling a ${pick(rng, WORDS)} perched on the horizon.`,
  rng => `A rumor floated that a ${pick(rng, WORDS)} had stolen the city's final sunrise.`,
  rng => `The train slowed as a ${pick(rng, WORDS)} wandered across its shimmering tracks.`,
  rng => `Deep underwater, a ${pick(rng, WORDS)} discovered a glowing ${pick(rng, WORDS)}.`,

  rng => `A ${pick(rng, WORDS)} stitched together stray moments of time into a shimmering cloak.`,
  rng => `At dawn, a ${pick(rng, WORDS)} confessed its fears to the passing ${pick(rng, WORDS)}.`,
  rng => `A forgotten melody drifted from a ${pick(rng, WORDS)} hidden beneath the floorboards.`,
  rng => `A ${pick(rng, WORDS)} met its reflection and realized it belonged to someone else.`,
  rng => `Clouds formed the shape of a ${pick(rng, WORDS)}, guiding explorers toward a ${pick(rng, WORDS)}.`,
  rng => `A quiet ${pick(rng, WORDS)} guarded a flame that burned with pure ${pick(rng, WORDS)}.`,
  rng => `In the observatory, a ${pick(rng, WORDS)} charted constellations that hadn’t been invented yet.`,
  rng => `A curious ${pick(rng, WORDS)} unlocked a box containing only silence.`,
  rng => `On the edge of the world, a ${pick(rng, WORDS)} waited for a message carried by ${pick(rng, WORDS)}.`,
  rng => `The river sang a lullaby that only a ${pick(rng, WORDS)} could understand.`
];


// --- Color generators -------------------------------------------------------
function palette(rng) {
  const h = rInt(rng, 0, 360);
  const s = rInt(rng, 60, 90);
  const l = rInt(rng, 30, 60);
  const a = (h + rInt(rng, 60, 200)) % 360;

  return {
    bg: `hsl(${h} ${s}% ${l}%)`,
    accent: `hsl(${a} ${s-10}% ${l-15}%)`,
    text: l > 50 ? "#111" : "#f2f2f2"
  };
}

function gradient(rng) {
  const angle = rInt(rng, 0, 360);
  return `linear-gradient(${angle}deg, ${palette(rng).bg}, ${palette(rng).bg})`;
}

// --- Section generators -----------------------------------------------------
function genFact(rng) {
  const pal = palette(rng);
  const el = document.createElement("section");
  el.style.background = pal.bg;
  el.style.color = pal.text;

  el.innerHTML = `
    <div style="padding:20px">
      <h3>Random Fact</h3>
      <p>${pick(rng, FACTS)}</p>
    </div>
  `;
  return el;
}

function genStyled(rng) {
  const el = document.createElement("section");
  el.style.background = gradient(rng);
  el.style.height = `${rInt(rng, 200, 340)}px`;
  el.style.display = "flex";
  el.style.alignItems = "center";
  el.style.justifyContent = "center";

  el.innerHTML = `
    <div style="background:rgba(255,255,255,0.15);padding:20px;border-radius:12px;">
      <h2>${pick(rng, WORDS).toUpperCase()}</h2>
      <p>Procedurally styled block</p>
    </div>
  `;
  return el;
}

function genStory(rng) {
  const pal = palette(rng);
  const el = document.createElement("section");
  el.style.background = pal.bg;
  el.style.color = pal.text;

  el.innerHTML = `
    <div style="padding:25px;">
      <h3>Micro-Story</h3>
      <p>${pick(rng, STORIES)(rng)}</p>
    </div>
  `;
  return el;
}

function genWidget(rng) {
  const type = rInt(rng, 0, 2);
  const pal = palette(rng);

  const el = document.createElement("section");
  el.style.background = pal.bg;
  el.style.color = pal.text;
  el.style.padding = "20px";

  if (type === 0) {
    // countdown
    let secs = rInt(rng, 3, 10);
    const span = document.createElement("div");
    span.style.fontSize = "40px";
    span.style.fontFamily = "monospace";
    span.textContent = secs;

    el.append("Countdown: ", span);

    const timer = setInterval(() => {
      secs--;
      span.textContent = secs > 0 ? secs : "✨";
      if (secs <= 0) clearInterval(timer);
    }, 1000);
  }

  else if (type === 1) {
    // ASCII
    el.innerHTML += `<pre>(\\_/)\n( •_•)\n/ >🍪</pre>`;
  }

  else {
    // weird form
    el.innerHTML += `<h4>Weird Form</h4>`;
    for (let i = 0; i < rInt(rng, 1, 3); i++) {
      const input = document.createElement("input");
      input.placeholder = `Field ${i + 1}`;
      input.style.display = "block";
      input.style.margin = "5px 0";
      el.appendChild(input);
    }
  }

  return el;
}

// --- Infinite logic ---------------------------------------------------------
let seed = Math.floor(Math.random() * 99999999);
let rng = seededRNG(seed);

const main = document.getElementById("main");
const sentinel = document.getElementById("sentinel");

let paused = false;

function addBatch() {
  if (paused) return;

  const density = Number(document.getElementById("densityInput").value);
  const count = Math.max(1, Math.round(6 * density));

  for (let i = 0; i < count; i++) {
    const roll = rng();
    let section;

    if (roll < 0.25) section = genFact(rng);
    else if (roll < 0.5) section = genStyled(rng);
    else if (roll < 0.75) section = genStory(rng);
    else section = genWidget(rng);

    main.appendChild(section);
  }
}

// Observer
const io = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) addBatch();
}, { rootMargin: "300px" });

io.observe(sentinel);

// --- Controls ---------------------------------------------------------------
document.getElementById("pauseBtn").onclick = () => {
  paused = !paused;
  document.getElementById("pauseBtn").textContent = paused ? "Resume" : "Pause";
};

document.getElementById("spawnBtn").onclick = addBatch;

document.getElementById("seedInput").oninput = e => {
  const val = e.target.value;
  seed = val === "" ? Math.floor(Math.random() * 9999999) : Number(val);
  rng = seededRNG(seed);

  main.innerHTML = ""; // reset
  addBatch();
};
