## 2026-04-08 - [Security Hardening of mdBook Templates]
**Vulnerability:** Redundant and incomplete Content-Security-Policy (CSP), lack of Subresource Integrity (SRI) for external scripts, and potential tabnabbing on external links.
**Learning:** mdBook templates (`theme/index.hbs`) often contain redundant or loose CSP tags that can be consolidated. Supporting features like the Rust Playground requires whitelisting `https://play.rust-lang.org` in both `script-src` and `connect-src`. SRI hashes for common CDN assets like MathJax should be explicitly added to protect against CDN compromises.
**Prevention:** Always consolidate CSP tags, use SRI for all external scripts, and ensure all `target="_blank"` links have `rel="noopener noreferrer"`.
