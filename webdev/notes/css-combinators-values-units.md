# CSS Combinators and Values and Units

## CSS Combinators

### Descendent Combinators

Works for any descendent. Use spaces between selectors.

Example:

```
header nav {

}
```

```
body p {

}
```

### Child Combinators

Works for direct children. Use ``>`` sign between selectors:

```
li > a {

}

p > span {

}
```

### Adjacent Siblings

Works for selectors that are adjacent to each other. Use ``+`` sign between selectors.

```
h2 + p {

}
```

### General Siblings

Works for selectors that follow each other. Use the ``~`` sign between selectors:

```
h2 ~ p {

}
```

## CSS Values and Units

### Data types

There are four data types:

- integers: whole numbers, positive or negative
- numbers: decimal numbers
- dimensions: attached to units
- percentages: fractions

There are absolute dimensions and relative dimensions

See https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#Lengths

### Examples

Test absolute: ``cm, mm, in, px``

Test relative: ``em, rem, percent``

```
h1 {
  border: 1px solid black;
  width: 2in;
}
```

Or for fonts:

```
html {
  font-size: 1em;
}

ul {
  font-size: 3em;
}

ul > li {
  font-size: 4rem; /* replace with 0.5em */
}
```

### Color numbers

We've already explored using hexadecimal values to make colors, but we can also use RGB values. The added benefit is that we can control opacity. The nubmers represent the red, blue, and green channels. The last number makes the color more or less transparent. When set to 0, the color is fully transparent. When set to 1, the color is fully opaque.

```
h1 {
  border: 1px solid black;
  background-color: rgba(2, 121, 139, .5);
}
```

### Image position

Images can be used directly in CSS without calling them in HTML. We can control position using coordinates or strings:

```
body {
  background-image: url("star.png");
  background-repeat: no-repeat;
  background-position: right center;
}
```
