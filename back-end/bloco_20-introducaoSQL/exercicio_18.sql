SELECT * FROM film
WHERE rating IN('NC-17')
ORDER BY rental_rate ASC, title ASC
LIMIT 50;