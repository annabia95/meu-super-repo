SELECT active, COUNT(*) 
FROM customer
GROUP BY active;

SELECT  store_id, active, COUNT(*) 
FROM customer
GROUP BY store_id, active;

SELECT district, COUNT(*)
FROM address
GROUP BY district
ORDER BY COUNT(*) DESC;

SELECT rating, AVG(rental_duration)
FROM film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;

SELECT rating, AVG(length) AS média_de_duracao_por_idade
FROM film
GROUP BY rating
HAVING AVG(length) BETWEEN 115.00 AND 121.50
ORDER BY AVG(length) DESC;

SELECT rating, SUM(replacement_cost) AS total_do_custo_de_substituição
FROM film
GROUP by rating
HAVING total_do_custo_de_substituição > 3950.50
ORDER BY total_do_custo_de_substituição ASC ;