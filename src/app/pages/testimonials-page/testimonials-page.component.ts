import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-testimonials-page',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './testimonials-page.component.html',
    styleUrl: './testimonials-page.component.scss'
})
export class TestimonialsPageComponent {}