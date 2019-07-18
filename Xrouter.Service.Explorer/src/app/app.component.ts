import { Component, ElementRef } from '@angular/core';
import { AppSettings } from './shared/models/appsettings.model.';
import { SessionService } from './shared/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public title = 'Caplin Systems, Incorporated.';
    public isAuthenicated: Boolean;
    public firstName: string;
    public lastName: string;

    constructor(private elementRef: ElementRef, private sessionService: SessionService) {

        // tslint:disable-next-line:prefer-const
        let native = this.elementRef.nativeElement;

        // tslint:disable-next-line:prefer-const
        let settings = native.getAttribute('settings');
        let appSettings = new AppSettings();
        appSettings = JSON.parse(settings);

        sessionService.setAppSettings(appSettings);
        this.isAuthenicated = sessionService.isAuthenicated;

    }

    public logout(): void {

    }
}
