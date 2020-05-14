import { LightningElement } from 'lwc';
import { x,commonMethod } from 'c/commonmethod';
export default class Sample extends LightningElement {
    connectedCallback(){
        console.log('hello');
        console.log(x);
        console.log(commonMethod ('ranbir'));
    }
}