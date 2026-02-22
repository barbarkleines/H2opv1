# Content Editing Map 🗺️

Quick reference guide for editing your H₂OP landing page content on GitHub.

## 🎯 Quick Edits (Use This First!)

**File:** `/src/app/content/config.ts`

This file contains most of your text content in one place:

```ts
export const siteContent = {
  meta: { ... },        // Page title, description
  hero: { ... },        // Main headline, subheadline
  features: { ... },    // 4 feature cards
  story: { ... },       // Brand story paragraphs
  lifestyle: { ... },   // 3 lifestyle moments
  cta: { ... },         // Call-to-action text
}
```

**To edit:** Open this file on GitHub, make changes, commit. Done! ✅

---

## 📝 Detailed Editing Guide

### 1. Hero Section (Main Banner)

**What you see:**
- Large headline: "Join the Revolution"
- Subheadline about fizzy hoppy goodness
- Statistics (0% Alcohol, etc.)

**Where to edit:**

**Option A - Content File (Easiest):**
```
File: /src/app/content/config.ts
Section: siteContent.hero
```

**Option B - Component (Advanced):**
```
File: /src/app/components/Hero.tsx
Lines: Look for <h1> and <p> tags
```

**What to change:**
- `headline`: Main title text
- `subheadline`: Supporting headline
- `description`: Paragraph below headlines
- `stats`: The 4 number boxes (0% Alcohol, etc.)

---

### 2. Features Section

**What you see:**
- 4 cards with icons
- "0% Alcohol", "No Gluten", "Zero Calories", "Made in Germany"

**Where to edit:**

**Option A:**
```
File: /src/app/content/config.ts
Section: siteContent.features.items
```

**Option B:**
```
File: /src/app/components/Features.tsx
Array: features = [...]
```

**What to change:**
- `title`: Feature headline
- `description`: Feature description text
- `icon`: Icon name (from lucide-react)

---

### 3. Story Section

**What you see:**
- Brand story paragraphs
- "Our Story" headline

**Where to edit:**

**Option A:**
```
File: /src/app/content/config.ts
Section: siteContent.story
```

**Option B:**
```
File: /src/app/components/Story.tsx
Const: storyContent
```

**What to change:**
- `sectionTitle`: "Our Story"
- `paragraphs`: Array of paragraph strings

---

### 4. Lifestyle Section

**What you see:**
- 3 image cards
- "Solo Refresh", "Brunch Vibes", "Happy Hour"

**Where to edit:**

**Option A:**
```
File: /src/app/content/config.ts
Section: siteContent.lifestyle.moments
```

**Option B:**
```
File: /src/app/components/Lifestyle.tsx
Array: lifestyleMoments
```

**What to change:**
- `title`: Card headline
- `description`: Card description
- `imageQuery`: Changes the image (uses Unsplash)

---

### 5. Call-to-Action (CTA)

**What you see:**
- "Ready to Join the Revolution?"
- Large button

**Where to edit:**

**Option A:**
```
File: /src/app/content/config.ts
Section: siteContent.cta
```

**Option B:**
```
File: /src/app/components/CTA.tsx
Const: ctaContent
```

**What to change:**
- `headline`: Main CTA text
- `buttonText`: Button label
- `buttonLink`: Where the button goes

---

### 6. Navigation Menu

**What you see:**
- Top menu bar
- "H₂OP" logo
- Links to sections

**Where to edit:**

**Option A:**
```
File: /src/app/content/config.ts
Section: siteContent.navigation
```

**Option B:**
```
File: /src/app/components/Navigation.tsx
Array: navLinks
```

**What to change:**
- `links`: Navigation menu items
- `ctaButton`: Button text

---

### 7. SEO & Meta Tags

**What you see:**
- Page title (browser tab)
- Preview when shared on social media
- Search engine description

**Where to edit:**

**Option A:**
```
File: /src/app/content/config.ts
Section: siteContent.meta
```

**Option B:**
```
File: /src/app/components/SEO.tsx
All <meta> and <title> tags
```

**What to change:**
- `title`: Browser tab title
- `description`: Google search description
- `ogImage`: Social media preview image

---

## 🎨 Design Changes

### Colors

**File:** `/src/styles/theme.css`

```css
:root {
  --color-emerald-500: #10b981;  /* Primary green */
  --color-amber-400: #fbbf24;    /* Citrus yellow */
  --color-cyan-500: #06b6d4;     /* Aqua accent */
  /* ... more colors */
}
```

### Fonts

**File:** `/src/styles/fonts.css`

Add Google Fonts imports here:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

Then use in `/src/styles/theme.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

---

## 🖼️ Images

### Current Images

All images are loaded from Unsplash dynamically:

**To change an image:**

1. **Option A - Use Different Unsplash Image:**
   - Edit the `imageQuery` in the content config
   - Example: `"tropical drink refreshing"` → `"sparkling water glass"`

2. **Option B - Upload Your Own:**
   - Add image to `/public/images/` folder
   - Reference in component: `<img src="/images/your-image.jpg" />`

### Component Locations:
- Hero background: `/src/app/components/Hero.tsx`
- Lifestyle cards: `/src/app/components/Lifestyle.tsx`

---

## 🚀 Quick Examples

### Example 1: Change Main Headline

1. Open `/src/app/content/config.ts`
2. Find:
   ```ts
   hero: {
     headline: "Join the Revolution",
   ```
3. Change to:
   ```ts
   hero: {
     headline: "Welcome to H₂OP",
   ```
4. Commit changes
5. Wait 2 minutes for rebuild ✅

### Example 2: Add a New Feature

1. Open `/src/app/content/config.ts`
2. Find `features.items` array
3. Add a new object:
   ```ts
   {
     title: "Vegan Friendly",
     description: "100% plant-based ingredients",
     icon: "Leaf",
   }
   ```
4. Commit ✅

### Example 3: Change Button Text

1. Open `/src/app/content/config.ts`
2. Find:
   ```ts
   cta: {
     buttonText: "Get H₂OP Now",
   ```
3. Change to:
   ```ts
   cta: {
     buttonText: "Order Now",
   ```
4. Commit ✅

---

## 🔧 Advanced: Component Files

If you need more control, edit the component files directly:

| Component | File Path |
|-----------|-----------|
| Hero | `/src/app/components/Hero.tsx` |
| Features | `/src/app/components/Features.tsx` |
| Story | `/src/app/components/Story.tsx` |
| Lifestyle | `/src/app/components/Lifestyle.tsx` |
| CTA | `/src/app/components/CTA.tsx` |
| Navigation | `/src/app/components/Navigation.tsx` |
| SEO | `/src/app/components/SEO.tsx` |

---

## 📱 Testing Your Changes

1. Make edits on GitHub
2. Commit changes
3. Go to **Actions** tab
4. Watch the deployment (takes 1-2 min)
5. Visit your site URL
6. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

---

## 🆘 Need Help?

**Common Issues:**

- **Change not showing?** → Hard refresh browser
- **Build failed?** → Check Actions tab for error logs
- **Syntax error?** → Make sure you didn't delete any commas or braces
- **Image broken?** → Check the image URL or query

**Full Guides:**
- `GITHUB-SETUP.md` - Initial setup
- `GITHUB-DEPLOYMENT-GUIDE.md` - Detailed deployment info

---

**Pro Tip:** Edit the `/src/app/content/config.ts` file for 90% of content changes. Only touch component files for layout/structure changes.
