# IDCD 2028 hosting initiative

Next.js App Router, React, TypeScript and Tailwind CSS v4. A responsive preliminary conference hosting-bid website.

## Run

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. Production check: `npm run build`; production server: `npm start`.

## Content

Edit `app/page.tsx`; visual styles are in `app/globals.css`. The design follows the information hierarchy of IEEE COMPEL 2026 and IEEE SPEC 2026: conference masthead, compact navigation, host-city banner and deadlines sidebar. Kigali photography is stored locally in `public/kigali.jpg` (Adrien K, CC BY 2.0; attribution and license links are in the footer). Fonts use the system sans-serif stack.

Content is based on the supplied October 2026 messages and the IEEE PELS TC3 call screenshot. The draft Google Docs proposal was subsequently read through the signed-in IEEE account in the Codex in-app browser. Proposed dates (19–21 July 2028), Kigali venue, academic host, four technical tracks, programme, author milestones and committee have been incorporated with explicit draft status. Financial planning, unconfirmed sponsor targets, and unverified immigration or medical guidance are not reproduced. Hosting award and all proposed arrangements remain unconfirmed. No registration, submission, or mailing-list collection is enabled. Search indexing is disabled while this is a preliminary draft; update metadata in `app/layout.tsx` before public launch.

## Editorial presentation

The visible copy presents the supplied conference details directly, per the organiser’s request, without bid-stage banners or repeated proposal qualifiers. Registration and submissions remain unavailable until their respective opening dates. Source details originate in the October 2026 proposal; no external hosting award, bookings or appointments have been independently verified. The site remains local and search indexing remains disabled.
