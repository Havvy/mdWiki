var express = require("express");

var app = new express();

app.get("/", function (res, req) {
    res.end("<!doctype html><html><body>TEST</body></html>");
});

app.listen(3000);
console.log("Started!");