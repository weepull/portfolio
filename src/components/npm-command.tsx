"use client";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Check, SquareTerminal } from "lucide-react";
import { useState } from "react";
import BlurFade from "./magicui/blur-fade";

export default function NpmCommand() {
  const [textCopied, setTextCopied] = useState(false);

  return (
    <div
      className={cn(
        "border dark:hover:border-white/50 border-black/20 hover:border-black/50 dark:border-white/20 rounded-lg w-max px-4 py-2 cursor-pointer flex justify-between items-center gap-2 group"
        // textCopied && "border-white hover:border-white"
      )}
      onClick={() => {
        navigator.clipboard.writeText(DATA.npmCommand);
        setTextCopied(true);
      }}
    >
      {textCopied ? (
        <BlurFade delay={0.04} yOffset={0}>
          <Check
            className="text-green-500 ease-in-out duration-200"
            size={15}
          />
        </BlurFade>
      ) : (
        <SquareTerminal size={15} className="ease-in-out duration-200" />
      )}
      <span
        className={cn(
          "font-light text-sm dark:text-white/50 text-black/60 dark:group-hover:text-white group-hover:text-black"
          // textCopied && "text-white"
        )}
      >
        {DATA.npmCommand}
      </span>
    </div>
  );
}
