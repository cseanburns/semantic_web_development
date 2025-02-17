# CSS: Getting Started 

As stated by the [World Wide Web Consortium (W3C)][w3org], CSS, or *Cascading stylesheets*, is:

> a language for writing stylesheets, and
> is designed to describe the rendering of structured documents (such as HTML and XML) on a variety of media.
> ([What is CSS?][what_is_css_w3]).
  
In short, when we write CSS, we create a stylesheet containing rules for document presentation.
The presentation does not interfere with or alter the underlying semantics of the page.

CSS is very powerful.
As an example, the [CSS Zen Garden][css_zen] demonstrates how a single HTML file
can be rendered differently simply by applying different CSS rules to it.

## Way to Apply CSS

There are three ways to apply CSS to a web page.
We can add **external CSS** stylesheets using the HTML `<link>` element in a web document's `<head>` section.
In the example below, the stylesheet is named `style.css` and resides in a project's `css` folder (or directory).
The name of the directory and file are arbitrary, but it's good to use descriptive names.
However, the file must end with the `.css` file extension.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>External CSS</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    
<body>

</body>
</html>
```

As long as we add the above line to all the pages on our web site,
we are able to apply the same set of CSS rules to all web pages on a web site.

Using external stylesheets has several advantages:

- **Efficiency:** Applies the same styles across multiple pages without duplicating code.
- **Reduced bandwidth:** Pages load faster since styles are cached by browsers.
- **Consistency:** Ensures uniform design across all pages on a site.
- **Easier maintenance:** Modify one CSS file to update styles for the entire site.
- **Minimizes errors and debugging:** A single CSS file minimizes potential errors and simplifies debugging.

However, we can also add CSS to a single page using two different methods: **internal CSS** and **inline CSS**.
We add internal CSS by using the HTML `<style>` tag in the `<head>` section of our web document.
When adding it to a single page, whatever CSS rules we add in the `<style>` element only apply to that single page.
In the basic example below, I change the color of **all** `<p>` elements in a single web page to green using inline CSS.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Internal CSS</title>
        
        <style>
        p { color: green; }
        </style>
    </head>
<body>

<h1>Heading 1</h1>

    <p>This text would be green.</p>
    <p>So would this text.</p>
    <p>And also this text.</p>
    
</body>
</html>
```

We add inline CSS using the `style` HTML **attribute**.
Unlike above, in the example below, I change the color of one specific `<p>` tag on a page at a time.
In this case, the first line is the default color, and then I change the following paragraphs to green, red, and purple.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inline CSS Example</title>
    </head>
<body>

<h1>Heading 1</h1>

    <p>This text is black.</p>
    <p style="color:green;">But this text is green.</p>
    <p style="color:red;">However, this text is red.</p>
    <p style="color:purple;">Now we're out of control: this text is purple.</p>
    
</body>
</html>
```

In short, using external, internal, and inline CSS is a matter of applying CSS with greater page and element specificity.
External stylesheets can be used by all pages on a website.
Internal CSS is used by a single page.
Inline CSS is used by a single element in a single page.

Be aware that inline styles override internal and external styles and internal styles override external styles.
That is, if I declare in an external stylesheet that all `<p>` elements should be red,
but then use `<p style=color:green;">` on some page in my site,
green will override the red for that particular case.

## Conclusion

In this chapter on CSS, we will primarily use external stylesheets because they offer more advantages than internal or inline styles.
External stylesheets don't take away any precision, either.
When desired, there are certain methods we can use to apply CSS to single pages or to specific elements,
even when CSS code is in an external stylesheet.

In the next two sections, we first learn about CSS **selectors**, which is the most important and basic aspect of CSS to know.
Then will learn how to apply colors and define units of measurement.
Later we will learn CSS that will allow us change fonts and add other effects.
Then we will acquire an understanding of how CSS controls the elements on a page and
use that understanding to create various layouts.

[w3org]:https://www.w3.org/
[what_is_css_w3]:https://www.w3.org/TR/CSS/#css
[css_zen]:https://www.csszengarden.com/
