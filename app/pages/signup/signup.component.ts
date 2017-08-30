import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
    selector: "signup-app",
    templateUrl: "pages/signup/signup.html",
    styleUrls: ["pages/signup/signup-common.css"]
})
export class SingnupComponent {
    private username:string;
    private password:string;
    private passwordAgain:string;

    constructor(private page: Page, private router: Router) {
        
    }
    
    ngOnInit(){
        this.page.actionBarHidden = true;
    }

    onNext(){
        
    }

}