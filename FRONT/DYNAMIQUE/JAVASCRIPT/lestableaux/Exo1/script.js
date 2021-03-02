var tableLength = parseInt(window.prompt("saisissez le nombre d\'éléments que va contenir votre tableau :")) ;
var tableau = new Array(tableLength) ;
tableau.splice(0, tableLength);

var content = "" ;
for (i=0 ; i<tableLength ; i++) 
{
    content = window.prompt("saisissez l\'élément à ajouter au tableau") ;
    tableau.push(content) ;
}

alert("votre tableau : " + tableau.join(", "));
