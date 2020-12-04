const mongoose = require('mongoose');

module.exports.connect = (connectionString, databaseName) => {
    return mongoose.connect(connectionString + '/' + databaseName,
        { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
}