import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import NextTopLoader from 'nextjs-toploader';
import { Metadata } from 'next';
import TanStackProvider from '@/components/providers/TanStackProvider';
import DefaultAll from '@/components/shared/DefaultAll';
import MuiThemeProvider from '@/components/providers/MuiThemeProvider';
export const metadata: Metadata = {
    title: {
        absolute: 'Infinity Movie',
        template: `%s | Infinity Movie`,
    },
    description:
        'Infinity Movie is a movie app that allows you to search for movies and view details about them. It is built with Next.js and Tailwind CSS. It is a great example of a modern web application. ',
};
const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
                <DefaultAll />
                <Navbar />
                <TanStackProvider>
                    <MuiThemeProvider>
                        <div className='min-h-[80vh]'>{children}</div>
                    </MuiThemeProvider>
                </TanStackProvider>
                <Footer />
            </body>
        </html>
    );
}
