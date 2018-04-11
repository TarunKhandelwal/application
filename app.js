var fileToUtil = require('./src/fileToUtil');

var rootArray = [];
var object1 = {"Name":"Tarun", "Project":"DaaS"};
var object2 = {"Name":"John", "Project":"DaaS"};
rootArray.push(object1);
rootArray.push(object2);
console.log(rootArray);
//fileToUtil.parseArrayToFile(rootArray);
fileToUtil.parseFileToArray('dataFile');
fileToUtil.addEntry('dataFile', object1);