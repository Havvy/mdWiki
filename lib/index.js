var express = require("express");

var app = new express();

// Defaults to Connects or Express's Favicon. Better than no favicon.
app.use(express.favicon());

app.use(express.static(__dirname + "/../static/"));

app.all("/", function (req, res) {
    res.send("<!doctype html><html><body>TEST</body></html>");
});

app.listen(3000);
console.log("Started!");