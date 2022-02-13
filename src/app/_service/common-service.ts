import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CommonService {

    constructor(private http: HttpClient) {
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
}
