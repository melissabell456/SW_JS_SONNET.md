// >>STRING METHODS
// const phrase = "the quick brown fox"
// console.log(phrase.indexOf("t")) to provide index value where t is 
// console.log(phrase.charAt(23)) to provide what character is at that index
// console.log(phrase.replace("quick", "slow")) to replace quick with slow 
// console.log(phrase.replace(/t/g, "replace with this")) to find all the t's globally with ""

// console.log('${"Ho ".repeat(3)}, Merry Christmas') repeats Ho 3x
// console.log("Ho ".repeat(3) + "Merry Christmas") same, old way of making it repeat Ho 3x

// turn a string into an array: 
// let wordArr = phrase2.split('') <-- takes every character and makes it it's own element in an array
// phrase2.split(" ") <-- each word is it's own element in an array 

// >>ARRAY METHODS
// wordArr.reverse() to reverse order 
// wordArr.join() <-- turns array into string, what you put in the () is what will replace the commas from the array so, " " or ' ' or - etc

// .Take the contents of the sonnet div and place it in a variable.
// .Find and output the starting position of the word "orphans".
// .Output the number of characters in the sonnet.
// .Replace the first occurance of the string "winter" with "yuletide".
// Replace all occurances of the string "the" with "a large".
// Set the content of the sonnet div with the new string.

let lyrics = document.getElementById("sonnet").innerHTML;
let lyricsArray = lyrics.split(" ");
console.log(lyrics.indexOf("orphan"));
console.log(lyrics.length);
console.log(lyrics.replace("winter", "yuletide"));
console.log(lyrics.replace(/the/g, "a large"));
console.log(lyrics.innerHTML = "replacement");



