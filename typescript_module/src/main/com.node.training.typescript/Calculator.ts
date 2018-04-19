export class Calculator{
    
    private static instance:Calculator = null;
    private instanceId:number;

    private constructor(){
       this.instanceId = Math.random();
       console.log(this.instanceId);
    }

    public static async getInstance(): Promise<Calculator>{
        if(Calculator.instance == null){
           Calculator.instance = await Calculator.createConstructor();
        }
        return Calculator.instance;
    }

    private static async createConstructor(): Promise<Calculator>{
        return new Promise<Calculator>((resolve) => 
            setTimeout(function(){
                resolve(new Calculator());
            }, 5000));
    }

    public getInstanceId(): number{
        return this.instanceId;
    }
}