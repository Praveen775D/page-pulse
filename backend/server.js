const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const analyzeRoutes = require("./routes/analyze");

const app = express();

/*Security */

app.use(helmet());

/*Logging
 */

app.use(morgan("dev"));

/*Body Parser
 */

app.use(express.json());

/*CORS Configuration
 */

const allowedOrigins = [
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "https://page-pulse-three-blue.vercel.app"
];

app.use(
    cors({
        origin: function (origin, callback) {

            // Allow Postman, curl, mobile apps, etc.
            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error("CORS policy: Origin not allowed"));
        },

        methods: ["GET", "POST"],

        allowedHeaders: ["Content-Type"]
    })
);

/*Routes
 */

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: " Page Pulse API is running successfully."
    });
});

app.use("/api/analyze", analyzeRoutes);

/*404 Handler
 */

app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: "Route not found"
    });
});

/*Global Error Handler
 */

app.use((err, req, res, next) => {

    console.error(err.stack);

    res.status(500).json({
        success: false,
        error: err.message || "Internal Server Error"
    });

});

/*Start Server
 */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log("==================================");
    console.log(" Page Pulse API Started");
    console.log(` Port: ${PORT}`);
    console.log("==================================");

});