# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds the book manuscript as Markdown chapters (e.g., `2b1-using-vscode-and-github.md`, `p3-css3-and-web-design.md`).
- `src/images/` stores figures referenced by chapters.
- `SUMMARY.md` defines the mdBook chapter order; keep it in sync with new files.
- `epub_gen.sh` contains an explicit ordered list for the EPUB; update it when adding or renaming chapters.
- `book/` is generated output from mdBook; do not edit by hand.
- Root assets/config include `book.toml`, `title.txt`, `epub.css`, `epub_metadata.xml`, and `semantic_web_development.epub`.
- Legacy/semester material lives in `demos/`, `web2022/`, `web2023/`, and `webdev/`.

## Build, Test, and Development Commands
From the repository root:
- `make create`: runs `mdbook build .` then `./epub_gen.sh` to refresh `book/` and the EPUB.
- `mdbook build .`: rebuilds the HTML site into `book/`.
- `./epub_gen.sh`: regenerates `semantic_web_development.epub` (requires `pandoc`).
- Optional: `mdbook serve .` for a local preview when mdBook is installed.

## Coding Style & Naming Conventions
- Keep Markdown readable with short lines and blank lines between paragraphs.
- Use reference-style links and place link definitions at the bottom of each file.
- Prefer `-` bullets and 4-space indents for nested lists, matching existing chapters.
- Filenames use numeric/letter prefixes to preserve ordering; follow the existing pattern when adding new chapters.
- Image files should be lowercase, descriptive, and referenced with relative paths like `images/cover_image_semantic_web_development.png`.

## Testing Guidelines
- There is no automated test suite.
- Validate content changes by running `mdbook build .` and reviewing `book/index.html`.
- For EPUB changes, run `./epub_gen.sh` and open `semantic_web_development.epub` in a reader.

## Commit & Pull Request Guidelines
- Commit history favors short, lowercase, verb-first messages (e.g., "added reading", "rebuild mdbook").
- PRs should include a brief summary, list of updated chapters/assets, and any generated output that changed.
- If a change affects layout or images, include a screenshot or note how to verify locally.
