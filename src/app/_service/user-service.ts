import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {

    private apiUrl = environment.apiURL + '/api/cb/v1/';

    constructor(private http: HttpClient) {
    }

    getAllUser() {
        return this.http.get(this.apiUrl + `users`);
    }
}
