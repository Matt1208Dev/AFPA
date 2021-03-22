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