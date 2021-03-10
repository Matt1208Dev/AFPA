
// DECLARATION DES VARIABLES

var societe = document.getElementById("societe");
var personne = document.getElementById("personne");
var address = document.getElementById("address");
var postalCode = document.getElementById("postalCode");
var resultPostalCodeCheck;
var city = document.getElementById("city");
var email = document.getElementById("email");
var phoneNumber = document.getElementById("phoneNumber");
var environmentSelect = document.getElementById("environmentSelect");
var environmentChoice;
var envTextarea = document.getElementById("envTextarea");
var regexCode = "^[0-9]{5}$";
var regexMail = "^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$";
var regexPhone = "^0[1-68]([-. ]?[0-9]{2}){4}$";
var reinitForm = document.getElementById("reset");
var validForm = true;


//  DEBUT FONCTION DE VERIFICATION DU FORMULAIRE
document.getElementById("envoi").addEventListener("click", function VeriForm(e) {

    // VERIF CHAMP SOCIETE
    if (!societe.value) 
    {
        alert("Entrez le nom de la société s.v.p !");
        validForm = false;
        
    }
    // FIN VERIF CHAMP SOCIETE

    // VERIF CHAMP PERSONNE
    if (!personne.value) 
    {
        alert("Entrez le nom de la personne à contacter s.v.p !");
        validForm = false;
    }
    // FIN VERIF CHAMP PERSONNE

    // VERIF CHAMP ADRESSE
    if (!address.value) 
    {
        alert("Entrez l'adresse de l'entreprise s.v.p !");
        validForm = false;
    }
    // FIN VERIF CHAMP ADRESSE

    // VERIF CHAMP CODE POSTAL
    if (postalCode.value == "" )
    {
        alert("Entrez le code postal s.v.p");
        validForm = false;
    }
    if(!postalCode.value.match(regexCode)){
        alert("Votre code postal doit comporter 5 chiffres");
        validForm = false;
    }
    // FIN VERIF CHAMP CODE POSTAL

    // VERIF CHAMP VILLE
    if (!city.value) 
    {
        alert("Entrez la ville s.v.p !");
        validForm = false;
        
    }
    // VERIF CHAMP VILLE

    // VERIF CHAMP EMAIL
    if (!email.value.match(regexCode))
    {
        alert("Entrez un email valide s.v.p !");
        validForm = false;
    }
    // FIN VERIF CHAMP EMAIL

    // VERIF CHAMP TELEPHONE   
    if (!phoneNumber.value.match(regexCode))
    {
        alert("Entrez un numéro de téléphone à 10 chiffres s.v.p");
        validForm = false;
    }
    // FIN VERIF CHAMP TELEPHONE
    
    // BLOCAGE / VALIDATION DE L ENVOI DU FORMULAIRE
    if (validForm == false)
    {
        e.preventDefault();
        alert("Formulaire bloqué");
        return false;
    }
    else 
    {
        alert("Formulaire envoyé");
    }
    // FIN BLOCAGE / VALIDATION DE L ENVOI DU FORMULAIRE 

});

// FIN FONCTION DE VERIFICATION DU FORMULAIRE

// REECRITURE DU CHOIX SELECT DANS TEXTAREA AFFILIEE
environmentSelect.addEventListener("change", updateValue);

function updateValue() 
{
    envTextarea.textContent = environmentSelect.value;
} 
// FIN REECRITURE DU CHOIX SELECT DANS TEXTAREA AFFILIEE

// EFFACEMENT DU TEXTAREA AU CLICK DU BOUTON RESET
reinitForm.addEventListener("click", resetValue);

function resetValue() 
    {
        envTextarea.textContent = "";
    } 
// FIN EFFACEMENT DU TEXTAREA AU CLICK DU BOUTON RESET


