# The Semantic Web

*The Semantic Web* is an extension of the current web.
Whereas the current web was designed for people to *read*, the semantic web is designed to help machines process, intepret, and reuse data.
That is, the goal of the semantic web is to allow machines (AI, etc) to understand the words on a webpage
with respect to however machines understand anything.
The outcome of this goal is a web of data that can be more easily processed by machines, including AI, and allow for enhanced
data sharing, integration, and resuse across applications.

The vision of the semantic web originates with [Tim Berners-Lee][tbl], the inventor of the web.
He described the comparison between the web that we know and the semantic web as early as 2000:

> "If you think of the web today as turning all the documents in the world into one big book,
> then think of the Semantic Web as turning all the data into one big database ..." ([Berners-Lee et al., 2000][berners2000]).

There are two broad ways to study the semantic web.
The more advanced way is to learn how to use semantic web technologies such as:

- **Knowledge representation technologies**
    - [RDF Schema (RDFS)][rdfs]
    - [Web Ontology Language (OWL)][owl]
    - [Simple Knowledge Organization System (SKOS)][skos]
- **Knowledge retrieval technologies**
    - [SPARQL][sparql]

However, the above technologies are more focused on underlying data models and for querying those models rather than website development.
To focus on web development, in the sense that we want to create actual websites,
then the semantic web technologies we are interested in are a bit different.
Specifically, in this book, we will learn about:

- HTML5, which includes semantic elements.
- CSS3, which plays an important role in separating content from presentation.
- JSON-LD (JavaScript Object Notation for Linked Data), which is actually JavaScript agnostic and is used create linked data for machines to parse and generate.
- Schema.org, which provides a collection of shared vocabularies (or terms and definitions) to annotate web content.

## The Use of The Semantic Web

There are several important reasons to make data semantic on the web.

1. First, semantic data **enhanches searchability**. Recipes are a common example. When you search for a recipe,
   semantic data on recipe web pages allows search engines to parse the ingredients, cooking times, and other factors on those pages.
2. Second, the semantic web enables **data integration**. This is through the use of multiple vocabularies, such as Schema.org,
   but there are other vocabularies that can be used at the same time. This is a common use case in more advanced cases of the semantic web.
   For example, scientific databases can be enhanced with semantic data that integrates data from multiple scientific domains.
3. Third, the semantic web helps machines process data better and thus begin to automate complex tasks. Personal assistants like Siri and
   Google Assistant rely on semantic data.
4. Fourth, semantic data fosters interoperability between systems and applications. For example, a weather application can integrate data from multiple
   weather stations in order to provide a comprehensive forecast.
   
## Our Goals

In this book, we will gain hands-on experience with HTML5, CSS3, and JSON-LD.
These technologies will help you apply semantic data to websites and make your websites not only more searchable but also more accessible.
Our tasks will include:

1. We will learn how to **structure** web pages using **HTML5** semantic elements. This will make our web content more meaningful and accessible
   to users and machines.
2. We will learn how to **style** and **present** our web pages using **CSS3**. Cascading Style Sheets (CSS) help us create visually appealing
   webpages and sites but, importantly, keep content separated from presentation.
3. We will embed structured, linked data into our webpages using **JSON-LD** and **Schema.org**. This will further enhance our content for machine-readability.
4. Finally, throughout this book, we will work on creating a final website using all of these technologies.

## Conclusion

While you may not have heard of The Semantic Web, it is an important part of the evolution of the web and internet.
When we make our data (content) machine-readable, we add context and meaning to that data for machines to use.
This opens up possibilities for data integration, searchability, and automation.


[tbl]:https://en.wikipedia.org/wiki/Tim_Berners-Lee
[berners2000]:https://www.w3.org/2000/Talks/0906-xmlweb-tbl/text.htm
[rdfs]:https://en.wikipedia.org/wiki/RDF_Schema
[owl]:https://en.wikipedia.org/wiki/Web_Ontology_Language
[skos]:https://en.wikipedia.org/wiki/Simple_Knowledge_Organization_System
[sparql]:https://en.wikipedia.org/wiki/SPARQL
