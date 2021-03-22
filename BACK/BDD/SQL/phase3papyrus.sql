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

SELECT numfou, COUNT(*) AS "Nb"
FROM `vente`
GROUP BY numfou
ORDER BY COUNT(*)

SELECT numfou
FROM `vente`
WHERE qte1>0 OR qte2>0 OR qte3 >0
GROUP BY numfou

-- BESOIN D AFFICHAGE 13 --

SELECT numfou, numcom, datcom
FROM `entcom`
WHERE numfou = (SELECT numfou
    FROM `entcom`
    WHERE numcom = "70210"
    GROUP BY numfou)


-- BESOIN D AFFICHAGE 14 --

SELECT libart, prix1 
FROM `produit` 
JOIN `vente` 
ON `produit`.codart = `vente`.codart 
WHERE prix1 < (SELECT min(prix1)
               FROM `vente`
               JOIN `produit`
               ON `vente`.codart = `produit`.codart
               WHERE libart LIKE "R%")
ORDER BY prix1

-- BESOIN D AFFICHAGE 15 --

SELECT numfou, libart, stkphy, stkale 
FROM `produit` 
JOIN `vente` 
ON `produit`.codart = `vente`.codart 
WHERE stkphy <= 1.5*stkale 
ORDER BY libart ASC, numfou

-- BESOIN D AFFICHAGE 16 --

SELECT numfou, libart, stkphy, stkale, delliv 
FROM `produit` 
JOIN `vente` 
ON `produit`.codart = `vente`.codart 
WHERE stkphy <= 1.5*stkale AND delliv <= 30
ORDER BY numfou ASC, libart

-- BESOIN D AFFICHAGE 17 --

SELECT pstk.numfou, SUM(stkphy) AS "Total stock"
FROM 	(SELECT numfou, libart, stkphy, stkale, delliv 
		FROM `produit` 
		JOIN `vente` 
		ON `produit`.codart = `vente`.codart 
		WHERE stkphy <= 1.5*stkale AND delliv <= 30
		ORDER BY numfou ASC, libart) AS pstk
GROUP BY numfou
ORDER BY `Total stock` DESC

-- BESOIN D AFFICHAGE 18 --

SELECT `produit`.codart, libart, qtecde, qteann
FROM `produit`
JOIN `ligcom`
ON `produit`.codart = `ligcom`.codart
WHERE qtecde > 0.9*qteann

-- BESOIN D AFFICHAGE 19 --

SELECT numfou, SUM(qte1*prix1+qte2*prix2+qte3*prix3) AS ca_global_ht
FROM `vente`
GROUP BY numfou, ca_global_ht;

-- BESOIN DE MISE A JOUR 1 --

UPDATE `vente`
SET prix1 = prix1*1.04, prix2 = prix2*1.02
WHERE `numfou` = "9180";

-- BESOIN DE MISE A JOUR 2 --

UPDATE `vente`
SET prix2 = 10
WHERE prix2 IS NULL;

-- BESOIN DE MISE A JOUR 3 --

UPDATE `entcom`
JOIN `fournis`
ON `entcom`.numfou = `fournis`.numfou
SET obscom = '*****'
WHERE satisf < 5;

-- BESOIN DE MISE A JOUR 4 --

DELETE FROM `produit`
WHERE codart = 'I110';