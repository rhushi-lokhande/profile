import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Data } from '../data';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {
    data = Data;
    ngAfterViewInit() {
        window['timeline'](document.querySelectorAll('.timeline'), {
            mode: 'horizontal',
            forceVerticalMode: 768,
        });
    }

}
