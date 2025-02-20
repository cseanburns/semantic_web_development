# Colors and Units of Measurements

## Introduction

Designing a web page begins by controlling color and sizing.
These base conditions lay the foundations for shaping user experience.
It's also where the fun begins.

Importantly, colors establish a site's visual identity, improves readability, and 
[creates contrast][color_contrast], which is important for website accessibility.
There are multiple methods to define colors in CSS.
These methods include named colors (red, blue, green, yellow, etc),
RGB values, hexadecimal codes, and HSL (Hue-Saturated-Lightness) values.
Each method has its strengths with respect to levels of precision and to device type.

CSS also provides many different types of units of measurement.
These units allow for precise control over layout and typography, which we will cover soon,
and define dimensions such as font size, spacing, and layout structure.
There absolute units, such as pixels and inches, and there are relative units, such as `rem` and `em`.
The latter make designs more flexible and responsive.

In this section, we will explore how to use CSS color properties to enhance design and
measurement units to create scalable, adaptable layouts.
These concepts will help you build visually appealing and responsible web pages.

## Colors

There are four methods to create or add color to the various parts of our websites.
We can use:

- Color keywords:
    - [Basic color keywords][basic_color_keywords_w3]: black, silver, gray, red, green, teal, etc.
    - [Extended color keywords][extended_color_keywords_w3]: aqua, chocolate, cyan, gold, indigo, lime, etc
- RGB values:
    - The RGB value can declare a specific color: `p { color: rgb(255, 241, 0); }` (a yellow color)
    - We can add a fourth value to indicate opacity; here I set opacity to 50%: `p { color: rgb(255, 241, 0, 0.5); }`
- Hexadecimal values;
    - We can use a hexadecimal value to identify a color: `p { color: #fffb00; }`
        - Lots of websites list RGB and Hexadecimal values, such as: [RGB / Hexademical Color Picker][rgb_color_picker] 
- HSL (hue-saturated-lightness) values:
    - HSL is considered more useful than RGB because it's less hardware dependent and considered more intuitive.
    - The values stand for Hue, Saturation, and Lightness: `p { color: hsl(291, 100%, 50%); }`
    - The Hue is a degree on a color wheel and accepts values from 0 to 360.
    - Saturation and Lightness are coded as percentages.
        - See: [HSL Color Picker][hsl_color_picker] 

We can add color to any element, and we can specify which elements to style using the selectors we reviewed in the prior section.
As an example, consider the following, abbreviated HTML document:

```
<html>
    <body>
    <main>
    <h1>Heading 1</h1>
        <section>
        <h2>Heading 2a</h2>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <pre><code>
        #!/usr/bin/env bash
        
        for i in * ; do echo "${i}" ; done
        </code></pre>
        <h2>Heading 2b</h2>
        <p>Paragraph 3</p>
        </section>
    </main>
    </body>
</html>
```

We can add background color to the page.
In the code below, `aliceblue` is a color keyword and `#000000` is hexadecimal for black:

```
html {
    background-color: aliceblue;
    color: #000000;
}
```

We can colorize the headings:

```
h1 ~ h2 {
    color: yellow;
    background-color: aqua;
}
```

We can add background color the `<section>` element to create a box-like effect.
The code below uses HSL and RGB, as an example.

```
section {
    background-color: hsl(360, 100%, 60%);
    color: rgb(255,241,0,0.5);
}
```

In practice, it's certainly fine to stick to one method (keywords, RGB, HSL, hexadecimal), or mix it up.

## Data Types and Units of Measurements

Like many programming languages, CSS accepts a variety of data types.
The common data types in CSS include:

- Integers: whole numbers (e.g., 1, 42, -5)
- Floating point, aka, decimal numbers (e.g., 1.5, 3.14, -0.75)
- Dimensional values: length, width, angle, and more
- Percentages: fractions represented as percentages

These data types are used primarily to add distance or length to elements.
There are two broad categories of length and each include a variety of units:

- Relative lengths:
    - Font-relative lengths:
        - `em`: relative to the `font-size` of the parent element.
        - `rem`: relative to the `font-size` of the `<html>` element (root). Defaults to `16px` unless overridden.
    - Viewport-relative lengths:
        - `vw`
        - `vh`
        - `vmin`
        - `vmax`
- Absolute lengths:
    - `cm`: centimeters
    - `mm`: millimeters
    - `Q`: quarter-millimeters
    - `in`: inches
    - `pt`: points (1/72<sup>nd</sup> of 1 inch)
    - `pc`: picas (1/6<sup>th</sup> of 1 inch)
    - `px`: pixels (1/96<sup>th</sup> of 1 inch)

For the most part, we will rely on relative lengths to adjust fonts and other elements in our HTML pages.
This is because relative lengths are more responsive to different device sizes and screen resolutions.
However, it's important to know that absolute lengths exist if needed.

Consider the following HTML snippet.
In the snippet below, I use internal CSS for demonstration purposes, but in practice, use an external stylesheet.

```
<html>
    <head>
        <title>sizes</title>
<style>
html {
    font-size: 1rem;
}

header {
    font-size: 1em;
}

h1 {
    font-size: 2em;
}

h2 {
    font-size: 2em;
}

p {
}

ul {
    font-size: 2em;
}

li {
    font-size: 1em;
}
</style>
    </head>
    <body>
        <header>
            <h1>header 1</h1>
            <h2>header 2</h2>
        </header>
        <p>This is a test.
        This is only a test.
        That is all.</p>
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
        </ul>
    </body>
</html>
```

### Set `rem` in the `html` selector

```
html {
    font-size: 1rem;
    }
```

By default, browsers set `1rem = 16px`, unless overridden.
In this example, we make the connection explicit.

### Example: using `em` in `header`, `h1`, and `h2`
 
In the HTML example, note that `<header>` is a descendant element of the `<html>` element, and
that `<h1>` and `<h2>` are siblings and both descendants of `<header>`.
Now consider the following CSS:

```
header {
    font-size: 1em;
}

h1 {
    font-size: 1em;
}

h2 {
    font-size: 1em;
}
```

Since the `header` selector has a font-size of `1em`, it inherits its font size from the `html` selector since it's a descendant.
Therefore, since `1em = 16px`, the `<header>` element is set to `16px`.

Since `<h1>` is inside `<header>`, and since it uses an `em` unit of measurement, it inherits its size from the `<header>` element.
Since the `h1` selector is set to `2em`, then `2em * 16px = 32px`.

Since `<h2>` is also inside `<header>` (it is not a descendant but a sibling to `<h1>`),
it also inherits from `<header>`.
Since the `h2` is set to `2em`, then as with `h1`, we have `2em * 16px = 32px`.
Specifically, since `header` is set to `1em`, its font size is unaffected with respect to `html`.
Therefore, `h1` and `h2` are both calculated relative to `html`.

### Example: Using `em` in `ul` and `li`

In the above HTML, the `<ul>` element is a descendant of `<html>`.
Since `ul` is set to `2em`, then like above, `2em * 16px = 32px`.
However, the `<li>` element is a child of `<ul>` and since its font-size uses the `em` unit, then it inherits from `<ul>`.
Since `ul` is calculated to be `32px`, then `li` is `1em * 32px = 32px`.

In practice, therefore, we can see how `em` compounds based on what it inherits from its parent element.
This makes using `rem` more predictable.
If we set the font-size of all elements to `1rem`, then the font-size for all elements would be `16px` because `1rem * 16px = 16px`.
However, if we only set the `html` selector to `1rem`, then the browser uses its default sizes.

### Be sure to understand inheritance.

Consider the following rules:

```
html {
    font-size: 1rem;
}

header {
    font-size: 2rem;
}

h1 {
    font-size: 1rem;
}

h2 {
    font-size: 1.5rem;
}
```

We might think that since `h1` and `h2` are child elements of `header`,
this would result in very large font sizes for `<h1>` and `<h2>`.
Remember though that `rem` is always relative to the font-size set in the `html` selector (typically `16px`).
Even though the `header` is set to `2rem`, the `h1` and `h2` rules explicitly define their font sizes using `rem`.
So they ignore the inherited value from `header`.
That is, `h1` and `h2` are calculated with respect to `html`.

- `html`: `1rem * 16px = 16px`
- `h1`: `1rem * 16px = 16px`
- `h2`: `1.5rem * 16px = 24px`

However, if we only use the following two rules in our CSS:

```
html {
    font-size: 1rem;
}

header {
    font-size: 2rem;
}
```

Then both `h1` and `h2` would increase by `2rem` since they are direct children of `<header>`. 

## Page Sizing

Viewport relative lengths are useful when controlling the width of the sections on a page,
like `<main>`, `<section>`, `<article>`, and like.
Consider the following HTML snippet:

```
<html>
    <head>
        <title>sizes</title>
<style>

header, section {
    width: 50vw;
    margin: auto;
}

header {
    text-align: center;
}
</style>
    </head>
    <body>
        <header>
            <h1><cite>Their Eyes Were Watching God</cite></h1>
            <h2>Zora Neale Hurston</h2>
        </header>
        <section>
            <p><q>Ships at a distance have every man's wish on board. For some they
            come in with the tide. For others they sail forever on the horizon,
            never out of sight, never landing until the Watcher turns his eyes
            away in resignation, his dreams mocked to death by Time. That is
            the life of men.</q></p>

            <p><q>Now, women forget all those things they don't want to remember, and
            remember everything they don't want to forget. The dream is the
            truth. Then they act and do things accordingly.</q></p>
        </section>
    </body>
</html>
```

In the above code, I set the width of the `header` and `section` selectors to 50% of the viewport: `width: 50vw;`.
Since `vw` (viewport width) is a relative unit, the elements inside these sections will automatically adjust
when the browser window is resized.

I also set `margin: auto;`.
The result is that the left and right margins will automatically adjust to ensure equal spacing on both sides
and will be centered within the page.

I also used the `text-align: center;` for the `header` selector.
This centers all text in the `<header>` element, which includes the `<h1>` and `<h2>` elements.
Even though the `header` is only 50vw wide, the text inside is aligned to the center of that space.

## Conclusion

It's important to understand the color systems and measurement units in CSS.
We use these CSS technologies to create visually appealing and responsive designs.
To recall:

- Color values like RGB, HSL, and hexadecimal allow precise control over appearance. Color keywords allow for easy color choices of common colors.
- Measurement units like `rem`, `em`, and viewport units help ensure layouts scale properly across different devices.
- The choice between relative (`em`, `rem`, `vw`) and absolute (`px`, `cm`, `in`) units depends on whether you need flexibility or fixed sizing.

When you understand these concepts, you will be able to build adaptable, maintainable, and user-friendly web designs.
We'll explore more responsive techniques later in this work when we tackle Flexbox and Grid Layout methods.

[basic_color_keywords_w3]:https://www.w3.org/TR/css-color-3/#html4
[color_contrast]:https://beaccessible.com/post/the-importance-of-color-contrast-in-digital-accessibility/
[extended_color_keywords_w3]:https://www.w3.org/TR/css-color-3/#svg-color
[hsl_color_picker]:https://hslpicker.com/
[rgb_color_picker]:https://rgbcolorpicker.com/
