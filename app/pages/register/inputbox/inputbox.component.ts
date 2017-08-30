import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: "inputbox-app",
    templateUrl: "pages/register/register.html",
    styleUrls: ["pages/register/register-common.css"]
})
export class InputboxComponent {

    constructor(public id:string, public question:string, public answer:string){
    }

}