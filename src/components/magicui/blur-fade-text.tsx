import { cn } from "@/lib/utils";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const BlurFadeText = ({ text, className, delay = 0 }: BlurFadeTextProps) => (
  <div className="flex">
    <span
      className={cn("inline-block motion-safe:animate-enter", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {text}
    </span>
  </div>
);

export default BlurFadeText;
