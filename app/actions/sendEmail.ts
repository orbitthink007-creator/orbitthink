'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const projectDetails = formData.get('projectDetails') as string;

    if (!email || !projectDetails) {
        return { success: false, message: 'Email and Project Details are required.' };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address (must be authenticated user usually)
            replyTo: email, // The user's email
            to: process.env.CONTACT_EMAIL || 'orbitthink007@gmail.com',
            subject: `New Contact from ${name} (${company})`,
            text: `
        Name: ${name}
        Company: ${company}
        Email: ${email}
        
        Project Details:
        ${projectDetails}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails}</p>
      `,
        });

        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send email. Please try again.' };
    }
}
