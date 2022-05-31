SELECT * FROM customer;
SELECT * FROM address;

SELECT  a.first_name, a.last_name, COUNT(f.address) AS 'quantidade de endereco'
FROM customer AS a
INNER JOIN address AS f
ON a.address_id = f.address_id
WHERE a.active = 1
GROUP BY a.customer_id
ORDER BY a.first_name DESC, a.last_name DESC;