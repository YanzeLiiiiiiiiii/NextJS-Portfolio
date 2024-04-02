import { Resend } from 'resend';
import { NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
    const { email, subject, message } = await req.json()
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'yanze1221@gmail.com',
            subject: subject,
            react: (
                <>
                    <p>Email From : {email}</p>
                    <p>Subject : {subject}</p>
                    <p>Message: {message}</p>
                </>
            )
        })
        return NextResponse.json({ message: 'successful' });
    } catch (error) {
        return NextResponse.json({ error });
    }

}

