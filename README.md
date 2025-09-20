# Lúmina · Immersive Botanical Dining

A five-page concept website for **Lúmina**, an imagined botanical fine-dining restaurant in Toronto. The experience blends storytelling, sensory-driven cuisine, and avant-garde design. The site is completely static (HTML/CSS/JS) and highlights:

- A luminous landing page introducing the Equinox Reverie tasting menu and signature immersive spaces.
- A filterable menu that lets guests explore tasting movements, à la carte selections, libations, and plant-based offerings.
- An experience hub detailing the Resonance Lounge, Chef's Observatory, Whispering Conservatory, and a private Synesthetic Salon.
- A reservations portal with a concierge-style form, private salon highlights, and dynamic confirmation messaging.
- An about page celebrating the creative collective behind Lúmina and the restaurant's regenerative philosophy.

## Structure

```
index.html
menu.html
experience.html
reservations.html
about.html
assets/
  css/styles.css
  js/main.js
```

## Local preview

Open the files directly in your browser or serve the directory using any static server, e.g.:

```bash
python3 -m http.server
```

Then visit [http://localhost:8000](http://localhost:8000) to explore the experience.

## Deploying to GitHub Pages

This repository is preconfigured with a GitHub Actions workflow that publishes the static site to GitHub Pages on every push to the `main` branch.

1. Push the repository to GitHub if you have not already.
2. In your GitHub repository, navigate to **Settings → Pages** and choose **GitHub Actions** as the source. Save the settings.
3. Trigger the workflow by pushing to `main` (or run it manually from the **Actions** tab). The workflow uploads the repository contents as a static artifact and deploys it to the special `github-pages` environment.
4. Once the workflow completes, the deployed site URL appears in the workflow summary and on the **Pages** settings screen.

If you prefer a custom domain, configure it in **Settings → Pages → Custom domain** and add the appropriate DNS records.
