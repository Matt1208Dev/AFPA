
// fonction getInteger

var  votreTableau;
var somme = 0;
var tableLength;

saisieTab();
afficheTab();
rechercheTab();
infoTab();

function infoTab()     
{         
    max = Math.max([0], [i]);         
    for (i = 0; i < tableLength; i++)      
    {         
        somme = somme + votreTableau[i];     
    }   
    alert("la somme "+ somme); 
    var moyenne = 0;
    moyenne = somme / tableLength;
    alert("la moyenne est " + moyenne); 
}

function initTab(tableau)
{
    tableLength = parseInt(window.prompt("saisissez le nombre d\'éléments que va contenir votre tableau :")) ;
    tableau = new Array(tableLength) ;
    tableau.splice(0, tableLength);
    return tableau
}

function saisieTab(content2)
{
    votreTableau = initTab() ;
    var content2 = "" ;
    for (i=0 ; i<tableLength ; i++) 
    {
        content2 = parseInt(window.prompt("saisissez l\'élément à ajouter au tableau")) ;
        votreTableau.push(content2) ;
    }
    return content2 
}

function rechercheTab()
{
    var index = parseInt(window.prompt("saisissez l'index souhaité :"));
    var search = votreTableau[index];
    //alert(votreTableau.find(search));
    alert("la valeur recherchée est "+ search) ;
}

function getInteger(content)
{
    content = parseInt(window.prompt("saisir un nombre :")) ;
    while (isNaN(content))
    {
        content = parseInt(window.prompt("saisir un nombre :")) ;
        
    }
    //alert("votre chiffre : " + content);
    return content
}

function afficheTab()
{
    
    alert("votre tableau : " + votreTableau) ;
}

//getInteger() ;

// fonction initTab




// initTab();

// fonction saisieTab



// fonction afficheTab


// fonction rechercheTab


// fonction infoTab

/*
    function infoTabMax(votreTableau, tableLength, somme)
    {
        var max=0;
        var somme = 0;
    for (i = 0 ; i < tableLength ; i++)
    {
         if(votreTableau[i] >= max) 
        {
             max = votreTableau[i];
             somme = somme + votreTableau[i];
             console.log(max);
        }
        
        var moyenne = 0;
        moyenne = somme / tableLength;
        
    }
        console.log("valeur la plus haute : " + max);
        console.log("Moyenne : " + moyenne);
    }

    infoTabMax() ;
*/
    

