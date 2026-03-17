import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

//  rutas
app.get("/api/products", (req, res) => {
  res.json([/* tus productos */]);
});

// Puertos
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));