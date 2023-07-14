"use strict";
(self["webpackChunkmediumclone_angular"] = self["webpackChunkmediumclone_angular"] || []).push([["src_app_editArticle_editArticle_route_ts"],{

/***/ 9926:
/*!*****************************************************************!*\
  !*** ./src/app/editArticle/components/editArticle.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditArticleComponent": () => (/* binding */ EditArticleComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var src_app_shared_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/articleForm/articleForm.component */ 6910);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/reducers */ 8468);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions */ 6779);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_components_loadingMessage_loadingMessage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/loadingMessage/loadingMessage.component */ 8303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);











function EditArticleComponent_ng_container_0_mc_loading_message_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mc-loading-message");
  }
}
function EditArticleComponent_ng_container_0_mc_article_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mc-article-form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("articleSubmit", function EditArticleComponent_ng_container_0_mc_article_form_2_Template_mc_article_form_articleSubmit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.onSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("initialValues", data_r1.initialValues)("isSubmitting", false)("errors", data_r1.validationErrors);
  }
}
function EditArticleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditArticleComponent_ng_container_0_mc_loading_message_1_Template, 1, 0, "mc-loading-message", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EditArticleComponent_ng_container_0_mc_article_form_2_Template, 1, 3, "mc-article-form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r1.initialValues);
  }
}
class EditArticleComponent {
  constructor(store, route) {
    this.store = store;
    this.route = route;
    this.initialValues$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectArticle), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(article => article !== null), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(article => ({
      title: article.title,
      description: article.description,
      body: article.body,
      tagList: article.tagList
    })));
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.data$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)({
      isSubmitting: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectIsSubmitting),
      validationErrors: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectValidationErrors),
      initialValues: this.initialValues$,
      isLoading: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectIsLoading)
    });
  }
  ngOnInit() {
    this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__.editArticleActions.getArticle({
      slug: this.slug
    }));
  }
  onSubmit(articleFormValues) {
    const request = {
      article: articleFormValues
    };
    this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__.editArticleActions.updateArticle({
      request,
      slug: this.slug
    }));
  }
}
EditArticleComponent.ɵfac = function EditArticleComponent_Factory(t) {
  return new (t || EditArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
};
EditArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: EditArticleComponent,
  selectors: [["mc-edit-article"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [3, "initialValues", "isSubmitting", "errors", "articleSubmit", 4, "ngIf"], [3, "initialValues", "isSubmitting", "errors", "articleSubmit"]],
  template: function EditArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, EditArticleComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.data$));
    }
  },
  dependencies: [src_app_shared_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_0__.ArticleFormComponent, src_app_shared_components_loadingMessage_loadingMessage_component__WEBPACK_IMPORTED_MODULE_3__.LoadingMessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 2318:
/*!**************************************************!*\
  !*** ./src/app/editArticle/editArticle.route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _components_editArticle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/editArticle.component */ 9926);
/* harmony import */ var _services_editArticle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/editArticle.service */ 1823);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/effects */ 7062);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers */ 8468);






const routes = [{
  path: '',
  component: _components_editArticle_component__WEBPACK_IMPORTED_MODULE_0__.EditArticleComponent,
  providers: [_services_editArticle_service__WEBPACK_IMPORTED_MODULE_1__.EditArticleService, (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.provideEffects)(_store_effects__WEBPACK_IMPORTED_MODULE_2__), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.provideState)(_store_reducers__WEBPACK_IMPORTED_MODULE_3__.editArticleFeatureKey, _store_reducers__WEBPACK_IMPORTED_MODULE_3__.editArticleReducer)]
}];

/***/ }),

/***/ 1823:
/*!*************************************************************!*\
  !*** ./src/app/editArticle/services/editArticle.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditArticleService": () => (/* binding */ EditArticleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class EditArticleService {
  constructor(http) {
    this.http = http;
  }
  updateArticle(articleRequest, slug) {
    const fullUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/articles/${slug}`;
    return this.http.put(fullUrl, articleRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.article));
  }
}
EditArticleService.ɵfac = function EditArticleService_Factory(t) {
  return new (t || EditArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
EditArticleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: EditArticleService,
  factory: EditArticleService.ɵfac
});

/***/ }),

/***/ 6779:
/*!**********************************************!*\
  !*** ./src/app/editArticle/store/actions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editArticleActions": () => (/* binding */ editArticleActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const editArticleActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
  source: 'edit article',
  events: {
    'Get article': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get article success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get article failure': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Update article': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Update article success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Update article failure': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()
  }
});

/***/ }),

/***/ 7062:
/*!**********************************************!*\
  !*** ./src/app/editArticle/store/effects.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editArticleEffect": () => (/* binding */ editArticleEffect),
/* harmony export */   "getArticleEffect": () => (/* binding */ getArticleEffect),
/* harmony export */   "redirectAfterUpdateEffect": () => (/* binding */ redirectAfterUpdateEffect)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _services_editArticle_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/editArticle.service */ 1823);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ 6779);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/article.service */ 7251);







const getArticleEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), articleSharedService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_2__.ArticleService)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.editArticleActions.getArticle), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({
    slug
  }) => {
    return articleSharedService.getArticle(slug).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(article => {
      return _actions__WEBPACK_IMPORTED_MODULE_1__.editArticleActions.getArticleSuccess({
        article
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions__WEBPACK_IMPORTED_MODULE_1__.editArticleActions.getArticleFailure());
    }));
  }));
}, {
  functional: true
});
const editArticleEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), editArticleService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_editArticle_service__WEBPACK_IMPORTED_MODULE_0__.EditArticleService)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.editArticleActions.updateArticle), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({
    request,
    slug
  }) => {
    return editArticleService.updateArticle(request, slug).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(article => {
      return _actions__WEBPACK_IMPORTED_MODULE_1__.editArticleActions.updateArticleSuccess({
        article
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(errorResponse => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions__WEBPACK_IMPORTED_MODULE_1__.editArticleActions.updateArticleFailure({
        errors: errorResponse.error.errors
      }));
    }));
  }));
}, {
  functional: true
});
const redirectAfterUpdateEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.editArticleActions.updateArticleSuccess), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(({
    article
  }) => {
    router.navigate(['/articles', article.slug]);
  }));
}, {
  functional: true,
  dispatch: false
});

/***/ }),

/***/ 8468:
/*!***********************************************!*\
  !*** ./src/app/editArticle/store/reducers.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editArticleFeatureKey": () => (/* binding */ editArticleFeatureKey),
/* harmony export */   "editArticleReducer": () => (/* binding */ editArticleReducer),
/* harmony export */   "selectArticle": () => (/* binding */ selectArticle),
/* harmony export */   "selectIsLoading": () => (/* binding */ selectIsLoading),
/* harmony export */   "selectIsSubmitting": () => (/* binding */ selectIsSubmitting),
/* harmony export */   "selectValidationErrors": () => (/* binding */ selectValidationErrors)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 6779);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/router-store */ 1611);



const initialState = {
  article: null,
  isLoading: false,
  isSubmitting: false,
  validationErrors: null
};
const editArticleFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeature)({
  name: 'edit article',
  reducer: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.editArticleActions.getArticle, state => ({
    ...state,
    isLoading: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.editArticleActions.getArticleSuccess, (state, actions) => ({
    ...state,
    article: actions.article,
    isLoading: false
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.editArticleActions.updateArticleFailure, state => ({
    ...state,
    isLoading: false
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.editArticleActions.updateArticle, state => ({
    ...state,
    isSubmitting: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.editArticleActions.updateArticleSuccess, state => ({
    ...state,
    isSubmitting: false
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.editArticleActions.updateArticleFailure, (state, actions) => ({
    ...state,
    isLoading: false,
    validationErrors: actions.errors
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__.routerNavigatedAction, () => initialState))
});
const {
  name: editArticleFeatureKey,
  reducer: editArticleReducer,
  selectIsSubmitting,
  selectValidationErrors,
  selectIsLoading,
  selectArticle
} = editArticleFeature;

/***/ }),

/***/ 8303:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/loadingMessage/loadingMessage.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingMessageComponent": () => (/* binding */ LoadingMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoadingMessageComponent {}
LoadingMessageComponent.ɵfac = function LoadingMessageComponent_Factory(t) {
  return new (t || LoadingMessageComponent)();
};
LoadingMessageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoadingMessageComponent,
  selectors: [["mc-loading-message"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 0,
  template: function LoadingMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ })

}]);
//# sourceMappingURL=src_app_editArticle_editArticle_route_ts.js.map