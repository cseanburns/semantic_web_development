# Attribute Selectors, Pseudo Classes/Elements

## Attribute selectors

- Select attributes with square brackets

```
[href]
a[href]
```

## Pseudo-classes

- Select pseudo-classes with a single colon

```
tr:hover {
  background-color: black;
  color: white;
}

a:visited {
  color: red;
}
```

## Pseudo-element

- Select pseudo-elements with a double colon

```
p::first-letter {
  font-size: 2rem;
}

p::selection {
  background-color: red;
  color: green;
}
```

## Combining Pseudo-elements and -classes

```
p:hover::first-line {
  font-weight: bold;
}
```
