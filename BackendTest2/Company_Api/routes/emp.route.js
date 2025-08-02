const express = require('express');
const router = express.Router();
const empTask = require('../controllers/emp.controller');

router.get('/with-dept', empTask.employeesWithDept);
router.get('/with-manager', empTask.employeesWithManager);
router.get('/count-by-dept', empTask.countByDept);
router.get('/avg-salary', empTask.aboveAvgSalary);
router.get('/dept-list', empTask.deptWithManagerAndEmps);

module.exports = router;
