import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //  Validaciones
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, "user"]
    );

    res.status(201).json({ message: "Usuario registrado" });
  } catch (error) {
    
    //  Email duplicado
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        message: "El email ya está registrado",
      });
    }

    console.error(error);
    res.status(500).json({
      message: "Error al registrar usuario",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email y password requeridos",
      });
    }

    const [users] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (!users.length) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    const valid = await bcrypt.compare(password, users[0].password);

    if (!valid) {
      return res.status(401).json({
        message: "Password incorrecta",
      });
    }

    const token = jwt.sign(
      { id: users[0].id, role: users[0].role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al iniciar sesión",
    });
  }
};
