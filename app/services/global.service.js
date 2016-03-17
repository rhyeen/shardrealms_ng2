System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var GlobalService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GlobalService = (function () {
                function GlobalService() {
                    /**
                     * Holds the current view for the browser.
                     * Can recurse into subViews if need be mainView: {view, subview:{view, subview:{..}}}
                     *
                     */
                    this.globalView = {
                        view: "players",
                        subView: { view: "edit", subView: { view: "leveling" } }
                    };
                }
                // public globalView = {
                //   view: "main",
                //   subView: null
                // };
                GlobalService.prototype.getGlobalView = function () {
                    return this.globalView;
                };
                GlobalService.prototype.gotoMainMenu = function () {
                    this.globalView.view = "main";
                    this.globalView.subView = null;
                };
                GlobalService.prototype.gotoPlayerList = function () {
                    this.globalView.view = "players";
                    this.globalView.subView = null;
                };
                GlobalService.prototype.gotoNewPlayer = function () {
                    this.globalView.view = "players";
                    this.globalView.subView = { view: "new", subView: null };
                };
                GlobalService.prototype.gotoPlayerLeveling = function () {
                    this.globalView.view = "players";
                    this.globalView.subView = { view: "edit", subView: { view: "leveling" } };
                };
                GlobalService.prototype.gotoPlayerEdit = function () {
                    this.globalView.view = "players";
                    this.globalView.subView = { view: "edit", subView: null };
                };
                GlobalService.prototype.gotoPlayerWisdomPoint = function () {
                    this.globalView.view = "players";
                    this.globalView.subView = { view: "edit", subView: { view: "wisdom point" } };
                };
                GlobalService.prototype.gotoTableList = function () {
                    this.globalView.view = "tables";
                    this.globalView.subView = null;
                };
                GlobalService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GlobalService);
                return GlobalService;
            }());
            exports_1("GlobalService", GlobalService);
        }
    }
});
//# sourceMappingURL=global.service.js.map