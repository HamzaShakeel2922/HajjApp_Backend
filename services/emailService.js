import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.apiKey);
export const sendBookingDetailsEmail = async (
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
) => {
	const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Booking Details</title>
            <style>
                /* Your styling goes here */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                    margin: 20px;
                }
                table {
                    width: 70%;
                    border-collapse: collapse;
                    margin: 20px auto;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                }
                th, td {
                    padding: 12px 15px;
                    border: 1px solid #ccc;
                }
                th {
                    background-color: #F8B133;
                    color: #fff;
                    text-align: left;
                }
                tr {
                    transition: background-color 0.3s ease;
                }
                tr:hover {
                    background-color: #f2f2f2;
                }
                h2 {
                    text-align: center;
                    color: #333;
                }
            </style>
        </head>
        <body>
            <h2>Flight Inquiry</h2>
            <table>
                <tr>
                    <th>Departure</th>
                    <td>${departure}</td>
                </tr>
                <tr>
                    <th>Departure Date</th>
                    <td>${departureDate}</td>
                </tr>
                <tr>
                    <th>Return</th>
                    <td>${returnlocation}</td>
                </tr>
                <tr>
                    <th>Return Date</th>
                    <td>${returnDate}</td>
                </tr>
                <tr>
                    <th>Adults</th>
                    <td>${adults}</td>
                </tr>
                <tr>
                    <th>Infants</th>
                    <td>${infants}</td>
                </tr>
                <tr>
                    <th>Teens</th>
                    <td>${teens}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>${name}</td>
                </tr>
                <tr>
                    <th>Phone Number</th>
                    <td>${phoneNumber}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>${email}</td>
                </tr>
            </table>
        </body>
        </html>
    `;

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

export const sendFeedback = async (name, review) => {
	const htmlContent = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Review Details</title>
            <style>
                /* Your styling goes here */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                    margin: 20px;
                }
                table {
                    width: 70%;
                    border-collapse: collapse;
                    margin: 20px auto;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                }
                th,
                td {
                    padding: 12px 15px;
                    border: 1px solid #ccc;
                    text-align: center;
                    text-transform : capitalize;
                }
                th {
                    background-color: #f8b133;
                    color: #fff;
                    text-align: center;
                    text-transform : capitalize;
                }
                tr {
                    transition: background-color 0.3s ease;
                }
                tr:hover {
                    background-color: #f2f2f2;
                }
                h2 {
                    text-align: center;
                    color: #333;
                }
            </style>
        </head>
        <body>
            <h2>User Review</h2>
            <table>
                <tr>
                    <th>Name : ${name}</th>
                </tr>
                <tr>
                    <td>${review}</td>
                </tr>
            </table>
        </body>
    </html>
    `;

	const msg = {
		to: process.env.toEmail,
		from: process.env.from,
		subject: "Feedback",
		html: htmlContent, // HTML content
	};

	try {
		await sgMail.send(msg);
		console.log("Feedback sent successfully");
	} catch (error) {
		console.error("Error sending feedback", error);
	}
};
