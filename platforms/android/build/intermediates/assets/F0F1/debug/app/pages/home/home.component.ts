import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { View } from "ui/core/view";

declare const android: any;

@Component({
    selector: "home-app",
    templateUrl: "pages/home/home.html",
    styleUrls: ["pages/home/home-common.css"]
})
export class HomeComponent implements OnInit {

    @ViewChild("carbar") container: ElementRef;

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
        
        let container = <View>this.container.nativeElement;
        // container.android.setBackgroundResource(android.R.drawable.dialog_holo_light_frame);

    }

    onDistress(){
        this.router.navigate(['/distress']);
    }

} 