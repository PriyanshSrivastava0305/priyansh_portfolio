const express = require('express');
const path = require('path');
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
