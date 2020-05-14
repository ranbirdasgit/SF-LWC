import { LightningElement } from 'lwc';

export default class ParentLWC extends LightningElement {
    haldleChild(event){
        alert(event.detail.key1);
        alert(this.template.querySelector('c-child-l-w-c').childmethod());
    }
    connectedCallback(){
        alert('init method');
    }
}