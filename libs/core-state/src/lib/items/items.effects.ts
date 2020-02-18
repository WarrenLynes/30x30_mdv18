import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { ItemsFacade } from './items.facade';
import * as itemsActions from './items.actions';
import { Item, ItemsService, SnackbarService } from '@mdv18/core-data';
import { ItemsPartialState } from './items.reducer';
import { AppFacade } from '../app/app.facade';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() =>
    this.dataPersistence.fetch(itemsActions.loadItems, {
      run: (
        action: ReturnType<typeof itemsActions.loadItems>,
        state: ItemsPartialState
      ) => {
        this.appFacade.addLoad('[ITEMS][LOAD]');
        return this.itemsService.all().pipe(
          tap(() => this.notifyService.openSnackBar('Successfully Loaded Items')),
          map((items: Item[]) => itemsActions.itemsLoaded({ items })),
          tap(() => this.appFacade.removeLoad('[ITEMS][LOAD]'))
        );
      },
      onError: (action: ReturnType<typeof itemsActions.loadItems>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addItem$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(itemsActions.createItem, {
      run: (
        action: ReturnType<typeof itemsActions.createItem>,
        state: ItemsPartialState
      ) => {
        this.appFacade.addLoad('[ITEMS][CREATE]');

        return this.itemsService.create(action.item).pipe(
          map((item: Item) => itemsActions.itemCreated({ item })),
          tap(() => this.notifyService.openSnackBar('Successfully Added a Item')),
          tap(() => this.appFacade.removeLoad('[ITEMS][CREATE]'))
        );
      },
      onError: (action: ReturnType<typeof itemsActions.createItem>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateItem$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(itemsActions.updateItem, {
      run: (
        action: ReturnType<typeof itemsActions.updateItem>,
        state: ItemsPartialState
      ) => {
        this.appFacade.addLoad('[ITEMS][UPDATE]');

        return this.itemsService.update(action.item).pipe(
          map((item: Item) => itemsActions.itemUpdated({ item })),
          tap(() => this.notifyService.openSnackBar('Successfully Updated a Item')),
          tap(() => this.appFacade.removeLoad('[ITEMS][UPDATE]'))
        );
      },
      onError: (action: ReturnType<typeof itemsActions.updateItem>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteItem$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(itemsActions.deleteItem, {
      run: (
        action: ReturnType<typeof itemsActions.deleteItem>,
        state: ItemsPartialState
      ) => {
        this.appFacade.addLoad('[ITEMS][DELETE]');
        return this.itemsService.delete(action.item.id).pipe(
          map((item: Item) => itemsActions.itemDeleted({ item })),
          tap(() => this.notifyService.openSnackBar('Successfully Deleted a Item')),
          tap(() => this.itemsFacade.loadItems()),
          tap(() => this.appFacade.removeLoad('[ITEMS][DELETE]'))
        );
      },
      onError: (action: ReturnType<typeof itemsActions.deleteItem>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ItemsPartialState>,
    private itemsService: ItemsService,
    private itemsFacade: ItemsFacade,
    private notifyService: SnackbarService,
    private appFacade: AppFacade
  ) {}
}
