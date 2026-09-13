// Trello DOM hooks. If Trello changes its markup, this is the only place to update.
const SEL = {
  list: '[data-testid="list"]',
  header: '[data-testid="list-header"]',
  name: '[data-testid="list-name"]',
  card: '[data-testid="card-name"]',
};

const BTN_CLASS = 'tcl-copy-btn';

// Text that lands on the clipboard: one card per line.
function formatCards(listName, cardTitles) {
  return cardTitles.join('\n');
}

function collect(list) {
  const nameEl = list.querySelector(SEL.name);
  const name = (nameEl?.value ?? nameEl?.textContent ?? '').trim();
  const titles = [...list.querySelectorAll(SEL.card)]
    .map((el) => el.textContent.trim())
    .filter(Boolean);
  return { name, titles };
}

async function copyList(list, btn) {
  const { name, titles } = collect(list);
  try {
    await navigator.clipboard.writeText(formatCards(name, titles));
    flash(btn, `${titles.length} copied`);
  } catch {
    flash(btn, 'Copy failed');
  }
}

function flash(btn, text) {
  btn.textContent = text;
  clearTimeout(btn._t);
  btn._t = setTimeout(() => (btn.textContent = 'Copy'), 1500);
}

function inject(list) {
  const header = list.querySelector(SEL.header);
  if (!header || header.querySelector(`.${BTN_CLASS}`)) return;
  const btn = document.createElement('button');
  btn.className = BTN_CLASS;
  btn.type = 'button';
  btn.title = 'Copy card titles as text';
  btn.textContent = 'Copy';
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    copyList(list, btn);
  });
  header.appendChild(btn);
}

function scan() {
  document.querySelectorAll(SEL.list).forEach(inject);
}

scan();
new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
