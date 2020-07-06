(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ability/ability.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ability/ability.component.ts ***!
  \**********************************************/
/*! exports provided: AbilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilityComponent", function() { return AbilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");




function AbilityComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ability[0].effect);
} }
function AbilityComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 2);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diametr", 10);
} }
class AbilityComponent {
    constructor() {
        this.isLoaded = false;
    }
    getAbility() {
        fetch(this.url).then(res => res.json()).then(r => {
            this.ability = r.effect_entries.filter(item => item.language.name == 'en');
            this.isLoaded = true;
        });
    }
    ngOnInit() {
        this.getAbility();
    }
}
AbilityComponent.ɵfac = function AbilityComponent_Factory(t) { return new (t || AbilityComponent)(); };
AbilityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbilityComponent, selectors: [["app-ability"]], inputs: { url: "url" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["unset", ""], [3, "diametr"]], template: function AbilityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AbilityComponent_p_0_Template, 2, 1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbilityComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FiaWxpdHkvYWJpbGl0eS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbilityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ability',
                templateUrl: './ability.component.html',
                styleUrls: ['./ability.component.scss']
            }]
    }], function () { return []; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pokemon/pokemon.component */ "./src/app/pokemon/pokemon.component.ts");











function AppComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r2.name);
} }
function AppComponent_app_pokemon_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pokemon", 10);
} if (rf & 2) {
    const pokemon_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", pokemon_r3);
} }
const _c0 = function () { return [10, 20, 50, 100]; };
class AppComponent {
    constructor() {
        this.searchValue = '';
        this.title = 'Pokemons';
        this.pageIndex = 0;
        this.pageSize = 10;
        this.type = 'none';
        this.types = [];
    }
    getAllPokemons() {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=999&offset=0`).then(res => res.json()).then(r => {
            this.allPokemons = r.results;
            this.pokemonsOfType = r.results;
            this.totalPages = r.count;
            this.handleSearch();
            this.itemsInPage(0, 10);
        });
    }
    getTypes() {
        fetch(`https://pokeapi.co/api/v2/type`).then(res => res.json()).then(r => {
            this.types = r.results;
        });
    }
    typeOnChange() {
        if (this.type == 'none') {
            this.pokemonsOfType = this.allPokemons;
            this.handleSearch();
        }
        else {
            fetch(`https://pokeapi.co/api/v2/type/${this.type}`).then(res => res.json()).then(r => {
                this.pokemonsOfType = r.pokemon.map(item => item.pokemon);
                this.handleSearch();
            });
        }
    }
    itemsInPage(page, limit) {
        this.result = this.filteredPokemons.slice(page * limit, (page + 1) * limit);
    }
    page(obj) {
        this.pageIndex = obj.pageIndex;
        this.pageSize = obj.pageSize;
        this.itemsInPage(obj.pageIndex, obj.pageSize);
    }
    ngOnInit() {
        this.getTypes();
        this.getAllPokemons();
    }
    handleSearch() {
        this.filteredPokemons = this.pokemonsOfType.filter(item => item.name.indexOf(this.searchValue) === -1 ? false : true);
        this.totalPages = this.filteredPokemons.length;
        this.pageIndex = 0;
        this.pageSize = 10;
        this.itemsInPage(this.pageIndex, this.pageSize);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 10, consts: [["matInput", "", "placeholder", "Search...", 3, "ngModel", "input", "ngModelChange"], [3, "pageIndex", "length", "pageSizeOptions", "pageSize", "page"], [1, "center"], ["appearance", "fill"], [3, "value", "selectionChange", "valueChange"], ["value", "none"], [3, "value", 4, "ngFor", "ngForOf"], [1, "container"], [3, "info", 4, "ngFor", "ngForOf"], [3, "value"], [3, "info"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AppComponent_Template_input_input_3_listener() { return ctx.handleSearch(); })("ngModelChange", function AppComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-paginator", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function AppComponent_Template_mat_paginator_page_4_listener($event) { return ctx.page($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Filter by type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AppComponent_Template_mat_select_selectionChange_9_listener() { return ctx.typeOnChange(); })("valueChange", function AppComponent_Template_mat_select_valueChange_9_listener($event) { return ctx.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_mat_option_12_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_app_pokemon_14_Template, 1, 1, "app-pokemon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("length", ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx.pageIndex)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("pageSize", ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.result);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_9__["PokemonComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 20px;\n  justify-content: center;\n}\n\ninput[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.mat-paginator-container[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSx1QkFBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxufVxyXG4ubWF0LXBhZ2luYXRvci1jb250YWluZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2VudGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pokemon/pokemon.component */ "./src/app/pokemon/pokemon.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _pokemon_modal_pokemon_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pokemon-modal/pokemon-modal.component */ "./src/app/pokemon-modal/pokemon-modal.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _ability_ability_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ability/ability.component */ "./src/app/ability/ability.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _evolution_chain_evolution_chain_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./evolution-chain/evolution-chain.component */ "./src/app/evolution-chain/evolution-chain.component.ts");
/* harmony import */ var _el_of_chain_el_of_chain_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./el-of-chain/el-of-chain.component */ "./src/app/el-of-chain/el-of-chain.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_10__["PokemonComponent"],
        _pokemon_modal_pokemon_modal_component__WEBPACK_IMPORTED_MODULE_14__["PokemonModalComponent"],
        _ability_ability_component__WEBPACK_IMPORTED_MODULE_16__["AbilityComponent"],
        _evolution_chain_evolution_chain_component__WEBPACK_IMPORTED_MODULE_18__["EvolutionChainComponent"],
        _el_of_chain_el_of_chain_component__WEBPACK_IMPORTED_MODULE_19__["ElOfChainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_10__["PokemonComponent"],
                    _pokemon_modal_pokemon_modal_component__WEBPACK_IMPORTED_MODULE_14__["PokemonModalComponent"],
                    _ability_ability_component__WEBPACK_IMPORTED_MODULE_16__["AbilityComponent"],
                    _evolution_chain_evolution_chain_component__WEBPACK_IMPORTED_MODULE_18__["EvolutionChainComponent"],
                    _el_of_chain_el_of_chain_component__WEBPACK_IMPORTED_MODULE_19__["ElOfChainComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/el-of-chain/el-of-chain.component.ts":
/*!******************************************************!*\
  !*** ./src/app/el-of-chain/el-of-chain.component.ts ***!
  \******************************************************/
/*! exports provided: ElOfChainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElOfChainComponent", function() { return ElOfChainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");




function ElOfChainComponent_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ElOfChainComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 3);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diametr", 10);
} }
class ElOfChainComponent {
    constructor() {
        this.isLoaded = false;
    }
    getImage() {
        fetch("https://pokeapi.co/api/v2/pokemon/" + this.name).then(res => res.json()).then(r => {
            this.imageSrc = r.sprites.front_default;
            this.isLoaded = true;
        });
    }
    ngOnInit() {
        this.getImage();
    }
}
ElOfChainComponent.ɵfac = function ElOfChainComponent_Factory(t) { return new (t || ElOfChainComponent)(); };
ElOfChainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ElOfChainComponent, selectors: [["app-el-of-chain"]], inputs: { name: "name" }, decls: 3, vars: 2, consts: [[3, "src", 4, "ngIf", "ngIfElse"], ["unset", ""], [3, "src"], [3, "diametr"]], template: function ElOfChainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ElOfChainComponent_img_0_Template, 1, 1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElOfChainComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 33%;\n  image-rendering: pixelated;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWwtb2YtY2hhaW4vZWwtb2YtY2hhaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2VsLW9mLWNoYWluL2VsLW9mLWNoYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6MzMlO1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElOfChainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-el-of-chain',
                templateUrl: './el-of-chain.component.html',
                styleUrls: ['./el-of-chain.component.scss']
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/evolution-chain/evolution-chain.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/evolution-chain/evolution-chain.component.ts ***!
  \**************************************************************/
/*! exports provided: EvolutionChainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvolutionChainComponent", function() { return EvolutionChainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _el_of_chain_el_of_chain_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../el-of-chain/el-of-chain.component */ "./src/app/el-of-chain/el-of-chain.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");





function EvolutionChainComponent_div_0_app_el_of_chain_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-el-of-chain", 3);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", item_r4);
} }
function EvolutionChainComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EvolutionChainComponent_div_0_app_el_of_chain_1_Template, 1, 1, "app-el-of-chain", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.evoChain);
} }
function EvolutionChainComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diametr", 10);
} }
class EvolutionChainComponent {
    constructor() {
        this.evoChain = [];
        this.isLoaded = false;
    }
    getSpecies() {
        fetch(this.speciesUrl).then(res => res.json()).then(r => {
            this.getEvoChain(r.evolution_chain.url);
        });
    }
    getEvoChain(url) {
        fetch(url).then(res => res.json()).then(r => {
            let el = r.chain;
            do {
                this.evoChain.push(el.species.name);
                el = el.evolves_to[0];
            } while (el !== undefined);
            this.isLoaded = true;
        });
    }
    ngOnInit() {
        this.getSpecies();
    }
}
EvolutionChainComponent.ɵfac = function EvolutionChainComponent_Factory(t) { return new (t || EvolutionChainComponent)(); };
EvolutionChainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvolutionChainComponent, selectors: [["app-evolution-chain"]], inputs: { speciesUrl: "speciesUrl" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["unset", ""], [3, "name", 4, "ngFor", "ngForOf"], [3, "name"], [3, "diametr"]], template: function EvolutionChainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EvolutionChainComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EvolutionChainComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _el_of_chain_el_of_chain_component__WEBPACK_IMPORTED_MODULE_2__["ElOfChainComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2b2x1dGlvbi1jaGFpbi9ldm9sdXRpb24tY2hhaW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvolutionChainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-evolution-chain',
                templateUrl: './evolution-chain.component.html',
                styleUrls: ['./evolution-chain.component.scss']
            }]
    }], function () { return []; }, { speciesUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pokemon-modal/pokemon-modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pokemon-modal/pokemon-modal.component.ts ***!
  \**********************************************************/
/*! exports provided: PokemonModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonModalComponent", function() { return PokemonModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _evolution_chain_evolution_chain_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../evolution-chain/evolution-chain.component */ "./src/app/evolution-chain/evolution-chain.component.ts");
/* harmony import */ var _ability_ability_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ability/ability.component */ "./src/app/ability/ability.component.ts");








function PokemonModalComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](type_r3.type.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", type_r3.type.name, " ");
} }
function PokemonModalComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r4.stat.name.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r4.base_stat);
} }
function PokemonModalComponent_mat_tab_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ability", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ability_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ability_r5.ability.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ability_r5.ability.url);
} }
class PokemonModalComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
PokemonModalComponent.ɵfac = function PokemonModalComponent_Factory(t) { return new (t || PokemonModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
PokemonModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonModalComponent, selectors: [["app-pokemon-modal"]], decls: 42, vars: 9, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "src"], [3, "class", 4, "ngFor", "ngForOf"], [1, "stats"], [4, "ngFor", "ngForOf"], [3, "label", 4, "ngFor", "ngForOf"], [3, "speciesUrl"], [3, "label"], [3, "url"]], template: function PokemonModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Base Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PokemonModalComponent_span_25_Template, 2, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PokemonModalComponent_tr_31_Template, 5, 2, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Abilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PokemonModalComponent_mat_tab_36_Template, 2, 2, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Evolution Chain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-evolution-chain", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.name[0].toUpperCase() + ctx.data.name.substr(1), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.data.sprites.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.base_experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.stats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.abilities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("speciesUrl", ctx.data.species.url);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _evolution_chain_evolution_chain_component__WEBPACK_IMPORTED_MODULE_4__["EvolutionChainComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _ability_ability_component__WEBPACK_IMPORTED_MODULE_5__["AbilityComponent"]], styles: [".mat-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 40%;\n  image-rendering: pixelated;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 60%;\n  border-spacing: 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  font-weight: bold;\n  width: 50%;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n  width: 100%;\n}\n\n.stats[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.stats[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.stats[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 15%;\n  background-color: lightgray;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9rZW1vbi1tb2RhbC9wb2tlbW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLDBCQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUZBO0VBQ0ksV0FBQTtBQUtKOztBQUZBO0VBQ0ksaUJBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFNSiIsImZpbGUiOiJzcmMvYXBwL3Bva2Vtb24tbW9kYWwvcG9rZW1vbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYnV0dG9ue1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDo0MCU7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcclxufVxyXG50YWJsZXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxudGQ6Zmlyc3QtY2hpbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOjUwJTtcclxufVxyXG50ZDpsYXN0LWNoaWxke1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uc3RhdHN7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uc3RhdHMgdGQ6bGFzdC1jaGlsZHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5zdGF0cyB0ZHtcclxuICAgIHdpZHRoOjE1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcblxyXG4iXX0= */", ".bug[_ngcontent-%COMP%] {\n  background-color: #a8b820;\n}\n\n.dark[_ngcontent-%COMP%] {\n  background-color: #705848;\n}\n\n.dragon[_ngcontent-%COMP%] {\n  background-color: #6f81e6;\n}\n\n.electric[_ngcontent-%COMP%] {\n  background-color: #f8d030;\n}\n\n.fairy[_ngcontent-%COMP%] {\n  background-color: #f8a0e0;\n}\n\n.fighting[_ngcontent-%COMP%] {\n  background-color: #903028;\n}\n\n.fire[_ngcontent-%COMP%] {\n  background-color: #f05030;\n}\n\n.flying[_ngcontent-%COMP%] {\n  background-color: #a890f0;\n}\n\n.ghost[_ngcontent-%COMP%] {\n  background-color: #705898;\n}\n\n.grass[_ngcontent-%COMP%] {\n  background-color: #78c850;\n}\n\n.ground[_ngcontent-%COMP%] {\n  background-color: #e0c068;\n}\n\n.ice[_ngcontent-%COMP%] {\n  background-color: #98d8d8;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: #a8a878;\n}\n\n.poison[_ngcontent-%COMP%] {\n  background-color: #a040a0;\n}\n\n.psychic[_ngcontent-%COMP%] {\n  background-color: #f85888;\n}\n\n.rock[_ngcontent-%COMP%] {\n  background-color: #b8a038;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  background-color: #403246;\n}\n\n.steel[_ngcontent-%COMP%] {\n  background-color: #b8b8d0;\n}\n\n.unknown[_ngcontent-%COMP%] {\n  background-color: #68a090;\n}\n\n.water[_ngcontent-%COMP%] {\n  background-color: #6890f0;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  border-radius: 10px;\n  padding: 5px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNFO0VBQ0UseUJBQUE7QUFFSjs7QUFBRTtFQUNDLHlCQUFBO0FBR0g7O0FBREU7RUFDQSx5QkFBQTtBQUlGOztBQUZFO0VBQ0EseUJBQUE7QUFLRjs7QUFIRTtFQUNBLHlCQUFBO0FBTUY7O0FBSkU7RUFDQSx5QkFBQTtBQU9GOztBQUxFO0VBQ0EseUJBQUE7QUFRRjs7QUFORTtFQUNBLHlCQUFBO0FBU0Y7O0FBUEU7RUFDQSx5QkFBQTtBQVVGOztBQVJFO0VBQ0EseUJBQUE7QUFXRjs7QUFURTtFQUNBLHlCQUFBO0FBWUY7O0FBVkU7RUFDQSx5QkFBQTtBQWFGOztBQVhFO0VBQ0EseUJBQUE7QUFjRjs7QUFaRTtFQUNBLHlCQUFBO0FBZUY7O0FBYkU7RUFDQSx5QkFBQTtBQWdCRjs7QUFkRTtFQUNBLHlCQUFBO0FBaUJGOztBQWZFO0VBQ0EseUJBQUE7QUFrQkY7O0FBaEJFO0VBQ0EseUJBQUE7QUFtQkY7O0FBakJFO0VBQ0EseUJBQUE7QUFvQkY7O0FBbEJFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBcUJKIiwiZmlsZSI6InNyYy9hcHAvY29sb3JzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E4YjgyMDtcclxuICB9XHJcbiAgLmRhcmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA1ODQ4O1xyXG4gIH1cclxuICAuZHJhZ29ue1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY4MWU2O1xyXG4gIH1cclxuICAuZWxlY3RyaWN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDAzMDtcclxuICB9XHJcbiAgLmZhaXJ5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGEwZTA7XHJcbiAgfVxyXG4gIC5maWdodGluZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAzMDI4O1xyXG4gIH1cclxuICAuZmlyZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1MDMwO1xyXG4gIH1cclxuICAuZmx5aW5ne1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhODkwZjA7XHJcbiAgfVxyXG4gIC5naG9zdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA1ODk4O1xyXG4gIH1cclxuICAuZ3Jhc3N7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4Yzg1MDtcclxuICB9XHJcbiAgLmdyb3VuZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjMDY4O1xyXG4gIH1cclxuICAuaWNle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OGQ4ZDg7XHJcbiAgfVxyXG4gIC5ub3JtYWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YTg3ODtcclxuICB9XHJcbiAgLnBvaXNvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTA0MGEwO1xyXG4gIH1cclxuICAucHN5Y2hpY3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg1ODg4O1xyXG4gIH1cclxuICAucm9ja3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhhMDM4O1xyXG4gIH1cclxuICAuc2hhZG93e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDMyNDY7XHJcbiAgfVxyXG4gIC5zdGVlbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhiOGQwO1xyXG4gIH1cclxuICAudW5rbm93bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhhMDkwO1xyXG4gIH1cclxuICAud2F0ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4OTBmMDtcclxuICB9XHJcbiAgc3BhbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemon-modal',
                templateUrl: './pokemon-modal.component.html',
                styleUrls: ['./pokemon-modal.component.scss', '../colors.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/pokemon/pokemon.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pokemon/pokemon.component.ts ***!
  \**********************************************/
/*! exports provided: PokemonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonComponent", function() { return PokemonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pokemon_modal_pokemon_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pokemon-modal/pokemon-modal.component */ "./src/app/pokemon-modal/pokemon-modal.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");








function PokemonComponent_mat_card_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](type_r7.type.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", type_r7.type.name, " ");
} }
function PokemonComponent_mat_card_0_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.pokemon.sprites.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PokemonComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PokemonComponent_mat_card_0_span_4_Template, 2, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokemonComponent_mat_card_0_img_6_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonComponent_mat_card_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.handleDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.info.name[0].toUpperCase() + ctx_r0.info.name.substr(1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pokemon.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isImg)("ngIfElse", _r3);
} }
function PokemonComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diametr", 10);
} }
function PokemonComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} }
class PokemonComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.isLoaded = false;
        this.isImg = false;
    }
    getPokemonInfo() {
        fetch(this.info.url).then(res => res.json()).then(r => {
            this.pokemon = r;
            this.isLoaded = true;
            if (r.sprites.front_default != null)
                this.isImg = true;
        });
    }
    ngOnInit() {
        this.getPokemonInfo();
    }
    handleDetails() {
        let dialogRef = this.dialog.open(_pokemon_modal_pokemon_modal_component__WEBPACK_IMPORTED_MODULE_1__["PokemonModalComponent"], {
            height: '520px',
            width: '600px',
            data: this.pokemon
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
PokemonComponent.ɵfac = function PokemonComponent_Factory(t) { return new (t || PokemonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
PokemonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonComponent, selectors: [["app-pokemon"]], inputs: { info: "info" }, decls: 5, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["unset", ""], ["placeholderImg", ""], [3, "class", 4, "ngFor", "ngForOf"], ["mat-card-image", "", 3, "src", 4, "ngIf", "ngIfElse"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-card-image", "", 3, "src"], [3, "diametr"], ["src", "../../assets/images.png", "mat-card-image", ""]], template: function PokemonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PokemonComponent_mat_card_0_Template, 9, 4, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokemonComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], styles: ["[_nghost-%COMP%] {\n  margin: 20px;\n  width: 200px;\n  text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  image-rendering: pixelated;\n}\n\n.mat-raised-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9rZW1vbi9wb2tlbW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksMEJBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxnQkFBQTtBQU1KIiwiZmlsZSI6InNyYy9hcHAvcG9rZW1vbi9wb2tlbW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW1ne1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9ue1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4ubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxubWF0LWNhcmQtY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iXX0= */", ".bug[_ngcontent-%COMP%] {\n  background-color: #a8b820;\n}\n\n.dark[_ngcontent-%COMP%] {\n  background-color: #705848;\n}\n\n.dragon[_ngcontent-%COMP%] {\n  background-color: #6f81e6;\n}\n\n.electric[_ngcontent-%COMP%] {\n  background-color: #f8d030;\n}\n\n.fairy[_ngcontent-%COMP%] {\n  background-color: #f8a0e0;\n}\n\n.fighting[_ngcontent-%COMP%] {\n  background-color: #903028;\n}\n\n.fire[_ngcontent-%COMP%] {\n  background-color: #f05030;\n}\n\n.flying[_ngcontent-%COMP%] {\n  background-color: #a890f0;\n}\n\n.ghost[_ngcontent-%COMP%] {\n  background-color: #705898;\n}\n\n.grass[_ngcontent-%COMP%] {\n  background-color: #78c850;\n}\n\n.ground[_ngcontent-%COMP%] {\n  background-color: #e0c068;\n}\n\n.ice[_ngcontent-%COMP%] {\n  background-color: #98d8d8;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: #a8a878;\n}\n\n.poison[_ngcontent-%COMP%] {\n  background-color: #a040a0;\n}\n\n.psychic[_ngcontent-%COMP%] {\n  background-color: #f85888;\n}\n\n.rock[_ngcontent-%COMP%] {\n  background-color: #b8a038;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  background-color: #403246;\n}\n\n.steel[_ngcontent-%COMP%] {\n  background-color: #b8b8d0;\n}\n\n.unknown[_ngcontent-%COMP%] {\n  background-color: #68a090;\n}\n\n.water[_ngcontent-%COMP%] {\n  background-color: #6890f0;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  border-radius: 10px;\n  padding: 5px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNFO0VBQ0UseUJBQUE7QUFFSjs7QUFBRTtFQUNDLHlCQUFBO0FBR0g7O0FBREU7RUFDQSx5QkFBQTtBQUlGOztBQUZFO0VBQ0EseUJBQUE7QUFLRjs7QUFIRTtFQUNBLHlCQUFBO0FBTUY7O0FBSkU7RUFDQSx5QkFBQTtBQU9GOztBQUxFO0VBQ0EseUJBQUE7QUFRRjs7QUFORTtFQUNBLHlCQUFBO0FBU0Y7O0FBUEU7RUFDQSx5QkFBQTtBQVVGOztBQVJFO0VBQ0EseUJBQUE7QUFXRjs7QUFURTtFQUNBLHlCQUFBO0FBWUY7O0FBVkU7RUFDQSx5QkFBQTtBQWFGOztBQVhFO0VBQ0EseUJBQUE7QUFjRjs7QUFaRTtFQUNBLHlCQUFBO0FBZUY7O0FBYkU7RUFDQSx5QkFBQTtBQWdCRjs7QUFkRTtFQUNBLHlCQUFBO0FBaUJGOztBQWZFO0VBQ0EseUJBQUE7QUFrQkY7O0FBaEJFO0VBQ0EseUJBQUE7QUFtQkY7O0FBakJFO0VBQ0EseUJBQUE7QUFvQkY7O0FBbEJFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBcUJKIiwiZmlsZSI6InNyYy9hcHAvY29sb3JzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E4YjgyMDtcclxuICB9XHJcbiAgLmRhcmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA1ODQ4O1xyXG4gIH1cclxuICAuZHJhZ29ue1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY4MWU2O1xyXG4gIH1cclxuICAuZWxlY3RyaWN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDAzMDtcclxuICB9XHJcbiAgLmZhaXJ5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGEwZTA7XHJcbiAgfVxyXG4gIC5maWdodGluZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAzMDI4O1xyXG4gIH1cclxuICAuZmlyZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1MDMwO1xyXG4gIH1cclxuICAuZmx5aW5ne1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhODkwZjA7XHJcbiAgfVxyXG4gIC5naG9zdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA1ODk4O1xyXG4gIH1cclxuICAuZ3Jhc3N7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4Yzg1MDtcclxuICB9XHJcbiAgLmdyb3VuZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjMDY4O1xyXG4gIH1cclxuICAuaWNle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OGQ4ZDg7XHJcbiAgfVxyXG4gIC5ub3JtYWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YTg3ODtcclxuICB9XHJcbiAgLnBvaXNvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTA0MGEwO1xyXG4gIH1cclxuICAucHN5Y2hpY3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg1ODg4O1xyXG4gIH1cclxuICAucm9ja3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhhMDM4O1xyXG4gIH1cclxuICAuc2hhZG93e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDMyNDY7XHJcbiAgfVxyXG4gIC5zdGVlbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhiOGQwO1xyXG4gIH1cclxuICAudW5rbm93bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhhMDkwO1xyXG4gIH1cclxuICAud2F0ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4OTBmMDtcclxuICB9XHJcbiAgc3BhbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemon',
                templateUrl: './pokemon.component.html',
                styleUrls: ['./pokemon.component.scss', '../colors.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dude\pokemon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map