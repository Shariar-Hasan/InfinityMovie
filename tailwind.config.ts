import { createThemes } from 'tw-colors';

import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {},
    },
    plugins: [
        createThemes({
            light: {
                primary: '#f9f9fb',
                secondary: '#FFFFFF',
                brand: '#0090C1',
                color: '#0D0D0D',
            },
            dark: {
                primary: '#18181B',
                secondary: '#09090B',
                brand: '#0090C1',
                color: '#DDDDDD',
            },
        }),
    ],
};
export default config;
