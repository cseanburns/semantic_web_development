# Syntax and Selectors

In HTML, **elements** define the structure of a webpage.
Common elements include `<h1>`, `<main>`, `<p>`, `<table>`, and many others.
We also learned that these elements may include **attributes**.
For example, we can add [global attributes][global_attributes_mdn], like the `class` or `id` attributes, to all tags.
Furthermore, we learned that some elements, like the `<th>` tag, may have element specific attributes, like `colspan`.
In order to style the HTML, CSS provides a mechanism to focus on specific elements or attributes.
In CSS, this mechanism is called [**selectors**][css_selectors_w3].

There are multiple types of selectors.
These include:

- [Universal selector][universal_selector_w3]
- [Type selectors][type_selectors_w3]
- [Attribute selectors][attribute_selectors_w3]
- [Class selectors][class_selectors_w3]
- [ID selectors][id_selectors_w3]
- [Pseudo classes][pseudo_classes_w3]
- [Pseudo elements][pseudo_elements_w3]
- [Combinators][combinators_w3]

Each of these selectors are discussed below along with examples.
For a deeper understanding of each selector type, refer to the linked resources above.

Also, remember that to use these selectors, we add them to an external stylesheet for the reasons listed in the prior section.
In my previous HTML discussions, I added the following line to the `<head>` section of my HTML document that links to my external stylesheet:

```
<link rel="stylesheet" href="css/style.css">
```

Therefore, when I begin CSS coding, I create rules using these selectors
by adding them to a file called `style.css` in a `css` directory in my project repository.

## CSS Syntax

CSS generally follows a very simple syntax.
It begins with a selector, which for **type selectors** is equivalent to the HTML element.
This is followed by an opening curly brace `{` and a list of **properties** and **values** to apply to the element named by the selector.
Each property / value pair is closed with a semicolon `;`.
And the selector rule ends with a closing curly brace `}`.
This is expressed in the following generic example:

```
selector {
    property: value;
    property: value;
    property: value;
}
```

As a real example, if we want to change the foreground and background color of all `<p>` elements in a web document red and black,
respectively, we would write the following rule:

```
p {
    color: red;
    background-color: black;
}
```

## Universal Selector

The **universal selector** is indicated by a single asterisk `*` and matches all elements in a web document.
In the following example, I use this selector to make all text bold:

```
* {
    font-weight: bold;
}
```

This selector should be used sparingly,
but it has [special and advanced use cases][universal_selector_mdn] when combined with other selector types.

## Type selectors

The **type selector** is the most important selector.
The names for these selectors specifically match the names of their HTML element equivalents.
As an example, the CSS `p` selector matches the HTML `<p>` element.
The CSS `h1` selector matches the HTML `<h1>` element.
And so forth.

In the following example, I use three type selectors: `html`, `h1`, and `p`.
I use the `html` selector to change the foreground and background color to the entire HTML page,
since an entire HTML page is enclose within the `<html>` element.
I then show how to apply a [sans-serif][sans_serif_wikipedia] font-family to the `<h1>` elements,
and a [serif][serif_wikipedia] font to the `<p>` elements in a web document:

```
html {
    background-color: red;
    color: white;
}

h1 {
    font-family: sans-serif;
}

p {
    font-family: serif;
}
```

## Attribute selectors

The **attribute selector** is used to style HTML elements with specific attributes.
For example, if I use the `id` attribute throughout a web document, then I can apply CSS to all elements that have an `id` attribute,
regardless of the element type or the value of the attribute.
As an example, let's say I have a web document with the following:

```
<h1 id="test1">This is test 1.</h1>
<h2 id="test2">This is test 2.</h2>
<section id="test3">
    <p>This is test 3.</p>
</section>
```

Then the following CSS will bold the font for all three heading elements:

```
[id] {
    font-weight: bold;
}
```

We can also select attributes with specific values:

- `[att=value]` : select by attribute with specific value:
    - For example, `[id="test1"]` would select `<h1 id="test1">`
- `[att~=value]` : select by attribute where value is a separate word:
    - For example: `[id~="test"]` would match `<h1 id="test one">` and `<h2 id="test two">` since `test` is separate in each.

## Class selectors

The **class selectors** focus on styling attributes with specific class names in an HTML document.
Consider the following HTML that has three `<p>` tags with three separate classes: `bold`, `italics`, and `green`:

```
<p class="bold">This text is bold.</p>
<p class="italics">This text is italicized.</p>
<p class="green">This text is green.</p>
```

To use the class selector, I identify the class name in my CSS with the *dot name* `.class_name` syntax:

```
.bold {
    font-weight: bold;
}

.italics {
    font-style: italic;
}

.green {
    color: green;
}
```

## ID selectors

Like the class selector, **ID selectors** identify the ID as the property and its value.
To apply an ID selector, we use the *pound name* syntax `#id_name`.

Recall that while class attributes can be re-used throughout a web document, ID attributes are unique and can only be used once.
Consider the following HTML:

```
<section id="news">News</section>
<section id="about">About Us</section>
<section id="store">Store</section>
```

In the above HTML snippet, there can only be one `id` with a value of `news`,
one `id` with a value of `about`, and one `id` with a value of `store`.
To apply CSS to those specific IDs, we select by the value of the ID attributes.
In the example CSS below, I add a black, dotted border that is one pixel thick to the News section,
I change the line-height to 1.5 times the element's font-size in the About section, and
I convert text in the Store section to all upper case:

```
#news {
    border-bottom: 1px solid black;
}

#about {
    line-height: 1.5;
}

#store {
   text-transform: uppercase; 
}
```

## Combinators

**Combinators**, and the **pseudo classes** and **pseudo elements** discussed in the following section,
should be used when you start to gain a grasp of the relationships between HTML elements on a web page.
Specifically, all elements in an HTML document can be represented in a hierarchical document tree.
The hierarchy of elements includes descendant elements, child elements, and sibling elements.
You can view the document tree of the HTML in your web browser by accessing Web Developer Tools for your browser.

### Descendant combinators

The **descendant combinator** selects <q>an element that is the descendant of another element in the document tree</q>
([Descendant combinator][descendant_combinators_w3m]).
These are elements that are contained within other elements.
For example, in the following code snippet, the `<var>` element is a descendant of the `<p>` element
because it is enclosed within the `<p>` element:

```
<p>Consider the vector <var>X</var>.</p>
```

And in the following snippet, the `<h2>` element is a descendant of the `<section>` element.

```
<section>
    <h2>Heading</h2>
</section>
```

To use the descendant combinator, we simply identify both elements in our CSS.
For example, to select the `<var>` element within the `<p>` element, we use the following syntax:

```
p var {
    font-size: 10pt;
}
```

In the above case, the `<var>` element is a direct descendant of the `<p>` element.
However, we may also select a grandchild or later element by using the asterisk.
For example, the following selects all `<p>` elements within all `<section>` elements in an HTML page:

```
section * p {
    font-size: 14pt;
}
```

### Child combinators

<q>A **Child combinator** describes a childhood relationship between two elements</q> ([Child combinators][child_combinators_w3]).
A prime example of a child combinator is the HTML list.
Consider the following unordered list in HTML, where the `<li>` element is a child of the `<ul>` element:

```
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Grapes</li>
    <li>Oranges</li>
</ul>
```

To select the `<li>` child element, we use the following CSS syntax, where I convert all items in the unordered list to lowercase.

```
ul > li {
    text-transform: lowercase;
}
```

Note that a child element is also a descendant element, so the descendant syntax (e.g., `ul li`) would also work.
The child combinator is simply a more specific type of descendant.

### Sibling combinators

Per the W3 documenation, <q>there are two different sibling combinators: the next-sibling combinator and
subsequent-sibling combinator</q> ([Sibling combinators][sibling_combinators_w3]).

The **next-sibling combinator** selects elements that immediately follow another element.
Consider the following HTML, where a `<p>` element is followed by an `<hr>` (horizontal rule) element,
which itself is followed by another `<p>` element:

```
<p>42 is the answer to life, the universe, and everything in it.</p>
<hr>
<p>What is the question?</p>
```

In the above HTML snippet, the `<hr>` element is a next-sibling of the first `<p>` element,
and the second `<p>` element is a next-sibling of the `<hr>` element.
Therefore, to identify the last `<p>` element in the above snippet,
which is the next-sibling of the `<hr>` element, we use the following next-sibling combinator:

```
hr + p {
    font-size: 20pt;
}
```

A **subsequent-sibling combinator** simply extends this relationship down the document tree.
Consider the following HTML snippet, which includes a bit of the opening to Leo Tolstoy's novel <cite>Anna Karenina</cite>.

```
<h1>Anna Karenina / by Leo Tolstoy</h1>
<h2>Chapter 1</h2>
<p>Happy families are all alike; every unhappy family is unhappy in its own way.</p>
<p>Everything was in confusion in the Oblonksy's house....</p> 
<h2>Chapter 2</h2>
```

We could specifically identify the `<h2>` elements as subsequent-siblings of the `<h1>` element with the following CSS syntax:

```
h1 ~ h2 {
    color: yellow;
    background-color: black;
}
```

## Pseudo-classes and pseudo-elements

**Pseudo-classes** are used to select a specific state of an element.
There are several types of pseudo-classes, but we will focus on just a few from two categories.
For more details on other categories of pseudo-classes as well as a full list, see [Pseudo-classes][pseudo_classes_w3].

- Dynamic pseudo-classes:
    - `:link`
    - `:visited`
    - `:hover`
    - `:active`
    - `:focus`
- Structural pseudo-classes: 
    - `:nth-child()`
    - `:nth-last-child()`
    - `:first-child`

The dynamic pseudo-classes `:link` and `:visited` are often used to style hyperlinks (aka, the `<a>` anchor tag).
In such situations, `:link` must be used before `:visited`.
Here is an example of styling hyperlinks in CSS:

```
a:link {
    text-decoration: green wavy underline;
}

a:visited {
    text-decoration: underline overline;
}
```

The `:hover` pseudo-class is also often paired with the `<a>` anchor tag, but it can be used on other elements, too.
For example, it's often useful to apply to rows in a `<table>` to help highlight rows of interest.
This will trigger a style change when the mouse cursor hovers over the element:

```
a:hover {
    color: purple;
    font-size: 20pt;
}
```
    
**Pseudo-elements** are methods to <q>create abstractions about the document tree beyond those specified by the document language</q>
([Psuedo-elements][pseudo_elements_w3]).
For example, there is no such element to indicate the first line in a `<p>` element, but using the **pseudo-class** for `first-line`,
we can focus on and style the first line of a `<p>` (or other) element.
For example, consider the following HTML:

```
<p>To be, or not to be, that is the question:<br>
Whether 'tis nobler in the mind to suffer<br>
The slings and arrows of outrageous fortune,<br>
Or to take arms against a sea of troubles<br>
And by opposing end them. To die&mdash;to sleep,<br>
No more;</p>
```

Since there is a `<br>` tag at the end of each line, the first line is <q>To be, or not to be, that is the question:</q>.
Using the **pseudo-element** for `first-line`, we can style it by, for example, converting it to uppercase:

```
p::first-line {
    text-transform: uppercase;
}
```

Other **pseudo-classes** that can be used include:

- `::first-letter`
- `::before`
- `::after`

## Conclusion

CSS Selectors and syntax form the foundation of web styling.
They allow us to precisely target and modify elements within an HTML document.
When we understand **type**, **class**, **ID**, and **attribute** selectors,
and then more advanced **combinators** and **pseudo-classes/elements**,
we are able to create flexible, maintainable styles that enhance the design and usability of our web pages.

As you explore and apply CSS to your websites, experiment with different selectors to see how they interact.
This is especially important when you work with the various combinator selectors,
since these depend on how HTML elements are related to each other.
It is important to become familiar with the selectors and syntax discussed here,
because they are important building blocks to more advanced topics like responsive design.
And although we will not use any CSS frameworks in this course,
understanding the essentials here will help with those if you eventually use them.

[attribute_selectors_w3]:https://www.w3.org/TR/selectors-3/#attribute-selectors
[child_combinators_w3]:https://www.w3.org/TR/selectors-3/#child-combinators
[class_selectors_w3]:https://www.w3.org/TR/selectors-3/#class-html
[combinators_w3]:https://www.w3.org/TR/selectors-3/#combinators
[css_selectors_w3]:https://www.w3.org/TR/selectors-3/#selectors
[descendant_combinators_w3m]:https://www.w3.org/TR/selectors-3/#descendant-combinators
[global_attributes_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
[id_selectors_w3]:https://www.w3.org/TR/selectors-3/#id-selectors
[pseudo_classes_w3]:https://www.w3.org/TR/selectors-3/#pseudo-classes
[pseudo_elements_w3]:https://www.w3.org/TR/selectors-3/#pseudo-elements
[sans_serif_wikipedia]:https://en.wikipedia.org/wiki/Sans-serif
[serif_wikipedia]:https://en.wikipedia.org/wiki/Serif
[sibling_combinators_w3]:https://www.w3.org/TR/selectors-3/#sibling-combinators
[type_selectors_w3]:https://www.w3.org/TR/selectors-3/#type-selectors
[universal_selector_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors
[universal_selector_w3]:https://www.w3.org/TR/selectors-3/#universal-selector
