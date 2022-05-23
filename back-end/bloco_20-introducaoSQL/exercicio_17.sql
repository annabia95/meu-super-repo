SELECT COUNT(*) FROM customer
WHERE active IS TRUE
AND store_id = 1;

SELECT COUNT(*) FROM customer
WHERE active IS FALSE
AND store_id = 1;