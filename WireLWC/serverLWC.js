import { LightningElement, wire, track } from 'lwc';
import getContactList from '@salesforce/apex/LWCclass.getLwcMethod';
 
export default class ServerLWC extends LightningElement {
    @track contacts;
    @track error;
    //-----------wire by property
    @wire(getContactList) contactsd;
    //-------------wire by method
    @wire(getContactList)
    wiredContact({ error, data }) {
        if (data) {
            console.log('ServerlWC--'+data);
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            
            console.log('error------'+error)
            this.error = error;
            this.contacts = undefined;
        }
    }
    //--calling method of wire property
    get name() {
       return this.contactsd.data;   
    }
    //---------This is the example to call the Apex method using custom button
    Hello(){
        getContactList().then(result=>{
            console.log('This is click result-------------'+result);
        })
        .catch(error=>{
            console.log('This is click error-------------'+error);
        })
    }
    
}