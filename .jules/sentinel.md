## 2026-05-02 - mdBook Relative Paths and CSP for Analytics
**Vulnerability:** Broken images in root index.html when using subfolder-based source structure and Subresource Integrity (SRI) causing failures for dynamic scripts.
**Learning:**
1. In mdbook, if the first item in SUMMARY.md is located in a subfolder (e.g., `src/pages/README.md`), relative paths in that file (e.g., `../resources/logo.png`) are rendered incorrectly in the root `index.html`. Moving the landing page to the root of the source directory (`src/README.md`) and updating paths fixes this.
2. Applying SRI to dynamic third-party scripts like Google Analytics (`analytics.js`) is risky because providers may update the script content without changing the URL, leading to SRI failures and broken functionality. It is better to use a strong CSP and skip SRI for such assets.
**Prevention:**
1. Place the main landing page at the root of the `src` directory.
2. Avoid SRI for frequently updated third-party dynamic scripts; rely on CSP `script-src` and `connect-src` instead.
