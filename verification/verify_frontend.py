from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    current_dir = os.getcwd()
    index_path = f"file://{current_dir}/book/html/index.html"

    print(f"Navigating to {index_path}")
    page.goto(index_path)
    page.wait_for_timeout(1000)

    title = page.title()
    print(f"Page title: {title}")

    # Scroll to footer
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1000)

    # Take screenshot of the footer
    footer = page.locator("#footer")
    footer.screenshot(path="/home/jules/verification/screenshots/verification.png")

    # Also take a full page screenshot
    page.screenshot(path="/home/jules/verification/screenshots/full_page.png", full_page=True)

    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
