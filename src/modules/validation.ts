import { body } from "express-validator";
export const putProduct = [body("name").isString()];

export const postProduct = [body("name").isString()];

export const putUpdate = [
  body("title").isString().optional(),
  body("body").isString().optional(),
  body("status")
    .isString()
    .optional()
    .isIn([" IN_PROGRESS", "SHIPPED", "DEPRECATED", "ARCHIVED"])
    .optional(),
  body("version").optional(),
];

export const postUpdate = [
  body("title").isString().exists(),
  body("body").isString().exists(),
  body("productId").isString().exists(),
];

export const putUpdatePoint = [
  body("name").optional().isString(),
  body("description").isString().optional(),
];

export const postUpdatePoint = [
  body("name").exists().isString(),
  body("description").isString().exists(),
];
