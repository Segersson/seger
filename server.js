import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname));

// Endpoint that queries Riksdagen open data API
app.get('/api/riksdagen', async (req, res) => {
    const q = req.query.q;
    if (!q) {
        return res.status(400).json({ error: 'Missing q parameter' });
    }
    try {
        const url = `https://data.riksdagen.se/dokumentlista/?sok=${encodeURIComponent(q)}&utformat=json`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch data from Riksdagen' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
