import express from "express";
const router = express.Router();

import {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct
} from "./controller/productController.js";

router.route("/create").post(createProduct);
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);
router.route("/:id").delete(deleteProduct);
router.route("/:id").patch(updateProduct);
export default router;
