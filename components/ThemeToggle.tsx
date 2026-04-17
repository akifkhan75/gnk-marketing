'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { SunIcon, MoonIcon } from '@/components/icons';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gnk-border bg-gnk-card p-2 text-gnk-fg transition-colors hover:border-gnk-accent/35 hover:bg-gnk-accent/[0.06] focus:outline-none focus:ring-2 focus:ring-gnk-ring focus:ring-offset-2 focus:ring-offset-gnk-bg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/15 dark:hover:bg-white/[0.06]"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
