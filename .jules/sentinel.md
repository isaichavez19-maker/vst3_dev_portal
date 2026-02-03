## 2025-10-22 - Build System Incompatibility with Modern mdBook
**Vulnerability:** N/A (Build System Challenge)
**Learning:** The project's legacy configuration and theme are incompatible with modern versions of `mdbook` (v0.4.40+). Specifically, the `multilingual` key in `book.toml` and deprecated Handlebars helpers (`theme_option`, `previous`, `next`) in `theme/index.hbs` cause build failures. To verify security enhancements in the theme, these must be temporarily patched.
**Prevention:** Future theme modifications should prioritize modern `mdbook` syntax (e.g., using `{{#if previous}}` instead of `{{#previous}}`) and avoid deprecated configuration keys. Verification should always involve a fresh `mdbook build` to catch these environment-specific regressions.
