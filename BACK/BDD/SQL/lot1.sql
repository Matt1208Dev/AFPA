-- AFFICHER LA LISTE DES HOTELS --

SELECT hot_nom, hot_ville
FROM `hotel`

-- AFFICHER LA VILLE DE RESIDENCE DE M WHITE --

SELECT cli_ville
FROM `client`
WHERE cli_nom = "white"

-- AFFICHER LA LISTE DES STATIONS DONT L ALTITUDE < 1000 -- 

SELECT sta_nom
FROM `station`
WHERE sta_altitude < 1000

-- AFFICHER LA LISTE DES CHAMBRES DONT LA CAPACITE EST > 1 --

SELECT cha_numero
FROM `chambre`
WHERE cha_capacite > 1

-- AFFICHER LES CLIENTS N HABITANT PAS A LONDRE --

SELECT cli_nom, cli_ville
FROM `client`
WHERE cli_ville NOT IN (Londre)