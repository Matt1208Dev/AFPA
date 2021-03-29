
// DECLARATION DES VARIABLES

var yourName = document.getElementById("yourName"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR DU CHAMP NAME
var nameReg = "^[a-zA-Zéèàêëäï\\-\\ ]{1,50}$"; // REGEX POUR VERIFICATION DE NAME, SURNAME ET TOWN
var surname = document.getElementById("surname");  // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR DU CHAMP SURNAME
var sexf = document.getElementById("sexf");  // RECOIT LA VALEUR DE L UTILISATEUR DU CHAMP SEXF
var sexm = document.getElementById("sexm");  // RECOIT LA VALEUR DE L UTILISATEUR DU CHAMP SEXM
var dateOfBirth = document.getElementById("dateOfBirth");  // RECOIT LA VALEUR DE L UTILISATEUR DU CHAMP DATEOFBIRTH
var diff; // SERT A LA VERIFICATION DU CHAMP DATEOFBIRTH
var majeur; // // SERT A LA VERIFICATION DU CHAMP DATEOFBIRTH
var postalcode = document.getElementById("postalcode"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR DU CHAMP POSTALCODE
var postalcodeReg = "^[0-9]{5}$"; // REGEX POUR VERIFICATION DU CODE POSTAL
var address = document.getElementById("address"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR DU CHAMP ADDRESS
var addressReg = "^[0-9]*[a-zA-Z0-9éèàêëäï\\-\\ ]{1,50}$"; // REGEX POUR VERIFICATION DE L ADRESSE
var town = document.getElementById("town"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR DU CHAMP TOWN
var email = document.getElementById("email"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR DU CHAMP EMAIL
var emailReg = "^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$"; // REGEX POUR VERIFICATION DE L EMAIL
var select = document.getElementById("subject-select"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR DU SELECT
var question = document.getElementById("question"); // RECOIT LA VALEUR SAISIE PAR L UTILISATEUR DU CHAMP QUESTION
var accept = document.getElementById("accept"); // RECOIT LA VALEUR DE L UTILISATEUR DU CHAMP ACCEPT
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
    if (!yourName.value.match(nameReg)) // CONTROLE DE SAISIE
    {
        yourNameError = "*Vous n'avez pas saisi votre nom !"; // CONTENU DU MESSAGE D ERREUR
        error = yourNameError;
        document.getElementById("your-name-error").innerHTML = yourNameError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    else
    {
        document.getElementById("your-name-error").innerHTML = "";
    }
    // FIN VERIF CHAMP NAME

    // VERIF CHAMP SURNAME
    if (!surname.value.match(nameReg)) // CONTROLE DE SAISIE
    {
        surnameError = "*Vous n'avez pas saisi votre prénom !"; // CONTENU DU MESSAGE D ERREUR
        error = surnameError;
        document.getElementById("surname-error").innerHTML = surnameError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    else
    {
        document.getElementById("surname-error").innerHTML = "";
    }
    // FIN VERIF CHAMP SURNAME

    //VERIF CHAMP SEX
    if ((form.sexf.checked == false) && (form.sexm.checked == false)) // CONTROLE DE SAISIE
    {
        sexError = "*Merci de cocher une case !"; // CONTENU DU MESSAGE D ERREUR
        error = sexError;
        document.getElementById("sex-error").innerHTML = sexError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    else
    {
        document.getElementById("sex-error").innerHTML = "";
    }
    // FIN VERIF CHAMP SEX

    // VERIF UTILISATEUR MAJEUR
    if (dateOfBirth.value == 0) // CONTROLE DE SAISIE
    {
        dateOfBirthError = "*Vous devez entrer votre date de naissance !"; // CONTENU DU MESSAGE D ERREUR
        error = dateOfBirthError;
        document.getElementById("date-of-birth-error").innerHTML = dateOfBirthError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    diff = Date.now() - new Date(dateOfBirth.value).getTime();  // VERIFICATION DE L AGE DE L UTILISATEUR
    majeur = (18*365*24*3600*1000);
    if (diff < majeur)
    {
        dateOfBirthError = "*Vous devez être majeur pour envoyer ce formulaire !"; // CONTENU DU MESSAGE D ERREUR
        error = dateOfBirthError;
        document.getElementById("date-of-birth-error").innerHTML = dateOfBirthError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    else
    {
        document.getElementById("date-of-birth-error").innerHTML = "";
    }
    // FIN VERIF UTILISATEUR MAJEUR

    // VERIF CHAMP POSTALCODE
    if (!postalcode.value.match(postalcodeReg)) // CONTROLE DE SAISIE
    {
        postalcodeError = "*Veuillez saisir un code postal à 5 chiffres"; // CONTENU DU MESSAGE D ERREUR
        error = postalcodeError;
        document.getElementById("postalcode-error").innerHTML = postalcodeError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    else
    {
        document.getElementById("postalcode-error").innerHTML = "";
    }
    // FIN VERIF CHAMP POSTALCODE
    
    // VERIF CHAMP ADDRESS
    if (!postalcode.value.match(addressReg)) // CONTROLE DE SAISIE
    {
        addressError = "*Veuillez saisir une adresse"; // CONTENU DU MESSAGE D ERREUR
        error = addressError;
        document.getElementById("address-error").innerHTML = addressError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    else
    {
        document.getElementById("address-error").innerHTML = "";
    }
    // FIN VERIF CHAMP ADDRESS

    // VERIF CHAMP TOWN
    if (!town.value.match(nameReg)) // CONTROLE DE SAISIE
    {
        townError = "*Veuillez saisir la ville"; // CONTENU DU MESSAGE D ERREUR
        error = townError;
        document.getElementById("town-error").innerHTML = townError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    else
    {
        document.getElementById("town-error").innerHTML = "";
    }
    // FIN VERIF CHAMP TOWN

    // VERIF CHAMP EMAIL
    if (!email.value.match(emailReg)) // CONTROLE DE SAISIE
    {
        emailError = "*Veuillez entrer un email valide"; // CONTENU DU MESSAGE D ERREUR
        error = emailError;
        document.getElementById("email-error").innerHTML = emailError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    else
    {
        document.getElementById("email-error").innerHTML = "";
    }
    // FIN VERIF CHAMP EMAIL

    // VERIF CHAMP SELECT 
    if (select.value == "")  // CONTROLE DE SAISIE
    {
        selectError = "*La sélection d'un sujet est requis"; // CONTENU DU MESSAGE D ERREUR
        error = selectError;
        document.getElementById("select-error").innerHTML = selectError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    else
    {
        document.getElementById("select-error").innerHTML = "";
    }
    // FIN VERIF CHAMP SELECT

    // VERIF CHAMP QUESTION
    if (question.value == "")  // CONTROLE DE SAISIE
    {
        questionError = "*Veuillez saisir votre question"; // CONTENU DU MESSAGE D ERREUR
        error = questionError;
        document.getElementById("question-error").innerHTML = questionError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    else
    {
        document.getElementById("question-error").innerHTML = "";
    }
    // FIN VERIF CHAMP QUESTION

    // VERIF CHAMP ACCEPT
    if (form.accept.checked == false)  // CONTROLE DE SAISIE
    {
        
        acceptError = "*Vous devez accepter le traitement informatique pour envoyer ce formulaire"; // CONTENU DU MESSAGE D ERREUR
        error = acceptError;
        document.getElementById("accept-error").innerHTML = acceptError; // AFFICHAGE DU MESSAGE D ERREUR
    }
    else
    {
        document.getElementById("accept-error").innerHTML = "";
    }
    // FIN VERIF CHAMP ACCEPT
    
    // BLOCAGE / VALIDATION DE L ENVOI DU FORMULAIRE
    if (error)  // CONTROLE DE SAISIE
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