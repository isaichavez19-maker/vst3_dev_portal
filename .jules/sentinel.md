## 2026-02-15 - Redundant and Incomplete CSP Meta Tags
**Vulnerability:** Multiple redundant Content-Security-Policy meta tags caused browser enforcement of the most restrictive intersection, while missing required directives for external functionality (e.g., Rust playground).
**Learning:** In mdbook custom themes, templates may accumulate redundant security headers over time. Browsers handle multiple CSP tags by enforcing the intersection of all policies.
**Prevention:** Consolidate all CSP directives into a single, comprehensive meta tag and ensure all required external domains (like `play.rust-lang.org`) are explicitly whitelisted.
