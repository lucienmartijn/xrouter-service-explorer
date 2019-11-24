import { Injectable } from '@angular/core';
import { AppSettings } from '../models/appsettings.model.';

@Injectable()
export class SessionService {

    appSettings: AppSettings;
    public isAuthenicated: Boolean;

    constructor() {
        this.appSettings = new AppSettings();
        this.isAuthenicated = false;
    }

    public setAppSettings(appSettings: AppSettings) {
        this.appSettings = appSettings;
    }

    getApiURI() {
        return this.appSettings.webApiUrl;
    }    
}
