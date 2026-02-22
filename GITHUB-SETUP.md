# Quick GitHub Pages Setup

## Step-by-Step Setup (5 minutes)

### 1. Update Base Path (IMPORTANT!)

Open `vite.config.ts` and update line 8:

```ts
// If your repo is: https://github.com/username/h2op-landing
base: '/h2op-landing/',

// If your repo is: https://github.com/username/username.github.io
base: '/',
```

Replace `h2op-landing` with **your actual repository name**.

### 2. Commit All Files

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 4. Wait for Deployment

- Go to the **Actions** tab
- Watch the deployment workflow run (takes 1-2 minutes)
- Once complete, your site will be live at:
  - `https://username.github.io/repo-name/`

## How to Edit Content

All content is in these files:

```
/src/app/components/
├── Hero.tsx          ← Main headline "Join the Revolution"
├── Features.tsx      ← Product features (0% alcohol, etc.)
├── Story.tsx         ← Brand story section
├── Lifestyle.tsx     ← Lifestyle imagery section
├── CTA.tsx           ← Call-to-action button
├── Navigation.tsx    ← Top navigation menu
└── SEO.tsx           ← Page title & meta tags
```

### To Edit:

1. Click the file on GitHub
2. Click the **pencil icon** (✏️) to edit
3. Make your changes
4. Click **Commit changes**
5. Wait 1-2 minutes for automatic rebuild

### Example: Change the Main Headline

1. Open `/src/app/components/Hero.tsx`
2. Find the line with `"Join the Revolution"`
3. Change it to your new headline
4. Commit
5. Done! 🎉

## Troubleshooting

### Page is still blank?

**Check the base path:**
- The `base` in `vite.config.ts` must exactly match your repo name
- Include the leading and trailing slashes: `/repo-name/`

**Example:**
```
Repo URL: https://github.com/myname/h2op-website
Correct:  base: '/h2op-website/'
Wrong:    base: '/h2op/' or base: 'h2op-website'
```

**Hard refresh your browser:**
- Chrome/Edge: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Firefox: `Ctrl + F5` or `Cmd + Shift + R`

**Check the Actions tab:**
- Look for red X marks indicating failed builds
- Click into the failed workflow to see error logs

### Images not loading?

- Make sure images are in the `/public` folder
- Or use Unsplash URLs (already configured in components)
- Reference public images as: `/image.jpg` (not `./public/image.jpg`)

### Build errors?

Check the Actions logs for specific error messages. Common issues:
- TypeScript errors (missing types)
- Import errors (wrong file paths)
- Missing dependencies (run `pnpm install` locally)

## Making Updates Without Code

For a visual, no-code editing experience:

**Option 1: Use GitHub's Web Editor**
- Press `.` (period key) while viewing your repo
- Opens VS Code in the browser
- Edit files visually
- Commit when done

**Option 2: Add a CMS**
- [Tina CMS](https://tina.io/) - Works directly with GitHub
- [Decap CMS](https://decapcms.org/) - Free, open-source
- [Sanity.io](https://www.sanity.io/) - Headless CMS

## Need Help?

Read the full guide: `GITHUB-DEPLOYMENT-GUIDE.md`
