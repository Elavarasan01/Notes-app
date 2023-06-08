const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const routers=require("./routes/notesRoutes");
const connectDB=require("./db/db");

connectDB();

const app = express();
app.use(cors());
app.use(json());

app.use("/api/notes/",routers);

app.listen(1234, () => {
    console.log("Server running on port 1234");
});

module.exports = app;