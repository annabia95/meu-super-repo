SELECT
    m.title AS "Filmes_em_cartaz",
	m.director AS "Diretor",
    m.year AS "Ano_de_lançamento",
    m.length_minutes AS "Duração_do_filme",
	t.id,
    t.name AS "Nome_do_Cinema",
    t.location AS "Localização",
    r.rating AS "Classificação"
FROM Movies AS m
RIGHT JOIN Theater AS t
ON m.theater_id = t.id
INNER JOIN BoxOffice as r
ON m.id = r.movie_id
WHERE 
	m.theater_id <> "NULL" AND r.rating > 8.0
ORDER BY m.title;