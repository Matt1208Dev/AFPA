
// DECLARATION DES VARIABLES

var pU;
var qteCom;
var pReg = "^[0-9]+[\.,]*[0-9]{0,2}$";
var qteComReg = "^[0-9]+$";
var PaP;
var rem;
var totRem;
var port;
var tot;
var totWithoutShippingCost;
var shippingCost;

// DEBUT FONCTION sell
function sell(pU, qteCom)
{
    pU = window.prompt("Saisir le prix de l'article :"); // DEMANDE DE VALEUR, QUANTITE ET CALCUL DU TOTAL HORS REMISE
    while (!pU.match(pReg))
    {
        pU = window.prompt("Saisir le prix de l'article au format requis (ex 5, 5.00 ou 5,00) :");
    }
    parseFloat(pU);
    console.log(pU);
    qteCom = window.prompt("Saisir la quantité :");
    while (!qteCom.match(qteComReg))
    {
        qteCom = window.prompt("Saisir la quantité en nombre entier (ex : 1, 50, 100) :");
    }
    parseInt(qteCom);
    console.log(qteCom);
    tot = pU * qteCom;
    console.log(tot);  // FIN  DEMANDE DE VALEUR, QUANTITE ET CALCUL DU TOTAL HORS REMISE

    if (tot > 100 && tot <= 200)  // CALCUL REMISE
    {
        rem = 0.05;
    }
    else if (tot > 200)
    {
        rem = 0.1;
    }
    else
    {
        rem = 0;
        alert("Le montant total de la commande ne donne pas lieu à une remise supplémentaire")
    }
     // FIN CALCUL REMISE

    totWithoutShippingCost = tot - (tot * rem); // CALCUL TOTAL AVEC REMISE

    if (rem === 0)
    {
        totWithoutShippingCost = tot;   
    }

        console.log(totWithoutShippingCost);  // FIN CALCUL TOTAL AVEC REMISE
    
    if (totWithoutShippingCost > 500) // CALCUL FRAIS DE TRANSPORT
    {
        shippingCost = 0
        alert("Le montant de votre commande vous fait bénéficier de la livraison gratuite !")
    } 
    else 
    {
        shippingCost = totWithoutShippingCost * 0.02;
        
        if (shippingCost < 6 && shippingCost != 0)
        {
            shippingCost = 6;
        }
        else
        {
            shippingCost = Math.round(shippingCost * 100) / 100;
        }
    }
        // FIN CALCUL FRAIS DE TRANSPORT

    totWithShippingCost = totWithoutShippingCost + shippingCost; // CALCUL DU TOTAL A PAYE + ECRITURE DES RESULTATS A L ECRAN   
    totWithShippingCost = Math.round(totWithShippingCost * 100) / 100
    document.write("Montant de votre article : " + pU + " €<br>" + "Quantité commandée : " + qteCom + " PC<br>" + "Remise supplémentaire: " + rem * 100 + " %<br>" +"Total après remise : " + totWithoutShippingCost + " €<br>" + " Frais de transport : " + shippingCost + " €<br>" + "Total à payer : " + totWithShippingCost + " €")
        // FIN CALCUL DU TOTAL A PAYE + ECRITURE DES RESULTATS A L ECRAN

}

// FIN FONCTION sell()

sell();

// FIN SCRIPT



