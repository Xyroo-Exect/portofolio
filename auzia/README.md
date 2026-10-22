# Auzia Portfolio — Static JavaScript Edition

Clean, responsive portfolio made with HTML, CSS and plain JavaScript. No TypeScript, frontend framework, external AI API, database, analytics backend or production server is required.

## Files
- `index.html` — static page and accessible dialogs
- `assets/style.css` — responsive design and visual system
- `assets/app.js` — canvas background, local security knowledge assistant, workspace, demo visitor display and local audio player
- `CNAME` — existing custom domain (keep the existing CNAME from your current repository if it differs)
- `package.json` / `preview-server.js` — optional Node.js local preview only; GitHub Pages does not run Node.js

## Publish to the existing GitHub Pages repository
1. Back up the current repository first.
2. Upload `index.html`, `assets/`, and `README.md` to the same branch/folder configured in Settings → Pages.
3. Keep the `CNAME` file already used by your repository. Do not replace it unless you intentionally want to change domains.
4. Commit and push. No build step is needed.

If the repository publishes from `/docs` or a `gh-pages` branch, place the static files in that publication root instead of the repository root.

## Optional local preview with Node.js
Run `npm start` and open `http://127.0.0.1:4173`. This is only for local preview. The portfolio itself is static and works on GitHub Pages without this server.

## Local-first feature notes
- The assistant is a small rule-based security knowledge helper, not a full LLM. It makes no network requests and does not need an API key.
- Visitor/session numbers are illustrative dummy values generated in the browser, not real analytics or visitor tracking.
- The music player plays an audio file selected by the visitor using the browser's file picker. The file is not uploaded.
- Workspace notes last only while the page remains open; there is no backend storage.
- Background settings are applied in the current page only.
