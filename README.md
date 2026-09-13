# trello-addons

## copy-list

Chrome extension that adds a **Copy** button to every Trello list header. Clicking it copies the list's card titles to the clipboard, one per line.

Install: `chrome://extensions` → enable Developer mode → **Load unpacked** → select the `copy-list` folder. Reload any open Trello tab.

Output format lives in `formatCards()` in `copy-list/content.js`. Trello DOM selectors live in `SEL` at the top of the same file.

## power-up

Trello Power-Up that adds **Copy as text** to every list's menu (works in the browser and the Trello desktop app). It opens a popup with the card titles, one per line, and a copy button.

Setup:

1. Hosted on GitHub Pages from `master`. Connector URL: `https://shaleo.github.io/trello-addons/power-up/`
2. Go to <https://trello.com/power-ups/admin> → **New** → set the name, workspace, and iframe connector URL from step 1. Icon URL: `https://shaleo.github.io/trello-addons/power-up/icon.png`.
3. In the Power-Up's **Capabilities** tab enable **List actions**.
4. On a board: Power-Ups → Custom → add it.
