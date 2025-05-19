let showingDefenseFirst = true, inEgg = false;

const setLines = (top, bottom) => {
  line1.textContent = top;
  line2.textContent = bottom;
};

function toggleLines() {
  if (inEgg) {
    inEgg = false;
    showingDefenseFirst = true;
    setLines('The Best Defense', 'Is a Good Offense');
    return;
  }
  showingDefenseFirst
    ? setLines('The Best Offense', 'Is a Good Defense')
    : setLines('The Best Defense', 'Is a Good Offense');
  showingDefenseFirst = !showingDefenseFirst;
}

/* Easter egg: “D” key toggles “Deanfense” */
addEventListener('keydown', (e) => {
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