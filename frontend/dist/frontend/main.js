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

module.exports = "<body>\n  <app-navbar></app-navbar>\n  <div>\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n  </div>\n</body>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth.guard */ "./src/app/services/auth/auth.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_create_image_create_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create-image/create-image.component */ "./src/app/components/create-image/create-image.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/collection/collection.component */ "./src/app/components/collection/collection.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/image-details/image-details.component */ "./src/app/components/image-details/image-details.component.ts");
/* harmony import */ var _components_import_image_import_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/import-image/import-image.component */ "./src/app/components/import-image/import-image.component.ts");
/* harmony import */ var _components_edit_image_edit_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-image/edit-image.component */ "./src/app/components/edit-image/edit-image.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '*', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'collection', component: _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_13__["CollectionComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'collection/:id', component: _components_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_16__["ImageDetailsComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'create-image', component: _components_create_image_create_image_component__WEBPACK_IMPORTED_MODULE_8__["CreateImageComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'import-image', component: _components_import_image_import_image_component__WEBPACK_IMPORTED_MODULE_17__["ImportImageComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'edit-image/:id', component: _components_edit_image_edit_image_component__WEBPACK_IMPORTED_MODULE_18__["EditImageComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_create_image_create_image_component__WEBPACK_IMPORTED_MODULE_8__["CreateImageComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_13__["CollectionComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_16__["ImageDetailsComponent"],
                _components_import_image_import_image_component__WEBPACK_IMPORTED_MODULE_17__["ImportImageComponent"],
                _components_edit_image_edit_image_component__WEBPACK_IMPORTED_MODULE_18__["EditImageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/collection/collection.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/collection/collection.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects {\r\n    margin: 5%;\r\n    background-color: #4E5D6C;\r\n    padding: 50px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n    .projects:after {\r\n        content: \"\";\r\n        clear: both;\r\n        display: table;\r\n    }\r\n    .projects a {\r\n        width: 20%;\r\n    }\r\n    .projects a img {\r\n        width: 200px;\r\n        height: 200px;\r\n    }\r\n    .projects a .project-wrapper {\r\n        color: black;\r\n        text-decoration: none;\r\n\r\n        width: 100%;\r\n\r\n        text-align: center;\r\n        float: left;\r\n    }\r\n    .projects a .project-wrapper p {\r\n        margin-top: 20px;\r\n        margin-bottom: 40px;\r\n    }\r\n    .projects a .project-wrapper:hover {\r\n        cursor: pointer;\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1); \r\n    }\r\n    .projects a .project-wrapper:hover button {\r\n        transition: all .2s ease-in-out;\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1);\r\n        background-color:white;\r\n    }\r\n    .projects a .project-wrapper:last-of-type {\r\n        height: 100%;\r\n        max-height: 100%;\r\n    }\r\n    @media screen and (max-width: 1200px) {\r\n    .projects a {\r\n        width: 33%;\r\n    }\r\n}\r\n    @media screen and (max-width: 768px) {\r\n    .projects a {\r\n        width: 100%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/collection/collection.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/collection/collection.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"projects\">\n    <a *ngFor=\"let image of images\" (click) = \"onSelect(image)\" >\n      <article class=\"project-wrapper\">   \n        <img src={{image.url}}/>\n      </article>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/collection/collection.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/collection/collection.component.ts ***!
  \***************************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image/image.service */ "./src/app/services/image/image.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollectionComponent = /** @class */ (function () {
    function CollectionComponent(imageService, router) {
        this.imageService = imageService;
        this.router = router;
    }
    CollectionComponent.prototype.addImage = function () {
        var _this = this;
        var newImage = {
            title: this.title,
            description: this.description,
            url: this.url
        };
        this.imageService.addImage(newImage).subscribe(function (image) {
            _this.images.push(image);
            _this.imageService.getImages().subscribe(function (images) { return _this.images = images; });
        });
    };
    CollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getImages().subscribe(function (images) { return _this.images = images; });
    };
    CollectionComponent.prototype.onSelect = function (image) {
        this.router.navigate(['/collection', image._id]);
    };
    CollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collection',
            template: __webpack_require__(/*! ./collection.component.html */ "./src/app/components/collection/collection.component.html"),
            styles: [__webpack_require__(/*! ./collection.component.css */ "./src/app/components/collection/collection.component.css")]
        }),
        __metadata("design:paramtypes", [_services_image_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/components/create-image/create-image.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/create-image/create-image.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container {\r\n  margin-top: 5%;\r\n  width: 80%;\r\n  background-color: #4E5D6C;\r\n  padding: 50px;\r\n}\r\n\r\n.col-md-6 {\r\n    align-content: center;\r\n    text-align: center;\r\n}\r\n\r\nbutton {\r\n    margin-left: 20px;\r\n}\r\n\r\nhr {\r\n    border-color: grey;\r\n}\r\n\r\nimg { \r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/create-image/create-image.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-image/create-image.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\"> Add Image by url</h2>\n  <hr/>\n  <div class=\"row\">\n    <form (submit)=\"sendResults()\" class=\"col-md-7\">\n      <div class=\"form-group\">\n        <label>* Title:</label>\n        <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" required>\n      </div>\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>* Url:</label>\n        <small class=\"form-text text-muted\">Paste a valid url or the image will reset to default</small>\n        <input type=\"text\" [(ngModel)]=\"url\" name=\"url\" class=\"form-control\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-success\" value=\"Add Image\">\n    </form>\n    <div class=\"col-md-5\">\n      <img src=\"{{url}}\" (error)=\"handleError()\" />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/create-image/create-image.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-image/create-image.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateImageComponent", function() { return CreateImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image/image.service */ "./src/app/services/image/image.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateImageComponent = /** @class */ (function () {
    // dependency injection
    function CreateImageComponent(imageService, flashMessagesService, router) {
        this.imageService = imageService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.url = 'https://www.technodoze.com/wp-content/uploads/2016/03/default-placeholder.png';
    }
    CreateImageComponent.prototype.deleteImage = function (id) {
        var images = this.images;
        this.imageService.deleteImage(id).subscribe(function (data) {
            if (data.n === 1) {
                for (var i = 0; i < images.length; i++) {
                    if (images[i]._id === id) {
                        images.splice(i, 1);
                    }
                }
            }
        });
    };
    CreateImageComponent.prototype.addImage = function () {
        var _this = this;
        var newImage = {
            title: this.title,
            description: this.description,
            url: this.url
        };
        this.imageService.addImage(newImage).subscribe(function (image) {
            _this.images.push(image);
            _this.imageService.getImages().subscribe(function (images) { return _this.images = images; });
            _this.flashMessagesService.show(newImage.title + ' has been added!', { cssClass: 'alert-success', timeout: 3000 });
            _this.router.navigate(['/collection']);
        });
    };
    CreateImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getImages().subscribe(function (images) { return _this.images = images; });
    };
    CreateImageComponent.prototype.sendResults = function () {
        if (this.title == null || this.url == null) {
            this.flashMessagesService.show('Title & Url can not be empty!', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            if (this.title != null && this.url != null) {
                this.addImage();
            }
        }
    };
    CreateImageComponent.prototype.handleError = function () {
        this.url = 'https://www.technodoze.com/wp-content/uploads/2016/03/default-placeholder.png';
    };
    CreateImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./create-image.component.html */ "./src/app/components/create-image/create-image.component.html"),
            styles: [__webpack_require__(/*! ./create-image.component.css */ "./src/app/components/create-image/create-image.component.css")]
        }),
        __metadata("design:paramtypes", [_services_image_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateImageComponent);
    return CreateImageComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  text-align: center;\r\n  align-content: center;\r\n  padding: 20px;\r\n}\r\n\r\n.col-sm-4 {\r\n  margin-top: 10%;\r\n}\r\n\r\n.col-sm-4:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\nh2 {\r\n  margin-top: 50px;\r\n}\r\n\r\nimg {\r\n  margin-top: 30px;\r\n  width: 200px;\r\n  height: 200px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nhr {\r\n  border-color: #4E5D6C;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2> Please select your first action </h2>\r\n  <hr/>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\" (click)=\"goToFlickr()\">\r\n      <div class=\"card\">\r\n        <img src=\"http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Flickr-icon.png\">\r\n        <div class=\"container\">\r\n          <h4>\r\n            <b>Add Image by Flickr</b>\r\n          </h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\" (click)=\"goToAddImage()\">\r\n      <div class=\"card\">\r\n        <img src=\"https://cdn4.iconfinder.com/data/icons/color-webshop/512/internet_web_simple_world-512.png\">\r\n        <div class=\"container\">\r\n          <h4>\r\n            <b>Add image by URL</b>\r\n          </h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\" (click)=\"goToMyImages()\">\r\n      <div class=\"card\">\r\n        <img src=\"https://lh3.googleusercontent.com/7rADIIAXkEedoq9sf6SO4ZiBXkpu-XQCJBxratH4Ij4D1LxH4NbvcdRPLmjdsxfG662h\">\r\n        <div class=\"container\">\r\n          <h4>\r\n            <b> My images</b>\r\n          </h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, flashMessagesService) {
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.goToMyImages = function () {
        this.router.navigate(['/collection']);
    };
    DashboardComponent.prototype.goToAddImage = function () {
        this.router.navigate(['/create-image']);
    };
    DashboardComponent.prototype.goToFlickr = function () {
        this.router.navigate(['/import-image']);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-image/edit-image.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/edit-image/edit-image.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 5%;\r\n  width: 80%;\r\n  background-color: #4E5D6C;\r\n  padding: 50px;\r\n}\r\n\r\n.col-md-6 {\r\n  align-content: center;\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  margin-left: 20px;\r\n}\r\n\r\nhr {\r\n  border-color: grey;\r\n}\r\n\r\nimg {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/edit-image/edit-image.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-image/edit-image.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\"> Edit Image </h2>\n  <hr/>\n  <div class=\"row\">\n    <form (submit)=\"sendResults()\" class=\"col-md-7\">\n      <div class=\"form-group\">\n        <label>* Title:</label>\n        <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" required>\n      </div>\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>* Url:</label>\n        <small class=\"form-text text-muted\">Paste a valid url or the image will reset to default</small>\n        <input type=\"text\" [(ngModel)]=\"url\" name=\"url\" class=\"form-control\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-success\" value=\"Update image\">\n    </form>\n    <div class=\"col-md-5\">\n      <img src=\"{{url}}\" (error)=\"handleError()\" />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edit-image/edit-image.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-image/edit-image.component.ts ***!
  \***************************************************************/
/*! exports provided: EditImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImageComponent", function() { return EditImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image/image.service */ "./src/app/services/image/image.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditImageComponent = /** @class */ (function () {
    function EditImageComponent(imageService, flashMessagesService, router, route) {
        this.imageService = imageService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.route = route;
        this.url = 'https://www.technodoze.com/wp-content/uploads/2016/03/default-placeholder.png';
    }
    EditImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.imageService.getImage(id).subscribe(function (image) {
            _this.image = image;
            _this.title = image.title;
            _this.description = image.description;
            _this.url = image.url;
        });
    };
    EditImageComponent.prototype.handleError = function () {
        this.url = this.image.url;
    };
    EditImageComponent.prototype.sendResults = function () {
        if (this.title == null || this.url == null) {
            this.flashMessagesService.show('Title & Url can not be empty!', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            if (this.title != null && this.url != null) {
                this.updateImage();
            }
        }
    };
    EditImageComponent.prototype.updateImage = function () {
        var _this = this;
        this.image.title = this.title;
        this.image.description = this.description;
        this.image.url = this.url;
        this.imageService.updateImage(this.image).subscribe(function (data) {
            _this.flashMessagesService.show('Image updated!', { cssClass: 'alert-success', timeout: 3000 });
        });
    };
    EditImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-image',
            template: __webpack_require__(/*! ./edit-image.component.html */ "./src/app/components/edit-image/edit-image.component.html"),
            styles: [__webpack_require__(/*! ./edit-image.component.css */ "./src/app/components/edit-image/edit-image.component.css")]
        }),
        __metadata("design:paramtypes", [_services_image_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditImageComponent);
    return EditImageComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  margin: 10px;\r\n}\r\n\r\n.jumbotron {\r\n  margin-top: 7%;\r\n  margin-left: 20%;\r\n  margin-right: 20%;\r\n}\r\n\r\n.buttons-align-center {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1> Flickr Image Saver </h1>\n  <p class=\"lead\"> Ever wanted to make a private collection of Flickr, but the website is way too complex? This website allows you to directly\n    image search on the Flickr Database, easily save them, and utilise them for personal use!\n  </p>\n  <div class=\"buttons-align-center\">\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n\n\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h3>Webapps-project</h3>\n      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        </p>\n    </div>\n    <div class=\"col-sm\">\n      <h3>Made with Angular-cli</h3>\n      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        </p>\n    </div>\n    <div class=\"col-sm\">\n      <h3>Pieter Van Der Helst &#8482;</h3>\n      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/image-details/image-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/image-details/image-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  max-width: 1000px;\r\n  max-height: 800px;\r\n}\r\n\r\n.container {\r\n  margin-top: 5%;\r\n  width: 80%;\r\n  background-color: #4E5D6C;\r\n  align-content: center;\r\n  text-align: center;\r\n  padding: 50px;\r\n  display: block;\r\n}\r\n\r\n.link {\r\n  color: #DF691A;\r\n  text-decoration: none;\r\n  text-align: start;\r\n  background-color: transparent;\r\n}\r\n\r\n.link:hover {\r\n  color: #9a4912;\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\nhr {\r\n  border-color: #4E5D6C;\r\n}\r\n\r\nspan button {\r\n  margin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/image-details/image-details.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/image-details/image-details.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p class=\"link\" (click)='goBackToCollection()'> &larr; Go back</p>\n  <h2 *ngIf=\"image?.title\"> {{image.title}}</h2>\n  <p *ngIf=\"image?.description\"> {{image.description}}</p>\n  <img src={{image?.url}}/>\n  <br>\n  <br>\n  <span>\n    <button class=\"btn btn-primary\" (click)=\"onUpdate()\"> Edit</button>\n    <button class=\"btn btn-danger\" (click)=\"onDelete()\">Delete</button>\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/image-details/image-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-details/image-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImageDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDetailsComponent", function() { return ImageDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_image_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/image/image.service */ "./src/app/services/image/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageDetailsComponent = /** @class */ (function () {
    function ImageDetailsComponent(route, imageService, router) {
        this.route = route;
        this.imageService = imageService;
        this.router = router;
    }
    ImageDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.imageService.getImage(id).subscribe(function (image) { return _this.image = image; });
    };
    ImageDetailsComponent.prototype.onDelete = function () {
        var _this = this;
        this.imageService.deleteImage(this.image._id).subscribe(function (data) {
            _this.imageService.getImages().subscribe(function (images) { return _this.router.navigate(['/collection']); });
        });
    };
    ImageDetailsComponent.prototype.onUpdate = function () {
        this.router.navigate(['/edit-image/' + this.image._id]);
    };
    ImageDetailsComponent.prototype.goBackToCollection = function () {
        this.router.navigate(['/collection']);
    };
    ImageDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-details',
            template: __webpack_require__(/*! ./image-details.component.html */ "./src/app/components/image-details/image-details.component.html"),
            styles: [__webpack_require__(/*! ./image-details.component.css */ "./src/app/components/image-details/image-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_image_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ImageDetailsComponent);
    return ImageDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/import-image/import-image.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/import-image/import-image.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\r\n  border-color: white;\r\n}\r\n\r\n.container {\r\n  margin-top: 5%;\r\n  width: 80%;\r\n  background-color: #4E5D6C;\r\n  padding: 50px;\r\n}\r\n\r\nh5 {\r\n  margin: 20px;\r\n  margin-left: 0px;\r\n}\r\n\r\n.btn {\r\n  margin-left: 10px;\r\n}\r\n\r\n.projects {\r\n  margin: 5%;\r\n  background-color: #4E5D6C;\r\n  padding: 50px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.projects:after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n.projects a {\r\n  width: 20%;\r\n}\r\n\r\n.projects a img {\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n\r\n.projects a .project-wrapper {\r\n  color: black;\r\n  text-decoration: none;\r\n  width: 100%;\r\n  text-align: center;\r\n  float: left;\r\n}\r\n\r\n.projects a .project-wrapper p {\r\n  margin-top: 20px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.projects a .project-wrapper:hover {\r\n  cursor: pointer;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n.projects a .project-wrapper:hover button {\r\n  transition: all .2s ease-in-out;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  background-color: white;\r\n}\r\n\r\n.projects a .project-wrapper:last-of-type {\r\n  height: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .projects a {\r\n    width: 33%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .projects a {\r\n    width: 100%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/import-image/import-image.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/import-image/import-image.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\">\n    <h2> Flickr Image Search</h2>\n    <hr/>\n    <h5> Input a search term, and choose an image to add it to your collection! </h5>\n\n    <form (submit)=\"getJsonFromFlickr()\">\n      <label>Tag:</label>\n      <div class=\"row\">\n\n        <div class=\"col-md-6\">\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"searchTerm\" name=\"searchTerm\" placeholder=\"Enter your search term here\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Search\" />\n      </div>\n    </form>\n  </div>\n\n  <div class=\"projects\">\n    <a *ngFor=\"let image of images\" (click)=\"saveImage(image)\">\n      <article class=\"project-wrapper\">\n        <img src={{image.url}}/>\n      </article>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/import-image/import-image.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/import-image/import-image.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImportImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportImageComponent", function() { return ImportImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image/image.service */ "./src/app/services/image/image.service.ts");
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/image */ "./src/app/models/image.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_flickr_flickr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/flickr/flickr.service */ "./src/app/services/flickr/flickr.service.ts");
/* harmony import */ var _models_flickr_flickr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/flickr/flickr */ "./src/app/models/flickr/flickr.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ImportImageComponent = /** @class */ (function () {
    // dependency injection
    function ImportImageComponent(imageService, flashMessagesService, router, flickrService) {
        this.imageService = imageService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.flickrService = flickrService;
        this.url = 'https://www.technodoze.com/wp-content/uploads/2016/03/default-placeholder.png';
    }
    ImportImageComponent.prototype.addImage = function (image) {
        var _this = this;
        var newImage;
        if (image === null || image === undefined) {
            newImage = {
                title: this.title,
                description: this.description,
                url: this.url
            };
        }
        else {
            newImage = image;
        }
        this.imageService.addImage(newImage).subscribe(function (data) {
            _this.imageService.getImages().subscribe(function (images) { return images; });
        });
    };
    ImportImageComponent.prototype.getJsonFromFlickr = function () {
        var _this = this;
        var json;
        this.flickrService.testUrl(this.searchTerm).subscribe(function (response) {
            json = response.json();
            _this.getImages(json);
        });
    };
    ImportImageComponent.prototype.saveImage = function (image) {
        this.addImage(image);
        this.flashMessagesService.show('The image has been added to your collection!', { cssClass: 'alert-success', timeout: 3000 });
    };
    ImportImageComponent.prototype.ngOnInit = function () {
    };
    ImportImageComponent.prototype.getImages = function (json) {
        var stringjson = JSON.stringify(json);
        var rootObject = _models_flickr_flickr__WEBPACK_IMPORTED_MODULE_6__["Convert"].toRootObject(stringjson);
        this.images = [];
        if (rootObject.stat === 'ok') {
            for (var _i = 0, _a = rootObject.photos.photo; _i < _a.length; _i++) {
                var photo = _a[_i];
                // http://farm{farmid}.staticflickr.com/{server-id}/{id}_{secret}{size}.jpg
                var photoUrl = 'http://farm' + photo.farm + '.staticflickr.com/' + photo.server
                    + '/' + photo.id + '_' + photo.secret + '_n.jpg';
                this.images.push(new _models_image__WEBPACK_IMPORTED_MODULE_2__["Image"](photoUrl, photo.title));
            }
        }
    };
    ImportImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-image',
            template: __webpack_require__(/*! ./import-image.component.html */ "./src/app/components/import-image/import-image.component.html"),
            styles: [__webpack_require__(/*! ./import-image.component.css */ "./src/app/components/import-image/import-image.component.css")]
        }),
        __metadata("design:paramtypes", [_services_image_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_flickr_flickr_service__WEBPACK_IMPORTED_MODULE_5__["FlickrService"]])
    ], ImportImageComponent);
    return ImportImageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n  margin-right: 35%;\r\n  margin-left: 35%;\r\n  margin-top: 5%;\r\n  background-color: #4E5D6C;\r\n  align-content: center;\r\n  padding: 50px;\r\n}\r\n\r\nhr {\r\n  border-color: white;\r\n}\r\n\r\n@media (min-width:0px) and ( max-width: 1080px) {\r\n  .form-container {\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n    padding: 20px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <form (submit)=\"onLoginSubmit()\">\n    <fieldset>\n      <h2>Login</h2>\n      <hr/>\n      <div class=\"form-group\">\n        <label>username</label>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Enter username\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Login</button>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validator_validator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validator/validator.service */ "./src/app/services/validator/validator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessagesService, authService, router, validatorService) {
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.validatorService = validatorService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (!this.validatorService.validateLogin(user)) {
            this.flashMessagesService.show('Please enter your username and password!', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.authService.authenticateUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessagesService.show('You have succesfully logged in!', { cssClass: 'alert-success', timeout: 3000 });
                    _this.authService.storeUserData(data.token, data.user);
                    _this.router.navigate(['dashboard']);
                }
                else {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_validator_validator_service__WEBPACK_IMPORTED_MODULE_4__["ValidatorService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\">FlickrSaver</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" *ngIf=\"!isLoggedIn()\" [routerLink]=\"['/']\">Home </a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\" *ngIf=\"isLoggedIn()\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/collection']\">My Images</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\" *ngIf=\"isLoggedIn()\">Profile</a>\n      </li>\n    </ul>\n    <!--<form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>-->\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\" *ngIf=\"!isLoggedIn()\">Register</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\" *ngIf=\"!isLoggedIn()\">Login</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" href=\"\" (click)=\"onLogoutClick()\" *ngIf=\"isLoggedIn()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(flashMessagesService, authService, router) {
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are now logged out!', { cssClass: 'alert-primary', timeout: 1000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-container {\r\n  margin-right: 35%;\r\n  margin-left: 35%;\r\n  margin-top: 5%;\r\n  background-color: #4E5D6C;\r\n  align-content: center;\r\n  padding: 50px;\r\n}\r\n\r\n.inline {\r\n  display: inline-block;\r\n  margin-top: 15px;\r\n  margin-left: 15px;\r\n}\r\n\r\n.block {\r\n  display: block;\r\n}\r\n\r\nh2 {\r\n  margin: 20px;\r\n}\r\n\r\nhr {\r\n  border-color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"profile-container\">\n  <h2>My Profile</h2>\n  <hr/>\n  <div>\n    <div>\n      <h4 class=\"inline\">Name:</h4>\n      <p class=\"inline\">{{user.name}}</p>\n    </div>\n    <div>\n      <h4 class=\"inline\">Username:</h4>\n      <p class=\"inline\">{{user.username}}</p>\n    </div>\n    <div>\n      <h4 class=\"inline\"> Email:</h4>\n      <p class=\"inline\"> {{user.email}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(flashMessagesService, router, profileService) {
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.profileService = profileService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n  margin-right: 35%;\r\n  margin-left: 35%;\r\n  margin-top: 5%;\r\n  background-color: #4E5D6C;\r\n  align-content: center;\r\n  padding: 50px;\r\n}\r\n\r\nhr {\r\n  border-color: white;\r\n}\r\n\r\n@media (min-width:0px) and ( max-width: 1080px) {\r\n  .form-container {\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n    padding: 20px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <form (submit)=\"onRegisterSubmit()\">\n    <fieldset>\n      <h2>Register</h2>\n      <hr/>\n      <div class=\"form-group\">\n        <label>Full Name</label>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter your full name\">\n      </div>\n      <div class=\"form-group\">\n        <label>Email address *</label>\n        <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n      </div>\n      <div class=\"form-group\">\n        <label>Pick a username *</label>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Enter username\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password *</label>\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\n      </div>\n      <div class=\"form-group\">\n        <label>Confirm Password *</label>\n        <input type=\"password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" class=\"form-control\" placeholder=\"Password\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validator_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validator/validator.service */ "./src/app/services/validator/validator.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validatorService, flashMessagesService, authService, router) {
        this.validatorService = validatorService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
        if (!this.validatorService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validatorService.validateEmail(user.email)) {
            this.flashMessagesService.show('Please use a valid email!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (this.validatorService.validateEmptyName(user.name)) {
            user.name = '';
        }
        // Register a user
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessagesService.show('You are now registered!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show('Error registering user', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validator_validator_service__WEBPACK_IMPORTED_MODULE_1__["ValidatorService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/models/flickr/flickr.ts":
/*!*****************************************!*\
  !*** ./src/app/models/flickr/flickr.ts ***!
  \*****************************************/
/*! exports provided: Convert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Convert", function() { return Convert; });
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
var Convert;
(function (Convert) {
    function toRootObject(json) {
        return cast(JSON.parse(json), r('RootObject'));
    }
    Convert.toRootObject = toRootObject;
    function rootObjectToJson(value) {
        return JSON.stringify(uncast(value, r('RootObject')), null, 2);
    }
    Convert.rootObjectToJson = rootObjectToJson;
    function invalidValue(typ, val) {
        throw Error("Invalid value " + JSON.stringify(val) + " for type " + JSON.stringify(typ));
    }
    function jsonToJSProps(typ) {
        if (typ.jsonToJS === undefined) {
            var map_1 = {};
            typ.props.forEach(function (p) { return map_1[p.json] = { key: p.js, typ: p.typ }; });
            typ.jsonToJS = map_1;
        }
        return typ.jsonToJS;
    }
    function jsToJSONProps(typ) {
        if (typ.jsToJSON === undefined) {
            var map_2 = {};
            typ.props.forEach(function (p) { return map_2[p.js] = { key: p.json, typ: p.typ }; });
            typ.jsToJSON = map_2;
        }
        return typ.jsToJSON;
    }
    function transform(val, typ, getProps) {
        // tslint:disable-next-line:no-shadowed-variable
        function transformPrimitive(typ, val) {
            if (typeof typ === typeof val) {
                return val;
            }
            return invalidValue(typ, val);
        }
        // tslint:disable-next-line:no-shadowed-variable
        function transformUnion(typs, val) {
            // val must validate against one typ in typs
            var l = typs.length;
            for (var i = 0; i < l; i++) {
                // tslint:disable-next-line:no-shadowed-variable
                var typ_1 = typs[i];
                try {
                    return transform(val, typ_1, getProps);
                }
                catch (_) { }
            }
            return invalidValue(typs, val);
        }
        // tslint:disable-next-line:no-shadowed-variable
        function transformEnum(cases, val) {
            if (cases.indexOf(val) !== -1) {
                return val;
            }
            return invalidValue(cases, val);
        }
        // tslint:disable-next-line:no-shadowed-variable
        function transformArray(typ, val) {
            // val must be an array with no invalid elements
            if (!Array.isArray(val)) {
                return invalidValue('array', val);
            }
            return val.map(function (el) { return transform(el, typ, getProps); });
        }
        // tslint:disable-next-line:no-shadowed-variable
        function transformObject(props, additional, val) {
            if (val === null || typeof val !== 'object' || Array.isArray(val)) {
                return invalidValue('object', val);
            }
            var result = {};
            Object.getOwnPropertyNames(props).forEach(function (key) {
                var prop = props[key];
                var v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
                result[prop.key] = transform(v, prop.typ, getProps);
            });
            Object.getOwnPropertyNames(val).forEach(function (key) {
                if (!Object.prototype.hasOwnProperty.call(props, key)) {
                    result[key] = transform(val[key], additional, getProps);
                }
            });
            return result;
        }
        if (typ === 'any') {
            return val;
        }
        if (typ === null) {
            if (val === null) {
                return val;
            }
            return invalidValue(typ, val);
        }
        if (typ === false) {
            return invalidValue(typ, val);
        }
        while (typeof typ === 'object' && typ.ref !== undefined) {
            typ = typeMap[typ.ref];
        }
        if (Array.isArray(typ)) {
            return transformEnum(typ, val);
        }
        if (typeof typ === 'object') {
            return typ.hasOwnProperty('unionMembers') ? transformUnion(typ.unionMembers, val)
                : typ.hasOwnProperty('arrayItems') ? transformArray(typ.arrayItems, val)
                    : typ.hasOwnProperty('props') ? transformObject(getProps(typ), typ.additional, val)
                        : invalidValue(typ, val);
        }
        return transformPrimitive(typ, val);
    }
    function cast(val, typ) {
        return transform(val, typ, jsonToJSProps);
    }
    function uncast(val, typ) {
        return transform(val, typ, jsToJSONProps);
    }
    function a(typ) {
        return { arrayItems: typ };
    }
    function u() {
        var typs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            typs[_i] = arguments[_i];
        }
        return { unionMembers: typs };
    }
    function o(props, additional) {
        return { props: props, additional: additional };
    }
    function m(additional) {
        return { props: [], additional: additional };
    }
    function r(name) {
        return { ref: name };
    }
    var typeMap = {
        'RootObject': o([
            { json: 'photos', js: 'photos', typ: r('Photos') },
            { json: 'stat', js: 'stat', typ: '' },
        ], false),
        'Photos': o([
            { json: 'page', js: 'page', typ: 0 },
            { json: 'pages', js: 'pages', typ: 0 },
            { json: 'perpage', js: 'perpage', typ: 0 },
            { json: 'total', js: 'total', typ: '' },
            { json: 'photo', js: 'photo', typ: a(r('Photo')) },
        ], false),
        'Photo': o([
            { json: 'id', js: 'id', typ: '' },
            { json: 'owner', js: 'owner', typ: '' },
            { json: 'secret', js: 'secret', typ: '' },
            { json: 'server', js: 'server', typ: '' },
            { json: 'farm', js: 'farm', typ: 0 },
            { json: 'title', js: 'title', typ: '' },
            { json: 'ispublic', js: 'ispublic', typ: 0 },
            { json: 'isfriend', js: 'isfriend', typ: 0 },
            { json: 'isfamily', js: 'isfamily', typ: 0 },
        ], false),
    };
})(Convert || (Convert = {}));


/***/ }),

/***/ "./src/app/models/image.ts":
/*!*********************************!*\
  !*** ./src/app/models/image.ts ***!
  \*********************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
var Image = /** @class */ (function () {
    function Image(url, title) {
        if (title === void 0) { title = 'Default title'; }
        this.url = url;
        this.title = title;
        this.description = 'This is the default description for images';
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService, flashMessagesService) {
        this.router = router;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            this.flashMessagesService.show('You are not authorized to access this page, please log in!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('auth/register', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('auth/authenticate', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getUsers = function () {
        return this.http.get('auth/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.authToken != null) {
            return true;
        }
        return false;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        return token;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/flickr/flickr.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/flickr/flickr.service.ts ***!
  \***************************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrService = /** @class */ (function () {
    function FlickrService(http) {
        this.http = http;
        this.key = 'a747dd54e2adb4c600712193bb35c877';
    }
    FlickrService.prototype.testUrl = function (searchTerm) {
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&' +
            'api_key=' + this.key + '&tags='
            + searchTerm + '&format=json&nojsoncallback=1';
        return this.http.get(url);
    };
    FlickrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/image/image.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/image/image.service.ts ***!
  \*************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageService = /** @class */ (function () {
    function ImageService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    // retrieving images
    ImageService.prototype.getImages = function () {
        return this.http.get('api/' + this.authService.user.id + '/images').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ImageService.prototype.getImage = function (id) {
        return this.http.get('api/' + this.authService.user.id + '/image/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // adding an image
    ImageService.prototype.addImage = function (newImage) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post('api/' + this.authService.user.id + '/image', newImage, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ImageService.prototype.updateImage = function (editedImage) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.put('api/' + this.authService.user.id + '/image', editedImage, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // deleting an image
    ImageService.prototype.deleteImage = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete('api/image/' + id, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/services/profile/profile.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/profile/profile.service.ts ***!
  \*****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = /** @class */ (function () {
    function ProfileService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ProfileService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var authToken = this.authService.loadToken();
        headers.append('Authorization', authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('auth/profile', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/validator/validator.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/validator/validator.service.ts ***!
  \*********************************************************/
/*! exports provided: ValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorService", function() { return ValidatorService; });
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

var ValidatorService = /** @class */ (function () {
    function ValidatorService() {
    }
    ValidatorService.prototype.validateRegister = function (user) {
        if (user.email === undefined || user.password === undefined
            || user.username === undefined || user.confirmPassword === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidatorService.prototype.validateEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidatorService.prototype.validateEmptyName = function (name) {
        if (name === undefined) {
            return true;
        }
        return false;
    };
    ValidatorService.prototype.validateLogin = function (user) {
        if (user.username === '' || user.password === ''
            || user.username === undefined || user.password === undefined) {
            return false;
        }
        return true;
    };
    ValidatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidatorService);
    return ValidatorService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Pieter\flickrSaver\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map