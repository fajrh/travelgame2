
import express from 'express';
import path from 'path';
import fs from 'fs'; // Import fs to check for file existence
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 8080;

// In-memory storage
const players = new Map();
let chat = [];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const indexPath = path.join(distDir, 'index.html');

// --- Log paths for debugging ---
console.log(`[Server] Starting up...`);
console.log(`[Server] __dirname: ${__dirname}`);
console.log(`[Server] Root directory: ${rootDir}`);
console.log(`[Server] Serving static files from: ${distDir}`);
console.log(`[Server] Index.html path: ${indexPath}`);

// Check if the dist directory and index.html exist
if (fs.existsSync(distDir) && fs.existsSync(indexPath)) {
    console.log(`[Server] ✅ Found 'dist' directory and 'index.html'.`);
} else {
    console.error(`[Server] ❌ CRITICAL: Could not find 'dist/index.html'. Make sure the project is built ('npm run build').`);
    if (!fs.existsSync(distDir)) {
        console.error(`[Server] 'dist' directory is missing.`);
    }
    if (!fs.existsSync(indexPath)) {
        console.error(`[Server] 'index.html' is missing inside 'dist'.`);
    }
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
