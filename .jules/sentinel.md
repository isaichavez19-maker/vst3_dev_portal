## 2026-05-05 - CSP Consolidation and Asset Whitelisting
**Vulnerability:** Duplicate and incomplete Content Security Policy meta tags.
**Learning:** mdBook templates can end up with multiple CSP tags if not carefully managed. Whitelisting 'unsafe-inline' is currently necessary for mdBook's default theme-switching and sidebar logic, but external assets (MathJax, Google Analytics, Rust Playground) must be explicitly allowed in 'connect-src' and 'script-src' to function correctly.
**Prevention:** Use a single, consolidated CSP meta tag in `theme/index.hbs` and maintain a whitelist of required external domains for all relevant directives.
