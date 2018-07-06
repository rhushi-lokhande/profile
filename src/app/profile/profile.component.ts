import { Component, Input, OnInit } from '@angular/core';
import { Data} from '../data';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
})
export class ProfileComponent {
    data = Data;
}
