import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-case-chart',
  templateUrl: './case-chart.component.html',
  styleUrls: ['./case-chart.component.scss'],
})
export class CaseChartComponent implements OnInit {
  chartData: any[];
  view: any[] = [1000, 400];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  @ViewChild('chartContent') elementView: ElementRef;
  contentHeight: number;
  contentWidth: number;

  loaded: boolean = true;

  constructor() {
    Object.assign(this, { chartData });
  }

  ngAfterViewInit() {
    this.contentHeight = this.elementView.nativeElement.offsetHeight;
    this.contentWidth = this.elementView.nativeElement.offsetWidth;
    this.view = [this.contentWidth, this.contentHeight];
    this.loaded = true;
    // Object.assign(this, { chartData });
  }

  ngOnInit() {
    Object.assign(this, { chartData });
    // console.log('Wholla');
    // this.contentHeight = this.elementView.nativeElement.offsetHeight;
    // this.contentWidth = this.elementView.nativeElement.offsetWidth;
    // this.view = [this.contentWidth, this.contentHeight];
    // this.loaded = true;
  }

  onSelect(data): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}

export var chartData = [
  {
    name: 'Human trafficking',
    series: [
      {
        value: 5072,
        name: 'Jan',
      },
      {
        value: 4524,
        name: 'Feb',
      },
      {
        value: 3980,
        name: 'Mar',
      },
      {
        value: 6098,
        name: 'Apr',
      },
      {
        value: 3298,
        name: 'May',
      },
    ],
  },
  {
    name: 'Child Trafficking',
    series: [
      {
        value: 3998,
        name: 'Jan',
      },
      {
        value: 2623,
        name: 'Feb',
      },
      {
        value: 5178,
        name: 'Mar',
      },
      {
        value: 4751,
        name: 'Apr',
      },
      {
        value: 6798,
        name: 'May',
      },
    ],
  },
  {
    name: 'Forced Marriage',
    series: [
      {
        value: 4430,
        name: 'Jan',
      },
      {
        value: 6877,
        name: 'Feb',
      },
      {
        value: 3973,
        name: 'Mar',
      },
      {
        value: 6023,
        name: 'Apr',
      },
      {
        value: 6198,
        name: 'May',
      },
    ],
  },
  {
    name: 'Forgery',
    series: [
      {
        value: 4912,
        name: 'Jan',
      },
      {
        value: 6332,
        name: 'Feb',
      },
      {
        value: 4053,
        name: 'Mar',
      },
      {
        value: 5570,
        name: 'Apr',
      },
      {
        value: 3821,
        name: 'May',
      },
    ],
  },
  {
    name: 'Kidnapping',
    series: [
      {
        value: 4344,
        name: 'Jan',
      },
      {
        value: 5874,
        name: 'Feb',
      },
      {
        value: 3937,
        name: 'Mar',
      },
      {
        value: 2751,
        name: 'Apr',
      },
      {
        value: 2186,
        name: 'May',
      },
    ],
  },
];
