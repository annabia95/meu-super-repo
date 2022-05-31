SELECT * FROM Pixar.BoxOffice;
SELECT
    b.title AS 'Filme',
    s.domestic_sales AS "Vendas_Nacionais",
    s.international_sales AS "Vendas_Internacionais"
FROM
	Movies AS b
INNER JOIN
	BoxOffice AS s ON b.id = s.movie_id;