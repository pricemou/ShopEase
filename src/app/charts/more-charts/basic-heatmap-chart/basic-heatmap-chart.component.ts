import { Component } from '@angular/core';
import { BasicHeatmapChartService } from './basic-heatmap-chart.service';

@Component({
    selector: 'app-basic-heatmap-chart',
    standalone: true,
    imports: [],
    templateUrl: './basic-heatmap-chart.component.html',
    styleUrl: './basic-heatmap-chart.component.scss'
})
export class BasicHeatmapChartComponent {

    constructor(
        private basicHeatmapChartService: BasicHeatmapChartService
    ) {}

    ngOnInit(): void {
        this.basicHeatmapChartService.loadChart();
    }

}