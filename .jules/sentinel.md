## 2026-05-12 - Redundant and Incomplete CSP Tags
**Vulnerability:** Redundant and incomplete Content-Security-Policy meta tags in `theme/index.hbs` led to a fragmented security policy that could cause resource blocking and was missing necessary whitelists for Rust Playground features.
**Learning:** Browsers enforce the intersection of multiple CSP policies, meaning if one tag blocks a resource but another allows it, the resource is still blocked. Redundant tags also make the policy harder to maintain.
**Prevention:** Consolidate CSP into a single comprehensive tag and ensure all required external domains (like `play.rust-lang.org`) are explicitly whitelisted across all relevant directives (`script-src`, `connect-src`, etc.).
