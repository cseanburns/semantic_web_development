# Responsive Layouts with Flexbox

## Introduction

Responsive design is of fundamental importance to the web.
Since smartphones were introduced in 2007, smartphone browsers have increasingly become the dominant way to interact with the web.
As a result of this trend in user behavior, search engines prioritize a smartphone-first web.
Google, for example, stopped [indexing sites that are not mobile accessible][mobile_google] as of July 2024.
This means that if your website isn't responsive, i.e., it doesn't collapse into a single column in mobile view,
then it will eventually now show up in Google searches.

## Common Layouts

So far in this work, we have primarily covered different ways to style the content of our web pages.
However, one of the main purposes of CSS is to style the layout of a page.
By far, the most common layouts include variations of the following:

### 1-column layout

```
-----------------------------------
|              HEADER             |
-----------------------------------
|              Row 2              |
-----------------------------------
|              Row 3              |
-----------------------------------
|              FOOTER             |
-----------------------------------
```

### 2-column layout

```
-----------------------------------
|              HEADER             |
-----------------------------------
|          |                      |
| Column A |   Column B           |
|          |                      |
-----------------------------------
|              FOOTER             |
-----------------------------------
```

### 3-column layout

```
-------------------------------------
|              HEADER               |
-------------------------------------
|          |             |          |
| Column A |   Column B  | Column C |
|          |             |          |
-------------------------------------
|              FOOTER               |
-------------------------------------
```

### Nested Layout

Using more advanced techniques, we can nest layouts within layouts.
For example, we can divide the body of a web page into additional grids, row- or column-wise.
In the following example, the 1-column layout includes an extra column in the third row:

```
-----------------------------------
|              HEADER             |
-----------------------------------
|              Row 2              |
-----------------------------------
| Row 3 Column A | Row 3 Column B |
-----------------------------------
|              FOOTER             |
-----------------------------------
```

The MDN Web Docs provides a nice overview of the [common layouts in web design][layouts_mdn].

## Responsive Layouts

Layouts with more than one column only work on devices such a tablets, laptops, and desktop machines.
When viewing on mobile, all layouts should be a 1-column layout.

Fortunately, CSS provides the tools to create **responsive** designs;
i.e., tools needed to collapse multi-column layouts into a single layout.
The two newest tools include **Flexbox** and **Grid**.
Both of these tools make it much easier to create complex, multi-row and multi-column, layouts
that also collapse into single column layouts in mobile view.

## Conclusion

In the next section, we will learn how to use CSS Flexbox to create responsive website designs.
CSS Flexbox is ideal for working with a single dimension at a time: rows **or** columns.

While we will not cover CSS Grid at this time, it is well worth learning.
CSS Grid is ideal when manipulating two-dimensions: rows **and** columns.
It is used to create complex multi-column/multi-row layouts that are also responsive to smaller screens.
To learn more about CSS Grid, see the following resources:

- [CSS Grid Layout Module Level 1][grid_w3]
- [Grid: MDN][grid_mdn]
- [Grid: W3 Schools][grid_w3_schools]

[grid_mdn]:https://developer.mozilla.org/en-US/docs/Web/CSS/grid
[grid_w3]:https://www.w3.org/TR/css-grid-1/
[grid_w3_schools]:https://www.w3schools.com/css/css_grid.asp
[layouts_mdn]:https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts
[mobile_google]:https://developers.google.com/search/blog/2024/06/mobile-indexing-vlast-final-final.doc?hl=en
