# Typography and Font Styles

The *typography* of a document is generally its most visible aspect.
This is true regardless of whether the document is a web page, a book, a billboard, or a flyer.
We use typographic principles to shape how text is presented, read, and interpreted.

In web development, typography is important because it influences the user experience.
It affects readability, aesthetics, and accessibility, and
it plays a central role in how content is presented across different screen sizes and devices.

Overall, good typography can:

- improve readability and legibility
- establish identity and tone
- enhance user engagement
- maximize accessibility for users, including those with visual impairments
- contribute to an intuitive and pleasant user experience

## Key Concepts in Typography

Typography consists of several characteristics that determine how text appears.
In CSS, we change these characteristics by specifying the following properties:

- `font-family`: this is the specific typeface or group of typefaces. Major families include: `serif`, `sans-serif`, `monospace`
- `font-style`: this includes variations like normal, italic, or oblique
- `font-weight`: this addresses the thickness of characters and ranges from light to bold
- `font-size`: this sets the height of characters. It can be set in fixed or relative units, and it alters the content size of its box
- `letter-spacing`: this addresses the spacing between individual characters
- `line-height`: this addresses the spacing between lines of text

Although the following two are more about positioning of text on a screen, they still impact readability:

- `text-align`: this addresses the horizontal alignment of text and is used to center or justify text
- `text-indent`: this addresses the indentation of text

## Typography vs. Fonts

[Typography][typography_wiki] refers to the overall design and arrangement of text.
It includes the choice of fonts, how fonts are spaced and aligned, and other readability considerations.

In CSS, and thus in practice, we largely work with properties related to **fonts**.
Fonts are specific styles or variations of [typefaces][typeface_wiki] (aka, font families).
In short, typography is the art of arranging text,
while fonts are the specific tools used in that arrangement.

## Basic Typography Principles

The goal of typography is to improve readability.
This is supported by creating web pages and sites that are visually appealing.
The following key principles help achieve that goal:

- **Readability and legibility**: Use appropriate font choices, sizes, and spacing to make sure that text is easy to read.
- **Hierarchy**: Implement variations in font size, weight, and color because it will help establish structure and guide the reader's attention.
- **Consistency**: Maintain uniformity in the typographic elements, such as font families, alignment, and spacing, you use to create a cohesive design.
- **Alignment and balance**: Arrange text in a consistent and structured way. This includes properties like left alignment, centering, and justifying. This will help maintain visual balance and improve reading comprehension.
- **Contrast**: Differentiate headings, body text, and other elements through the use of font weight, font size, and font color. This will help make content more engaging.
- **White space (or negative space)**: Use adequate spacing around text. This will help avoid clutter and improve readability.

## Font Families

Of all the typographic elements above, the one with the most impact is the `font-family`.
The major font families include `serif`, `sans-serif`, and `monospace`, but [there are more][font_families_w3].
We select font families based on several criteria:

- **Serif fonts**: these are typefaces that have decorative strokes, or *serifs*, at the ends of letters. Common examples include Times New Roman and Georgia. These kinds of typefaces are commonly used in print and they convey a classic, professional look.
    - An example of a serif font: <p style="font-family: serif">The Quick Brown Fox Jumps Over The Lazy Dog.</p>
- **Sans-serif fonts**: these fonts lack (*sans*) serifs or decorations. These fonts convey cleaner and more modern designs. Common examples include Arial, Helvetica, and Verdana. They often improve clarity and readability on screens in particular.
    - An example of a sans-serif font: <p style="font-family: sans-serif">The Quick Brown Fox Jumps Over The Lazy Dog.</p>
- **Monospace fonts**: the characters in these fonts take up the same amount of horizontal space. Examples include Courier New and Consolas. These font families are typically used in coding environments or to display code in web documents because they make it easier to align characters and read structured text.
    - An example of a monospace font: <p style="font-family: monospace">The Quick Brown Fox Jumps Over The Lazy Dog.</p>


> For a topical (and weirdly political) read on fonts and accessibility,
> [read about the controversy][state_department_nytimes] about the US State Department's
> decision to revert to Times New Roman (a serif font) instead of the Calibri (a sans-serif font) for all formal documentation.

## Typography in Web Development

Web developers and designers use CSS to control typography across different devices and screen sizes.
The goal is to always make sure that text is legible and visually appealing.
While this section covers the basics, typography is a big subject.
Entire books are dedicated to typography, and companies spend lots of resources on developing and using good fonts
because fonts play an important role in brand identity.
However, as you begin to use and understand typography principles,
you will be able to use these principles to augment content and enhance user experience.

## Typography in Practice

### Font Family

We normally declare the `font-family` in the `html` or `body` selector.
When we declare a `font-family`, we provide a list of families.
Browsers select the first available font from the list.
Therefore, we place the main, desired font at the beginning of the list but
then provide fallback fonts in case the main font is unavailable in the reader's browser.
**Note:** A font may be unavailable because our operating systems supply the fonts.
Thus, Windows, macOS, Linux, etc will have different fonts installed on their systems.

In the following example, `Arial` is the font we ideally want to use in our web document, but
if this isn't available, then the browser falls back to the generic `sans-serif` font family.
For consistency, place similar fallback fonts before the generic family fallback
(e.g., `Arial, Helvetica, sans-serif`).

```
body {
    font-family: "Arial", sans-serif;
}
```

#### Note on Examples Below

Sometimes we may want to change a font characteristic in a specific part of our documents.
In the examples below, I use classes to demonstrate how to implement font changes.
In the first example, I use the class selector and call it `.italic-text`.
This is implemented in HTML with the `class` attribute.
For example, if I want to italicize several words in a paragraph in my HTML,
I could use a `<span>` element with a `class` attribute named `italic-text`:

```
<p>This <span class="italic-text">text is italicized</span>.</p>
```

This would render as:

This *text is italicized.*

### Font Styles

We use the [`font-style`][font_style_w3m] to designate whether a font should be `normal`, `italic`, or `oblique`.

```
.italic-text {
    font-style: italic;
}

.oblique-text {
    font-style: oblique;
}
```

A quick note about *italic* and *oblique* styles.
Both font styles render a slant to the font, but the font makers design italic versions of their fonts.
Oblique fonts are just regular fonts with a slant.
Thus, you may want to choose an oblique font when a font style doesn't have an italic version, or
when you want to control the degree of the font's slant.
For example, we can control the slope of an oblique version of a font by setting a value for degrees (`deg`):

```
.oblique-text {
    font-style: oblique 10deg;
}
```

To illustrate, consider the following code:

```
<p style="font-style:oblique 20deg">An oblique style with a 20 degree slant.</p>
```

Which renders in the browser as:

<p style="font-style:oblique 20deg">An oblique style with a 20 degree slant.</p>

#### HTML and Italics

Note that in HTML, the [`<em>`][em_mdn] and [`<i>`][i_mdn] elements are semantic.
Browsers usually render both as italicized text, but they serve different purposes.
Use `<em>` for stress emphasis that changes sentence meaning, and use `<i>` for alternate voice or terms
(such as technical terms, foreign words, or taxonomic names) without stress emphasis.
Also, browsers usually render the `<cite>` HTML element as an italicized font, but
this should only be used when we are citing the title of a work, like a:

- book
- paper
- film
- song
- play
- painting
- website, etc.

As an example, the following places the title of Dostoevsky's classic work within the `<cite>` element:

```
<p>In <cite>The Brothers Karamazov</cite>, Dostoevsky explores faith and doubt.</p>
```

[In the following examples][distractify], the `<em>` element, applied selectively, shifts the interpretation of each sentence.

```
<p>I never said she stole my money.</p>
<p>I <em>never</em> said she stole my money.</p>
<p>I never <em>said</em> she stole my money.</p>
<p>I never said <em>she</em> stole my money.</p>
<p>I never said she <em>stole</em> my money.</p>
```

Use the `<i>` element when you want to offset text from the rest of the text but not to place any special emphasis on it.
For example, you may want to use the `<i>` element to highlight technical terms or foreign words:

```
<p><i>Homo sapiens</i> are one of the dominant life forms on the planet Earth.</p>
```

You can also use the `<abbr>` element in conjunction when specifying an abbreviation or an acronym:

```
<p>The <abbr title="central processing unit"><i>CPU</i></abbr> is often considered the brain of the computer.</p>
```

### Font Weight

We use the [`font-weight`][font_weight_w3] property to control the thickness of the font, or its boldness.
Since font thickness is defined numerically, we can specify a range of weights, from light to heavy.

```
.light-text {
    font-weight: 200; /* Thin */
}

.bold-text {
    font-weight: bold; /* Equivalent to 700 */
}

.extra-bold-text {
    font-weight: 900; /* Heavy weight */
}
```

#### HTML and Bold

In HTML, we can use the [`<b>`][b_mdn] or [`<strong>`][strong_mdn] elements to render text as bold.
For example, we might use the `<b>` element to identify a label, a keyword, or a product name.
And we might use the `<strong>` element to stress importance, such as in the following:

```
<p><strong>Warning</strong>: Beware of chipmunks.</p>
```

Again, unless there is some semantic reason to do so, use the CSS `font-weight` property instead.

### Font Size and Scaling

It's a good idea to set a base `font-size` in the `html` selector, and
then modify font sizes throughout the document with respect to that.

```
html {
    font-size: 100%;
}
```

However, we can also implement different font sizes throughout the document:

```
.normal-text {
    font-size: 100%; /* Uses the browser's default size */
}

.relative-text {
    font-size: 1.2rem; /* Relative to HTML size */
}

.responsive-text {
    font-size: 3vw; /* Viewport width-based */
}
```

### Letter and Word Spacing

We have two properties to control the spacing between letters or words.
Adjusting spacing can augment readability.
However, be careful when implementing these properties.
Most typefaces have been designed with default [kerning][kerning_wiki] parameters, and
the basic font families have been well tested for readability.

```
.kerning-example {
    letter-spacing: 2px; /* Adjusts letter spacing */
}

.word-spacing-example {
    word-spacing: 5px; /* Adjusts space between words */
}
```

### Line Properties and Text Layout

The `line-height` property adjusts the spacing between lines.
As with letter spacing, be conservative when applying this property since it may impact legibility.
In the following example, we use a class (`.line-height-example`), but for this kind of property,
we might want to apply it consistently to one specific element, such as the `<p>` element.

```
.line-height-example {
    line-height: 1.5; /* Adjusts line spacing */
}
```

Note that `line-height` doesn't require specifying a measurement, like `px`, `rem`, etc., but it can.
If it's only a number, then that number is multiplied by the current font-size.
See more at [CSS line-height Property][line_height_w3schools].

We can `center` or `justify` text with the `text-align` property:

```
.centered-text {
    text-align: center;
}

.justified-text {
    text-align: justify;
}
```

We can use the `text-indent` property to indent only the first line of an element.
This is especially useful for paragraph `<p>` elements.
A common use case is to add a class to the first paragraph after a heading (e.g., `<h2>`)
and indent its first line:

```
.text-indent-example {
    text-indent: 20px; /* Indents first line */
}
```

### Text Decoration and Transformation

The [`text-decoration`][text_decoration_mdn] property adds decorative lines to our text, and
the [`text-transform`][text_transform_mdn] property controls a text's capitalization.

Since `text-decoration` adds a line, the line may be [styled][text_decoration_style_mdn] as
`solid`, `double`, `dotted`, `dashed`, or `wavy`.
The default is to underline text, but we can also use `text-decoration`
to add an [overline or line-through][text_decoration_line_mdn].
We may also color the line.

```
.underline-text {
    text-decoration: underline;
}

.strike-through-text {
    text-decoration: line-through;
}

.multi_decoration {
    text-decoration: overline double green 5px;
}
```

The `text-transform` takes several values for capitalization, as demonstrated below.
A good use case is to apply this to various heading elements (e.g., `<h2>`), such as making all such elements uppercase:

```
.all-uppercase {
    text-transform: uppercase;
}

.all-lowercase {
    text-transform: lowercase;
}

.capitalize-text {
    text-transform: capitalize;
}
```

## Outsourcing Fonts

As stated before, fonts are generally provided by the operating system.
Since there are different operating systems (e.g., Windows, macOS, iOS, Linux, Android, etc),
not all fonts are available for all OSes.
Some common fonts ship across multiple platforms, but availability still varies.
This is why, when we declare font families, we include a generic family fallback,
such as `serif` or `sans-serif`, at the end of the list.

However, we can load fonts from external sources.
One major example is [Google Fonts][google_fonts].
For example, if we want to use the [Roboto Font][roboto_google_font],
its Google Font page provides the code to insert into our HTML pages and CSS stylesheets.

## Locally Hosted Fonts

Outsourced fonts present several issues.
First, we may not know or agree with the privacy policies when using outsourced fonts.
Also, outsourcing fonts means relying on third-party services.
While these services may be reliable, they could go down.
Lastly, depending on the source used for outsourced fonts,
using outsourced fonts may require extra bandwidth:

> The [Google Fonts Privacy Policy][google_fonts_privacy] makes an argument that using their services
> instead of self-hosting their fonts saves bandwidth.

Fortunately, we can also store and host fonts locally from within our project directory.
This offers greater control and performance and allows our desired fonts to be used regardless of a user's OS or browser.
To do this, we need to:

1. Download the font files:
    1. We obtain font files in formats like `.woff`, `woff2`, `ttf`, or `.otf` from a **trusted** source.
    2. We save those fonts to a designated `fonts/` directory in our project.
2. Define the font in our CSS:
    1. We use the `@font-face` rule to specify the font name and file path.

Finally, we might add the following to our CSS stylesheet to use a font named `CustomFont`:

```
@font-face {
    font-family: 'CustomFont';
    src: url('fonts/CustomFont.woff2') format('woff2'),
         url('fonts/CustomFont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
    font-family: 'CustomFont', sans-serif;
}
```

> Note: Although the above example illustrates how to use downloaded fonts,
> since the `src` property takes a `url` value,
> you can use the `@font-face` rule to source remote font files.
> See the documentation for the [`@font-face`][font_face_w3] rule for more details.

If using locally hosted fonts, be sure you use fonts from **trusted** sources and fonts that have
[open licenses][open_source_license_wiki].
Just like images, text, etc, fonts can be copyrighted.
I have not vetted all these sources, but some options you may explore for locating fonts to download and use on your sites include:

- [Font Squirrel][font_squirrel]
- [The League of Moveable Type][the_league]
- [Adobe Fonts][adobe_fonts]
- [Velvetyne Type Foundry][velvetyne]
- [Open Foundry][open_foundry]
- [Font Library][font_library]
- [1001 Fonts][1001_fonts]

## Practical Font Stack Examples

At the most basic level, we should have something like the following in our `style.css` file.
If we want to use a serif font, then this is fairly conventional:

```
html {
    font-family: "Times New Roman", Times, serif;
    font-size: 100%;
}
```

If we want to use a sans-serif font, then this is conventional for that:

```
html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 100%;
}
```

You can apply a monospace font to an entire website, but it's generally better to selectively apply monospace to code output.
However, this would be a conventional way to apply this family to an entire site:

```
html {
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 100%;
}
```

### General Rules

Try not to use more than two font families on a site.
In fact, it's perfectly fine to use just one (like all serif or all sans-serif).
But if you decide to mix them, one good rule is to use a `serif` font for body text and a `sans-serif` font for headings,
or vice versa.
In such a case, we could use the following rules for serif for the body text and sans-serif for the headings:

```
body {
    font-family: Georgia, serif;
}

h1, h2, h3 {
    font-family: Arial, sans-serif;
}
```

Or the reverse:

```
body {
    font-family: Arial, sans-serif;
}

h1, h2, h3 {
    font-family: Georgia, serif;
}
```

If you then add a third font family, then do so selectively, like for code.

## Conclusion

Typography plays a crucial role in shaping how content is presented, read, and understood.
Try to select the right font family for your site visitors.
Keep those visitors in mind, always!

And be sure to use fine-tuning properties, like spacing, weight, and alignment, to enhance aesthetics and readability.

Finally, focus on the principles:
readability, legibility, hierarchy, consistency, alignment and balance, contrast, and white space.

[1001_fonts]:https://www.1001fonts.com/
[adobe_fonts]:https://fonts.adobe.com/
[b_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
[em_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
[distractify]:https://www.distractify.com/fyi/2015/04/13/19NMFR/the-19-most-mind-blowing-sentences-in-the-english-language-1197891759
[font_face_w3]:https://www.w3.org/TR/css-fonts-4/#font-face-rule
[font_families_w3]:https://www.w3.org/Style/Examples/007/fonts.en.html
[font_library]:https://fontlibrary.org/
[font_squirrel]:https://www.fontsquirrel.com/
[font_style_w3m]:https://www.w3.org/TR/css-fonts-4/#font-style-prop
[font_weight_w3]:https://www.w3.org/TR/css-fonts-4/#font-weight-prop
[google_fonts]:https://fonts.google.com/
[google_fonts_privacy]:https://developers.google.com/fonts/faq/privacy
[i_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
[kerning_wiki]:https://en.wikipedia.org/wiki/Kerning
[line_height_w3schools]:https://www.w3schools.com/cssref/pr_dim_line-height.php
[open_foundry]:https://open-foundry.com/
[open_source_license_wiki]:https://en.wikipedia.org/wiki/Open-source_license
[roboto_google_font]:https://fonts.google.com/specimen/Roboto
[state_department_nytimes]:https://www.nytimes.com/interactive/2025/12/13/us/calibri-font-times-new-roman-state-department.html
[strong_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
[text_decoration_line_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line
[text_decoration_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
[text_decoration_style_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style
[text_transform_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
[the_league]:https://www.theleagueofmoveabletype.com/
[typeface_wiki]:https://en.wikipedia.org/wiki/Typeface
[typography_wiki]:https://en.wikipedia.org/wiki/Typography
[velvetyne]:https://velvetyne.fr/
