import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { appRoutes } from './app/app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { authFeatureKey, authReducer } from './app/auth/store/reducers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from 'src/app/auth/store/effects';
import * as feedEffects from 'src/app/shared/components/feed/store/effects';
import * as tagsEffects from 'src/app/shared/components/tags/store/effects';
import * as addToFavoritesEffects from 'src/app/shared/components/addToFavorites/store/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { authInterceptor } from './app/auth/services/auth.interceptor';
import {
  feedFeatureKey,
  feedReducer,
} from './app/shared/components/feed/store/reducers';
import {
  tagsFeatureKey,
  tagsReducer,
} from './app/shared/components/tags/store/reducers';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideState(tagsFeatureKey, tagsReducer),
    provideEffects(
      authEffects,
      feedEffects,
      tagsEffects,
      addToFavoritesEffects
    ),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
});
