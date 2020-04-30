import { LightningElement, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';
export default class Publisher extends LightningElement {
    @wire (CurrentPageReference) pageRef;
    clickhere(event){
        fireEvent(this.pageRef,'pubfireevent','Hello Subscriber');
    }
}