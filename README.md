# trello-addons

## copy-list

Chrome extension that adds a **Copy** button to every Trello list header. Clicking it copies the list's card titles to the clipboard, one per line.

Install: `chrome://extensions` → enable Developer mode → **Load unpacked** → select the `copy-list` folder. Reload any open Trello tab.

Output format lives in `formatCards()` in `copy-list/content.js`. Trello DOM selectors live in `SEL` at the top of the same file.
