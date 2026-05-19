# Danielson Systems LLC — Website

Static brochure site for Danielson Systems LLC. Plain HTML and CSS, no JavaScript, no build step. Deploys to Cloudflare Pages as-is.

## Structure

```
index.html       Home
services.html    Services
about.html       About
contact.html     Contact
styles.css       Shared stylesheet
images/          Logo, headshot, placeholders
```

## Local preview

Any static file server works. Two options:

```
# Python 3
python -m http.server 8000

# Node (if installed)
npx serve .
```

Then open http://localhost:8000.

## Deployment (Cloudflare Pages)

1. Push this repo to GitHub (or another supported provider).
2. In the Cloudflare dashboard: **Pages → Create project → Connect to Git**.
3. Build settings: framework preset **None**, build command **(blank)**, output directory **/**.
4. Bind `danielsonsystems.com` to the Pages project under **Custom domains**.

## Images

Real images go in `images/`. Placeholders are SVGs at the same paths the HTML expects. To swap in real assets, drop the file at the same name (e.g. `images/headshot.jpg`) and update the one corresponding `<img src>` if the extension changes.

Expected assets:

- `images/headshot.jpg` (or `.svg` / `.png`) — about page portrait, roughly 4:5 aspect, 600px+ on the long edge
- `images/logo.svg` (optional) — header mark, would sit next to the "Danielson Systems" wordmark

## Editing

Design tokens (colors, type sizes, spacing) live as CSS custom properties at the top of `styles.css`. Change them there to retheme the whole site.

The four HTML files each duplicate the same `<header>` and `<footer>` markup. When editing navigation, search-and-replace across files.
