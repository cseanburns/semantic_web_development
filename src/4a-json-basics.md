# JSON Basics

## Introduction

It may be to obvious to say, but computer applications need to exchange data among each other in order to operate.
For example, an OPAC (library catalog) contains bibliographic records (data) so that users may search the data to locate information sources.
An Apache web server stores configuration information in order to turn on, off, or fine tune the services it provides.

What may not be obvious is that data is stored in a variety of formats.
Library students may be familiar with [XML (Extensible Markup Language)][xml_wiki] because it's used to format MARC
(see [MARCXML][marcxml_loc]) or [DublinCore (DC)][dc_dcorg] metadata.
XML performs this service by storing data, metadata, etc in a standardized format.
[CSV (comma separated values)][csv_wiki] files function as a *de facto* standard for storing tabular data.
Data stored in CSV files are often used for data or statistical analysis, like in the R or Python programming languages.
[YAML][yaml_wiki] files are used to store configuration files for various applications.

Oftentimes we might hear that data or metadata is **encoded** in a certain way, such as in MARC, DC, etc, and
then **encoded** again in XML, CSV, YAML, or like.
This isn't very accurate, though.
Encoding is more accurately used to refer to **character encoding**.
Examples include [UTF-8][utf8_wiki] or [ASCII][ascii_wiki],
both of which are character encoding standards dictating how individual characters are stored in bytes.

Standards like MARC and DC function as a **data model**.
We may also refer to a data model as a **conceptual model** or a **schema**.
Data models dictate the kind of information that should be saved.
For example, the DC schema for metadata includes the following data points like **title**, **subject**, **description**, and more.

When we write down the data in a file, we can express those data points using various kinds of syntax.
XML is an example of a syntax or format, but more specifically, this is called [**serialization**][serialization_wiki].
Thus, we might say that DC data is serialized in XML syntax, or bibliographic data follows the MARC21 data model and is serialized as MARCXML.

In this section, we are going to explore the [schema.org][schema] data model to capture the metadata of our web pages.
Then we will serialize that data in [JSON].
The end result will be [JSON-LD], or JSON Linked Data.

[xml_wiki]:https://en.wikipedia.org/wiki/XML
[marcxml_loc]:https://www.loc.gov/standards/marcxml/
[dc_dcorg]:https://www.dublincore.org/specifications/dublin-core/dc-xml-guidelines/
[serialization_wiki]:https://en.wikipedia.org/wiki/Serialization
[csv_wiki]:https://en.wikipedia.org/wiki/Comma-separated_values
[utf8_wiki]:https://en.wikipedia.org/wiki/UTF-8
[ascii_wiki]:https://en.wikipedia.org/wiki/ASCII
