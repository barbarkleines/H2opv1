# GitHub Deployment & Editing Guide for H₂OP Landing Page

## Why the Page Looks Blank

Your page appears blank because GitHub Pages requires:
1. A built version of your React app (not just source code)
2. Proper base path configuration
3. Correct file structure

## Option 1: Deploy with GitHub Actions (Recommended)

This automatically builds and deploys your site whenever you push changes.

### Setup Steps:

1. **Update `vite.config.ts`** - Add base path for your repository:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/', // Replace with your actual repo name
     // ... rest of config
   })
   ```

2. **Create GitHub Actions Workflow** - Create `.github/workflows/deploy.yml` in your repo:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ['main']
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             
         - name: Setup pnpm
           uses: pnpm/action-setup@v3
           with:
             version: 8
             
         - name: Install dependencies
           run: pnpm install
           
         - name: Build
           run: pnpm build
           
         - name: Setup Pages
           uses: actions/configure-pages@v4
           
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'
             
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

3. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Source: "GitHub Actions"
   - Save

4. **Push Changes** - Commit and push your workflow file

## Option 2: Manual Build & Deploy

If you prefer to build locally:

1. **Install dependencies locally**:
   ```bash
   npm install -g pnpm
   pnpm install
   ```

2. **Update `vite.config.ts`** with the base path (see above)

3. **Build the site**:
   ```bash
   pnpm build
   ```

4. **Deploy the `dist` folder**:
   - Option A: Push the `dist` folder to a `gh-pages` branch
   - Option B: Use a tool like `gh-pages`: `npx gh-pages -d dist`

## How to Edit Content on GitHub

Since this is a React application, content is embedded in component files. To edit:

### 1. **Edit Text Content**

Navigate to the component file and edit the JSX:

**Headlines & Main Text:**
- Hero section: `/src/app/components/Hero.tsx`
- Features: `/src/app/components/Features.tsx`
- Story: `/src/app/components/Story.tsx`
- Lifestyle: `/src/app/components/Lifestyle.tsx`
- CTA: `/src/app/components/CTA.tsx`
- Navigation: `/src/app/components/Navigation.tsx`

**Example** - To change the hero headline:
1. Open `/src/app/components/Hero.tsx` on GitHub
2. Click the pencil icon to edit
3. Find the text you want to change
4. Commit the changes
5. The site will rebuild automatically (if using GitHub Actions)

### 2. **Edit SEO Metadata**

Open `/src/app/components/SEO.tsx` to edit:
- Page title
- Meta descriptions
- Open Graph tags
- Twitter Card data

### 3. **Edit Images**

To change images:
1. Open the component file
2. Find the `unsplash` URL or `ImageWithFallback` component
3. Replace with a new image URL or upload to GitHub and reference it

### 4. **Edit Styles**

- Colors & design tokens: `/src/styles/theme.css`
- Global styles: `/src/styles/index.css`
- Tailwind utilities: Edit className props in components

## Quick Reference: Common Edits

| What to Edit | File | Line to Look For |
|--------------|------|------------------|
| Main headline | `/src/app/components/Hero.tsx` | "Join the Revolution" |
| Product tagline | `/src/app/components/Hero.tsx` | "Das Hopfenwasser" |
| Features list | `/src/app/components/Features.tsx` | Features array |
| Brand story | `/src/app/components/Story.tsx` | Paragraph text |
| CTA button text | `/src/app/components/CTA.tsx` | Button label |
| Navigation links | `/src/app/components/Navigation.tsx` | Nav items |
| Page title | `/src/app/components/SEO.tsx` | `<title>` tag |

## Testing Your Changes

After making edits:
1. **With GitHub Actions**: Just push - it auto-builds
2. **Manual**: Run `pnpm build` locally first to check for errors
3. Wait 1-2 minutes for deployment
4. Visit `https://your-username.github.io/your-repo-name/`

## Troubleshooting

**Still blank after deployment?**
- Check browser console (F12) for errors
- Verify the base path in `vite.config.ts` matches your repo name
- Make sure `.nojekyll` file exists in the `public` folder
- Check GitHub Actions logs for build errors

**Content not updating?**
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Wait a few minutes for GitHub Pages to update

**Build errors?**
- Check GitHub Actions logs
- Look for TypeScript or import errors
- Ensure all dependencies are in `package.json`

## Making It Truly "Editable" (Advanced)

For a real CMS-like editing experience where non-developers can edit:

1. **Use a headless CMS**:
   - Sanity.io
   - Contentful
   - Strapi
   - Payload CMS

2. **Use a database** (like Supabase) to store content

3. **GitHub-based CMS**:
   - Netlify CMS
   - Decap CMS
   - Tina CMS

These tools provide visual editors that write to GitHub, so you can edit without touching code.

## Need Help?

- React Documentation: https://react.dev
- Vite Documentation: https://vitejs.dev
- GitHub Pages Guide: https://docs.github.com/en/pages
