"use strict";
(self["webpackChunkmediumclone_angular"] = self["webpackChunkmediumclone_angular"] || []).push([["src_app_article_article_route_ts"],{

/***/ 1562:
/*!******************************************!*\
  !*** ./src/app/article/article.route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _components_article_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/article.component */ 1960);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/effects */ 506);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/reducers */ 5645);





const routes = [{
  path: '',
  component: _components_article_component__WEBPACK_IMPORTED_MODULE_0__.ArticleComponent,
  providers: [(0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.provideEffects)(_store_effects__WEBPACK_IMPORTED_MODULE_1__), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.provideState)(_store_reducers__WEBPACK_IMPORTED_MODULE_2__.articleFeatureKey, _store_reducers__WEBPACK_IMPORTED_MODULE_2__.articleReducer)]
}];

/***/ }),

/***/ 1960:
/*!*********************************************************!*\
  !*** ./src/app/article/components/article.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleComponent": () => (/* binding */ ArticleComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/actions */ 3121);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/reducers */ 5645);
/* harmony import */ var src_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/store/reducers */ 8331);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_components_loadingMessage_loadingMessage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/loadingMessage/loadingMessage.component */ 8303);
/* harmony import */ var src_app_shared_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/errorMessage/errorMessage.component */ 2051);
/* harmony import */ var src_app_shared_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/tagList/tagList.component */ 216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 3488);













const _c0 = function (a1) {
  return ["/articles", a1, "edit"];
};
function ArticleComponent_ng_container_0_div_3_span_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Edit Article ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ArticleComponent_ng_container_0_div_3_span_11_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.deleteArticle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Delete Article ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, data_r1.article.slug));
  }
}
const _c1 = function (a1) {
  return ["/profiles", a1];
};
function ArticleComponent_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 7)(4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 10)(7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ArticleComponent_ng_container_0_div_3_span_11_Template, 6, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r1.article.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c1, data_r1.article.author.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", data_r1.article.author.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c1, data_r1.article.author.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r1.article.author.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r1.article.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r1.isAuthor);
  }
}
function ArticleComponent_ng_container_0_mc_loading_message_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mc-loading-message");
  }
}
function ArticleComponent_ng_container_0_mc_error_message_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mc-error-message");
  }
}
function ArticleComponent_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div")(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "mc-tag-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r1.article.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tags", data_r1.article.tagList);
  }
}
function ArticleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ArticleComponent_ng_container_0_div_3_Template, 12, 11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ArticleComponent_ng_container_0_mc_loading_message_5_Template, 1, 0, "mc-loading-message", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ArticleComponent_ng_container_0_mc_error_message_6_Template, 1, 0, "mc-error-message", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ArticleComponent_ng_container_0_div_7_Template, 6, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r1.article);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r1.article);
  }
}
class ArticleComponent {
  constructor(store, route) {
    this.store = store;
    this.route = route;
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.isAuthor$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)({
      article: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectArticleData),
      currentUser: this.store.select(src_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_2__.selectCurrentUser).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(currentUser => currentUser !== undefined))
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(({
      article,
      currentUser
    }) => {
      if (!article || !currentUser) {
        return false;
      }
      return article.author.username === currentUser.username;
    }));
    this.data$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)({
      isLoading: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectIsLoading),
      error: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectError),
      article: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectArticleData),
      isAuthor: this.isAuthor$
    });
  }
  ngOnInit() {
    this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.articleActions.getArticle({
      slug: this.slug
    }));
  }
  deleteArticle() {
    this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.articleActions.deleteArticle({
      slug: this.slug
    }));
  }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
  return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
};
ArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ArticleComponent,
  selectors: [["mc-article"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "article-page"], [1, "banner"], ["class", "container", 4, "ngIf"], [1, "container", "page"], ["class", "row article-content", 4, "ngIf"], [1, "container"], [1, "article-meta"], [3, "routerLink"], [3, "src"], [1, "info"], [1, "data"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "routerLink"], [1, "ion-edit"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "row", "article-content"], [1, "col-xs-12"], [3, "tags"]],
  template: function ArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ArticleComponent_ng_container_0_Template, 8, 4, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.data$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, src_app_shared_components_loadingMessage_loadingMessage_component__WEBPACK_IMPORTED_MODULE_3__.LoadingMessageComponent, src_app_shared_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_4__.ErrorMessageComponent, src_app_shared_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_5__.TagListComponent],
  encapsulation: 2
});

/***/ }),

/***/ 8091:
/*!*****************************************************!*\
  !*** ./src/app/article/services/article.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleService": () => (/* binding */ ArticleService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ArticleService {
  constructor(http) {
    this.http = http;
  }
  deleteArticle(slug) {
    const fullUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/articles/${slug}`;
    return this.http.delete(fullUrl);
  }
}
ArticleService.ɵfac = function ArticleService_Factory(t) {
  return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ArticleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ArticleService,
  factory: ArticleService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3121:
/*!******************************************!*\
  !*** ./src/app/article/store/actions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleActions": () => (/* binding */ articleActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const articleActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
  source: 'article',
  events: {
    // Get
    'Get article': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get artcicle success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Get article failure': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    // Delete
    'Delete article': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)(),
    'Delete artcicle success': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    'Delete article failure': (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)()
  }
});

/***/ }),

/***/ 506:
/*!******************************************!*\
  !*** ./src/app/article/store/effects.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteArticleEffect": () => (/* binding */ deleteArticleEffect),
/* harmony export */   "getArticleEffect": () => (/* binding */ getArticleEffect),
/* harmony export */   "redirectAfterDeleteEffect": () => (/* binding */ redirectAfterDeleteEffect)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/article.service */ 7251);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ 3121);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/article.service */ 8091);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);







const getArticleEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), articleService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_0__.ArticleService)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.articleActions.getArticle), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({
    slug
  }) => {
    return articleService.getArticle(slug).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(article => {
      return _actions__WEBPACK_IMPORTED_MODULE_1__.articleActions.getArtcicleSuccess({
        article
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions__WEBPACK_IMPORTED_MODULE_1__.articleActions.getArticleFailure());
    }));
  }));
}, {
  functional: true
});
const deleteArticleEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), articleService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_article_service__WEBPACK_IMPORTED_MODULE_2__.ArticleService)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.articleActions.deleteArticle), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({
    slug
  }) => {
    return articleService.deleteArticle(slug).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
      return _actions__WEBPACK_IMPORTED_MODULE_1__.articleActions.deleteArtcicleSuccess();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions__WEBPACK_IMPORTED_MODULE_1__.articleActions.deleteArticleFailure());
    }));
  }));
}, {
  functional: true
});
const redirectAfterDeleteEffect = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)((actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)) => {
  return actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_1__.articleActions.deleteArtcicleSuccess), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => {
    router.navigateByUrl('/');
  }));
}, {
  functional: true,
  dispatch: false
});

/***/ }),

/***/ 5645:
/*!*******************************************!*\
  !*** ./src/app/article/store/reducers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleFeatureKey": () => (/* binding */ articleFeatureKey),
/* harmony export */   "articleReducer": () => (/* binding */ articleReducer),
/* harmony export */   "selectArticleData": () => (/* binding */ selectArticleData),
/* harmony export */   "selectError": () => (/* binding */ selectError),
/* harmony export */   "selectIsLoading": () => (/* binding */ selectIsLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 3121);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/router-store */ 1611);



const initialState = {
  isLoading: false,
  error: null,
  data: null
};
const articleFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeature)({
  name: 'article',
  reducer: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.articleActions.getArticle, state => ({
    ...state,
    isLoading: true
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.articleActions.getArtcicleSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.article
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.articleActions.getArticleFailure, state => ({
    ...state,
    isLoading: false
  })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__.routerNavigatedAction, () => initialState))
});
const {
  name: articleFeatureKey,
  reducer: articleReducer,
  selectIsLoading,
  selectError,
  selectData: selectArticleData
} = articleFeature;

/***/ }),

/***/ 2051:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/errorMessage/errorMessage.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMessageComponent": () => (/* binding */ ErrorMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ErrorMessageComponent {
  constructor() {
    this.errorMessage = '';
  }
}
ErrorMessageComponent.ɵfac = function ErrorMessageComponent_Factory(t) {
  return new (t || ErrorMessageComponent)();
};
ErrorMessageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ErrorMessageComponent,
  selectors: [["mc-error-message"]],
  inputs: {
    errorMessage: "errorMessage"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 1,
  template: function ErrorMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
    }
  },
  encapsulation: 2
});

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

/***/ }),

/***/ 216:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/tagList/tagList.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagListComponent": () => (/* binding */ TagListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



function TagListComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r1, " ");
  }
}
class TagListComponent {
  constructor() {
    this.tags = [];
  }
}
TagListComponent.ɵfac = function TagListComponent_Factory(t) {
  return new (t || TagListComponent)();
};
TagListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TagListComponent,
  selectors: [["mc-tag-list"]],
  inputs: {
    tags: "tags"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "tag-list"], ["class", "tag-default tag-pill tag-outline", 4, "ngFor", "ngForOf"], [1, "tag-default", "tag-pill", "tag-outline"]],
  template: function TagListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagListComponent_li_1_Template, 2, 1, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  encapsulation: 2
});

/***/ })

}]);
//# sourceMappingURL=src_app_article_article_route_ts.js.map