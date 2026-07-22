import React, { createContext, useContext, useState, useEffect } from "react";

// Types for Next.js Metadata
export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{ url: string; width?: number; height?: number; alt?: string }>;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
  };
}

// Router Event System
type RouteListener = (path: string) => void;
const listeners = new Set<RouteListener>();

export function pushRoute(path: string) {
  window.history.pushState({}, "", path);
  listeners.forEach((listener) => listener(path));
  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Routing Context
const PathContext = createContext<string>("/");

export function PathProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    const handleRouteUpdate = (newPath: string) => {
      setPath(newPath);
    };

    window.addEventListener("popstate", handlePopState);
    listeners.add(handleRouteUpdate);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      listeners.delete(handleRouteUpdate);
    };
  }, []);

  return <PathContext.Provider value={path}>{children}</PathContext.Provider>;
}

// next/navigation hooks
export function usePathname() {
  return useContext(PathContext);
}

export function useRouter() {
  return {
    push: (href: string) => pushRoute(href),
    replace: (href: string) => {
      window.history.replaceState({}, "", href);
      listeners.forEach((listener) => listener(href));
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    back: () => window.history.back(),
    forward: () => window.history.forward(),
  };
}

// next/link replacement
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function Link({ href, children, onClick, ...props }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    
    // Check if it's an external link or modifier key was pressed
    if (
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.defaultPrevented
    ) {
      return;
    }

    e.preventDefault();
    pushRoute(href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export default Link;
