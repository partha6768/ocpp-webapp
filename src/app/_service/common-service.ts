import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ToastController} from "@ionic/angular";

@Injectable()
export class CommonService {

    private apiUrl = environment.apiURL + '/api/cb/v1/';

    constructor(public toastController: ToastController, private http: HttpClient) {
    }

    currentUserInfo() {
        return sessionStorage.getItem('username');
    }

    cleanObject(obj) {
        for (const propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
                delete obj[propName];
            }
        }
        return obj;
    }

    checkAndReturnEmpty(obj) {
        if (obj === null || obj === undefined) {
            return '';
        }
        return obj;
    }

    searchLocation(search) {
        return this.http.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search}&key=AIzaSyDH-JIjvzwccPIxPHOusrTFKZtDT8hohHE`);
    }

    getDistance(origin, destination) {
        return this.http.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?origins=${origin}&destinations=${destination}&key=AIzaSyDH-JIjvzwccPIxPHOusrTFKZtDT8hohHE`);
    }

    getCurrentLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
            }, err => {
                reject(err);
            });
        });
    }

    getConnectorTypeListForFilter() {
        const list = [];
        this.http.get(this.apiUrl + 'master-data/connector-types?projection=code').subscribe((item: any) => {
            const responseList = item.result.data;
            if (responseList || responseList.length !== 0) {
                responseList.forEach(obj => {
                    list.push(obj.code);
                });
            }
        });
        return list;
    }

    async showToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            cssClass: 'toast_style',
            color: 'secondary'
        });
        await toast.present();
    }

    getTransactionDetail(transactionId) {
        return this.http.get(this.apiUrl + `charging/details/${transactionId}`);
    }
}
