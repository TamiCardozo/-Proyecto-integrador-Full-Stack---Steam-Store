import express from "express";
import cors from "cors";

//importaciones de rutas 
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express(); 

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//  TEST ROUTE
app.get("/", (req, res) => {
  res.json({ status: "OK", backend: "Steam Store 🚀" });
});

// RUTAS
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

export default app;
