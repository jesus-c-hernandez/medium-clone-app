"use strict";
(self["webpackChunkmediumclone_angular"] = self["webpackChunkmediumclone_angular"] || []).push([["src_app_auth_auth_routes_ts"],{

/***/ 9209:
/*!*************************************!*\
  !*** ./src/app/auth/auth.routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginRoutes": () => (/* binding */ loginRoutes),
/* harmony export */   "registerRoutes": () => (/* binding */ registerRoutes)
/* harmony export */ });
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/register/register.component */ 5694);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 9125);


const registerRoutes = [{
  path: '',
  component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent
}];
const loginRoutes = [{
  path: '',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}];

/***/ }),

/***/ 9125:
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/actions */ 4532);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/reducers */ 8331);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var src_app_shared_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/backendErrorMessages/backendErrorMessages.component */ 5419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);











function LoginComponent_ng_container_0_mc_backend_error_messages_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mc-backend-error-messages", 13);
  }
  if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("backendErrors", data_r1.backendErrors);
  }
}
function LoginComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 5)(8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Need an account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, LoginComponent_ng_container_0_mc_backend_error_messages_10_Template, 1, 1, "mc-backend-error-messages", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_ng_container_0_Template_form_ngSubmit_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "fieldset", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "fieldset", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r1.backendErrors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", data_r1.isSubmitting);
  }
}
class LoginComponent {
  constructor(fb, store) {
    this.fb = fb;
    this.store = store;
    this.form = this.fb.nonNullable.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5)]]
    });
    this.data$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)({
      isSubmitting: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectIsSubmitting),
      backendErrors: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectValidationErrors)
    });
  }
  onSubmit() {
    console.log('form', this.form.getRawValue());
    const request = {
      user: this.form.getRawValue()
    };
    this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.login({
      request
    }));
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["mc-login"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], ["routerLink", "/register"], [3, "backendErrors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "disabled"], [3, "backendErrors"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LoginComponent_ng_container_0_Template, 18, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.data$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, src_app_shared_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__.BackendErrorMessages],
  encapsulation: 2
});

/***/ }),

/***/ 5694:
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/actions */ 4532);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/reducers */ 8331);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var src_app_shared_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/backendErrorMessages/backendErrorMessages.component */ 5419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);











function RegisterComponent_ng_container_0_mc_backend_error_messages_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mc-backend-error-messages", 14);
  }
  if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("backendErrors", data_r1.backendErrors);
  }
}
function RegisterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 5)(8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Have an account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RegisterComponent_ng_container_0_mc_backend_error_messages_10_Template, 1, 1, "mc-backend-error-messages", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_ng_container_0_Template_form_ngSubmit_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "fieldset", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "fieldset", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "fieldset", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r1.backendErrors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", data_r1.isSubmitting);
  }
}
class RegisterComponent {
  constructor(fb, store) {
    this.fb = fb;
    this.store = store;
    this.form = this.fb.nonNullable.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5)]]
    });
    this.data$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)({
      isSubmitting: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectIsSubmitting),
      backendErrors: this.store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_1__.selectValidationErrors)
    });
  }
  onSubmit() {
    console.log('form', this.form.getRawValue());
    const request = {
      user: this.form.getRawValue()
    };
    this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.register({
      request
    }));
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["mc-register"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], ["routerLink", "/login"], [3, "backendErrors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Username", "formControlName", "username", 1, "form-control", "form-control-lg"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "disabled"], [3, "backendErrors"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RegisterComponent_ng_container_0_Template, 20, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.data$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, src_app_shared_components_backendErrorMessages_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__.BackendErrorMessages],
  encapsulation: 2
});

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_routes_ts.js.map