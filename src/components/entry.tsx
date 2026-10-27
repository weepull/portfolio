import Link from "next/link";

interface EntryProps {
  title: string;
  subtitle?: string;
  period: string;
  href?: string;
  description?: string;
}

// One CV-style row: a fixed mono date column, then title, subtitle and an
// always-visible description.
export function Entry({ title, subtitle, period, href, description }: EntryProps) {
  return (
    <article className="grid gap-x-6 gap-y-1 sm:grid-cols-[9rem_1fr]">
      <p className="font-mono text-mono tabular-nums text-fg-muted sm:pt-0.5">
        {period}
      </p>
      <div className="space-y-1">
        <h3 className="text-title font-medium text-fg">
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 transition-colors duration-150 hover:text-accent hover:underline"
            >
              {title}
              <span aria-hidden className="ml-1 text-accent">
                ↗
              </span>
            </Link>
          ) : (
            title
          )}
        </h3>
        {subtitle && <p className="text-body-sm text-fg-muted">{subtitle}</p>}
        {description && (
          <p className="max-w-prose pt-1 text-body-sm text-fg-muted">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
