import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'transactions' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
