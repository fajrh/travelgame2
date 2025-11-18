
# Travel Game

A solo travel and exploration game. Player progress is saved in your browser, allowing for offline play.

## Offline First!

This project runs entirely in your browser and does not require any backend server or database connection.

-   **Persistence**: Your game progress—money, location, unlocked items, and profile settings—is automatically saved to your browser's local storage. When you return, you'll pick up right where you left off.

## Run Locally

**This project requires Node.js (version 20 or higher) to run.**

### 1. Clean and Install Dependencies

To ensure a clean, frontend-only setup, please first remove your old `node_modules` directory and `package-lock.json` file.

Then, open your terminal in the project's root directory and install the necessary packages:

```bash
npm install
```

### 2. Start the Development Server

This command will start the Vite development server, allowing you to play the game and see changes live as you edit the code.

```bash
npm run dev
```

### 3. Play the Game

Open your web browser and navigate to the local URL provided by Vite (usually **http://localhost:5173**).

## Building for Production

To create an optimized build of the game:

```bash
npm run build
```

This will create a `dist` directory with all the static files needed to host the game. You can preview the production build locally with:

```bash
npm run preview
```
## Deploying to Cloud Run (buildpacks, no Dockerfile needed)

Cloud Run can build and run this project directly from source using the Node.js buildpack (no custom Dockerfile required):

1. Make sure you have built assets available in `dist` by running `npm run build`, or let Cloud Build run the script automatically from the `build` entry in `package.json`.
2. Deploy from source:

```bash
gcloud run deploy travelgame2 \
  --source . \
  --region YOUR_REGION \
  --allow-unauthenticated
```

The buildpack will:

- Run `npm install` (lockfile optional) followed by `npm run build`. A `.npmrc` disables lockfile generation to force `npm install` instead of `npm ci` in Cloud Build.
- Launch the app using `npm start`, which serves the built `dist` directory through `server/server.js` on port 8080.
- Build the container image automatically—no Dockerfile or `cloudbuild.yaml` is required for this path.
