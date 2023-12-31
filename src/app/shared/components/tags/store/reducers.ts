import { createFeature, createReducer, on } from '@ngrx/store';
import { TagsStateInterface } from '../types/tagsState.interface';
import { tagsActions } from './actions';
import { state } from '@angular/animations';

const initialState: TagsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const tagsFeature = createFeature({
  name: 'tags',
  reducer: createReducer(
    initialState,
    on(tagsActions.getTags, (state) => ({ ...state, isLoading: true })),
    on(tagsActions.getTagsSuccess, (state, actions) => ({
      ...state,
      isLoading: false,
      data: actions.tags,
    })),
    on(tagsActions.getTagsFailure, (state) => ({ ...state, isLoading: false }))
  ),
});

export const {
  name: tagsFeatureKey,
  reducer: tagsReducer,
  selectIsLoading,
  selectData: selectTagsData,
  selectError,
} = tagsFeature;
