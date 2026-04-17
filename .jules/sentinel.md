## 2026-04-17 - Content Security Policy and Rust Playground
**Vulnerability:** Content Security Policy (CSP) blocking interactive features (Rust Playground and Google Analytics) due to missing `connect-src` and `script-src` whitelisting.
**Learning:** In mdBook projects using the interactive Rust playground, the `theme/book.js` script makes fetch requests to `https://play.rust-lang.org` for crate metadata and code evaluation. These are blocked by a default `default-src 'self'` policy unless `connect-src` explicitly allows them.
**Prevention:** Always audit external fetches in `book.js` or other custom scripts when defining a CSP. Ensure `connect-src` and `script-src` include necessary third-party domains like `https://play.rust-lang.org` and `https://www.google-analytics.com`.
