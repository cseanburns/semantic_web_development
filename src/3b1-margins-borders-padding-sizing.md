# Margins, Borders, Padding, and Sizing

As you recall, the CSS box model contains [four different properties][boxes_edges_w3].

- **margin**: the space between the element's border and its surrounding elements, marked by the margin edge
- **border**: the boundary between the margin and padding, which can made visual with width, color, and style properties
- **padding**: the space between the border and content
- **content**: the content

These properties are illustrated in the figure below.

<figure>
<img src="images/css_box_model.png"
alt="Visual representation of the CSS Box Model"
title="Visual representation of the CSS Box Model">
<figcaption>
Fig. 1. <a href="https://www.w3.org/TR/css-box-3/#box-model">The CSS Box Model</a>
</figcaption>
</figure>

A key characteristic of the CSS box is that, like boxes in general, it has four edges, marked by the following keywords:
**top**, **right**, **bottom**, and **left** (in that order).
We can use CSS to target any of these sides, or all sides at once, and
style boxes using the lessons covered in the prior section on [Colors and Units of Measurement](3a2-colors-units-measurements.html).

## Margin

Let's start with some basic HTML that contains only a `<div>` element in the `<body>`:

```
<html>
    <head>
    </head>
    <body>
        <div>
            Building a basic box.
        </div>
    </body>
</html>
```

First, we'll add a border around the box, in order to highlight the `<div>`'s boundary between its padding and margin:


```
<html>
    <head>
<style> 

div {
    border: 1px solid black;
}

</style>
    </head>
    <body>
        <div>
            Building a basic box.
        </div>
    </body>
</html>
```

Next, I add the `margin` property with a value of `2em` to demonstrate how it adjusts the spacing around the `<div>` element,
pushing it away from adjacent elements.
Since the default value of `em` is set by the browser to `16px`,
using `2em` means the box will be offset from adjacent elements by 32 pixels on all four sides:

```
div {
    border: 1px solid black;
    margin: 2em;
}
```

### Dimensions

The four edges of a box&mdash;top, right, bottom, left (in that order)&mdash;can be set using a single shorthand property.
This shorthand works for the `margin` and `padding` properties.
In the following example, I set the `margin-top` to `2em`, the `margin-right` to `3em`,
the `margin-bottom` to `1em`, and the `margin-left` to `4em`.

```
<html>
    <head>
<style> 

div {
    border: 1px solid black;
    /* top, right, bottom, left */
    margin: 2em 3em 1em 4em;
}

</style>
    </head>
    <body>
        <h1>Heading 1</h1>
        <div>Hello world</div>
        <h2>Heading 1</h2>
    </body>
</html>
```

### Centering Boxes

To center a box horizontally, set a `width` and use `margin: auto;`.
This distributes the remaining space equally on both sides and centers the element within its parent container.
In the following snippet, I set the width of the `<div>` element to 90% of the window.
Then by setting `margin: auto;`, the `<div>` element gets centered in the viewing area.

```
<html>
    <head>
<style> 

div {
    border: 1px solid black;
    width: 90%;
    margin: auto;
}

</style>
    </head>
    <body>
        <h1>Heading 1</h1>
        <div>Hello world</div>
        <h2>Heading 1</h2>
    </body>
</html>
```

Note that we can also use `vw` to set the width.
For example, instead of using `width: 90%;` we can use `width: 50vw;`.

## Border

The above snippet introduces the `border` property.
This property is shorthand for `border-width`, `border-style`, and `border-color`, each of which can be set separately.
There is also a [`border-radius`][border_radius_mdn] property that can be used to create rounded edges.

Borders may be styled with various colors (`rgba`, `hsl`, hexadecimal, or color keywords)
and [different styles][border_styles_mdn], such as `solid`, `dotted`, `dashed`, `double`, and more.
Some styles, like `groove`, `ridge`, `inset`, and `outset`, create three-dimensional effects.
In the following snippet, I focus on the border's bottom edge by setting only the bottom's width, style, and color:

```
div {
    border-bottom-width: 10px;
    border-bottom-style: dashed;
    border-bottom-color: hsl(291,100%,50%);
    margin: 2em;
}
```

## Padding

The `padding` property covers the space between the `border` and the `content`.
Note that the effect is different when using relative lengths, like `em` or `rem`, and absolute lengths, like `px`.
As you recall, the `em` is relative to the `font-size` of the parent element and
`rem` is relative to the `font-size` of the `<html>` root element.
Thus, the following three examples result in different box sizes of the `<div>` element.

### Setting in Pixels

In the snippet below, the values for the `margin` and `padding` properties are set to 10 pixels regardless of the value of the
`html` font size or the `<div>`'s parent element.

```
<html>
    <head>
<style> 

html {
    font-size: 1rem;
}

div {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
}

</style>
    </head>
    <body>
        <div>
            Building a basic box.
        </div>
    </body>
</html>
```

### Setting in `em` (relative to parent element)

In the snippet below, the values for the `margin` and `padding` properties are set to `2em`.
Since the `<body>` element's `font-size` is `20px`, and `em` is relative to its parent,
setting `margin: 2em;` results in `2 * 20px = 40px`.

```
<html>
    <head>
<style> 

body {
    font-size: 20px;
}
div {
    border: 1px solid black;
    margin: 2em;
    padding: 2em;
}

</style>
    </head>
    <body>
        <div>
            Building a basic box.
        </div>
    </body>
</html>
```

You can test the relationship between the `<div>` and its parent element `<body>` by changing the font-size
for the `body` selector.

### Setting in `rem` (relative to root element)

In the following snippet, the font-size for the root `<html>` element is set to the default, which is `16px` (`1rem = 16px`).
Since the `margin` and `padding` for the `div` selector is set to `2rem` each, then they will each be `32px` (`2rem * 16px = 32px`). 

```
<html>
    <head>
<style> 

html {
    font-size: 1rem;
}
div {
    border: 1px solid black;
    margin: 2rem;
    padding: 2rem;
}

</style>
    </head>
    <body>
        <div>
            Building a basic box.
        </div>
    </body>
</html>
```

### Mixing `em` and `rem`

In the snippet below, the `p` selector uses `rem` units, and therefore its size is calculated with respect to the root element.
However, the `b` selector (for the `<b>` element in the HTML section) uses `em` units.
Since the `em` unit is calculated with respect to the parent element, and since the parent element in this case is the `<p>` element,
then the size of the text enclosed in the `<b>` element is calculated with respect to the `<p>` element.

```
<html>
    <head>
<style> 

html {
    font-size: 1rem;
}

p {
    border: 1px solid black;
    margin: 2rem;
    padding: 2rem;
}

b {
    border: 1px solid black;
    margin: 2em;
    padding: 2em;
}

</style>
    </head>
    <body>
        <p>This is <b>bold.</b></p>
    </body>
</html>
```

## Content

We have already discussed the last property: **content**.
For example, increasing `font-size` expands the content area, causing the box to grow accordingly.
In the following code snippet, I have an `<h1>` element with some simple text:

```
<html>
    <body>
        <section>
            <h1>Heading 1</h1>
        </section>
    </body>
</html>
```

Now let's add a border around that.
This reveals how the element is wrapped in a box:

```
<html>
    <head>
<style>

h1 {
    border: 1px solid black;
}

</style>
    </head>
    <body>
        <section>
            <h1>Heading 1</h1>
        </section>
    </body>
</html>
```

Increasing the `font-size` enlarges the content, which in turn expands the overall box dimensions.

```
<html>
    <head>
<style>

h1 {
    border: 1px solid black;
    font-size: 5em;
}

</style>
    </head>
    <body>
        <section>
            <h1>Heading 1</h1>
        </section>
    </body>
</html>
```

## Conclusion

Understanding the CSS box model is essential for controlling layout and spacing of elements on a webpage.
Remember that the **margin** creates space around an element,
**borders** define its visible boundaries, **padding** controls the space between the border and content, and
**content** itself determines the element's size.
When we use these properties effectively, we can adjust positioning, control whitespace, and create visually appealing layouts.

Learning how the interactions among these properties work takes practice,
especially when mixing units like `px`, `em`, and `rem`, or using various [combinators](3a1-syntax-and-selectors.html#combinators).
I encourage you to experiment with margin, padding, border, and content settings.
As you do, you will gain an increasing understanding of how boxes work and interact in CSS.

[boxes_edges_w3]:https://www.w3.org/TR/css-box-3/#box-edges
[border_styles_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
[border_radius_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
