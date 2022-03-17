console.log("What's up with it motherfucker");



const express = require('express');
const routes = require('./routes/routes');
const parser = require('body-parser');

const app = express();

app.use(parser.json());

app.use('/demigods', routes);

app.listen(4994)

app.use(express.json());

app.use((req, res, next) => {
    const logEntry = `host: ${req.host}
    ip: ${req.ip}
    method: ${req.method}
    path: ${req.path}
    time: ${new Date()}`;
    console.log(logEntry);
    next();
});

const server = app.listen(4040, () => {
    console.log("Server started baby!", server.address().port);
    } );

