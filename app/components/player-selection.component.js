System.register(['angular2/core', '../services/player-entries.service', '../services/global.service', './level-container.component'], function(exports_1, context_1) {
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
    var core_1, player_entries_service_1, global_service_1, level_container_component_1;
    var PlayerSelectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_entries_service_1_1) {
                player_entries_service_1 = player_entries_service_1_1;
            },
            function (global_service_1_1) {
                global_service_1 = global_service_1_1;
            },
            function (level_container_component_1_1) {
                level_container_component_1 = level_container_component_1_1;
            }],
        execute: function() {
            PlayerSelectionComponent = (function () {
                function PlayerSelectionComponent(_playerEntriesService, _globalService) {
                    this._playerEntriesService = _playerEntriesService;
                    this._globalService = _globalService;
                }
                PlayerSelectionComponent.prototype.getPlayers = function () {
                    var _this = this;
                    this._playerEntriesService.getPlayers().then(function (players) {
                        _this.players = players;
                    });
                };
                // on app load, do this:
                PlayerSelectionComponent.prototype.ngOnInit = function () {
                    this.getPlayers();
                    this.mainView = this._globalService.getGlobalView();
                };
                PlayerSelectionComponent = __decorate([
                    core_1.Component({
                        selector: 'sr-player-selection',
                        templateUrl: './app/views/player-selection.html',
                        directives: [level_container_component_1.LevelContainerComponent],
                    }), 
                    __metadata('design:paramtypes', [player_entries_service_1.PlayerEntriesService, global_service_1.GlobalService])
                ], PlayerSelectionComponent);
                return PlayerSelectionComponent;
            }());
            exports_1("PlayerSelectionComponent", PlayerSelectionComponent);
        }
    }
});
//# sourceMappingURL=player-selection.component.js.map