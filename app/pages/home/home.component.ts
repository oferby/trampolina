import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
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

    constructor(private page: Page) {
        this.total_covarage = 300000;
    }

    ngOnInit(){
        this.page.actionBarHidden = true;
        
        let container = <View>this.container.nativeElement;
        // container.android.setBackgroundResource(android.R.drawable.dialog_holo_light_frame);

    }

} 