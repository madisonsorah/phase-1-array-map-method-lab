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

function titleCased() {
  return tutorials.map(capitalizeTitle);
};

function capitalizeTitle(string) {
  // Split up the string into individual words
  let wordsArr = string.split(" ");
  // Go through each word and capitalize the first letter
  let newArray = [];
  
  for (let word of wordsArr) {
    const splitWord = word.split('');
    const firstLetter = splitWord[0].toUpperCase();
    splitWord[0] = firstLetter;
    const joinedWord = splitWord.join('')
    newArray.push(joinedWord); 
  }
  // Put the array of capitalized words back together and return the new string
  return newArray.join(" ");
};






  














