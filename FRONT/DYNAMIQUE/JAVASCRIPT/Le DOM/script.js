//   Exercice Objets Natifs

var number ;
var array = [];
var arrayLength = 0
initTab();

function initTab()
{
    number = parseInt(window.prompt("entrez une valeur numérique :"));
    array.push(number);
    arrayLength++ ;

    while (isNaN(number))
    {
        number = parseInt(window.prompt("entrez une valeur numérique :"));
    }

    while (number !== 0)
    {
        number = parseInt(window.prompt("entrez une valeur numérique :"));
        array.push(number);
        arrayLength++ ;

    }

}
alert(array);
alert(arrayLength);