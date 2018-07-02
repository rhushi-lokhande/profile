import { Component, Input, OnInit } from '@angular/core';
import { Data} from '../data';

@Component({
    selector: 'app-nav',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    data = Data;
}
