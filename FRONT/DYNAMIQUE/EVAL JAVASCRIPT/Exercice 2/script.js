
// DECLARATION DES VARIABLES

var number; // PARAMETRE DE LA FONCTION
var multiplier = 10 // NOMBRE D OPERATION A EFFECTUER
var result; // STOCKERA LE RESULTAT D UNE MULTIPLICATION
var answer; // STOCKERA LA STRING QUI AFFICHERA LE RESULTAT DE LA FONCTION

// FONCTION TableMultiplication() PERMETTANT L AFFICHAGE D UNE TABLE DE MULTIPLICATION JUSQU'A 10 D'UN CHIFFRE ENTRE EN PARAMETRE
function TableMultiplication(number)
{
    for (i = 1; i < multiplier+1; i++)
    {
        result = i * number;
        answer = (i + " x " + number + " = " + result + "<br>");
        document.write(answer);
    }
}
// FIN FONCTION TableMultiplication()

TableMultiplication(7);

// FIN SCRIPT