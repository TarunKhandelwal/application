var myPerson = require('../src/my_person');
var originalPerson = require('apputility').person;

function testMethodOverridding(){
    var tarun = new myPerson.person('Tarun','DaaS');
    console.log(tarun.longString());
    console.log(tarun.stringyfy());

    var oldTarun = new originalPerson.person('OldTarun','OldDaaS');
    console.log(oldTarun.longString());
    console.log(oldTarun.stringyfy());
}

testMethodOverridding();