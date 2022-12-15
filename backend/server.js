const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const cors = require('cors');
const colors = require('colors');
dotenv.config()
connectDB();
const app = express();

app.use(cors()) // Use this after the variable declaration

app.get("/", (req, res) => {
    res.send("API is live")
})

app.get("/api/chats", (req, res) => {
    res.send(chats);
})

app.get("/api/chats/:id", (req, res) => {
    const chat = chats.find((chat) => chat._id === req.params.id);
    if (!chat) {
        const err = new Error("Chat is invalid");
        res.status(404).send(err.message);
    }
    res.send(chat);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at port : ${PORT}`.yellow.bold);
})