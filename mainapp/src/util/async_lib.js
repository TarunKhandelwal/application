var students = require('../model/entity');
var fs = require('fs');
var async = requre('async');
var promises = [{'fileName':'departments.json','fileKey':'departments','idKey':'departmentId','valueKey':'deptName'},
                {'fileName':'students.json','fileKey':'students','idKey':'studentId','valueKey':'stuName'},
                {'fileName':'student_department.json','fileKey':'studDeptMap','idKey':'studentId','valueKey':'departmentId'}
            ];
var resultData = {};

async.forEachOf()

function readEntity(fileName, arrayKey, entityIdKey, entityValueKey){
    return new Promise(function(resolve, reject){
        fs.readFile(__dirname + '../../../resources/'+fileName,'utf8',function(err,data){
            if(err == null){
                var entities = JSON.parse(data)[arrayKey];
                var entitiesObject = {};
                var result = {};
                entities.forEach(element => {
                    entitiesObject[element[entityIdKey]] = element[entityValueKey];
                });
                resultData[arrayKey] = entitiesObject;
                resolve('Pass');
            }
            else{
                console.log(err);
                reject(err);
            }
        });
    });
}

function processMaping(entitiesData){
    Object.keys(resultData.studDeptMap).forEach(studentId =>{
        console.log('Student : '+resultData.students[studentId]+
            ' Study in Department : '+resultData.departments[resultData.studDeptMap[studentId]]);
    })
}



promises.push(readEntity('departments.json','departments','departmentId','deptName'));
promises.push(readEntity('students.json','students','studentId','stuName'));
promises.push(readEntity());

var results = Promise.all(promises);

results.then(function(data){
    processMaping(data);
})
