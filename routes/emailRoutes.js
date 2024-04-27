import express from "express";
import {
	sendBookingDetailsEmail,
	sendFeedback,
} from "../services/emailService.js"; // Import the email sending function

export const emailRouter = express.Router();

emailRouter.post("/flightInquiry", async (req, res) => {
	try {
		const {
			departure,
			returnlocation,
			departureDate,
			returnDate,
			adults,
			infants,
			teens,
			name,
			phoneNumber,
			email,
		} = req.body;

		await sendBookingDetailsEmail(
			departure,
			returnlocation,
			departureDate,
			returnDate,
			adults,
			infants,
			teens,
			name,
			phoneNumber,
			email
		);

		return res.send({ message: "Data received and email sent successfully" });
	} catch (error) {
		console.log(error);
		return res.send({ message: "Could not place inquiry.Try Again" });
	}
});

emailRouter.post("/feedback", async (req, res) => {
	try {
		const { name, review } = req.body;
		await sendFeedback(name, review);
		return res.send({
			message: "Feedback sent successfully",
		});
	} catch (error) {
		console.log(error);
		return res.send({ message: "Could not send feedback.Try Again" });
	}
});
