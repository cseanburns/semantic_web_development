// Lines beginning with two // are comments
// JavaScript ignores those lines

// Examine the document object and the tree of elements
console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.links);
console.log(document.images);

// Updating and Selecting items
document.title = 'ACME Industries, Inc.';
console.log(document.all[9]);
document.all[9].textContent = 'ACME Industries, Inc.';

// Select items by ID attribute
console.log(document.getElementById('main_article'));

// Style changes by ID attribute
const headerTitle = document.getElementById('title');
headerTitle.style.color = 'blue';
const primaryArea = document.getElementById('primary');
primaryArea.style.background = 'yellow';

// Select items by Class attributes
const wrapperBody = document.getElementsByClassName('wrapper');
console.log(wrapperBody);
wrapperBody[0].style.fontWeight = 'bold';
wrapperBody[0].style.backgroundColor = 'black';
wrapperBody[0].style.color = 'yellow';

// Select items by Tag name
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[1]);
paragraphs[1].textContent = 'Some text here';
paragraphs[1].style.fontWeight = 'bold';
paragraphs[1].style.color = 'yellow';
// Loop through all the paragraphs
for(var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = 'red';
}

// Query selector by CSS
const header = document.querySelector('header');
header.style.height = '4rem';

// Query selector for all by CSS
const sections = document.querySelectorAll('section');
console.log(sections);
sections[1].style.border = '1px solid black';
