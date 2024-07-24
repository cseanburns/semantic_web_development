# User Experience and Accessibility

## Accessibility

**Note:** Readings for this course are linked to in these transcripts. It is important to visit and review the information that are provided at these links.

Hi Class, this week we're studying general web accessibility and how web semantics helps make sites more accessible. I use the term accessibility as a kind of shorthand: I also include, broadly, things like usability and inclusion.

One of our readings makes important distinctions among these terms. That is, accessibility has a distinct definition, as well as the terms usability and inclusion. Our reading from [w3.org][w3org] defines accessibility as that which:

> addresses discriminatory aspects related to equivalent user experience for people with disabilities, including people with age-related impairments. For the web, accessibility means that people with disabilities can perceive, understand, navigate, and interact with websites and tools, and that they can contribute equally without barriers.

And then usability is related to user experience design or UX design. Usability is:

> about designing products to be effective, efficient, and satisfying. Specifically, [ISO (International Organization for Standardization)][iso] defines usability as the "extent to which a product can be used by specified users to achieve specified goals effectively, efficiently and with satisfaction in a specified context of use"

Finally, inclusion is referred to as:

> Inclusive design, universal design, and design for all involves designing products, such as websites, to be usable by everyone to the greatest extent possible, without the need for adaptation. Inclusion addresses a broad range of issues including access to and quality of hardware, software, and Internet connectivity; computer literacy and skills; economic situation; education; geographic location; and language — as well as age and disability.

Things related to inclusion are pretty broadly defined. This can be related to the responsiveness of a website to various displays, such as mobile phones, and then to the whole ranges of mobile phones that exist, as well as to desktops, laptops, and tablets, and even to smart watches.

In class, we're going to discuss these issues. You're going to identify some websites and rank and judge these sites according to the principles of accessibility, usability, and inclusion by enabling accessibility mode on your laptop/desktop browser and on your phones.

It will help to watch a [short video about accessibility on YouTube][yt_accessibility], which does a really nice job demonstrating all the above issues.

## Semantics and Accessibility

Semantics refers to meaning, or what something means. Humans are pretty good (most of the time) at interpreting meaning, but not computers. For example, you and I know what a person is, but a computer does not, yet despite that, if you search for a person on the web, you will likely get accurate results back. The reason this is successful is because information retrieval algorithms use other methods to figure out to identify what is relevant based on what we search.

Thus when we talk about semantics and accessibility, we talk about how to make it so that the structure and the content on our websites can be understood by computers. The result of this is better information search and information retrieval, via search engines and artificial intelligence assistants.

It makes sense then that the meaning of a thing relates to its accessibility. Therefore, one way that we will address accessible web development is through HTML5, which was specifically released to add semantic HTML elements. This helps computer systems (like search engines and screen readers) interpret the meaning of a document's structure better than prior versions of HTML could and provide better accessibility options to people, then, too. Later we'll learn and apply JSON-LD technologies to provide meaning to the content on a page, so that a search technology can have a better understanding of what a webpage is about.

## Do More with Less

There is another aspect of HTML and accessibility that we need to consider. You can think of HTML as the least common denominator among the languages that we use to develop websites. That is, at its very basic, a web page can be nothing more than an HTML page since HTML offers elements that are used to structure and provide content to a website. All other scripting additions to a web page primarily work with HTML.

This means also that sometimes you can do things in JavaScript, PHP, Python, Ruby, etc that you can do just with HTML. One of the goals in meeting accessibility, usability, and inclusion issues is to take advantage of the least common denominator aspect of HTML as much as possible. By this I mean that if you have a choice between a JavaScript (or PHP, Ruby, etc.) solution that will perform some task, and you can do the same thing in HTML, then do it in HTML. As soon as we start to make things more complicated and more sophisticated, then the more likely it becomes that we will break something, and that makes it likely to make a site less accessible, usable, and inclusive.

## The Semantic Structure

I mentioned this above, but we'll talk about semantics in two ways. We we start creating our sites, we will use HTML5 to add semantics to a web page, and later we will use JSON-LD to add additional semantics that describe the content on a webpage. Some [example semantic HTML5 elements][html5_example] include:

- `<article>`
- `<aside>`
- `<figure>`
- `<footer>`
- `<header>`
- `<nav>`
- `<section>`
- `<summary>`
- `<time>`

Below are links to two lists of HTML5 elements. You should begin to review them and save or bookmark these pages for constant reference:

- [HTML Elements via Mozilla][html_mozilla]
- [HTML Elements via W3][html_w3m]

Attempts to provide semantic data were provided for in previous versions of HTML, like XHTML and HTML4, and through hacks that were not all that ideal, such as excessive use of the <div> element, or through scripting languages like JavaScript. However, HTML5's great benefit is that it provides semantic elements directly. For example, the `<article>` element was created to [describe an article, like a blog entry, on a web page][html5_article], and the `<section>` element was created [to delineate a generic section on a web page][html5_section]. By doing that, we provide semantic information not just to the user of the site, or to other developers, but also to machines that parse that website for data and information, such as web crawlers from search engines or to screen readers for people who are visually impaired in some way. These semantic elements also provide text-to-speech advantages. These are a few reasons why HTML5 semantic elements are important. You won't have to memorize all of the elements, but there will be ones that you'll use more often, like the ones that I listed above.

All right, please watch the video linked to in this transcript and complete the task assigned in the discussion prompt. See you on the board.

[w3org]:https://www.w3.org/WAI/intro/usable
[iso]:https://www.iso.org/home.html
[yt_accessibility]:https://www.youtube.com/watch?v=3f31oufqFSM
[html_mozilla]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element
[html_w3m]:https://www.w3.org/TR/2012/WD-html-markup-20121025/elements-by-function.html
[html5_example]:https://developer.mozilla.org/en-US/docs/Glossary/semantics#Semantics_in_HTML
[html5_article]:https://www.w3.org/TR/2012/WD-html-markup-20121025/article.html#article
[html5_section]:https://www.w3.org/TR/2012/WD-html-markup-20121025/section.html#section
