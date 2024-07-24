# Document Structure and Metadata

W3C is the organizing body for managing the HTML standards (among other web related technologies), its specifications, and documentation. The documentation for HTML5 should be constantly referenced throughout this course:

- [HTML5 at W3C][html5_w3c] or the most current draft: https://html.spec.whatwg.org/
- Specifically the section on semantics: https://html.spec.whatwg.org/#semantics

Another nice reference source is maintained by Mozilla:

- [MDN Web Docs: HTML][mdnHTML]

## The Root Element

> The `<html>` element represents the root of an HTML document (w3org, Root Element section).

This element establishes the root (base) of the document and it follows the **DOCTYPE** (document type) declaration. The `<html>` element should be accompanied with a language attribute (more on attributes soon).

```
<!DOCTYPE html>
<html lang="en">
```

## Document Metadata

> The `<head>` element contains the document's metadata plus other information ([w3org, Document Metadata section][w3org_metadata]).

There are five elements that belong to the `<head>` section. They include:

- the `<title>` element: states the document's title
- the `<base>` element: declares the base URL
- the `<link>` element: establishes links to other resources, such as a CSS stylesheet
- the `<meta>` element: provides additional metadata
- the `<style>` element: enables internal styling with CSS

## HTML Section Elements

There are ten main HTML section elements, or elements used to define the sections of an HTML document. These will be some of the main and most often elements that we'll use in our HTML documents. They include:

- the `<body>` element
- the `<section>` element
- the `<nav>` element
- the `<article>` element
- the `<aside>` element
- the `<h1>`, `<h2>`, ..., `<h6>` elements
- the `<hgroup>` element
- the `<header>` element
- the `<footer>` element
- the `<address>` element

See: [HTML Sections][html_sections]

## Grouping Content Elements

The other set of common elements that we'll use quite often are the HTML grouping elements. There are 13 elements categorized as grouping elements. These include:

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
- the `<figure>` element
- the `<figcaption>` element
- the `<div>` element

Some of these elements must be used together. For example, the <ul> and the <ol> elements are used to create unordered and ordered lists, respectively, and either one must include the <li> element to list the items.

Likewise, the `<dl>` element is for starting description/definition lists and will also include the `<dt>` element for specifying a term in a description/definition list and the `<dd>` element to provide the description or definition.

See: [Grouping content][grouping_content]

## Text-level Semantic Elements

There are 27 elements categorized as text-level semantic elements. You can read about the full list at the link below. Here I will only cover a few of the main ones:

- the `<a>` element
- the `<em>` element
- the `<strong>` element
- the `<cite>` element
- the `<abbr>` element
- the `<time>` element
- the `<code>` element
- the `<sub>` element
- the `<q>` element
- the `<span>` element
- the `<br>` element

See: [Text-level semantics][text_semantics]

## The Structure of an HTML Document

An HTML document follows a structure that begins with the DOCTYPE and HTML element. The second section is the HEAD section that includes document metadata. This is followed by the BODY section, which contains the content of the document. The content of an HTML document may include the SECTION elements, the GROUPING elements, and the TEXT-LEVEL SEMANTIC elements. A basic document structure might look like this:

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
		<link>
		<meta>
	</head>
	<body>
		<header></header>
		<nav></nav>
		<section>
			<h1></h1>
			<p></p>
		</section>
		<section>
			<h2></h2>
			<p></p>
		</section>
		<footer></footer>
	</body>
</html>
```

### Start and End Tags

Most HTML elements will require open and end tags with content between these tags. For example, a `<h1>` tag is for heading level one content and will end with a closing `</h1>` tag, indicated by the forward slash:

```
<h1>Title of Paper</h1>
```

A few elements do not work like this, but these are used sparingly. For example, most of the elements in the DOCUMENT METADATA section only use an open tag because they only take HTML attributes (next up) and not content:

```
<link rel="stylesheet" href="styles/style.css">
<meta charset="utf-8">
```

The `<br>` element also does not have a start or an end tag.Because the `<br>` element inserts a line break, it is used at the point in the text where a line break is needed and not to enclose content. It also includes a foward slash, but the slash is placed after the br. It's useful for breaking lines around addresses or poetry. For example, here are a few lines of The Litany Against Fear from the book Dune:

```
<p>I must not fear<br/>
Fear is the mind-killer<br/>
I will face my fear<br/>
```

### HTML Attributes

HTML Attributes are:

> additional values that configure the elements or adjust their behavior in various ways to meet the criteria the users want ([HTML Attribute Reference, MDN Web Docs][html_attributes]).

The syntax to use is:

```
<element attribute="value">
```

Many attributes are useful for JavaScript programming, but there are a few, essential attributes that are needed for regular HTML markup. These are referred to as global attributes. Some of the main ones include:

- the lang attribute
- the title attribute
- the class attribute
- the id attribute
- the style attribute

We used the lang attribute to declare the document's language in the `<html>` root element.

```
<html lang="en"></html>
```

We use the title attribute (not the `<title>` element) to provide a title to objects like figures `<figure>` and images `<img>` (but we can title anything really):

```
<img title="Title of Image">photo.jpg</img>
```

The class and id attribute are primarily used to identify specific parts of an HTML document and then to style those parts with CSS. The id attribute can be used to create links within the document, like bookmarks or table of contents. It's important to remember that:

- The value for the id attribute can only be used once.
- The value for a class attribute can be repeated.

The style attribute can be used to insert in-text CSS styling. This will override styling declared in an external stylesheet or styling inserted in the HEAD of the document with the `<style>` element. E.g.:

```
<h1 style="text-transform: uppercase">This will become uppercase</h1>
```

We'll use some other attributes later in the course, but for now, read through the list of [Global Attributes][global_attributes] on w3.org for full definitions and examples.

[global_attributes]:https://www.w3.org/TR/2011/WD-html5-20110525/elements.html#global-attributes
[grouping_content]:https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#grouping-content
[html5_w3c]:https://www.w3.org/TR/2011/WD-html5-20110525/spec.html
[html_attributes]:https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[html_sections]:https://www.w3.org/TR/2011/WD-html5-20110525/sections.html#sections
[mdnHTML]:https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
[text_semantics]:https://www.w3.org/TR/2011/WD-html5-20110525/text-level-semantics.html#text-level-semantics
[w3org_metadata]:https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#document-metadata

