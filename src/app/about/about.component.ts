import { Component } from '@angular/core';
import { Data } from '../data';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
})
export class AboutComponent {
    data = Data;
}
