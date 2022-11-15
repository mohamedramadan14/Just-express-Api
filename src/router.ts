import {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from "./handlers/product";
import {
  putProduct,
  postProduct,
  putUpdate,
  postUpdate,
} from "./modules/validation";
import { Router } from "express";
import { body, validationResult } from "express-validator";
import {
  checkingValidationErrors,
  handleErrorMiddleware,
} from "./modules/middlewares";
import {
  createUpdate,
  deleteupdate,
  getUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/update";
const router = Router();

/**
 * Product Model
 */

router.get("/product", getProducts);

router.post(
  "/product",
  [...postProduct, checkingValidationErrors],
  createProduct
);

router.get("/product/:id", getProduct);

router.put(
  "/product/:id",
  [...putProduct, checkingValidationErrors],
  updateProduct
);
router.delete("/product/:id", deleteProduct);

/**
 * Update Model
 */

router.get("/update", getUpdates);
router.post("/update", [...postUpdate, checkingValidationErrors], createUpdate);

router.get("/update/:id", getUpdate);
router.put(
  "/update/:id",
  [...putUpdate, checkingValidationErrors],
  updateUpdate
);
router.delete("/update/:id", deleteupdate);

/**
 * UpdatePoint Model
 */

router.get("/updatepoint", (req, res) => {});
router.post("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});
router.put("/updatepoint/:id", (req, res) => {});
router.delete("/updatepoint/:id", (req, res) => {});

/**
 * The difference between put and patch is :
 * Put : it replace entire record with data provided in request except id
 * Patch : it just update specific prorperties passed in request to record in database
 */
router.use(handleErrorMiddleware);
export default router;
