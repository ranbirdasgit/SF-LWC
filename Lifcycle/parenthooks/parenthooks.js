import { LightningElement,api } from 'lwc';
import firsttemp from './parenthooks.html';
import secondtemp from './parenthooks1.html';

export default class Parenthooks extends LightningElement {
    @api temp='temp1';
    @api sample='hello';
    constructor(){
        super();
        console.log('parent constructor call');
    }
    connectedCallback(){
        console.log('parent connected callback call');
    }
    renderedCallback(){
        console.log('parent render  call back');
    }
    disconnectedCallback(){
        console.log('parent disconnected  call back');

    }
    render(){
        console.log('parent render method');
        if(this.temp=='temp1'){
            return secondtemp;
        }
        else {
            return firsttemp;
        }
    }
    changetemp(){
       console.log('inside changetemp');
        this.temp='temp2';
       this.sample='world';
    }
}