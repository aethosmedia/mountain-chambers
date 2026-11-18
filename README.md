# Mountain Chambers – Next.js site

Rebuild of https://mountainchambers.in/ in Next.js 15 (App Router, TypeScript, plain CSS).

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live
- `lib/data.ts` – ALL content (contact details, practice areas, team, case studies, disclaimer). Edit here.
- `components/ConsentGate.tsx` – first-visit Bar Council terms popup + cookie details (cookie `mc_terms_accepted`, 6 months).
- `app/globals.css` – design tokens (gold `#E5CC70`, black).
- `public/` – drop the logo and team photos here, then set `photo` for each member in `lib/data.ts`.

## Before launch – needs the client
See the "Open items" list in the hand-off message / comments marked in `lib/data.ts`.
