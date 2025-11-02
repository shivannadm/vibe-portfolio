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

        // Using FormSubmit.co with proper configuration
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);
        formData.append('_captcha', 'false');
        formData.append('_template', 'table');

        const response = await fetch('https://formsubmit.co/shivannadm16@gmail.com', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}