import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Content is rendered visible in the server HTML; the entrance is a CSS-only
// enhancement that needs no JS and is skipped under prefers-reduced-motion.
const BlurFade = ({ children, className, delay = 0 }: BlurFadeProps) => (
  <div
    className={cn("motion-safe:animate-enter", className)}
    style={{ animationDelay: `${0.04 + delay}s` }}
  >
    {children}
  </div>
);

export default BlurFade;
