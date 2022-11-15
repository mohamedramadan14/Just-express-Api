import { comparePasswords, createJWT, hashPassword } from "./../modules/auth";
import prisma from "../db";

export const createUser = async (req, res, next) => {
  console.log("CreatingUser .....");
  try {
    // throw new Error("Error in Sign in");
    const hashedPassword = await hashPassword(req.body.password);

    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
      },
    });
    const token = createJWT(user);
    res.json({ token });
  } catch (error) {
    error.type = "input";
    next(error);
  }
};

export const signin = async (req, res, next) => {
  console.log("LoginingIn User");

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(401);
      res.json({ message: "unauthorized user is not found" });
      return;
    }

    const isvalid = await comparePasswords(req.body.password, user.password);
    if (!isvalid) {
      res.status(401);
      res.json({ message: "unauthorized user " });
      return;
    }

    const token = createJWT(user);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
