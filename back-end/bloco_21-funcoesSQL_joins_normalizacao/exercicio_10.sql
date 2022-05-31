SELECT 	a.first_name, a.last_name, f.address
FROM staff AS a
INNER JOIN address AS f
ON a.address_id = f.address_id;