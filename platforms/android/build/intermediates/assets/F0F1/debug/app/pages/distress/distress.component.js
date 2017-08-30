"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var DistressComponent = (function () {
    function DistressComponent(zone) {
        this.zone = zone;
        this.latitude = 0;
        this.longitude = 0;
        this.verticalAccuracy = 0;
        this.horizontalAccuracy = 0;
        // // if (!isEnabled()) {
        //     enableLocationRequest();
        // } 
        // this.buttonGetLocationTap();
        this.updateLocation();
    }
    // buttonGetLocationTap() {
    // var location = getCurrentLocation({desiredAccuracy: Accuracy.high, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
    // then(function(loc) {
    //     if (loc) {
    //         console.log("Current location is: " + loc);
    //     }
    // }, function(e){
    //     console.log("Error: " + e.message);
    // });
    // }
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
    __metadata("design:paramtypes", [core_1.NgZone])
], DistressComponent);
exports.DistressComponent = DistressComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdHJlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzdHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELHNEQUF3RDtBQUN4RCxrQ0FBb0M7QUFPcEMsSUFBYSxpQkFBaUI7SUFRMUIsMkJBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBRTVCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztRQUU1Qix5QkFBeUI7UUFDekIsK0JBQStCO1FBQy9CLEtBQUs7UUFFTCwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCwyQkFBMkI7SUFDdkIsOEhBQThIO0lBQzlILHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsc0RBQXNEO0lBQ3RELFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLE1BQU07SUFDVixJQUFJO0lBRUksNkNBQWlCLEdBQXpCO1FBQ0ksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUNyQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtvQkFDMUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO29CQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDBDQUFjLEdBQXJCO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ2hDLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbEMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3hELENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGlEQUFxQixHQUE1QjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQUEsUUFBUTtZQUM3QyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNWLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUNWLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztvQkFDbEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO29CQUNwQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDO29CQUNsRCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixDQUFDO2dCQUMxRCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFTSxnREFBb0IsR0FBM0I7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNkLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUM7SUFDTCxDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBL0VELElBK0VDO0FBL0VZLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztLQUNwRCxDQUFDO3FDQVM0QixhQUFNO0dBUnZCLGlCQUFpQixDQStFN0I7QUEvRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tICd1aS9lbnVtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImRpc3RyZXNzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9kaXN0cmVzcy9kaXN0cmVzcy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2Rpc3RyZXNzL2Rpc3RyZXNzLWNvbW1vbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpc3RyZXNzQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgbGF0aXR1ZGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyB2ZXJ0aWNhbEFjY3VyYWN5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEFjY3VyYWN5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHdhdGNoSWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSl7XHJcblxyXG4gICAgICAgIHRoaXMubGF0aXR1ZGUgPSAwO1xyXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gMDtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsQWNjdXJhY3kgPSAwO1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEFjY3VyYWN5ID0gMDtcclxuXHJcbiAgICAgICAgLy8gLy8gaWYgKCFpc0VuYWJsZWQoKSkge1xyXG4gICAgICAgIC8vICAgICBlbmFibGVMb2NhdGlvblJlcXVlc3QoKTtcclxuICAgICAgICAvLyB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuYnV0dG9uR2V0TG9jYXRpb25UYXAoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxvY2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYnV0dG9uR2V0TG9jYXRpb25UYXAoKSB7XHJcbiAgICAgICAgLy8gdmFyIGxvY2F0aW9uID0gZ2V0Q3VycmVudExvY2F0aW9uKHtkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIHVwZGF0ZURpc3RhbmNlOiAxMCwgbWF4aW11bUFnZTogMjAwMDAsIHRpbWVvdXQ6IDIwMDAwfSkuXHJcbiAgICAgICAgLy8gdGhlbihmdW5jdGlvbihsb2MpIHtcclxuICAgICAgICAvLyAgICAgaWYgKGxvYykge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IGxvY2F0aW9uIGlzOiBcIiArIGxvYyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LCBmdW5jdGlvbihlKXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGV2aWNlTG9jYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBHZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7dGltZW91dDogMTAwMDAsIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaH0pLnRoZW4obG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiBcclxuICAgIHB1YmxpYyB1cGRhdGVMb2NhdGlvbigpIHtcclxuICAgICAgICB0aGlzLmdldERldmljZUxvY2F0aW9uKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxBY2N1cmFjeSA9IHJlc3VsdC52ZXJ0aWNhbEFjY3VyYWN5O1xyXG4gICAgICAgICAgICB0aGlzLmhvcml6b250YWxBY2N1cmFjeSA9IHJlc3VsdC5ob3Jpem9udGFsQWNjdXJhY3k7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuIFxyXG4gICAgcHVibGljIHN0YXJ0V2F0Y2hpbmdMb2NhdGlvbigpIHtcclxuICAgICAgICB0aGlzLndhdGNoSWQgPSBHZW9sb2NhdGlvbi53YXRjaExvY2F0aW9uKGxvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYobG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSBsb2NhdGlvbi5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IGxvY2F0aW9uLmxvbmdpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsQWNjdXJhY3kgPSBsb2NhdGlvbi52ZXJ0aWNhbEFjY3VyYWN5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbEFjY3VyYWN5ID0gbG9jYXRpb24uaG9yaXpvbnRhbEFjY3VyYWN5O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9LCB7IHVwZGF0ZURpc3RhbmNlOiAxLCBtaW5pbXVtVXBkYXRlVGltZTogMTAwMCwgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoIH0pO1xyXG4gICAgfVxyXG4gXHJcbiAgICBwdWJsaWMgc3RvcFdhdGNoaW5nTG9jYXRpb24oKSB7XHJcbiAgICAgICAgaWYodGhpcy53YXRjaElkKSB7XHJcbiAgICAgICAgICAgIEdlb2xvY2F0aW9uLmNsZWFyV2F0Y2godGhpcy53YXRjaElkKTtcclxuICAgICAgICAgICAgdGhpcy53YXRjaElkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19