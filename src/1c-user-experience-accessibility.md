# User Experience and Accessibility

Have you ever struggled to access a website on your phone or found a poorly designed form impossible to complete?
These barriers are not just frustrating, but they are also examples of poor accessibility.
Now, imagine how much more difficult and frustrating this can be when
using older hardware, having a poor internet connection, or having limited eyesight.
Accessible web design is considering how to create effective web pages and sites that are accessible as many people as possible,
despite the devices they have or their physical conditions.

## Accessibility

In this section, we study general web accessibility and how web semantics helps make sites more accessible.
I use the term accessibility as a kind of shorthand:
I also include, broadly, things like usability and inclusion.

One of our readings makes important distinctions among these terms.
That is, accessibility has a distinct definition, as well as the terms usability and inclusion.
Our reading from [w3.org][w3org] defines accessibility as that which:

> addresses discriminatory aspects related to equivalent user experience for people with disabilities, including people with age-related impairments. For the web, accessibility means that people with disabilities can perceive, understand, navigate, and interact with websites and tools, and that they can contribute equally without barriers.

And then usability is related to user experience design or UX design. Usability is:

> about designing products to be effective, efficient, and satisfying. Specifically, [ISO (International Organization for Standardization)][iso] defines usability as the "extent to which a product can be used by specified users to achieve specified goals effectively, efficiently and with satisfaction in a specified context of use"

Finally, inclusion is referred to as:

> Inclusive design, universal design, and design for all involves designing products, such as websites, to be usable by everyone to the greatest extent possible, without the need for adaptation. Inclusion addresses a broad range of issues including access to and quality of hardware, software, and Internet connectivity; computer literacy and skills; economic situation; education; geographic location; and language — as well as age and disability.

Things related to inclusion are pretty broadly defined.
This can be related to the responsiveness of a website to various displays, such as mobile phones,
and then to the whole ranges of mobile phones that exist, as well as to desktops, laptops, and tablets, and even to smart watches.

We're going to discuss these issues.
You're going to identify some websites and rank and judge these sites according
to the principles of accessibility, usability, and inclusion by enabling accessibility mode
on your laptop/desktop browser and on your phones.

It will help to watch a [short video about accessibility on YouTube][yt_accessibility],
which does a really nice job demonstrating all the above issues.

## Semantics and Accessibility

Semantics refers to meaning, or what something means.
Humans are pretty good (most of the time) at interpreting meaning but not computers.
For example, you and I know what a person is, but a computer does not.
Yet despite that, if you search for a person on the web, you will likely get accurate results back.
The reason this is successful is because information retrieval algorithms
use other methods to figure out to identify what is relevant based on what we search.

Thus when we talk about semantics and accessibility,
we talk about how to make it so that the structure and the content on our websites can be understood by computers.
The result of this is better information search and information retrieval, via search engines and artificial intelligence assistants.

It makes sense then that the meaning of a thing relates to its accessibility.
Therefore, one way that we will address accessible web development is through HTML5,
which was specifically released to add semantic HTML elements.
This helps computer systems (like search engines and screen readers) interpret the meaning of a document's structure
better than prior versions of HTML could and provide better accessibility options to people, then, too.
Later we'll learn and apply JSON-LD technologies to provide meaning to the content on a page,
so that a search technology can have a better understanding of what a webpage is about.

## Do More with Less

There is another aspect of HTML and accessibility that we need to consider.
You can think of HTML as the least common denominator among the languages that we use to develop websites.
That is, a web page can be nothing more than an HTML page since it offers elements that are used to structure and
provide content to a website.
All other languages and technologies are additions to a web page that work and build on the HTML.

One of the goals in meeting accessibility, usability, and inclusion issues
is thus to take advantage of the least common denominator aspect of HTML as much as possible.
By this I mean that if you have a choice between a JavaScript (or PHP, Ruby, etc.) solution that will perform some task,
and you can do the same thing in HTML, then do it in HTML.
As soon as we start to make things more complicated and more sophisticated,
then the more likely it becomes that we will break something, and that makes it likely to make a site less accessible, usable, and inclusive.

> While using HTML whenever possible is a best practice, there are cases where JavaScript or other languages may be required to achieve specific functionality. For example, it is necessary to use JavaScript (or another language) to create a web app. The key is to ensure that any additional complexity does not create unnecessary barriers to accessibility. Read: [Google's JavaScript Warning &amp; How it Relates to AI Search][google_seo].

## The Semantic Structure

I mentioned this above, but we'll talk about semantics in two ways.
We we start creating our sites, we will use HTML5 to add semantics to a web page,
and later we will use JSON-LD to add additional semantics that describe the content on a webpage.
Some [example semantic HTML5 elements][html5_example] include:

- `<article>`: "examples include: a forum post, a magazine or newspaper article, or a blog entry"
- `<aside>`: examples include: "sidebars or call-out boxes"
- `<figure>`: examples include: photos, plots, graphs, etc.
- `<footer>`: examples include the footer section of a website or section
- `<header>`: examples include the header section of a website (with title) or section
- `<nav>`: provides navigation links to parts of a webpage or parts of a website
- `<section>`: "represents a generic standalone section" of a webpage
- `<summary>`: "specifies a summary, caption, or legend for a `<details>` element's disclosure box"
- `<time>`: "represents a period of time

Below are links to two lists of HTML5 elements.
You should begin to review them and save or bookmark these pages for constant reference:

- [HTML Elements via Mozilla][html_mozilla]
- [HTML Elements via W3][html_w3m]

Attempts to provide semantic data were provided for in previous versions of HTML, like XHTML and HTML4,
and through hacks that were not all that ideal, such as excessive use of the `<div>` element, or through scripting languages like JavaScript.
That is, in the early days of the web, developers often used (and still do, unfortunately) non-semantic elements
like `<div>` and `<span>` to structure content.
In the very early days, they structured content using tables (e.g., `<table>`) elements.
These were sad days because it made it difficult for assistive technologies to interpret content accurately.

However, these deficits led to the development of semantic HTML in HTML5.
That is, HTML5's great benefit is that it provides semantic elements directly.
For example, the `<article>` element was created to [describe an article, like a blog entry, on a web page][html5_article],
and the `<section>` element was created [to delineate a generic section on a web page][html5_section].
The `<nav>` element is another example of a semantic element.
This element defines a site's navigation menu and helps both users and search engines quickly understand the structure of a site.
Screen readers can then provide users with an overview of the site's main sections and thus improve navigation for visually impaired users.

By using such elements, we provide semantic information not just to the user of the site, or to other developers,
but also to machines that parse that website for data and information.
This includes web crawlers from search engines and screen readers for people who are visually impaired in some way.
These semantic elements also provide text-to-speech advantages.
These are a few reasons why HTML5 semantic elements are important.
You won't have to memorize all of the elements, but there will be ones that you'll use more often,
like the ones that I listed above.

## Conclusion

In summary, web accessibility is more than a technical requirement.
It is a foundational principle of inclusive design that ensures all users, regardless of ability,
can access and interact with digital content.
By understanding the distinctions between accessibility, usability, and inclusion, web developers can create more effective user experiences.
The semantic features of HTML5 and the use of additional technologies like JSON-LD enhance accessibility by improving how content is
structured and interpreted by both users and machines.
Emphasizing simplicity in web development, and prioritizing solutions that use HTML wherever possible,
reduces barriers and promotes greater inclusivity.
As we move forward, we should recognize the importance of semantics in web design.
This will improve search and retrieval processes but also create a more equitable digital space for all users.

[google_seo]:https://www.searchenginejournal.com/googles-javascript-warning-how-it-relates-to-ai-search/536596/
[html5_article]:https://www.w3.org/TR/2012/WD-html-markup-20121025/article.html#article
[html5_example]:https://developer.mozilla.org/en-US/docs/Glossary/semantics#Semantics_in_HTML
[html5_section]:https://www.w3.org/TR/2012/WD-html-markup-20121025/section.html#section
[html_mozilla]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element
[html_w3m]:https://www.w3.org/TR/2012/WD-html-markup-20121025/elements-by-function.html
[iso]:https://www.iso.org/home.html
[w3org]:https://www.w3.org/WAI/intro/usable
[yt_accessibility]:https://www.youtube.com/watch?v=3f31oufqFSM
