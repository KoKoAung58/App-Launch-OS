import Image from "next/image";
import { cn } from "@/lib/utils";

interface OwlMascotProps {
  className?: string;
  size?: number;
}

export function OwlMascot({ className, size = 40 }: OwlMascotProps) {
  return (
    <Image
      src="/launch_owl.png"
      alt="App Launch OS owl mascot"
      width={size}
      height={size}
      className={cn("inline-block object-contain", className)}
      priority
    />
  );
}

export function OwlLogoMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 font-bold text-lg tracking-tight",
        className
      )}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md" />
        <OwlMascot size={32} />
      </div>
      <span className="text-gradient">App Launch OS</span>
    </div>
  );
}
