# The Wall (다왈) - Landing Page

A cute, modern landing page for The Wall - the anonymous social network for university students.

## Features

- Animated waitlist counter with smooth easing
- Email signup form for waitlist
- Responsive design (mobile-friendly)
- Beautiful gradient backgrounds with floating blobs
- Phone mockup showcasing the app
- Feature comparisons with competitors
- Pricing section
- University showcase

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploying to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Create a new GitHub repository
2. Push this code to the `main` branch
3. Go to **Settings > Pages** in your repository
4. Under **Source**, select **GitHub Actions**
5. The site will automatically deploy on every push to `main`

### Option 2: Manual Deployment

```bash
# Build and deploy to gh-pages branch
npm run deploy
```

## Configuration

### Changing the Repository Name

If your repository name is different from `the-wall-landing`, update the `base` in `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

### Updating the Waitlist Counter

Edit the `WAITLIST_COUNT` in `src/components/WaitlistSignup.tsx`:

```ts
const WAITLIST_COUNT = 2847; // Change this number
```

### Connecting to a Real Backend

Replace the simulated API call in `WaitlistSignup.tsx` with your actual API endpoint:

```ts
const handleSubmit = async (e: FormEvent) => {
  // Replace this with your actual API call
  await fetch('https://your-api.com/waitlist', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
};
```

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS (no external UI libraries - pure CSS for maximum customization)

## License

MIT
