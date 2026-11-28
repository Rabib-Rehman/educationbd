# EducationBd

University admission preparation platform for students in Bangladesh.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS. Deployed on Vercel.

## Run the project

You need Node.js 20.9 or newer.

```bash
npm install      # install packages (first time only)
npm run dev      # start the development site at http://localhost:3000
npm run build    # make a production build (run this before you push)
npm run lint     # check the code for mistakes
```

Environment variables: copy `.env.example` to `.env.local` and fill in the values. Never commit `.env.local`.

## Folder guide

```
app/               Pages and layouts. Each folder is one web address.
  design-system/   Preview of colors, text, buttons and forms (hidden in production)
components/
  ui/              Small reusable parts: Button, Input, Field, Card, Container, Logo
  layout/          Larger parts of the page frame: SiteHeader
lib/               Shared helpers: fonts, utilities, site facts
assets/fonts/      Font files stored in the project (no Google download needed)
public/            Files served as they are: logo, favicon
```

## Design system

See `app/globals.css` for all colors, text sizes, corners and shadows.
To see them on screen, run `npm run dev` and open `/design-system`.

- Colors come from the logo: navy `#27254C`, periwinkle `#9FA5D5`, orange `#E76146`, white.
- English font: Geist. Bangla font: Noto Sans Bengali. Both work in one sentence.
- Breakpoints: phones (under 640px), `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px.
- Use the meaning-based color names in components: `text-ink`, `text-muted`, `bg-page`, `bg-surface`, `border-line`, `bg-brand`, `bg-accent`.
