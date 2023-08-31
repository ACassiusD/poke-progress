const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Root" });
});
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});
app.get('/api/test', (req, res) => {
    res.json({ message: "Backend is working!" });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});