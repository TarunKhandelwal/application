var parseUtil = require('../fileToUtil')
function person(name, project){
    this.name = name
    this.project = project
}

person.prototype.stringyfy = function(){
    return parseUtil.objectToCSV(this);
}

exports.person = person;