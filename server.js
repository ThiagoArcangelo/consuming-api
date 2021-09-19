const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

const port = 3333;

app.use(cors());

app.get('/', async (req, res) => {
    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');
        return res.json(data);

    } catch (error) {
        console.error(error);
    }

    
});

app.listen(port, () => {
    console.log('Servidor rodando na porta 3333');
});