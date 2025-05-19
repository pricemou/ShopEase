import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-e-orders',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './e-orders.component.html',
    styleUrl: './e-orders.component.scss'
})
export class EOrdersComponent {}