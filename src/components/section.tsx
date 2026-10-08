import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  label: string;
  count?: number;
  className?: string;
  children: React.ReactNode;
}

// Section header: mono label, a hairline rule across the row, optional count.
export function Section({ id, label, count, className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className={className}>
      <div className="mb-6 flex items-center gap-4">
        <h2
          id={`${id}-label`}
          className="font-mono text-label font-medium uppercase text-fg-muted"
        >
          {label}
        </h2>
        <div aria-hidden className="h-px flex-1 bg-hairline" />
        {count !== undefined && (
          <span
            aria-hidden
            className="font-mono text-label tabular-nums text-fg-muted"
          >
            {String(count).padStart(2, "0")}
          </span>
        )}
      </div>
      {children}
    </section>
  );
}

export function SubLabel({ children, className }: { children: string; className?: string }) {
  return (
    <h3
      className={cn(
        "font-mono text-label font-medium uppercase text-fg-muted",
        className
      )}
    >
      {children}
    </h3>
  );
}
