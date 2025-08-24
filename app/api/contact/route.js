import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer transporter with Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSKEY,
  },
});

// HTML template for emails
const generateEmailTemplate = (name, email, message) => `
  <div style="font-family: Arial, sans-serif; padding: 20px;">
    <h2 style="color: #16f2b3;">📩 New Portfolio Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <blockquote style="border-left: 4px solid #16f2b3; padding-left: 10px; margin-left: 0;">
      ${message}
    </blockquote>
    <p style="font-size: 12px; color: #888;">Reply directly to this email to contact the sender.</p>
  </div>
`;

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Mail options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`,
      to: process.env.EMAIL_ADDRESS,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: generateEmailTemplate(name, email, message),
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
