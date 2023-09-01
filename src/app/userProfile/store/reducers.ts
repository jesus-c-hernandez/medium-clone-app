import { createFeature, createReducer, on } from '@ngrx/store';
import { UserProfileStateInterface } from '../types/userProfileState.interface';
import { userProfileActions } from './actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: UserProfileStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const userProfileFeature = createFeature({
  name: 'userProfile',
  reducer: createReducer(
    initialState,
    on(userProfileActions.getUserProfile, (state) => ({
      ...initialState,
      isLoading: true,
    })),
    on(userProfileActions.getUserProfileSuccess, (state, actions) => ({
      ...initialState,
      data: actions.userProfile,
      isLoading: false,
    })),
    on(userProfileActions.getUserProfileFailure, (state, actions) => ({
      ...initialState,
      isLoading: false,
    })),
    on(routerNavigationAction, () => initialState)
  ),
});

export const {
  name: userProfileFeatureKey,
  reducer: userProfileReducer,
  selectIsLoading,
  selectError,
  selectData: selectUserProfileData,
} = userProfileFeature;
