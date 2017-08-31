import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { View } from "ui/core/view";

@Component({
    selector: "main-app",
    templateUrl: "pages/main/main.html",
    styleUrls: ["pages/main/main-common.css"]
})
export class MainComponent implements OnInit {

    constructor(private page: Page, private router: Router) {
    
    }
    
    ngOnInit(){
        this.page.actionBarHidden = true;
    }

    onDistress() {
        this.router.navigate(["/distress"]);
    }

    onCarSelect() {
        this.router.navigate(["/home"]);
    }

}