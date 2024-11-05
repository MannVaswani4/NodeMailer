require('dotenv').config();

const express = require('express');
const { Mailer } = require('./controller');

const app = express();
const port = process.env.PORT || 3000;

app.get('/send-email', Mailer);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
