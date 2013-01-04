var express = require("express");

var app = new express();

// Defaults to Connects or Express's Favicon. Better than no favicon.
app.use(express.favicon());

// Silly fix to 'static is a reserved word'.
app.use(express['static'](__dirname + "/../static/"));

app.all("/", function (req, res) {
    res.send("<!doctype html><html><body>TEST</body></html>");
});

app.error(function (err, req, res, next){
    if (err instanceof NotFound) {
        res.render('404.jade');
    } else {
        next(err);
    }
});

app.error(function (err, req, res, next) {
    res.send(500);
});

app.listen(80);
console.log("Started!");