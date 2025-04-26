'use client';

import { ThemeProvider } from '@/providers/theme-provider';
import React from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};