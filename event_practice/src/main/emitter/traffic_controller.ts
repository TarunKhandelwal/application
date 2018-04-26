import {CommonEventEmitter} from './event_emitter';
import { SignalEvent } from '../common/signal_event';
import {VehicleEvent} from '../common/vehicle_event';
import {EventType} from '../common/event_type';

export class TrafficController{

    public registerSignalHandler(handlerFunction:any){
        CommonEventEmitter.getInstance().registerEvent(EventType.Signal, handlerFunction);
    }

    public registerVehicleHandler(handlerFunction:any){
        CommonEventEmitter.getInstance().registerEvent(EventType.Vehicle, handlerFunction);
    }

    public sendSignalEvent(eventValue:SignalEvent){
        CommonEventEmitter.getInstance().callEvent(EventType.Signal, SignalEvent[eventValue]);
    }

    public sendVehicleEvent(eventValue:VehicleEvent){
        CommonEventEmitter.getInstance().callEvent(EventType.Vehicle, VehicleEvent[eventValue]);
    }
}