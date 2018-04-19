import {Calculator} from '../main/com.node.training.typescript/Calculator';

class CalculatorTest{

    public testGetInstance(): void{
         console.log(Calculator.getInstance()!=null);
    }

    public testInstanceId(): void{
        // First Way
        Calculator.getInstance().then(function(instance){(<Calculator>instance).getInstanceId()});
        Calculator.getInstance().then(function(instance){(<Calculator>instance).getInstanceId()});
        
        // Second Way
        Promise.all([Calculator.getInstance(),Calculator.getInstance()]).then(function(data){
            console.log(data);
       });

       // Third Way
        (async function(){
           let instance:Calculator = await Calculator.getInstance();
            console.log(instance.getInstanceId());
            let instance2:Calculator = await Calculator.getInstance();
            console.log(instance.getInstanceId());
        })();
    }
}

let testClass = new CalculatorTest();
testClass.testGetInstance();
testClass.testInstanceId();