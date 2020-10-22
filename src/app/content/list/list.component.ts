import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //values=['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor() { }

  ngOnInit(): void {
  }
  // onKey(event: KeyboardEvent) { // without type info
  //   this.values += (event.target as HTMLInputElement).value + ' | ';
  // }
  // onKey(event: string) { // without type info
  //   this.values += event + ' | ';
  // }
  // addNewValue(value: string) { // without type info
  //   this.values.push(value);
  // }
}
