"use client";

/* Pill button/link with the design's .btn styling, wrapped in the
   magnetic-cursor effect. Internal routes use next/link; hash and
   external/mailto targets use a plain anchor. */

import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "./Magnetic";

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  download?: boolean;
  external?: boolean;
  className?: string;
};

export function Btn({ href, children, variant, download, external, className }: BtnProps) {
  const cls = ["btn", variant === "primary" && "btn-primary", variant === "ghost" && "btn-ghost", className]
    .filter(Boolean)
    .join(" ");

  const isExternal = external || /^(https?:|mailto:)/.test(href);
  // Download links (e.g. the résumé PDF) must be plain anchors — next/link
  // would intercept the click and break the browser download.
  const isInternalRoute = href.startsWith("/") && !href.startsWith("/#") && !download;

  let inner: ReactNode;
  if (isInternalRoute) {
    inner = (
      <Link href={href} className={cls} download={download}>
        {children}
      </Link>
    );
  } else {
    inner = (
      <a
        href={href}
        className={cls}
        download={download}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return <Magnetic>{inner}</Magnetic>;
}
