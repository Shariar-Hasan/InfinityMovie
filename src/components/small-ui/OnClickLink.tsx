'use client';
import { cn } from '@/lib/utils';
import { useRouter } from 'nextjs-toploader/app';
import React from 'react';

const OnClickLink = ({ children, href = '/', className }: { children: React.ReactNode; href: string; className?: string }) => {
    const router = useRouter();
    return (
        <div className={cn('cursor-pointer', className)} onClick={() => router.push(href)}>
            {children}
        </div>
    );
};

export default OnClickLink;
