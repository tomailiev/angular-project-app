const environment = process.env.NODE_ENV || 'dev';
const config = require(`./${environment}.config.json`);
if (environment === 'prod') {
    const connectionString = process.env.MONGO_URL;
    const secret = process.env.SECRET;
    const port = process.env.PORT;
    Object.assign(config, { secret, database: { connectionString }, server: { port } });
}
module.exports = config;