import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const products = [
  { 
    id: 1, 
    title: "The Last of Us", 
    price: 50, 
    discount: 10, 
    is_new: true, 
    image: "/imagenes/libreria/juego1.webp" 
  },
  { 
    id: 2, 
    title: "Mortal Kombat 11", 
    price: 30, 
    discount: 0, 
    is_new: false, 
    image: "/imagenes/libreria/juego3.webp" 
  },
  { 
    id: 3, 
    title: "GTA V", 
    price: 70, 
    discount: 20, 
    is_new: true, 
    image: "/imagenes/libreria/juego4.webp" 
  },
  { 
    id: 4, 
    title: "Stray", 
    price: 40, 
    discount: 5, 
    is_new: false, 
    image: "/imagenes/libreria/juego2.webp" 
  },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});