/*
JavaScript DOM Crash Course - Part 1 by Traversy Media
https://www.youtube.com/watch?v=0ik6X4DJKCc
Also see MDN Docs:
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web
https://developer.mozilla.org/en-US/docs/Learn/JavaScript

Working with the DOM, the Document Object Model,
means working with HTML elements and the inherent hierarchy
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
*/

// Examine the document object and the tree of elements
//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.links);
//console.log(document.images);

// Updating and Selecting items
//document.title = 'ACME Industries, Inc.';
//console.log(document.all[9]);
//document.all[9].textContent = 'ACME Industries, Inc.';

// Select items by ID attribute
//console.log(document.getElementById('main_article'));

// Style changes by ID attribute
//const headerTitle = document.getElementById('title');
//headerTitle.style.color = 'blue';
//const primaryArea = document.getElementById('primary');
//primaryArea.style.background = 'yellow';

// Select items by Class attributes
//const wrapperBody = document.getElementsByClassName('wrapper');
//console.log(wrapperBody);
//wrapperBody[0].style.fontWeight = 'bold';
//wrapperBody[0].style.backgroundColor = 'black';
//wrapperBody[0].style.color = 'yellow';

// Select items by Tag name
//const paragraphs = document.getElementsByTagName('p');
//console.log(paragraphs[1]);
//paragraphs[1].textContent = 'Some text here';
//paragraphs[1].style.fontWeight = 'bold';
//paragraphs[1].style.color = 'yellow';
//// Loop through all the paragraphs
//for(var i = 0; i < paragraphs.length; i++) {
//  paragraphs[i].style.backgroundColor = 'red';
//}

// Query selector by CSS
//const header = document.querySelector('header');
//header.style.height = '4rem';

// Query selector for all by CSS
//const sections = document.querySelectorAll('section');
//console.log(sections);
//sections[1].style.border = '1px solid black';

// Start dark mode if it's after 6:59:59pm
if (new Date().getHours() > 18) {
  //alert(new Date().getHours());
  const html = document.querySelector('html');
  html.style.backgroundColor = 'black';
  html.style.color = 'white';
}

if (new Date().getHours() > 18) {
  const wrapperBody = document.getElementsByClassName('wrapper');
  wrapperBody[0].style.backgroundColor = 'black';
  wrapperBody[0].style.color = 'white';
}

if (new Date().getHours() > 18) {
  const secondaryBody = document.getElementById('secondary');
  secondaryBody.style.backgroundColor = 'black';
  secondaryBody.style.color = 'white';
}
