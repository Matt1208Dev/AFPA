<?php
$tableau = array(
   "a" => "Lundi",
   "b" => "Mardi",
   "c" => "Mercredi",
   "d" => "Jeudi",
   "e" => "Vendredi"
); 
arsort($tableau);

foreach($tableau as $cle => $valeur) 
    { 
       echo $cle ." : ".$valeur."<br>"; 
    }

    $tableau = array("Lundi","Mardi","Mercredi", "Jeudi", "Vendredi"); 
    $nb = count($tableau); 
    echo"Le tableau contient ".$nb." éléments."; 

    $input = array("red", "green", "blue", "yellow");
array_splice($input, 1, -1);
var_dump($input);
print_r($input);
   ?>