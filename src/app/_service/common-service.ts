import {Injectable} from '@angular/core';

@Injectable()
export class CommonService {

    constructor() {
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
}
