var personModel = require('apputility').person;

personModel.person.prototype.longString = function(){
    return this.name + ' works for project '+this.project;
}

personModel.person.prototype.stringyfy = function(){
    return 'String for '+this.name+' for project '+this.project +' coming from Stringyfy method';
}

exports.person = personModel.person;