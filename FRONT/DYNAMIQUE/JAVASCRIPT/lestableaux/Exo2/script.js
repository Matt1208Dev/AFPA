
// fonction getInteger

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
//getInteger() ;

// fonction initTab

function initTab(tableau)
{
    tableLength = parseInt(window.prompt("saisissez le nombre d\'éléments que va contenir votre tableau :")) ;
    tableau = new Array(tableLength) ;
    tableau.splice(0, tableLength);
    return tableau
}
// initTab();

// fonction saisieTab

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
saisieTab();
console.log(votreTableau) ;

// fonction afficheTab

function afficheTab()
{
    
    alert("votre tableau : " + votreTableau) ;
}
afficheTab();

// fonction rechercheTab

function rechercheTab()
{
    var search = getInteger() ;
    console.log(search) ;
    console.log(votreTableau);
    //alert(votreTableau.find(search));
    alert(votreTableau[search]) ;
}
rechercheTab();

// fonction infoTab


    function infoTabMax()
    {
        var max=0;
    for (i=0;i<votreTableau.length;i++)
    {
         if(votreTableau[i]>max) 
        {
             max=votreTableau[i];
        }
    return max;
    }
    max=infoTabMax(votreTableau);
    console.log(max);
    }

    infoTabMax() ;
