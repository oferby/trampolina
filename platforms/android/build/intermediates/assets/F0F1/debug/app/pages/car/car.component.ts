import {Component} from '@angular/core';
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
    selector: "car-app",
    templateUrl: "pages/car/car.html",
    styleUrls: ["pages/car/car-common.css"]
})
export class CarComponent {

    private total_covarage:number;
    private last_year:string;
    private last_month:string;
    private next_charge:string;

    constructor(private page:Page, private router:Router) {
        this.total_covarage = 300000;
        this.last_year = "2,435 ש'ח";
        this.last_month = "154 ש'ח";
        this.next_charge = "53 ש'ח";
    }

    ngOnInit(){
        this.page.actionBarHidden = true;
    }

    onBack(){
        this.router.navigate(["/main"])
    }
}
