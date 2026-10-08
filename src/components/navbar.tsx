import { DATA } from "@/data/resume";
import Link from "next/link";

// Static bottom bar: section anchors plus profile links. Raised surface and a
// hairline border; no blur, no shadow, no pointer-tracking effects.
export default function Navbar() {
  const socials = Object.values(DATA.contact.social).filter((s) => s.navbar);

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-30 mx-auto flex h-dock w-max items-center rounded border border-hairline-strong bg-raised px-2"
    >
      <ul className="flex items-center">
        {DATA.navbar.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex h-dock items-center px-3 font-mono text-mono text-fg-muted transition-colors duration-150 hover:text-fg"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div aria-hidden className="mx-1 h-5 w-px bg-hairline-strong" />
      <ul className="flex items-center">
        {socials.map((social) => (
          <li key={social.name}>
            <Link
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="flex size-dock items-center justify-center text-fg-muted transition-colors duration-150 hover:text-fg"
            >
              <social.icon className="size-4" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
