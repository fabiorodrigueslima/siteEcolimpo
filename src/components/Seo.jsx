import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../data/site";

export default function Seo({ title, description, noIndex = false }) {
  const { pathname } = useLocation();
  const canonical = `${site.url}${pathname === "/" ? "/" : pathname}`;

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = "pt-BR";

    const setMeta = (selector, key, name, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(key, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", noIndex ? "noindex, follow" : "index, follow");
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
  }, [canonical, description, noIndex, title]);

  return null;
}

