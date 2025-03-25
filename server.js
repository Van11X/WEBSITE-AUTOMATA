const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5501;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.post('/validate', (req, res) => {
    const { number } = req.body;
    const scientificNumberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
    const isValid = scientificNumberRegex.test(number);
    res.json({ valid: isValid });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});