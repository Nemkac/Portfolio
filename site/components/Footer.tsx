/* Shared footer (foot-row + foot-bottom). Content varies per page,
   so the big name, meta columns, and bottom row are passed in. */

import type { ReactNode } from "react";

export type FooterMeta = { label: string; value: ReactNode };

export function Footer({
  colName,
  meta,
  bottomLeft,
  bottomRight,
}: {
  colName: ReactNode;
  meta: FooterMeta[];
  bottomLeft: ReactNode;
  bottomRight: ReactNode;
}) {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-row">
          <div className="col-name">{colName}</div>
          <div className="foot-meta">
            {meta.map((m, i) => (
              <dl key={i}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </dl>
            ))}
          </div>
        </div>
        <div className="foot-bottom">
          <span>{bottomLeft}</span>
          <span>{bottomRight}</span>
        </div>
      </div>
    </footer>
  );
}
