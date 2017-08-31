import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
    selector: "login-app",
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css"]
})
export class LoginComponent implements OnInit {

    constructor(private page: Page, private router: Router) {
        
    }

    ngOnInit(){
        this.page.actionBarHidden = true;
    }

    submit(){
        this.router.navigate(["/main"]);
    }

    onCreateNew(){
        this.router.navigate(["/signup"]);
    }
} 