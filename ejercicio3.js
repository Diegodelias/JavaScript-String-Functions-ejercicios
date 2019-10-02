/*

Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia".

Save your JavaScript file and reload the page. Make sure you see the correct output.  If not, investigate and fix.
*/

function FirstToUpper(texto){
    var palabrasTexto = texto.toLowerCase().split(' ');

    for (var i = 0; i < palabrasTexto.length; i++){
            palabrasTexto[i]= palabrasTexto[i].charAt(0).toUpperCase() + palabrasTexto[i].substring(1); /**cambia primer letra de la palabra a mayuscula y le concatena el resto */

    }

    return palabrasTexto.join(' ');

}


console.log(FirstToUpper("prince of persia"));