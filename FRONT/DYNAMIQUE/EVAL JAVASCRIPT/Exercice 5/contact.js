
// DECLARATION DES VARIABLES

var yourName = document.getElementById("yourName"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR POUR LE CHAMP NAME
var nameReg = "^[a-zA-Zéèàêëäï\\-\\ ]{1,50}$"; // REGEX POUR VERIFICATION DE NAME, SURNAME ET TOWN
var surname = document.getElementById("surname");  // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR POUR LE CHAMP SURNAME
var sexf = document.getElementById("sexf");  // RECOIT LA VALEUR DE L UTILISATEUR POUR LE CHAMP SEXF
var sexm = document.getElementById("sexm");  // RECOIT LA VALEUR DE L UTILISATEUR POUR LE CHAMP SEXM
var postalcode = document.getElementById("postalcode"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR POUR LE CHAMP POSTALCODE
var postalcodeReg = "^[0-9]{5}$"; // REGEX POUR VERIFICATION DU CODE POSTAL
var address = document.getElementById("address"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR POUR LE CHAMP ADDRESS
var addressReg = "^[0-9]*[a-zA-Z0-9éèàêëäï\\-\\ ]{1,50}$"; // REGEX POUR VERIFICATION DE L ADRESSE
var town = document.getElementById("town"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR POUR LE CHAMP TOWN
var email = document.getElementById("email"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR POUR LE CHAMP EMAIL
var emailReg = "^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$"; // REGEX POUR VERIFICATION DE L EMAIL
var select = document.getElementById("subject-select"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR POUR LE SELECT
var question = document.getElementById("question"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR POUR LE CHAMP QUESTION
var accept = document.getElementById("accept"); // RECOIT LA VALEUR DE L UTILISATEUR POUR LE CHAMP ACCEPT
var error;
var yourNameError;
var surnameError;
var sexError;
var postalcodeError;
var addressError;
var emailError;
var selectError;
var questionError;
var acceptError;


//  DEBUT FONCTION DE VERIFICATION DU FORMULAIRE
document.getElementById("form").addEventListener("submit", function checkForm(e) {
    
    // VERIF CHAMP NAME
    if (!yourName.value.match(nameReg)) // CONDITION DE VERIFICATION
    {
        yourNameError = "*Merci de saisir votre nom !"; // CONTENU DU MESSAGE D ERREUR
        error = yourNameError;
        document.getElementById("your-name-error").innerHTML = yourNameError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    // VERIF CHAMP NAME

    // VERIF CHAMP SURNAME
    if (!surname.value.match(nameReg)) // CONDITION DE VERIFICATION
    {
        surnameError = "*Merci de saisir votre prénom !"; // CONTENU DU MESSAGE D ERREUR
        error = surnameError;
        document.getElementById("surname-error").innerHTML = surnameError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    // VERIF CHAMP SURNAME

    //VERIF CHAMP SEX
    if ((form.sexf.checked == false) && (form.sexm.checked == false)) // CONDITION DE VERIFICATION
    {
        sexError = "*Merci de cocher un bouton !"; // CONTENU DU MESSAGE D ERREUR
        error = sexError;
        document.getElementById("sex-error").innerHTML = sexError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    //VERIF CHAMP SEX

    // VERIF CHAMP POSTALCODE
    if (!postalcode.value.match(postalcodeReg)) // CONDITION DE VERIFICATION
    {
        postalcodeError = "*Veuillez saisir un code postal à 5 chiffres"; // CONTENU DU MESSAGE D ERREUR
        error = postalcodeError;
        document.getElementById("postalcode-error").innerHTML = postalcodeError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    // FIN VERIF CHAMP POSTALCODE
    
    // VERIF CHAMP ADDRESS
    if (!postalcode.value.match(addressReg)) // CONDITION DE VERIFICATION
    {
        addressError = "*Veuillez saisir une adresse"; // CONTENU DU MESSAGE D ERREUR
        error = addressError;
        document.getElementById("address-error").innerHTML = addressError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    // FIN VERIF CHAMP ADDRESS

    // VERIF CHAMP TOWN
    if (!town.value.match(nameReg)) // CONDITION DE VERIFICATION
    {
        townError = "*Veuillez saisir la ville"; // CONTENU DU MESSAGE D ERREUR
        error = townError;
        document.getElementById("town-error").innerHTML = townError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    // FIN VERIF CHAMP TOWN

    // VERIF CHAMP EMAIL
    if (!email.value.match(emailReg)) // CONDITION DE VERIFICATION
    {
        emailError = "*Veuillez un email valide"; // CONTENU DU MESSAGE D ERREUR
        error = emailError;
        document.getElementById("email-error").innerHTML = emailError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    // FIN VERIF CHAMP EMAIL

    // VERIF CHAMP SELECT 
    if (select.value == "")  // CONDITION DE VERIFICATION
    {
        selectError = "*La sélection d'un sujet est requis"; // CONTENU DU MESSAGE D ERREUR
        error = selectError;
        document.getElementById("select-error").innerHTML = selectError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    // FIN VERIF CHAMP SELECT

    // VERIF CHAMP QUESTION
    if (question.value == "")  // CONDITION DE VERIFICATION
    {
        questionError = "*Veuillez saisir votre question"; // CONTENU DU MESSAGE D ERREUR
        error = questionError;
        document.getElementById("question-error").innerHTML = questionError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    // FIN VERIF CHAMP QUESTION

    // VERIF CHAMP ACCEPT
    if (form.accept.checked == false)  // CONDITION DE VERIFICATION
    {
        
        acceptError = "*Vous devez cocher cette case pour envoyer le formulaire"; // CONTENU DU MESSAGE D ERREUR
        error = acceptError;
        document.getElementById("accept-error").innerHTML = acceptError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    // FIN VERIF CHAMP ACCEPT
    
    // BLOCAGE / VALIDATION DE L ENVOI DU FORMULAIRE
    if (error)  // CONDITION DE VERIFICATION
    {
        e.preventDefault(); // BLOCAGE DU RECHARGEMENT DE LA PAGE
        
        return false;
    }
    else 
    {
        alert("Formulaire envoyé"); // MESSAGE DE VALIDATION D ENVOI DU FORMULAIRE
    }
    
    // FIN BLOCAGE / VALIDATION DE L ENVOI DU FORMULAIRE

}
);
//  FIN FONCTION DE VERIFICATION DU FORMULAIRE

// FIN SCRIPT