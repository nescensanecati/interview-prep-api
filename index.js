require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const PORT = process.env.PORT || 8080;

const questionsRoute = require("./routes/questionsRoute");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Express App</h1>`);
});

app.use("/api/users", userRoutes);

app.use("/question", questionsRoute);

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});