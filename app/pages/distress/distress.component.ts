import {Component, NgZone} from '@angular/core';
import * as Geolocation from "nativescript-geolocation";
import { Accuracy } from 'ui/enums';

@Component({
    selector: "distress",
    templateUrl: "pages/distress/distress.html",
    styleUrls: ["pages/distress/distress-common.css"]
})
export class DistressComponent {

    public latitude: number;
    public longitude: number;
    public verticalAccuracy: number;
    public horizontalAccuracy: number;
    private watchId: number;

    constructor(private zone: NgZone){

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

    private getDeviceLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            Geolocation.enableLocationRequest().then(() => {
                Geolocation.getCurrentLocation({timeout: 10000, desiredAccuracy: Accuracy.high}).then(location => {
                    resolve(location);
                }).catch(error => {
                    reject(error);
                });
            });
        });
    }
 
    public updateLocation() {
        this.getDeviceLocation().then(result => {
            this.latitude = result.latitude;
            this.longitude = result.longitude;
            this.verticalAccuracy = result.verticalAccuracy;
            this.horizontalAccuracy = result.horizontalAccuracy;
        }, error => {
            console.error(error);
        });
    }
 
    public startWatchingLocation() {
        this.watchId = Geolocation.watchLocation(location => {
            if(location) {
                this.zone.run(() => {
                    this.latitude = location.latitude;
                    this.longitude = location.longitude;
                    this.verticalAccuracy = location.verticalAccuracy;
                    this.horizontalAccuracy = location.horizontalAccuracy;
                });
            }
        }, error => {
            console.log(error);
        }, { updateDistance: 1, minimumUpdateTime: 1000, desiredAccuracy: Accuracy.high });
    }
 
    public stopWatchingLocation() {
        if(this.watchId) {
            Geolocation.clearWatch(this.watchId);
            this.watchId = null;
        }
    }

}