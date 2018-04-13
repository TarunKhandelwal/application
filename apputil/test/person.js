var person = require('../src/model/person');

var tarun = new person.person('Tarun','DaaS');
console.log(tarun.stringyfy()==='Tarun,DaaS');