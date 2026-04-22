import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Markdown from "react-markdown";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  icon: LucideIcon;
  description: string;
  className?: string;
  tags?: readonly string[];
}

export function UpcomingProjectCard({
  title,
  icon,
  description,
  className,
  tags,
}: Props) {
  const Icon = icon;
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="text-base flex space-y-2 flex-col mt-2">
            <Icon />
            <span className="">{title}</span>
          </CardTitle>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
          <CardContent className="mt-auto flex flex-col pb-2">
            {tags && tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {tags?.map((tag) => (
                  <Badge
                    className="px-1 py-0 text-[10px]"
                    variant="secondary"
                    key={tag}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </div>
      </CardHeader>
    </Card>
  );
}
