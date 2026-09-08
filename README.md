# BakingToolCalculators 🥖🎂

> Free, private, client-side baking calculators & kitchen measurement tools for home and professional bakers.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Vitest**. Runs 100% in-browser with zero application servers, zero databases, and zero paid APIs.

---

## 🚀 The 3 Flagship Launch Tools

1. **Sourdough Hydration & Starter Split Calculator** (`/tools/sourdough-hydration-calculator`)
   - Computes true total dough hydration by separating the flour and water already present in your sourdough starter.
   - Outputs Starter Weight % (inoculation) and Prefermented Flour %.
   - Toggle between Salt Weight (g) and Baker's %.
2. **Baker's Percentage Universal Scaler** (`/tools/bakers-percentage-calculator`)
   - Flour is fixed as the 100% baseline.
   - Dual-scaling: Scale by target flour or by total desired batch weight.
   - Supports 1 to 20 dynamic ingredient rows.
3. **Baking Pan Size & Volume Converter** (`/tools/baking-pan-converter`)
   - Converts recipe quantities between Round, Square, Rectangular, and standard Bundt presets (6/10/12 cup).
   - Computes Geometric Pan Capacity and Volume-Based Scaling Factor.
   - Qualitative thermal baking guidance based on pan depth differences.

---

## 🛠️ Architecture & SEO Guardrails

- **Single Source of Truth (`src/config/tools.config.ts`):** Feeds `generateStaticParams()`, navigation, homepage cards, sitemaps, and page metadata.
- **Dynamic Site URL (`src/config/site.ts`):** Normalized via `process.env.NEXT_PUBLIC_SITE_URL` (defaults to `http://localhost:3000`).
- **Canonical & Parameter-Safe SEO:** Any state query parameters (`?flour=600`) strictly canonicalize to the clean base URL and serve `noindex, follow`.
- **Accessible UX:** Form inputs use `<label>` associations, `aria-describedby`, `inputmode="decimal"`, visible focus rings, and debounced `aria-live="polite"` result zones.
- **Warm Bakery Aesthetic:** Custom theme matching organic dough canvas (`#FAF7F2`), crisp white cards with soft warm borders (`#E8E2D6`), peach summary stat boxes (`#FFF7ED`), and solid bakery orange primary CTAs (`#EA580C`).

---

## 🧪 Testing & Verification

```bash
# 1. Run unit test suite (Units, Rounding, Validation, Sourdough, Baker's %, Pan Converter)
npm test

# 2. Typecheck
npm run typecheck

# 3. Lint
npm run lint

# 4. Production Smoke Test
npm run smoke

# 5. Production Build
npm run build
```

---

## 🌐 Deploy to Vercel for $0

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial launch of BakingToolCalculators"
   gh repo create bakingtoolcalculators --public --source=. --remote=origin --push
   ```
2. In [Vercel](https://vercel.com), import the repository.
3. Set environment variable (optional when using custom domain):
   - `NEXT_PUBLIC_SITE_URL`: `https://your-domain.com`
4. Click **Deploy**. Your site is now live on Vercel's global Edge CDN.
