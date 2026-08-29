# CCAO-F Study Guide

A static study app for the **Claude Certified Associate — Foundations** exam.

## Contents

| Page | Purpose |
|---|---|
| `index.html` | Domain overview across all 7 domains |
| `learn.html` | Index of all 30 lessons |
| `lesson.html` | Individual lesson reader |
| `domain.html` | Per-domain breakdown |
| `exam.html` | Practice papers |
| `resources.html` | Reference links and further reading |

Lesson content and question banks live in `assets/` (`lessons-d1..d7.js`, `bank-d1..d7.js`),
with shared config in `curriculum.js` and `data.js`.

## Running locally

No build step — it's plain HTML/CSS/JS. Serve the folder over HTTP:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deployment

Published with GitHub Pages from the `main` branch.
