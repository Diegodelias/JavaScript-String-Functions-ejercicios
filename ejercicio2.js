/*

Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'.  Punctuation and numbers aren't passed in the string.

Save your JavaScript file and reload the page. Make sure you see the correct output.  If not, investigate and fix.

-convertir string a array
-hacer sort del array

*/

function alphabeticalOrder(palabra){
    
    palabra = palabra.split(""); 
    palabra = palabra.sort();
    palabra = palabra.join("");
    return palabra;}

 console.log(alphabeticalOrder('webmaster'));
