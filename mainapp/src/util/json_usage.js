var students = require('../../resources/students').students;
var departments = require('../../resources/departments').departments;
var stuDeptMap = require('../../resources/student_department').studDeptMap;
var departmentsData = {};
var studentMap = new Map();
var departmentMap = new Map();

function convertArrayToMap(arrOfObjects, mapOfEntities, entityKey, entityValueKey){
    arrOfObjects.forEach(element => {
        mapOfEntities[element[entityKey]] = element[entityValueKey];
    });
}
convertArrayToMap(students,studentMap,'studentId','stuName');
convertArrayToMap(departments,departmentMap,'departmentId','deptName');

stuDeptMap.forEach(element => {
    if(departmentsData.hasOwnProperty(departmentMap[element.departmentId])){
        departmentsData[departmentMap[element.departmentId]].push(studentMap[element.studentId]);
    }
    else {
        departmentsData[departmentMap[element.departmentId]] = [studentMap[element.studentId]];
    }
});

console.log(departmentsData);
