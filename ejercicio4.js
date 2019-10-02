/*

Exercise 4: Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development".

Save your JavaScript file and reload the page. Make sure you see the correct output.  If not, investigate and fix.


hacer split de la frase " "
recorrer cada plabra y contar cantidad de letras

*/

function palabramaslarga(frase) {
  var maslarga = "";
  var palabrasTexto = frase.split(" ");

  for (var i = 0; i < palabrasTexto.length; i++) {
    if (palabrasTexto[i].length > maslarga.length) {
      maslarga = palabrasTexto[i];
    }
  }

  return maslarga;
}


console.log(palabramaslarga("Web Development Tutorial"));