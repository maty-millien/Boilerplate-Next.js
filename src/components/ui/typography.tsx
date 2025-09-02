import * as React from "react";

import { cn } from "@/lib/utils";

function H1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="h1"
      className={cn(
        "text-4xl md:text-5xl leading-tight font-extrabold",
        className
      )}
      {...props}
    />
  );
}

function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="h2"
      className={cn("text-3xl md:text-4xl leading-tight font-bold", className)}
      {...props}
    />
  );
}

function H3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="h3"
      className={cn(
        "text-2xl md:text-3xl leading-snug font-semibold",
        className
      )}
      {...props}
    />
  );
}

function H4({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      data-slot="h4"
      className={cn("text-xl leading-snug font-medium", className)}
      {...props}
    />
  );
}

function H5({ className, ...props }: React.ComponentProps<"h5">) {
  return (
    <h5
      data-slot="h5"
      className={cn("text-lg leading-snug font-medium", className)}
      {...props}
    />
  );
}

function H6({ className, ...props }: React.ComponentProps<"h6">) {
  return (
    <h6
      data-slot="h6"
      className={cn(
        "text-base leading-tight font-medium uppercase tracking-wide text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function Lead({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="lead"
      className={cn("text-lg text-muted-foreground max-w-prose", className)}
      {...props}
    />
  );
}

function Body({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="body"
      className={cn("text-base leading-relaxed", className)}
      {...props}
    />
  );
}

function Small({ className, ...props }: React.ComponentProps<"small">) {
  return (
    <small
      data-slot="small"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function Caption({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="caption"
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

function Overline({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="overline"
      className={cn(
        "uppercase tracking-widest text-xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Body, Caption, H1, H2, H3, H4, H5, H6, Lead, Overline, Small };
