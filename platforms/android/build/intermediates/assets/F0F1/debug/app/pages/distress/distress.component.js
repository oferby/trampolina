"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var DistressComponent = (function () {
    function DistressComponent(zone, page, router) {
        this.zone = zone;
        this.page = page;
        this.router = router;
        this.latitude = 0;
        this.longitude = 0;
        this.verticalAccuracy = 0;
        this.horizontalAccuracy = 0;
    }
    DistressComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.updateLocation();
        this.startWatchingLocation();
    };
    DistressComponent.prototype.onCancel = function () {
        this.stopWatchingLocation();
        this.router.navigate(["/main"]);
    };
    DistressComponent.prototype.getDeviceLocation = function () {
        return new Promise(function (resolve, reject) {
            Geolocation.enableLocationRequest().then(function () {
                Geolocation.getCurrentLocation({ timeout: 10000, desiredAccuracy: enums_1.Accuracy.high }).then(function (location) {
                    resolve(location);
                }).catch(function (error) {
                    reject(error);
                });
            });
        });
    };
    DistressComponent.prototype.updateLocation = function () {
        var _this = this;
        this.getDeviceLocation().then(function (result) {
            _this.latitude = result.latitude;
            _this.longitude = result.longitude;
            _this.verticalAccuracy = result.verticalAccuracy;
            _this.horizontalAccuracy = result.horizontalAccuracy;
        }, function (error) {
            console.error(error);
        });
    };
    DistressComponent.prototype.startWatchingLocation = function () {
        var _this = this;
        this.watchId = Geolocation.watchLocation(function (location) {
            if (location) {
                _this.zone.run(function () {
                    _this.latitude = location.latitude;
                    _this.longitude = location.longitude;
                    _this.verticalAccuracy = location.verticalAccuracy;
                    _this.horizontalAccuracy = location.horizontalAccuracy;
                });
            }
        }, function (error) {
            console.log(error);
        }, { updateDistance: 1, minimumUpdateTime: 1000, desiredAccuracy: enums_1.Accuracy.high });
    };
    DistressComponent.prototype.stopWatchingLocation = function () {
        if (this.watchId) {
            Geolocation.clearWatch(this.watchId);
            this.watchId = null;
        }
    };
    return DistressComponent;
}());
DistressComponent = __decorate([
    core_1.Component({
        selector: "distress",
        templateUrl: "pages/distress/distress.html",
        styleUrls: ["pages/distress/distress-common.css"]
    }),
    __metadata("design:paramtypes", [core_1.NgZone, page_1.Page, router_1.Router])
], DistressComponent);
exports.DistressComponent = DistressComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdHJlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELHNEQUF3RDtBQUN4RCxrQ0FBb0M7QUFDcEMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQU8vQixJQUFhLGlCQUFpQjtJQVExQiwyQkFBb0IsSUFBWSxFQUFVLElBQVUsRUFBVSxNQUFjO1FBQXhELFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUV4RSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7SUFFaEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyw2Q0FBaUIsR0FBekI7UUFDSSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO29CQUMxRixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7b0JBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMENBQWMsR0FBckI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDaEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNsQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1lBQ2hELEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDeEQsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0saURBQXFCLEdBQTVCO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBQSxRQUFRO1lBQzdDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQ1YsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO29CQUNsQyxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7b0JBQ3BDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsa0JBQWtCLENBQUM7Z0JBQzFELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVNLGdEQUFvQixHQUEzQjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2QsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUF6RUQsSUF5RUM7QUF6RVksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO0tBQ3BELENBQUM7cUNBUzRCLGFBQU0sRUFBZ0IsV0FBSSxFQUFrQixlQUFNO0dBUm5FLGlCQUFpQixDQXlFN0I7QUF6RVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tICd1aS9lbnVtcyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImRpc3RyZXNzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9kaXN0cmVzcy9kaXN0cmVzcy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2Rpc3RyZXNzL2Rpc3RyZXNzLWNvbW1vbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpc3RyZXNzQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgbGF0aXR1ZGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyB2ZXJ0aWNhbEFjY3VyYWN5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEFjY3VyYWN5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHdhdGNoSWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKXtcclxuXHJcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IDA7XHJcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSAwO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxBY2N1cmFjeSA9IDA7XHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsQWNjdXJhY3kgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMb2NhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRXYXRjaGluZ0xvY2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wV2F0Y2hpbmdMb2NhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9tYWluXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERldmljZUxvY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgR2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBHZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oe3RpbWVvdXQ6IDEwMDAwLCBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2h9KS50aGVuKGxvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gXHJcbiAgICBwdWJsaWMgdXBkYXRlTG9jYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5nZXREZXZpY2VMb2NhdGlvbigpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sYXRpdHVkZSA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSByZXN1bHQubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsQWNjdXJhY3kgPSByZXN1bHQudmVydGljYWxBY2N1cmFjeTtcclxuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsQWNjdXJhY3kgPSByZXN1bHQuaG9yaXpvbnRhbEFjY3VyYWN5O1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiBcclxuICAgIHB1YmxpYyBzdGFydFdhdGNoaW5nTG9jYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy53YXRjaElkID0gR2VvbG9jYXRpb24ud2F0Y2hMb2NhdGlvbihsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gbG9jYXRpb24ubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBsb2NhdGlvbi5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbEFjY3VyYWN5ID0gbG9jYXRpb24udmVydGljYWxBY2N1cmFjeTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxBY2N1cmFjeSA9IGxvY2F0aW9uLmhvcml6b250YWxBY2N1cmFjeTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSwgeyB1cGRhdGVEaXN0YW5jZTogMSwgbWluaW11bVVwZGF0ZVRpbWU6IDEwMDAsIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCB9KTtcclxuICAgIH1cclxuIFxyXG4gICAgcHVibGljIHN0b3BXYXRjaGluZ0xvY2F0aW9uKCkge1xyXG4gICAgICAgIGlmKHRoaXMud2F0Y2hJZCkge1xyXG4gICAgICAgICAgICBHZW9sb2NhdGlvbi5jbGVhcldhdGNoKHRoaXMud2F0Y2hJZCk7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hJZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==