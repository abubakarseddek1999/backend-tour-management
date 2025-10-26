
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";
let server: Server;
const port = envVars.PORT || 3000;

const startServer = async () => {
    try {
        // Store sensitive data in env instead of hardcoding
        // Connect to MongoDB
        await mongoose.connect( envVars.DB_URL ||"");

        console.log("✅ Connected to MongoDB using Mongoose!");

        server = app.listen(port, () => {
            console.log(`🚀 Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("❌ Error connecting to MongoDB:", err);
        process.exit(1);
    }

};

startServer();



// unhandled promise rejection
process.on("unhandledRejection", (reason) => {
    console.error("❌ Unhandled promise rejection:", reason);
    if (server) {
        server.close(() => {    
            console.log("👌 Server closed.");
            process.exit(1);
        });
    }
    process.exit(1);
   
});

// Uncaught rejection error
process.on('uncaughtException', (err) => {
    console.error("❌ Uncaught exception:", err);
    if (server) {
        server.close(() => {
            console.log("👌 Server closed.");
            process.exit(1);
        });
    }
    process.exit(1);
});
// signal termination sigterm
process.on("SIGTERM", () => {
    console.log("👌 SIGTERM received, closing server...");
    if (server) {
        server.close(() => {
            console.log("👌 Server closed.");
            process.exit(0);
        });
    }
    process.exit(0);
});

process.on("SIGINT", () => {
    console.log("👌 SIGINT SIGNAL received, closing server...");
    if (server) {
        server.close(() => {
            console.log("👌 Server closed.");
            process.exit(0);
        });
    }
    process.exit(0);
});
