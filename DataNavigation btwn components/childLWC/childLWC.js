import { LightningElement, api } from 'lwc';

export default class ChildLWC extends LightningElement {
    @api datesend;
    clickbutton(){
        alert(this.datesend);
        const event = new CustomEvent('child', {
            // detail contains only primitives
            detail: {key1:"ranbir",key2:"Das"}
        }); 
        this.dispatchEvent(event);  
    }
    @api
    childmethod(){
        
        return 'hello';
    }
}