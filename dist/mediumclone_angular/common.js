"use strict";
(self["webpackChunkmediumclone_angular"] = self["webpackChunkmediumclone_angular"] || []).push([["common"],{

/***/ 6910:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/articleForm/articleForm.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleFormComponent": () => (/* binding */ ArticleFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backendErrorMessages/backendErrorMessages.component */ 5419);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);







function ArticleFormComponent_mc_backend_error_messages_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-backend-error-messages", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("backendErrors", ctx_r0.errors);
  }
}
class ArticleFormComponent {
  constructor(fb) {
    this.fb = fb;
    this.isSubmitting = false;
    this.errors = null;
    this.articleSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.form = this.fb.nonNullable.group({
      title: '',
      description: '',
      body: '',
      tagList: ''
    });
  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    if (!this.initialValues) {
      throw new Error('Inputs are not provided');
    }
    this.form.patchValue({
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' ')
    });
  }
  onSubmit() {
    const formValues = this.form.getRawValue();
    const articleFormValues = {
      ...formValues,
      tagList: formValues.tagList.split(' ')
    };
    this.articleSubmit.emit(articleFormValues);
  }
}
ArticleFormComponent.ɵfac = function ArticleFormComponent_Factory(t) {
  return new (t || ArticleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};
ArticleFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ArticleFormComponent,
  selectors: [["mc-article-form"]],
  inputs: {
    initialValues: "initialValues",
    isSubmitting: "isSubmitting",
    errors: "errors"
  },
  outputs: {
    articleSubmit: "articleSubmit"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 18,
  vars: 3,
  consts: [[1, "editor-page"], [1, "container", "page"], [1, "row"], [1, "col-md-10", "offset-md-1", "col-xs-12"], [3, "backendErrors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Article title", "formControlName", "title", 1, "form-control", "form-control-lg"], ["type", "text", "placeholder", "What is this article about", "formControlName", "description", 1, "form-control", "form-control-lg"], ["type", "text", "rows", "8", "placeholder", "Write your article (in markdown)", "formControlName", "body", 1, "form-control", "form-control-lg"], ["type", "text", "placeholder", "Enter tags", "formControlName", "tagList", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "pull-xs-right", "btn-primary", 3, "disabled"], [3, "backendErrors"]],
  template: function ArticleFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArticleFormComponent_mc_backend_error_messages_4_Template, 2, 1, "mc-backend-error-messages", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ArticleFormComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "fieldset")(7, "fieldset", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "fieldset", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "fieldset", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "textarea", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "fieldset", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "fieldset")(16, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Publish article ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.isSubmitting);
    }
  },
  dependencies: [_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_0__.BackendErrorMessages, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 7251:
/*!****************************************************!*\
  !*** ./src/app/shared/services/article.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleService": () => (/* binding */ ArticleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ArticleService {
  constructor(http) {
    this.http = http;
  }
  getArticle(slug) {
    const fullUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}/articles/${slug}`;
    return this.http.get(fullUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.article));
  }
}
ArticleService.ɵfac = function ArticleService_Factory(t) {
  return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
ArticleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ArticleService,
  factory: ArticleService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=common.js.map