/**
 * 
 * Exercise 1: Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.

Save your JavaScript file and reload the page. Make sure you see the correct output.  If not, investigate and fix.
 * 
 * 
 */

 function ReverseNumber(num){
    var numero = num.toString();
    numero = numero.split(""); 
    numero = numero.reverse();
    numero = numero.join("");
    return numero;}

 console.log(ReverseNumber(32443));