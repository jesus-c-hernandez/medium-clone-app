"use strict";
(self["webpackChunkmediumclone_angular"] = self["webpackChunkmediumclone_angular"] || []).push([["default-src_app_shared_components_banner_banner_component_ts-src_app_shared_components_feed_f-5889ab"],{

/***/ 3228:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/banner/banner.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BannerComponent {}
BannerComponent.ɵfac = function BannerComponent_Factory(t) {
  return new (t || BannerComponent)();
};
BannerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BannerComponent,
  selectors: [["mc-banner"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 0,
  consts: [[1, "banner"], [1, "container"]],
  template: function BannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Medium Clone");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A place to share knowledge");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  encapsulation: 2
});

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

/***/ 6334:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/feed/feed.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedComponent": () => (/* binding */ FeedComponent)
/* harmony export */ });
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/actions */ 2977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/reducers */ 7568);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errorMessage/errorMessage.component */ 2051);
/* harmony import */ var _loadingMessage_loadingMessage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loadingMessage/loadingMessage.component */ 8303);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pagination/pagination.component */ 3556);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! query-string */ 4100);
/* harmony import */ var _tagList_tagList_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tagList/tagList.component */ 216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 3488);















function FeedComponent_ng_container_0_mc_loading_message_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mc-loading-message");
  }
}
function FeedComponent_ng_container_0_mc_error_message_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mc-error-message", 2);
  }
  if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("errorMessage", data_r1.error);
  }
}
const _c0 = function (a1) {
  return ["/profiles", a1];
};
const _c1 = function (a1) {
  return ["/articles", a1];
};
function FeedComponent_ng_container_0_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 9)(5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "ADD TO FAVORITE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "a", 12)(12, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Read more...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "mc-tag-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const article_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](9, _c0, article_r7.author.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", article_r7.author.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](11, _c0, article_r7.author.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", article_r7.author.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](article_r7.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](13, _c1, article_r7.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](article_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](article_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tags", article_r7.tagList);
  }
}
function FeedComponent_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FeedComponent_ng_container_0_div_3_div_1_Template, 19, 15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "mc-pagination", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", data_r1.feed.articles);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("total", data_r1.feed.articlesCount)("limit", ctx_r4.limit)("url", ctx_r4.baseUrl)("currentPage", ctx_r4.currentPage);
  }
}
function FeedComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FeedComponent_ng_container_0_mc_loading_message_1_Template, 1, 0, "mc-loading-message", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, FeedComponent_ng_container_0_mc_error_message_2_Template, 1, 1, "mc-error-message", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, FeedComponent_ng_container_0_div_3_Template, 3, 5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r1.feed);
  }
}
class FeedComponent {
  constructor(store, router, route) {
    this.store = store;
    this.router = router;
    this.route = route;
    this.apiUrl = '';
    this.data$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)({
      isLoading: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectIsLoading),
      error: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectError),
      feed: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectFeedData)
    });
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.limit;
    this.baseUrl = this.router.url.split('?')[0];
    this.currentPage = 0;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentPage = Number(params['page'] || '1');
      this.fetchFeed();
    });
  }
  ngOnChanges(changes) {
    const isApiUrChanged = !changes['apiUrl'].firstChange && changes['apiUrl'].currentValue !== changes['apiUrl'].previousValue;
    if (isApiUrChanged) {
      this.fetchFeed();
    }
  }
  fetchFeed() {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = query_string__WEBPACK_IMPORTED_MODULE_6__["default"].parseUrl(this.apiUrl);
    const stringifiedParams = query_string__WEBPACK_IMPORTED_MODULE_6__["default"].stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.feedActions.getFeed({
      url: apiUrlWithParams
    }));
  }
}
FeedComponent.ɵfac = function FeedComponent_Factory(t) {
  return new (t || FeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
};
FeedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: FeedComponent,
  selectors: [["mc-feed"]],
  inputs: {
    apiUrl: "apiUrl"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [3, "errorMessage", 4, "ngIf"], [3, "errorMessage"], ["class", "article-preview", 4, "ngFor", "ngForOf"], [3, "total", "limit", "url", "currentPage"], [1, "article-preview"], [1, "article-meta"], [3, "routerLink"], [3, "src"], [1, "info"], [1, "date"], [1, "pull-xs-right"], [1, "preview-link", 3, "routerLink"], [3, "tags"]],
  template: function FeedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FeedComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.data$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__.ErrorMessageComponent, _loadingMessage_loadingMessage_component__WEBPACK_IMPORTED_MODULE_3__.LoadingMessageComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent, _tagList_tagList_component__WEBPACK_IMPORTED_MODULE_7__.TagListComponent],
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

/***/ 3556:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils.service */ 1094);





const _c0 = function (a0) {
  return {
    active: a0
  };
};
const _c1 = function (a0) {
  return {
    page: a0
  };
};
function PaginationComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r0.currentPage === page_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r0.url)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, page_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", page_r1, " ");
  }
}
class PaginationComponent {
  constructor(utilsService) {
    this.utilsService = utilsService;
    this.total = 0;
    this.limit = 10;
    this.currentPage = 1;
    this.url = '';
    this.pagesCount = 1;
    this.pages = [];
  }
  ngOnInit() {
    this.pagesCount = Math.ceil(this.total / this.currentPage);
    this.pages = this.pagesCount > 0 ? this.utilsService.range(1, this.limit) : [];
  }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
  return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService));
};
PaginationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PaginationComponent,
  selectors: [["mc-pagination"]],
  inputs: {
    total: "total",
    limit: "limit",
    currentPage: "currentPage",
    url: "url"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "pagination"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "routerLink", "queryParams"]],
  template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 3, 8, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
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

/***/ }),

/***/ 4109:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tags/tags.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsComponent": () => (/* binding */ TagsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/reducers */ 1487);
/* harmony import */ var _loadingMessage_loadingMessage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loadingMessage/loadingMessage.component */ 8303);
/* harmony import */ var _errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errorMessage/errorMessage.component */ 2051);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ 3426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);










function TagsComponent_ng_container_0_mc_loading_message_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mc-loading-message");
  }
}
function TagsComponent_ng_container_0_mc_error_message_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mc-error-message", 3);
  }
  if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errorMessage", data_r1.error);
  }
}
const _c0 = function (a1) {
  return ["/tags", a1];
};
function TagsComponent_ng_container_0_div_3_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, tag_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", tag_r7, " ");
  }
}
function TagsComponent_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Popular Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TagsComponent_ng_container_0_div_3_a_4_Template, 2, 4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", data_r1.tags);
  }
}
function TagsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TagsComponent_ng_container_0_mc_loading_message_1_Template, 1, 0, "mc-loading-message", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TagsComponent_ng_container_0_mc_error_message_2_Template, 1, 1, "mc-error-message", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TagsComponent_ng_container_0_div_3_Template, 5, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r1.tags);
  }
}
class TagsComponent {
  constructor(store) {
    this.store = store;
    this.data$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)({
      isLoading: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_0__.selectIsLoading),
      error: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_0__.selectError),
      tags: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_0__.selectTagsData)
    });
  }
  ngOnInit() {
    this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__.tagsActions.getTags());
  }
}
TagsComponent.ɵfac = function TagsComponent_Factory(t) {
  return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};
TagsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TagsComponent,
  selectors: [["mc-tags"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [3, "errorMessage", 4, "ngIf"], ["class", "sidebar", 4, "ngIf"], [3, "errorMessage"], [1, "sidebar"], [1, "tag-list"], ["class", "tag-default tag-pill", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "tag-default", "tag-pill", 3, "routerLink"]],
  template: function TagsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TagsComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.data$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _loadingMessage_loadingMessage_component__WEBPACK_IMPORTED_MODULE_1__.LoadingMessageComponent, _errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__.ErrorMessageComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 815:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/toggler/toggler.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TogglerComponent": () => (/* binding */ TogglerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/store/reducers */ 8331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);






function TogglerComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3)(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Your feed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a1) {
  return ["/tags", a1];
};
function TogglerComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.tagName));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" # \u00A0", ctx_r1.tagName, " ");
  }
}
const _c1 = function () {
  return {
    exact: true
  };
};
class TogglerComponent {
  constructor(store) {
    this.store = store;
    this.currentUser$ = this.store.select(src_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_0__.selectCurrentUser);
  }
}
TogglerComponent.ɵfac = function TogglerComponent_Factory(t) {
  return new (t || TogglerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
};
TogglerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TogglerComponent,
  selectors: [["mc-toggler"]],
  inputs: {
    tagName: "tagName"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 8,
  vars: 6,
  consts: [[1, "feed-toogle"], [1, "nav", "nav-pills", "outline-active"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", "queryParamsHandling", "merge", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/feed", "routerLinkActive", "active", 1, "nav-link"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]],
  template: function TogglerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TogglerComponent_li_2_Template, 3, 0, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 3)(5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Global feed ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TogglerComponent_li_7_Template, 3, 4, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx.currentUser$));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tagName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive],
  encapsulation: 2
});

/***/ }),

/***/ 1094:
/*!**************************************************!*\
  !*** ./src/app/shared/services/utils.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsService": () => (/* binding */ UtilsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UtilsService {
  range(start, end) {
    return [...Array(end - start).keys()].map(e => e + start);
  }
}
UtilsService.ɵfac = function UtilsService_Factory(t) {
  return new (t || UtilsService)();
};
UtilsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: UtilsService,
  factory: UtilsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8435:
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ decodeUriComponent)
/* harmony export */ });
const token = '%[a-f0-9]{2}';
const singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
const multiMatcher = new RegExp('(' + token + ')+', 'gi');
function decodeComponents(components, split) {
  try {
    // Try to decode the entire string first
    return [decodeURIComponent(components.join(''))];
  } catch {
    // Do nothing
  }
  if (components.length === 1) {
    return components;
  }
  split = split || 1;

  // Split the array in 2 parts
  const left = components.slice(0, split);
  const right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch {
    let tokens = input.match(singleMatcher) || [];
    for (let i = 1; i < tokens.length; i++) {
      input = decodeComponents(tokens, i).join('');
      tokens = input.match(singleMatcher) || [];
    }
    return input;
  }
}
function customDecodeURIComponent(input) {
  // Keep track of all the replacements and prefill the map with the `BOM`
  const replaceMap = {
    '%FE%FF': '\uFFFD\uFFFD',
    '%FF%FE': '\uFFFD\uFFFD'
  };
  let match = multiMatcher.exec(input);
  while (match) {
    try {
      // Decode as big chunks as possible
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch {
      const result = decode(match[0]);
      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }
    match = multiMatcher.exec(input);
  }

  // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
  replaceMap['%C2'] = '\uFFFD';
  const entries = Object.keys(replaceMap);
  for (const key of entries) {
    // Replace all decoded components
    input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
  }
  return input;
}
function decodeUriComponent(encodedURI) {
  if (typeof encodedURI !== 'string') {
    throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
  }
  try {
    // Try the built in decoder first
    return decodeURIComponent(encodedURI);
  } catch {
    // Fallback to a more advanced decoder
    return customDecodeURIComponent(encodedURI);
  }
}

/***/ }),

/***/ 8981:
/*!******************************************!*\
  !*** ./node_modules/filter-obj/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "excludeKeys": () => (/* binding */ excludeKeys),
/* harmony export */   "includeKeys": () => (/* binding */ includeKeys)
/* harmony export */ });
function includeKeys(object, predicate) {
  const result = {};
  if (Array.isArray(predicate)) {
    for (const key of predicate) {
      const descriptor = Object.getOwnPropertyDescriptor(object, key);
      if (descriptor?.enumerable) {
        Object.defineProperty(result, key, descriptor);
      }
    }
  } else {
    // `Reflect.ownKeys()` is required to retrieve symbol properties
    for (const key of Reflect.ownKeys(object)) {
      const descriptor = Object.getOwnPropertyDescriptor(object, key);
      if (descriptor.enumerable) {
        const value = object[key];
        if (predicate(key, value, object)) {
          Object.defineProperty(result, key, descriptor);
        }
      }
    }
  }
  return result;
}
function excludeKeys(object, predicate) {
  if (Array.isArray(predicate)) {
    const set = new Set(predicate);
    return includeKeys(object, key => !set.has(key));
  }
  return includeKeys(object, (key, value, object) => !predicate(key, value, object));
}

/***/ }),

/***/ 2298:
/*!*******************************************!*\
  !*** ./node_modules/query-string/base.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exclude": () => (/* binding */ exclude),
/* harmony export */   "extract": () => (/* binding */ extract),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "parseUrl": () => (/* binding */ parseUrl),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "stringify": () => (/* binding */ stringify),
/* harmony export */   "stringifyUrl": () => (/* binding */ stringifyUrl)
/* harmony export */ });
/* harmony import */ var decode_uri_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decode-uri-component */ 8435);
/* harmony import */ var split_on_first__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! split-on-first */ 4875);
/* harmony import */ var filter_obj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! filter-obj */ 8981);



const isNullOrUndefined = value => value === null || value === undefined;

// eslint-disable-next-line unicorn/prefer-code-point
const strictUriEncode = string => encodeURIComponent(string).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
const encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');
function encoderForArrayFormat(options) {
  switch (options.arrayFormat) {
    case 'index':
      {
        return key => (result, value) => {
          const index = result.length;
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }
          if (value === null) {
            return [...result, [encode(key, options), '[', index, ']'].join('')];
          }
          return [...result, [encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')];
        };
      }
    case 'bracket':
      {
        return key => (result, value) => {
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }
          if (value === null) {
            return [...result, [encode(key, options), '[]'].join('')];
          }
          return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
        };
      }
    case 'colon-list-separator':
      {
        return key => (result, value) => {
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }
          if (value === null) {
            return [...result, [encode(key, options), ':list='].join('')];
          }
          return [...result, [encode(key, options), ':list=', encode(value, options)].join('')];
        };
      }
    case 'comma':
    case 'separator':
    case 'bracket-separator':
      {
        const keyValueSep = options.arrayFormat === 'bracket-separator' ? '[]=' : '=';
        return key => (result, value) => {
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          // Translate null to an empty string so that it doesn't serialize as 'null'
          value = value === null ? '' : value;
          if (result.length === 0) {
            return [[encode(key, options), keyValueSep, encode(value, options)].join('')];
          }
          return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
        };
      }
    default:
      {
        return key => (result, value) => {
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }
          if (value === null) {
            return [...result, encode(key, options)];
          }
          return [...result, [encode(key, options), '=', encode(value, options)].join('')];
        };
      }
  }
}
function parserForArrayFormat(options) {
  let result;
  switch (options.arrayFormat) {
    case 'index':
      {
        return (key, value, accumulator) => {
          result = /\[(\d*)]$/.exec(key);
          key = key.replace(/\[\d*]$/, '');
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === undefined) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      }
    case 'bracket':
      {
        return (key, value, accumulator) => {
          result = /(\[])$/.exec(key);
          key = key.replace(/\[]$/, '');
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === undefined) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [...accumulator[key], value];
        };
      }
    case 'colon-list-separator':
      {
        return (key, value, accumulator) => {
          result = /(:list)$/.exec(key);
          key = key.replace(/:list$/, '');
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === undefined) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [...accumulator[key], value];
        };
      }
    case 'comma':
    case 'separator':
      {
        return (key, value, accumulator) => {
          const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
          const isEncodedArray = typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
          value = isEncodedArray ? decode(value, options) : value;
          const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
          accumulator[key] = newValue;
        };
      }
    case 'bracket-separator':
      {
        return (key, value, accumulator) => {
          const isArray = /(\[])$/.test(key);
          key = key.replace(/\[]$/, '');
          if (!isArray) {
            accumulator[key] = value ? decode(value, options) : value;
            return;
          }
          const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map(item => decode(item, options));
          if (accumulator[key] === undefined) {
            accumulator[key] = arrayValue;
            return;
          }
          accumulator[key] = [...accumulator[key], ...arrayValue];
        };
      }
    default:
      {
        return (key, value, accumulator) => {
          if (accumulator[key] === undefined) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [...[accumulator[key]].flat(), value];
        };
      }
  }
}
function validateArrayFormatSeparator(value) {
  if (typeof value !== 'string' || value.length !== 1) {
    throw new TypeError('arrayFormatSeparator must be single character string');
  }
}
function encode(value, options) {
  if (options.encode) {
    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }
  return value;
}
function decode(value, options) {
  if (options.decode) {
    return (0,decode_uri_component__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  }
  return value;
}
function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }
  if (typeof input === 'object') {
    return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map(key => input[key]);
  }
  return input;
}
function removeHash(input) {
  const hashStart = input.indexOf('#');
  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }
  return input;
}
function getHash(url) {
  let hash = '';
  const hashStart = url.indexOf('#');
  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }
  return hash;
}
function parseValue(value, options) {
  if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
    value = Number(value);
  } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
    value = value.toLowerCase() === 'true';
  }
  return value;
}
function extract(input) {
  input = removeHash(input);
  const queryStart = input.indexOf('?');
  if (queryStart === -1) {
    return '';
  }
  return input.slice(queryStart + 1);
}
function parse(query, options) {
  options = {
    decode: true,
    sort: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ',',
    parseNumbers: false,
    parseBooleans: false,
    ...options
  };
  validateArrayFormatSeparator(options.arrayFormatSeparator);
  const formatter = parserForArrayFormat(options);

  // Create an object with no prototype
  const returnValue = Object.create(null);
  if (typeof query !== 'string') {
    return returnValue;
  }
  query = query.trim().replace(/^[?#&]/, '');
  if (!query) {
    return returnValue;
  }
  for (const parameter of query.split('&')) {
    if (parameter === '') {
      continue;
    }
    const parameter_ = options.decode ? parameter.replace(/\+/g, ' ') : parameter;
    let [key, value] = (0,split_on_first__WEBPACK_IMPORTED_MODULE_1__["default"])(parameter_, '=');
    if (key === undefined) {
      key = parameter_;
    }

    // Missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    value = value === undefined ? null : ['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat) ? value : decode(value, options);
    formatter(decode(key, options), value, returnValue);
  }
  for (const [key, value] of Object.entries(returnValue)) {
    if (typeof value === 'object' && value !== null) {
      for (const [key2, value2] of Object.entries(value)) {
        value[key2] = parseValue(value2, options);
      }
    } else {
      returnValue[key] = parseValue(value, options);
    }
  }
  if (options.sort === false) {
    return returnValue;
  }

  // TODO: Remove the use of `reduce`.
  // eslint-disable-next-line unicorn/no-array-reduce
  return (options.sort === true ? Object.keys(returnValue).sort() : Object.keys(returnValue).sort(options.sort)).reduce((result, key) => {
    const value = returnValue[key];
    if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
      // Sort object keys, not values
      result[key] = keysSorter(value);
    } else {
      result[key] = value;
    }
    return result;
  }, Object.create(null));
}
function stringify(object, options) {
  if (!object) {
    return '';
  }
  options = {
    encode: true,
    strict: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ',',
    ...options
  };
  validateArrayFormatSeparator(options.arrayFormatSeparator);
  const shouldFilter = key => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === '';
  const formatter = encoderForArrayFormat(options);
  const objectCopy = {};
  for (const [key, value] of Object.entries(object)) {
    if (!shouldFilter(key)) {
      objectCopy[key] = value;
    }
  }
  const keys = Object.keys(objectCopy);
  if (options.sort !== false) {
    keys.sort(options.sort);
  }
  return keys.map(key => {
    const value = object[key];
    if (value === undefined) {
      return '';
    }
    if (value === null) {
      return encode(key, options);
    }
    if (Array.isArray(value)) {
      if (value.length === 0 && options.arrayFormat === 'bracket-separator') {
        return encode(key, options) + '[]';
      }
      return value.reduce(formatter(key), []).join('&');
    }
    return encode(key, options) + '=' + encode(value, options);
  }).filter(x => x.length > 0).join('&');
}
function parseUrl(url, options) {
  options = {
    decode: true,
    ...options
  };
  let [url_, hash] = (0,split_on_first__WEBPACK_IMPORTED_MODULE_1__["default"])(url, '#');
  if (url_ === undefined) {
    url_ = url;
  }
  return {
    url: url_?.split('?')?.[0] ?? '',
    query: parse(extract(url), options),
    ...(options && options.parseFragmentIdentifier && hash ? {
      fragmentIdentifier: decode(hash, options)
    } : {})
  };
}
function stringifyUrl(object, options) {
  options = {
    encode: true,
    strict: true,
    [encodeFragmentIdentifier]: true,
    ...options
  };
  const url = removeHash(object.url).split('?')[0] || '';
  const queryFromUrl = extract(object.url);
  const query = {
    ...parse(queryFromUrl, {
      sort: false
    }),
    ...object.query
  };
  let queryString = stringify(query, options);
  if (queryString) {
    queryString = `?${queryString}`;
  }
  let hash = getHash(object.url);
  if (object.fragmentIdentifier) {
    const urlObjectForFragmentEncode = new URL(url);
    urlObjectForFragmentEncode.hash = object.fragmentIdentifier;
    hash = options[encodeFragmentIdentifier] ? urlObjectForFragmentEncode.hash : `#${object.fragmentIdentifier}`;
  }
  return `${url}${queryString}${hash}`;
}
function pick(input, filter, options) {
  options = {
    parseFragmentIdentifier: true,
    [encodeFragmentIdentifier]: false,
    ...options
  };
  const {
    url,
    query,
    fragmentIdentifier
  } = parseUrl(input, options);
  return stringifyUrl({
    url,
    query: (0,filter_obj__WEBPACK_IMPORTED_MODULE_2__.includeKeys)(query, filter),
    fragmentIdentifier
  }, options);
}
function exclude(input, filter, options) {
  const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);
  return pick(input, exclusionFilter, options);
}

/***/ }),

/***/ 4100:
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 2298);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_base_js__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ 4875:
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ splitOnFirst)
/* harmony export */ });
function splitOnFirst(string, separator) {
  if (!(typeof string === 'string' && typeof separator === 'string')) {
    throw new TypeError('Expected the arguments to be of type `string`');
  }
  if (string === '' || separator === '') {
    return [];
  }
  const separatorIndex = string.indexOf(separator);
  if (separatorIndex === -1) {
    return [];
  }
  return [string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length)];
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_components_banner_banner_component_ts-src_app_shared_components_feed_f-5889ab.js.map