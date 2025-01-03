import { useState, useEffect, useRef } from 'react';

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit): [React.RefObject<T>, boolean] {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isInView];
}

export default useInView;
