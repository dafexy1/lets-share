const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const connectDB = require("./config/db");
connectDB();

app.use("/api/products", require("./routes/products"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/vendors", require("./routes/vendors"));

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});