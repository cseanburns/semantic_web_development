# The Box Model

The basic principle of working with CSS and HTML is knowing that all HTML elements are contained in a box.
This includes everything from the root element `<html>` all the way down to
text-level elements such as the paragraph tag `<p>` or the `<span>` tag.
We can test this using the universal selector `*` in our CSS.
For example, consider the following HTML, which quotes the first sentence from <cite>Moby-Dick</cite>:

```
<html>
    <head>
    </head>
    <body>
        <h1><cite><span class="all_cap">Moby-Dick;</span> or <span class="all_cap">The Whale</span></cite></h1>
        <h2>By Herman Melville</h2>
        <p><q>Call me Ishmael.
            Some years ago&mdash;never mind how long precisely&mdash;having little or no money in my purse,
            and nothing particular to interest me on shore,
            I thought I would sail about a little and see the watery part of the world.</q></p>
        <p>Read the full text at: <a href="https://www.gutenberg.org/ebooks/2701">Project Gutenberg</a></p>
    </body>
</html>
```

In the following snippet, I add the universal selector to place a box around all elements in the above web document.

```
<html>
    <head>
<style> 
* {
    border: 1px solid black;
}
.all_cap {
    text-transform: uppercase;
}
</style>
    </head>
    <body>
        <h1><cite><span class="all_cap">Moby-Dick;</span> or <span class="all_cap">The Whale</span></cite></h1>
        <h2>By Herman Melville</h2>
        <p><q>Call me Ishmael.
            Some years ago&mdash;never mind how long precisely&mdash;having little or no money in my purse,
            and nothing particular to interest me on shore,
            I thought I would sail about a little and see the watery part of the world.</q></p>
        <p>Read the full text at: <a href="https://www.gutenberg.org/ebooks/2701">Project Gutenberg</a></p>
    </body>
</html>
```

Understanding this idea, that CSS treats HTML elements as boxes, is important for styling and designing layouts to our HTML.
It's also important to understand that since boxes can be nested within other boxes, or sit adjacent to other boxes
(e.g., descendant elements, sibling elements, etc),
that styling elements has ripple effects.
Adjusting a box's size or position affects surrounding elements, as boxes influence each other's layout.
Therefore, to fully fully understand how to manipulate HTML elements, we need to understand that CSS boxes possess several properties.

## Box Properties

The CSS box model consists of four main properties:
the **content**, surrounded by **padding**, a **border**, and an outer **margin**.
Figure 1 below visually represents these properties in the standard CSS box model.

<figure>
<img src="images/css_box_model.png"
alt="Visual representation of the CSS Box Model"
title="Visual representation of the CSS Box Model">
<figcaption>
Fig. 1. <a href="https://www.w3.org/TR/css-box-3/#box-model">The CSS Box Model</a>
</figcaption>
</figure>

In CSS, we can style the margin, border, padding, and content.
We have already discussed styling **content**.
We do this when we, for example, change the font-size of an element, like using `em` and other units of measurement.

## Conclusion

Mastering the box model takes time, as it serves as the foundation of CSS layout.
Every adjustment has ripple effects for descendant and sibling elements.
In the next section, we learn how to control a box's sizing and appearance by styling its margins, borders, and padding.
