import { Component, OnInit } from '@angular/core';
import { ItemsFacade } from '@mdv18/core-state';
import { Observable } from 'rxjs';
import { Item } from '@mdv18/core-data';

@Component({
  selector: 'mdv18-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items$: Observable<Item[]> = this.facade.allItems$;
  item$: Observable<Item> = this.facade.selectedItem$;

  constructor(
    private facade: ItemsFacade
  ) { }

  ngOnInit() {
    this.facade.loadItems();
  }

  onSelectItem(itemId: number) {
    this.facade.selectItem(itemId);
  }

  onDeleteItem(item: Item) {
    this.facade.deleteItem(item);
  }

  saveItem(item: Item) {
    if(item.id) {
      this.facade.updateItem(item);
    } else {
      this.facade.createItem(item);
    }

    this.reset();
  }

  reset() {
    this.facade.selectItem(null);
  }
}
