import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URL as string);

// instantiate express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "hello express setup" });
});

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
