(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var app_routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: '/' }
];
var appRoutingModule = /** @class */ (function () {
    function appRoutingModule() {
    }
    appRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(app_routes, { useHash: true }),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], appRoutingModule);
    return appRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(infoPaginaService) {
        this.infoPaginaService = infoPaginaService;
        this.title = 'frontend';
        this.showModalInit();
    }
    AppComponent.prototype.showModalInit = function () {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default()({
            imageUrl: '/src/img/nodejs.png',
            grow: '80%',
            width: '90%',
            imageAlt: 'Custom image',
            background: 'transparent',
            animation: true
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__["InfoPaginaService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__["AngularFontAwesomeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["appRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column  flex-row col-md-10 offset-md-1\" style=\" padding: 0px;\">\n    <div class=\"card border-success mb-12\">\n        <div class=\"card-header \">Datos personales</div>\n        <div class=\"card-body text-black \">\n            <h5 class=\"card-title \">Danger card title</h5>\n            <p class=\"card-text \">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.card {\r\n    padding: 0px;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\ndiv.card-header {\r\n    font-size: 25px;\r\n}\r\n\r\ndiv.card-body {\r\n    font-size: 20px;\r\n}\r\n\r\nbody {\r\n    margin: 0px;\r\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column  flex-row col-md-10 offset-md-1\" style=\" padding: 0px;\">\n    <div class=\"card text-justify col-md-12 animated bounceIn delay-4s mb-2\">\n        <div class=\"card-header mb-1\">\n            <i class=\"fas fa-map-marker-alt\"></i> Localidad\n        </div>\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Torreón Coah. Mexico</h5>\n            <p class=\"card-text\"></p>\n        </div>\n    </div>\n    <div class=\"card text-justify col-md-12 mb-2\">\n        <div class=\"card-header mb-1\">\n            <i class=\"fas fa-graduation-cap\"></i>{{infoPaginaService.info?.conocimientodev.titulo}}\n        </div>\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">{{infoPaginaService.info?.conocimientodev.lenguajes}}</h5>\n            <h5 class=\"card-title\">{{infoPaginaService.info?.conocimientodev.libfram}}</h5>\n            <h5 class=\"card-title\">{{infoPaginaService.info?.conocimientodev.bd}}</h5>\n            <p class=\"card-text\"></p>\n        </div>\n    </div>\n    <div class=\"card text-justify col-md-12 mb-2\">\n        <div class=\"card-header mb-1\">\n            <i class=\"fas fa-search\"></i>Busco\n        </div>\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Empleo como desarrollador web que me permita laborar desde casa</h5>\n            <p class=\"card-text\"></p>\n        </div>\n    </div>\n    <div class=\"card text-justify col-md-12 mb-2\">\n        <div class=\"card-header mb-1\">\n            <i class=\"fas fa-envelope\"></i>Formulario de contacto\n        </div>\n        <div class=\"card-body\">\n            <form (ngSubmit)=\"contactForm(form.value)\" #form=\"ngForm\">\n                <div class=\"form-group\">\n                    <label>Nombre</label>\n                    <input type=\"text\" class=\"form-control\" name=\"nombre\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                    <label>Asunto</label>\n                    <input type=\"text\" class=\"form-control\" name=\"asunto\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                    <label>E-mail</label>\n                    <input type=\"email\" class=\"form-control\" name=\"email\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                    <label>Mensaje</label>\n                    <textarea class=\"form-control\" cols=\"30\" rows=\"6\" name=\"mensaje\" ngModel></textarea>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n            </form>\n        </div>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/message-email.service */ "./src/app/services/message-email.service.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(message, infoPaginaService) {
        this.message = message;
        this.infoPaginaService = infoPaginaService;
    }
    HomeComponent.prototype.contactForm = function (form) {
        this.message.sendMessage(form).subscribe(function (res) {
            console.log("Res = ", res);
            if (res.ok === true) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default()({ title: "Email", text: "Tu correo ha sido envíado", type: 'success' });
            }
        });
        /* console.log("alertService "+this.message.stadoMensaje);
        if(this.message.stadoMensaje){
          
        }else{
          swal({title:"Oops...",text:"tu correo no ha sido envíado", type:'error'});
        } */
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_message_email_service__WEBPACK_IMPORTED_MODULE_1__["MessageEmailService"], _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_3__["InfoPaginaService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/info-pagina.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/info-pagina.service.ts ***!
  \*************************************************/
/*! exports provided: InfoPaginaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPaginaService", function() { return InfoPaginaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoPaginaService = /** @class */ (function () {
    function InfoPaginaService(http) {
        var _this = this;
        this.http = http;
        this.cargada = false;
        this.http.get('http://localhost:3000/infopage')
            .subscribe(function (resp) {
            _this.cargada = true;
            _this.info = resp;
            console.log(_this.info);
        });
    }
    InfoPaginaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InfoPaginaService);
    return InfoPaginaService;
}());



/***/ }),

/***/ "./src/app/services/message-email.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/message-email.service.ts ***!
  \***************************************************/
/*! exports provided: MessageEmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEmailService", function() { return MessageEmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageEmailService = /** @class */ (function () {
    function MessageEmailService(_http) {
        this._http = _http;
    }
    MessageEmailService.prototype.sendMessage = function (body) {
        try {
            return this._http.post('http://localhost:3000/sendmessage', body);
        }
        catch (error) {
            console.log("Hola :(", error);
            return error;
        }
    };
    ;
    MessageEmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageEmailService);
    return MessageEmailService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cardfooter {\r\n    background-color: white;\r\n    color: orange;\r\n    font-family: 'Roboto', sans-serif;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    position: absolute;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center  mb-3\" id=\"cardfooter\">\n    <div class=\"card-header\">\n        Contacto\n    </div>\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Alex Aguirre López</h5>\n        <p class=\"card-text\"></p>\n        <a target=\"_blank\" href=\"mailto:aguirrealex449@gmail.com\" class=\"btn btn-primary\">Gmail</a>\n    </div>\n    <div class=\"card-footer text-muted\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*body {\r\n    overflow-x: hidden;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\nnav.navbar {\r\n    margin: 0px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 20px;\r\n    position: fixed;\r\n    overflow: hidden;\r\n    z-index: 1000;\r\n    width: 100%;\r\n     Set the navbar to fixed position \r\n    top: 0;\r\n     Position the navbar at the top of the page \r\n}*/\r\n\r\nnav {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\ndiv#portada {\r\n    background-image: url(/src/img/nodejs.png);\r\n    height: 300px;\r\n    background-size: cover;\r\n    background-position: center;\r\n    padding-top: 80px;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    margin-top: 0px;\r\n}\r\n\r\n#icono-project {\r\n    margin-right: 5px;\r\n}\r\n\r\ndiv#fotoperfil {\r\n    background-image: url(/src/img/nodejs.png);\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 70%;\r\n}\r\n\r\ndiv#nombreperfil {\r\n    font-family: 'Roboto', sans-serif;\r\n    color: white;\r\n}\r\n\r\n.top-nav-collapse {\r\n    background-color: white;\r\n}\r\n\r\n.top-nav-collapse a {\r\n    color: orange !important;\r\n}\r\n\r\ndiv#settings {\r\n    position: fixed;\r\n    z-index: 1000;\r\n    border-top-right-radius: 20%;\r\n    width: 1.9rem;\r\n    height: 1.9rem;\r\n    background-color: white;\r\n}\r\n\r\n.top-nav-collapse span.navbar-toggler-icon {\r\n    background-color: orange !important;\r\n}\r\n\r\n/* ul a {\r\n    text-decoration: none;\r\n    color: white;\r\n} */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"collapse\" id=\"navbarToggleExternalContent\">\n        <div class=\"bg-dark p-4\">\n            <h5 class=\"text-white h4\">Collapsed content</h5>\n            <span class=\"text-muted\">Toggleable via the navbar brand.</span>\n        </div>\n    </div> -->\n\n<nav class=\"navbar navbar-expand-lg navbar-dark  scrolling-navbar fixed-top\">\n    <div class=\"container\">\n        <a class=\"navbar-brand m-auto\" href=\"#\">\n            <i class=\"fa fa-folder fa-folder fa-lg\"></i> {{infoPaginaService.info?.titulo}}\n        </a>\n        <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseelements\">\n                        <span class=\"navbar-toggler-icon\"></span></button>\n        <div id=\"collapseelements\" class=\"collapse navbar-collapse navbar-toggleable-xs  flex-row-reverse\">\n            <ul class=\"navbar-nav nav-pills\">\n                <li class=\"nav-item active mr-2 border border-warning \">\n                    <a routerLink=\"/\" class=\"nav-link \">\n                        <i class=\"fa fa-home fa-home fa-lg \"> </i> Home\n                    </a>\n                </li>\n                <li class=\"nav-item mr-2 border border-warning\">\n                    <a routerLink=\"/about\" class=\"nav-link\">\n                        <i class=\"fa fa-info-circle fa-info-circle fa-lg \"></i> About me\n                    </a>\n                </li>\n                <li class=\"nav-item mr-2 border border-warning\">\n                    <a class=\"nav-link\" href=\"#\">\n                        <i class=\"fa fa-file-code fa-file-code fa-lg\"></i> Projects\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<div class=\"d-flex flex-row col-md-10 offset-md-1\" id=\"portada\">\n    <!--<img src=\"/src/img/nodejs.png\" alt=\"\" width=\"100%\" height=\"300px\">-->\n    <div class=\"d-flex align-items-end p-0 col-md-12\">\n        <div class=\"m-3 col-md-3 col-sm-6 img-thumbnail\" id=\"fotoperfil\"></div>\n        <div class=\"m-button-3 d-inline-flex col-sm-6 col-md-9\" id=\"nombreperfil\">\n            <h1>{{infoPaginaService.info?.nombre}}</h1>\n        </div>\n\n    </div>\n</div>\n\n<!-- <div class=\"jumbotron col-md-10 offset-md-1\" id=\"portada\">\n    <img src=\"/src/img/nodejs.png\" alt=\"\" width=\"100%\" height=\"300px\">\n\n    <div class=\"col-md-8 offset-md-1 \" id=\"fotoperfil\" style=\"background-color: #ff4000;\">\n        Level 2: .col-8\n    </div>\n</div> -->"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(infoPaginaService) {
        this.infoPaginaService = infoPaginaService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__["InfoPaginaService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Element\Documents\Alex\projecto\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map