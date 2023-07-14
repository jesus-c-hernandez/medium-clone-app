import { createFeature, createReducer, on } from '@ngrx/store';
import { EditArticleStateInterface } from '../types/editArticleState.interface';
import { editArticleActions } from './actions';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: EditArticleStateInterface = {
  article: null,
  isLoading: false,
  isSubmitting: false,
  validationErrors: null,
};

const editArticleFeature = createFeature({
  name: 'edit article',
  reducer: createReducer(
    initialState,
    on(editArticleActions.getArticle, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(editArticleActions.getArticleSuccess, (state, actions) => ({
      ...state,
      article: actions.article,
      isLoading: false,
    })),
    on(editArticleActions.updateArticleFailure, (state) => ({
      ...state,
      isLoading: false,
    })),
    on(editArticleActions.updateArticle, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(editArticleActions.updateArticleSuccess, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(editArticleActions.updateArticleFailure, (state, actions) => ({
      ...state,
      isLoading: false,
      validationErrors: actions.errors,
    })),
    on(routerNavigatedAction, () => initialState)
  ),
});

export const {
  name: editArticleFeatureKey,
  reducer: editArticleReducer,
  selectIsSubmitting,
  selectValidationErrors,
  selectIsLoading,
  selectArticle,
} = editArticleFeature;
