# Links and Attributes

## Introduction

The ability for a web page to link to other resources is the defining characteristic of the web.
According to the HTML specification, there are [three types of HTML links][links_whatwg].
These include:

- links to external resources
- hyperlinks
- internal resource links

Of these three, **hyperlinks** are the most visible type of link.
We use hyperlinks to navigate around the web, from one document, resource, or application to another.

**Internal resource links** are probably the second most visible type of link.
We use these links to jump to different sections of a web page.
A prime example is if a web page has a table of contents that we can use to skip to different sections of a page.

Lastly, **links to external resources** are the least visible type of link.
These links are often used in the `<head>` section of a web document and
they are used to <q>fetch and process</q> other resources, such as style sheets, favicons, or JavaScript.

We create links using four different HTML tags:

- the `<a>`, `<area>`, and `<form>` tags can be used as hyperlinks and as links to internal resources
- the `<link>` tag is used to link to external resources

In this section, we'll cover the `<a>` and the `<link>` tags and save the `<area>` and `<form>` tags for upcoming sections.

## The `<a>` Element

The `<a>` tag, or anchor element, is the primary type of link in HTML.
We use this tag to navigate the web or around a webpage, to download a resource, or to initiate an email or a phone call.
Specifically, there are several use cases for the `<a>` tag, and these include:

### Use Cases for `<a>`

1. External navigation
    - To link to another web page, we use the `<a>` tag along with the `href` HTML attribute. 
    - Example: `<a href="https://www.example.com/">Visit Example</a>`
2. Internal page links
    - To jump to specific parts of the same page, which is useful for long pages with multiple sections (e.g., `<section>` element).
    - Example: `<a href="#section2">Go to Section 2</a>`
3. Email links
    - To open the user's default email client to send an email. This is useful for contact pages or in the `<footer>` section of a page.
    - Example: `<a href="mailto:someone@example.com">Email us</a>`
5. Telephone links
    - To provide mobile users a way to tap and call a phone number directly. This is useful for contact pages or in the `<footer>` section of a page.
    - Example: `<a href="tel:+12162452368">Call us</a>`
6. File downloads
    - To provide a link to download a file directly.
    - Example: `<a href="file.pdf" download>Download PDF</a>`

### Common Attributes for `<a>`

Many HTML tags can be extended with the use of attributes or require attributes to function fully.
In the above examples, the `href` is called an HTML attribute, and it's needed for the `<a>` tag to function as a link.
The `<a>` tag can use the following attributes:

- `href`: This provides the destination URL or resource: i.e., the site or page you link to.
- `target`: This specifies where to open the linked document.
    - `_blank` opens the link in a new tab:
        - Example: `<a href="https://www.example.com" target="_blank">Visit Example</a>`
    - `_self` opens the link in the same window/tab. This is the default behavior, and you don't need to specify this unless you want to force the link to open in the same window/tab:
        - Example: `<a href="https://www.example.com" target="_self">Visit Example</a>`
- `rel`: This defines the relationship between the current document and the linked document.
    - `noopener noreferrer` is used with `target="_blank"` to disconnect the relationship between the linking document and the linked document when opening a link in a new tab.
        - Example: `<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>`
    - `nofollow` instructs search engines not to follow the link. Search engines build a knowledge graph based on links, and the more links a page has, the more popular or relevant that page becomes. The `nofollow` is used to suppress that behavior in search engines (e.g., if you don't want to promote a page you're linking to).
        - Example: `<a href="https://www.example.com" target="_blank" rel="nofollow">Visit Example</a>`
- `title`: This provides additional information about the link and results in displaying a tooltip on hover.
    - Example: `<a href="https://www.example.com" title="Example.com">Visit Example</a>` 
- `download`: This prompts the browser to download the linked file instead of navigating to it.
    - Example: `<a href="https://www.example.com/file.pdf" download>` 

## The `<link>` Element

The `<link>` tag is a self closing tag that's most often placed in the `<head>` section of a web page or HTML document.
We use this tag to define relationships between our documents and external resources.
Unlike the `<a>` tag, the `<link>` tag is not user-interactive.
Instead, it provides the browser with additional context and resources it should load automatically when opening a web page.
These resources may include CSS stylesheets, icons, fonts, and more.

### Use Cases for `<link>`

1. Linking stylesheets
    - To tell the browser to fetch and apply CSS rules to your HTML document. In the following example, the rules are in a `styles.css` file in a local `css` directory.
    - Example: `<link rel="stylesheet" href="css/styles.css">`
3. Favicons
    - To instruct the browser to use an icon that represents your website in browser tabs, bookmarks, and other UI elements. Inkscape is a great application for creating favicons. The following example uses the `favicon.ico` file in a local `images` directory as the icon file.
    - Example: `<link rel="icon" href="images/favicon.ico">`
4. Preloading and prefetching resources
    - To instruct the browser to fetch resources, such as scripts, fonts, and images, early. This helps to optimize performance because it helps to load these resources before the page begins to render. The following example preloads and prefetches a JavaScript file `javascript.js` in a local `js` directory.
    - Example: `<link rel="preload" href="js/javascript.js" as="script">`
5. RSS feeds
    - To instruct browsers and feed readers that there is an RSS feed for the site or page.
    - Example: `<link rel="alternate" type="application/rss+xml" title="RSS" href="feed.xml">`

### Common Attributes for `<link>`

Like the `<a>` tag, the `<link>` tab has some common attributes, some of which are shared between the two.
Here are some common attributes for the `<link>` tag:

- `rel`: This specifies the relationship between the current document and the linked resource. This helps to inform the browser how to treat the linked resource.
    - Common values include: `stylesheet`, `icon`, `preload`, `prefetch`, `preconnect`
- `href`: This defines the URL of the resource being linked. Without it, you don't actually link to anything. 
- `type`: This indicates the [MIME][mime_iana] type of the linked resource. 
- `sizes`: This indicates the size of linked images, which is useful for favicons. This is useful for multi-resolution display. A `32x32` pixel favicon, for example, may be a good size for a laptop browser but you may need a bigger size for a tablet or smaller for a phone.
    - Example: `<link rel="icon" href="images/favicon.ico" sizes="32x32">`
- `crossorigin`: This is used to fetch resources from a different domain

As noted above, the `<link>` tag can be used to load a favicon for your website.
These are the small icons that appear in your browser tab, bookmarks, and other UI elements.
You can use Inkscape to create favicons for your website.
When creating these icons, it's helpful to create multiple versions for different resolutions and use the `sizes` attribute to refer to them.
In the example below, I also add the MIME type to help the browser recognize the purpose of these files.
These icons would be stored in a directory called `images` in my project directory.
Here is the example code:

```
<link rel="icon" type="image/png" sizes="16x16" href="images/favicon_16.png">
<link rel="icon" type="image/png" sizes="32x32" href="images/favicon_32.png">
<link rel="icon" type="image/png" sizes="72x72" href="images/favicon_72.png">
<link rel="icon" type="image/png" sizes="114x114" href="images/favicon_114.png">
```

Another common example is to use the `<link>` tag to load external fonts.
We'll cover this in more detail when we learn about styling our sites with CSS.
However, you should know that browsers use the fonts intalled on your operating system as the default.
Thus, basic fonts will display a bit differently depending on your operating system: Windows, macOS, iOS, Android, Linux, etc.
To mitigate this variance, many web developers use external fonts or download fonts to their web source code directory for their websites.
There are several font services available for free, such as [Google Fonts][google_fonts].
Google Fonts provides a large range of fonts you can use for your websites and provides instructions on using them.
For example, to use the [Roboto][roboto_google_fonts] font on your website, you can use this code in the `<head>` section of your page:

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

And then add the following to your stylesheet or within the the `<style>` tag of your HTML document:

```
html {
    font-family: "Roboto", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-variation-settings: "wdth" 100;
}
```

## Other Attributes

Two additional type of attributes I need to cover are the `id` and `class` attributes.
These are commonly used in JavaScript and CSS.
We'll cover them more when we learn about CSS, but the `id` attribute is also used to create **internal resource links**.

### The `class` Attribute

The `class` attribute can be assigned to most HTML tags and is used to group multiple HTML elements together under a common name.
This makes it easier to apply a shared style (CSS) or behavior (JavaScript) to the group of elements.
For example, we can apply a class name to multiple HTML elements to style them similarily:

```
<main class="dark_background">
    <article class="light_background">
        <section class="dark_background">
        <aside class="light_background"></aside>
        </section>
    </article>
</main>
```

In CSS, we would refer to the class name to style classes named `dark_background` similarily and `light_background` similarily:

```
.dark_background {
    background-color: black;
    color: white;
}

.light_background {
    background-color: white;
    color: black;
}
```

### The `id` Attribute

Whereas the `class` attribute is used to group different elements together,
the `id` attribute is used to uniquely identify a single element on a page.
This plays in handy for CSS and JavaScript, too, but because it's like applying a fingerprint to a single element,
it can also be used to **internal resource links**.

Here's an example where we have multiple `<h3>` elements on a page, but we want to distinguish them from each other:

```
<h3 id="linux">Linux</h3>
<h3 id="unix">Unix</h3>
<h3 id="cpm">CP/M</h3>
```

In CSS, we referred to a `class` name with a dot selector: `.dark_background`.
But for the `id` name, we refer to it with a pound selector: `#linux`, `#unix`, `#cpm`.
For example, to style the above `h3` elements separately:

```
#linux {
    color: red;
}

#unix {
    color: blue;
}

#cpm{
    color: green;
}
```

One nice side effect of being able to uniquely fingerprint an element on a page with the `id` attribute
is that you can use that attribute to link to it.
This is **internal resource linking**.
Thus, imagine a long web page with the above `<h3>` sections, we could create a table of contents that links to each section
using the `id` attribute:

```
<a href=#linux">Jump to Linux section</a>
<a href=#unix">Jump to Unix section</a>
<a href=#cpm">Jump to CP/M section</a>
```

## Global Attributes

Other attributes are available to HTML elements and are listed at [Global Attributes][global_attributes_whatwg].
We will cover some of these global attributes as we progress through this work.

## Conclusion

In summary, HTML links come in three flavors: links to external resources, hyperlinks, and internal resource links.
We covered how to create these three types of links using the HTML `<a>` and `<link>` tags.
Using the `<link>` tag, browsers process external resource links automatically.
For example, this tag is used to bring in stylesheets, icons, or other external resources.
We use the `<a>` tag to create hyperlinks, which serve as the defining characteristic of the web.
Hyperlinks are used to navigate from site to site, page to page, or within a page, such as with internal resource links.

[google_fonts]:https://fonts.google.com/
[global_attributes_whatwg]:https://html.spec.whatwg.org/multipage/dom.html#global-attributes
[links_whatwg]:https://html.spec.whatwg.org/multipage/links.html#links
[mime_iana]:https://www.iana.org/assignments/media-types/media-types.xhtml
[roboto_google_fonts]:https://fonts.google.com/specimen/Roboto
