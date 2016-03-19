System.register(['angular2/core', './table-container.component', '../services/global.service', '../services/player-entries.service', '../services/table-entries.service', './player-list-container.component', './item-window.component'], function(exports_1, context_1) {
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
    var core_1, table_container_component_1, global_service_1, player_entries_service_1, table_entries_service_1, player_list_container_component_1, item_window_component_1;
    var RootContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_container_component_1_1) {
                table_container_component_1 = table_container_component_1_1;
            },
            function (global_service_1_1) {
                global_service_1 = global_service_1_1;
            },
            function (player_entries_service_1_1) {
                player_entries_service_1 = player_entries_service_1_1;
            },
            function (table_entries_service_1_1) {
                table_entries_service_1 = table_entries_service_1_1;
            },
            function (player_list_container_component_1_1) {
                player_list_container_component_1 = player_list_container_component_1_1;
            },
            function (item_window_component_1_1) {
                item_window_component_1 = item_window_component_1_1;
            }],
        execute: function() {
            RootContainerComponent = (function () {
                //public selectedView = 'players';
                function RootContainerComponent(_globalService) {
                    this._globalService = _globalService;
                }
                // on app load, do this:
                RootContainerComponent.prototype.ngOnInit = function () {
                    this.mainView = this._globalService.getGlobalView();
                };
                RootContainerComponent.prototype.goToPlayers = function () {
                    this._globalService.gotoPlayerList();
                };
                RootContainerComponent.prototype.goToTables = function () {
                    this._globalService.gotoTableList();
                };
                RootContainerComponent.prototype.goToRoot = function () {
                    this._globalService.gotoMainMenu();
                };
                RootContainerComponent = __decorate([
                    core_1.Component({
                        selector: 'sr-root-container',
                        templateUrl: './app/views/root-container.html',
                        directives: [table_container_component_1.TableContainerComponent, player_list_container_component_1.PlayerListContainerComponent, item_window_component_1.ItemWindowComponent],
                        providers: [global_service_1.GlobalService, player_entries_service_1.PlayerEntriesService, table_entries_service_1.TableEntriesService]
                    }), 
                    __metadata('design:paramtypes', [global_service_1.GlobalService])
                ], RootContainerComponent);
                return RootContainerComponent;
            }());
            exports_1("RootContainerComponent", RootContainerComponent);
        }
    }
});
//# sourceMappingURL=root-container.component.js.map