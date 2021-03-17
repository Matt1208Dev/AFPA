-- AFFICHER LA LISTE DES HOTELS AVEC LEUR STATION --

SELECT sta_nom, hot_nom, hot_categorie, hot_ville
FROM `hotel`
JOIN `station`
WHERE hot_sta_id = sta_id

-- AFFICHER LA LISTE DES CHAMBRES ET LEUR HOTEL --

SELECT hot_nom, hot_categorie, hot_ville, cha_numero
FROM `hotel`
JOIN `chambre`
WHERE hot_id = cha_hot_id

-- AFFICHER LES CHAMBRE DE PLUS D 1 PLACE DANS LA VILLE DE BRETOU --

SELECT hot_nom, hot_categorie, hot_ville, cha_numero, cha_capacite
FROM `hotel`
JOIN `chambre`
ON hot_id = cha_hot_id AND hot_ville = "bretou"
GROUP BY cha_capacite
HAVING cha_capacite > 1

-- AFFICHER LA LISTE DES RESERVATIONS AVEC LE NOM DES CLIENTS --

SELECT cli_nom, hot_nom, res_date
FROM `client`
JOIN `reservation`
ON cli_id = res_cli_id
JOIN `chambre`
ON res_cha_id = cha_hot_id
JOIN `hotel`
ON cha_hot_id = hot_id
GROUP BY res_id

-- AFFICHER LA LISTE DES CHAMBRES AVEC LE NOM DE L HOTEL ET LE NOM DE LA STATION --

SELECT sta_nom, hot_nom, cha_numero, cha_capacite
FROM `station`
JOIN `hotel`
ON sta_id = hot_sta_id
JOIN `chambre`
ON hot_id = cha_hot_id

-- AFFICHER LES RESERVATIONS AVEC LE NOM DU CLIENT ET LE NOM DE L HOTEL AVEC DATEDIFF --

SELECT cli_nom, hot_nom, res_date_debut, DATEDIFF (res_date_fin, res_date_debut)
FROM `client`
JOIN `reservation`
ON cli_id = res_cli_id
JOIN `chambre`
ON res_cha_id = cha_id
JOIN `hotel`
ON cha_hot_id = hot_id
GROUP BY res_id