import { useEffect } from "react";

type SEOProps = {
  title: string;
  description?: string;
  canonical?: string;
};

export const SEO = ({ title, description = "Launcher UI com animações fluidas e navegação suave.", canonical = window.location.href }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const ensure = (name: string, attr: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    ensure("description", "name", description);
    ensure("og:title", "property", title);
    ensure("og:description", "property", description);
    ensure("og:type", "property", "website");

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }, [title, description, canonical]);

  return null;
};
