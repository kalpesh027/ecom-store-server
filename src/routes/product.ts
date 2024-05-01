import express from "express";

import { adminOnly } from "../middleware/auth.js";
import { singleUpload } from "../middleware/multer.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProduct, getSingleProduct, getlatestProducts, newProduct,  updateProduct } from "../controller/product.js";

const app = express.Router();


app.post("/new",  adminOnly,singleUpload, newProduct);

app.get("/all", getAllProduct);

app.get("/latest", getlatestProducts);

app.get("/categories", getAllCategories);

app.get("/admin-products", adminOnly, getAdminProducts);

app.route("/:id").get(getSingleProduct).put(adminOnly, singleUpload, updateProduct).delete(adminOnly, deleteProduct);

export default app;