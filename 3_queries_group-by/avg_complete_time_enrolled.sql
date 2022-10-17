SELECT students.name AS student, 
  ROUND(AVG(assignment_submissions.duration), 2) 
  AS average_assignment_duration
FROM assignment_submissions
  JOIN students ON students.id = student_id
  WHERE end_date IS NULL
  GROUP BY student
  ORDER BY average_assignment_duration DESC;