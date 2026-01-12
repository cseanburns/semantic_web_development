# JSON Basics

## Introduction

It may be too obvious to say, but computer applications use and exchange data in order to operate.
For example, an [OPAC (library catalog)][opac_wiki] contains bibliographic records (data)
that allow users to search a catalog from a browser to locate information sources.
An [Apache web server][apache_wiki] stores configuration information in order to turn on, off, or fine-tune the HTTP services it provides.

What may not be obvious is that data is stored in a variety of formats.
Library science students may be familiar with [XML (Extensible Markup Language)][xml_wiki] because it's used to serialize MARC data
(see [MARCXML][marcxml_loc]) or [DublinCore (DC)][dc_dcorg] metadata.
XML performs this service by storing data and metadata in a [standardized format][xml_w3].
[CSV (comma separated values)][csv_wiki] files function as a *de facto* standard for storing tabular data.
Data stored in CSV files are often used for data analysis or statistical work, like in the R or Python programming languages.
[YAML][yaml_wiki] files are used to store configuration files for various applications.

Oftentimes we might hear that data or metadata is **encoded** in a certain way, such as in MARC or DC, and
then **encoded** again in XML, CSV, YAML, or similar formats.
This isn't accurate, though.
Encoding has other, more precise uses;
for example, it's used to refer to **character encoding** standards that
dictate how individual characters (like those on your keyboard) are represented in bytes on a computer.
Major examples include [UTF-8][utf8_wiki] or [ASCII][ascii_wiki].

It's more precise to say that standards like MARC and DC function as **data models**.
Data models are also known as **conceptual models** or as **schemas**.
A data model dictates the kind of information that should be saved.
For example, the DC schema for metadata includes data points like **title**, **subject**, **description**, and more.

When we write down the data in a file, we express the data using syntax.
XML is an example of both a syntax (such as `<xml>`) and a format (such as file format like `index.xml`).
Expressing data that conforms to a specific model (e.g., DC) using a syntax (e.g., XML) is called [**serialization**][serialization_wiki].
Thus, we say that DC data is serialized in XML syntax, or bibliographic data follows the MARC21 data model and is serialized as MARCXML.

## Metadata

[Metadata][metadata_wiki] is data about data.
When a librarian logs an entry for a book, they record metadata about the book that includes data points like:
title, author, publisher, publication date, subject, and other descriptive elements.
When we take a photo with our smartphone, our camera app records a name for the photo (e.g., `IMG_2025_04_02.jpg`),
the date it was taken, the name and type of the device, the size of the photo, and
oftentimes the geographical location of the photo.

Earlier in this work, we used the `<meta>` element to capture some of our web document's metadata in the `<head>` section.
In this chapter, we will learn to add more specific metadata using the [schema.org][schema] data model.
Just as the DC data model dictates certain kinds of data points to collect (e.g., title, subject, description, etc.),
the schema.org data model provides a vocabulary we can use to describe our web pages.
Thus, using [JSON][json_wiki] syntax, we will serialize our schema.org data as [JSON-LD][json_ld_wiki], or JSON Linked Data.

The purpose of JSON-LD is to provide computers with data about the context and content of web pages.
That is, the purpose is to provide *metadata*, or *data about data*, to computers, like search engines and AI,
that allow them to build an *understanding* of our web pages.
Major platforms like Google, Bing, and others use JSON-LD to understand web content specifically.

## JSON

To understand how to serialize the schema.org data model into JSON-LD, we need to know how to use JSON.
[JSON (JavaScript Object Notation)][json_json_org] is a format for data exchange, primarily across the internet.
While its history is tied with the JavaScript programming language, it's not dependent on that language.
Many programming languages have built-in or add-on libraries for working with data serialized in JSON.

JSON uses two data structures: objects and arrays (or lists).
Per the JSON documentation:

> an *object* is an unordered set of name/value pairs.
> An object begins with a { `left brace` and ends with } `right brace`.
> Each name is followed by : `colon` and the name/value pairs are separated by , `comma`.

And:

> An *array* is an ordered collection of values. An array begins with [ `left bracket` and ends with ] `right bracket`.
> Values are separated by , `comma`.

Name/value pairs are separated by colons. Names are double-quoted strings, and string values are double-quoted:

```
"name": "value"
```

Values may take on specific data types that include:

- strings
- numbers
- JSON objects
- arrays
- booleans (`true` or `false`)
- null

### A Simple JSON Object

Let's create a basic JSON object using the technical details just described.
The example JSON object below begins to describe a person.
The object begins with an opening curly brace and ends with a closing curly brace, and contains seven **name/value** pairs.
All name/value pairs end with a comma except the last line.
The last line of any JSON object **does not** end with a comma.
The **field names** include `name`, `title`, `interests`, `worksFor`, `college`, `department`, and `program`.
Each field name includes a corresponding value.

```
{
    "name": "C. Sean Burns",
    "title": "Associate Professor",
    "interests": "semantic web",
    "worksFor": "University of Kentucky",
    "college": "College of Communication and Information",
    "department": "School of Information Science",
    "program": "Information Communication Technology (ICT)"
}
```

### A JSON Object with an Array

Some fields may take more than one value.
For example, I happen to know that the person described in the simple JSON object above has more than one interest.
Fortunately, we can use a JSON **array** to add more interests.

An array is assigned a name and begins and ends with square brackets.
Each item in a JSON array ends with a comma, but like the last item in a JSON object, the last item in an array does not end with a comma.
To see what this looks like, I convert the `interests` field to an array that lists several of this person's interests:

```
{
    "name": "C. Sean Burns",
    "title": "Associate Professor",
    "interests": [
        "semantic web",
        "scholarly communication",
        "open science",
        "open access",
        "information retrieval",
        "academic libraries"
    ],
    "worksFor": "University of Kentucky",
    "college": "College of Communication and Information",
    "department": "School of Information Science",
    "program": "Information Communication Technology (ICT)"
}
```

### Nesting JSON Objects

As noted, JSON objects may take other JSON objects as a *value*.
This is useful when a particular field name may be converted into an object itself.
For example, in the above JSON objects, the `worksFor` field name can include other properties and thus may be extended into an **object**.
Since the person described in the JSON object also has a work location, I can add that as a new object named `location`.
The result is the following JSON object that contains two nested JSON objects: `worksFor` and `location`.
Note that since the person described in this object teaches in two programs, I converted the `program` field name into a list
that includes both programs.

```
{
    "name": "C. Sean Burns",
    "title": "Associate Professor",
    "interests": [
        "semantic web",
        "scholarly communication",
        "open science",
        "open access",
        "information retrieval",
        "academic libraries"
    ],
    "worksFor": {
        "name": "University of Kentucky",
        "college": "College of Communication and Information",
        "department": "School of Information Science",
        "program": [
            "Information Communication Technology",
            "Library Science"
        ]
    },
    "location": {
        "streetAddress": "326 Lucille Little Library",
        "addressLocality": "Lexington",
        "addressRegion": "Kentucky",
        "postalCode": "40506"
    }
}
```

> Note: The example above omits comments because JSON does not allow them.

### JSON Linting

Just as we have validated our [HTML5][html5_validator_w3c] and [CSS3][css3_validator_w3c] code,
we can also validate our JSON code.
Validation programs examine the relevant code and check for syntax and other issues.
When writing JSON syntax manually, use the [JSONLint][jsonlint] to check for syntax errors.

The popular [`jq`][jq] JSON processor can help clean up and prettify JSON syntax.
It is not a linter, but it can be used to examine, search, sort, and analyze JSON data.

## Conclusion

In this section, we learned more about the concept of metadata,
which generally relies on a **data model (or schema)** and serialization into a format, such as XML, CSV, and JSON.
In the next section, we will begin to explore the full richness of the schema.org vocabulary and learn how to serialize that as JSON-LD.

Before we can use JSON-LD, we need to know how to understand and use JSON.
We learned that JSON uses a `"name": "value"` syntax.
Both `"name"` and string values are double quoted.
**Values** may include specific data types such as strings, numbers, JSON objects, arrays, Boolean, and null.
Each `"name": "value"` item ends with a comma.
The last `"name": "value"` item in a JSON object does not end in a comma.
If a JSON object includes an array as a data type, the array is enclosed in square brackets `[ ]`.
JSON objects nested in JSON objects are **named** and then the nested object is enclosed in curly brackets `{ }`.

As with HTML and CSS, remember that it's important to validate our JSON syntax.
Therefore, we also learned about tools like JSONLint.
The more complex our JSON objects become, the easier it is to introduce syntax errors into them.
So be sure to validate your JSON.

When we begin working with schema.org, you will see how this structured, machine-readable format allows search engines and AI
to *understand* what your website is about, even if no human ever reads it.

[apache_wiki]:https://en.wikipedia.org/wiki/Apache_HTTP_Server
[ascii_wiki]:https://en.wikipedia.org/wiki/ASCII
[css3_validator_w3c]:https://jigsaw.w3.org/css-validator/
[csv_wiki]:https://en.wikipedia.org/wiki/Comma-separated_values
[dc_dcorg]:https://www.dublincore.org/specifications/dublin-core/dc-xml-guidelines/
[html5_validator_w3c]:https://validator.w3.org/
[jq]:https://jqlang.org/
[json_json_org]:https://www.json.org/json-en.html
[json_ld_wiki]:https://en.wikipedia.org/wiki/JSON-LD
[jsonlint]:https://jsonlint.com/
[json_wiki]:https://en.wikipedia.org/wiki/JSON
[marcxml_loc]:https://www.loc.gov/standards/marcxml/
[metadata_wiki]:https://en.wikipedia.org/wiki/Metadata
[opac_wiki]:https://en.wikipedia.org/wiki/Online_public_access_catalog
[schema]:https://schema.org/
[serialization_wiki]:https://en.wikipedia.org/wiki/Serialization
[utf8_wiki]:https://en.wikipedia.org/wiki/UTF-8
[xml_w3]:https://www.w3.org/TR/xml/
[xml_wiki]:https://en.wikipedia.org/wiki/XML
[yaml_wiki]:https://en.wikipedia.org/wiki/YAML
