import Image from 'next/image';
import React from 'react';
import imgSrc from '@/assets/logo-2.webp';
const Logo = () => {
    return <Image className='w-[40] h-[40]' src={imgSrc} alt='Infinity Movie Logo' width={40} height={40} />;
};

export default Logo;
