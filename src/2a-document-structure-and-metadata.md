# Document Structure and Metadata

## Introduction

One of the main purposes of HTML is to structure our web documents and our content.
This means that HTML offers a set of **elements** for this purpose.
In this section, we will list, describe, and illustrate how to use these elements.

First, as you learn HTML, please refer to the official documentation at [WHATWG][whatwg].
This is the working group for managing the HTML standards, its specifications, and documentation.
The documentation for HTML5 should be constantly referenced throughout this work.
See:

- [HTML5 at WHATWG][html5_whatwg]

Mozilla also maintains a solid reference source:

- [MDN Web Docs: HTML][html_mdn]

## The Structure of an HTML Document

The overall basic structure of an HTML document is fairly simple and straightforward.
An HTML document begins with the **DOCTYPE** declaration, which declares the document to be HTML.
This is followed by the **HTML element** `<html>`, which <q>[represents the root of an HTML document][html_whatwg]</q>.
The `<html>` element usually contains a **lang** attribute that we use to declare the
natural language used in the document.
In our case, that's English, and thus we use `<html lang="en">`.
Using this helps speech synthesis tools and translation tools to parse our web document ([HTML Element][html_whatwg]).
The **HEAD** `<head>` section includes the document metadata and follows the HTML root element.
The **BODY** `<body>` section follows and contains the document's content.
The very basic structure of an HTML document looks like this:

```
<!DOCTYPE html>
<html lang="en">
    <head>
    </head>
    <body>
    </body>
</html>
```

You should note that most but not all HTML elements have a start or opening tag and an end or closing tag.
In the above example, the opening tag `<html>` begins on the second line
and the ending tag is at the last line with `</html>`.
This tag therefore encompasses the `<head>` and `<body>` elements, which themselves will encompass other elements.

### The `<head>` section

Let's focus on the [HEAD section][head_whatwg], which contains a web document's metadata.
A document's metadata is data that describes the data on the page.
This section of the HTML document typically includes five elements:
`<title>`, `<base>`, `<link>`, `<meta>`, and `<style>`, as shown below:

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
        <base>
		<link>
		<meta>
        <style></style>
	</head>
	<body>
	</body>
</html>
```

Like the `<html>` element,
the `<head>` element encompasses its own elements (`<title>`, `<base>`, `<link>`, `<meta>`, and `<style>`)
since it closes after them with the `</head>` element.

### The `<title>` element

The `<title>` element contains the document's title or name.
As an example, if I am writing a web page about *Linux systems administration*,
then I may include that within the `<title>` element, like so:

```
<title>Using the Linux OS for Systems Administration</title>
```

Note the `<title>` element closes with `</title>`.

We can add the title information to our `<head>` section, as shown below:

```
<!DOCTYPE html>
<html lang="en">
	<head>
        <title>Using the Linux OS for Systems Administration</title>
        <base>
		<link>
		<meta>
        <style>
	</head>
	<body>
	</body>
</html>
```

### The `<base>` element

The `<base>` element <q>allows authors to specify the document base URL for the purpose of relative URLs</q>
([The base element][base_whatwg]).

The content of the `<base>` element depends on your website's domain name.
If I have a website at `https://www.example.org/`, then I add this information to my `<base>` element:

```
<base href="https://www.example.org/">
```

This allows me to link to other parts of my website without using the full URL or path.
For example, if I have a website with two pages: **index.html** and **news.html**,
then to link to **news.html** from the **index.html** page,
I only have to name the file:

```
Read my <a href="news.html">weekly newsletter</a>
```

If I didn't include the `<base>` element in my `<head>` section,
then I would have to reference or link to the full URL, like so:

```
Read my <a href="https://www.example.org/news.html">weekly newsletter</a>
```

The difference between these two examples is that the first example resolves the link relative to the `<base>` URL,
while the second example specifies the full domain and path.
Using the `<base>` element therefore makes it easier to link to other parts of our websites.
It also makes it easier if we change the domain name of our website.
In such a case, we would only have to update the URL in the `<base>` element.

Let's modify our `<head>` section with this new information:

```
<!DOCTYPE html>
<html lang="en">
	<head>
        <title>Using the Linux OS for Systems Administration</title>
        <base href="https://www.example.org/">
		<link>
		<meta>
        <style>
	</head>
	<body>
	</body>
</html>
```

Note that the `<base>` element does not close.

### The `<link>` element

The `<link>` element <q>allows authors to link their document to other resources</q>
([The link element][link_whatwg]).
Other resources may include external CSS stylesheets, JavaScript code, and more.
We will use this element later when we link to our CSS code or stylesheets.

As an example, we might create a directory in our root project directory called **css** and
include our CSS code in that directory in a file named `style.css`.
In this case, we use the `<link>` element to link to our stylesheet in the following way:

```
<link rel="stylesheet" href="css/style.css">
```

In that example, the **rel** and the **href** are called **attributes**.
The **rel** attribute describes the resource and the **href** attribute describes the location of the resource.
Since we are using the `<base>` element, as described above, we only refer to the **relative** path
of the stylesheet (named `style.css`) instead of the full path.

```
<!DOCTYPE html>
<html lang="en">
	<head>
        <title>Using the Linux OS for Systems Administration</title>
        <base href="https://www.example.org/">
        <link rel="stylesheet" href="css/style.css">
		<meta>
        <style>
	</head>
	<body>
	</body>
</html>
```

Note that the `<link>` element does not close.

### The `<meta>` element

The `<meta>` element <q>represents various kinds of metadata that cannot be expressed using the</q>
other `<head>` elements, such as `<title>`, `<base>`, `<link>`, `<style>`
([The meta element][meta_whatwg]).
The `<meta>` element has a few use cases.
To keep it simple for now,
we'll cover the basics below and expand on them as we cover other topics.

First, as the documentation states, the `<meta>` element requires one of three attributes:
**name**, **http-equiv**, and **charset**.
We'll skip the second attribute and discuss the first and third one.

#### The **charset** and **name** attributes

The **charset** attribute establishes the document's character set and allows proper displaying of non-ASCII characters.
In practice, we use this to declare the document's character set to [UTF-8][utf8].

The **name** attribute is used with several names that refer to the web/HTML document's metadata.
We'll focus on the following four:

- [viewport][viewport_mdn]: controls the size and shape of the browser's viewport:
    - we use this to make our site mobile friendly by default
- author: names the author of the web document:
    - we use this to name the author of the web document
- description: describes the content of the web document:
    - we use this to describe the content of the web document
- keywords: lists descriptive keywords that describe the content of the web document:
    - we use this to list keywords that describe the content of the web document


Putting this altogether, we have the following:

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
	</head>
	<body>
	</body>
</html>
```

### The `<style>` element

Finally, the `<style>` element is used to embed CSS in our `<head>` section.
Most of the time, we want to use an external stylesheet for CSS code, which we'll cover later.
We want this because it means that we only need to modify one CSS file to style our entire site.
That's particularly nice when our website grows to include many pages.
However, there are times when we want to use a CSS style to modify just one page or some aspect of a single page.

When we use the `<style>` element, we use CSS syntax, and not HTML, within the `<style>` tag.
As an example, if we want to specify a specific family of fonts, then we can use the
CSS `html` **selector** to specify a font-family for a single webpage.

A CSS **selector** is often equivalently named to an HTML **element**.
Such cases are called **[Type selectors][type_selectors_mdn]**.
Thus, to modify the `<html>` element on a page, we use the CSS `html` type selector.
In the following example, we state that the monospace font family should be used for the entire page,
since we attach it to the `html` selector.
On a multi-page website, this styling would only apply to this one page.

```
<style>
    html { font-family: monospace; }
</style> 
```

Note that the `<style>` element requires a closing tag.

Once we add that to the `<head>` section, we have the following:

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

## Conclusion

In this section, we introduced the basic structure of a web page and
covered the basics of a web document's metadata section.
The latter included the following elements:

- `<!DOCTYPE html>`
- `<html>`
    - `<head>`
        - `<title>`
        - `<base>`
        - `<link>`
        - `<meta>`
        - `<style>`

In the next section, we focus on adding content within the `<body>` element of a web document.

[base_whatwg]:https://html.spec.whatwg.org/multipage/semantics.html#the-base-element
[head_whatwg]:https://html.spec.whatwg.org/multipage/semantics.html#the-head-element
[html5_whatwg]:https://html.spec.whatwg.org/multipage/
[html_mdn]:https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
[html_whatwg]:https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
[link_whatwg]:https://html.spec.whatwg.org/multipage/semantics.html#the-link-element
[meta_whatwg]:https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element
[type_selectors_mdn]:https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#type_selectors
[utf8]:https://en.wikipedia.org/wiki/UTF-8
[viewport_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag
[whatwg]:https://whatwg.org/
