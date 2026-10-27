import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";

// Markdown for prose from DATA. Inline links are accent *and* underlined so
// they are not distinguished by colour alone (WCAG 1.4.1).
export function RichText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      <Markdown
        components={{
          a: ({ href = "#", children }) => {
            const external = href.startsWith("http");
            return (
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="relative z-10 text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-150 hover:decoration-accent"
              >
                {children}
              </Link>
            );
          },
          strong: ({ children }) => (
            <strong className="font-medium text-fg">{children}</strong>
          ),
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}
