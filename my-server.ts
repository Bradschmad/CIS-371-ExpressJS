import express, {Application, Request, Response, require} from "express";
import cors from "cors"
//const express = require ("express");
const app:Application = express();
const PORT = 8000;
app.use(cors());

const secretWords = ['anger', 'fluff', 'dudes', 'sweat', 'sweet', 'kiosk'];
let randomWord = "";

app.get("/", (req:Request, res:Response) => {
    let random = Math.floor(Math.random() * secretWords.length);
    randomWord = secretWords[random];

    res.send({ secret: randomWord});
})

app.listen(PORT, () => {
    console.log('Server is listening to port ${PORT}');
});
