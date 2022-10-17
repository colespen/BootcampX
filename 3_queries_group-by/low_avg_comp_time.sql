SELECT students.name AS student, 
ROUND(avg(assignment_submissions.duration), 2) AS average_assignment_duration, 
ROUND(avg(assignments.duration), 2) AS average_estimated_duration
  FROM students

JOIN assignment_submissions ON student_id = students.id
JOIN assignments ON assignments.id = assignment_id
  WHERE end_date IS NULL

GROUP BY student
HAVING avg(assignment_submissions.duration) < avg(assignments.duration)
  ORDER BY average_assignment_duration;

 