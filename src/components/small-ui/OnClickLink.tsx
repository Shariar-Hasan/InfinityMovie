'use client';
import { useRouter } from 'nextjs-toploader/app';
import React from 'react';

const OnClickLink = ({ children, href = '/' }: { children: React.ReactNode; href: string }) => {
    const router = useRouter();
    return <div onClick={() => router.push(href)}>{children}</div>;
};

export default OnClickLink;
