global.__basedir = __dirname;

const express = require('express');
// const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./server/config');
const db = require('./server/utils/db');
const api = require('./server/api');
const errorHandler = require('./server/utils/errorHandler');
const utils = require('./server/utils');
const auth = require('./server/api/middleware/auth');

const app = express();
app.use(cors({
    origin: config.cors.url,
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('./dist/project-app'));
// app.use(auth);

api.connect('/api/v1', app);

app.use('*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/project-app/' });
});

app.use(errorHandler);

const appListen = function () {
    return new Promise((resolve, reject) => {
        app.listen(config.server.port, () => { resolve() });
    });
}



db.connect(config.database.connectionString, config.database.databaseName)
    .then(utils.logger('connected to database'))
    .catch(utils.logger('error connecting to database'))
    .then(appListen)
    .then(utils.logger(`listening on port ${config.server.port}`))
    .catch(utils.logger('server error'));

