'use client';

import { useTheme } from '@/store/useTheme';
import React from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import ActiveLink from '../small-ui/ActiveLink';
import Logo from '../small-ui/Logo';
import useScrollSpy from '@/hooks/useScrollSpy';
import Sidebar from './Sidebar';
import Frame from './Frame';
import { navLinks } from '@/constants/routes';
const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const isExceed = useScrollSpy(200);
    const modeIcon = {
        light: <BsMoonStarsFill />,
        dark: <FaSun />,
    };

    return (
        <nav className={` duration-700 transition-all sticky top-0 left-0 w-full z-[99] ${isExceed ? 'shadow-md shadow-secondary bg-primary' : 'backdrop-blur-sm'}`}>
            <Frame>
                <div className='flex justify-between items-center h-16'>
                    <div className='shrink-0 flex items-center'>
                        <ActiveLink href='/' className='md:inline-block hidden italic text-lg'>
                            Infinity Movie
                        </ActiveLink>
                        <ActiveLink href='/' className='inline-block md:hidden'>
                            <Logo />
                        </ActiveLink>
                    </div>
                    <div className='hidden md:flex grow justify-center'>
                        {navLinks.map((link, index) => (
                            <ActiveLink key={index} href={link.href} className='px-3 py-2 rounded-md text-sm font-medium' activeClassName='text-brand'>
                                {link.title}
                            </ActiveLink>
                        ))}
                    </div>
                    <div className='flex items-center'>
                        <button className='rounded-full px-3 py-2 text-xl' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                            {modeIcon[theme]}
                        </button>
                        <Sidebar />
                    </div>
                </div>
            </Frame>
        </nav>
    );
};

export default Navbar;
