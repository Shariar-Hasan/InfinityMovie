import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: 'About us',
    description:
        'Infinity Movie is a movie app that allows you to search for movies and view details about them. It is built with Next.js and Tailwind CSS. It is a great example of a modern web application. ',
};
const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page</p>
        </div>
    );
};

export default AboutPage;
