"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var HomeComponent = (function () {
    function HomeComponent(page, router) {
        this.page = page;
        this.router = router;
        this.total_covarage = 300000;
        this.last_year = "2,435 ש'ח";
        this.last_month = "154 ש'ח";
        this.next_charge = "53 ש'ח";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        var container = this.container.nativeElement;
        // container.android.setBackgroundResource(android.R.drawable.dialog_holo_light_frame);
    };
    HomeComponent.prototype.onDistress = function () {
        this.router.navigate(['/distress']);
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
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFDekMsZ0NBQStCO0FBVS9CLElBQWEsYUFBYTtJQVN0Qix1QkFBb0IsSUFBUyxFQUFVLE1BQWE7UUFBaEMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFVLFdBQU0sR0FBTixNQUFNLENBQU87UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsdUZBQXVGO0lBRTNGLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUExQndCO0lBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDOzhCQUFZLGlCQUFVO2dEQUFDO0FBRmxDLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDNUMsQ0FBQztxQ0FVMkIsV0FBSSxFQUFpQixlQUFNO0dBVDNDLGFBQWEsQ0E0QnpCO0FBNUJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcblxyXG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaG9tZS1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2hvbWUvaG9tZS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2hvbWUvaG9tZS1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiY2FyYmFyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBwcml2YXRlIHRvdGFsX2NvdmFyYWdlOm51bWJlcjtcclxuICAgIHByaXZhdGUgbGFzdF95ZWFyOnN0cmluZztcclxuICAgIHByaXZhdGUgbGFzdF9tb250aDpzdHJpbmc7XHJcbiAgICBwcml2YXRlIG5leHRfY2hhcmdlOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6UGFnZSwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbF9jb3ZhcmFnZSA9IDMwMDAwMDtcclxuICAgICAgICB0aGlzLmxhc3RfeWVhciA9IFwiMiw0MzUg16kn15dcIjtcclxuICAgICAgICB0aGlzLmxhc3RfbW9udGggPSBcIjE1NCDXqSfXl1wiO1xyXG4gICAgICAgIHRoaXMubmV4dF9jaGFyZ2UgPSBcIjUzINepJ9eXXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAvLyBjb250YWluZXIuYW5kcm9pZC5zZXRCYWNrZ3JvdW5kUmVzb3VyY2UoYW5kcm9pZC5SLmRyYXdhYmxlLmRpYWxvZ19ob2xvX2xpZ2h0X2ZyYW1lKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXN0cmVzcygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Rpc3RyZXNzJ10pO1xyXG4gICAgfVxyXG5cclxufSAiXX0=