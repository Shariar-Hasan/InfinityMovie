import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Infinity Movie is a movie app that allows you to search for movies and view details about them. It is built with Next.js and Tailwind CSS. It is a great example of a modern web application. ',
};
const ContactPage = () => {
    return (
        <div>
            <h1>Contact Page</h1>
            <p>This is the contact page</p>
        </div>
    );
};

export default ContactPage;
