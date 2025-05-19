import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-events-list',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './events-list.component.html',
    styleUrl: './events-list.component.scss'
})
export class EventsListComponent {}