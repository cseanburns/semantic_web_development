# Styling Images, Lists, and Backgrounds

We have discussed how to add [images](2e-embedded-content.html) to our web pages.
Now it's time to learn to style them.
We will also learn how to style lists, which will include adding images to our lists,
and styling the background canvas of a web page.
For the full documentation, see [CSS Images Module Level 3][css_images_w3].

## Images

When we add images to a web page, we want to make sure that our images have been properly sized in a separate photo editor.
For example, if I add a photo to a web page that has the resolution of something like 1920x1080 pixels,
then the photo will be several megabytes in size.
A photo this large uses more bandwidth, which may slow down how quickly the web page displays in the browser.
Therefore, before we tinker with sizes in HTML or CSS, we need to reduce the resolution of our images in a separate photo editor.

In HTML and CSS, we can set the values of an image with simple `width` and `height` settings.
For example, in HTML, we can use the `width` and `height` attributes:

```
<img src="media/walking_bridge.jpg"
    alt="A walking bridge over a stream"
    width="673"
    height="378">
```

Alternatively, we can leave out the HTML attributes in the above code and instead add these properties to our CSS.
In the CSS below, I use the `img` selector with the specified `width` and `height` properties:

```
img {
    width: 673px;
    height: 378px;
}
```

It's important to understand that resizing images directly in HTML or CSS does not reduce the image's **file size**.
It only reduces the **display size**.
Therefore, be sure to properly resize the image using a photo editor to optimize your web page's performance.

### `object-fit`

Recall that the [CSS box model](3b-box-model.html) informs everything about how content is styled on a page.
This means that even images are enclosed within boxes.
The following HTML code adds a simple drawing to our web page, and the CSS code sets a border, background color, and dimensions.

**HTML:**

```
<img src='media/box_circle.png' alt='A drawing of a box in a circle'>
```

**CSS:**

```
img {
    border: 1px solid black;
    background-color: silver;
    width: 300px;
    height: 400px;
}
```

Using the [`object-fit`][object_fit_w3] property, we can scale the image within the box.
Values include `fill`, `contain`, `cover`, `none`, and `scale-down`.
First, in the HTML code below, I use classes to style the same image for each of those values.

```
<h3>Fill</h3>
<img class="fill" src='media/box_circle.png' alt='A drawing of a box in a circle'>

<h3>Contain</h3>
<img class="contain" src='media/box_circle.png' alt='A drawing of a box in a circle'>

<h3>Cover</h3>
<img class="cover" src='media/box_circle.png' alt='A drawing of a box in a circle'>

<h3>None</h3>
<img class="none" src='media/box_circle.png' alt='A drawing of a box in a circle'>

<h3>Scale Down</h3>
<img class="scale-down" src='media/box_circle.png' alt='A drawing of a box in a circle'>
```

In the CSS code below, I apply the `object-fit` property to the appropriate classes in the above HTML.

The original image (`box_image.png`) has the dimensions of `513x503`,
but we set the `width: 300px` and `height: 400px` in the `img` selector.
Therefore, the `fill` value will distort the image so that it fills the box:

```
.fill {
    object-fit: fill;
}
```

The `contain` value scales the content so that it maintains its original aspect ratio:

```
.contain {
    object-fit: contain;
}
```

The `cover` value scales the content so the content completely covers the box and preserves the original aspect ratio:

```
.cover {
    object-fit: cover;
}
```

The `none` value displays the content at its original size (513x503):

```
.none {
    object-fit: none;
}
```

The `scale-down` value displays the content at its smallest possible size between `none` and `contain`:

```
.scale-down {
    object-fit: scale-down;
}
```

### Position

Images may also be positioned within their surrounding boxes using the [`object-position`][object_position_w3] property.
By default, an image's position is centered in its box.
We can adjust the x-axis and y-axis coordinates to move the image within its box.
In the HTML below, I use classes to specify the position of the images:
default, top, right, bottom, and left.

```
<h3>Image Default</h3>
<img class="position" src='media/box_circle.png' alt='A drawing of a box in a circle'>

<h3>Image Top</h3>
<img class="position_top" src='media/box_circle.png' alt='A drawing of a box in a circle'>

<h3>Image Right</h3>
<img class="position_right" src='media/box_circle.png' alt='A drawing of a box in a circle'>

<h3>Image Bottom</h3>
<img class="position_bottom" src='media/box_circle.png' alt='A drawing of a box in a circle'>

<h3>Image Left</h3>
<img class="position_left" src='media/box_circle.png' alt='A drawing of a box in a circle'>
```

In the CSS below, I apply the classes by modifying the x-axis and y-axis for each:

```
.position {
    object-position: 50% 50%;
}
.position_top {
    object-position: 50% -50px;
}
.position_right {
    object-position: 50px 50%;
}
.position_bottom {
    object-position: 50% 50px;
}
.position_left {
    object-position: -50px 50%;
}
```

### Transform

We can also transform images and <q>rotate, scale, skew, or translate</q> ([MDN `transform`][transform_mdn]) them
(and other elements, too).
Consider the basic HTML code:

```
<img class="flip" src='media/box_circle.png' alt='A drawing of a box in a circle'>
```

Using the CSS `transform` property, we can rotate it by half a turn:

```
.flip {
    transform: rotate(0.5turn);
}
```

See the link above for examples of the other methods.

### Floats

The [`float`][float_w3] property lets us position images adjacent to text (or other elements).
This technique is useful when creating layouts where text wraps around images.

Consider the following HTML examples.
In each example, we add an `<img>` element adjacent to a `<p>` element.
In the first example, we use the default behavior, which is to not `float` the image:

```
<h3>No Float (Default)</h3>
<img class="small" src='media/box_circle.png' alt='A drawing of a box in a circle'>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.</p>
```

In the next example, we `float` the image to the left of the text:

```
<h3>Float Left</h3>
<img class="left_float" src='media/box_circle.png' alt='A drawing of a box in a circle'>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.</p>
```

In the last example, we `float` the image to the right of the text:

```
<h3>Float Right</h3>
<img class="right_float" src='media/box_circle.png' alt='A drawing of a box in a circle'>
<p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.</p>
```

### Gradients

We can use [`gradient`][gradients_w3] colors to style images or backgrounds.
We can apply gradients using angles (e.g., `45deg`) or keywords (e.g., `to top`).
See the link above for other examples.

```
<h3>Linear Gradient</h3>
<img class="linear" src='media/box_circle.png' alt='A drawing of a box in a circle'>

<h3>Linear Gradient Using Angle</h3>
<img class="angle" src='media/box_circle.png' alt='A drawing of a box in a circle'>

<h3>Linear Gradient Using Keywords</h3>
<img class="top" src='media/box_circle.png' alt='A drawing of a box in a circle'>
```

In CSS below, I use a default `linear-gradient` in the first CSS class.
In the second class, I use degrees to specify the exact gradient angle.
In the third class, I use the `to top` keyword.

```
.linear {
    padding: 50px;
    background: linear-gradient(white, black);
}

.angle {
    padding: 50px;
    background: linear-gradient(45deg, white, black);
}

.top {
    padding: 50px;
    background: linear-gradient(to top, silver, green);
}
```

The [main gradient keywords][gradient_keywords_w3] include:

- `to top` equates to `0deg`
- `to right` equates to `90deg`
- `to bottom` equates to `180deg`
- `to left` equates to `270deg`

### Opacity

We can change the transparency of an image using the `opacity` property.
A value of `0.0` indicates full transparency and a value of `1.0` indicates a fully opaque image.

**HTML**:

```
<h3>High Opacity</h3>
<img class="opacity_low" src='media/box_circle.png' alt='A drawing of a box in a circle'>

<h3>Medium Opacity</h3>
<img class="opacity_med" src='media/box_circle.png' alt='A drawing of a box in a circle'>
```

**CSS**:

```
.opacity_low {
    opacity: 0.2;
}

.opacity_med {
    opacity: 0.5;
}
```

## Lists

We can create **ordered** or **unordered** lists using the `<ol>` and `<ul>` HTML elements.
CSS offers flexibility in customizing [lists][css_lists_w3].
We can use images, emojis, or custom markers for list items.

### Standard Lists

Let's begin with a standard unordered list:

```
<h3>Standard Unordered List</h3>
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ul>
```

### List Marker Positions

We can use the `list-style-position` to alter the position of the bullets.
This also works for ordered lists using the `<ol>` element:

```
.inside {
    list-style-position: inside;
}
```

In the following HTML, I apply the position using a class:

```
<h3>Unordered List: Inside Position</h3>
<ul class="inside">
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ul>
```

### Reverse Lists

In ordered lists, we can reverse the order of the counter using the `reverse` attribute (no CSS needed!):

```
<h3>Reversed Ordered List</h3>
<ol reversed>
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ol>
```

### List Values

We can also begin counting at arbitrary numbers (whole numbers only, though):

```
<h3>New List Counter</h3>
<ol start="10">
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ol>
```

We can combine both attributes.
In the following example, we start the count at `10` and then countdown using the `reverse` attribute:

```
<h3>Reversed New List Counter</h3>
<ol start="10" reversed>
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ol>
```

### Roman Numerals

We can change to Roman numerals:

```
<h3>Upper Roman Numeral</h3>
<ul class="roman_upper">
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ul>

<h3>Lower Roman Numeral</h3>
<ul class="roman_lower">
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ul>
```

We define the use of Roman numerals in CSS.
To use uppercase Roman numerals, we use `list-style-type: upper-roman`.
To use lowercase Roman numerals, we use `list-style-type: lower-roman`.

```
.roman_upper {
    list-style-type: upper-roman;
}

.roman_lower {
    list-style-type: lower-roman;
}
```

### English Characters

We can also use English characters by using either
`list-style-type: lower-alpha` or `list-style-type: upper-alpha`:

**HTML**:

```
<h3>Lower Alpha</h3>
<ul class="alpha_lower">
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ul>

<h3>Upper Alpha</h3>
<ul class="alpha_upper">
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ul>
```

**CSS**:

```
.alpha_lower {
    list-style-type: lower-alpha;
}

.alpha_upper {
    list-style-type: upper-alpha;
}
```

### Removing List Markers 

We can remove all marks using `list-style-type: none`:

**HTML**:

```
<h3>No Marks</h3>
<ol class="no_marks">
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ol>
```

**CSS**:

```
.no_marks {
    list-style-type: none;
}
```

### Changing List Markers

Or may also specify using a `circle`, a `disc`, Unicode, or [other characters][list_style_type_mdn].

**HTML**:

```
<h3>Circle</h3>
<ol class="circle"> 
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ol>
```

**CSS**:

```
.circle {
    list-style-type: circle;
}
```

### Emojis as List Markers

If we want to use emojis as our markers, then we need to use the corresponding Unicode for the emoji.
See the [Full Emoji List][emojis_unicode] for ideas.
In the following example, I use the [Vulcan Salute][vulcan_unicode] as a marker for my list:

```
<h3>Vulcan Salute</h3>
<ol class="vulcan"> 
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ol>
```

**CSS**:

```
.vulcan {
    list-style-type: "\1F596";
}
```

### Custom Images as List Markers

We can also use our own images.
In the examples below, I used ChatGPT to generate icons for the fruit images.
These icons were generated as [`webp`][webp_wikipedia] files, and
I refer to them using using the `url` value in the CSS.

In the first list below, I use one icon for all marks:

**HTML**:

```
<h3>Unordered List Using Images</h3>
<ul class="fruit_basket">
    <li>Apple</li>
    <li>Banana</li>
    <li>Watermelon</li>
</ul>
```

**CSS**:

```
.fruit_basket {
    list-style-image: url('media/fruit.webp');
}
```

In the following list, I use a separate fruit icon for each item in the list:

```
<h3>Unordered List Using Separate Images</h3>
<ul>
    <li class="apple">Apple</li>
    <li class="banana">Banana</li>
    <li class="watermelon">Watermelon</li>
</ul>
```

**CSS**:

```
.apple {
    list-style-image: url('media/apple.webp');
}

.banana {
    list-style-image: url('media/banana.webp');
}

.watermelon {
    list-style-image: url('media/watermelon.webp');
}
```

### Nested Lists

Additionally, we can nest lists to create outlines or apply different `list-style-type` values for more variety.

#### Nested Ordered Lists

In the following example, I add an ordered list within an ordered list:

```
<h4>Ordered Nested</h4>
<ol>
    <li>Apples
        <ol>
            <li>HoneyCrisp</li>
            <li>Fuji</li>
        </ol>
    </li>
    <li>Bananas
        <ol>
            <li>Cavendish</li>
            <li>Plantain</li>
        </ol>
    </li>
    <li>Watermelon
        <ol>
            <li>Crimson Sweet</li>
            <li>Yellow Baby</li>
        </ol>
    </li>
</ol>
```

#### Nested Unordered Lists

Likewise, we can nest an unordered list within an unordered list:

```
<h4>Unordered Nested</h4>
<ul>
    <li>Apples
        <ul>
            <li>Honeycrisp</li>
            <li>Fuji</li>
        </ul>
    </li>
    <li>Bananas
        <ul>
            <li>Cavendish</li>
            <li>Plantain</li>
        </ul>
    </li>
    <li>Watermelon
        <ul>
            <li>Crimson Sweet</li>
            <li>Yellow Baby</li>
        </ul>
    </li>
</ul>
```

#### Nested Mixed Lists

We can also mix ordered and unordered lists when nesting.
In the following two lists, I nest an unordered list within an ordered list.
Then an ordered list within an unordered list.

##### Ordered to Unordered

```
<h4>Ordered/Unordered Nested</h4>
<ol>
    <li>Apples
        <ul>
            <li>Honeycrisp</li>
            <li>Fuji</li>
        </ul>
    </li>
    <li>Bananas
        <ul>
            <li>Cavendish</li>
            <li>Plantain</li>
        </ul>
    </li>
    <li>Watermelon
        <ul>
            <li>Crimson Sweet</li>
            <li>Yellow Baby</li>
        </ul>
    </li>
</ol>
```

##### Unordered to Ordered

In this example, I nest ordered lists in an unordered list:

```
<h4>Unordered/Ordered Nested</h4>
<ul>
    <li>Apples
        <ol>
            <li>Honeycrisp</li>
            <li>Fuji</li>
        </ol>
    </li>
    <li>Bananas
        <ol>
            <li>Cavendish</li>
            <li>Plantain</li>
        </ol>
    </li>
    <li>Watermelon
        <ol>
            <li>Crimson Sweet</li>
            <li>Yellow Baby</li>
        </ol>
    </li>
</ul>
```

#### Nested, Mixed Style Types

When nesting, we can apply a different `list-style-type` for the nested lists:

```
<h4>Roman Upper/Lower Nested</h4>
<ol class="roman_upper">
    <li>Apples
        <ul class="roman_lower">
            <li>Honeycrisp</li>
            <li>Fuji</li>
        </ul>
    </li>
    <li>Bananas
        <ul class="roman_lower">
            <li>Cavendish</li>
            <li>Plantain</li>
        </ul>
    </li>
    <li>Watermelon
        <ul>
            <li>Crimson Sweet</li>
            <li>Yellow Baby</li>
        </ul>
    </li>
</ol>
```

## Styling the Background

We can set the background color of an HTML page by using the [`background` property][css_backgrounds_w3].
For example, if we want a black background with white text, then we can set that using the `html` selector:

```
html {
    background: black;
    color: white;
}
```

But we have tools to offer more control using [gradients][gradients_w3].
For example, we can create cool gradient effects with `linear-gradient`, `radial-gradient`, `conic-gradient`, and other properties.
In the following example, I use the `linear-gradient` property to create a white and gray gradient across the page:

```
html {
    background: linear-gradient(white, gray);
}
```

And the `radial-gradient` property to create a yellow and green radial gradient across the page:


```
html {
    background: radial-gradient(yellow, green);
}
```

We can also use gradient keywords.
In the example below, I create a radial gradient focused on the left bottom of the page:

```
html {
    background: radial-gradient(farthest-side at left bottom, yellow 50px, green);
}
```

When using images for the background, we use the `url` keyword with the location to the image.
By default, background images repeat across the x-axis and y-axis.
I use an image of a small grid or square to create a kind of notebook effect for the page:

```
html {
    background: url('media/small_grid.gif');
}
```

We need to use the `background-repeat: no-repeat` property and value to disble image repeating:

```
html {
    background: url('media/squiggly.png');
    background-repeat: no-repeat;
}
```

We can control the axis where the image repeats and the position on the page with
the `repeat-x` value and `background-position: center;` declaration:
    
```
html {
    background: url('media/squiggly.png');
    background-repeat: repeat-x;
    background-position: center;
}
```

And the same for the y-axis:

```
html {
    background: url('media/squiggly.png');
    background-repeat: repeat-y;
    background-position: center;
}
```

We can also fix the image to a specific location so that the image remains fixed when the user scrolls the page:

```
html {
    background: url('media/squiggly.png');
    background-repeat: repeat-x;
    background-attachment: fixed;
}
```

## Conclusion

In this section, we covered various CSS techniques for styling images, lists, and backgrounds.
We manipulated images with properties like `object-fit` and `transform`,
we customized lists with different styles and markers,
and we also explored backgrounds with gradients, fixed positions, and background images.
CSS offers a lot of flexibility.

Please experiment with these concepts to create visually engaging and user-friendly (or wild looking) web pages.
Have fun, practice, and build your knowledge.

[css_backgrounds_w3]:https://www.w3.org/TR/css-backgrounds-3/#backgrounds
[css_images_w3]:https://www.w3.org/TR/css-images-3/#image-values
[css_lists_w3]:https://www.w3.org/TR/css-lists-3/#propdef-list-style-image
[emojis_unicode]:https://unicode.org/emoji/charts/full-emoji-list.html
[float_w3]:https://www.w3.org/TR/css-page-floats-3/#float-property
[gradient_keywords_w3]:https://www.w3.org/TR/css-images-3/#linear-gradient-syntax
[gradients_w3]:https://www.w3.org/TR/css-images-3/#gradients
[list_style_type_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
[object_fit_w3]:https://www.w3.org/TR/css-images-3/#sizing
[object_position_w3]:https://www.w3.org/TR/css-images-3/#the-object-position
[transform_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/transform
[vulcan_unicode]:https://unicode.org/emoji/charts/full-emoji-list.html#1f596
[webp_wikipedia]:https://en.wikipedia.org/wiki/WebP
