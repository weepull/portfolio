import { RichText } from "@/components/rich-text";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  stackLabel: string;
  links?: readonly {
    type: string;
    href: string;
  }[];
}

// Stretched-link pattern: the title link's ::after covers the whole card so
// the card is clickable without nesting anchors. Inner links (description
// markdown, Source/Paper) sit above it with relative z-10.
export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  stackLabel,
  links,
}: Props) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded border border-hairline bg-raised transition-colors duration-150 hover:border-hairline-strong">
      <div className="relative h-24 border-b border-hairline">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 640px) 352px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          // Cards without a thumbnail get a recessed plate of the same height
          // showing the stack, so the grid keeps its rhythm.
          <div className="flex h-full flex-col justify-end gap-2 bg-page p-4">
            <p className="font-mono text-label font-medium uppercase text-fg-muted">
              {stackLabel}
            </p>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-mono text-fg">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-title font-medium text-fg">
            {href ? (
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-150 after:absolute after:inset-0 after:rounded after:content-[''] group-hover:text-accent focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-mono text-mono text-fg-muted">{dates}</p>
            {links && links.length > 0 && (
              <div className="flex gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 font-mono text-mono text-accent underline-offset-4 hover:underline"
                  >
                    {link.type}
                    <span aria-hidden> ↗</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <RichText className="text-body-sm text-fg-muted">{description}</RichText>

        {image && tags.length > 0 && (
          <p className="mt-auto font-mono text-mono text-fg-muted">
            {tags.join(" · ")}
          </p>
        )}

      </div>
    </article>
  );
}
