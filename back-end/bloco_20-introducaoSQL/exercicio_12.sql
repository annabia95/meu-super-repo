SELECT * FROM Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;
SELECT * FROM Scientists ORDER BY Name;
SELECT * FROM Projects ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS resultado FROM Projects;
SELECT Name, Hours 
FROM Projects 
ORDER BY Hours DESC
LIMIT 3;
SELECT DISTINCT(Project)FROM AssignedTo;
SELECT Name, Hours 
FROM Projects 
ORDER BY Hours DESC
LIMIT 1;
SELECT Name, Hours 
FROM Projects 
ORDER BY Hours ASC
LIMIT 1 OFFSET 2;
SELECT * 
FROM Projects 
ORDER BY Hours ASC
LIMIT 5;
SELECT CONCAT("Existem", " ", COUNT(*)," ", "cientistas na tabela Scientists.") FROM Scientists;