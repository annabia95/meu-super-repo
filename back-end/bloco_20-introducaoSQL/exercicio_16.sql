SELECT title, description, release_year, replacement_cost, rating FROM film
WHERE rating IN('G', 'PG','PG-13')
AND replacement_cost > 18.00
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;