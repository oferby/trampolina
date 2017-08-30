"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var SingnupComponent = (function () {
    function SingnupComponent(page, router) {
        this.page = page;
        this.router = router;
    }
    SingnupComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    SingnupComponent.prototype.onNext = function () {
    };
    return SingnupComponent;
}());
SingnupComponent = __decorate([
    core_1.Component({
        selector: "signup-app",
        templateUrl: "pages/signup/signup.html",
        styleUrls: ["pages/signup/signup-common.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], SingnupComponent);
exports.SingnupComponent = SingnupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQU8vQixJQUFhLGdCQUFnQjtJQUt6QiwwQkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFdEQsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELGlDQUFNLEdBQU47SUFFQSxDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztLQUNoRCxDQUFDO3FDQU00QixXQUFJLEVBQWtCLGVBQU07R0FMN0MsZ0JBQWdCLENBaUI1QjtBQWpCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJzaWdudXAtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9zaWdudXAvc2lnbnVwLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvc2lnbnVwL3NpZ251cC1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW5nbnVwQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgdXNlcm5hbWU6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwYXNzd29yZDpzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBhc3N3b3JkQWdhaW46c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmV4dCgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufSJdfQ==