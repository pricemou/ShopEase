import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome:not(1)',
    standalone: true,
    imports: [],
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {}