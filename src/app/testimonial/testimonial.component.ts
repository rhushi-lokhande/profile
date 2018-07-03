import { Component } from '@angular/core';
import { Data} from '../data';

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.component.html',
})
export class TestimonialComponent {
    testimonials = Data.testimonials;
    option = {
        items: 1,
        dots: true,
        navigation: false,
        loop: true,
        nav: false,
        autoplay: true
    };
}
