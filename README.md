# Pocket Pet Planet

A tiny pastel planet you can spin, full of chubby critters to feed, cuddle, and watch evolve.

Play it at <https://theoi.github.io/pocket-pet-planet/>.

- Drag to spin the planet, scroll or pinch to zoom.
- Tap a critter to see its name and mood, rename it, feed it, or pet it.
- Feeding a peckish critter earns care; enough care makes it evolve (Baby → Young → Starry).
- Hunger and happiness keep changing while the tab is closed; progress is saved in your browser.

## Develop

```sh
npm install
npm run dev        # local dev server
npm run build      # static build in dist/ (base path /pocket-pet-planet/)
npm run preview    # serve the build on http://127.0.0.1:4173/pocket-pet-planet/
npx playwright test                      # headless checks against the preview
PPP_URL=https://theoi.github.io/pocket-pet-planet/ npx playwright test   # against the live site
```

Add `?debug=1` to the URL for a small debug bar (fast-forward time, force evolution, reset).

Built with Vite, TypeScript, and Three.js.
