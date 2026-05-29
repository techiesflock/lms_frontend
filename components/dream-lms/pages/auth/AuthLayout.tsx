import type { ReactNode } from "react";
import { CheckIcon } from "./auth-icons";
import { DEFAULT_AUTH_STATS, type AuthHeroConfig } from "./hero-config";

type AuthLayoutProps = {
  hero: AuthHeroConfig;
  children: ReactNode;
};

export function AuthLayout({ hero, children }: AuthLayoutProps) {
  return (
    <div className="mw-login">
      <aside className="mw-login__hero" aria-label="MetaWaves learning platform">
        <div className="mw-login__hero-mesh" aria-hidden />
        <div className="mw-login__hero-orb mw-login__hero-orb--1" aria-hidden />
        <div className="mw-login__hero-orb mw-login__hero-orb--2" aria-hidden />
        <div className="mw-login__hero-orb mw-login__hero-orb--3" aria-hidden />
        <div className="mw-login__hero-grain" aria-hidden />

        <div className="mw-login__hero-inner mw-login__reveal">
          <span className="mw-login__hero-badge">{hero.badge}</span>
          <h2 className="mw-login__hero-title">
            <span className="mw-login__hero-title-line">{hero.titleLine}</span>{" "}
            <span className="mw-login__hero-title-accent">{hero.titleAccent}</span>
          </h2>
          <p className="mw-login__hero-desc">{hero.description}</p>
          <ul className="mw-login__hero-list">
            {hero.points.map((point, i) => (
              <li
                key={point}
                className="mw-login__reveal"
                style={{ animationDelay: `${120 + i * 70}ms` }}
              >
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div
            className="mw-login__hero-stats mw-login__reveal"
            style={{ animationDelay: "360ms" }}
          >
            {DEFAULT_AUTH_STATS.map((stat) => (
              <div key={stat.label} className="mw-login__hero-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mw-login__hero-visual" aria-hidden>
          <div className="mw-login__float-card mw-login__float-card--1">
            <span className="mw-login__float-card-tag">Design</span>
            <span className="mw-login__float-card-bar" />
            <span className="mw-login__float-card-bar mw-login__float-card-bar--short" />
          </div>
          <div className="mw-login__float-card mw-login__float-card--2">
            <span className="mw-login__float-card-tag">Development</span>
            <div className="mw-login__float-card-progress">
              <span style={{ width: "72%" }} />
            </div>
          </div>
          <div className="mw-login__float-card mw-login__float-card--3">
            <span className="mw-login__float-card-tag">Business</span>
            <span className="mw-login__float-card-metric">87% complete</span>
          </div>
        </div>
      </aside>

      <main className="mw-login__main">
        <div className="mw-login__main-inner">{children}</div>
      </main>
    </div>
  );
}
