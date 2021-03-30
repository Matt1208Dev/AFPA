<?php 
function table($nbr, $nbr2)
{
    $table = '<table border="1">';
    $table .= '<tr>';
    $table .= '<thead>';
    $table .= '<th></th>';

        for ($b=0; $b <= $nbr2 ; $b++) 
        {
            $table .= '<th>'.$b.'</th>';
        }

    $table .= '</tr>';
    $table .= '<thead>';
    $table .= '<tbody>';

    for ($a=0; $a <= $nbr; $a++) 
    {
        $table .= '<tr>';
        $table .= '<td><b>'.$a.'</b></td>';
        for ($b=0; $b <= $nbr2 ; $b++) 
        {
            $table .= '<td>'.$a*$b.'</td>';
        }
        $table .= '</tr>';
    }
    $table .= '</tbody>';
    $table .= '</table>';
    return $table;
}
 
echo table(12, 12);
?>