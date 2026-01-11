#!/usr/bin/env bash

# generate an epub from src/md files, see https://pandoc.org/epub.html

set -euo pipefail

# Directory containing your markdown files
SRC_DIR="src"
 
# CSS file for epub styling
CSS_FILE="epub.css"
 
# Name of the output epub
OUTPUT_FILE="semantic_web_development.epub"

ordered=(title.txt
    p1-introduction-to-semantic-web-development.md
    1a-the-semantic-web.md
    1b-user-experience-accessibility.md
    1c-tools-setup-workflow.md
    1d-designing-with-inkscape.md
    p2-html5-and-the-web.md
    2a-document-structure-and-metadata.md
    2b-section-elements.md
    2b1-using-vscode-and-github.md
    2c-grouping-semantic-elements.md
    2d-links-and-attributes.md
    2e-embedded-content.md
    2f-tables-and-forms.md
    p3-css3-and-web-design.md
    3a-css-getting-started.md
    3a1-syntax-and-selectors.md
    3a2-colors-units-measurements.md
    3b-box-model.md
    3b1-margins-borders-padding-sizing.md
    3c-typography-and-font-styles.md
    3d-images-lists-backgrounds.md
    3e-responsive-layouts-with-flexbox.md
    3e1-flexbox-basics.md
    p4-document-metadata-json-ld-schema-org.md
    4a-json-basics.md
    4b-schema-org-schema-types-structured-data.md
    4c-json-ld-and-schema-org-integration.md
    p5-conclusion.md
    a1-final-project.md)

# Build the full paths, checking each one
md_files=()
for name in "${ordered[@]}"; do
	path="$SRC_DIR/$name"
	if [[ ! -f "$path" ]]; then
		echo "Error: '$path' not found!" >&2
		exit 1
	fi
	md_files+=("$path")
done

# Run pandoc with that ordered list
pandoc "${md_files[@]}" \
    --resource-path="$SRC_DIR" \
	--css="$CSS_FILE" \
	-o "$OUTPUT_FILE" \
    --standalone \
    --toc \
    --epub-metadata="epub_metadata.xml" \
    --epub-cover-image="src/images/cover_image_semantic_web_development.png"
