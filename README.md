# DASH Project Page

A lightweight static project page for the public arXiv version of:

**DASH: Dynamic Adversarial Scenario Generation with High-Risk Resampling from Policy Feedback for Closed-Loop Driving Training**

The site uses plain HTML, CSS, and a small JavaScript file. No build framework is required.

## Repository structure

```text
dash-project-page/
├── docs/
│   ├── index.html
│   ├── .nojekyll
│   └── assets/
│       ├── css/style.css
│       ├── js/main.js
│       ├── images/favicon.svg
│       ├── videos/
│       │   ├── scenario_logged.mp4
│       │   ├── scenario_generated.mp4
│       │   ├── policy_baseline.mp4
│       │   └── policy_risk_gated.mp4
│       └── papers/
│           ├── dash_arxiv.pdf
│           └── dash_supplement.pdf
└── README.md
```

## 1. Add the public paper files

Place the non-anonymous arXiv PDFs here:

```text
docs/assets/papers/dash_arxiv.pdf
docs/assets/papers/dash_supplement.pdf
```

Do not use the anonymous AAAI review PDF on the public page.

## 2. Add four short videos

Use only two paired examples:

```text
docs/assets/videos/scenario_logged.mp4
docs/assets/videos/scenario_generated.mp4
docs/assets/videos/policy_baseline.mp4
docs/assets/videos/policy_risk_gated.mp4
```

Recommended media settings:

- MP4 / H.264
- 720p or 960 px wide
- 15–24 fps
- muted, 6–15 seconds, seamless loop
- preferably below 8–12 MB per clip

Example FFmpeg command:

```bash
ffmpeg -i input.mp4 -vf "fps=20,scale=960:-2:flags=lanczos" -c:v libx264 -crf 24 -preset medium -movflags +faststart -pix_fmt yuv420p -an output.mp4
```

For a GIF source:

```bash
ffmpeg -i input.gif -vf "fps=20,scale=960:-2:flags=lanczos" -c:v libx264 -crf 24 -preset medium -movflags +faststart -pix_fmt yuv420p -an output.mp4
```

## 3. Update the placeholder links

Open `docs/index.html` and replace:

- `arXiv soon` with the final arXiv URL
- `Code soon` with the public code URL, only when the code is ready
- the BibTeX entry after the arXiv identifier is assigned

Do not write “submitted to AAAI-27,” “under review at AAAI,” or similar text on the public project page during review.

## 4. Preview locally

The simplest preview is to open `docs/index.html` in a browser. A local server is more reliable for video playback:

```bash
python -m http.server 8000 -d docs
```

Then open:

```text
http://localhost:8000
```

## 5. Create and publish the GitHub repository

### Command line

```bash
git init
git add .
git commit -m "Create DASH project page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dash-project-page.git
git push -u origin main
```

### GitHub Pages settings

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/docs**.
5. Save and wait for the deployment to finish.

The default URL will be:

```text
https://YOUR_USERNAME.github.io/dash-project-page/
```

## 6. AAAI anonymity rule for this workflow

Use two separate publication artifacts:

- **AAAI review package:** anonymous paper, anonymous supplement/media/code ZIP uploaded directly to OpenReview; no project-page URL.
- **Public arXiv package:** author names and affiliations are allowed; the public project page may be linked from the arXiv version, but it should not state that the work is submitted to AAAI during review.

## Final checks before publishing

- Title exactly matches the public paper.
- All numbers match the latest manuscript.
- No broken PDF or video links.
- No author identity appears in the AAAI review files.
- Public site has no “anonymous preview” wording.
- Only one method overview, two compact result tables, and two paired demos are shown.
- Videos are compressed and play on desktop and mobile.
