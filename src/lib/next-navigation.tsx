'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouterContextType {
  pathname: string;
  params: Record<string, string>;
  push: (href: string) => void;
  replace: (href: string) => void;
  back: () => void;
}

const RouterContext = createContext<RouterContextType>({
  pathname: '/',
  params: {},
  push: () => {},
  replace: () => {},
  back: () => {}
});

function parsePath(fullHashOrPath: string): { pathname: string; params: Record<string, string> } {
  let path = fullHashOrPath;
  if (path.startsWith('#')) {
    path = path.slice(1);
  }
  if (!path || path === '') {
    path = '/';
  }

  // Match /projects/[slug]
  const projectMatch = path.match(/^\/projects\/([a-zA-Z0-9_-]+)/);
  if (projectMatch) {
    return {
      pathname: `/projects/${projectMatch[1]}`,
      params: { slug: projectMatch[1] }
    };
  }

  return { pathname: path, params: {} };
}

export const NextAppRouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [route, setRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.startsWith('#/')) {
        return parsePath(hash);
      }
      return parsePath(window.location.pathname);
    }
    return { pathname: '/', params: {} };
  });

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/')) {
        setRoute(parsePath(hash));
      } else {
        setRoute(parsePath(window.location.pathname));
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const push = (href: string) => {
    if (href.startsWith('#') && !href.startsWith('#/')) {
      // Anchor scroll on current page
      const el = document.getElementById(href.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    const normalized = href.startsWith('/') ? href : `/${href}`;
    window.history.pushState({}, '', `#${normalized}`);
    setRoute(parsePath(normalized));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const replace = (href: string) => {
    const normalized = href.startsWith('/') ? href : `/${href}`;
    window.history.replaceState({}, '', `#${normalized}`);
    setRoute(parsePath(normalized));
  };

  const back = () => {
    window.history.back();
  };

  return (
    <RouterContext.Provider
      value={{
        pathname: route.pathname,
        params: route.params,
        push,
        replace,
        back
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter() {
  const ctx = useContext(RouterContext);
  return {
    push: ctx.push,
    replace: ctx.replace,
    back: ctx.back
  };
}

export function usePathname() {
  const ctx = useContext(RouterContext);
  return ctx.pathname;
}

export function useParams<T extends Record<string, string> = Record<string, string>>(): T {
  const ctx = useContext(RouterContext);
  return ctx.params as T;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  replace?: boolean;
  scroll?: boolean;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  replace: shouldReplace,
  scroll = true,
  className = '',
  onClick,
  ...props
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    // External link or new tab
    if (props.target === '_blank' || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    e.preventDefault();

    if (href.startsWith('#') && !href.startsWith('#/')) {
      const el = document.getElementById(href.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: scroll ? 'smooth' : 'auto' });
        return;
      }
    }

    if (shouldReplace) {
      router.replace(href);
    } else {
      router.push(href);
    }

    if (scroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const formattedHref = href.startsWith('/') ? `#${href}` : href;

  return (
    <a href={formattedHref} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};
