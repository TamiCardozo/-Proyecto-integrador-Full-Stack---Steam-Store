import { Router } from "express";
import { getProducts, createProduct } from "../controllers/product.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getProducts);
router.post("/", authMiddleware, createProduct);

export default router;