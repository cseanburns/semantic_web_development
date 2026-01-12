# Final Project: Implementing a Semantic Website

The following is a sample final project assignment students should be able to complete upon finishing this book.

## Overview

Your final project is to design and build a small, semantically structured website that
reflects your understanding of HTML5, CSS3, Flexbox layout, JSON-LD, and web accessibility principles.
This project gives you the opportunity to integrate the core concepts we've explored throughout this work
into a cohesive and standards-compliant site.

## Instructions and Project Requirements

Please follow these steps when preparing your assignment.
Your final website must include the following:

### Step 1: Site Structure

- A total of **three, distinct HTML pages**.
    - Each page must have its own substantial content.
- Each page must include consistent **navigational links** connecting all three pages.
- Use of **semantic HTML5 elements** appropriately; e.g., `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, etc.
- All pages must link to the **same external CSS stylesheet**.
- Use **Flexbox only** for layout (no float-based layouts; media queries can be used for minor adjustments. Some Grid may be accepted, but the overall layout should be dictated by Flexbox).

### Step 2: Semantic Web Component

- Each HTML page must include **JSON-LD** in a `<script type="application/ld+json">` block in the `<head>`.
- The JSON-LD must be **unique to each page** and reflect that page's **actual content**.

### Step 3: Testing and Validation

- **Validate** your HTML5 and CSS3 using the [HTML5 Validator][html5_validator] and [CSS3 Validator][css3_validator].
    - You must have no **errors** in your code (you should fix warnings but this is optional).
- **Validate** your JSON-LD using the [schema.org validator][schema_validator] for all three pages.
- **Review the accessibility** of your color scheme using [WAVE (web accessibility evaluation tool)][wave].
- **Turn on accessibility features** (like screen readers, high contrast mode, etc.) on your **laptop or smartphone** and review your own site from that perspective.
    - This step builds on our earlier activity where you explored accessibility modes of various websites.

### Step 4: Reflection Statement

Include a brief (400-600 words) reflection in which you:

- Discuss what you learned from the project.
- Reflect on challenges you encountered and how you addressed them.
- Include a focused section on **accessibility**:
    - What did you discover when testing your site in accessibility mode?
    - How might you improve the accessibility of your site further?

### Step 5: Submitting Your Assignment Checklist

- A **single** document (PDF or Word) containing a:
    - Link to your website.
    - Link to your GitHub repository for your website.
    - WAVE review summary or screenshot.
    - HTML5/CSS3 validator confirmation (screenshots or links).
    - JSON-LD validator confirmation (screenshots or links).
    - Reflection statement.

[wave]:https://wave.webaim.org/
[schema_validator]:https://validator.schema.org/
[html5_validator]:https://validator.w3.org/
[css3_validator]:https://jigsaw.w3.org/css-validator/
