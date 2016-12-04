/* Le total des paiements effectués de chaque client (numéro, nom et pays) américain, allemand ou français de plus de 50000$ trié par pays puis par total des paiements décroissant */

SELECT customers.customerNumber, customerName, country, SUM(amount) AS totalPayment
FROM customers
INNER JOIN payments ON payments.customerNumber = customers.customerNumber
WHERE country IN ('France', 'Germany', 'USA')
GROUP BY customers.customerNumber, customerName, country
HAVING totalPayment > 50000
ORDER BY country, totalPayment DESC


SELECT customers.customerNumber, customerName, country, SUM(amount) AS totalPayment
FROM payments
INNER JOIN customers ON  customers.customerNumber = payments.customerNumber
WHERE country IN ('France', 'Germany', 'USA')
GROUP BY customers.customerNumber
HAVING totalPayment > 50000
ORDER BY country, totalPayment DESC

/* RESULTAT ==> 38 lignes / 146 / 130305.35 */



/* Le montant total de chaque commande (numéro et date) des clients New-Yorkais (nom) trié par nom du client puis par date de commande */
SELECT customerName, orders.orderNumber, orderDate, SUM(quantityOrdered * priceEach) AS totalAmount
FROM customers
INNER JOIN orders ON orders.customerNumber = customers.customerNumber
INNER JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber
WHERE city = 'NYC'
GROUP BY orderNumber
ORDER BY customerName, orderDate



SELECT customerName, orders.orderNumber, orderDate, SUM(quantityOrdered * priceEach) AS totalAmount
FROM orderdetails
INNER JOIN orders ON orders.orderNumber = orderdetails.orderNumber
INNER JOIN customers ON orders.customerNumber = customers.customerNumber
WHERE city = 'NYC'
GROUP BY orderNumber
ORDER BY customerName, orderDate



/* RESULTAT ==> 16 lignes / Classic Legends / 10115 / 21665.98 */


/* BONUS */

/* Récupérer le montant total des commandes des clients ayant achetés des avions ou des motos en excluant: 
- Les clients dont les responsables commerciaux ne travaillant pas sur Boston , 
- Les commandes comportant les produits suivants: "1969 Harley Davidson Ultimate Choppe" et "1980s Black Hawk Helicopter" 
- Les commandes comportant des produits dont la valeur total du stock ne dépasse pas 200.000$ 
 */

SELECT orders.orderNumber , customerName , SUM(quantityOrdered * priceEach) AS totalAmount , (quantityInStock * MSRP) as stockValue
FROM customers
JOIN orders ON orders.customerNumber = customers.customerNumber
JOIN orderdetails ON orderdetails.orderNumber = orders.orderNumber
JOIN products ON products.productCode = orderdetails.productCode
JOIN employees ON employees.employeeNumber = customers.salesRepEmployeeNumber
JOIN offices ON offices.officeCode = employees.officeCode
WHERE offices.city != 'BOSTON' AND productName NOT IN("1969 Harley Davidson Ultimate Choppe","1980s Black Hawk Helicopter") AND (quantityInStock * MSRP) < 200000
GROUP BY orderNumber
HAVING totalAmount > 10000
