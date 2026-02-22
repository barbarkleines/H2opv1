# 🔄 Editing Workflow - How Changes Work

## The Complete Cycle

```
┌─────────────────────────────────────────────────────────────┐
│                    YOU EDIT A FILE ON GITHUB                 │
│              (Click file → pencil icon → edit)               │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    COMMIT THE CHANGES                        │
│           (Add commit message → commit button)               │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────��───────────────────────────────────────┐
│              GITHUB ACTIONS AUTO-TRIGGERS                    │
│         (Check Actions tab - see yellow/green dot)           │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                  SITE BUILDS (1-2 mins)                      │
│              - Installs dependencies                         │
│              - Compiles React code                           │
│              - Creates optimized bundle                      │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│              DEPLOYS TO GITHUB PAGES                         │
│              Your site updates automatically!                │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                 VISIT YOUR SITE URL                          │
│        https://username.github.io/repo-name/                 │
│              (Hard refresh if needed)                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 📂 What Files to Edit

### Text Content Files (Most Common)

```
src/app/components/
│
├── Hero.tsx           👈 EDIT for main headline, subheadline
│   ├── "Join the Revolution"
│   ├── "Das Hopfenwasser"
│   └── Button text
│
├── Features.tsx       👈 EDIT for feature cards
│   ├── "0% Alcohol"
│   ├── "No Gluten"
│   ├── "Zero Calories"
│   └── "Made in Germany"
│
├── Story.tsx          👈 EDIT for brand story paragraphs
│   └── Full story text
│
├── Lifestyle.tsx      👈 EDIT for lifestyle moments
│   ├── "Solo Refresh"
│   ├── "Brunch Vibes"
│   └── "Happy Hour"
│
├── CTA.tsx            👈 EDIT for call-to-action
│   ├── Final headline
│   └── Button text
│
├── Navigation.tsx     👈 EDIT for top menu
│   ├── Logo text
│   └── Menu links
│
└── SEO.tsx            👈 EDIT for page title, meta tags
    ├── Browser tab title
    ├── Search description
    └── Social media previews
```

### Style Files

```
src/styles/
│
├── theme.css          👈 EDIT for colors, design tokens
│   ├── --color-emerald-500 (green)
│   ├── --color-amber-400 (yellow)
│   └── Other CSS variables
│
├── fonts.css          👈 EDIT to add Google Fonts
│   └── @import font URLs
│
└── index.css          👈 EDIT for global styles
    └── Base CSS rules
```

---

## 🎯 Edit Types & Where to Make Them

### Simple Text Change
**Example:** Change headline from "Join the Revolution" to "Welcome to H₂OP"

```
1. Open: /src/app/components/Hero.tsx
2. Find: "Join the Revolution" (around line 53)
3. Change to: "Welcome to H₂OP"
4. Commit
5. Done! ✅
```

### Add New Feature Card
**Example:** Add "Vegan Friendly" card

```
1. Open: /src/app/components/Features.tsx
2. Find the features array
3. Add:
   {
     icon: Leaf,
     title: "Vegan Friendly",
     description: "100% plant-based ingredients."
   }
4. Commit
5. Done! ✅
```

### Change Colors
**Example:** Make primary green darker

```
1. Open: /src/styles/theme.css
2. Find: --color-emerald-500: #10b981;
3. Change to: --color-emerald-700: #047857;
4. Commit
5. Done! ✅
```

### Change Button Text
**Example:** "Get H₂OP Now" → "Order Now"

```
1. Open: /src/app/components/CTA.tsx
2. Find: <button>Get H₂OP Now</button>
3. Change to: <button>Order Now</button>
4. Commit
5. Done! ✅
```

### Update SEO Title
**Example:** Change browser tab title

```
1. Open: /src/app/components/SEO.tsx
2. Find: <title>H₂OP – Das Hopfenwasser...</title>
3. Change text inside <title> tags
4. Commit
5. Done! ✅
```

---

## 🚦 Deployment Status

### How to Check Build Status

1. Go to **Actions** tab on GitHub
2. Look at the top workflow run:

**🟡 Yellow dot** = Building (in progress)
```
⏳ Wait 1-2 minutes
```

**✅ Green checkmark** = Success!
```
🎉 Your changes are live!
Visit your site URL
```

**❌ Red X** = Build failed
```
🔍 Click into it to see error
Usually a syntax error (typo, missing comma)
Fix and commit again
```

---

## ⚡ Speed Tips

### Batch Your Edits
Instead of committing after every change, edit multiple files then commit once.

**Slower:**
```
Edit Hero.tsx → Commit
Edit CTA.tsx → Commit
Edit SEO.tsx → Commit
= 3 builds (6 minutes total)
```

**Faster:**
```
Edit Hero.tsx
Edit CTA.tsx
Edit SEO.tsx
Commit all at once
= 1 build (2 minutes total)
```

### Use GitHub Web Editor
Press `.` (period key) when viewing your repo to open VS Code in browser:
- Better editing experience
- See all files at once
- Multi-file editing
- Syntax highlighting

---

## 🐛 Debugging Failed Builds

### Step 1: Find the Error
```
Actions tab → Click failed workflow → Click "build" job → Expand logs
```

### Step 2: Common Errors

**Error:** `Unexpected token`
```
Cause: Syntax error (missing comma, bracket, quote)
Fix: Check the file you edited for typos
```

**Error:** `Cannot find module`
```
Cause: Import path is wrong
Fix: Check file paths in import statements
```

**Error:** `Type error`
```
Cause: TypeScript type mismatch
Fix: Make sure you're not passing wrong data types
```

**Error:** `Build failed: command exited with code 1`
```
Cause: Various - check full error log
Fix: Look for red error messages above this line
```

### Step 3: How to Fix

1. Read the error message carefully
2. Note which file has the error
3. Open that file on GitHub
4. Look for the problem (usually near the line number shown)
5. Fix it
6. Commit again
7. Check Actions tab - should be green now ✅

---

## 📱 Testing Your Changes

### After Deployment

**1. Visit your site**
```
https://yourusername.github.io/your-repo-name/
```

**2. Hard refresh** (to bypass cache)
```
Windows: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

**3. Check browser console** (if something looks wrong)
```
Press F12 → Console tab → Look for errors
```

**4. Test on mobile** (if responsive design matters)
```
F12 → Device toolbar icon → Select mobile device
```

---

## 🎓 Learning Curve

### Difficulty Levels

**Easy** (5 mins to learn)
- ✅ Change text content
- ✅ Change button labels
- ✅ Edit headings
- ✅ Modify descriptions

**Medium** (15 mins to learn)
- ⚡ Add new feature cards
- ⚡ Change colors
- ⚡ Update SEO tags
- ⚡ Modify layouts

**Advanced** (1 hour to learn)
- 🔥 Add new components
- 🔥 Change animations
- 🔥 Modify structure
- 🔥 Add new pages

---

## ✅ Checklist Before Each Edit

Before editing:
- [ ] I know which file to edit
- [ ] I've read the current content
- [ ] I know what I want to change

While editing:
- [ ] I'm careful with quotes, commas, brackets
- [ ] I'm not deleting things I don't understand
- [ ] I'm keeping the HTML structure intact

After committing:
- [ ] I check the Actions tab
- [ ] I wait for green checkmark ✅
- [ ] I hard refresh my browser
- [ ] I verify the change appears

---

## 🆘 When to Ask for Help

**You can probably fix it yourself:**
- Text doesn't update (hard refresh)
- Color seems wrong (check theme.css)
- Button text didn't change (check CTA.tsx)

**You might need help:**
- Build keeps failing with same error
- Site is completely broken
- Changes work locally but not on GitHub
- JavaScript errors in console

**Definitely ask for help:**
- Can't access GitHub Pages settings
- Actions tab shows permission errors
- Domain configuration issues
- Need to add backend functionality

---

## 🎉 You're Ready!

You now understand:
1. ✅ Where content lives
2. ✅ How to edit files
3. ✅ How deployment works
4. ✅ How to check if it worked
5. ✅ How to debug errors

**Go forth and edit!** 🚀

---

**Next Steps:**
1. Read `QUICK-START.md` to fix blank page
2. Use `CONTENT-EDITING-MAP.md` as reference
3. Check `README.md` for full documentation
