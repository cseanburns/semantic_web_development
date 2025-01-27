# HTML Grouping and Text-Level Semantic Elements

## Introduction

In this section, we learn about the most frequent HTML element types: grouping elements and text-level or inline semantic elements.

The grouping elements we cover here include:

- the `<p>` element
- the `<hr>` element
- the `<pre>` element
- the `<blockquote>` element
- the `<ol>` element
- the `<ul>` element
- the `<li>` element
- the `<dl>` element
- the `<dt>` element
- the `<dd>` element
- the `<main>` element
- the `<div>` element

For a few other defined elements, see: [Grouping content][grouping_whatwg]

Although the above elements are listed individually, some of these elements must be used together.
For example, the `<ul>` and the `<ol>` elements are used to create *unordered* and *ordered* lists, respectively.
However, either of these must include the `<li>` element to list items.

Likewise, we use the `<dl>` element to start a description or definition list.
Within that, we use the `<dt>` element to specify a term in a description/definition list
and the `<dd>` element to provide the description or definition.

We also cover a range of text-level or inline semantic elements.
There are nearly 30 of these elements, but some are used more frequently than others.
In this section, we'll cover the following text-level elements.

- the `<a>` element
- the `<em>` element
- the `<strong>` element
- the `<small>` element
- the `<s>` element
- the `<cite>` element
- the `<q>` element
- the `<abbr>` element
- the `<time>` element
- the `<code>` element
- the `<var>` element
- the `<samp>` element
- the `<kbd>` element
- the `<sub>` element
- the `<sup>` element
- the `<span>` element
- the `<br>` element

For the full list, see: [Text-level semantics][text_semantics_whatwg]

## A Quick Note on HTML Syntax

Some HTML tags are self-closing.
These include tags like `<br>`, `<meta>`, `<hr>`.
Self-closing means that these tags do not have a closing syntax.
That is, there's no such thing as: `</br>`, `</meta>`, `</hr>`, etc.

What gets confusing is that some tags have optional closing forms.
For example, the `<p>` and `<li>` tags do not have to be closed with `</p>` and `</li>`.
However, it's best to close these for clarity.
This is especially because some tags absolutely require closing forms.
These include `<div>`, `<span>`, etc.
Unless the tag is self-closing, go ahead and close it.
Otherwise, you'll just get into the weeds about what needs closing or not.

## Grouping Elements

## Text-level Semantic Elements

[grouping_whatwg]:https://html.spec.whatwg.org/multipage/grouping-content.html#grouping-content
[text_semantics_whatwg]:https://html.spec.whatwg.org/multipage/text-level-semantics.html#text-level-semantics
