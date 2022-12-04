const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
dotenv.config()
const app = express();

app.get("/", (req, res) => {
    res.send("API is live")
})

app.get("/chats", (req, res) => {
    res.send(chats);
})

app.get("/chats/:id", (req, res) => {
    const chat = chats.find((chat) => chat._id === req.params.id);
    if (!chat) {
        const err = new Error("Chat is invalid");
        res.status(404).send(err.message);
    }
    res.send(chat);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server started at port : ", PORT);
})