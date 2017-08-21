"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var HomeComponent = (function () {
    function HomeComponent(page) {
        this.page = page;
        this.total_covarage = 300000;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var container = this.container.nativeElement;
        // container.android.setBackgroundResource(android.R.drawable.dialog_holo_light_frame);
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild("carbar"),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "container", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: "home-app",
        templateUrl: "pages/home/home.html",
        styleUrls: ["pages/home/home-common.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxnQ0FBK0I7QUFVL0IsSUFBYSxhQUFhO0lBTXRCLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksU0FBUyxHQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ25ELHVGQUF1RjtJQUUzRixDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBZHdCO0lBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDOzhCQUFZLGlCQUFVO2dEQUFDO0FBRmxDLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDNUMsQ0FBQztxQ0FPNEIsV0FBSTtHQU5yQixhQUFhLENBZ0J6QjtBQWhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuXHJcbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJob21lLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvaG9tZS9ob21lLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvaG9tZS9ob21lLWNvbW1vbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJjYXJiYXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHByaXZhdGUgdG90YWxfY292YXJhZ2U6bnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIHRoaXMudG90YWxfY292YXJhZ2UgPSAzMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAvLyBjb250YWluZXIuYW5kcm9pZC5zZXRCYWNrZ3JvdW5kUmVzb3VyY2UoYW5kcm9pZC5SLmRyYXdhYmxlLmRpYWxvZ19ob2xvX2xpZ2h0X2ZyYW1lKTtcclxuXHJcbiAgICB9XHJcblxyXG59ICJdfQ==