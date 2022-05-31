SELECT * FROM customer;
SELECT * FROM address;

SELECT  a.first_name, a.last_name, a.email, f. address_id, f.address, f.district
FROM customer AS a
INNER JOIN address AS f
ON a.address_id = f.address_id
WHERE f.district = 'California' AND a.first_name LIKE'%rene%';