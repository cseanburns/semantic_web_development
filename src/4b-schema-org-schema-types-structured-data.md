# Schema.org and Structured Data

<!--

## JSON-LD

Metadata plays a central role in most computer applications.
Metadata serialized in JSON-LD is used by search engines, AI, and other services to *understand* the content expressed in HTML,
the latter of which is used for human consumption.
It accomplishes this through the schema.org vocabulary (although other data models exist for different contexts).
Like other data models, the schema.org vocabulary provides a method for adding structured, linked data.
The data is *linked* because the vocabulary is interconnected via a hierarchical data model.
For example, the main data type in schema.org is *Thing*.
The *Thing* type includes child data types such as *Action*, *Person*, *Place*, *Organization*, and more.
The child data types include additional descendants:
an *Organization* thing includes *Airline*, *EducationalOrganization*, *PoliticalParty*, *LocalBusiness*, and more.
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
each *type* has its own set of properties in schema.org.
Since a *CollegeOrUniversity* thing is also an *EducationalOrganization* thing,
then a *CollegeOrUniversity* thing may also have the properties specific to *EducationalOrganization*, such as *alumni*.
Furthermore, a *CollegeOrUniversity* thing may include the properties of other types not in its direct lineage.
For example, a *CollegeOrUniversity* thing may also be a *CivicStructure* thing and a *Place* thing,
even though neither of those are specific descendants of *EducationalOrganization*.
In this way, specific *things* and *properties* can interconnect or *link* to each other, forming **linked data**.

See the [Full schema hierarchy][full_schema_schema_org] for a complete listing.

## Conclusion


We were also introduced to **schema.org** data model
We learned that JSON-LD is a hierarchical, linked data model that contains a root data type, *Thing*,
which includes descendant thing types.

-->
