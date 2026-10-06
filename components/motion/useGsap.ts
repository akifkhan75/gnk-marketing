'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Desktop + motion-allowed media query shared by scroll-driven effects. */
export const MOTION_OK = '(prefers-reduced-motion: no-preference)';
export const DESKTOP_MOTION = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';

export { gsap, ScrollTrigger, useGSAP };
