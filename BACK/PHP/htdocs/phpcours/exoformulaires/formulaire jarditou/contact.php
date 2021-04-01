<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">    <link rel="stylesheet" href="contact.css">
    <title>Jarditou.com : Tout le jardin</title>
</head>
<body>

    <div class="container">
        <div class="row">
            <div class="col-lg-8 d-none d-lg-block">
                <img class="img-fluid" src="../formulaire jarditou/src/img/jarditou_logo.jpg" alt="Logo Jarditou" title="Logo Jarditou" width="180">
            </div>
            <div class="col-lg-4 d-none d-lg-block">
                <p class="text-center fs-2" >Tout le jardin</p>
            </div>
        </div>

        <div class="row" style="margin: auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <a class="navbar-brand" href="index.php">Jarditou.com</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" href="index.php">Accueil</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="tableau.php">Tableau</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="contact.php">Contact</a>
                      </li>
                      
                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Votre promotion" aria-label="Search">
                      <button class="btn btn-outline-success" type="submit">Rechercher</button>
                    </form>
                  </div>
                </div>
              </nav>

        </div>

        <div class="row">
            <img src="../formulaire jarditou/src/img/promotion.jpg" alt="banniere promotionnelle sur les lames de terrasse" title="banniere promotionnelle sur les lames de terrasse">
        </div>

        <div class="row g-0">
            <div class="col">

                <section>
        
                    <div>
                        <p>* Ces zones sont obligatoires</p>
                        <form action="validform.php" method="POST" id="form">
                            <Fieldset>
                            <legend class="fs-1">Vos Coordonnées</legend>
                                <label for="yourName" class="form-label">Votre nom* :</label>
                                    <input type="text" class="form-control" id="yourName" name="name" placeholder="Veuillez saisir votre nom" value="<?php if(isset($_POST['name'])){echo htmlspecialchars($_POST['name']);}?>">
                                    <p class="error" id="your-name-error"><?php if(isset($nameError)){echo $nameError;}?></p>
                                <label for="surname" class="form-label">Votre prénom* :</label>
                                    <input type="text" class="form-control" id="surname" name="surname" placeholder="Veuillez saisir votre prénom" value="<?php if(isset($_POST['surname'])){echo htmlspecialchars($_POST['surname']);}?>">
                                    <p class="error" id="surname-error"><?php if(isset($surnameError)){echo $surnameError;}?></p>
                                <div>                            
                                    <label class="mb-1" for="sex" class="form-check-label"> Sexe* :</label><br>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="sex" id="sexf" value="Féminin" <?php if(isset($_POST['sex']) && $_POST['sex'] == "Féminin") echo 'checked="checked"' ?> >Féminin
                                    </div>
                                    <div class="form-check form-check-inline"> 
                                    <input class="form-check-input" type="radio" name="sex" id="sexm" value="Masculin" <?php if(isset($_POST['sex']) && $_POST['sex'] == "Masculin") echo 'checked="checked"' ?>>Masculin
                                    </div>
                                </div>
                                <p class="error" id="sex-error"><?php if(isset($sexError)){echo $sexError;}?></p>
                                <label for="dateOfBirth" class="form-label">Date de naissance* :</label>
                                    <input type="date" class="form-control" name="dateOfBirth" id="dateOfBirth" value="<?php if(isset($_POST['dateOfBirth'])){echo htmlspecialchars($_POST['dateOfBirth']);}?>">
                                    <p class="error" id="date-of-birth-error"><?php if(isset($dateOfBirthError)){echo $dateOfBirthError;}?></p>
                                <label for="postalcode" class="form-label">Code postal* :</label>
                                    <input type="text" class="form-control" name="postalcode" id="postalcode" value="<?php if(isset($_POST['postalcode'])){echo htmlspecialchars($_POST['postalcode']);}?>">
                                    <p class="error" id="postalcode-error"><?php if(isset($postalcodeError)){echo $postalcodeError;}?></p>
                                <label for="address" class="form-label">Adresse :</label>
                                    <input type="text" class="form-control" name="address" id="address" value="<?php if(isset($_POST['address'])){echo htmlspecialchars($_POST['address']);}?>">
                                    <p class="error" id="address-error"><?php if(isset($addressError)){echo $addressError;}?></p>
                                <label for="town" class="form-label">Ville :</label>
                                    <input type="text" class="form-control" name="town" id="town" value="<?php if(isset($_POST['town'])){echo htmlspecialchars($_POST['town']);}?>">
                                    <p class="error" id="town-error"><?php if(isset($townError)){echo $townError;}?></p>
                                <label for="email" class="form-label">Email* :</label>
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Dave.loper@afpa.fr" value="<?php if(isset($_POST['email'])){echo htmlspecialchars($_POST['email']);}?>">
                                    <p class="error" id="email-error"><?php if(isset($emailError)){echo $emailError;}?></p>
                            </Fieldset><br>
                        
                            <fieldset>
                            <legend class="fs-2">Votre demande</legend>
                                <label for="subject-select" class="form-label">Sujet* :</label>
                                    <select name="subject"  class="form-select" id="subject-select" >
                                        <option value="" selected>Veuillez sélectionner un sujet</option>
                                        <option value="Mes commandes" <?php if(isset($_POST['subject']) && $_POST['subject'] == "Mes commandes") echo"selected" ?> >Mes commandes</option>
                                        <option value="Question sur un produit" <?php if(isset($_POST['subject']) && $_POST['subject'] == "Question sur un produit") echo"selected" ?>>Question sur un produit</option>
                                        <option value="Réclamation" <?php if(isset($_POST['subject']) && $_POST['subject'] == "Réclamation") echo"selected" ?>>Réclamation</option>
                                        <option value="Autres" <?php if(isset($_POST['subject']) && $_POST['subject'] == "Autres") echo"selected" ?>>Autres</option>
                        
                                    </select>
                                    <p class="error" id="select-error"><?php if(isset($subjectError)){echo $subjectError;}?></p>
                        
                                    <label for="question" class="form-label" value="<?php if(isset($_POST['question'])){echo htmlspecialchars($_POST['question']);}?>">Votre question* :</label>
                                        <textarea name="question" class="form-control" id="question" cols="15" rows="2" ><?php if(isset($_POST['question'])){echo ($_POST['question']);}?></textarea>
                                        <p class="error" id="question-error"><?php if(isset($questionError)){echo $questionError;}?></p>
                                    
                            </fieldset><br>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="accept" id="accept" value="ok" <?php if(isset($_POST['accept'])){echo 'checked="checked"';}?>">
                                <label class="form-check-label" for="accept"></label>* j'accepte le traitement informatique de ce formulaire
                            </div>
                            <p class="error" id="accept-error"><?php if(isset($acceptError)){echo $acceptError;}?></p>

                            <button class="btn btn-dark" type="submit" id="envoi" value="envoi">Envoyer</button>
                            <button class="btn btn-dark" type="reset">Annuler</button>
                        </form>
                        <br>
                    </div>

                </section>

        </div>
    

        <footer class="navbar navbar-expand-lg navbar-dark bg-dark rounded mt-2 ">
            <div class="container-fluid" style="padding-left: 12px">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">mentions légales</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">horaires</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">plan du site</a>
                  </li>                
                </ul>
              </div>
            </div>
        </footer>



    </div>
    
    <!--<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js%22%3E"></script>-->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    
  </body>
</html>