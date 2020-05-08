import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missing-persons-list',
  templateUrl: './missing-persons-list.component.html',
  styleUrls: ['./missing-persons-list.component.scss'],
})
export class MissingPersonsListComponent implements OnInit {
  memos: any[] = [
    { id: 1, title: 'Mike Okon', status: true, date: 1588797123000 },
    { id: 2, title: 'James Momoh', status: true, date: 1588797123000 },
    { id: 3, title: 'Chinwe Igwe', status: true, date: 1588537923000 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
