import type { ReactNode, SVGProps } from 'react';

const S = 1.5;

export type PremiumIconProps = SVGProps<SVGSVGElement>;

function I(props: PremiumIconProps & { children: ReactNode }) {
  const { children, className = '', ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 ${className}`}
      stroke="currentColor"
      strokeWidth={S}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...rest}
    >
      {children}
    </svg>
  );
}

/** SEO — signal search / discovery */
export function IconSeo(props: PremiumIconProps) {
  return (
    <I {...props}>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.3-4.3" />
      <path d="M8 11h6M11 8v6" opacity="0.4" />
    </I>
  );
}

/** Local — geo rings */
export function IconLocalSeo(props: PremiumIconProps) {
  return (
    <I {...props}>
      <circle cx="12" cy="11" r="2.5" />
      <path d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" />
      <circle cx="12" cy="11" r="6" opacity="0.35" />
    </I>
  );
}

/** Technical — structure / stack */
export function IconTechnicalSeo(props: PremiumIconProps) {
  return (
    <I {...props}>
      <path d="M8 9l4-3 4 3v6l-4 3-4-3V9z" />
      <path d="M12 12v7M8 9v6M16 9v6" opacity="0.45" />
    </I>
  );
}

/** PPC — target + motion */
export function IconPpc(props: PremiumIconProps) {
  return (
    <I {...props}>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2" opacity="0.4" />
    </I>
  );
}

/** Social marketing — network */
export function IconSocialMarketing(props: PremiumIconProps) {
  return (
    <I {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="17" r="2.5" />
      <path d="M7.5 7.5l3 3M16.5 7.5l-3 3M12 14.5v-2" opacity="0.5" />
    </I>
  );
}

/** Social management — rhythm / grid */
export function IconSocialManagement(props: PremiumIconProps) {
  return (
    <I {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 9h16M9 5v14M15 5v14" opacity="0.35" />
      <circle cx="8" cy="12" r="1" fill="currentColor" stroke="none" opacity="0.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" opacity="0.5" />
      <circle cx="16" cy="12" r="1" fill="currentColor" stroke="none" opacity="0.5" />
    </I>
  );
}

/** Content — layered docs */
export function IconContent(props: PremiumIconProps) {
  return (
    <I {...props}>
      <path d="M8 6h10a1 1 0 011 1v12a1 1 0 01-1 1H8a1 1 0 01-1-1V7a1 1 0 011-1z" />
      <path d="M6 4h10a1 1 0 011 1" opacity="0.35" />
      <path d="M10 10h6M10 14h6" opacity="0.45" />
    </I>
  );
}

/** Copy — precision line */
export function IconCopywriting(props: PremiumIconProps) {
  return (
    <I {...props}>
      <path d="M4 19l4.5-4.5M15 5l4 4M9 15L5 19M14.5 9.5L19 5" />
      <path d="M12 4l-2 2 2 2 2-2-2-2z" opacity="0.45" />
    </I>
  );
}

/** Email automation — flow */
export function IconEmail(props: PremiumIconProps) {
  return (
    <I {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 8l9 5 9-5" />
      <path d="M8 14h8" opacity="0.4" />
    </I>
  );
}

/** CRO — split test */
export function IconCro(props: PremiumIconProps) {
  return (
    <I {...props}>
      <rect x="4" y="5" width="7" height="14" rx="1.5" />
      <rect x="13" y="5" width="7" height="14" rx="1.5" />
      <path d="M11.5 12h1" opacity="0.5" />
      <path d="M7.5 9v6M16.5 9v6" opacity="0.35" />
    </I>
  );
}

/** Funnel — stages */
export function IconFunnel(props: PremiumIconProps) {
  return (
    <I {...props}>
      <path d="M5 5h14l-4 5H9L5 5z" />
      <path d="M8 10h8l-3 4h-2l-3-4z" opacity="0.55" />
      <path d="M10 14h4l-2 4h-2l-2-4z" />
      <path d="M11 18h2v2" opacity="0.45" />
    </I>
  );
}

/** Brand — mark / diamond */
export function IconBrand(props: PremiumIconProps) {
  return (
    <I {...props}>
      <path d="M12 3l8 8-8 8-8-8 8-8z" />
      <path d="M12 8l4 4-4 4-4-4 4-4z" opacity="0.35" />
    </I>
  );
}

/** Web — viewport */
export function IconWeb(props: PremiumIconProps) {
  return (
    <I {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8h18" opacity="0.45" />
      <path d="M7 12h6M7 15h4" opacity="0.35" />
    </I>
  );
}

/** Landing — focus strip */
export function IconLanding(props: PremiumIconProps) {
  return (
    <I {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 9h8M8 12h5" opacity="0.4" />
      <path d="M12 16l2-2 2 2" />
    </I>
  );
}

/** Automation — connected nodes */
export function IconAutomation(props: PremiumIconProps) {
  return (
    <I {...props}>
      <rect x="3" y="4" width="7" height="7" rx="1.5" />
      <rect x="14" y="4" width="7" height="7" rx="1.5" />
      <rect x="8.5" y="13" width="7" height="7" rx="1.5" />
      <path d="M6.5 11v1.5h5M17.5 11v1.5h-5M12 13v-2" opacity="0.45" />
    </I>
  );
}

/** Analytics — axes + trend */
export function IconAnalytics(props: PremiumIconProps) {
  return (
    <I {...props}>
      <path d="M4 19V5M4 19h16" />
      <path d="M7 15l3-4 3 2 4-6" />
      <circle cx="7" cy="15" r="1.2" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="13" cy="13" r="1.2" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" opacity="0.6" />
    </I>
  );
}

// —— Process & narrative icons ——

export function IconDiagnose(props: PremiumIconProps) {
  return (
    <I {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
      <circle cx="12" cy="12" r="2" opacity="0.35" />
    </I>
  );
}

export function IconDesign(props: PremiumIconProps) {
  return (
    <I {...props}>
      <path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" />
      <path d="M12 4v16" opacity="0.3" />
    </I>
  );
}

export function IconShip(props: PremiumIconProps) {
  return (
    <I {...props}>
      <path d="M12 3v4M5 14l7-7 7 7" />
      <path d="M5 14v4a2 2 0 002 2h10a2 2 0 002-2v-4" />
      <path d="M9 21v-4h6v4" opacity="0.45" />
    </I>
  );
}

export function IconCompound(props: PremiumIconProps) {
  return (
    <I {...props}>
      <path d="M12 5a7 7 0 107 7" />
      <path d="M12 12l4-2" />
      <circle cx="12" cy="12" r="2" />
    </I>
  );
}

export function IconPipelineLeak(props: PremiumIconProps) {
  return (
    <I {...props}>
      <path d="M6 6h12l-2 4H8L6 6z" />
      <path d="M9 10h6l-1.5 3h-3L9 10z" opacity="0.5" />
      <path d="M11 13h2v3" />
      <path d="M10 18h4" strokeDasharray="2 2" opacity="0.6" />
    </I>
  );
}

export function IconFragmented(props: PremiumIconProps) {
  return (
    <I {...props}>
      <path d="M5 7l4 4M15 7l-4 4" />
      <path d="M9 11l2 5 2-5" />
      <path d="M12 16v3" opacity="0.45" />
      <circle cx="12" cy="20" r="1.5" opacity="0.5" />
    </I>
  );
}

export function IconBrittleData(props: PremiumIconProps) {
  return (
    <I {...props}>
      <path d="M4 16V8M8 18v-6M12 16V6M16 18v-8M20 16v-4" />
      <path d="M6 14l3-2 3 1 3-3 3 2" opacity="0.4" strokeDasharray="3 2" />
    </I>
  );
}

/** AI chat / conversational — nodes + message */
export function IconAiChat(props: PremiumIconProps) {
  return (
    <I {...props}>
      <rect x="4" y="6" width="16" height="10" rx="2" />
      <path d="M9 18l2-2h7a2 2 0 002-2V8" opacity="0.35" />
      <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none" opacity="0.45" />
      <circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" opacity="0.45" />
      <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" opacity="0.45" />
    </I>
  );
}

/** AI lead system — person + signal */
export function IconAiLead(props: PremiumIconProps) {
  return (
    <I {...props}>
      <circle cx="12" cy="8" r="3" />
      <path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
      <path d="M18 6l2 2-2 2" opacity="0.45" />
      <circle cx="19" cy="8" r="1.5" opacity="0.5" />
    </I>
  );
}
