# Shree Sai Suppliers

Public-facing business website for **Shree Sai Suppliers** — a construction material supplier based in Chakan, Pune, Maharashtra.

## Live Website

**https://yogipowar.github.io/shree-sai-suppliers/**

## Tech Stack

- React.js + Vite
- JavaScript
- React Router DOM
- CSS (variables + modular component/page styles)
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── components/     # Reusable UI (Header, Footer, cards, CTA, FAB)
├── pages/          # Home, About, Materials, Services, Why Choose Us, Contact
├── data/           # Materials, services, testimonials
├── constants/      # Centralized business info
├── routes/         # App routing
└── styles/         # Global CSS, variables, responsive rules
```

## Business Details

All contact details, GSTIN, address, and leadership names live in `src/constants/business.js`. Update that file to change site-wide information.

## Notes

- Contact form uses client-side validation (ready to connect to a backend or email service).
- Map embed URL is a placeholder in `business.js` — replace with the exact Google Maps embed when available.
- Material/service images use Unsplash placeholders and can be swapped for local assets under `src/assets/images/`.
- Deployed via GitHub Pages from the `master`/`main` branch using GitHub Actions.
