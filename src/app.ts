import express from "express";
import { userRoute } from "./app/modules/user/user.route";
import cors from "cors";


const app = express(); 
app.use(cors(
    // {
    //     origin: "http://localhost:5173",
    //     credentials: true,
    // }
));
app.use(express.json());





app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
    res.send("start tour-management-backend server");
});


export default app;