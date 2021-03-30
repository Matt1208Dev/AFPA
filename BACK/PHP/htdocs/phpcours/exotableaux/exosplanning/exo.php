<?php

// ARRAY DE DEPART
$a = array("19001" => array("Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "", "", "Centre", "Centre", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Validation", "Validation"), 
     "19002" => array("Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Validation", ""), 
     "19003" => array("", "", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "", "", "Validation") 
    );

foreach ($a as $key => $values) // AFFICHAGE DU TABLEAU
{
    echo '<b>Groupe de stagiaires ' . $key . '</b><br><br>';
    foreach ($values as $week => $place)
    {
        echo 'Présence : ' . $place . '<br>';
    }
    echo '<br>';
}

// EXERCICE 1

$stagiaires_19002 = $a['19002'];
$validation = array_search('Validation', $stagiaires_19002);
echo 'Exercice 1<br>Le groupe 19002 effectuera sa semaine de validation en semaine ' . ($validation+1) . '.<br>';

// EXERCICE 2

$stagiaires_19001 = $a['19001'];
$fin_stage = max(array_keys($stagiaires_19001, 'Stage'))+1;
echo '<br>Exercice 2<br>la dernière semaine de stage du groupe 19001 interviendra en semaine ' . $fin_stage . '.<br>';

// EXERCICE 3 

echo '<br>Exercice 3<br>';
print_r(array_keys($a));

// EXERCICE 4

$stagiaires_19003 = $a['19003'];
$duree_stage = count(array_keys($stagiaires_19003, 'Stage'));
echo '<br><br>Exercice 4<br>Le stage du groupe 19003 dure ' . $duree_stage . ' semaines.';

?>