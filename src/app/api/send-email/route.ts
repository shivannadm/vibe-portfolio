// Create this file at: app/api/send-email/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Using FormSubmit.co - A free service that sends form data to your email
        // No API key needed, just works out of the box
        const response = await fetch('https://formsubmit.co/ajax/shivannadm16@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message,
                _captcha: 'false', // Disable captcha
                _template: 'table', // Use table format for email
            })
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
        }

        const data = await response.json();
        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}