import express from "express";
import { emailRouter } from "./routes/emailRoutes.js";
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/", emailRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
