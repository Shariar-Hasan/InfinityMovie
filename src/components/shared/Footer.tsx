'use client';
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Logo from '../small-ui/Logo';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const isFooterHidden = ['/movies'].includes(pathname);
    return isFooterHidden ? null : (
        <footer className='bg-primary py-8'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
                        <Logo />
                        <p className='text-sm'>© {new Date().getFullYear()} Infinity Movie. All rights reserved.</p>
                    </div>

                    <div className='flex space-x-6 mb-4 md:mb-0'>
                        <Link href='/about' className='text-sm text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400'>
                            About
                        </Link>
                        <Link href='/contact' className='text-sm text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400'>
                            Contact
                        </Link>
                        <Link href='/privacy' className='text-sm text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400'>
                            Privacy Policy
                        </Link>
                    </div>

                    <div className='flex space-x-4'>
                        <Link href='https://twitter.com' className='text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'>
                            <FaTwitter className='h-6 w-6' />
                        </Link>
                        <Link href='https://facebook.com' className='text-gray-800 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500'>
                            <FaFacebookF className='h-6 w-6' />
                        </Link>
                        <Link href='https://instagram.com' className='text-gray-800 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400'>
                            <FaInstagram className='h-6 w-6' />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
