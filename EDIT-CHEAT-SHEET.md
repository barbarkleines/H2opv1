# 📋 Edit Cheat Sheet - Quick Reference

Copy-paste reference for the most common edits.

---

## 🎯 Most Common Edits

### 1. Main Headline

**File:** `/src/app/components/Hero.tsx`  
**Line:** ~53

**Find:**
```tsx
Join the Revolution
```

**Example change:**
```tsx
Welcome to H₂OP
```

---

### 2. Subheadline

**File:** `/src/app/components/Hero.tsx`  
**Line:** ~63

**Find:**
```tsx
Fizzy hoppy goodness for beer lovers
```

**Example change:**
```tsx
The refreshing alternative to beer
```

---

### 3. Call-to-Action Button

**File:** `/src/app/components/CTA.tsx`  
**Line:** Look for button text

**Find:**
```tsx
Get H₂OP Now
```

**Example change:**
```tsx
Order Now
```

---

### 4. Page Title (Browser Tab)

**File:** `/src/app/components/SEO.tsx`  
**Line:** Look for `<title>` tag

**Find:**
```tsx
<title>H₂OP – Das Hopfenwasser | Premium Alcohol-Free Hop Water from Germany</title>
```

**Example change:**
```tsx
<title>H₂OP - Premium Hop Water | Made in Germany</title>
```

---

### 5. Meta Description (Google Search)

**File:** `/src/app/components/SEO.tsx`  
**Line:** Look for meta description

**Find:**
```tsx
content="Join the revolution. H₂OP brings you fizzy, refreshing hop water with 0% alcohol..."
```

**Example change:**
```tsx
content="Premium alcohol-free hop water from Germany. Zero calories, zero gluten."
```

---

### 6. Feature Cards

**File:** `/src/app/components/Features.tsx`  
**Line:** Inside `features` array

**Find:**
```tsx
{
  icon: Droplet,
  title: "0% Alcohol",
  description: "All the flavor, none of the alcohol. Perfect for any time of day.",
}
```

**Example - Add New Feature:**
```tsx
{
  icon: Leaf,
  title: "Vegan Friendly",
  description: "100% plant-based ingredients. Good for you, good for the planet.",
}
```

---

### 7. Primary Color

**File:** `/src/styles/theme.css`  
**Line:** Look for `--color-emerald-`

**Find:**
```css
--color-emerald-500: #10b981;
--color-emerald-700: #047857;
```

**Example change (darker green):**
```css
--color-emerald-500: #059669;
--color-emerald-700: #065f46;
```

---

### 8. Story Text

**File:** `/src/app/components/Story.tsx`  
**Line:** Inside paragraph tags `<p>`

**Find:**
```tsx
<p className="...">
  For over two decades, we've mastered the art of brewing...
</p>
```

**Example change:**
```tsx
<p className="...">
  H₂OP was founded with a mission: create the world's best alcohol-free hop water.
</p>
```

---

### 9. Navigation Links

**File:** `/src/app/components/Navigation.tsx`  
**Line:** Look for `navLinks` array

**Find:**
```tsx
{ label: "Revolution", href: "#hero" },
{ label: "Why H₂OP", href: "#features" },
```

**Example - Add New Link:**
```tsx
{ label: "Shop", href: "#shop" },
```

---

### 10. Button Styles

**File:** Any component with buttons  
**Look for:** `className` on button elements

**Common button classes:**
```tsx
// Primary button (green)
className="px-8 py-4 bg-emerald-700 text-white rounded-full hover:bg-emerald-800"

// Secondary button (outlined)
className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full"
```

---

## 🎨 Color Reference

Copy these color codes for consistent styling:

```css
/* Primary Colors */
Tropical Green:  #10b981  (emerald-500)
Dark Green:      #047857  (emerald-700)
Citrus Yellow:   #fbbf24  (amber-400)
Aqua Accent:     #06b6d4  (cyan-500)

/* Neutral Colors */
White:           #ffffff
Sand/Cream:      #faf9f6
Light Gray:      #f3f4f6
Charcoal:        #374151
Deep Green:      #065f46
```

---

## 🔤 Font Reference

Current fonts in use:

```css
/* System font stack (default) */
font-family: system-ui, -apple-system, sans-serif;

/* To add custom fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

Add to `/src/styles/fonts.css`

---

## 📐 Spacing Reference

Tailwind spacing classes used throughout:

```tsx
/* Padding */
p-4   = 1rem (16px)
p-6   = 1.5rem (24px)
p-8   = 2rem (32px)
p-12  = 3rem (48px)

/* Margin */
m-4   = 1rem (16px)
m-6   = 1.5rem (24px)
m-8   = 2rem (32px)

/* Gap (flexbox/grid) */
gap-4  = 1rem (16px)
gap-6  = 1.5rem (24px)
gap-8  = 2rem (32px)
```

---

## 🖼️ Image Reference

### Current Image Sources

All images use Unsplash via search queries:

**To change Lifestyle images:**

**File:** `/src/app/components/Lifestyle.tsx`

```tsx
// Change the imageQuery
{
  title: "Solo Refresh",
  imageQuery: "person drinking refreshing beverage outdoors",  // 👈 Edit this
}
```

**Common Unsplash queries:**
- `"modern beverage glass table"`
- `"friends toasting drinks patio"`
- `"healthy lifestyle drink"`
- `"minimalist product photography"`
- `"tropical fresh drink"`

---

## 📱 Responsive Breakpoints

Used in Tailwind classes:

```tsx
/* Mobile first (default) */
className="text-2xl"           // All screens

/* Tablet and up */
className="md:text-3xl"        // 768px+

/* Desktop */
className="lg:text-4xl"        // 1024px+

/* Large desktop */
className="xl:text-5xl"        // 1280px+
```

---

## 🔗 Link Structure

**Internal navigation (smooth scroll):**
```tsx
<a href="#features">Why H₂OP</a>
```

**External links:**
```tsx
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit Site
</a>
```

---

## ⚡ Animation Timing

Using Motion (Framer Motion):

**Fade in:**
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
```

**Slide in from left:**
```tsx
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
```

**Floating effect:**
```tsx
animate={{ y: [0, -10, 0] }}
transition={{ duration: 3, repeat: Infinity }}
```

---

## 🎯 Icon Reference

Using Lucide React icons:

**Common icons used:**
```tsx
import { 
  Droplet,      // Water drop (used for 0% Alcohol)
  ShieldCheck,  // Shield (used for No Gluten)
  Zap,          // Lightning (used for Zero Calories)
  Award,        // Trophy (used for Made in Germany)
  Leaf,         // Leaf (for vegan/natural)
  Heart,        // Heart (for health)
  Star,         // Star (for premium)
  Check,        // Checkmark (for features)
} from "lucide-react";
```

**Browse all icons:** https://lucide.dev/icons

---

## 📋 Copy-Paste Templates

### Add a New Feature Card

```tsx
{
  icon: IconName,  // Import from lucide-react
  title: "Feature Title",
  description: "Feature description goes here.",
}
```

### Add a New Navigation Link

```tsx
{ label: "Link Text", href: "#section-id" }
```

### Add a New Lifestyle Moment

```tsx
{
  title: "Moment Title",
  description: "Moment description.",
  imageQuery: "unsplash search query"
}
```

### Add a New Section

```tsx
<section id="new-section" className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Section Title
    </h2>
    {/* Your content here */}
  </div>
</section>
```

---

## 🐛 Quick Fixes

### Text not updating?
```
Hard refresh: Ctrl+Shift+R (Win) or Cmd+Shift+R (Mac)
```

### Build failing with syntax error?
```
Check for:
- Missing commas
- Unclosed quotes
- Unmatched brackets/braces
```

### Color not changing?
```
Make sure you're editing:
1. /src/styles/theme.css (for CSS variables)
2. Component .tsx files (for Tailwind classes)
```

### Image not loading?
```
- Check Unsplash query spelling
- Try a different search term
- Images must be in /public folder if uploaded
```

---

## ⏱️ Time Estimates

**Simple text edit:** 2 minutes
- Edit file, commit, deploy

**Multiple text edits:** 5 minutes
- Edit multiple files, commit once, deploy

**Add new feature card:** 5 minutes
- Add to array, commit, deploy

**Color scheme change:** 10 minutes
- Update theme.css, check all components, commit, deploy

**Major content overhaul:** 30 minutes
- Edit multiple components, test, commit, deploy

**New section/component:** 1 hour
- Create component, add to App.tsx, style, test, commit, deploy

---

## 🎓 Quick Learning Path

**Day 1:** Learn text editing
- Change headlines
- Modify descriptions
- Update button text

**Day 2:** Learn structure editing
- Add/remove feature cards
- Modify navigation
- Update links

**Day 3:** Learn style editing
- Change colors
- Adjust spacing
- Modify fonts

**Day 4:** Learn layout editing
- Add new sections
- Rearrange components
- Responsive design

---

## 📞 Quick Help Decision Tree

**Is the page blank?**
→ Check `QUICK-START.md` - fix base path

**Want to change text?**
→ Edit component `.tsx` files directly

**Want to change colors?**
→ Edit `/src/styles/theme.css`

**Want to add feature?**
→ Edit arrays in component files

**Build is failing?**
→ Check Actions tab for error, fix syntax

**Need inspiration?**
→ Look at existing code and copy the pattern

---

**Print this page and keep it handy!** 📌
