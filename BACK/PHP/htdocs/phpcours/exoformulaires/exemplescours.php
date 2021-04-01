<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<!--<form action="script.php" method="post">
   Votre e-mail : <input type="text" name="email">
   <input type="hidden" name="secret" value="valeur cachée">
   <input type="submit" value="Envoyer">
</form> -->$_COOKIE

<form action="script.php" method="post"> 
   Tu utilises internet plutôt le :<br> 
   <input type="checkbox" name="Fjour[]" value="Lundi">Lundi<br>
   <input type="checkbox" name="Fjour[]" value="Mardi">Mardi<br>
   <input type="checkbox" name="Fjour[]" value="Mercredi">Mercredi<br>
   <input type="checkbox" name="Fjour[]" value="Jeudi">Jeudi<br />
   <input type="checkbox" name="Fjour[]" value="Vendredi">Vendredi<br>
   <input type="submit" name="envoyer" value="Envvoyer"> 
</form> 
    
</body>
</html>