import express from "express";
const router = express.Router();

import {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct
} from "./controller/productController.js";
//create product route
router.route("/create").post(createProduct);
//get all products
router.route("/").get(getProducts);
//get product by id
router.route("/:id").get(getProductById);
//delete the product
router.route("/:id").delete(deleteProduct);
//updating quantity
router.route("/:id/update_quantity").patch(updateProduct);
export default router;
