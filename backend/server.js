const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const cors = require('cors');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config()
connectDB();
const app = express();
// To accept JSON data
app.use(express.json());
app.use(cors()) // Use this after the variable declaration

app.get("/", (req, res) => {
    res.send("API is live")
})

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at port : ${PORT}`.yellow.bold);
})