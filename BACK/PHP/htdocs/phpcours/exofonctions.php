<?php

function calculator($n1,$operator,$n2)
{
    $n1;
    $n2;
    $operator;
    if ($operator == '+')
    {
        $resultat = $n1 + $n2;
    }elseif ($operator == 'x')
    {
        $resultat = $n1 * $n2;
    }elseif ($operator == '/')
    {
        $resultat = $n1 / $n2;
    }elseif ($operator == '-')
    {
        $resultat = $n1 - $n2;
    }
    return $resultat;
}
echo calculator(10,'/',20);
?>