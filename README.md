# SQL-IT-Tech Solutions Website

GitHub Pages-ready Vite + React + Tailwind CSS project for the SQL-IT-Tech Solutions LLC consulting website.

## Stack

- Vite
- React
- Tailwind CSS (via `@tailwindcss/vite`)
- GitHub Actions deployment to GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository, for example:
   `sql-it-techsolutions-website`
2. Upload all files from this project.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main`.
6. The included workflow at `.github/workflows/deploy.yml` will build and publish the site.

## Custom domain

This project includes `public/CNAME` configured for:

```text
sql-it-techsolutions.com
```

In GoDaddy DNS, point your domain to GitHub Pages after the site is deployed.

For the apex domain (`sql-it-techsolutions.com`), GitHub Pages documents these `A` records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

For `www`, create a `CNAME` pointing to:

```text
lachungo.github.io
```

## Notes

- The site is set up to work cleanly with your custom domain.
- Update the video placeholders with embedded YouTube or Vimeo if desired.
- Add sanitized screenshots or a professional headshot to strengthen the portfolio.
