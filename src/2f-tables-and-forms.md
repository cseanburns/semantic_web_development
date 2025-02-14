# HTML Tables and Forms

## Tables

Tables are great for presenting tabular data: the kind of data that may be presented in spreadsheets.
In this demo, I will create a simple that contains the following elements to construct a table:

- <code>table</code>: the main table element</li>
- <code>caption</code>: adding captions to tables</li>
- <code>thead</code>: semantic element that defines table header information
- <code>tbody</code>: semantic element that defines table body information
- <code>tfoot</code>: semantic element that defines table footer information
- <code>tr</code>: defines table row
- <code>th</code>: defines header cell
- <code>td</code>: defines data cell

```
<table>
    <caption>Star Trek or Star Wars</caption>
    <thead>
        <tr>
            <th colspan="5">Attitude</th>
        </tr>
        <tr>
            <th>Films</th>
            <th>For</th>
            <th>Undecided</th>
            <th>Against</th>
            <th>Row Marginal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Star Trek</td>
            <td>92</td>
            <td>18</td>
            <td>90</td>
            <td>200</td>
        </tr>
        <tr>
            <td>Star Wars</td>
            <td>68</td>
            <td>22</td>
            <td>110</td>
            <td>200</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Column Marginal</td>
            <td>160</td>
            <td>40</td>
            <td>200</td>
            <td>400</td>
        </tr>
    </tfoot>
</table>
```

### Tables Documentation

- [Table basics][tables_basic_mozilla]
- [Table advanced][tables_advanced_mozilla]

## Forms

Some documentation on creating forms:

- [The `<form>` element][form_mozilla]
- [The `<input>` element][input_mozilla]
- [The `<label>` element][label_mozilla]
- [The `<legend>` element][legend_mozilla]
- [The `<fieldset>` element][fieldset_mozilla]
- [The `<textarea>` element][textarea_mozilla]
- [Attributes, elements, types][attribures_elements_types]
- [GET and POST methods][get_post_diffen]

### Attributes for the `<form>` element:

- **action**: The **action** attribute holds a URL as a value and initiates some script, like PHP.
- **method**: The **method** attribute declares the type of HTTP request (GET or POST).

Attributes for the `<label>` element:
      
- **for**: The **for** attribute functions like an **id** attribute.

Attributes for the `<input>` element:

- **label**: 
    - The **type** attribute specifies the type of input.
    - The **name** attribute specifies the name of the input.
    - The required attribute specifies that this field is required.

### Basic text entry

The value for the **for** attribute in the **label** element
must be equal to the corresponding value of the **id** attribute in the **input** element.

The value for the **name** attribute in the **input** names the form and is useful in scripting.

```
<form action="#" method="post">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required><br>
    <label for="email">Enter your email address: </label>
    <input type="text" name="email" id="email" required><br>
    <input type="submit" value="Subscribe!">
</form>
```

### Create a button

```
<form action="#" method="get">
    <button type="button" name="buttonlike">Click if you like buttons.</button>
</form>
```

### Create a data list

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

### Pre-defined list of options

```
<form action="#" method="get">
    <label for="home-structure">What kind of house would you like to have?</label>
    <select id="home-structure" name="home-structure">
        <option value="">--Please choose an option--</option>
        <option value="castle">Castle</option>
        <option value="tree house">Tree House</option>
        <option value="tiny home">Tiny Home</option>
    </select>
</form>
```

### Legend and Fieldset

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

### Text area

```
<form action="#" method="post">
    <label for="thoughts">What are you thinking about ICT nowadays?</label>
    <textarea name="ICT" id="thoughts" rows="5" cols="100">Enter here:</textarea>
</form>
```

[tables_advanced_mozilla]:https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced
[tables_basic_mozilla]:https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics
[form_mozilla]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
[input_mozilla]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
[label_mozilla]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
[legend_mozilla]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
[fieldset_mozilla]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
[textarea_mozilla]:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
[attribures_elements_types]:https://www.w3schools.com/html/html_forms.asp
[get_post_diffen]:https://www.diffen.com/difference/GET-vs-POST-HTTP-Requests

