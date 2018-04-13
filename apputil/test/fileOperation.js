var fileUtil = require('../src/fileToUtil');
var arrayOfObject = [];
var obj1 = {'Name':'Tarun','Project':'DaaS'};
var obj2 = {'Name':'Shiva','Project':'NULL'};
arrayOfObject.push(obj1);
arrayOfObject.push(obj2);

function testWriteToFile(){
    fileUtil.parseArrayToFile(__dirname + '/ArrayToFile', arrayOfObject);
}

function testFileToArray(){
    fileUtil.parseFileToArray(__dirname + '/FileToArray', verify);
}

function verify(fileData){
    console.log(arrayOfObject);
    console.log(fileData);
    console.log(arrayOfObject==fileData);
}

testWriteToFile();
testFileToArray();