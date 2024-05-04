import express from "express";
import {
	sendBookingDetailsEmail,
	sendFeedback,
} from "../services/emailService.js"; // Import the email sending function

export const emailRouter = express.Router();

emailRouter.post("/flightInquiry", async (req, res) => {
	try {
		await sendBookingDetailsEmail(req.body);
		return res.status(200).send({ message: "Inquiry Submitted Successfully." });
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.send({ message: "Could not place inquiry.Try Again" });
	}
});

emailRouter.post("/feedback", async (req, res) => {
	try {
		await sendFeedback(req.body);
		return res.status(200).send({
			message: "Feedback sent successfully",
		});
	} catch (error) {
		console.log(error);
		return res
			.status(200)
			.send({ message: "Could not send feedback.Try Again" });
	}
});
