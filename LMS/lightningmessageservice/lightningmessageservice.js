import { LightningElement } from 'lwc';
import { publish,createMessageContext,releaseMessageContext } from 'lightning/messageService';
import samplemessage from "@salesforce/messageChannel/SampleMessageChannel__c";

export default class Lightningmessageservice extends LightningElement {
    context=createMessageContext();
    publishmethod(){
        const passparam1={
            recordId:'0098232300effd',
            recordData:'Hello ranbir'
        };
        publish(this.context,samplemessage,passparam1)
    }
}