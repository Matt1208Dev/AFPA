
// DECLARATION DES VARIABLES

var array = []; // TABLEAU DES RESULTATS
var age = window.prompt("Saisir un âge :"); // VARIABLE RECEVANT LE/LES AGES SAISI(S) PAR L UTILISATEUR
var young = 0; // COMPTEUR DES JEUNES
var adult = 0; // COMPTEUR DES ADULTES
var old = 0; // COMPTEUR DES VIEUX

parseInt(age);

while (age == "" || isNaN(age))  // VERIFICATION DE LA SAISIE
    {
        age = window.prompt("Saisir un âge en utilisant que des chiffres :"); 
    }

// BOUCLE D ALIMENTATION DU TABLEAU ARRAY ET D INCREMENTATION DES COMPTEURS 

while (age < 100)  // BOUCLE QUI S ARRETE A LA SAISIE D UN AGE SUPERIEUR OU EGAL A 100 ANS.
{
    parseInt(age);
    array.push(age);    // ALIMENTATION DU TABLEAU DE LA NOUVELLE SAISIE
    console.log(array);
    console.log(array.length);

    if (age < 20)  // INCREMENTATION DU COMPTEUR YOUNG SI AGE INFERIEUR A 20 ANS
    {
        young++;
        console.log("jeunes : " + young);
    }
    else if (age >= 20 && age < 40)  // INCREMENTATION DU COMPTEUR ADULTE SI AGE COMPRIS ENTRE 20 ET 40 ANS
    {
        adult++;
        console.log("adultes : " + adult);
    }
    else      // INCREMENTATION DU COMPTEUR OLD SI AGE SUPERIEUR A 40 ANS
    {
        old++;
        console.log("vieux : " + old);
    }

    age = window.prompt("Saisir un âge :");
    
    while (age == "" || isNaN(age))  // VERIFICATION DE LA SAISIE
    {
        age = window.prompt("Saisir un âge en utilisant que des chiffres :"); 
    }

}

if (age >= 100)  // INCREMENTATION DU COMPTEUR OLD SI AGE SUPERIEUR OU EGALE A 100 ANS
    {
        array.push(age);
        old++;
        console.log(array);
        console.log(array.length);
        console.log("vieux : " + old);
    }

alert("il y a :\n\n" + young + " jeune(s),\n" + adult + " adulte(s),\n" + old + " vieux.\nRécapitulatif des saisies :\n" + array); // MESSAGE DONNANT LES RESULTATS

// FIN SCRIPT
