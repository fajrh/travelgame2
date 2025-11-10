
# Travel Game

A multiplayer travel and exploration game. Player progress is saved in your browser, and multiplayer interactions are handled in real-time.

## No Database Required!

This project runs with a simple in-memory Node.js server and does not require any database connection, which keeps things simple and avoids cloud costs.

-   **Backend**: A lightweight [Express.js](https://expressjs.com/) server handles multiplayer state (player locations, chat) in memory. It automatically clears data for disconnected players.
-   **Persistence**: Your game progress—money, location, unlocked items, and profile settings—is automatically saved to your browser's local storage. When you return, you'll pick up right where you left off.

## Run Locally

**This project requires Node.js (version 20 or higher) to run.**

### 1. Install Dependencies

First, open your terminal in the project's root directory and install the necessary packages. You only need to do this once.

```bash
npm install
```

### 2. Build and Start the Game

The provided `start` script first builds the application and then runs the server. This is the recommended way to run the game locally as it mirrors a production setup.

```bash
npm start
```

You should see a message like `✅ Server listening on port 8080`.

### 3. Play the Game

Open your web browser and navigate to:

**http://localhost:8080**

## Deploying to the Cloud

You can deploy this application directly to Google Cloud Run without needing to write a `Dockerfile`. Cloud Run uses buildpacks to automatically create a container image from your source code and deploy it.

### 1. Set Your Project (Optional)

If you have multiple Google Cloud projects, make sure your `gcloud` CLI is configured to use the correct one.

```bash
gcloud config set project [YOUR_PROJECT_ID]
```

### 2. Deploy from Source

Run the following command from your project's root directory. Replace `[REGION]` with your preferred Google Cloud region (e.g., `us-central1`, `northamerica-northeast2`).

```bash
gcloud run deploy travelgame --source . --region [REGION] --allow-unauthenticated
```

Cloud Run will build and deploy your application. Once complete, it will provide a public URL where you can access the game. The server is now configured to correctly find and serve the game files in the Cloud Run environment.
