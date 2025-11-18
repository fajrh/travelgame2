
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
## Deploying to Cloud Run

- Trigger Cloud Build with the provided `cloudbuild.yaml`, setting `IMAGE` (for example `gcr.io/$PROJECT_ID/travelgame2`) so the Dockerfile is used for container builds.
- The Dockerfile uses `npm install` instead of `npm ci`, allowing the build to reconcile `package-lock.json` and `package.json` automatically inside Cloud Build and avoid lockfile mismatch failures.
