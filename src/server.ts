import { handleErrorMiddleware } from "./modules/middlewares";
import express from "express";
import morgan from "morgan";
import router from "./router";
//import helmet from "helmet";
import cors from "cors";
import { authProtection } from "./modules/auth";
import { createUser, signin } from "./handlers/user";

const app = express();
//app.use(helmet());
/**
 * There's middleware called : compose : which take an array of middlewares and compose them into a pipe
 */
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Hello" });
});

app.use("/api", authProtection, router);
app.post("/user/create", createUser);
app.post("/user/signin", signin);
app.use(handleErrorMiddleware);
export default app;
