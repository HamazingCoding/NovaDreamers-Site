import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}

export function GradientText({
  children,
  className,
  from = "from-[hsl(var(--neon-teal))]",
  via = "via-[hsl(var(--neon-purple))]",
  to = "to-[hsl(var(--neon-pink))]",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r",
        from,
        via,
        to,
        className
      )}
    >
      {children}
    </span>
  );
}
