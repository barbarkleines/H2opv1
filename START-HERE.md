# 🎯 START HERE - H₂OP Landing Page

## Your Website is Blank? Fix It in 3 Steps! 🚨

### Step 1: Find Your Repo Name
Look at your GitHub URL:
```
https://github.com/username/repo-name
                            ^^^^^^^^^
                            Copy this!
```

### Step 2: Update Base Path
1. Open **`vite.config.ts`** on GitHub
2. Click the **✏️ pencil icon** to edit
3. Change line 8 from:
   ```ts
   base: process.env.GITHUB_ACTIONS ? '/' : '/',
   ```
   To:
   ```ts
   base: '/your-repo-name/',
   ```
   (Replace `your-repo-name` with your actual repo name!)

4. Click **Commit changes**

### Step 3: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Click **Save**

### Step 4: Done! 🎉
- Go to **Actions** tab
- Wait 2 minutes for green checkmark ✅
- Visit: `https://username.github.io/repo-name/`
- Hard refresh if needed: `Ctrl+Shift+R` (Win) or `Cmd+Shift+R` (Mac)

---

## Now You Can Edit! ✏️

### Quick Edits

**Change main headline:**
1. Open `/src/app/components/Hero.tsx`
2. Find `"Join the Revolution"` (line 53)
3. Change to your text
4. Commit → Wait 2 mins → Refresh site ✅

**Change button text:**
1. Open `/src/app/components/CTA.tsx`
2. Find the button text
3. Change it
4. Commit ✅

---

## 📚 Full Documentation

We've created comprehensive guides for you:

### Essential Reading
1. **`QUICK-START.md`** - Detailed fix for blank page
2. **`CONTENT-EDITING-MAP.md`** - What to edit where
3. **`EDIT-CHEAT-SHEET.md`** - Copy-paste code examples

### Reference Docs
4. **`README.md`** - Complete project overview
5. **`EDITING-WORKFLOW.md`** - How changes work
6. **`GITHUB-SETUP.md`** - Deployment guide
7. **`DOCS-INDEX.md`** - Navigate all docs

### Open `DOCS-INDEX.md` for the complete documentation map!

---

## ⚡ Common Tasks

| Task | File to Edit |
|------|--------------|
| Change headline | `/src/app/components/Hero.tsx` |
| Update features | `/src/app/components/Features.tsx` |
| Edit story | `/src/app/components/Story.tsx` |
| Change colors | `/src/styles/theme.css` |
| Update SEO | `/src/app/components/SEO.tsx` |

---

## 🆘 Help!

**Page still blank?**
→ Read `QUICK-START.md`

**Don't know what to edit?**
→ Read `CONTENT-EDITING-MAP.md`

**Need code examples?**
→ Read `EDIT-CHEAT-SHEET.md`

**Want to understand everything?**
→ Read `README.md`

---

## ✅ Checklist

Setup:
- [ ] Updated base path in `vite.config.ts`
- [ ] Enabled GitHub Pages (Settings → Pages → GitHub Actions)
- [ ] Site is live and working

First Edit:
- [ ] Made a simple text change
- [ ] Committed the change
- [ ] Waited for Actions to complete
- [ ] Verified change on live site

Now You're Ready:
- [ ] Bookmarked `CONTENT-EDITING-MAP.md`
- [ ] Bookmarked `EDIT-CHEAT-SHEET.md`
- [ ] Read `README.md` overview

---

**You're all set! Happy editing! 🚀**

Need more help? Open **`DOCS-INDEX.md`** to find the right guide.
