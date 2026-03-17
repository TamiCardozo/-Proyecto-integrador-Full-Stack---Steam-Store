import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Datos de prueba
const products = [
  { id: 1, name: "Juego 1", price: 50, discount: 10, is_new: true },
  { id: 2, name: "Juego 2", price: 30, discount: 0, is_new: false },
  { id: 3, name: "Juego 3", price: 70, discount: 20, is_new: true },
  { id: 4, name: "Juego 4", price: 40, discount: 5, is_new: false },
  { id: 5, name: "Juego 5", price: 60, discount: 15, is_new: true },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});