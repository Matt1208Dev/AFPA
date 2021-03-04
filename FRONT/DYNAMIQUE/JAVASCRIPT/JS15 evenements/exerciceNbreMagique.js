
// DECLARATION DES VARIABLES

var random = parseInt(Math.random() * 10);
var element = document.getElementById("textBox1-check");
var answer;
console.log(random);


//  FONCTION VERIF 

element.addEventListener("click", function verif()
    {
        answer = document.getElementById("textBox1").value; // RECUPERATION DE LA VALEUR DU CHAMP
        parseInt(answer);                                   // CONVERSION EN NOMBRE ENTIER
        console.log(answer);

        if (answer == random)
        {
            alert("Bravo ! c'est le chiffre recherché.");
        } 

        else if (answer > random) 
        {
            alert("Tu es au-dessus !");
        }

        else if (answer < random)
        {
            alert("Tu est en-dessous !");
        }

    }
    
);