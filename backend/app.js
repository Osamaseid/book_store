import express from 'express';
import db from './db.js'; // Make sure to use .js extension

const app = express();
app.use(express.json());

// Get all books
app.get('/books', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM books');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new book
app.post('/books', async (req, res) => {
    const { title, author, genre, price, published_date } = req.body;
    try {
        const [results] = await db.query('INSERT INTO books (title, author, genre, price, published_date) VALUES (?, ?, ?, ?, ?)', 
        [title, author, genre, price, published_date]);
        res.status(201).json({ id: results.insertId, title, author, genre, price, published_date });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});