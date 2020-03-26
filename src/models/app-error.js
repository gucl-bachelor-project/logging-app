const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    appName: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    },
    data: {
        type: String,
        required: true
    }
});

const AppError = mongoose.model("AppError", schema);

function validateAppError(appError) {
    const schema = {
        appName: Joi.string().required(),
        timestamp: Joi.date()
            .iso()
            .required(),
        data: Joi.string().required()
    };

    return Joi.validate(appError, schema);
}

exports.AppError = AppError;
exports.validate = validateAppError;
