import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.scss'],
})
export class MemoListComponent implements OnInit {
  memos: any[] = [
    { id: 1, title: 'Memo to veran', status: true, date: 1588797123000 },
    { id: 2, title: 'General memo', status: true, date: 1588797123000 },
    { id: 3, title: 'Auditory Memo', status: true, date: 1588537923000 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
