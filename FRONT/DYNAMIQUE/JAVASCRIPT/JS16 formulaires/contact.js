var societe = document.getElementById("societe");
var personne = document.getElementById("personne");
var address = document.getElementById("address");

document.getElementById("sent").addEventListener("submit", function() {

    if (!societe.value) 
    {
        alert("Entrez le nom de la société s.v.p !");
        
    }
    else if (!personne.value) 
    {
        alert("Entrez le nom de la personne à contacter s.v.p !");
        
    }
    else if (!address.value) 
    {
        alert("Entrez l'adresse de l'entreprise s.v.p !");
        
    }
    else if ((!postalCode.value) && (postalCode.value.length != 5)) 
    {
        alert("Entrez un code postal à 5 chiffres s.v.p !");
        
    }
});

// REPRENDRE SUR LE CODE POSTAL, NE PAS OUBLIER DE DECLARER LES VARIABLES ET CHERCHER POURQUOI LA PAGE SE REACTUALISE APRES MESSAGE D ERREUR.