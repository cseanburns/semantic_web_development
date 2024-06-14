// JavaScript Crash Course for Beginners by Traversy Media
// Notes go to minute 39 because beyond what we need for the course
// https://www.youtube.com/watch?v=hdI2bqOjy3c

// single line comments start with two slashes

/*
 * multi line comments
 * can be used like this
 * same as in CSS
*/

// alert('Hello World');
//
// 'console' is an object in JavaScript
// 'log' is a method of the object 'console'
console.log('howdy partner');
console.error('This is an error');
console.warn('This is a warning');

// how to set variables
// three ways to declare variables
// use const or let, in that order, before using var
// var, let, const
// variables assigned with 'let' can be reassigned
// variables assigned with 'const' cannot be reassigned (they're constant/permanent)

let age = 31;
console.log(age);
console.log(age + 1);

// primitive data types:
// Strings, Numbers, Boolean, null, undefined, Symbol

// declaring variables
const weather = 'thunderstorm'; // string
const temp = 52; // number
const humidity = 0.90; // number
const jacketWeather = false; // Boolean
const x = null; // null
const y = undefined; // undefined
let z; // also undefined

// test variable types
console.log(typeof weather);
console.log(typeof temp);
console.log(typeof humidity);
console.log(typeof jacketWeather);
console.log(typeof x); // not really an object even though it returns an object
console.log(typeof y);
console.log(typeof z);

// More on strings
// Concatenation
// old way
console.log('Today there will be a ' + weather + '. ' + 'It is ' + temp + ' degrees.');
// template srings/literals with backticks
console.log(`Today there will be a ${weather}. It is ${temp} degrees.`);
// We can assign the above to a variable
const todaysWeather = `Today there will be a ${weather}. It is ${temp} degrees.`;
console.log(todaysWeather);

// Various string methods
const s = 'Hello World';
console.log(s.length); // equals 11
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
// using multiple methods
console.log(s.substring(6,11).toUpperCase());
// convert to array data type
const n = '0123456789'
console.log(n.split('')); // empty quotes means split by each character
const tags = 'linux, sysadmin, servers, networks'; // this is a single string
console.log(tags);
console.log(typeof tags);
console.log(tags.split(', '));

// Arrays
// 'new' is a constructor
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
// set an array with square brackets instead
const ICT418 = ['linux', 'sysadmin', 'servers', 'networks'];
console.log(ICT418);
// access part of the array
console.log(ICT418[1]); // zero based
// add to the end knowing how many values are in the array
ICT418[4] = 'scripting';
console.log(ICT418);
// add to the end not knowing; use the 'push' method
ICT418.push('LAMP Stack');
console.log(ICT418);
// add to the beginning of the array with 'unshift' method
ICT418.unshift('databases');
console.log(ICT418);
// remove last item from an array
ICT418.pop();
console.log(ICT418);
// check if a data type is in an array
console.log(Array.isArray(ICT418));
// get index number of an item in an array
console.log(ICT418.indexOf('servers'));

// Object literals
const professor = {
  firstName: 'Sean',
  lastName: 'Burns',
  rank: 'Associate Professor',
  courses: ['ICT 418', 'ICT 420', 'LIS 617', 'LIS/ICT 658'],
  courseNames: {
    ICT418: 'Linux Systems Administration',
    ICT420: 'Semantic Web Development',
    LIS617: 'Electronic Resource Management',
    LIS658: 'Knowledge Management'
  }
}

// accessing the object
console.log(professor);
// accessing part of the object
console.log(professor.firstName);
// accessing the nested object
console.log(professor.courseNames);
// accessing part of the nested object
console.log(professor.courseNames.ICT418);
// accessing multiple parts
console.log(professor.courseNames.ICT418,professor.courseNames.ICT420);

console.log(`Dr. ${professor.lastName} teaches ${professor.courses[0]}.`);
console.log(`${professor.courses[0]} is about ${professor.courseNames.ICT418}.`);

// extracting items from the object
const { lastName, rank, courseNames: { LIS658 }} = professor;
console.log(lastName);
console.log(LIS658);

professor.email = 'sean.burns@uky.edu';
console.log(professor);

// convert professor object to JSON
const professorJSON = JSON.stringify(professor);
console.log(professorJSON);
