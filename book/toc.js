// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="p1-introduction-to-semantic-web-development.html"><strong aria-hidden="true">1.</strong> Introduction to Semantic Web Development</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="1a-the-semantic-web.html"><strong aria-hidden="true">1.1.</strong> The Semantic Web</a></li><li class="chapter-item expanded "><a href="1b-tools-setup-workflow.html"><strong aria-hidden="true">1.2.</strong> Tools, Setup, and Workflow</a></li><li class="chapter-item expanded "><a href="1c-user-experience-accessibility.html"><strong aria-hidden="true">1.3.</strong> User Experience and Accessibility</a></li><li class="chapter-item expanded "><a href="1d-designing-with-inkscape.html"><strong aria-hidden="true">1.4.</strong> Designing with Inkscape</a></li></ol></li><li class="chapter-item expanded "><a href="p2-html5-and-the-web.html"><strong aria-hidden="true">2.</strong> HTML5 and The Web</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2a-document-structure-and-metadata.html"><strong aria-hidden="true">2.1.</strong> Document Structure and Metadata</a></li><li class="chapter-item expanded "><a href="2b-section-elements.html"><strong aria-hidden="true">2.2.</strong> Section Elements</a></li><li class="chapter-item expanded "><a href="2c-grouping-semantic-elements.html"><strong aria-hidden="true">2.3.</strong> Grouping and Text Level Semantic Elements</a></li><li class="chapter-item expanded "><a href="2d-links-and-attributes.html"><strong aria-hidden="true">2.4.</strong> Links and Attributes</a></li><li class="chapter-item expanded "><a href="2e-embedded-content.html"><strong aria-hidden="true">2.5.</strong> Images and Multimedia</a></li><li class="chapter-item expanded "><a href="2f-tables-and-forms.html"><strong aria-hidden="true">2.6.</strong> Tables and Forms</a></li></ol></li><li class="chapter-item expanded "><a href="p3-css3-and-web-design.html"><strong aria-hidden="true">3.</strong> CSS3 and Web Design</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="3a-css-getting-started.html"><strong aria-hidden="true">3.1.</strong> CSS: Getting Started</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="3a1-syntax-and-selectors.html"><strong aria-hidden="true">3.1.1.</strong> Syntax and Selectors</a></li><li class="chapter-item expanded "><a href="3a2-colors-units-measurements.html"><strong aria-hidden="true">3.1.2.</strong> Colors and Units of Measurements</a></li></ol></li><li class="chapter-item expanded "><a href="3b-box-model.html"><strong aria-hidden="true">3.2.</strong> Box Model</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="3b1-margins-borders-padding-sizing.html"><strong aria-hidden="true">3.2.1.</strong> Margins, Borders, Padding, Sizing</a></li></ol></li><li class="chapter-item expanded "><a href="3c-typography-and-font-styles.html"><strong aria-hidden="true">3.3.</strong> Typography and Font Styles</a></li><li class="chapter-item expanded "><a href="3d-images-lists-backgrounds.html"><strong aria-hidden="true">3.4.</strong> Images, Lists, and Backgrounds</a></li><li class="chapter-item expanded "><a href="3e-responsive-layouts-with-flexbox.html"><strong aria-hidden="true">3.5.</strong> Responsive Layouts with Flexbox</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="3e1-flexbox-basics.html"><strong aria-hidden="true">3.5.1.</strong> Flexbox Basics</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="p4-document-metadata-json-ld-schema-org.html"><strong aria-hidden="true">4.</strong> Document Metadata: JSON-LD and Schema.org</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="4a-json-basics.html"><strong aria-hidden="true">4.1.</strong> JSON Basics</a></li><li class="chapter-item expanded "><a href="4b-schema-org-schema-types-structured-data.html"><strong aria-hidden="true">4.2.</strong> Schema.org, Schema Types, and Structured Data</a></li><li class="chapter-item expanded "><a href="4c-json-ld-and-schema-org-integration.html"><strong aria-hidden="true">4.3.</strong> JSON-LD and Schema.org Integration</a></li></ol></li><li class="chapter-item expanded "><a href="p5-conclusion.html"><strong aria-hidden="true">5.</strong> Conclusion</a></li><li class="chapter-item expanded "><a href="a1-final-project.html"><strong aria-hidden="true">6.</strong> Appendix: Sample Final Project Description</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
