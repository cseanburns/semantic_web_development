# HTML Tables and Forms

In the previous sections, we discussed several categories of HTML elements to use on our web pages.
These categories relate to document structure, document metadata, grouping elements, text level semantic elements, links, attributes,
and embedded content like images and multimedia.
These elements are regularly used because they represent how we structure our pages and add content to them.

In this section, we learn how to create tables and forms to add to our web pages.
These two aspects of HTML are less regularly used.
Creating tables is about adding content, but specifically, tabular data only.
Forms are used to gather user input and deliver that input to the web site owner or process it through,
for example, a server side relational database server, like MariaDB, MySQL, PostgreSQL, etc.

We have a number of types of forms available to us.
They include basic text entry forms, drop down lists, and more.
One major caveat with forms is that they require additional programming to function.
For example, forms are often used with PHP to process the input.
However, learning PHP is beyond the scope of this work.
We are also using GitHub Pages to render our sites, and GitHub does not provide back-end PHP or relational database support.
Therefore, in this section, we mainly learn how to create a variety of HTML forms.
We will learn how to style them with CSS in a future section.

## The `<table>` Element

Tables are great for presenting tabular data:
the kind of data that may be presented in spreadsheets or summarized in papers or articles
([The `<table>` element][tables_mdn]).
In this demo, I create a simple table that contains the following elements:

- `<table>`: This is the main table element. Other elements are enclosed within the `<table>` element.
- `<caption>`: The `<caption>` element is used to add captions to tables and should immediately follow the `<table>` element.
- `<thead>`: The `<thead>` element is semantic and defines table header information.
- `<tbody>`: The `<tbody>` element is semantic and defines table body information.
- `<tfoot>`: The `<tfoot>` element is semantic and defines table footer information.
- `<tr>`: The `<tr>` element defines table row.
- `<th>`: The `<th>` element defines header cell. This is often placed at the top row of a table:
    - It it often enclosed within the `<thead>` element but can be added to the `<tbody>` section for row headers.
- `<td>`: The `<td>` element defines a specific data cell in the table.

Tables are fairly straightforward but grow complex as more data is added to them.
The following, simple table begins with the `<table>` tag and is followed by the `<caption>` tag.
The `<caption>` tag provides a description of the table and its purpose.
Following this, the table has three main sections, which include: `<thead>`, `<tbody>`, and `<tfoot>`.
While HTML does not require indentation, indentation can help with code readability, and is therefore highly encouraged.

Additionally, one `<th>` element contains a `colspan` attribute, which is set to `5`, or five columns, in this example.
Since the table only has five columns, this elements spans the width of the entire table.
The `scope` attribute <q>defines the cells that the header (defined in the `<th>`) element relates to</q>
([The `scope` attribute][scope_mdn]).
It's useful for clearly demarcating the row and column names from the tabular data.

```
<table>
    <caption>Star Trek or Star Wars</caption>
    <thead>
        <tr>
            <th scope="colgroup" colspan="5">Attitude</th>
        </tr>
        <tr>
            <th scope="col">Films</th>
            <th scope="col">For</th>
            <th scope="col">Undecided</th>
            <th scope="col">Against</th>
            <th scope="col">Row Marginal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Star Trek</th>
            <td>92</td>
            <td>18</td>
            <td>90</td>
            <td>200</td>
        </tr>
        <tr>
            <th scope="row">Star Wars</th>
            <td>68</td>
            <td>22</td>
            <td>110</td>
            <td>200</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row">Column Marginal</th>
            <td>160</td>
            <td>40</td>
            <td>200</td>
            <td>400</td>
        </tr>
    </tfoot>
</table>
```

The MDN Web Docs provide thorough documentation on creating basic and more advanced tables:

- [Table basics][tables_basic_mdn]
- [Table advanced][tables_advanced_mdn]

## Forms

Forms are used to collect user input.
Visitors can use forms to enter data, make selections, and submit information to a web server,
which may either store that information, process it, or transmit it across the internet.

### The `<form>` Element

The `<form>` element is used to create a form.
It takes at least two attributes: `action` and `method` (see additional details: [The `<form>` element][form_mdn]).

- `action`: The `action` attribute holds a URL or file path as a value that links to a script, like PHP, which processes the user input.
- `method`: The `method` attribute declares the type of HTTP request ([GET and POST][get_post_diffen]):
    - GET and POST are two HTTP methods to request data from web servers 
    - The `GET` request forms a query string with name and value pairs. The data pairs are visible in URLs.
    - The `POST` request sends data to a server. Data is not visible in URLs, which makes this method more private by default.

Incomplete example of a basic `<form>`:

```
<form action="#" method="get">
</form>
```
  
### The `<label>` Element

The `<label>` element is often associated with various forms and is used to add a caption in the user interface
([The `<label>` element][label_mdn]).
Among others attributes, this element takes a `for` attribute, which functions like an `id` attribute.

Incomplete example of a basic `<form>` with the `<label>` element:

```
<form action="#" method="get">
    <label for="name">Enter your name: </label>
    <label for="email">Enter your email: </label>
</form>
```
      
### The `<input>` Element

The `<input>` element defines the type of data for the input ([The `<input>` element][input_mdn]).
Data types may include buttons, check boxes, dates, email addresses, and more.
This element takes, among others, the following important attributes:
      
- The `type` attribute specifies the type of input.
- The `name` attribute is used to identify the data submitted to the server. 
- The `required` attribute specifies that this field is required.
- The `id` attribute is for labeling unique input and allows for styling with CSS.
- The `for` attribute in `<label>` should match the `id` of the associated `<input>`.

Complete example of a basic `<form>` with `<label>` and `<input>` elements:

```
<form action="#" method="get">

    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
    
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
    
    <input type="submit" value="Submit">
    
</form>
```

## Form Variations

### Create a button

Here's an example of adding a `<button>` to a form ([The `<button>` element][button_mdn]).

```
<form action="#" method="get">
    <button type="submit" name="button_like">Click if you like buttons.</button>
</form>
```

### The `<datalist>` Element

Here's an example of creating a `<datalist>` ([The `<datalist>` element][datalist_mdn]).
The `<datalist>` is used with the `<option>` element to offer a predefined list of options for the user to select.
This element is often used to suggest pre-defined options but allows for other data to be collected from the user.

```
<form action="#" method="get">
    <label for="myOS">What is your favorite OS?</label>
    <input list="OS" id="myOS" name="myOS">
    <datalist id="OS">
        <option value="GNU/Linux">
        <option value="Linux">
        <option value="BSD">
        <option value="Windows">
        <option value="macOS">
     </datalist>
</form>
```

### The `<select>` Element

Like above, the `<select>` element offers a list of options, but the options are restricted and presented in a drop down box
([The `<select>` element][select_mdn]).
The `<optgroup>` element groups logical options together.
In the example below, I use `<optgroup>` to group two types of homes as either *traditional* or *alternative*.

```
<form action="#" method="get">
    <label for="home-structure">What kind of house would you like to have?</label>
	<select id="home-structure" name="home-structure">
		<option value="">--Please choose an option--</option>
		<optgroup label="Traditional">
			<option value="castle">Castle</option>
			<option value="mansion">Mansion</option>
			<option value="bungalo">Bungalo</option>
		</optgroup>
		<optgroup label="Alternative">
			<option value="treehouse">Tree House</option>
			<option value="tinyhome">Tiny Home</option>
			<option value="conversion_van">Conversion Van</option>
		</optgroup>
	</select>
</form>
```

### The `<legend>` and `<fieldset>` Elements

The `<fieldset>` element is used to group multiple controls ([The `<fieldset>` element][fieldset_mdn]).
Adding a `<legend>` element informs the user what choice to select ([The `<legend>` element][legend_mdn]).
These elements are used to group inputs visually, but they also improve accessibility;
specifically, they help screen readers convey the purpose of the related inputs.
The `name` attribute contains the same value for all three options since the user selects only one option.

```
<form action="#" method="get">
    <fieldset>
        <legend>Choose your favorite technology: </legend>
        <label><input type="radio" name="favtech" value="Pencil"> Pencil</label><br>
        <label><input type="radio" name="favtech" value="Smartphone"> Smartphone</label><br>
        <label><input type="radio" name="favtech" value="ERM"> ERM Device</label>
    </fieldset>
</form>
```

### The `<textarea>` Element

The `<textarea>` element provides a way to accept multi-line content from a user ([The `<textarea>` element][textarea_mdn]).
The number of lines and the width of the element are adjustable via the `rows` and `columns` attributes.
In the example below, I set the number of rows to `5` and the width of the text area to `100` columns.

```
<form action="#" method="post">
    <label for="thoughts">What are you thinking about ICT nowadays?</label>
    <textarea id="thoughts" name="thoughts" rows="5" cols="100">Enter here:</textarea>
</form>
```

## Conclusion

Tables and forms are useful tools for websites.
They allow developers to structure data and collect user input, respectively.
They each have different purposes.
We use tables to display tabular data, and we use forms to collect user input.
I grouped these technologies together in a single section not because they are alike but because,
unlike the rest of the HTML that we have learned, tables and forms are used sparingly.

With respect to forms, note that HTML (nor CSS) can process form data.
Processing form data requires additional programming, such as [PHP][php],
which is often used with various database technologies, such as MySQL, MariaDB, PostgreSQL, etc.
However, understanding how HTML forms work helps you understand the basics of frontend web application development.

In the next chapter, we begin to study CSS (Cascading Style Sheets).
CSS will be used to improve the usability and visual appeal of our rather, so far, bland HTML pages.

[button_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
[datalist_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
[fieldset_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
[form_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
[get_post_diffen]:https://www.diffen.com/difference/GET-vs-POST-HTTP-Requests
[input_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
[label_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
[legend_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
[php]:https://www.php.net/
[scope_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#scope
[select_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
[tables_advanced_mdn]:https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced
[tables_basic_mdn]:https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics
[tables_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
[textarea_mdn]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
