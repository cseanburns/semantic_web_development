# Flexbox Basics

CSS has long offered a number of *layout modes* for desining the layout of documents, text, tables, and positions.
[CSS Flexbox layout][flexbox_w3] is a newer layout mode used to create responsive web page designs.
It works in one-dimensions: rows **or** columns.

## Introduction

CSS Flexbox includes the following **properties**:

- [`flex-direction`][flex_direction_w3] sets the axis of the flex container. Options include:
    - `row`
    - `row-reversed`
    - `column`
    - `column-reversed`
- [`flex-wrap`][flex_wrap_w3] defines whether flex container is single or multi-line. Options include:
    - `nowrap` (single line)
    - `wrap` (multi-line)
    - `wrap-reverse`
- [`flex-flow`][flex_flow_w3] is shorthand for: `flex-direction` and `flex-wrap`.
    - For example: `article { flex-flow: row wrap }` or `section { flex-flow: column nowrap}`.
- [`justify-content`][justify_content_w3] works to align flex items (items in a flex container) along the **main axis** defined in `flex-diretion`. Options include:
    - `flex-start`: pack items at the line start
    - `flex-end`: pack items at the line end
    - `center`: pack items near the center
    - `space-between`: distribute items evenly across the line, placing first and last flex item near the each margin border
    - `space-around`: similar to above, but spaces first and last flex item a half space from each margin border
- [`align-items`][align_items_w3] works on the **cross axis** of the container. Options include:
    - `auto` (default)
    - `flex-start`: flex items are flushed against the start of the container
    - `flex-end`: flex items are flushed against the end of the container
    - `baseline`: the baselines of flex items are aligned 
    - `stretch`: flex items are stretched from start to end
- [`align-content`][align_content_w3] is similary to how `justify-content` works on the main axis but works on the **cross-axis**. Options include:
    - `flex-start`: pack items at the container start
    - `flex-end`: pack items at the container end
    - `center`: pack items near the center of the container
    - `space-between`: distribute items evenly in the flex container, placing first and last flex item near the each margin border
    - `space-around`: similar to above, but spaces first and last flex item a half space from each margin border
    - `stretch`: flex items are stretched from start to end

## Examples

To initiate a flex layout, we use the `display` property.
We can use the `display` property in section elements such as `<body>`, `<article>`, `<section>`, `<nav>`, `<div>`, etc.
For example, to create a flex container for the `<nav>` element, we could use the following CSS declaration:

```
nav {
    display: flex;
    flex-flow: column wrap;
}
```

To create nested layouts, we can use `display` multiple times in a single web page.
For example, if an `<article>` element contains several `<section>` elements, then the following would be used:

```
article {
    display: flex;
    flex-flow: column nowrap;
}

section {
    display: flex;
    flex-flow: row wrap;
    }
```

### Basic Flex Example

In the following example, I make the `<section>` element a **flex container**.
This element includes six `<p>` elements, which become the **flex items**.
The `gap` property in the `section` rule adds a `10px` gap between between flex items.
For the `<p>` element, I add borders and expand their dimensions to create boxes around these elements. 
I use a **structural pseudo class** `nth-child()` to alternate the colors of these boxes.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Flex Example</title>
        <style>
            html {
                font-size: 100%;
            }

            header {
                border-bottom: 10px dotted blue;
            }

            section {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
            }

            p {
                border: 1px solid black;
                font-size: 2rem;
                width: 8rem;
                height: 8rem;
                padding: 10rem;
            }

            p:nth-child(odd) {
                background-color: black;
                color: white;
            }

            p:nth-child(even) {
                background-color: yellow;
                color: black;
            }

            footer {
                border-top: 10px dotted blue;
            }
        </style>
    </head>

    <body>
        <header><h1>This is a title</h1></header>

        <section>
            <p>Box 1</p>
            <p>Box 2</p>
            <p>Box 3</p>
            <p>Box 4</p>
            <p>Box 5</p>
            <p>Box 6</p>
        </section>

        <footer><h2>This is a footer</h2></footer>
    </body>
</html>
```

### Two Column Example

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Flex Example: Two Column Layout</title>
        <style>
            html {
                font-size: 100%;
            }

            header {
                border-bottom: 2px black solid;
                text-align: center;
            }

            section {
                display: flex;
                gap: 50px;
                flex-flow: row wrap;
                justify-content: center;
            }

            article {
                margin: auto;
            }

            footer {
                
                border-top: 2px black solid;
                text-align: center;
            }
        </style>
    </head>

    <body>
        <header><h1>Main Title</h1></header>

        <section>
            <article>
                <h2>Article Title 1</h2>
                <p>This is some text.</p>
            </article>
            <article>
                <h2>Article Title 2</h2>
                <p>This is more text.</p>
            </article>
        </section>

        <footer><h2>This is a footer</h2></footer>
    </body>
</html>

```

### Mixed Columns

In the following example, I add an additional row that isn't a flex container.
The result is a top row that contains two columns and an additional single colum row.
I make several other changes to augment the look of the page.
These include:

I add the following to the `body` selector to make the margins flush with the browser window:

```
body {
    max-width: 100%;
    margin: auto;
```

I create a `nav` section and make it a flex container.
The result is a responsive navigation bar.
The `<nav>` element includes an unordered list.
I remove the bullets in this list to make the list's appearance more conventional for a navigation section.

```
nav ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: black;
    color: white;
    padding: 10px;
    list-style-position: inside;
}

nav ul li {
    list-style-type: none;
}
```

Next comes the first of two `<section>` elements in the web document.
I assign the first `<section>` element to a class called `main` to indicate that this is the main section,
and to differentiate it from the second `<section>` element.
In the CSS, I make the main section a flex container.
I use `flex-flow: row wrap` to make it a responsive row, and I use `justify-content: center;` to center it on the main axis.

```
.main {
    display: flex;
    gap: 10px;
    flex-flow: row wrap;
    justify-content: center;
}
```

The remaining styles in the CSS control help keep the page consistent with the rest of the styling.
Note the use of the `clamp()` function.
This is used to set the minimum, preferred, and maximum values of an element.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Flex Example: Mixed Column Layout</title>
        <style>
            html {
                font-size: 100%;
                font-family: monospace;
            }

            body {
                max-width: 100%;
                margin: auto;
                font-size: 1.5rem;
            }

            header {
                border-bottom: 2px black solid;
                text-align: center;
            }

            nav ul {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
                background-color: black;
                color: white;
                padding: 10px;
                list-style-position: inside;
            }

            nav ul li {
                list-style-type: none;
            }

            .main {
                display: flex;
                gap: 10px;
                flex-flow: row wrap;
                justify-content: center;
            }

            .main_article { 
                margin: auto;
                max-width: clamp(320px, 40%, 1000px); */
            }

            .secondary_article {
                margin: auto;
                max-width: clamp(320px, 40%, 1000px);
            }

            footer {
                border-top: 2px black solid;
                text-align: center;
            }
        </style>
    </head>

    <body>
        <header>
            <h1>Main Title</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
        </header>


        <section class="main">

            <article class="main_article">
                <h2>Article Title 1</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.</p>

            </article>

            <article class="main_article">

                <h2>Article Title 2</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt.</p>

            </article>

        </section>

        <section>

            <article class="secondary_article">

                <h2>Article Title 3</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt.</p>

            </article>

        </section>

        <footer><h2>This is a footer</h2></footer>

    </body>
</html>
```

## Conclusion

In this section we learned about the CSS Flexbox layout model.
I first detailed the CSS properties that are available to create a Flex layout.
I provided an example using basic boxes.
Then I created a two-column example and a mixed column example,
both of which are responsive to mobile views.
These may also be adapted to create more complex layouts.

Note that the use of Flex aligns well with section elements,
such as the `<article>`, `<section>`, `<main>`, elements.
This is because, by definition, these elements are container elements.

Additional sources:

- [CSS Flex Container][css_flex_w3_schools]
- [Flexbox MDN][flexbox_mdn]

[align_content_w3]:https://www.w3.org/TR/css-flexbox-1/#align-content-property
[align_items_w3]:https://www.w3.org/TR/css-flexbox-1/#align-items-property
[css_flex_w3_schools]:https://www.w3schools.com/css/css3_flexbox.asp
[flexbox_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
[flexbox_w3]:https://www.w3.org/TR/css-flexbox-1/
[flex_direction_w3]:https://www.w3.org/TR/css-flexbox-1/#flex-direction-property
[flex_flow_w3]:https://www.w3.org/TR/css-flexbox-1/#flex-flow-property
[flex_wrap_w3]:https://www.w3.org/TR/css-flexbox-1/#flex-wrap-property
[justify_content_w3]:https://www.w3.org/TR/css-flexbox-1/#justify-content-property
