import express from 'express';

const app = express();
const PORT = 8000;

app.use((req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});