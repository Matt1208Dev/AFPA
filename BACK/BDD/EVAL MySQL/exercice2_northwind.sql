-- 1 LISTE DES CONTACTS FRANCAIS --

SELECT CompanyName AS 'Société', ContactName AS 'Contact', ContactTitle AS 'Fonction', Phone AS 'Téléphone' 
FROM `customers`
WHERE country = 'france';

-- 2 PRODUITS VENDUS PAR LE FOURNISSEUR EXOTIC LIQUIDS --

SELECT ProductName AS 'Produit', UnitPrice AS 'Prix'
FROM `products`
JOIN `suppliers`
ON `products`.SupplierID = `suppliers`.SupplierID
WHERE CompanyName = 'exotic liquids';

-- 3 NOMBRE DE PRODUITS VENDUS PAR LES FOURNISSEURS FRANCAIS DANS L ORDRE DECROISSANT --

SELECT CompanyName AS 'Fournisseur', COUNT(ProductName) AS 'Nbre produits'
FROM `products`
JOIN `suppliers`
ON `products`.SupplierID = `suppliers`.SupplierID
WHERE Country = 'france'
GROUP BY CompanyName
ORDER BY `Nbre produits` DESC;

-- 4 LISTE DES CLIENTS FRANCAIS AYANT PLUS DE 10 COMMANDES --

SELECT CompanyName AS 'Client', COUNT(OrderID) AS 'Nbre commandes'
FROM `customers`
JOIN `orders`
ON `customers`.customerID = `orders`.customerID
WHERE country = 'france' AND 'Nbre commandes'> '10'
GROUP BY CompanyName
HAVING COUNT(OrderID)>10;

-- 5 LISTE DES CLIENTS AYANT UN CA > 30000 --

SELECT CompanyName, SUM(UnitPrice*Quantity) AS CA, country 
FROM `customers` 
JOIN `orders` 
ON `customers`.customerID = `orders`.customerID 
JOIN `order details` 
ON `order details`.orderID = `orders`.orderID 
GROUP BY CompanyName, country 
HAVING SUM(UnitPrice*Quantity)> 30000 
ORDER BY `CA` DESC;

-- 6 LISTE DES PAYS DONT LES CLIENTS ONT PASSE COMMANDE DE PRODUITS EXOTIC LIQUIDS --

SELECT `customers`.country AS 'Pays'
FROM `customers`
JOIN `orders` 
ON `customers`.customerID = `orders`.customerID 
JOIN `order details` 
ON `order details`.orderID = `orders`.orderID
JOIN `products`
ON `products`.productID = `order details`.productID
JOIN `suppliers`
ON `suppliers`.supplierID = `products`.supplierID
WHERE `suppliers`.CompanyName = 'exotic liquids'
GROUP BY `customers`.country;

-- 7 MONTANT DES VENTES DE 1997 --

SELECT SUM(UnitPrice*Quantity) AS 'Montant Ventes 97'
FROM `order details`
JOIN `orders`
ON `order details`.orderID = `orders`.orderID
WHERE OrderDate LIKE '1997%';

-- 8 MONTANT DES VENTES DE 1997 MOIS PAR MOIS --

SELECT MONTH(OrderDate) AS 'Mois 97', SUM(UnitPrice*Quantity) AS 'Montant Ventes'
FROM `order details`
JOIN `orders`
ON `order details`.orderID = `orders`.orderID
WHERE OrderDate LIKE '1997%'
GROUP BY MONTH(OrderDate);

-- 9 DEPUIS QUELLE DATE LE CLIENT 'DU MONDE ENTIER' N A T IL PLUS COMMANDE --

SELECT max(OrderDate) AS 'Date de dernière commande'
FROM `orders`
JOIN `customers`
ON `orders`.customerID = `customers`.customerID
WHERE CompanyName = 'du monde entier';

-- 10 QUEL EST LE DELAI MOYEN DE LIVRAISON EN JOURS --

SELECT FLOOR(AVG(DATEDIFF(ShippedDate, OrderDate))) AS 'Délai moyen de livraison en jours'
FROM `orders`;