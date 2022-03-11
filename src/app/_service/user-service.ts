import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {

    private apiUrl = environment.apiURL + '/api/cb/v1/';

    constructor(private http: HttpClient) {
    }

    saveUserPreference(username, request) {
        return this.http.put(this.apiUrl + `users/${username}/update/vehicleMapping`, request);
    }

    getAllElectricVehicle() {
        return this.http.get(this.apiUrl + `master-data/evs?projection=code`);
    }

    getUserVehicle(username) {
        return this.http.get(this.apiUrl + `users/${username}?projection=vehicleMapping.evNames`);
    }

    saveUser(request) {
        return this.http.post(this.apiUrl + `users`, request);
    }

    getUserSettings(username) {
        return this.http.get(this.apiUrl + `users/${username}?projection=userSettings`);
    }

    updateUserSettings(username, request) {
        return this.http.put(this.apiUrl + `users/${username}/update/userSettings`, request);
    }
}
