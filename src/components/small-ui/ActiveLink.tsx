import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { LinkHTMLAttributes } from 'react';
interface ActiveLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    href: string;
    activeClassName?: string;
    className: string;
    exact?: boolean;
}

const ActiveLink = ({ href, children, activeClassName = '', className, exact = false, ...props }: ActiveLinkProps) => {
    const pathname = usePathname();
    const isActive = exact ? href === pathname : (pathname.startsWith(href) && href !== '/') || href === pathname;
    const activeClass = isActive ? activeClassName : '';
    return (
        <Link href={href} className={cn(className, activeClass)} {...props}>
            {children}
        </Link>
    );
};

export default ActiveLink;
