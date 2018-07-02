import { Component } from '@angular/core';
import { Data } from '../data';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
})
export class BannerComponent {
    images = Data.bannerImages;
    option = {
        items: 1,
        dots: false,
        navigation: false,
        loop: true,
        nav: true,
        autoplay: true
    };
}
