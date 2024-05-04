import express from "express";
import { emailRouter } from "./routes/emailRoutes.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use("/", emailRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
