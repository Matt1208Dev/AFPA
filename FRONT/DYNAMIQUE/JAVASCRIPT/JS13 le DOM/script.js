//   EXERCICE OBJETS NATIFS JS13

// INITIALISATION DES VARIABLES
var number ;
var array = [];
var arrayLength = 0;
var somme = 0;
var moyenne = 0;
initTab();

// FONCTION D INITIALISATION D UN TABLEAU DE VALEURS PAR L UTILISATEUR

function initTab()
{
    number = parseInt(window.prompt("entrez une valeur numérique :"));      //  BOITE DE DIALOGUE DEMANDANT DE SAISIR UNE VALEUR
    array.push(number);
    arrayLength++ ;
    somme = somme + number;

    while (isNaN(number))
    {
        number = parseInt(window.prompt("entrez une valeur numérique :"));  //  BOUCLE POUR RESSAISIE SI L ENTREE N EST PAS UN NOMBRE
    }

    while (number !== 0)
    {
        number = parseInt(window.prompt("entrez une valeur numérique :"));  //  BOUCLE  OUVRANT BOITE DE DIALOGUE DEMANDANT DE SAISIR UNE VALEUR JUSQU A L ENTREE DE LA VALEUR 0
        array.push(number); 
        arrayLength++ ;
        somme = somme + number;

    }

    moyenne = somme / arrayLength ;                                         // CALCUL DE LA MOYENNE DES VALEURS DU TABLEAU GENERE

}

alert("tableau obtenu : " + array);                                         // AFFICHAGE DU TABLEAU
alert("nombre total de valeurs dans ce tableau : " + arrayLength);          // AFFICHAGE DU NBOMBRE DE VALEURS ENTREES DANS LE TABLEAU
alert("la somme des valeurs saisies est : " + somme);                       // AFFICHAGE DE LA SOMME DES VALEURS DU TABLEAU
alert("la moyenne des valeurs saisies est : " + moyenne);                   // AFFICHAGE DE LA MOYENNE DES VALEURS TABLEAU