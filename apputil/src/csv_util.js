var fileUtil = require('fs');

function objectToCSV(objectEntry, withHeader){
    var keyHeader = Object.keys(objectEntry).join(",");
    var csvString = '';
    if(withHeader) {
        csvString += keyHeader;
        csvString += '\n';
    }
    var valueArray = [];
    Object.keys(objectEntry).forEach(function(key){
        valueArray.push(this[key]);
    }, objectEntry); 
    csvString += valueArray.join(",");
    return csvString;
}

function parseArrayToFile(fileName,arr){
    var arrayOfData= [];
    var writeStream = fileUtil.createWriteStream(fileName);
    var writeHeader = true;
    arr.forEach(element => {
        if(typeof element != 'object'){
            return 'Invalid Input';
        }
        else {
            writeStream.write(objectToCSV(element, writeHeader));
            writeStream.write('\n');
            if(writeHeader){
                writeHeader = false;
            }
        }
    });
    writeStream.end();
    writeStream.close();
}

function parseFileToArray(fileName, callback){
    fileUtil.readFile(fileName,'utf8',function(err, data){
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
        callback(arrayObject);
    });
}

function addEntry(fileName, newEntry){
    var writeStream = fileUtil.createWriteStream(fileName, {flags : 'a'});
    writeStream.write(objectToCSV(newEntry, false));
    writeStream.end();
    writeStream.close();
}


module.exports = {
    objectToCSV : objectToCSV,
    addEntry : addEntry,
    parseArrayToFile : parseArrayToFile,
    parseFileToArray : parseFileToArray
}