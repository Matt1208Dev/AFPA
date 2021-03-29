<?php
if (isset($_FILES['img-aramis']) AND $_FILES['img-aramis']['error'] == 0)
{
    $infosfichier = pathinfo($_FILES['img-aramis']['name']);
    $extension_upload = $infosfichier['extension'];
    $extensions_autorisees = array('jpg', 'jpeg', 'gif', 'png');
    if (in_array($extension_upload, $extensions_autorisees))
    {
        $prod_name = 'pro_id' ;
        move_uploaded_file($_FILES['img-aramis']['tmp_name'], 'images/' . $prod_name . '.' . $extension_upload);
        echo "L'envoi a bien été effectué !";
    }
}
?>