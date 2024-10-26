'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { MouseEvent } from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    varient?: 'primary' | 'secondary' | 'brand';
    outlined?: boolean;
    onclick?: (e: MouseEvent<HTMLButtonElement>) => void;
    href?: string;
}
interface ButtonLinkProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
    varient?: 'primary' | 'secondary' | 'brand';
    outlined?: boolean;
    onclick?: (e: MouseEvent<HTMLAnchorElement>) => void;
    href: string;
}
const rippleEffect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;
    circle.classList.add('ripple-circle');
    target.appendChild(circle);
    console.log(e.pageX, target.offsetLeft, radius);
    console.log(e.pageY, target.offsetTop, radius);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.pageX - target.offsetLeft}px`;
    circle.style.top = `${e.pageY - target.offsetTop}px`;
    circle.style.transform = `translate(-50%, -50%) scale(0)`;
    circle.style.animation = `ripple-circle 0.6s ease-out`;

    setTimeout(() => circle.remove(), 600);
};

const Button = ({ children, className, onclick, varient, outlined, ...rest }: ButtonProps) => {
    let varientClassName = '';
    let outlinedClassName = '';
    if (varient === 'primary') {
        varientClassName = 'bg-primary text-color';
    } else if (varient === 'secondary') {
        varientClassName = 'bg-secondary text-color';
    } else if (varient === 'brand') {
        varientClassName = 'bg-brand text-color';
    }
    if (outlined) {
        outlinedClassName = 'border';
    }
    return (
        <button
            onClick={(e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
                e.preventDefault();
                if (onclick) {
                    onclick(e);
                }
                // rippleEffect(e as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>);
            }}
            className={cn('px-3 py-2 text-center overflow-hidden relative delay active:scale-[0.98]', outlinedClassName, varientClassName, className)}
            {...rest}
        >
            <span></span>
            {children}
        </button>
    );
};

const ButtonLink = ({ children, className, href, varient, outlined, ...rest }: ButtonLinkProps) => {
    let varientClassName = '';
    let outlinedClassName = '';
    if (varient === 'primary') {
        varientClassName = 'bg-primary text-color';
    } else if (varient === 'secondary') {
        varientClassName = 'bg-secondary text-color';
    } else if (varient === 'brand') {
        varientClassName = 'bg-brand text-color';
    }
    if (outlined) {
        outlinedClassName = 'border';
    }
    return (
        <Link href={href} className={cn('px-3 py-2 text-center ', outlinedClassName, varientClassName, className)} {...rest}>
            {children}
        </Link>
    );
};

export { Button, ButtonLink };
