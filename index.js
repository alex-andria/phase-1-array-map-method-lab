const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// console.log(tutorials);

// const words = tutorials.map(function(title) {
//   return title.split(" ");
// });

// console.log(words);

// //where it gets weird

// const upperCase = words.map(array) => 

// const updated = words.map(title => title[0].toUpperCase() + " " + title.slice(1));

// //updated.join(" ");
// console.log(updated);

const titleCased = function() {

  return tutorials.map(title => {
      return title.split(' ').map((word) => {
            return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');
  });
}
