import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const authProtection = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.json({ message: "not authorized due to invalid token" });
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.json({ message: "not authorized due to invalid token" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } catch (error) {
    console.log(error.message);
    res.status(401);
    res.json({ message: "not authorized due to invalid token" });
    return;
  }
  next();
};

export const comparePasswords = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 15);
};
