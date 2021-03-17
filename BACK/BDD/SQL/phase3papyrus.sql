-- BESOIN D AFFICHAGE 1 --

SELECT numfou, numcom
FROM `entcom`
WHERE numfou = 09120

-- BESOIN D AFFICHAGE 2 --

SELECT DISTINCT numfou
FROM `entcom`
GROUP BY numcom

-- BESOIN D AFFICHAGE 3 --

SELECT COUNT(*) AS "Nombre de commandes", COUNT(DISTINCT numfou) AS "Nombre de fournisseurs"
FROM `entcom`

-- BESOIN D AFFICHAGE 4 --

SELECT codart, libart, stkphy, stkale, qteann
FROM `produit`
WHERE stkphy <= stkale AND qteann < 1000

-- BESOIN D AFFICHAGE 5 --

SELECT posfou, nomfou
FROM `fournis`
WHERE posfou LIKE '75%' OR posfou LIKE '78%' OR posfou LIKE '92%' OR posfou LIKE '77%'
ORDER BY posfou DESC, nomfou ASC

-- BESOIN D AFFICHAGE 6 --

SELECT numcom, datcom
FROM `entcom`
WHERE datcom BETWEEN "2018-03-01" AND "2018-04-30"

-- BESOIN D AFFICHAGE 7 --

SELECT numcom, obscom, datcom
FROM `entcom`
WHERE obscom != ""

-- BESOIN D AFFICHAGE 8 --

SELECT numcom, SUM(priuni*qtecde) AS "Total"
FROM `ligcom`
GROUP BY numcom
ORDER BY "Total" DESC

-- BESOIN D AFFICHAGE 9 --

SELECT numcom, SUM(priuni*qtecde) AS "Total"
FROM `ligcom`
WHERE "Total" > "10000" AND qtecde >= "1000"
GROUP BY numcom

-- BESOIN D AFFICHAGE 10 --

SELECT nomfou, numcom, datcom
FROM `entcom`
JOIN `fournis`
ON `entcom`.numfou = `fournis`.numfou
ORDER BY nomfou 

-- BESOIN D AFFICHAGE 11 --

SELECT `ligcom`.numcom , nomfou, libart, qtecde*priuni AS "Sous-total"
FROM `entcom`
JOIN `ligcom`
ON `entcom`.numcom = `ligcom`.numcom
JOIN `produit`
ON `produit`.codart = `ligcom`.codart
JOIN `fournis`
ON `fournis`.numfou = `entcom`.numfou
WHERE obscom LIKE '%urgent%'

-- BESOIN D AFFICHAGE 12 --



