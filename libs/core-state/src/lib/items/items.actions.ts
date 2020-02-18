import { createAction, props } from '@ngrx/store';

import { Item } from '@mdv18/core-data';

export const itemSelected = createAction(
  '[ITEM][SELECTED]',
  props<{ selectedItemId: string }>()
);
export const loadItems = createAction(
  '[ITEM][LOAD]'
);
export const itemsLoaded = createAction(
  '[ITEM][LOADED]',
  props<{ items: Item[] }>()
);
export const createItem = createAction(
  '[ITEM][CREATE]',
  props<{ item: Item }>()
);
export const itemCreated = createAction(
  '[ITEM][CREATED]',
  props<{ item: Item }>()
);
export const updateItem = createAction(
  '[ITEM][UPDATE]',
  props<{ item: Item }>()
);
export const itemUpdated = createAction(
  '[ITEM][UPDATED]',
  props<{ item: Item }>()
);
export const deleteItem = createAction(
  '[ITEM][DELETE]',
  props<{ item: Item }>()
);
export const itemDeleted = createAction(
  '[ITEM][DELETED]',
  props<{ item: Item }>()
);
