SELECT * FROM Pixar.Movies;
SELECT
    b.title AS 'Filme',
    s.rating AS "Avaliação"
FROM
	Movies AS b
INNER JOIN
	BoxOffice AS s ON b.id = s.movie_id
ORDER BY s.rating DESC;