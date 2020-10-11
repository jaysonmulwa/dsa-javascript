var str = "Java Script Object Notation";
var matches = str.match(/\b(\w)/g); // ['J','S','O','N']
var acronym = matches.join(''); // JSON

console.log(acronym)
