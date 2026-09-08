import express from "express";
import cors from "cors";

import productRoutes from "./routes/productRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// register routes
app.use("/api/products", productRoutes);

// fallback, route not found
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});
export default app;
