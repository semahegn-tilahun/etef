# ETEF TypeScript website

## Run locally
1. Install Node.js 20+.
2. Run `npm install`.
3. Run `npm run dev` and open the URL Vite prints.
4. Run `npm run build` for production.

## Routes
`/` and `/about`, `/partners`, `/vacancies`, `/membership`, `/news`, `/admin`.

## Images
Copy all original image files (e.g. `image_94aff6.png`) into `public/` so their relative image references resolve. The source provided did not include the image binaries.

## Note
The original HTML layouts are retained inside typed page modules and rendered through the React app shell; all page navigation is routed within the SPA. Original inline JavaScript handlers were removed during conversion; interactive admin actions and job-search behavior need to be wired to API/state as those features are specified.
