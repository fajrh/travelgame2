
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 8080;

// In-memory storage
const players = new Map();
let chat = [];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '..', 'dist')));


// --- API Routes ---

// Player updates their state
app.post('/update', (req, res) => {
    const { id, ...data } = req.body;
    if (id) {
        players.set(id, { ...data, id, lastSeen: Date.now() });
    }
    res.sendStatus(200);
});

// Player sends a chat message
app.post('/chat', (req, res) => {
    const message = req.body;
    chat.push(message);
    // Keep chat history to a reasonable size
    if (chat.length > 100) {
        chat.shift();
    }
    res.sendStatus(200);
});

// Client polls for game state
app.get('/state', (req, res) => {
    res.json({
        players: Array.from(players.values()),
        chat: chat,
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


// --- Serve the main app ---
// This catch-all route ensures that your single-page app works correctly
// by sending index.html for any non-API routes.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});


app.listen(port, () => {
    console.log(`✅ Server listening on port ${port}`);
});
