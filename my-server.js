
const express = require("express");
const cors = require("cors");
//const express = require ("express");
const app = express();
var PORT = 8000;
app.use(cors());
var secretWords = ['anger', 'fluff', 'dudes', 'sweat', 'sweet', 'kiosk'];
var randomWord = "";
app.get("/", function (req, res) {
    var random = Math.floor(Math.random() * secretWords.length);
    randomWord = secretWords[random];
    res.send({ secret: randomWord });
});
app.listen(PORT, function () {
    console.log(`Server is listening to port ${PORT}`);
});
