System.register(['angular2/core', '../services/player-entries.service', '../services/global.service', './player-selection.component', './new-player-container.component'], function(exports_1, context_1) {
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
    var core_1, player_entries_service_1, global_service_1, player_selection_component_1, new_player_container_component_1;
    var PlayerListContainerComponent;
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
            function (player_selection_component_1_1) {
                player_selection_component_1 = player_selection_component_1_1;
            },
            function (new_player_container_component_1_1) {
                new_player_container_component_1 = new_player_container_component_1_1;
            }],
        execute: function() {
            PlayerListContainerComponent = (function () {
                function PlayerListContainerComponent(_playerEntriesService, _globalService) {
                    this._playerEntriesService = _playerEntriesService;
                    this._globalService = _globalService;
                    this.playerList = [];
                }
                PlayerListContainerComponent.prototype.getPlayerEntries = function () {
                    var _this = this;
                    this._playerEntriesService.getPlayerEntries().then(function (playerList) { return _this.playerList = playerList; });
                    this._playerEntriesService.getPlayers().then(function (players) { return _this.players = players; });
                };
                // on app load, do this:
                PlayerListContainerComponent.prototype.ngOnInit = function () {
                    this.getPlayerEntries();
                    this.mainView = this._globalService.getGlobalView();
                };
                PlayerListContainerComponent.prototype.selectPlayer = function (playerId) {
                    var _this = this;
                    this._playerEntriesService.updatePlayer(playerId).then(function (player) {
                        _this._globalService.gotoPlayerEdit();
                    });
                };
                PlayerListContainerComponent.prototype.createNewPlayer = function () {
                    this.players.selectedPlayer;
                    this._globalService.gotoNewPlayer();
                };
                PlayerListContainerComponent.prototype.backToSelection = function () {
                    this.players.selectedPlayer = null;
                    this._globalService.gotoPlayerList();
                };
                PlayerListContainerComponent = __decorate([
                    core_1.Component({
                        selector: 'sr-player-list-container',
                        templateUrl: './app/views/player-list-container.html',
                        directives: [player_selection_component_1.PlayerSelectionComponent, new_player_container_component_1.NewPlayerContainerComponent],
                        providers: [player_entries_service_1.PlayerEntriesService]
                    }), 
                    __metadata('design:paramtypes', [player_entries_service_1.PlayerEntriesService, global_service_1.GlobalService])
                ], PlayerListContainerComponent);
                return PlayerListContainerComponent;
            }());
            exports_1("PlayerListContainerComponent", PlayerListContainerComponent);
        }
    }
});
//# sourceMappingURL=player-list-container.component.js.map