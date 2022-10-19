const { Pool } = require('pg');
const argv = process.argv.slice(2);


const pool = new Pool({
  user: 'vagrant',
  password: 'password',
  host: 'localhost',
  database: 'bootcampx'
});

// pool.query(`
// SELECT students.id, students.name AS student, cohorts.name AS cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// // LIMIT 5;
// `)
// .then(res => {
//   console.log(res.rows);
//   res.rows.forEach(user => {
//     console.log(`${user.student} has an id of ${user.id} and was in the ${user.cohort} cohort`);
//   })
// });

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${argv[0]}%'
LIMIT ${argv[1] || 5};
`)
.then(res => {
  console.log(res.rows)
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));


const queryString = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `;