-- COMPTER LE NOMBRE D HOTEL PAR STATION --

SELECT sta_nom, COUNT(*)
FROM `hotel`
JOIN `station`
ON sta_id = hot_sta_id
GROUP BY sta_nom

-- COMPTER LE NOMBRE DE CHAMBRE PAR STATION --

SELECT sta_nom, COUNT(*)
FROM `chambre`
JOIN `hotel`
ON cha_hot_id = hot_id
JOIN `station`
ON sta_id = hot_sta_id
GROUP BY sta_nom

-- COMPTER LE NOMBRE DE CHAMBRE PAR STATION AYANT UNE CAPACITE >1 --

SELECT sta_nom, COUNT(*)
FROM `chambre`
JOIN `hotel`
ON cha_hot_id = hot_id
JOIN `station`
ON sta_id = hot_sta_id
WHERE cha_capacite > 1
GROUP BY sta_nom

-- AFFICHER LES HOTELS DANS LESQUELS M SQUIRE A FAIT UNE RESERVATION --

SELECT hot_nom, cli_nom
FROM `client`
JOIN `reservation`
ON cli_id = res_cli_id
JOIN `chambre`
ON res_cha_id = cha_hot_id
JOIN `hotel`
ON cha_hot_id = hot_id
WHERE cli_nom = "squire"
GROUP BY hot_nom

-- AFFICHER LA DUREE MOYENNE DES RESERVATIONS PAR STATION --

SELECT sta_nom, AVG(DATEDIFF(res_date_fin, res_date_debut)) AS "Durée moyenne"
FROM `reservation`
JOIN `chambre`
ON res_cha_id = cha_id
JOIN `hotel`
ON cha_hot_id = hot_id
RIGHT JOIN `station`
ON hot_sta_id = sta_id
