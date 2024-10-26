import { useEffect, useState } from 'react';

const useScrollSpy = (heightExceed: number) => {
    const [isExceed, setIsExceed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > heightExceed) {
                setIsExceed(true);
            } else {
                setIsExceed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [heightExceed]);
    return isExceed;
};

export default useScrollSpy;
