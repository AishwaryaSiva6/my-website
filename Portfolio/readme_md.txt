# Aishwarya Sivakumar — Portfolio

Personal portfolio website built with plain HTML and CSS. No frameworks, no build tools — just copy the files and publish.

---

## File structure

```
portfolio/
├── index.html          ← Homepage
├── projects.html       ← All projects
├── internships.html    ← SharkNinja co-op + skills
├── photography.html    ← Photo / film grid
├── blog.html           ← Blog listing
├── contact.html        ← Contact form + links
├── style.css           ← Shared stylesheet (all pages use this)
├── nav.js              ← Shared nav injected on every page
├── images/             ← Create this folder, put your photos here
│   └── aishwarya.jpg   ← Your hero photo
└── README.md           ← This file
```

---

## How to add your photo

In `index.html`, find this comment:

```html
<!-- REPLACE THIS with your photo: -->
<img src="images/aishwarya.jpg" alt="Aishwarya Sivakumar">
```

Replace the `<div class="hero-photo-ph">🌿</div>` line with the `<img>` tag above.
Put your photo file inside the `images/` folder.

---

## How to add your photography

In `photography.html`, each `.photo-item` div has an emoji placeholder.
Replace the emoji with an `<img>` tag:

```html
<!-- Before -->
<div class="photo-item tall" style="background:...">
  🌃
  <div class="photo-overlay"><span>Caption</span></div>
</div>

<!-- After -->
<div class="photo-item tall">
  <img src="images/boston-street.jpg" alt="Street photography, Boston">
  <div class="photo-overlay"><span>Street photography · Boston</span></div>
</div>
```

---

## How to update your links

In `contact.html`, update these three lines:

```html
<a href="mailto:YOUR-EMAIL-HERE" class="cl-pink">Send an email</a>
<a href="https://linkedin.com/in/YOUR-HANDLE" ...>LinkedIn</a>
<a href="https://instagram.com/YOUR-HANDLE" ...>Instagram</a>
```

Also update the resume download link when you have it hosted.

---

## Publishing to GitHub Pages — step by step

### Step 1 — Create a GitHub account
Go to github.com and sign up if you don't have an account.

### Step 2 — Create a new repository
1. Click the **+** icon in the top right and choose "New repository"
2. Name it exactly: `YOUR-USERNAME.github.io`
   (e.g. if your username is `aishwaryasivakumar`, name it `aishwaryasivakumar.github.io`)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
Option A — Upload via the GitHub website (easiest):
1. Open your new repository
2. Click **Add file** then **Upload files**
3. Drag all your files into the box:
   - `index.html`
   - `projects.html`
   - `internships.html`
   - `photography.html`
   - `blog.html`
   - `contact.html`
   - `style.css`
   - `nav.js`
   - Your `images/` folder
4. Scroll down, add a commit message like "Initial portfolio upload"
5. Click **Commit changes**

Option B — Using Git (if you're comfortable with command line):
```bash
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. In your repository, click **Settings**
2. In the left sidebar click **Pages**
3. Under "Source", select **Deploy from a branch**
4. Set Branch to **main** and folder to **/ (root)**
5. Click **Save**

### Step 5 — Your site is live
Wait 1-2 minutes, then visit:
```
https://YOUR-USERNAME.github.io
```

---

## How to connect a custom domain (e.g. aishwaryasivakumar.com)

### Step 1 — Buy your domain
Purchase from Namecheap, Google Domains, or Squarespace Domains.

### Step 2 — Add a CNAME file to your repository
Create a file named exactly `CNAME` (no extension) containing only your domain:
```
aishwaryasivakumar.com
```
Upload it to your GitHub repository root.

### Step 3 — Update DNS settings with your domain registrar
Add these DNS records in your domain registrar's dashboard:

**A records** (point to GitHub's IPs):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME record**:
```
www → YOUR-USERNAME.github.io
```

### Step 4 — Set custom domain in GitHub Pages settings
1. Go to Settings → Pages
2. Under "Custom domain", enter your domain (e.g. `aishwaryasivakumar.com`)
3. Click Save
4. Check "Enforce HTTPS" once it becomes available (usually within 24 hours)

DNS changes take 24-48 hours to propagate globally.

---

## Making changes after publishing

Whenever you update a file:
1. Edit it locally
2. Go to the file in your GitHub repository
3. Click the pencil (edit) icon
4. Make your changes
5. Commit

Or if using Git:
```bash
git add .
git commit -m "Update about me copy"
git push
```

GitHub Pages will automatically redeploy within a minute or two.

---

## Questions?
Contact: aishwarya@northeastern.edu
