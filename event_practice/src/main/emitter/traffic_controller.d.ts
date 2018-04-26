import { SignalEvent } from '../common/signal_event';
import { VehicleEvent } from '../common/vehicle_event';
export declare class TrafficController {
    registerSignalHandler(handlerFunction: any): void;
    registerVehicleHandler(handlerFunction: any): void;
    sendSignalEvent(eventValue: SignalEvent): void;
    sendVehicleEvent(eventValue: VehicleEvent): void;
}
