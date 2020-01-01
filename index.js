const express = require('express');
const bodyParse = require('body-parser');
const helmet = require('helmet');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
});

// Seguridad http
app.use(helmet());

// Middleware que me permite convertir los datos que me llegan a json
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.use('/api/v1', require('./routes/index.routes'));