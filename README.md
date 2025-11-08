# Crypto-pulse-frame

A mini-app developed for Farcaster.

## New Feature: Vote Chart with Token Filter

- Visit `/chart` after deployment to see a pie chart of Bullish vs Bearish votes per token.
- Users can select BTC, ETH, or SOL to filter results.
- Uses Recharts for visualization.
- Data is fetched from the Supabase `votes` table.

### Quick start (local)

1. Copy `.env.local.example` or set environment variables:

```
SUPABASE_URL=<your-supabase-url>
SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

2. Install deps and run dev:

```bash
npm install
npm run dev
```

3. Open http://localhost:3000/chart

## Step-by-step Vercel deployment guide

1. **Push project to GitHub:**
	- Create a new repository on GitHub.
	- In your local project folder, run:
	  ```bash
	  git init
	  git add .
	  git commit -m "Initial commit"
	  git branch -M main
	  git remote add origin https://github.com/<your-username>/<your-repo>.git
	  git push -u origin main
	  ```

2. **Log in to Vercel Dashboard:**
	- Go to https://vercel.com/dashboard and log in.

3. **Import GitHub project:**
	- Click 'Add New Project' → 'Import Git Repository'.
	- Select your repository.

4. **Configure project:**
	- Framework Preset should auto-detect Next.js.
	- Add Environment Variables:
	  - `SUPABASE_URL` = your Supabase project URL
	  - `SUPABASE_ANON_KEY` = your Supabase anon key

5. **Deploy:**
	- Click 'Deploy'. Vercel will build the project.
	- After build, you get a unique URL like `https://<your-app>.vercel.app`

6. **Test Frame & Chart:**
	- Visit `https://<your-app>.vercel.app/api/frame` for Farcaster Frame.
	- Visit `https://<your-app>.vercel.app/chart` for chart view.

7. **Share:**
	- Paste the Frame URL in a Farcaster cast to test interaction.

## Next Steps & Notes
- Update chart dynamically as new votes come in (use Realtime or polling).
- Add custom styling to match Farcaster Frame theme.
- Consider adding additional tokens and better error handling for empty data.

If you want, I can:
- create a `.env.local.example` file,
- wire up a simple seed script to populate the `votes` table schema,
- or run a quick local `npm install` and `npm run dev` to verify everything boots (I can run those commands here if you want).

A mini-app developed for Farcaster
