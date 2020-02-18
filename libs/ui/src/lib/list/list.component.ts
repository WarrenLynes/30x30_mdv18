import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '@mdv18/core-data';

@Component({
  selector: 'mdv18-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: Item[];
  @Input() selected: Item;
  @Output() selectItem = new EventEmitter<number>();
  @Output() deleteItem = new EventEmitter<Item>();

  constructor() { }

  ngOnInit() {
  }
}
