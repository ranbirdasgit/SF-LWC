import { LightningElement } from 'lwc';
import { APPLICATION_SCOPE,subscribe,unsubscribe,createMessageContext,releaseMessageContext } from 'lightning/messageService';
import samplemessage from "@salesforce/messageChannel/sampleMessageChannel__c";

export default class Lmsubscriber extends LightningElement {
    context=createMessageContext();
    connectedCallback(){
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, samplemessage, (passparam1) => {
            this.handlermethod(passparam1);
        },{scope:APPLICATION_SCOPE}
        
        );
    }
    handlermethod(passparam1){
        console.log('-----answere subscriber');
        console.log(JSON.stringify(passparam1));
    }
}