'use client';
import { useTheme } from '@/store/useTheme';
import { ThemeType } from '@/types/Theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';

const { light, dark } = {
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
};

// Create MUI theme based on the extracted Tailwind colors
const getMuiTheme = (mode: ThemeType) =>
    createTheme({
        palette: {
            mode,
            primary: {
                main: mode === 'light' ? light.brand : dark.brand,
            },
            secondary: {
                main: mode === 'light' ? light.secondary : dark.secondary,
            },
            text: {
                primary: mode === 'light' ? light.color : dark.color,
            },
            background: {
                default: mode === 'light' ? light.primary : dark.primary,
                paper: mode === 'light' ? light.secondary : dark.secondary,
            },
        },
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
        },
    });

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();
    const muiTheme = useMemo(() => getMuiTheme(theme), [theme]);

    return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}
