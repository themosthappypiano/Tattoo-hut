import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-32 relative overflow-hidden", className)}>
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, center = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 lg:mb-16", center && "text-center", className)}>
      {subtitle && (
        <span className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl lg:text-5xl font-display font-bold text-white uppercase tracking-tight">
        {title}
      </h2>
      <div className={cn(
        "h-1 bg-gradient-to-r from-primary to-transparent mt-4",
        center ? "w-24 mx-auto" : "w-24"
      )} />
    </div>
  );
}
