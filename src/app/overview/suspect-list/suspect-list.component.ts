import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspect-list',
  templateUrl: './suspect-list.component.html',
  styleUrls: ['./suspect-list.component.scss'],
})
export class SuspectListComponent implements OnInit {
  memos: any[] = [
    { id: 1, title: 'Omakwu Ten', status: true, date: 1588797123000 },
    { id: 2, title: 'Callistus Praise', status: true, date: 1588797123000 },
    { id: 3, title: 'Freedom Ekpo', status: true, date: 1588537923000 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
