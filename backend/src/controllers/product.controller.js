import { pool }from "../config/db.js";

// Para Obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.json(rows);
  } catch (error) {
     console.error("ERROR GET PRODUCTS 👉", error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

// Para Crear producto (SIMULACIÓN)
export const createProduct = async (req, res) => {
  const { title, price, image } = req.body;

  try {
    await pool.query(
      "INSERT INTO products (title, price, image) VALUES (?, ?, ?)",
      [title, price, image]
    );

    res.status(201).json({ message: "Producto creado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear producto" });
  }
};