import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-map',
    template: `<div class="card">
                    <div class="card-heading border bottom">
                        <h4 class="card-title">Order Details</h4>
                    </div>
                    <div class="card-block">
                        <div #mapTarget>
                        </div>
                    </div>
                </div>`
})

export class MapComponent implements OnInit {

    constructor() { }

    @ViewChild('mapTarget') chartTarget: ElementRef;

    chart: Highcharts.ChartObject;

    ngOnInit() {
        const options: Highcharts.Options = {
            chart: {
                type: 'bar',
                height: '312px'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Orders', 'Pre Orders']
            },
            yAxis: {
                title: {
                    text: 'No. of Orders'
                }
            },
            series: [{
                name: 'Pending',
                data: [13, 3]
            }, {
                name: 'Delivered',
                data: [8, 13]
            }]
        };

        this.chart = chart(this.chartTarget.nativeElement, options);
    }
}