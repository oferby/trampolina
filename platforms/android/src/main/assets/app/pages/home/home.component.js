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
        this.page.actionBarHidden = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxnQ0FBK0I7QUFVL0IsSUFBYSxhQUFhO0lBTXRCLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFJLFNBQVMsR0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUNuRCx1RkFBdUY7SUFFM0YsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWhCd0I7SUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7OEJBQVksaUJBQVU7Z0RBQUM7QUFGbEMsYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUM1QyxDQUFDO3FDQU80QixXQUFJO0dBTnJCLGFBQWEsQ0FrQnpCO0FBbEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5cclxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhvbWUtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9ob21lL2hvbWUuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9ob21lL2hvbWUtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQFZpZXdDaGlsZChcImNhcmJhclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3RhbF9jb3ZhcmFnZTpudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbF9jb3ZhcmFnZSA9IDMwMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIC8vIGNvbnRhaW5lci5hbmRyb2lkLnNldEJhY2tncm91bmRSZXNvdXJjZShhbmRyb2lkLlIuZHJhd2FibGUuZGlhbG9nX2hvbG9fbGlnaHRfZnJhbWUpO1xyXG5cclxuICAgIH1cclxuXHJcbn0gIl19