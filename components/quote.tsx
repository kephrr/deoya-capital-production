import React from "react";

interface QuoteProps {
  citation: string;
  subtext: string;
}

export function Quote({ citation, subtext }: QuoteProps) {
  return (
    <div className="mt-16 text-center">
      <div className="mx-auto max-w-3xl">
        <blockquote className="font-serif text-2xl font-light leading-relaxed text-primary text-italic md:text-3xl">
          {citation}
        </blockquote>
        <cite className="mt-4 block text-sm font-medium text-muted-foreground">
          {subtext}
        </cite>
      </div>
    </div>
  );
}
