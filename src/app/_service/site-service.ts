import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class SiteService {

    private apiUrl = environment.apiURL + '/api/cb/v1/';

    constructor(private http: HttpClient) {
    }

    getAllSites() {
        return this.http.get(this.apiUrl + `sites?projection=code,siteDetails,address`);
    }
    getSiteById(id) {
        return this.http.get(this.apiUrl + `sites/${id}`);
    }
    getSiteListForFilter(tenantCode) {
        const list = [];
        this.http.get(this.apiUrl + 'sites?projection=code,siteDetails.dispName,siteDetails.tenantCode').subscribe((item: any) => {
            const responseList = item.result.data;
            if (responseList || responseList.length !== 0) {
                if (tenantCode) {
                    responseList.forEach(obj => {
                        if (obj.siteDetails && obj.siteDetails.tenantCode === tenantCode) {
                            list.push({
                                key: obj.code,
                                value: obj.siteDetails.dispName
                            });
                        }
                    });
                } else {
                    responseList.forEach(obj => {
                        if (obj.siteDetails) {
                            list.push({
                                key: obj.code,
                                value: obj.siteDetails.dispName
                            });
                        }
                    });
                }
            }
        });
        return list;
    }
}
