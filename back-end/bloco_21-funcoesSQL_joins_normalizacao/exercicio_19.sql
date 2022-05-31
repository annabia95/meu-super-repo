SELECT * FROM Pixar.Theater;

SELECT
	t.id,
    t.name AS "Nome_do_Cinema",
    t.location AS "Localização",
    m.title AS "Filmes_em_cartaz",
	m.director AS "Diretor",
    m.year AS "Ano_de_lançamento",
    m.length_minutes AS "Duração_do_filme"
FROM Theater AS t
LEFT JOIN Movies AS m
ON t.id = m.theater_id
ORDER BY m.title;