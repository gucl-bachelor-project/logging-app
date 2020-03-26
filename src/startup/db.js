const mongoose = require("mongoose");
const config = require("config");

const dbUrl = config.get("dbUrl");

module.exports = function() {
    return mongoose
        .connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log(`Connected to MongoDB on address: ${dbUrl}`));
};
