
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


//  DEBUT FONCTION DE VERIFICATION DU FORMULAIRE
document.getElementById("envoi").addEventListener("click", function() {

    // REECRITURE DU CHOIX SELECT DANS TEXTAREA AFFILIEE
    environmentSelect.addEventListener("change", updateValue); 

    function updateValue() 
    {
        envTextarea.textContent = environmentSelect.value;
    } 
    // FIN REECRITURE DU CHOIX SELECT DANS TEXTAREA AFFILIEE        

    // VERIF CHAMP SOCIETE
    if (!societe.value) 
    {
        alert("Entrez le nom de la société s.v.p !");
        
    }
    // FIN VERIF CHAMP SOCIETE

    // VERIF CHAMP PERSONNE
    if (!personne.value) 
    {
        alert("Entrez le nom de la personne à contacter s.v.p !");
        
    }
    // FIN VERIF CHAMP PERSONNE

    // VERIF CHAMP ADRESSE
    if (!address.value) 
    {
        alert("Entrez l'adresse de l'entreprise s.v.p !");
        
    }
    // FIN VERIF CHAMP ADRESSE

      // VERIF CHAMP CODE POSTAL
    if (postalCode.value == "" )
    {
        alert("Entrez le code postal s.v.p");
    }
    if(!postalCode.value.match(regexCode)){
        alert("Votre code postal doit comporter 5 chiffres");
    }
    // FIN VERIF CHAMP CODE POSTAL

    // VERIF CHAMP VILLE
    if (!city.value) 
    {
        alert("Entrez la ville s.v.p !");
        
    }
    // VERIF CHAMP VILLE

    // VERIF CHAMP EMAIL
    if (!email.value) 
    {
        alert("Entrez un email valide s.v.p !");
        
    }
    // FIN VERIF CHAMP EMAIL

    // VERIF CHAMP TELEPHONE   
    if (phoneNumber.value == "" || phoneNumber.value.length < 10)
    {
        alert("Entrez un numéro de téléphone à 10 chiffres s.v.p");
    }
    // FIN VERIF CHAMP TELEPHONE

    return false;

    
});

