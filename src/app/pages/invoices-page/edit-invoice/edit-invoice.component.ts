import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-edit-invoice',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './edit-invoice.component.html',
    styleUrl: './edit-invoice.component.scss'
})
export class EditInvoiceComponent {}