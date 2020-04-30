import { LightningElement,api,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import {registerListener,unregisterAllListeners} from 'c/pubsub';
export default class Subscriber extends LightningElement {
    @api receiveddata;
    @wire (CurrentPageReference) pageRef;
    connectedCallback(){
        //this.receiveddata
        registerListener('pubfireevent',this.handleevent,this)
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    handleevent(detail){
        this.receiveddata=detail;
    }
}