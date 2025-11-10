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

### 2. Build the Game Client

Next, compile the game's TypeScript code into plain JavaScript that browsers can understand.

```bash
npm run build
```

You only need to run this command again if you make changes to the game's source code (`index.tsx`).

### 3. Start the Server

Start the server using the following command:

```bash
npm start
```

You should see a message like `✅ Server listening on port 8080`.

### 4. Play the Game

Open your web browser and navigate to:

**http://localhost:8080**
