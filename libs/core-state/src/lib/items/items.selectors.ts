import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  ITEMS_FEATURE_KEY,
  itemsAdapter,
  ItemsState
} from './items.reducer';
import { emptyItem } from '@mdv18/core-data';

export const selectItemsState =
  createFeatureSelector<ItemsState>(ITEMS_FEATURE_KEY);

const { selectAll, selectEntities } = itemsAdapter.getSelectors();

export const selectItemsLoading = createSelector(
  selectItemsState,
  (state: ItemsState) => state.isLoading
);

export const selectAllItems = createSelector(
  selectItemsState,
  (state: ItemsState) => selectAll(state)
);

export const selectItemsEntities = createSelector(
  selectItemsState,
  (state: ItemsState) => selectEntities(state)
);

export const selectItemId = createSelector(
  selectItemsState,
  (state: ItemsState) => state.selectedItemId
);

export const selectItem = createSelector(
  selectItemsEntities,
  selectItemId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : emptyItem
  }
);
