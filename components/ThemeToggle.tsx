'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { SunIcon, MoonIcon } from '@/components/icons';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-2 transition-colors hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gnk-bg"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
