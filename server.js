const express = require('express');
const WebSocket = require('ws');

const app = express();
const port = 3000;

// Serve static files from public directory
app.use(express.static('public'));

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
    
    ws.on('message', (message) => {
        // Handle incoming messages (e.g., cmd_vel commands)
        console.log('Received:', message);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
