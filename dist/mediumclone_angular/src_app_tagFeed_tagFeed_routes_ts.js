"use strict";
(self["webpackChunkmediumclone_angular"] = self["webpackChunkmediumclone_angular"] || []).push([["src_app_tagFeed_tagFeed_routes_ts"],{

/***/ 8445:
/*!*********************************************************!*\
  !*** ./src/app/tagFeed/components/tagFeed.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagFeedComponent": () => (/* binding */ TagFeedComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/banner/banner.component */ 3228);
/* harmony import */ var src_app_shared_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/feed/feed.component */ 6334);
/* harmony import */ var src_app_shared_components_tags_tags_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/tags/tags.component */ 4109);
/* harmony import */ var src_app_shared_components_toggler_toggler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/toggler/toggler.component */ 815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);






class TagFeedComponent {
  constructor(route) {
    this.route = route;
    this.apiUrl = '';
    this.tagName = '';
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
}
TagFeedComponent.ɵfac = function TagFeedComponent_Factory(t) {
  return new (t || TagFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
};
TagFeedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TagFeedComponent,
  selectors: [["mc-global-feed"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 9,
  vars: 2,
  consts: [[1, "home-page"], [1, "container", "page"], [1, "row"], [1, "col-md-9"], [3, "tagName"], [3, "apiUrl"], [1, "col-md-3"]],
  template: function TagFeedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mc-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mc-toggler", 4)(6, "mc-feed", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mc-tags");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tagName", ctx.tagName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("apiUrl", ctx.apiUrl);
    }
  },
  dependencies: [src_app_shared_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_1__.FeedComponent, src_app_shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, src_app_shared_components_tags_tags_component__WEBPACK_IMPORTED_MODULE_2__.TagsComponent, src_app_shared_components_toggler_toggler_component__WEBPACK_IMPORTED_MODULE_3__.TogglerComponent],
  encapsulation: 2
});

/***/ }),

/***/ 3615:
/*!*******************************************!*\
  !*** ./src/app/tagFeed/tagFeed.routes.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tagFeedRoutes": () => (/* binding */ tagFeedRoutes)
/* harmony export */ });
/* harmony import */ var _components_tagFeed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tagFeed.component */ 8445);

const tagFeedRoutes = [{
  path: '',
  component: _components_tagFeed_component__WEBPACK_IMPORTED_MODULE_0__.TagFeedComponent
}];

/***/ })

}]);
//# sourceMappingURL=src_app_tagFeed_tagFeed_routes_ts.js.map