import { EventType } from '../common/event_type';
export declare class CommonEventEmitter {
    private eventEmitter;
    private static instance;
    private constructor();
    registerEvent(eventType: EventType, handler: any): void;
    callEvent(eventType: EventType, eventValue: string): void;
    static getInstance(): CommonEventEmitter;
}
