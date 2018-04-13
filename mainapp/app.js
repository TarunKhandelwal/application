var students = require('./src/model/entity');
var fs = require('fs');
var promises = [];

function readEntity(fileName, arrayKey, entityIdKey, entityValueKey){
    return new Promise(function(resolve, reject){
        fs.readFile(__dirname + '/resources/'+fileName,'utf8',function(err,data){
            if(err == null){
                var entities = JSON.parse(data)[arrayKey];
                var entitiesObject = {};
                var result = {};
                entities.forEach(element => {
                    entitiesObject[element[entityIdKey]] = element[entityValueKey];
                });
                result[arrayKey] = entitiesObject;
                resolve(result);
            }
            else{
                reject(err);
            }
        });
    });
}

function processMaping(entitiesData){
    var studentsData;
    var departmentsData;
    entitiesData.forEach(element => {
        if(Object.keys(element)[0]=='departments'){
            departmentsData = element['departments'];
        } else if(Object.keys(element)[0]=='students') {
            studentsData = element['students'];
        }
    })
    fs.readFile(__dirname + '/resources/student_department.json','utf8',function(err,data){
        var entitiesMap = JSON.parse(data).studDeptMap;
        entitiesMap.forEach(element => {
            console.log('Student : '+studentsData[element.studentId]+
            ' Study in Department : '+departmentsData[element.departmentId]);
        });
    });
}


promises.push(readEntity('departments.json','departments','departmentId','deptName'));
promises.push(readEntity('students.json','students','studentId','stuName'));
promises.push(readEntity('student_department.json','studDeptMap','studentId','departmentId'));

var results = Promise.all(promises);

results.then(function(data){
    processMaping(data);
})
