import { pool } from "../config/db.js";

export const createOrder = async (req, res) => {
  console.log(" BODY:", req.body);
  console.log("🔑 HEADERS:", req.headers);
  console.log("👤 USER:", req.user);

  const userId = req.user.id;
  const { items } = req.body;

  if (!Array.isArray(items)) {
    return res.status(400).json({ message: "Items inválidos" });
  }

  let total = 0;

  for (const item of items) {
    const [[product]] = await pool.query(
      "SELECT price, discount FROM products WHERE id = ?",
      [item.product_id]
    );

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    let price = product.price;
    if (product.discount) {
      price -= (price * product.discount) / 100;
    }

    total += price * item.quantity;
  }

  const [order] = await pool.query(
    "INSERT INTO orders (user_id, total) VALUES (?, ?)",
    [userId, total]
  );

  res.json({ orderId: order.insertId });
};
