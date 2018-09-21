import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
// import entire SDK
import {
    UserLoginService, IUserLogin, UserState,
    UserRegistrationService, CognitoUtil
  } from '../../services/account-management.service';


@Component({
    selector: "login-app",
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css"]
})
export class LoginComponent implements OnInit {

    public userData: IUserLogin = {
        username: "ofer.benyacov@gmail.com",
        password: "shtoza11"
      };

    constructor(private page: Page, private router: Router) {
        
    }

    ngOnInit(){
        this.page.actionBarHidden = true;
    }

    submit(){
        // this.router.navigate(["/main"]);

        UserLoginService.signIn(this.userData)
        .then(() => {
          // Login was successful
            this.router.navigate(["/main"]);
        }).catch((err: Error): void => {
          // Login was unsuccessful
          this.router.navigate(["/signup"]);  
        });

    }

    onCreateNew(){
        this.router.navigate(["/signup"]);
    }
} 