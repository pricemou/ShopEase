import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-input-select',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './input-select.component.html',
    styleUrl: './input-select.component.scss'
})
export class InputSelectComponent {}