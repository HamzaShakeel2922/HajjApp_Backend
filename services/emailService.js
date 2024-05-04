import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import path from "path";
import { renderFile } from "ejs";

dotenv.config();
sgMail.setApiKey(process.env.apiKey);

export const sendBookingDetailsEmail = async (data) => {
	const templatePath = path.resolve("emailTemplates", "FlightInquiry.ejs");
	const htmlContent = await renderFile(templatePath, data);
	const msg = {
		to: process.env.toEmail,
		from: process.env.from,
		subject: "Flight Inquiry",
		html: htmlContent,
	};
	try {
		await sgMail.send(msg);
		console.log("Email sent successfully");
	} catch (error) {
		console.error("Error sending email:", error);
	}
};

export const sendFeedback = async (data) => {
	const templatePath = path.resolve("emailTemplates", "ReviewTemplate.ejs");
	const htmlContent = await renderFile(templatePath, data);
	const msg = {
		to: process.env.toEmail,
		from: process.env.from,
		subject: "Feedback",
		html: htmlContent,
	};
	try {
		await sgMail.send(msg);
		console.log("Feedback sent successfully");
	} catch (error) {
		console.error("Error sending feedback", error);
	}
};
