require('dotenv').config();
const cors = require('cors');

const express = require('express');
const { dbConnection } = require('./db/config');
const { request, response } = require('express');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

// Base de datos
dbConnection();

// Rutas
app.get('/', (req = request, res = response) => 
{
    res.json
    ({
        ok: true,
        msg: 'Hola mundo'
    })
})


// Levantarlo
app.listen( process.env.PORT, () => 
{
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});