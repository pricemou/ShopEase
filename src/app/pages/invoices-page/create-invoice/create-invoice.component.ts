import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-create-invoice',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './create-invoice.component.html',
    styleUrl: './create-invoice.component.scss'
})
export class CreateInvoiceComponent {}