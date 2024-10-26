import { isBrowser } from '@/constants/browser';
import { ThemeType } from '@/types/Theme';
import { create } from 'zustand';

interface ThemeState {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

export const useTheme = create<ThemeState>((set) => ({
    theme: 'dark',
    setTheme: (theme) => {
        if (isBrowser) {
            if (theme === 'light') {
                document.body.classList.remove('dark');
                document.body.classList.add('light');
            } else {
                document.body.classList.remove('light');
                document.body.classList.add('dark');
            }
        }
        return set({ theme });
    },
}));
