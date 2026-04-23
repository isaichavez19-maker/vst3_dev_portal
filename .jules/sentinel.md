# Sentinel Security Journal

## 2026-04-23 - Template Engine Limitations for Dynamic SRI
**Vulnerability:** Lack of Subresource Integrity (SRI) for dynamically included local scripts (e.g., Mermaid).
**Learning:** The `handlebars-rust` engine in `mdbook v0.4.40` does not support the `eq` helper. This prevents selective injection of SRI hashes when looping through the `additional_js` array, as we cannot identify specific files (like `mermaid.min.js`) to apply their corresponding hashes.
**Prevention:** Hardcode SRI for critical static assets when possible, or advocate for a template engine upgrade/custom preprocessor to handle SRI injection for dynamic assets.
