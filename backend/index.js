import express from "express";
import cors from "cors";
import MrbotRouter from "./Router/mrbot.Router.js";
import UserRouter from "./Router/user.router.js";
import connectDB from "./ConnectDB.js";

const app = express();
app.use(express.json());
app.use(cors());

const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.use("/api/bot", MrbotRouter);
app.use("/api/user", UserRouter);

app.listen(80, () => {
  connectDB();
  console.log(`Server is running on port 8000`);
});
