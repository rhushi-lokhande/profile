import { Component } from '@angular/core';
import { Data } from '../data';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
})
export class EventComponent {
    events = Data.events;
}
