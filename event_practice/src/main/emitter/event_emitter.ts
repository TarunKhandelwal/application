import * as events from 'events';
import {EventType} from '../common/event_type';

export class CommonEventEmitter{
    private eventEmitter: events.EventEmitter;
    private static instance: CommonEventEmitter;

    private constructor(){
        this.eventEmitter = new events.EventEmitter();
    }

    public registerEvent(eventType:EventType, handler:any){
        this.eventEmitter.on(EventType[eventType], handler);
    }

    public callEvent(eventType:EventType, eventValue:string){
        this.eventEmitter.emit(EventType[eventType], eventValue);
    }

    public static getInstance(): CommonEventEmitter{
        if(CommonEventEmitter.instance == null){
            CommonEventEmitter.instance =  new CommonEventEmitter();
        }
        return CommonEventEmitter.instance;
    }
}