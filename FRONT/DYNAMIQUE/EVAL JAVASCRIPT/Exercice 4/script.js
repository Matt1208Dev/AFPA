
// DECLARATION DES VARIABLES

var pU;
var qteCom;
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
    pU = window.prompt("Saisir le prix de l'article :");
    parseFloat(pU);
    console.log(pU);
    qteCom = window.prompt("Saisir la quantité :");
    parseInt(qteCom);
    console.log(qteCom);
    tot = pU * qteCom;
    console.log(tot);

    if (tot > 100 && tot <= 200)
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

    totWithoutShippingCost = tot - (tot * rem);

    if (rem === 0)
    {
        totWithoutShippingCost = tot;   
    }

        console.log(totWithoutShippingCost);
    
    if (totWithoutShippingCost > 500)
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

    totWithShippingCost = totWithoutShippingCost + shippingCost;
    totWithShippingCost = Math.round(totWithShippingCost * 100) / 100
    document.write("Montant de votre article : " + pU + "€<br>" + "Quantité commandée : " + qteCom + " PC<br>" + "Remise supplémentaire: " + rem * 100 + "%<br>" + " Frais de transport : " + shippingCost + "€<br>" + "Total à payer : " + totWithShippingCost + "€")
    

}

// FIN FONCTION sell()

sell();




//   COMMENTAIRES A METTRE ET REVERIFIER TOUS LES TESTS ET FAIRE VERIFICATIONS DE SAISIES