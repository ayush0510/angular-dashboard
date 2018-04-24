import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-map-one',
    template: `<div class="card">
                    <div class="card-block">
                        <div class="inline-block">
                        <h1 class="no-mrg-vertical">$168.90</h1>
                        <p>This Month Sales</p>
                    </div>
                    <div class="pdd-top-25 inline-block pull-right">
                        <span class="label label-success label-lg mrg-left-5">+18%</span>
                    </div>
                    <div class="mrg-top-15">
                        <div #mapOneTarget>
                        </div>
                    </div>
                </div>`
})

export class MapOneComponent implements OnInit {

    constructor() { }

    @ViewChild('mapOneTarget') chartTarget: ElementRef;

    chart: Highcharts.ChartObject;

    ngOnInit() {
        const options: Highcharts.Options = {
            chart: {
                type: 'column',
                height: '60px',
                spacing: [0, 0, 0, 0]
            },
            title: {
                text: ''
            },
            xAxis: {
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                labels: {
                    enabled: false
                },
                minorTickLength: 0,
                tickLength: 0
            },
            yAxis: {
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                visible: false
            },
            legend: {
                enabled: false
            },
            series: [{
                name: 'Orders Count',
                data: [10, 12, 9, 14, 12, 8, 18, 15, 19, 5, 11, 20, 11, 14, 16, 8, 12, 17, 10, 20, 11, 20, 10, 16, 0 ,0 ,0, 0, 0, 0]

            }]
        };

        this.chart = chart(this.chartTarget.nativeElement, options);
    }
}