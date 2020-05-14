import { LightningElement ,api, wire} from 'lwc';
import accountname from '@salesforce/schema/Account.Name';
import status from '@salesforce/schema/Account.Active__c';
import account_obj from '@salesforce/schema/Account';
import {getRecord,getFieldValue,createRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const field=['Account.Name'];
export default class Lds extends LightningElement {
    fieldname=[accountname,status];
    @api objectApiName;
    @api recordId;
    @api result;

    handlesuccess(event){
        console.log(event.detail.id);
    }
    @wire(getRecord,{recordId:'$recordId',fields:[accountname,status]})
    wireRecord({error,data}){
        if(error){

            console.log(error);
        }else if(data){
            this.result=data;
            console.log('LDS-ui record API');
            console.log(data);
        }

    }
    get fieldvalue(){
        return getFieldValue(this.result,accountname);
    }
    saverecord(event){
        let objectapiname=account_obj.objectApiName;
        let nameval='';
        const fields={};
        var inp=this.template.querySelectorAll("lightning-input");
        inp.forEach(function(element){
            if(element.name=="namefetch")
                this.nameval=element.value;
        },this);
        fields[accountname.fieldApiName] = this.nameval;
        const recordInput = { apiName: account_obj.objectApiName, fields };
        createRecord(recordInput).then(result=>{
            alert('successs create');
            this.dispatchEvent(
                new ShowToastEvent({
                    title: ' creating record successfully',
                    message: 'success',
                    variant: 'success',
                }),
            );
        })
        .catch(error=>{console.log(error);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
        })
        
    }
}