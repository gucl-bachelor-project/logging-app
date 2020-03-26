const express = require("express");
const app = express();
const dbStartup = require("./startup/db");
require('express-async-errors');

require("./startup/routes")(app);

const port = process.env.PORT || 8080;
dbStartup()
    .then(() => {
        app.listen(port, () =>
            console.log(`Log application running on port ${port}`)
        );
    })
    .catch(err => {
        console.error("Failed to connect to DB:", err);
        process.exit(1);
    });
