# ClaimFlow local static copy

This folder is a local, editable static copy of the user's ClaimFlow landing page at the time of extraction.

## Open locally

- Double-click `index.html` to open it in a browser; it has no build step or package dependencies.
- If your browser restricts local `mailto:` behavior, use a local static server only for preview, for example: `python3 -m http.server 8000` and open `http://localhost:8000`.

## Edit map

- `index.html` — all page markup and copy, including the product-preview mockups.
- `styles.css` — the original page's static CSS, retained as editable plain CSS.
- `script.js` — FAQ accordion behavior and harmless local-demo notices for mock-product buttons.

## Scope and boundaries

This is an L0 local static demonstration. It contains no backend, login, AI model, file upload, data storage, integrations, payment, export, claim submission, analytics, or security controls. The mock product controls only show a local notice; they do not send or process data. `mailto:` links remain as on the original page.

The page includes illustrative metrics, buyer scenarios, integration names and security-direction copy from the original product concept. These are not production or verified business claims. No deployment has been performed.
