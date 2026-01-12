# Document Metadata: JSON-LD and Schema.org

## Introduction

Near the beginning of this work, we learned about the importance of structuring and
adding metadata to the `<head>` section of our HTML documents.
For example, the `<head>` section should contain a `<title>` element that accurately describes the content of the document.

We also learned about the `<meta>` element and how it can be used with the `name` attribute to describe the
author and to provide a description and keywords of the web pages we create.
Adding this metadata provides search engines with the information they need to return relevant results to their users.

As an example, the following HTML code snippet was introduced in the
[Document Structure and Metadata][document_structure_metadata] section of this work.
The code snippet includes `<title>` and `<meta>` elements that describe a page about *Linux Systems Administration*
authored by *C. Sean Burns*:

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Using the Linux OS for Systems Administration</title>
        <base href="https://www.example.org/">
        <link rel="stylesheet" href="css/style.css">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="C. Sean Burns">
        <meta name="description" content="An introduction to Systems Administration with Linux OS, including Debian and Ubuntu">
        <meta name="keywords" content="systems administration, linux, debian, ubuntu">
        <style>
            html { font-family: monospace; }
        </style> 
    </head>
    <body>
    </body>
</html>
```

In the [HTML Semantic Elements](2b-section-elements.html) and the
[HTML Grouping and Text-Level Semantics](2c-grouping-semantic-elements.html) sections of this work,
we were introduced to the ways that the HTML5 language created **semantic elements** that help to add meaning to a document's structure.
These elements are placed in the `<body>` section of a web page.

For example, the `<article>` element
<q>represents a self-contained composition in a document, page, application, or site</q>
([`<article>`: The Article Contents element][article_mdn]).
We might use the `<article>` element to capture a part of a web page that has an essay, blog post, news article, or like.
Likewise, the `<nav>` element is a semantic element that
<q>represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents</q> 
([`<nav>`: The Navigation Section element][nav_mdn]).
Thus we use this to provide navigation on our websites.

Combined, via the elements we add to our `<head>` and `<body>` sections of our web pages,
HTML5 provides tools to add metadata and semantic data to our web pages and thus help build **The Semantic Web**.

However, those elements are primarily aimed at adding semantic data about the document as a whole and its structure.
In this last section of our work, we will explore how to add semantic data to our web pages that provide
more information about the **content** of those pages.

To do that, we will learn about the [schema.org][schema] vocabulary.
Schema.org is a **data model** that we will serialize as JSON-LD, or [JSON-LD][json_ld_wiki].
Therefore, we will first learn how to structure data using [JSON][json_wiki],
which is a format for data exchange, primarily across the internet.
And then we will learn how to serialize, or integrate, a schema.org vocabulary into JSON-LD.

By adding appropriate metadata in the `<head>` sections and semantic elements in the `<body>` sections of our web documents,
and by adding JSON-LD metadata to our documents, we will make a contribution to the [Semantic Web][semantic_web_wiki].
The result will be websites that are more accessible to search engines, AI, and to our users.

In the next section, we will begin by learning how to create JSON objects.
Then in the following section, we learn about the schema.org data model and how to use it.
Finally, we will learn how to serialize the schema.org vocabulary as JSON-LD and add it to our web pages.

By the end of this chapter, you will be able to:

- Identify the purpose of JSON-LD and schema.org
- Use schema.org types and properties to describe content
- Embed structured data in a web page using JSON-LD

[article_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
[json_ld_wiki]:https://en.wikipedia.org/wiki/JSON-LD
[json_wiki]:https://en.wikipedia.org/wiki/JSON
[nav_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
[schema]:https://schema.org/
[semantic_web_wiki]:https://en.wikipedia.org/wiki/Semantic_Web
[document_structure_metadata]:2a-document-structure-and-metadata.html

<!--
## References

Iliadis, A., Acker, A., Stevens, W., & Kavakli, S. B. (2025).
One schema to rule them all: How Schema.org models the world of search.
*Journal of the Association for Information Science and Technology, 76*(2), 460–523.
[doi.org/10.1002/asi.24744](https://doi.org/10.1002/asi.24744)
-->
