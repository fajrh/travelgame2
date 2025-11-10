
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 8080;

// In-memory storage
const players = new Map();
let chat = [];

// --- Determine paths relative to the current file ---
// This is a more robust method than process.cwd() for finding the project root
// in different environments (like Google Cloud Run buildpacks).
const __filename = fileURLToPath(import.meta.url); // Path to this file (server.js)
const __dirname = path.dirname(__filename);       // Path to the 'server' directory
const projectRoot = path.resolve(__dirname, '..'); // Go up one level to the project root
const distDir = path.join(projectRoot, 'dist');    // Path to the 'dist' folder
const indexPath = path.join(distDir, 'index.html'); // Path to the index.html

// --- Log paths for debugging ---
console.log(`[Server] Starting up...`);
console.log(`[Server] Current file path (__filename): ${__filename}`);
console.log(`[Server] Resolved project root: ${projectRoot}`);
console.log(`[Server] Expecting static files in: ${distDir}`);
console.log(`[Server] Expecting index.html at: ${indexPath}`);

// Check if the dist directory and index.html exist
if (fs.existsSync(distDir) && fs.existsSync(indexPath)) {
    console.log(`[Server] ✅ Found 'dist' directory and 'index.html'. Serving static files.`);
} else {
    console.error(`[Server] ❌ CRITICAL: Could not find build files. The server expects 'index.html' to be at the following path: ${indexPath}`);
    console.error(`[Server] Please ensure you have run 'npm run build' and the resulting 'dist' directory is present at the project root.`);
}

// Middleware
app.use(express.json());

// --- API Routes (define BEFORE static serving and catch-all) ---
app.post('/update', (req, res) => {
    const { id, ...data } = req.body;
    if (id) {
        players.set(id, { ...data, id, lastSeen: Date.now() });
    }
    res.sendStatus(200);
});

app.post('/chat', (req, res) => {
    const message = req.body;
    chat.push(message);
    if (chat.length > 100) chat.shift();
    res.sendStatus(200);
});

app.get('/state', (req, res) => {
    res.json({
        players: Array.from(players.values()),
        chat: chat,
    });
});

// --- Static File Serving ---
app.use(express.static(distDir));

// --- SPA Fallback Route ---
// This should be the LAST route. It sends index.html for any request that doesn't match an API route or a static file.
app.get('*', (req, res) => {
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error(`[Server] Error sending index.html: ${err.message}`);
            res.status(500).send("Error: Could not serve application files. Please check server logs.");
        }
    });
});

// --- Cleanup for disconnected players ---
setInterval(() => {
    const now = Date.now();
    for (const [id, player] of players.entries()) {
        if (now - player.lastSeen > 20000) { // 20-second timeout
            players.delete(id);
        }
    }
}, 5000);


app.listen(port, () => {
    console.log(`✅ Server listening on port ${port}`);
});
