# JSON Basics

## Introduction

It may be to obvious to say, but computer applications use and exchange data in order to operate.
For example, an [OPAC (library catalog)][opac_wiki] contains bibliographic records (data)
so that users may search the data from a browser to locate information sources.
An [Apache web server][apache_wiki] stores configuration information in order to turn on, off, or fine tune the services it provides.

What may not be obvious is that data is stored in a variety of formats.
Library science students may be familiar with [XML (Extensible Markup Language)][xml_wiki] because it's used to format MARC
(see [MARCXML][marcxml_loc]) or [DublinCore (DC)][dc_dcorg] metadata.
XML performs this service by storing data, metadata, etc in a standardized format.
[CSV (comma separated values)][csv_wiki] files function as a *de facto* standard for storing tabular data.
Data stored in CSV files are often used for data or statistical analysis, like in the R or Python programming languages.
[YAML][yaml_wiki] files are used to store configuration files for various applications.

Oftentimes we might hear that data or metadata is **encoded** in a certain way, such as in MARC, DC, etc, and
then **encoded** again in XML, CSV, YAML, or like.
This isn't accurate, though.
Encoding has other, more precise uses; for example, it's used to refer to **character encoding**,
such as [UTF-8][utf8_wiki] or [ASCII][ascii_wiki].
These are character encoding standards that dictate how individual characters are stored in bytes.

It's more precise to say that standards like MARC and DC function as **data models**.
Data models are also knowing as **conceptual models** or as **schemas**.
A data model dictates the kind of information that should be saved.
For example, the DC schema for metadata includes data points like **title**, **subject**, **description**, and more.

When we write down the data in a file, we can express the data points using various kinds of syntax.
XML is an example of a syntax (such as `<xml>`) or format (such as file format like `index.xml`).
Expressing a data that conforms to a specific model using a syntax like XML is called [**serialization**][serialization_wiki].
Thus, we might say that DC data is serialized in XML syntax, or bibliographic data follows the MARC21 data model and is serialized as MARCXML.

Earlier in this work, we used the `<meta>` element to capture some of our web document's metadata in the `<head>` section.
In this section, we will learn to add more specific metadata using the [schema.org][schema] data model.
Just as the DC data model dictates certain kinds of data points to collect (e.g., title, subject, description, etc.),
the schema.org data model provides a vocabulary we can use to describe our web pages.
Thus, using [JSON][json_wiki] syntax, we will serialize our schema.org data as [JSON-LD][json_ld_wiki], or JSON Linked Data.

The purpose of this is to provide computers with data about the context and content of web pages;
that is, the purpose is to provide *metadata*, or *data about data*.

Metadata has some appearance in most computer applications.
Metadata serialized in JSON-LD is used by search engines, AI, and other services to *understand* the content expressed in HTML,
the latter of which is used for human consumption.
It accomplishes this through the schema.org vocabulary.
Like other data models, the schema.org vocabulary provides a method for adding structured, linked data.
The data is *linked* because the vocabulary is interconnected via a hierarchical data model.
For example, the main data type in schema.org is *Thing*, and
this includes child data types such as *Action*, *Person*, *Place*, *Organization*, and more.
The child data types include additional descendants.
An *Organization* thing includes *Airline*, *EducationalOrganization*, *PoliticalParty*, *LocalBusiness*, and more.
And an *EducationalOrganization* may include *CollegeOrUniversity*, *ElementarySchool*, *HighSchool*, and so on.

These data types are *transitive* (if `a > b` and `b > c`, then `a > c`).
For example, the University of Kentucky is a **property** of a *CollegeOrUniversity* thing.
Since it's a *CollegeOrUniversity* thing, then it is also an *EducationalOrganization* thing.
If it's an *EducationalOrganization* thing, then it is also an *Organization* thing.
And finally, if it's an *Organization* thing, then it is a *Thing*.

```
- Thing
    - Organization
        - EducationalOrganization
            - CollegeOrUniversity
                - University of Kentucky (property)
```

All data types eventually walk back to the *Thing* type, just as in biology,
all life on Earth is classified in a [taxonomy][taxonomic_rank] with *Domain* holding the broadest rank.

However, just like *University of Kentucky* can be counted as a specific *property* of *CollegeOrUniversity*,
each *type* above has its own set of properties in schema.org.
Since a *CollegeOrUniversity* thing is also an *EducationalOrganization* thing,
then a *CollegeOrUniversity* thing may also have the properties specific to *EducationalOrganization*, such as *alumni*.
Furthermore, a *CollegeOrUniversity* thing may include the properties of other types not in its direct lineage.
For example, a *CollegeOrUniversity* thing is also a *CivicStructure* thing and a *Place* thing,
even though neither of those are specific descendants of *EducationalOrganization*.
In this way, specific *things* and *properties* can interconnect or *link* to each other, forming **linked data**.

See the [Full schema hierarchy][full_schema_schema_org] for a complete listing.

## JSON

[JSON (JavaScript Object Notation)][json_json_org] is a format for data exchange, primarily across the internet.
While it's history is tied with the JavaScript programming language, it's not dependent up that language.
Many programming languages have builtin or add-libraries for working with data serialized in JSON.

JSON uses two data structures: objects and arrays (or lists).
Per the JSON documentation:

> an *object* is an unordered set of name/value pairs.
> An object begins with a { `left brace` and ends with } `right brace.
> Each name is followed by : `colon` and the name/value pairs are separated by , `comma`.

And:

> An *array* is an ordered collection of values. An array begins with [ `left bracket` and ends with ] `right bracket`.
> Values are separated by , `comma`.

A basic object that describes me and that contains an array in the last line might look like this:

```
{
    "name": "C. Sean Burns",
    "title": "Associate Professor",
    "interests": ["scholarly communication", "open science", "open access", "information retrieval", "academic libraries"]
}
```


[json_json_org]:https://www.json.org/json-en.html
[full_schema_schema_org]:https://schema.org/docs/full.html
[taxonomic_rank]:https://en.wikipedia.org/wiki/Taxonomic_rank
[xml_wiki]:https://en.wikipedia.org/wiki/XML
[marcxml_loc]:https://www.loc.gov/standards/marcxml/
[dc_dcorg]:https://www.dublincore.org/specifications/dublin-core/dc-xml-guidelines/
[serialization_wiki]:https://en.wikipedia.org/wiki/Serialization
[csv_wiki]:https://en.wikipedia.org/wiki/Comma-separated_values
[utf8_wiki]:https://en.wikipedia.org/wiki/UTF-8
[ascii_wiki]:https://en.wikipedia.org/wiki/ASCII
[opac_wiki]:https://en.wikipedia.org/wiki/Online_public_access_catalog
[apache_wiki]:https://en.wikipedia.org/wiki/Apache_HTTP_Server
[schema]:https://schema.org/
[json_ld_wiki]:https://en.wikipedia.org/wiki/JSON-LD
[json_wiki]:https://en.wikipedia.org/wiki/JSON
