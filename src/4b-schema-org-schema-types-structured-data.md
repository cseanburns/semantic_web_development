# Schema.org and Structured Data

## Introduction

Metadata plays a central role in most computer applications.
There are different data models to structure metadata.
The data model we will use to add metadata to our pages is called [schema.org][schema_org].

## Data Models: An Overview

Some data models provide a basic structure, but others are more involved.
Regardless, they all provide a sort of **controlled vocabulary**, which means they:

- reduce ambiguity by using approved terms
- promote interoperability between systems, platforms, or institutions
- allow for machine processing by enforcing structures and values.

For example, the [Dublin Core][terms_dublin_core] data model provides a flat list of controlled terms.
The main terms include:

- `contributor`
- `coverage`
- `creator`
- `date`
- `description`
- `format`
- `identifier`
- `language`
- `publisher`
- `relation`
- `rights`
- `source`
- `subject`
- `title`
- `type`

We can apply this data model to all sorts of items or works.
Here I apply it to Toni Morrison's novel Pulitzer Prize winning novel, *Beloved*:

| DC Term    | Property             |
| ---------  | ----------           |
| Creator    | Toni Morrison        |
| Title      | Beloved              |
| Publisher  | Alfred A. Knopf Inc. |
| Language   | English              |
| Date       | 1987                 |
| Identifier | 1-58060-120-0        |

Unlike Dublin Core, other data models are designed to be more interconnected.
For example, [MeSH (Medical Subject Headings)][mesh_nlm] and [LCSH (Library of Congress Subject Headings)][lcsh_loc]
are types of [thesauri][thesauri_wiki].
However, there are differences between the two.
Although both MeSH and LCSH are hierarchical sets of controlled vocabularies,
MeSH focuses on narrower and broader relationships among terms and is most commonly used in biomedical indexing, such as in [PubMed][pubmed].
LCSH focuses on associative relationships (related terms) and focuses on heading-subheading combos.
It's most often used by the Library of Congress and among academic libraries (e.g., UK's InfoKat).

## Schema.org

Then there's **schema.org**.
Unlike the prior data models, schema.org functions more like a [taxonomy][taxonomy_wiki] and [ontology][ontology_wiki].
As a taxonomy, schema.org is a kind of hierarchical, relational classification system, and as an ontology,
schema.org stresses foundational components, such as concepts or classes, properties or attributes, relationships, and instances.

Like other data models, the schema.org vocabulary provides a method for adding structured, linked data.
The data is *linked* because the vocabulary is interconnected via a hierarchical data model.
This means that each type or property can point to or be reused across datasets, and
it's this characteristic that creates a web of meaning that is readable by machines.

For example, the root data type in schema.org is `Thing`.
The `Thing` type includes child data types such as `Action`, `Person`, `Place`, `Organization`, and more.
These are all types of *things* (or *classes*).
The child data types include additional descendants; for example, the following are all examples of specific classes of
an `Organization` thing:

- `Airline`,
- `EducationalOrganization`
- `PoliticalParty`,
- `LocalBusiness`, and more.

Digging deeper, if we focus on the `EducationalOrganization` type, we find that it may include:

- `CollegeOrUniversity`
- `ElementarySchool`
- `HighSchool`, and so on.

Schema.org data types are *transitive* (if `a > b` and `b > c`, then `a > c`).
For example, the *University of Kentucky* is a `instance` of a `CollegeOrUniversity` type.
This itself is a subclass of an `EducationalOrganization`.
We could go on: an `EducationalOrganization` type is a subclass of an `Organization` type.
And finally, an `Organization` thing is a subclass of `Thing`.
We might represent this as follows:

```
- Thing
    - Organization
        - EducationalOrganization
            - CollegeOrUniversity
                - University of Kentucky (property)
```

All classes eventually descend back to the `Thing` type, just as in biology,
all life on Earth is classified in a [taxonomy][taxonomic_rank] with `Domain` holding the broadest rank.

Furthermore, all types have **properties**.
A [`Thing`][thing_schema_org] type can have the following properties:

- `image`
- `name`
- `description`

And each of those properties may have additional properties or take on values.
For example, for `image`, we can provide a URL to an actual image.
Or we may provide a `caption` for it.

However, just like `University of Kentucky` can be counted as an instance of `CollegeOrUniversity`,
each `type` has its own set of **instances** in schema.org.
Since a `CollegeOrUniversity` thing is also an `EducationalOrganization` thing,
then a `CollegeOrUniversity` thing may also have the properties specific to `EducationalOrganization`, such as `alumni`.
Furthermore, a `CollegeOrUniversity` thing may include the properties of other types not in its direct lineage.
For example, a `CollegeOrUniversity` thing may also be a `CivicStructure` thing and a `Place` thing,
even though neither of those are specific descendants of `EducationalOrganization`.
In this way, specific `things` and `properties` can interconnect or `link` to each other, forming `linked data`.

<figure>
<img src="images/schema_connections.svg"
alt="Visual representation of the connections between schema.org types"
title="Visual representation of the connections between schema.org types">
<figcaption>
Fig. 2. <a href="https://schema.org/CollegeOrUniversity">Schema.org CollegeOrUniversity Type</a>
</figcaption>
</figure>

See the [Full schema hierarchy][full_schema_schema_org] for a complete listing.

## Conclusion

In this section, we were introduced to the **schema.org** data model.
We learned that schema.org is a hierarchical and extensible data model, with `Thing` as the root class and
many descendants that inherit and extend its properties.
By understanding this structure,
we will be able to select the right types and properties when we begin writing JSON-LD for our own web pages.

To sum it up:
Metadata serialized in JSON-LD is used by search engines, AI, and other services to *understand* the content expressed in HTML,
the latter of which is used for human consumption.
It accomplishes this through the schema.org vocabulary (although other data models exist for different contexts).

In the next section, we focus on the practical aspects of serializing `schema.org` as JSON-LD.

[schema_org]:https://schema.org/
[mesh_nlm]:https://www.ncbi.nlm.nih.gov/mesh/
[lcsh_loc]:https://www.loc.gov/aba/publications/FreeLCSH/freelcsh.html
[thesauri_wiki]:https://en.wikipedia.org/wiki/Thesaurus_(information_retrieval)
[terms_dublin_core]:https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#section-3
[pubmed]:https://pubmed.ncbi.nlm.nih.gov/
[taxonomy_wiki]:https://en.wikipedia.org/wiki/Taxonomy
[ontology_wiki]:https://en.wikipedia.org/wiki/Ontology_(information_science)
[taxonomic_rank]:https://en.wikipedia.org/wiki/Taxonomy_(biology)
[full_schema_schema_org]:https://schema.org/docs/full.html
[thing_schema_org]:https://schema.org/Thing
