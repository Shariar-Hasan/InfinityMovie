import { cn } from '@/lib/utils';
import React from 'react';

const SubHeading = ({ children, bordered = true, className }: { children: React.ReactNode; bordered?: boolean; className?: string }) => {
    return (
        <>
            <h2 className={cn('text-xl font-bold md:pl-2 py-3', className)}>{children}</h2>
            {bordered && <hr className='border-color/30' />}
        </>
    );
};

export default SubHeading;
