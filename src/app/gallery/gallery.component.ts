import { Component } from '@angular/core';
import { Data } from '../data';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
})
export class GalleryComponent {
    images = Data.galleryImages;
}
