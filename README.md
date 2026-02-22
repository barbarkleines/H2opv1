# H₂OP – Das Hopfenwasser Landing Page

Modern, elegant landing page for H₂OP hop water brand. Built with React, Tailwind CSS, and Motion (Framer Motion).

## 🚀 Quick Start for GitHub Pages

**Your site is blank?** Follow these 3 steps:

### 1. Update the Base Path

Open `vite.config.ts` and change line 8:

```ts
// Replace 'your-repo-name' with your actual GitHub repository name
base: '/your-repo-name/',
```

For example, if your repo is `https://github.com/username/h2op-landing`, use:
```ts
base: '/h2op-landing/',
```

### 2. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

### 3. Push and Deploy

```bash
git add .
git commit -m "Configure GitHub Pages"
git push origin main
```

Your site will be live at `https://username.github.io/your-repo-name/` in 2 minutes!

---

## ✏️ How to Edit Content

### Method 1: Direct Component Editing (Current Setup)

Each component file contains its content. Edit the `.tsx` files directly:

| What to Edit | File | What You'll Find |
|--------------|------|------------------|
| Main headline | `/src/app/components/Hero.tsx` | "Join the Revolution" |
| Product features | `/src/app/components/Features.tsx` | 0% Alcohol, etc. |
| Brand story | `/src/app/components/Story.tsx` | Story paragraphs |
| Lifestyle moments | `/src/app/components/Lifestyle.tsx` | Solo, Brunch, Happy Hour |
| Call-to-action | `/src/app/components/CTA.tsx` | Final CTA section |
| Navigation | `/src/app/components/Navigation.tsx` | Top menu |
| SEO metadata | `/src/app/components/SEO.tsx` | Page title, description |

**To edit:**
1. Click the file on GitHub
2. Click the pencil icon (✏️)
3. Make your changes
4. Commit
5. Wait 1-2 minutes for auto-rebuild

### Method 2: Centralized Config (Alternative)

*(Not currently active, but available if you want to refactor)*

Edit `/src/app/content/config.ts` to change most text content in one file. You'd need to update components to import from this file.

---

## 📚 Documentation Files

- **`GITHUB-SETUP.md`** ← Start here! Quick 5-minute setup guide
- **`CONTENT-EDITING-MAP.md`** ← Visual map of where everything is
- **`GITHUB-DEPLOYMENT-GUIDE.md`** ← Detailed deployment & troubleshooting
- **`SEO-DOCUMENTATION.md`** ← SEO features explanation
- **`ATTRIBUTIONS.md`** ← Image and asset credits

---

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **GitHub Actions** - Auto-deployment

---

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── public/
│   ├── robots.txt              # SEO robots file
│   ├── sitemap.xml             # SEO sitemap
│   ├── site.webmanifest        # PWA manifest
│   └── .nojekyll               # GitHub Pages config
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Hero.tsx        # Main hero section
│   │   │   ├── Features.tsx    # Features grid
│   │   │   ├── Story.tsx       # Brand story
│   │   │   ├── Lifestyle.tsx   # Lifestyle moments
│   │   │   ├── CTA.tsx         # Call-to-action
│   │   │   ├── Navigation.tsx  # Top navigation
│   │   │   └── SEO.tsx         # Meta tags & SEO
│   │   ├── content/
│   │   │   └── config.ts       # Content configuration (optional)
│   │   └── App.tsx             # Main app component
│   └── styles/
│       ├── theme.css           # Design tokens & colors
│       ├── fonts.css           # Font imports
│       └── index.css           # Global styles
├── vite.config.ts              # Build configuration
└── package.json                # Dependencies
```

---

## 🎨 Customization

### Colors

Edit `/src/styles/theme.css`:

```css
:root {
  --color-emerald-500: #10b981;  /* Tropical green */
  --color-amber-400: #fbbf24;    /* Citrus yellow */
  --color-cyan-500: #06b6d4;     /* Aqua accent */
}
```

### Fonts

Add Google Fonts to `/src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

Then update in `/src/styles/theme.css`:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Images

All images currently use Unsplash. To use your own:

1. Add images to `/public/images/`
2. Reference: `<img src="/images/your-image.jpg" />`

Or update Unsplash queries in component files.

---

## 🧪 Local Development

Want to test changes locally before pushing?

### Prerequisites
- Node.js 20+
- pnpm (or npm)

### Setup

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Visit `http://localhost:5173`

### Build

```bash
# Create production build
pnpm build

# Preview production build
pnpm preview
```

---

## 🔍 SEO Features

This site includes comprehensive SEO optimization:

- ✅ Semantic HTML with proper heading hierarchy
- ✅ Meta descriptions and keywords
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Schema.org JSON-LD structured data
- ✅ Robots.txt
- ✅ Sitemap.xml
- ✅ PWA manifest
- ✅ Accessible ARIA labels

See `SEO-DOCUMENTATION.md` for details.

---

## 🚨 Troubleshooting

### Site is blank

**Most common cause:** Incorrect base path in `vite.config.ts`

**Fix:**
1. Check your repo name on GitHub
2. Update `base: '/exact-repo-name/'` in `vite.config.ts`
3. Make sure it has leading AND trailing slashes
4. Commit and push

### Changes not showing

1. Hard refresh: `Ctrl+Shift+R` (Win) or `Cmd+Shift+R` (Mac)
2. Check Actions tab for build errors
3. Wait 2-3 minutes for deployment
4. Clear browser cache

### Build failed

1. Go to **Actions** tab on GitHub
2. Click the failed workflow
3. Look for red error messages
4. Common issues:
   - Syntax error (missing comma, bracket)
   - Import path wrong
   - TypeScript type error

### Images not loading

- Images must be in `/public` folder
- Reference without "public": `/image.jpg` not `/public/image.jpg`
- Or use full Unsplash URLs

---

## 🎯 Common Edits (Examples)

### Change Main Headline

**File:** `/src/app/components/Hero.tsx`

Find line 53:
```tsx
Join the Revolution
```

Change to:
```tsx
Welcome to H₂OP
```

### Add a New Feature

**File:** `/src/app/components/Features.tsx`

Find the `features` array and add:
```tsx
{
  icon: Leaf,
  title: "Vegan Friendly",
  description: "100% plant-based ingredients."
}
```

### Change Button Text

**File:** `/src/app/components/CTA.tsx`

Find the button:
```tsx
<button>Get H₂OP Now</button>
```

Change to:
```tsx
<button>Order Now</button>
```

---

## 🌐 Going Live with Custom Domain

Once on GitHub Pages, you can add a custom domain:

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. Add a `CNAME` file to `/public` with your domain:
   ```
   www.h2op.com
   ```
3. Configure DNS with your registrar:
   - Add CNAME record pointing to `username.github.io`
4. In GitHub repo Settings → Pages, add custom domain
5. Enable "Enforce HTTPS"

---

## 📦 Adding New Features

### Install a Package

```bash
pnpm add package-name
```

### Add a New Component

1. Create file in `/src/app/components/NewComponent.tsx`
2. Export your component:
   ```tsx
   export function NewComponent() {
     return <div>...</div>
   }
   ```
3. Import in `/src/app/App.tsx`:
   ```tsx
   import { NewComponent } from "./components/NewComponent";
   ```
4. Add to JSX:
   ```tsx
   <NewComponent />
   ```

---

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion (Framer Motion)](https://motion.dev)
- [Vite](https://vitejs.dev)
- [GitHub Pages](https://docs.github.com/en/pages)

---

## 📄 License

This is your project! Feel free to customize and use it however you'd like.

---

## 🆘 Need Help?

1. Check `GITHUB-SETUP.md` for quick setup
2. Read `CONTENT-EDITING-MAP.md` for editing guide
3. See `GITHUB-DEPLOYMENT-GUIDE.md` for troubleshooting
4. Create an issue on GitHub (if public repo)

---

## 🎉 What's Next?

- [ ] Update base path in `vite.config.ts`
- [ ] Deploy to GitHub Pages
- [ ] Customize text content
- [ ] Add your own images
- [ ] Connect custom domain
- [ ] Add analytics (Google Analytics, Plausible)
- [ ] Set up contact form
- [ ] Add e-commerce integration

**Happy editing! 🚀**
