# HTML Section Elements

## Introduction

In the last section, on Document Structure and Metadata, we covered the basic outline of a web document
and built out its metadata section in the web document's `<head>` section.
At the end of that section, we created the following content:

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

In this section and onward, we shift our focus to the content section of our web document.
This is the area within the opening and closing `<body></body>` element.
We'll begin with what are called the [section elements][sections_whatwg] and
use this to create a broad outline of our web document.
In the next section, we'll cover the [grouping elements][grouping_whatwg].
We'll use the grouping elements to begin adding content.

## Section Elements

There are ten main HTML section elements, or elements used to define the sections of an HTML document.
We have already covered the first one, which is the `<body>` element.
The `<body>` element is the only required section element.
The rest of the elements help us structure the main layout of our web document.
It is not necessary to use them all, but the more structure our document has,
the easier it will be for both visitors and machines to parse our web documents.

These section elements include:

1. the `<body>` element
4. the `<article>` element
2. the `<section>` element
3. the `<nav>` element
5. the `<aside>` element
6. the `<h1>`, `<h2>`, ..., `<h6>` elements
7. the `<hgroup>` element
8. the `<header>` element
9. the `<footer>` element
10. the `<address>` element

See: [HTML Sections][sections_whatwg]

We have already covered the `<body>` element.
All remaining section elements are enclosed in the `<body>`.

### The `<article>` Element

The `<article>` element contains <q>a complete, or self-contained, composition in a document, page, application,
or site and that is, in principle, independently distributable or reusable</q> ([The article element][article_whatwg]).
Examples from WHATWG include parts of a web page like a forum post or a magazine article.

A web document may include multiple `<article>` elements in a web page, such as with forum posts, but
each instance will indicate a separate, independent piece.
The `<article>` element may also be nested, which means that there may exist articles within articles.

```
<body>
    <article>
    </article>
</body>
```

### The `<section>` Element

The `<section>` element is a more generic version of the `<article>` element.
It functions as <q>a generic section of a document or application</q> ([The section element][section_whatwg]).
The WHATWG documentation provides examples such as chapters, parts of a home page, etc.
Another example might be a recipe for a dish, where the sections of a recipe include ingredients, methods, etc.
We can enclose a `<section>` element within an `<article>` element or use it as a standalone element.

```
<body>
    <article>
        <section>
        </section>
    </article>
</body>
```

### The `<nav>` Element

The `<nav>` element is used to contain navigational links to other parts of the site ([The nav element][nav_whatwg]).
For example, if a website had a news page and an about page, then links to these pages would be place in `<nav>`.
This might be placed near the top of a web document.

```
<body>
    <nav>
    </nav>
    <article>
        <section>
        </section>
    </article>
</body>
```

### The `<aside>` Element

The `<aside>` element functions as a sidebar and is used to represent extra
but related information to the main content ([The aside element][aside_whatwg]).
For example, imagine you have written an article on text editors.
In this article, you might want to take note of a historical aspect of a specific text editor, like [Vim][vim],
even though the main article isn't about Vim.
This is the kind of function that an `<aside>` fulfills.
Note that I add an additional `<section>` element to illustrate how this can be used repeatedly.

```
<body>
    <nav>
    </nav>
    <article>
        <section>
        <aside></aside>
        </section>
        <section>
        </section>
    </article>
</body>
```

### The `<h1>` through `<h6>` elements

The `<h1>` through `<h6>` elements represent section headers
[(The h1, h2, h3, h4, h5, and h6 elements][h1_elements]).
These are useful for marking the title and subtitles of a web document and
can be used for the entire web document or within specific sections,
such as within `<article>` or `<section>` elements.
In the example below, I show how to use these repeatedly through a web document.
However, it's best practice to use the `<h1>` element only once on a web page,
give that it marks a top-level section.

```
<body>
    <nav>
    </nav>
    
    <article>
        <h1>Some title here</h1>
        <h2>Some subtitle here</h2>
        
        <section>
            <h2>Section title here</h2>
                <aside></aside>
            <h3>Subtitle here</h3>
        </section>
        
        <section>
            <h2>Section title here</h2>
        </section>
        
    </article>
    
</body>
```

### The `<hgroup>` element

The `<hgroup>` element is used to bundle section header elements.
It may include `<p>` elements for paragraphs.
I demonstrate it here for completeness, but in reality, it's probably best to avoid using it.
It's a confusing element and the `<header>` element, which I describe below, offers more versatility and semantics.

```
<body>
    <nav>
    </nav>
    
    <article>
        <hgroup>
            <h1>Some title here</h1>
            <p>A paragraph here, like an introduction.</p>
        </hgroup>
        
        <section>
            <h2>Section title here</h2>
                <aside></aside>
            <h3>Subtitle here</h3>
        </section>
        
        <section>
            <h2>Section title here</h2>
        </section>
        
    </article>
    
</body>
```

### The `<header>` element

The `<header>` element is easily confused with the `<hgroup>` element but it has more versatility
([The header element][header_whatwg]).
Like the `<hgroup>` element, it's meant to be used to group section headings
(e.g., the `<h1>` elements and including the `<hgroup>` element).
A good use case for it is to use it for the main heading area (i.e., the top of a web page),
which might include a website's logo and navigational area.
However, it can be used repeatedly throughout a web document, including in `<article>` or `<section>` elements.
In practice, I generally use the `<header>` element and not the `<hgroup>` element.

```
<body>
    <header>
        <nav>
        </nav>
    </header>
    
    <article>
        <header>
            <h1>Some title here</h1>
            <h2>Some subtitle here</h2>
        </header>
        
        <p>A paragraph here, like an introduction.</p>
        
        <section>
            <h2>Section title here</h2>
                <aside></aside>
            <h3>Subtitle here</h3>
        </section>
        
        <section>
            <h2>Section title here</h2>
        </section>
        
    </article>
    
</body>
```

### The `<footer>` element

The `<footer>` element <q>typically contains information about its section such as who wrote it,
links to related documents, copyright data, and the like</q> ([The footer element][footer_whatwg]).
Like the `<header>` element, it can be used repeatedly throughout a web document,
such as at the end of an `<article>` or `<section>` element.
It's more common use is at the end of an entire web document, just before the closing `<body>` element.
This use of course depends on the content of a web page.
Therefore, use it where needed!

```
<body>
    <header>
        <nav>
        </nav>
    </header>
    
    <article>
        <header>
            <h1>Some title here</h1>
            <h2>Some subtitle here</h2>
        </header>
            
        <p>A paragraph here, like an introduction.</p>
        
        <section>
            <h2>Section title here</h2>
                <aside></aside>
            <h3>Subtitle here</h3>
        </section>
        
        <section>
            <h2>Section title here</h2>
        </section>
        
    </article>
    
    <footer>
    </footer>
</body>
```

### The `<address>` element

The `<address>` element is used for contact information ([The address element][address_whatwg]).
It can be used throughout a web document.
If it appears at the end of a `<section>` element, then it marks the contact information for
perhaps the author of that section.
If it appears in the `<footer>` element, then it marks the contact information
(email addresses, mailing address, etc.) for web site owners.

```
<body>
    <header>
        <nav>
        </nav>
    </header>
    
    <article>
        <header>
            <h1>Some title here</h1>
            <h2>Some subtitle here</h2>
        </header>
        
        <p>A paragraph here, like an introduction.</p>
        
        <section>
            <h2>Section title here</h2>
                <aside></aside>
            <h3>Subtitle here</h3>
        </section>
        
        <section>
            <h2>Section title here</h2>
        </section>
        
    </article>
    
    <footer>
        <address>
            <p>111 Main St., Lexington, KY</p>
        </address>
    </footer>
</body>
```

## Quick Note on HTML Comments

Many programming and markup languages have the ability to add comments to your code.
This is true for HTML, too.
Adding comments to your HTML code is helpful for two reasons:

1. You can leave yourself notes about the parts of your web document.
2. You can *comment out* code that you don't want to use but might want to use later.

To comment out HTML code, use the comment tag:

```
<!-- insert comment here -->
```

The above line will be ignored by the browser.

You can also comment out multiple lines of HTML code, like so:

```
<!--
<section>
<h1>Some title here</h1>
<h2>Some subtitle here</h1>
</section>
-->
```

In that example, all lines between the comment tags will be ignored by the browser.

## Putting It Together

With this section and the last, we now have created the head of our web document,
which contains the document's metadata, and a basic outline of our web document
using the section elements listed on this page.
Putting it together and using only those HTML elements covered so far,
we might have something like below that gets me started on a web page about Linux systems administration.
Note that I've commented out the line with the `<base>` element since I don't yet have a domain name for this content.

```
<!DOCTYPE html>
<html lang="en">
	<head>
        <title>Using the Linux OS for Systems Administration</title>
        <!-- <base href="https://www.example.org/"> -->
        <link rel="stylesheet" href="css/style.css">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="C. Sean Burns">
        <meta name="description" content="An introduction to Systems Administration with Linux OS, including Debian and Ubuntu">
        <meta name="keywords" content="systems administration, linux, debian, ubuntu">
	</head>
    
    <body>
    <header>
        <h1>Introduction to Linux Systems Administration</h1>
        <nav>
        </nav>
    </header>
    
    <article>
        <header>
            <h2>The Linux Debian and Ubuntu Distributions</h2>
            <h3>Getting Started</h3>
        </header>
        
        <section>
            <header>
            <h2>Downloading Debian and Ubuntu</h2>
                <aside>Debian was founded in 1993. Ubuntu is a derivative of Debian.</aside>
            <h3>Installing Debian in a Virtual Machine</h3>
            <h3>Installing Ubuntu in a Virtual Machine</h3>
            </header>
        </section>
        
        <section>
            <header>
            <h2>Updating Your Distributions</h2>
            </header>
        </section>
    </article>
    
    <article> 
        <header>
            <h2>Introduction to the Bash Shell</h2>
            <h3>The Command Line</h3>
        </header>
    
        <section>
            <header>
            <h2>Knowing Where You Are</h2>
            </header>
        </section>
    </article>
    
    <footer>
        <address>
        </address>
    </footer>
	</body>
</html>
```

## Validating Your HTML

When writing code or markup, it's easy to make mistakes.
For example, we might leave out a required closing element or make a syntax error.
To check for these kinds of mistakes, use the [Nu Html Checker][validator_w3].
You can paste your code into the text box on that page or later submit a URL when your site is live.
If you receive errors or warnings, you will have to read the messages and
look closely at your code to spot the error or issue.

## Conclusion

As you develop your own `<head>` and `<body>` content, you will want to modify your use of the above
elements based on your needs and what your web page contains.
Have fun getting the skeleton of your web page/document written.
Think a lot about the structure of your page.
You'll want to modify that as you add content, which we'll cover next.
But it's often helpful to have a starting outline, and the section elements covered here help with that.

[article_whatwg]:https://html.spec.whatwg.org/multipage/sections.html#the-article-element
[aside_whatwg]:https://html.spec.whatwg.org/multipage/sections.html#the-aside-element
[footer_whatwg]:https://html.spec.whatwg.org/multipage/sections.html#the-footer-element
[h1_elements]:https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
[header_whatwg]:https://html.spec.whatwg.org/multipage/sections.html#the-header-element
[nav_whatwg]:https://html.spec.whatwg.org/multipage/sections.html#the-nav-element
[section_whatwg]:https://html.spec.whatwg.org/multipage/sections.html#the-section-element
[sections_whatwg]:https://html.spec.whatwg.org/multipage/sections.html#sections
[grouping_whatwg]:https://www.w3.org/TR/2011/WD-html5-20110525/grouping-content.html#grouping-content
[validator_w3]:https://validator.w3.org/nu/
[vim]:https://www.vim.org/
