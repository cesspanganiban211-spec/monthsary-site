# Our Monthsary Site 💌

A single-page site for your monthsary — no database, no backend, just
HTML, CSS, and JavaScript. Free to host forever on GitHub Pages.

## File overview

```
index.html    ← page structure (you probably won't need to touch this)
style.css     ← all visual styling
script.js     ← all interactivity (you probably won't need to touch this)
config.js     ← ⭐ THIS is the file you edit — your names, dates, timeline,
                photos, wishlist, and letter all live here
images/       ← put your photos/screenshots in here
```

## 1. Customize `config.js`

Open `config.js` in any text editor. Every section is labeled with a
comment. Change:

- `you` / `partner` — your names
- `yourCity` / `partnerCity` / flags / `distanceKm`
- `relationshipStart` — the date you got together (the page auto-counts
  days from this, live, every time it's opened)
- `monthsaryLabel` — e.g. "2nd Monthsary", "100 Days", etc.
- `timeline` — add/remove/edit entries freely, any length
- `loveList` — the flip-card items
- `photos` — filenames of images you've dropped into `/images`
- `wishlist` — your LDR wishlist items
- `letter` — your full letter. You can use `{{partner}}`, `{{you}}`,
  and `{{days}}` anywhere in the text and they'll fill in automatically
- `finalSurpriseText` — the message revealed by the last button

## 2. Add your photos

Drop your images into the `images/` folder and reference their
filenames in `config.js`'s `photos` array (e.g. `images/us-at-the-mall.jpg`).
If a photo file is missing, that slot just shows a placeholder — nothing
breaks.

## 3. Preview it locally

Just double-click `index.html` to open it in your browser. No install,
no build step, no server needed.

## 4. Publish it for free on GitHub Pages

1. Create a new repository on GitHub (can be named anything, e.g. `for-you`).
2. Upload all these files (`index.html`, `style.css`, `script.js`,
   `config.js`, and the `images` folder) to the repository — either by
   dragging them into the GitHub web UI, or via git:
   ```bash
   git init
   git add .
   git commit -m "our monthsary site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. Wait a minute or two — your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO/
   ```

That link is what you send them. If you'd rather it not be public,
you can make the repository private on a paid GitHub plan (Pages on a
free plan requires a public repo), or just keep the link unlisted.

## Notes

- Everything is client-side — nothing is saved or sent anywhere,
  so there's no privacy concern with hosting it.
- `prefers-reduced-motion` is respected for anyone who has that
  system setting on.
- Tested down to small mobile widths.