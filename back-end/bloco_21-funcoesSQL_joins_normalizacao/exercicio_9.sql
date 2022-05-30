SELECT * FROM employees;

SELECT MAX(SALARY) AS maior_salario FROM employees;

SELECT MAX(SALARY) - MIN(SALARY) AS diferença FROM employees;

SELECT JOB_ID, AVG(SALARY) AS media_salarial FROM employees
GROUP BY JOB_ID
ORDER BY AVG(SALARY) DESC;

SELECT SUM(SALARY) AS pagamento_total FROM employees;

SELECT ROUND(MAX(SALARY),2) AS  maximo_salario,
	   ROUND(MIN(SALARY),2) AS  salario_minimo,
       ROUND(SUM(SALARY),2) AS  salario_soma,
	   ROUND(AVG(SALARY),2) AS  salario_media
FROM employees;

SELECT JOB_ID, COUNT(*) AS 'total de pessoas programadoras'
FROM employees
WHERE JOB_ID = 'IT_PROG';

SELECT JOB_ID, SUM(SALARY) AS pagamento FROM employees
GROUP BY JOB_ID
ORDER BY pagamento DESC;

SELECT JOB_ID, SUM(SALARY) AS pagamento FROM employees
GROUP BY JOB_ID
ORDER BY pagamento DESC;

SELECT JOB_ID, SUM(SALARY) AS pagamento FROM employees
WHERE JOB_ID = 'IT_PROG'
GROUP BY JOB_ID
ORDER BY pagamento DESC;

SELECT JOB_ID, SUM(SALARY) AS pagamento FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG'
ORDER BY pagamento DESC;

SELECT DEPARTMENT_ID, COUNT(*) AS numero_funcionarios, AVG(SALARY) AS media_salarial FROM employees
GROUP BY DEPARTMENT_ID
HAVING numero_funcionarios > 10;

SET SQL_SAFE_UPDATES = 0;

UPDATE employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SELECT * FROM employees
WHERE CHAR_LENGTH(FIRST_NAME) >= 8;

SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM employees;

SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM employees;

SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM employees;

SELECT UCASE(FIRST_NAME) FROM employees;

SELECT FIRST_NAME, HIRE_DATE FROM employees
WHERE HIRE_DATE LIKE '1987-07%';

SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), HIRE_DATE) FROM employees;
