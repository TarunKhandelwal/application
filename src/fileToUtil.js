var fileUtil = require('fs');

exports.parseArrayToFile = function(arr){
    var arrayOfData= [];
    var writeStream = fileUtil.createWriteStream('dataFile');
    var writeHeader = true;
    arr.forEach(element => {
        if(typeof element != 'object'){
            return 'Invalid Input';
        }
        else {
            var keyHeader = Object.keys(element).join(",");
            if(writeHeader){
                writeStream.write(keyHeader);
                writeStream.write('\n');
                writeHeader = false;
            }
            var valueArray = [];
            Object.keys(element).forEach(function(key){
                valueArray.push(this[key]);
            }, element); 
            writeStream.write(valueArray.join(","));
            writeStream.write('\n');
        }
    });
    writeStream.end();
    writeStream.close();
}

exports.parseFileToArray = function(fileName){
    fileUtil.readFile(fileName,'utf8',function(err, data){
        //var jsonData = JSON.parse(data);
        var arrayObject = [];
        var keyHeader = data.split('\n');
        var headers = keyHeader[0].split(',');
        keyHeader.shift();
        keyHeader.forEach(function(element){
            var values = element.split(',');
            var valueObject = {};
            headers.forEach(function(element, index){
                valueObject[element] = values[index];
            });
            arrayObject.push(valueObject);
        });
        console.log(arrayObject);
    });
}

exports.addEntry = function(fileName, newEntry){
    var writeStream = fileUtil.createWriteStream(fileName, {flags : 'a'});
    writeStream.write(objectToCSV(newEntry, false));
    writeStream.end();
    writeStream.close();
}

function objectToCSV(objectEntry, withHeader){
    var keyHeader = Object.keys(objectEntry).join(",");
    var csvString = '';
    if(withHeader) {
        csvString += keyHeader;
    }
    csvString += '\n';
    var valueArray = [];
    Object.keys(objectEntry).forEach(function(key){
        valueArray.push(this[key]);
    }, objectEntry); 
    csvString += valueArray.join(",");
    return csvString;
}