import { validationResult } from "express-validator";

export const checkingValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};

export const handleErrorMiddleware = (err, req, res, next) => {
  switch (err.type) {
    case "auth": {
      res.status(401).json({ message: "unauthorized actions not allowed" });
    }
    case "input": {
      res.status(400).json({ message: "invalid input/parameters sent" });
    }
    default: {
      res
        .status(500)
        .json({ message: "Somthing happend fixing it and back to U soon" });
    }
  }
  next();
};
