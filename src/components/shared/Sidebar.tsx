'use client';
import React, { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import Logo from '../small-ui/Logo';
import { useTheme } from '@/store/useTheme';
import ActiveLink from '../small-ui/ActiveLink';
import { FaSignOutAlt, FaTimes } from 'react-icons/fa';
import { Button } from '../small-ui/Button';
import { navLinks } from '@/constants/routes';
import { isBrowser } from '@/constants/browser';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const toggleSidebar = (val: boolean) => {
        setIsOpen(val);
        if (isBrowser) {
            document.body.style.overflow = val ? 'hidden' : 'auto';
        }
    };
    return (
        <div className='md:hidden'>
            <button className='px-3 py-2 rounded-md' onClick={() => setIsOpen(true)}>
                <FaBarsStaggered />
            </button>
            <div
                className={`fixed top-0 left-0 h-screen w-[100vw] delay ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} ${
                    theme === 'dark' ? 'bg-white' : 'bg-black'
                } bg-opacity-30 backdrop-blur-sm z-10 cursor-pointer`}
                onClick={() => setIsOpen(false)}
            />
            <div className={`fixed top-0 left-0 h-screen w-60 bg-primary z-50 transform delay ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-10 flex flex-col`}>
                <div className='flex justify-between p-4 border-b'>
                    <Logo />
                    <button className='px-3 py-2 rounded-md' onClick={() => setIsOpen(false)}>
                        <FaTimes />
                    </button>
                </div>
                <div className='flex flex-col grow'>
                    {navLinks.map((link, index) => (
                        <ActiveLink key={index} href={link.href} className='py-4 text-base hover:bg-secondary px-4 font-semibold text-white '>
                            {link.title}
                        </ActiveLink>
                    ))}
                </div>
                <div className='p-4 border-t text-lg'>
                    <Button>
                        <FaSignOutAlt />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
