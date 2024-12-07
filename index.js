import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRouter from './routes/book_routes.js';
import orderRouter from './routes/order_routes.js';
import customerRouter from './routes/customer_routes.js';
import cors from 'cors'

dotenv.config();

// Start the Express framework
const app = express();
app.use(cors());
// Middleware for parsing JSON requests
app.use(express.json());

// Define routes
app.use("/api/books", bookRouter);
app.use("/api/orders", orderRouter);
app.use("/api/customers", customerRouter);

// Root route
app.get("/", (req, res) => {
    res.send("<h1> Home PAGE </h1>");
});

// Establish connection to the database
mongoose.connect(process.env.DB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Running");
        });
    })
    .catch(err => {
        console.log(err);
    });
