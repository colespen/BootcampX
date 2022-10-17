SELECT students.name AS student, 
COUNT(assignment_submissions.*) AS total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.start_date IS NOT NULL
GROUP BY students.name
HAVING COUNT(assignment_submissions.*) < 100
ORDER BY students.name ASC;