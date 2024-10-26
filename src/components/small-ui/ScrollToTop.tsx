'use client';
import useScrollSpy from '@/hooks/useScrollSpy';
import React from 'react';
import { MdArrowUpward } from 'react-icons/md';

const ScrollToTop: React.FC = () => {
    const isExceed = useScrollSpy(200);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isExceed && (
            <button onClick={scrollToTop} className='fixed bottom-8 right-8 p-3 rounded-full bg-brand opacity-40 text-white shadow-lg hover:opacity-100 transition-all' aria-label='Scroll to top'>
                <MdArrowUpward className='text-lg' />
            </button>
        )
    );
};

export default ScrollToTop;
