<?php

@$name = $_POST['name'];
@$surname = $_POST['surname'];
@$sex = $_POST['sex'];
@$dateOfBirth = $_POST['dateOfBirth'];
@$postalcode = $_POST['postalcode'];
@$address = $_POST['address'];
@$town = $_POST['town'];
@$email = $_POST['email'];
@$subject = $_POST['subject'];
@$question = $_POST['question'];
@$accept = $_POST['accept'];

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $counterror = 0;
    if ((!isset($name))||(!preg_match('/[a-zA-Zéèàêëäï\\-\\ ]{1,50}/', $name)))
    {
        $nameError = 'Veuillez saisir votre nom.';
        $counterror++;
    }
    
    if ((!isset($surname))||(!preg_match('/[a-zA-Zéèàêëäï\\-\\ ]{1,50}/', $surname)))
    {
        $surnameError = 'Veuillez saisir votre prénom.';
        $counterror++;
    }
    
    if ((!isset($sex)))
    {
        $sexError = 'Veuillez cocher un champ.';
        $counterror++;
    }
    
    if ((!isset($dateOfBirth)) || $dateOfBirth=='')
    {
        $dateOfBirthError = 'Veuillez sélectionner une date.';
        $counterror++;
    }
    
    if ((!isset($postalcode)) || (!preg_match('/[0-9]{5}/', $postalcode)))
    {
        $postalcodeError = 'Veuillez saisir un code postal à 5 caractères.';
        $counterror++;
    }
    
    if ((!isset($address))||(!preg_match('/[0-9]*[a-zA-Z0-9éèàêëäï\\-\\ ]{1,50}/', $address)))
    {
        $addressError = 'Veuillez saisir une adresse.';
        $counterror++;
    }
    
    if ((!isset($town))||(!preg_match('/[a-zA-Zéèàêëäï\\-\\ ]{1,50}/', $town)))
    {
        $townError = 'Veuillez saisir la ville.';
        $counterror++;
    }
    
    if ((!isset($email))||(!preg_match('/[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}/', $email)))
    {
        $emailError = 'Veuillez saisir un email valide.';
        $counterror++;
    }
    
    if ((!isset($subject)) || $subject=='')
    {
        $subjectError = 'Veuillez sélectionner un choix.';
        $counterror++;
    }
    
    if ((!isset($question)) || $question=='')
    {
        $questionError = 'Veuillez poser votre question.';
        $counterror++;
    }
    
    if (is_null($accept))
    {
        $acceptError = 'Veuillez cocher cette case pour pouvoir envoyer le formulaire.';
        $counterror++;
    }

    if ($counterror == 0)
    {
        header('Location: validformsuccess.php');
    }
    else
    {
        include 'contact.php';
    }
}
?>