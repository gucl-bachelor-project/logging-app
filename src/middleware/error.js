module.exports = function(err, _req, res, _next) {
    console.error.bind(console, err);

    res.status(500).send(
        "Server error. Failed to process request – try again later."
    );
};
