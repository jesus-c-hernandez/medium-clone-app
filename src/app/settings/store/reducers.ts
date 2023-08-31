import { createFeature, createReducer, on } from '@ngrx/store';
import { SettingsStateInterface } from '../types/settingsState.interface';
import { authActions } from 'src/app/auth/store/actions';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: SettingsStateInterface = {
  isSubmmiting: false,
  validationErrors: null,
};

const settingsFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
    initialState,
    on(authActions.updateCurrentUser, (state) => ({
      ...state,
      isSubmmiting: true,
    })),
    on(authActions.updateCurrentUserSuccess, (state) => ({
      ...state,
      isSubmmiting: false,
    })),
    on(authActions.updateCurrentUserFailure, (state, actions) => ({
      ...state,
      validationErrors: actions.errors,
    })),
    on(routerNavigatedAction, () => initialState)
  ),
});

export const {
  name: settingsFeatureKey,
  reducer: settingsReducer,
  selectValidationErrors,
  selectIsSubmmiting,
} = settingsFeature;
