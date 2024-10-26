import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

interface ChipProps {
    children: string;
    href?: string;
    className?: string;
}

const Chip: React.FC<ChipProps> = ({ children, href, className }) => {
    const chipClasses = cn('px-3 py-1 text-sm font-medium text-white rounded-full bg-gray-700 hover:bg-gray-600 transition-colors', className);

    return href ? (
        <Link href={href} className={chipClasses}>
            {children}
        </Link>
    ) : (
        <span className={chipClasses}>{children}</span>
    );
};

export default Chip;
