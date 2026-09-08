import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getProductById);
router.get("/:productId/emi-plans", productController.getEmiPlans);

export default router;
