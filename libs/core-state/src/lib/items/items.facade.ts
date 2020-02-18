import { Injectable } from '@angular/core';
import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import * as fromItems from './items.reducer';
import * as itemsActions from './items.actions';
import {
  selectAllItems,
  selectItem,
  selectItemsLoading
} from './items.selectors';
import { Item } from '@mdv18/core-data';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ItemsFacade {
  allItems$ = this.store.pipe(select(selectAllItems));
  selectedItem$ = this.store.pipe(select(selectItem));
  itemLoading$ = this.store.pipe(select(selectItemsLoading));

  constructor(
    private store: Store<fromItems.ItemsPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectItem(selectedItemId: any) {
    this.dispatch(itemsActions.itemSelected({ selectedItemId }));
  }

  loadItems() {
    this.dispatch(itemsActions.loadItems());
  }

  createItem(item: Item) {
    this.dispatch(itemsActions.createItem({ item }));
  }

  updateItem(item: Item) {
    this.dispatch(itemsActions.updateItem({ item }));
  }

  deleteItem(item: Item) {
    this.dispatch(itemsActions.deleteItem({ item }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
