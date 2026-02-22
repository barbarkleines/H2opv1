# ⚡ Quick Start - Fix Blank Page NOW

Your GitHub Pages site is blank because it needs a base path configuration. Follow these steps:

## Step 1️⃣: Find Your Repository Name

Look at your GitHub URL:
```
https://github.com/YourUsername/YourRepoName
                                 ^^^^^^^^^^^^
                                 This is your repo name
```

## Step 2️⃣: Update vite.config.ts

1. Open the file `vite.config.ts` on GitHub
2. Click the pencil icon ✏️ to edit
3. Find line 8 that says:
   ```ts
   base: process.env.GITHUB_ACTIONS ? '/' : '/',
   ```

4. Replace with:
   ```ts
   base: '/YourRepoName/',
   ```
   
   **⚠️ IMPORTANT:** 
   - Replace `YourRepoName` with your actual repository name
   - Keep the slashes: `/` at start AND end
   - Example: `base: '/h2op-landing/',`

5. Click **Commit changes**

## Step 3️⃣: Enable GitHub Pages

1. Go to your repo → **Settings** tab
2. Click **Pages** in left sidebar
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

## Step 4️⃣: Wait for Deployment

1. Go to **Actions** tab
2. You'll see a workflow running (yellow dot)
3. Wait 1-2 minutes for green checkmark ✅
4. Your site is live!

## Step 5️⃣: Visit Your Site

Your URL will be:
```
https://YourUsername.github.io/YourRepoName/
```

**⚠️ If still blank:**
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Double-check the base path matches your repo name EXACTLY
- Check for typos (case-sensitive!)

---

## ✏️ Now You Can Edit!

### Simple Text Changes

**To change the main headline:**

1. Open `/src/app/components/Hero.tsx`
2. Click pencil icon ✏️
3. Find line 53: `Join the Revolution`
4. Change to your text
5. Commit
6. Wait 1-2 minutes
7. Refresh your site ✅

### Other Quick Edits

| What | File | What to Find |
|------|------|-------------|
| Hero headline | `Hero.tsx` | "Join the Revolution" |
| Product features | `Features.tsx` | "0% Alcohol" section |
| Story text | `Story.tsx` | Paragraph text |
| Button text | `CTA.tsx` | Button labels |
| Page title | `SEO.tsx` | `<title>` tag |

---

## 📚 Full Guides

- **Detailed setup:** `GITHUB-SETUP.md`
- **Content editing:** `CONTENT-EDITING-MAP.md`
- **Troubleshooting:** `GITHUB-DEPLOYMENT-GUIDE.md`
- **Overview:** `README.md`

---

## 🔥 Real-World Example

**Repository:** `h2op-landing`
**Username:** `johndoe`

### In vite.config.ts:
```ts
base: '/h2op-landing/',  // ✅ Correct
```

NOT:
```ts
base: '/h2op/',           // ❌ Wrong - doesn't match repo
base: 'h2op-landing',     // ❌ Wrong - missing slashes
base: '/h2op-landing',    // ❌ Wrong - missing trailing slash
```

### Site URL will be:
```
https://johndoe.github.io/h2op-landing/
```

---

That's it! Three steps and you're live. 🚀
