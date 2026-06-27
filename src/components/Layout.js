import * as React from "react";
import { Link } from "gatsby";

const navItems = [
  { label: "Docs", to: "/docs/" },
  { label: "Getting Started", to: "/getting-started/" },
  { label: "Concepts", to: "/concepts/" },
  { label: "API", to: "/api/" },
  { label: "Community", to: "/community/" },
];

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link to="/" className="brand" aria-label="Neuro Graph home">
          <span className="brand-mark">NG</span>
          <span>Neuro Graph</span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} activeClassName="active">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>Neuro Graph is open-source documentation for knowledge graph builders.</p>
        <p>
          Released under the Apache-2.0 license. Edit this site on GitHub at{" "}
          <a href="https://github.com/neuro-graph/neuro-graph.github.io">neuro-graph/neuro-graph.github.io</a>.
        </p>
      </footer>
    </div>
  );
}
