
"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-black/10 dark:bg-black",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-50",
          showRadialGradient &&
            "bg-radial-gradient from-techGreen/30 via-techGreen/5 to-transparent"
        )}
      />
      <div className="absolute inset-0">
        <div className="aurora-dot-effect h-full w-full" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="h-full w-full">
            <div className="absolute -left-4 top-0 h-[600px] w-[600px] rounded-full bg-techGreen opacity-20 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-techGreen opacity-20 blur-3xl" />
            <div className="absolute bottom-1/3 left-1/3 h-[800px] w-[600px] rounded-full bg-techGreen opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
