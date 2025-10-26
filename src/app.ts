import express from "express";


const app = express();
app.get("/", (req, res) => {
    res.send("start tour-management-backend server");
});

export default app;