"use strict";
(self["webpackChunkmediumclone_angular"] = self["webpackChunkmediumclone_angular"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/topBar/topBar.component */ 5203);
/* harmony import */ var _auth_store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/store/actions */ 4532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);





class AppComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.store.dispatch(_auth_store_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.getCurrentUser());
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mc-topBar")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _shared_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent],
  encapsulation: 2
});

/***/ }),

/***/ 8693:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRoutes": () => (/* binding */ appRoutes)
/* harmony export */ });
const appRoutes = [{
  path: 'register',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_backendErrorMessages_backendErrorMessages_component_ts-node-41f376"), __webpack_require__.e("src_app_auth_auth_routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/auth/auth.routes */ 9209)).then(m => m.registerRoutes)
}, {
  path: 'login',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_backendErrorMessages_backendErrorMessages_component_ts-node-41f376"), __webpack_require__.e("src_app_auth_auth_routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/auth/auth.routes */ 9209)).then(m => m.loginRoutes)
}, {
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_banner_banner_component_ts-src_app_shared_components_feed_f-5889ab"), __webpack_require__.e("src_app_globalFeed_globalFeed_routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/globalFeed/globalFeed.routes */ 8454)).then(m => m.globalFeedRoutes)
}, {
  path: 'feed',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_banner_banner_component_ts-src_app_shared_components_feed_f-5889ab"), __webpack_require__.e("src_app_yourFeed_yourFeed_routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/yourFeed/yourFeed.routes */ 5812)).then(m => m.yourFeedRoutes)
}, {
  path: 'tags/:slug',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_banner_banner_component_ts-src_app_shared_components_feed_f-5889ab"), __webpack_require__.e("src_app_tagFeed_tagFeed_routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/tagFeed/tagFeed.routes */ 3615)).then(m => m.tagFeedRoutes)
}, {
  path: 'articles/new',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_backendErrorMessages_backendErrorMessages_component_ts-node-41f376"), __webpack_require__.e("common"), __webpack_require__.e("src_app_createArticle_createArticle_route_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/createArticle/createArticle.route */ 439)).then(m => m.routes)
}, {
  path: 'articles/:slug',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_article_article_route_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/article/article.route */ 1562)).then(m => m.routes)
}, {
  path: 'articles/:slug/edit',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_backendErrorMessages_backendErrorMessages_component_ts-node-41f376"), __webpack_require__.e("common"), __webpack_require__.e("src_app_editArticle_editArticle_route_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/editArticle/editArticle.route */ 2318)).then(m => m.routes)
}];

/***/ }),

/***/ 8783:
/*!***************************************************!*\
  !*** ./src/app/auth/services/auth.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authInterceptor": () => (/* binding */ authInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/persistance.service */ 2442);


const authInterceptor = (request, next) => {
  const persistenceService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_0__.PersistanceService);
  const token = persistenceService.get('accessToken');
  request = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : ''
    }
  });
  return next(request);
};

/***/ }),

/***/ 6518:
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class AuthService {
  constructor(http) {
    this.http = http;
  }
  getCurrentUser() {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/user`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.user));
  }
  register(data) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/users`;
    return this.http.post(url, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.user));
  }
  login(data) {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/users/login`;
    return this.http.post(url, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.user));
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4532:
/*!***************************************!*\
  !*** ./src/app/auth/store/actions.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authActions": () => (/* binding */ authActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const authActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
  source: 'auth',
  events: {
    Register: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Register success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Register failure': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    Login: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Login success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Login failure': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get current user': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Get current user success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get current user failure': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)()
  }
});

/***/ }),

/***/ 7617:
/*!***************************************!*\
  !*** ./src/app/auth/store/effects.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetCurrentUserEffect": () => (/* binding */ GetCurrentUserEffect),
/* harmony export */   "loginEffect": () => (/* binding */ loginEffect),
/* harmony export */   "redirectAfterLogin": () => (/* binding */ redirectAfterLogin),
/* harmony export */   "redirectAfterRegistration": () => (/* binding */ redirectAfterRegistration),
/* harmony export */   "registerEffect": () => (/* binding */ registerEffect)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 6518);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ 4532);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/persistance.service */ 2442);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);







// ** Register **
const registerEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), persistanceService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_2__.PersistanceService)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.register), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({
    request
  }) => {
    return authService.register(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(currentUser => {
      persistanceService.set('accessToken', currentUser.token);
      return _actions__WEBPACK_IMPORTED_MODULE_1__.authActions.registerSuccess({
        currentUser
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(errorResponse => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.registerFailure({
        errors: errorResponse.error.errors
      }));
    }));
  }));
}, {
  functional: true
});
const redirectAfterRegistration = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.registerSuccess), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => {
    router.navigateByUrl('/');
  }));
}, {
  functional: true,
  dispatch: false
});
// ** Login **
const loginEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), persistanceService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_2__.PersistanceService)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.login), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({
    request
  }) => {
    return authService.login(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(currentUser => {
      persistanceService.set('accessToken', currentUser.token);
      return _actions__WEBPACK_IMPORTED_MODULE_1__.authActions.loginSuccess({
        currentUser
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(errorResponse => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.loginFailure({
        errors: errorResponse.error.errors
      }));
    }));
  }));
}, {
  functional: true
});
const redirectAfterLogin = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.loginSuccess), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => {
    router.navigateByUrl('/');
  }));
}, {
  functional: true,
  dispatch: false
});
// ** Get Current User **
const GetCurrentUserEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), persistanceService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_shared_services_persistance_service__WEBPACK_IMPORTED_MODULE_2__.PersistanceService)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.getCurrentUser), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => {
    const token = persistanceService.get('accessToken');
    if (!token) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.getCurrentUserFailure());
    }
    return authService.getCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(currentUser => {
      return _actions__WEBPACK_IMPORTED_MODULE_1__.authActions.getCurrentUserSuccess({
        currentUser
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.getCurrentUserFailure());
    }));
  }));
}, {
  functional: true
});

/***/ }),

/***/ 8331:
/*!****************************************!*\
  !*** ./src/app/auth/store/reducers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authFeatureKey": () => (/* binding */ authFeatureKey),
/* harmony export */   "authReducer": () => (/* binding */ authReducer),
/* harmony export */   "selectCurrentUser": () => (/* binding */ selectCurrentUser),
/* harmony export */   "selectIsLoading": () => (/* binding */ selectIsLoading),
/* harmony export */   "selectIsSubmitting": () => (/* binding */ selectIsSubmitting),
/* harmony export */   "selectValidationErrors": () => (/* binding */ selectValidationErrors)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 4532);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/router-store */ 1611);



const initialState = {
  isSubmitting: false,
  isLoading: false,
  currentUser: undefined,
  validationErrors: null
};
const authFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeature)({
  name: 'auth',
  reducer: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.register, state => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.registerSuccess, (state, actions) => ({
    ...state,
    isSubmitting: false,
    currentUser: actions.currentUser
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.registerFailure, (state, actions) => ({
    ...state,
    isSubmitting: false,
    validationErrors: actions.errors
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.login, state => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.loginSuccess, (state, actions) => ({
    ...state,
    isSubmitting: false,
    currentUser: actions.currentUser
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.loginFailure, (state, actions) => ({
    ...state,
    isSubmitting: false,
    validationErrors: actions.errors
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.getCurrentUser, state => ({
    ...state,
    isLoading: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.getCurrentUserSuccess, (state, actions) => ({
    ...state,
    isLoading: false,
    currentUser: actions.currentUser
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.getCurrentUserFailure, state => ({
    ...state,
    isLoading: false,
    currentUser: null
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__.routerNavigatedAction, state => ({
    ...state,
    validationErrors: null
  })))
});
const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors
} = authFeature;

/***/ }),

/***/ 5484:
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/feed/services/feed.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedService": () => (/* binding */ FeedService)
/* harmony export */ });
/* harmony import */ var src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.development */ 1261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class FeedService {
  constructor(http) {
    this.http = http;
  }
  getFeed(url) {
    const fullUrl = `${src_environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/${url}`;
    return this.http.get(fullUrl);
  }
}
FeedService.ɵfac = function FeedService_Factory(t) {
  return new (t || FeedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
FeedService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FeedService,
  factory: FeedService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2977:
/*!*********************************************************!*\
  !*** ./src/app/shared/components/feed/store/actions.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "feedActions": () => (/* binding */ feedActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const feedActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
  source: 'feed',
  events: {
    'Get feed': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get feed success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get feed failure': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)()
  }
});

/***/ }),

/***/ 3951:
/*!*********************************************************!*\
  !*** ./src/app/shared/components/feed/store/effects.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFeedEffect": () => (/* binding */ getFeedEffect)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _services_feed_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/feed.service */ 5484);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ 2977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);





const getFeedEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), feedService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_feed_service__WEBPACK_IMPORTED_MODULE_0__.FeedService)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.feedActions.getFeed), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(({
    url
  }) => {
    return feedService.getFeed(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(feed => {
      return _actions__WEBPACK_IMPORTED_MODULE_1__.feedActions.getFeedSuccess({
        feed
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions__WEBPACK_IMPORTED_MODULE_1__.feedActions.getFeedFailure());
    }));
  }));
}, {
  functional: true
});

/***/ }),

/***/ 7568:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/feed/store/reducers.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "feedFeatureKey": () => (/* binding */ feedFeatureKey),
/* harmony export */   "feedReducer": () => (/* binding */ feedReducer),
/* harmony export */   "selectError": () => (/* binding */ selectError),
/* harmony export */   "selectFeedData": () => (/* binding */ selectFeedData),
/* harmony export */   "selectIsLoading": () => (/* binding */ selectIsLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 2977);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/router-store */ 1611);



const initialState = {
  isLoading: false,
  error: null,
  data: null
};
const feedFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeature)({
  name: 'feed',
  reducer: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.feedActions.getFeed, state => ({
    ...state,
    isLoading: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.feedActions.getFeedSuccess, (state, actions) => ({
    ...state,
    isLoading: false,
    data: actions.feed
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.feedActions.getFeedFailure, state => ({
    ...state,
    isLoading: false
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__.routerNavigatedAction, () => initialState))
});
const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectIsLoading,
  selectError,
  selectData: selectFeedData
} = feedFeature;

/***/ }),

/***/ 1015:
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/tags/services/tags.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsService": () => (/* binding */ TagsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class TagsService {
  constructor(http) {
    this.http = http;
  }
  getTags() {
    const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/tags`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.tags));
  }
}
TagsService.ɵfac = function TagsService_Factory(t) {
  return new (t || TagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
TagsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: TagsService,
  factory: TagsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3426:
/*!*********************************************************!*\
  !*** ./src/app/shared/components/tags/store/actions.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tagsActions": () => (/* binding */ tagsActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const tagsActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
  source: 'tags',
  events: {
    'Get tags': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Get tags success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get tags failure': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)()
  }
});

/***/ }),

/***/ 3466:
/*!*********************************************************!*\
  !*** ./src/app/shared/components/tags/store/effects.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTagsEffect": () => (/* binding */ getTagsEffect)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/tags.service */ 1015);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ 3426);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);





const getTagsEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), tagsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_tags_service__WEBPACK_IMPORTED_MODULE_0__.TagsService)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.tagsActions.getTags), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => {
    return tagsService.getTags().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(tags => {
      return _actions__WEBPACK_IMPORTED_MODULE_1__.tagsActions.getTagsSuccess({
        tags
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions__WEBPACK_IMPORTED_MODULE_1__.tagsActions.getTagsFailure());
    }));
  }));
}, {
  functional: true
});

/***/ }),

/***/ 1487:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tags/store/reducers.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectError": () => (/* binding */ selectError),
/* harmony export */   "selectIsLoading": () => (/* binding */ selectIsLoading),
/* harmony export */   "selectTagsData": () => (/* binding */ selectTagsData),
/* harmony export */   "tagsFeatureKey": () => (/* binding */ tagsFeatureKey),
/* harmony export */   "tagsReducer": () => (/* binding */ tagsReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 3426);


const initialState = {
  isLoading: false,
  error: null,
  data: null
};
const tagsFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeature)({
  name: 'tags',
  reducer: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.tagsActions.getTags, state => ({
    ...state,
    isLoading: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.tagsActions.getTagsSuccess, (state, actions) => ({
    ...state,
    isLoading: false,
    data: actions.tags
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.tagsActions.getTagsFailure, state => ({
    ...state,
    isLoading: false
  })))
});
const {
  name: tagsFeatureKey,
  reducer: tagsReducer,
  selectIsLoading,
  selectData: selectTagsData,
  selectError
} = tagsFeature;

/***/ }),

/***/ 5203:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/topBar/topBar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarComponent": () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var src_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/store/reducers */ 8331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);







const _c0 = function (a1) {
  return ["/profiles", a1];
};
function TopBarComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 5)(2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u00A0 New Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 5)(6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u00A0 Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 5)(10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, data_r1.currentUser.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", data_r1.currentUser.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A0 ", data_r1.currentUser.username, " ");
  }
}
function TopBarComponent_ng_container_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 5)(2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 5)(5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function TopBarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1)(2, "div", 2)(3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TopBarComponent_ng_container_0_ng_container_9_Template, 13, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TopBarComponent_ng_container_0_ng_container_10_Template, 7, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r1.currentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r1.currentUser === null);
  }
}
class TopBarComponent {
  constructor(store) {
    this.store = store;
    this.data$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)({
      currentUser: this.store.select(src_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_0__.selectCurrentUser)
    });
  }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
  return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};
TopBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TopBarComponent,
  selectors: [["mc-topBar"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "navbar", "navbar-light"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], [1, "nav", "navbar-nav", "pull-xs-right"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/articles/new", 1, "nav-link"], [1, "ion-compose"], ["routerLink", "/settings", 1, "nav-link"], [1, "ion-gear-a"], [1, "nav-link", 3, "routerLink"], [1, "user-pic", 3, "src"], ["routerLink", "/login", 1, "nav-link"], ["routerLink", "/register", 1, "nav-link"]],
  template: function TopBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopBarComponent_ng_container_0_Template, 11, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.data$));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 2442:
/*!********************************************************!*\
  !*** ./src/app/shared/services/persistance.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersistanceService": () => (/* binding */ PersistanceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PersistanceService {
  set(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to a local storage', e);
    }
  }
  get(key) {
    try {
      const localStorageItem = localStorage.getItem(key);
      return localStorageItem ? JSON.parse(localStorageItem) : null;
    } catch (e) {
      console.error('Error getting from local storage', e);
      return null;
    }
  }
}
PersistanceService.ɵfac = function PersistanceService_Factory(t) {
  return new (t || PersistanceService)();
};
PersistanceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PersistanceService,
  factory: PersistanceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1261:
/*!*****************************************************!*\
  !*** ./src/environments/environment.development.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  apiURLdev: 'http://localhost:3000/api',
  apiURL: 'https://api.realworld.io/api',
  limit: 10
};

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  apiURLdev: 'http://localhost:3000/api',
  apiURL: 'https://api.realworld.io/api',
  limit: 10
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 5041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.routes */ 8693);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/auth/store/reducers */ 8331);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var src_app_auth_store_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/store/effects */ 7617);
/* harmony import */ var src_app_shared_components_feed_store_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/feed/store/effects */ 3951);
/* harmony import */ var src_app_shared_components_tags_store_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/tags/store/effects */ 3466);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/router-store */ 1611);
/* harmony import */ var _app_auth_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/auth/services/auth.interceptor */ 8783);
/* harmony import */ var _app_shared_components_feed_store_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/shared/components/feed/store/reducers */ 7568);
/* harmony import */ var _app_shared_components_tags_store_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/shared/components/tags/store/reducers */ 1487);

















(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.withInterceptors)([_app_auth_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__.authInterceptor])), (0,_angular_router__WEBPACK_IMPORTED_MODULE_11__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_1__.appRoutes), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.provideStore)({
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_13__.routerReducer
  }), (0,_ngrx_router_store__WEBPACK_IMPORTED_MODULE_13__.provideRouterStore)(), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.provideState)(_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_2__.authFeatureKey, _app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_2__.authReducer), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.provideState)(_app_shared_components_feed_store_reducers__WEBPACK_IMPORTED_MODULE_7__.feedFeatureKey, _app_shared_components_feed_store_reducers__WEBPACK_IMPORTED_MODULE_7__.feedReducer), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.provideState)(_app_shared_components_tags_store_reducers__WEBPACK_IMPORTED_MODULE_8__.tagsFeatureKey, _app_shared_components_tags_store_reducers__WEBPACK_IMPORTED_MODULE_8__.tagsReducer), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.provideEffects)(src_app_auth_store_effects__WEBPACK_IMPORTED_MODULE_3__, src_app_shared_components_feed_store_effects__WEBPACK_IMPORTED_MODULE_4__, src_app_shared_components_tags_store_effects__WEBPACK_IMPORTED_MODULE_5__), (0,_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__.provideStoreDevtools)({
    maxAge: 25,
    logOnly: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.isDevMode)(),
    autoPause: true,
    trace: false,
    traceLimit: 75
  })]
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map