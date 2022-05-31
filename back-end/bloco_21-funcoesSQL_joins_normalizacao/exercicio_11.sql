SELECT * FROM customer;
SELECT * FROM address;

SELECT 	a.customer_id, a.first_name, a.last_name, a.email, f. address_id, f.address
FROM customer AS a
INNER JOIN address AS f
ON a.address_id = f.address_id
ORDER BY a.first_name DESC
LIMIT 100;