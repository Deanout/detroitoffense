/* ---------- element handles ---------- */
const wrapper = document.getElementById('slogan-wrapper');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');

if (!wrapper || !line1 || !line2) {
  console.error('Slogan elements not found – check the IDs in the HTML.');
}

/* ---------- state ---------- */
let showingDefenseFirst = true;
let inEgg = false;

/* ---------- helpers ---------- */
function setLines(top, bottom) {
  line1.textContent = top;
  line2.textContent = bottom;
}

function toggleLines() {
  if (inEgg) {                // break out of Easter‑egg mode
    inEgg = false;
    showingDefenseFirst = true;
    setLines('The Best Defense', 'Is a Good Offense');
    return;
  }

  if (showingDefenseFirst) {
    setLines('The Best Offense', 'Is a Good Defense');
  } else {
    setLines('The Best Defense', 'Is a Good Offense');
  }
  showingDefenseFirst = !showingDefenseFirst;
}

/* ---------- event wiring ---------- */
wrapper?.addEventListener('click', toggleLines);

document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'd') {
    if (inEgg) {
      inEgg = false;
      showingDefenseFirst = true;
      setLines('The Best Defense', 'Is a Good Offense');
    } else {
      inEgg = true;
      setLines('The Best Deanfense', 'Is a Good Offense');
    }
  }
});
