SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;

SELECT
	a.actor_id,
    a.first_name,
    a.last_name,
    f.film_id,
    t.title
FROM
    actor AS a
INNER JOIN
    film_actor AS f 
ON a.actor_id = f.actor_id
INNER JOIN
    film AS t 
ON f.film_id = t.film_id;