# Yi Yang academic website

This repository contains the source for Yi Yang's academic website, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll template and deployed with GitHub Pages.

## Local preview

```bash
bundle install
npm ci
bundle exec jekyll serve
```

Open `http://localhost:4000/yiyangphd.github.io/`.

## Deployment

Pushing to `main` runs the **Deploy site** GitHub Actions workflow. The workflow builds the site and publishes the generated files to the `gh-pages` branch. In the repository's Pages settings, select **Deploy from a branch**, `gh-pages`, and `/ (root)`.
