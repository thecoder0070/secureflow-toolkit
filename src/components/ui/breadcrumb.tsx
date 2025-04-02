
import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { Link } from "react-router-dom";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ className, separator = <ChevronRight className="h-4 w-4" />, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="breadcrumb"
    className={cn("flex flex-wrap items-center", className)}
    {...props}
  />
));
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground",
      className
    )}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbSeparator = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  />
));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  } & { 
    href?: string;
  }
>(({ className, asChild = false, href, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-foreground",
        className
      )}
      href={href}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

// Add the missing BreadcrumbPage component
const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    aria-current="page"
    className={cn("text-sm font-medium text-foreground", className)}
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    …
  </span>
));
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  BreadcrumbEllipsis,
};
