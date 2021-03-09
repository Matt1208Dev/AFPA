
// DECLARATION DES VARIABLES

var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"]; // TABLEAU DE DEPART
var name; // VARIABLE ACCUEILLANT LE PRENOM A RECHERCHER
var ValidTabName; // RECUEILLERA UN INDEX SI PRENOM TROUVE
var nameReg = "^[A-Z][a-zA-Zéèâ]+$";
var ValidName = true;

// DEBUT FONCTION checkName
function checkName(name) 
{
    name = window.prompt("Saisir le prénom recherché :");
    while (!name.match(nameReg)) // VERIFICATION DE LA SAISIE PRENOM
    {
        alert('Veuillez saisir un prénom commençant par une majuscule (les caractères spéciaux "é" et "è" sont acceptés) :')
        name = window.prompt("Saisir le prénom recherché :")
    }

    ValidTabName = tab.indexOf(name); // RECHERCHE DU PRENOM SAISI DANS LE TABLEAU
    console.log(ValidTabName);
    if (ValidTabName !== -1)
    {
        tab.splice(ValidTabName, 1), // SUPPRESSION DU PRENOM TROUVE 
        tab.push(""); // RAJOUT D UN CHAMP VIDE EN FIN DE TABLEAU
        console.log(tab);
        document.write("[ " + tab.join(" - ") + " ]"); // MESSAGE AFFICHANT LE TABLEAU FINAL
    } 
    else // MESSAGE D ERREUR SI PRENOM NON TROUVE
    {
        alert("Le prénom que vous avez saisi n'est pas dans le tableau, essayez-en un autre.");
    }
}
// FIN FONCTION checkName

checkName();

// FIN SCRIPT