"use client";

import { SITE, facebookHref, telHref, zaloHref } from "@/lib/constants";

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="24" fill="#0068FF" />
      {/* Chat bubble */}
      <path
        fill="#fff"
        d="M24 12.5c-7.3 0-13.2 4.7-13.2 10.5 0 3.4 2.1 6.4 5.4 8.4l-.8 4.3 5-2.7c1.1.2 2.3.4 3.6.4 7.3 0 13.2-4.7 13.2-10.5S31.3 12.5 24 12.5z"
      />
      <text
        x="24"
        y="25.2"
        textAnchor="middle"
        fill="#0068FF"
        fontSize="9"
        fontWeight="800"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        Zalo
      </text>
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        fill="currentColor"
        d="M17.6 14.3c-.8-.4-1.7-.2-2.3.3l-1.1.9c-.3.2-.6.2-.9.1-1.5-.6-3-1.8-4.2-3.3-1.1-1.4-1.8-2.8-2.1-4-.1-.4 0-.7.2-1l1-.9c.6-.5.8-1.4.4-2.1L7.5 2.5c-.4-.8-1.4-1.1-2.2-.8L3.8 2.3C3 2.6 2.4 3.3 2.2 4.1c-.6 2.6.1 5.7 2.2 9 2.2 3.4 5.1 5.7 8.4 6.7.9.3 1.8.1 2.5-.5l1.4-1.3c.7-.6.8-1.6.3-2.4l-1.4-2.3z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M16.2 3.8c2.2 1 3.9 2.8 4.7 5.1M15 5.8c1.3.6 2.4 1.7 2.9 3"
        opacity="0.9"
      />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="24" fill="#1877F2" />
      <path
        fill="#fff"
        d="M26.7 38V25.6h3.7l.6-4.1h-4.3v-2.6c0-1.2.3-2 2.1-2h2.3V13.2c-.4-.1-1.8-.2-3.4-.2-3.4 0-5.7 2.1-5.7 5.9v3.3h-3.8v4.1h3.8V38h5.7z"
      />
    </svg>
  );
}

export function FloatingCTA() {
  return (
    <div className="fixed right-3 bottom-4 z-50 flex flex-col items-center gap-3 md:right-5 md:bottom-6">
      <a
        href={facebookHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg shadow-navy/30 transition hover:scale-105"
        aria-label="Facebook Cơ Giới Thiên Ân"
        title="Facebook"
      >
        <FacebookIcon className="h-14 w-14" />
        <span className="sr-only">Facebook</span>
      </a>

      <a
        href={zaloHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-lg shadow-navy/30 transition hover:scale-105"
        aria-label="Chat Zalo"
        title="Chat Zalo"
      >
        <ZaloIcon className="h-14 w-14" />
        <span className="sr-only">Zalo</span>
      </a>

      <a
        href={telHref()}
        className="floating-call group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-navy/30 transition hover:bg-brand-bright"
        aria-label={`Gọi ngay ${SITE.hotlineDisplay}`}
        title={`Gọi ${SITE.hotlineDisplay}`}
      >
        <span className="floating-call-ring" aria-hidden />
        <span className="floating-call-ring floating-call-ring--delay" aria-hidden />
        <PhoneIcon className="floating-call-icon relative z-10 h-7 w-7" />
      </a>
    </div>
  );
}
