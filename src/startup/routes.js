const express = require("express");
const error = require("../middleware/error");
const appErrorRoute = require("../routes/app-error");

module.exports = function(app) {
    app.use(express.json());
    app.use("/log/app-error", appErrorRoute);
    app.use(error);
};
