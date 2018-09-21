"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var CarComponent = (function () {
    function CarComponent(page, router) {
        this.page = page;
        this.router = router;
        this.total_covarage = 300000;
        this.last_year = "2,435 ש'ח";
        this.last_month = "154 ש'ח";
        this.next_charge = "53 ש'ח";
    }
    CarComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    CarComponent.prototype.onBack = function () {
        this.router.navigate(["/main"]);
    };
    return CarComponent;
}());
CarComponent = __decorate([
    core_1.Component({
        selector: "car-app",
        templateUrl: "pages/car/car.html",
        styleUrls: ["pages/car/car-common.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], CarComponent);
exports.CarComponent = CarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQU8vQixJQUFhLFlBQVk7SUFPckIsc0JBQW9CLElBQVMsRUFBVSxNQUFhO1FBQWhDLFNBQUksR0FBSixJQUFJLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksWUFBWTtJQUx4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUMxQyxDQUFDO3FDQVEyQixXQUFJLEVBQWlCLGVBQU07R0FQM0MsWUFBWSxDQXFCeEI7QUFyQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNhci1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Nhci9jYXIuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9jYXIvY2FyLWNvbW1vbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhckNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3RhbF9jb3ZhcmFnZTpudW1iZXI7XHJcbiAgICBwcml2YXRlIGxhc3RfeWVhcjpzdHJpbmc7XHJcbiAgICBwcml2YXRlIGxhc3RfbW9udGg6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBuZXh0X2NoYXJnZTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOlBhZ2UsIHByaXZhdGUgcm91dGVyOlJvdXRlcikge1xyXG4gICAgICAgIHRoaXMudG90YWxfY292YXJhZ2UgPSAzMDAwMDA7XHJcbiAgICAgICAgdGhpcy5sYXN0X3llYXIgPSBcIjIsNDM1INepJ9eXXCI7XHJcbiAgICAgICAgdGhpcy5sYXN0X21vbnRoID0gXCIxNTQg16kn15dcIjtcclxuICAgICAgICB0aGlzLm5leHRfY2hhcmdlID0gXCI1MyDXqSfXl1wiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL21haW5cIl0pXHJcbiAgICB9XHJcbn1cclxuIl19