# Conclusion

The purpose of this textbook is to serve as an introduction to semantic web development.
It does this by focusing on the fundamentals: HTML5, CSS3, and JSON-LD.
Complete, usable, accessible, and semantically rich sites can be created with just these three technologies.
No JavaScript required.

Some call this [The rule of least power][rule_html_hell].
The idea is to use the least powerful, most descriptive programming language before using more procedural programming languages.
This is incredibly effective for web development for several reasons.
First, the web is built on HTML as the base technology and is backwards compatible with prior HTML versions.
This means that if the more complicated technologies (like JavaScript, etc) fail, HTML should still load.
CSS probably will, too.
Second, HTML, and even CSS, are fast because their basics are simple.
They are focused on the document.

Finally, HTML is [highly tolerant][html_computerphile].
This means we can make a lot of mistakes in HTML, and web browsers will adjust.
They won't even **crash**!
If we make a mistake in our JavaScript code, that script can fail.
That might mean a feature doesn't work, or, in worst cases, a runaway script can freeze the browser.

I should stress the importance of the document.
Focusing on HTML keeps us focused on a document's structure and content, both of which inform each other and make web pages accessible.
They also serve as the basis for CSS and JavaScript.
These other, more complicated technologies require access to the [DOM, or the Document Object Model][dom_wiki], and
as a markup language, HTML's focus on the document underpins the DOM structure used by both CSS and JavaScript.
Thus, creating sound HTML makes it easier to create sound CSS and sound JavaScript.

Using HTML to focus on structure and content also helps with good thinking.
That is, since HTML provides many semantic, section elements, it can help us think clearly about the meaning and structure of our documents.
The structure of a thing is like a model of a thing.
Structuring, modeling, framing: these are not just ways of organizing something like a document.
They are also ways of thinking about content, logic, reasoning, and evidence.

While this book does not cover other web technologies like PHP, JavaScript, JavaScript frameworks like React,
or relational databases like MySQL, the skills you've developed here form the foundation for all future web development.
Plus, those other technologies are less for creating good web pages and more for building web applications.
Use them wisely.

As you practice and acquire proficiency with the basics covered here, I invite you to keep experimenting.
There are a lot of basics we haven't covered.
For instance, since CSS is *rule-based*, there is a lot more to learn about writing conditional rules
that apply sets of styles depending on the [context][css_container_mdn], the [device][css_device_mdn], and the [browser][css_browser_mdn].
There are other so-called [at-rules][css_at_rules_mdn] to learn, too.
Furthermore, there is more to learn about CSS layouts, like [CSS Grid][css_grid_mdn],
which allows for more complicated layout designs than CSS Flexbox.

Thanks, have fun, learn a lot, and study deeply.

[css_grid_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
[css_at_rules_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_syntax/At-rule
[css_container_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/@container
[css_device_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/@media
[css_browser_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/@supports

[dom_wiki]:https://en.wikipedia.org/wiki/Document_Object_Model
[rule_html_hell]:https://www.htmhell.dev/adventcalendar/2023/2/
[html_computerphile]:https://www.youtube.com/watch?v=-csXdj4WVwA
