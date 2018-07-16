import { Component } from '@angular/core';
import { Data } from '../data';

@Component({
    selector: 'app-about',
    styleUrls:['./about.component.css'],
    templateUrl: './about.component.html',
})
export class AboutComponent {
    data = Data;
}
