"use strict";
(self["webpackChunkmediumclone_angular"] = self["webpackChunkmediumclone_angular"] || []).push([["src_app_createArticle_createArticle_route_ts"],{

/***/ 861:
/*!*********************************************************************!*\
  !*** ./src/app/createArticle/components/createArticle.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateArticleComponent": () => (/* binding */ CreateArticleComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var src_app_shared_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/articleForm/articleForm.component */ 6910);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/reducers */ 9954);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions */ 1653);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);








function CreateArticleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mc-article-form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("articleSubmit", function CreateArticleComponent_ng_container_0_Template_mc_article_form_articleSubmit_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initialValues", ctx_r0.initialValues)("isSubmitting", false)("errors", data_r1.validationErrors);
  }
}
class CreateArticleComponent {
  constructor(store) {
    this.store = store;
    this.initialValues = {
      title: '',
      description: '',
      body: '',
      tagList: []
    };
    this.data$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)({
      isSubmitting: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectIsSubmitting),
      validationErrors: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectValidationErrors)
    });
  }
  onSubmit(articleFormValues) {
    const request = {
      article: articleFormValues
    };
    this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__.createArticleActions.createArticle({
      request
    }));
  }
}
CreateArticleComponent.ɵfac = function CreateArticleComponent_Factory(t) {
  return new (t || CreateArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
};
CreateArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CreateArticleComponent,
  selectors: [["mc-create-article"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [3, "initialValues", "isSubmitting", "errors", "articleSubmit"]],
  template: function CreateArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CreateArticleComponent_ng_container_0_Template, 2, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.data$));
    }
  },
  dependencies: [src_app_shared_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_0__.ArticleFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 439:
/*!******************************************************!*\
  !*** ./src/app/createArticle/createArticle.route.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _components_createArticle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/createArticle.component */ 861);
/* harmony import */ var _services_createArticle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/createArticle.service */ 4818);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/effects */ 6846);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers */ 9954);






const routes = [{
  path: '',
  component: _components_createArticle_component__WEBPACK_IMPORTED_MODULE_0__.CreateArticleComponent,
  providers: [_services_createArticle_service__WEBPACK_IMPORTED_MODULE_1__.CreateArticleService, (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.provideEffects)(_store_effects__WEBPACK_IMPORTED_MODULE_2__), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.provideState)(_store_reducers__WEBPACK_IMPORTED_MODULE_3__.createArticleFeatureKey, _store_reducers__WEBPACK_IMPORTED_MODULE_3__.createArticleReducer)]
}];

/***/ }),

/***/ 4818:
/*!*****************************************************************!*\
  !*** ./src/app/createArticle/services/createArticle.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateArticleService": () => (/* binding */ CreateArticleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class CreateArticleService {
  constructor(http) {
    this.http = http;
  }
  createArticle(articleRequest) {
    const fullUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/articles`;
    return this.http.post(fullUrl, articleRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.article));
  }
}
CreateArticleService.ɵfac = function CreateArticleService_Factory(t) {
  return new (t || CreateArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
CreateArticleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CreateArticleService,
  factory: CreateArticleService.ɵfac
});

/***/ }),

/***/ 1653:
/*!************************************************!*\
  !*** ./src/app/createArticle/store/actions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createArticleActions": () => (/* binding */ createArticleActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const createArticleActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
  source: 'create article',
  events: {
    'Create article': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Create article success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Create article failure': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()
  }
});

/***/ }),

/***/ 6846:
/*!************************************************!*\
  !*** ./src/app/createArticle/store/effects.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createArticleEffect": () => (/* binding */ createArticleEffect),
/* harmony export */   "redirectAfterCreateEffect": () => (/* binding */ redirectAfterCreateEffect)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _services_createArticle_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/createArticle.service */ 4818);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ 1653);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);






const createArticleEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), articleService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_createArticle_service__WEBPACK_IMPORTED_MODULE_0__.CreateArticleService)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.createArticleActions.createArticle), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(({
    request
  }) => {
    return articleService.createArticle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(article => {
      return _actions__WEBPACK_IMPORTED_MODULE_1__.createArticleActions.createArticleSuccess({
        article
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(errorResponse => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions__WEBPACK_IMPORTED_MODULE_1__.createArticleActions.createArticleFailure({
        errors: errorResponse.error.errors
      }));
    }));
  }));
}, {
  functional: true
});
const redirectAfterCreateEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.createArticleActions.createArticleSuccess), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(({
    article
  }) => {
    router.navigate(['/articles', article.slug]);
  }));
}, {
  functional: true,
  dispatch: false
});

/***/ }),

/***/ 9954:
/*!*************************************************!*\
  !*** ./src/app/createArticle/store/reducers.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createArticleFeatureKey": () => (/* binding */ createArticleFeatureKey),
/* harmony export */   "createArticleReducer": () => (/* binding */ createArticleReducer),
/* harmony export */   "selectIsSubmitting": () => (/* binding */ selectIsSubmitting),
/* harmony export */   "selectValidationErrors": () => (/* binding */ selectValidationErrors)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 1653);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/router-store */ 1611);



const initialState = {
  isSubmitting: false,
  validationErrors: null
};
const createArticleFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeature)({
  name: 'create article',
  reducer: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.createArticleActions.createArticle, state => ({
    ...state,
    isSubmitting: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.createArticleActions.createArticleSuccess, state => ({
    ...state,
    isSubmitting: false
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.createArticleActions.createArticleFailure, (state, actions) => ({
    ...state,
    validationErrors: actions.errors
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__.routerNavigatedAction, () => initialState))
});
const {
  name: createArticleFeatureKey,
  reducer: createArticleReducer,
  selectIsSubmitting,
  selectValidationErrors
} = createArticleFeature;

/***/ })

}]);
//# sourceMappingURL=src_app_createArticle_createArticle_route_ts.js.map