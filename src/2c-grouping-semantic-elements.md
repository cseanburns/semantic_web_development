# HTML Grouping and Text-Level Semantic Elements

## Introduction

In this section, we learn about the most frequent HTML element types: grouping elements and text-level or inline semantic elements.
Most of our content will be marked up using these two categories of elements.

The grouping elements we cover here include:

- the `<p>` element: paragraphs
- the `<hr>` element: horizontal rules
- the `<pre>` element: preformatted text
- the `<blockquote>` element: block quoted text
- the `<ol>` and the `<ul>` elements: ordered and unordered lists
    - the `<li>` element: items in ordered or unordered lists
- the `<dl>` element: description list
    - the `<dt>` element: description term
    - the `<dd>` element: description details
- the `<main>` element: dominant content
- the `<div>` element: generic container

For a full list of grouping elements, see: [Grouping content][grouping_whatwg]

Some of these elements must be used together.
I have indicated these as subitems in this above.
For example, the `<ul>` and the `<ol>` elements are used to create *unordered* and *ordered* lists, respectively.
However, either of these must include the `<li>` element to list items.

Likewise, we use the `<dl>` element to start a description or definition list.
Within that, we use the `<dt>` element to specify a term in a description/definition list
and the `<dd>` element to provide the description or definition.

We also cover a range of text-level or inline semantic elements.
There are nearly 30 of these elements, but some are used more frequently than others.
In this section, we'll cover the following text-level elements.

- the `<a>` element: hyperlinks
- the `<em>` element: emphasis
- the `<strong>` element: importance
- the `<small>` element: side comments
- the `<s>` element: mark inaccurate or irrelevant tet
- the `<cite>` element: mark titles of works
- the `<q>` element: mark quoted text
- the `<dfn>` element: mark defining term
- the `<abbr>` element: mark abbreviation or acronym
- the `<data>` element: mark machine-readable values
- the `<time>` element: mark date text
- the `<code>` element: mark computer code
- the `<var>` element: mark variable name
- the `<samp>` element: mark quoted computer output
- the `<kbd>` element: mark user input to computer
- the `<sub>` element: mark subscript
- the `<sup>` element: mark superscript
- the `<i>` element: mark alternate mood or voice in text
- the `<b>` element: mark text to draw attention to it but without suggesting extra importance
- the `<mark>` element: highlight text
- the `<span>` element: generic text marking
- the `<br>` element: add a line break

For the full list, see: [Text-level semantics][text_semantics_whatwg]

## A Quick Note on HTML Syntax

### Closing Tags

Most tags have closing forms.
An opening paragraph tag looks like this: `<p>`.
It's closing version looks like this: `</p>`.
The content for the paragraph is placed between the opening and closing tags.

However, some HTML tags are self-closing.
Self-closing means that these tags do not have a closing syntax.
These include tags like `<br>`, `<meta>`, `<hr>`.
For tags like these, there is no such thing as: ~~`</br>`~~, ~~`</meta>`~~, ~~`</hr>`~~, etc.

Here is where it can get confusing.
In HTML5, some tags have optional closing forms and some tags require closing forms.
For example, the `<p>` and `<li>` tags do not have to be closed with `</p>` and `</li>`.
But tags like `<div>` and `<span>` must be closed with `</div>` and `</span>`.
Because of this mix of optional and required closing tags, it's best to close all tags that are not self-closing.
Otherwise, you'll just get into the weeds about what needs closing or not.

### Nesting Tags

We have to be careful how we close tags when including tags within tags.
For example, if we want to include a small code snippet within a paragraph tag, then we have to close that code tag before closing the paragraph tag.

This is the correct usage:

```
<p>I use the Python interpreter as a calculator sometimes: <code>2 + 2</code>.</p>
```

In the above, the `<code></code>` tags are opened after the opening `<p>` tag and closed before the closing `</p>` tag.

This would be incorrect usage:

```
<p>I use the Python interpreter as a calculator sometimes: <code>2 + 2</p>.</code>
```

## Elements in Use: Grouping Content

The HTML elements above are fairly straightforward, and the best way to learn them is to begin using them.
To illustrate, in the text below, I use most of the grouping and text-level semantic elements listed above and then show the output.

```
<p>This is a paragraph.
If I add sentences to this paragraph on separate lines, the lines will be joined when displayed in a browser.
I keep adding lines until I close the paragraph with its closing tag.
After this paragraph closes, I'll add a horizontal rule to separate this paragraph from the next one.</p>

<hr>

<p>This is the next paragraph, but it's a short paragraph.</p>

<p>Sometimes I want to present computer code. I can do that like so:</p>

<pre>
#!/usr/bin/env bash

# list files in directory
for i in * ; do echo "${i}" ; done
</pre>

> This is a blockquote.
> We use it to quote multiple lines.
> Here's a goofy joke:
    > Why did the spider go to school? They wanted to be a web designer.

<p>Sometimes I like to create lists. Here's a list of Unix shells:</p>

<ol>
    <li>Bourne shell</li>
    <li>Bash</li>
    <li>C shell</li>
    <li>tcsh</li>
    <li>Kornshell</li>
    <li>zsh</li>
</ol>

<p>I can also present them as an unordered list:</p>

<ul>
    <li>Bourne shell</li>
    <li>Bash</li>
    <li>C shell</li>
    <li>tcsh</li>
    <li>Kornshell</li>
    <li>zsh</li>
</ul>

<p>Here's a definition:</p>

<dl>
    <dt>Linux</dt>
    <dd><q>An open-source Unix-like operating system</q> (source: Wikipedia article on <cite>Linux</cite>)</dd>
    
    <dt>FreeBSD</dt>
    <dd><q>A free-software Unix-like operating system</q> (source: Wikipedia article on <cite>FreeBSD</cite>)</dd>
</dl>
```

## More Elements in Use: Text-level Semantics

We want to reserve formatting text when we use CSS, but a few HTML tags change how font is rendered.
Confusingly, some tags render fonts in the same way.
Let's view some of these examples.

### The `<em>` and `<i>` tags

Both the `<em>` and the `<i>` tags will italicize text.
The difference in use between them is literally one of semantics.
If we want to place emphasis on some text, then we use the `<em>` tag.
If we want to distinguish text from surrounding text in some way, then we use the `<i>` tag.

In this example, we want to place major emphasis (e.g., a warning) on the word **not** and so use the `<em>` tag.

```
<p>Do <em>not</em> eat that type of mushroom.</p>
```

Even though the presentation of the text will be the same in the browser,
here we simply want to make a slight change to the text to make it stand out.

```
<p>I study <i>bibliometrics</i>.</p>
```

### The `<strong>` and `<b>` tags

The same kind of difference holds true for the `<strong>` and `<b>` HTML tags.
Content wrapped within these tags will be rendered as bold in the browser.

In this example, we use the `<strong>` tag to stress strong importance or urgency.

```
<p>Please submit your assignments <strong>by the due date</strong>.</p>
```

However in this example, we use the `<b>` tag as a purely visual marker:

```
<p>When you open your Canvas shell, visit the <b>Assignments</b> section to view upcoming work.</p>
```

In all of the above cases, we will learn how to use CSS later to make the same font changes.
Therefore, in choosing whether how you want to emphasize or bold text, consider the semantic differences.
Also note, your choice will have an impact on how some applications, like screen readers, will present the text.
For example, when using the `<strong>` rather than the `<b>` tags, a screen reader's voice will place emphasis on the content
within the `<strong>` tag.

### Other tags with formatting effects

Here are a few other HTML tags with special, semantic purposes:

```
<p>Be sure to use <mark>highlighting</mark> when taking notes. It helps when reviewing for tests.</p>

<p>I have reduced prices by <s>10%</s> 20%!</p>

<p>The opposite of big is <small>small</small>.</p>

<p>In the <cite>Merchant of Venice</cite>, Shakespeare wrote: <q>All that glitters is not gold</q>.
And in <cite>Pursuit of Happiness</cite>, Kid Cudi sang: <p>Everything that shine ain't always gonna be gold</cite>.</p>

<p>I am a member of <abbr title="Association for Library and Information Science Eduction">ALISE</abbr>.</p>

<p>The date is <time datetime="2025-01-25">January 25, 2025</time>.</p>

<p>In R, we assign a value to a variable named <var>x</var> like so: <code>x &lt;- 45</code>.</p>

<p>To print the output of variable <var>x</var> in R with the value of 45,
I enter the name of the variable, <kbd>x</kbd> and get back: <samp>[1] 45</samp>.</p>

<p>Consider the vector <var>X</var><sub>1</sub>.</p>

<p>Did you solve: 42<sup>2</sup>?</p>
```

## Conclusion

It's important to understand HTML grouping and text-level semantic elements
because we use these elements to structure and present content effectively and semantically.
Grouping elements like `<p>`, `<ul>`, `<blockquote>`, and `<main>` help organize content.
Text-level semantic elements such as `<em>`, `<strong>`, `<code>`, and `<cite>` provide meaning within text.
It's crucial to recognize the distinction between purely presentational tags, like `<b>` and `<i>`,
and semantic elements, like `<strong>` and `<em>`.
These elements affect accessibility and the way content is interpreted by search engines and other assistive technologies.
Apply these elements thoughtfully.
They will help create well-structured, readable, and meaningful web content that enhances both usability and accessibility.

[grouping_whatwg]:https://html.spec.whatwg.org/multipage/grouping-content.html#grouping-content
[text_semantics_whatwg]:https://html.spec.whatwg.org/multipage/text-level-semantics.html#text-level-semantics
