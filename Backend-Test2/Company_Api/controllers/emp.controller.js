const db = require('../db');

// Get all employees with their department names
const employeesWithDept = (req, res) => {
  db.query(
    `SELECT e.emp_id, e.emp_name, e.gender, e.salary, d.dept_name
     FROM employee e
     JOIN department d ON e.dept_id = d.dept_id`,
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
};

// Get all employees with their manager names
const employeesWithManager = (req, res) => {
  db.query(
    `SELECT e.emp_id, e.emp_name, m.manager_name
     FROM employee e
     JOIN management m ON e.dept_id = m.dept_id`,
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
};

// Get count of employees in each department
const countByDept = (req, res) => {
  db.query(
    `SELECT d.dept_name, COUNT(e.emp_id) AS num_employees
     FROM department d
     LEFT JOIN employee e ON d.dept_id = e.dept_id
     GROUP BY d.dept_id`,
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
};

// Get employees who earn more than average in their department
const aboveAvgSalary = (req, res) => {
  db.query(
    `SELECT e.emp_name, e.salary, d.dept_name
     FROM employee e
     JOIN department d ON e.dept_id = d.dept_id
     WHERE e.salary > (
       SELECT AVG(salary) FROM employee WHERE dept_id = e.dept_id
     )`,
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
};

// Get departments with manager and list of employees
const deptWithManagerAndEmps = (req, res) => {
  db.query(
    `SELECT d.dept_name, m.manager_name, e.emp_name
     FROM department d
     JOIN management m ON d.dept_id = m.dept_id
     LEFT JOIN employee e ON d.dept_id = e.dept_id
     ORDER BY d.dept_id`,
    (err, results) => {
      if (err) throw err;
      const out = results.reduce((acc, curr) => {
        if (!acc[curr.dept_name]) {
          acc[curr.dept_name] = {
            dept_name: curr.dept_name,
            manager_name: curr.manager_name,
            employees: []
          };
        }
        acc[curr.dept_name].employees.push(curr.emp_name);
        return acc;
      }, {});
      res.json(out);
    }
  );
};

module.exports = {
  employeesWithDept,
  employeesWithManager,
  countByDept,
  aboveAvgSalary,
  deptWithManagerAndEmps
};
