const {AppError, validate} = require("../models/app-error");
const express = require("express");
const validateReq = require("../middleware/validate");
const router = express.Router();

router.get("/", async (_req, res) => {
    const loggedErrors = await AppError.find().sort('-timestamp').limit(100);

    return res.send(loggedErrors.map(le => ({
        appName: le.appName,
        timestamp: le.timestamp,
        data: le.data
    })));
});

router.post("/", [validateReq(validate)], async (req, res) => {
    const appError = new AppError({
        appName: req.body.appName,
        timestamp: req.body.timestamp,
        data: req.body.data
    });
    await appError.save();

    res.status(201).send("Application error logged successfully.");
});

module.exports = router;
