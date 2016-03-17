System.register(['angular2/core', '../services/player-entries.service', '../services/global.service', './dynamic-list.component', './level-container.component'], function(exports_1, context_1) {
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
    var core_1, player_entries_service_1, global_service_1, dynamic_list_component_1, level_container_component_1;
    var NewPlayerContainerComponent;
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
            function (dynamic_list_component_1_1) {
                dynamic_list_component_1 = dynamic_list_component_1_1;
            },
            function (level_container_component_1_1) {
                level_container_component_1 = level_container_component_1_1;
            }],
        execute: function() {
            NewPlayerContainerComponent = (function () {
                function NewPlayerContainerComponent(_playerEntriesService, _globalService) {
                    this._playerEntriesService = _playerEntriesService;
                    this._globalService = _globalService;
                    this.newPlayerConfig = {};
                    this.newPlayerUniqueConfig = {
                        "avg height (in)": "?",
                        "avg weight (lbs)": "?",
                        "age": {
                            "young adult": "?",
                            "middle aged": "?",
                            "old": "?",
                            "max age": "?"
                        }
                    };
                }
                NewPlayerContainerComponent.prototype.getNewPlayerConfig = function () {
                    var _this = this;
                    this._playerEntriesService.getNewPlayerConfig().then(function (newPlayerConfig) {
                        _this.newPlayerConfig = newPlayerConfig;
                        // since we depend on newPlayerConfig having .index set, we don't get players until it's finished
                        _this.getNewPlayer();
                    });
                };
                NewPlayerContainerComponent.prototype.playerLevelChange = function (newLevel) {
                    var _this = this;
                    // update the experience to match
                    this._playerEntriesService.getExperience(newLevel).then(function (experience) {
                        _this.players.selectedPlayer['experience'] = experience;
                    });
                };
                NewPlayerContainerComponent.prototype.playerRaceChange = function (newRace) {
                    var index, race;
                    if (this.newPlayerConfig['index'] && this.newPlayerConfig['index']['races'] && (this.newPlayerConfig['index']['races'][newRace] || this.newPlayerConfig['index']['races'][newRace] === 0)) {
                        index = this.newPlayerConfig['index']['races'][newRace];
                        race = this.newPlayerConfig['races'][index];
                        this.players.selectedPlayer['size'] = race['size'];
                        // this is because the view won't update without this
                        this.players.selectedPlayer['race'] = newRace;
                        // this.players.selectedPlayer['height (in)'] = race['avg height (in)'];
                        // this.players.selectedPlayer['weight (lbs)'] = race['avg weight (lbs)'];
                        this.players.selectedPlayer['languages'] = race['languages'];
                        this.newPlayerUniqueConfig['eye colors'] = race['eye colors'];
                        this.newPlayerUniqueConfig['skin colors'] = race['skin colors'];
                        this.newPlayerUniqueConfig['hair colors'] = race['hair colors'];
                        this.newPlayerUniqueConfig['avg height (in)'] = race['avg height (in)'];
                        this.newPlayerUniqueConfig['avg weight (lbs)'] = race['avg weight (lbs)'];
                        this.newPlayerUniqueConfig['age'] = race['age'];
                    }
                };
                NewPlayerContainerComponent.prototype.playerClassChange = function (newClass) {
                    var index, cClass;
                    if (this.newPlayerConfig['index'] && this.newPlayerConfig['index']['classes'] && (this.newPlayerConfig['index']['classes'][newClass] || this.newPlayerConfig['index']['classes'][newClass] === 0)) {
                        index = this.newPlayerConfig['index']['classes'][newClass];
                        cClass = this.newPlayerConfig['classes'][index];
                        // this is because the view won't update without this
                        this.players.selectedPlayer['cClass'] = cClass;
                        this.players.selectedPlayer['gold'] = cClass['starting gold'];
                    }
                };
                NewPlayerContainerComponent.prototype.getNewPlayer = function () {
                    var _this = this;
                    this._playerEntriesService.getPlayers().then(function (players) {
                        _this.players = players;
                        _this._playerEntriesService.getNewPlayer().then(function (newPlayer) {
                            _this.players.selectedPlayer = newPlayer;
                        });
                    });
                };
                NewPlayerContainerComponent.prototype.makeNewPlayer = function () {
                    var _this = this;
                    // finish adding all race/class benefits to player as if at level 0
                    this._playerEntriesService.savePlayer().then(function (data) {
                        // jump to the level up container
                        _this._globalService.gotoPlayerLeveling();
                    });
                };
                // on app load, do this:
                NewPlayerContainerComponent.prototype.ngOnInit = function () {
                    this.getNewPlayerConfig();
                };
                NewPlayerContainerComponent = __decorate([
                    core_1.Component({
                        selector: 'sr-new-player-container',
                        templateUrl: './app/views/new-player-container.html',
                        directives: [dynamic_list_component_1.DynamicListComponent, level_container_component_1.LevelContainerComponent]
                    }), 
                    __metadata('design:paramtypes', [player_entries_service_1.PlayerEntriesService, global_service_1.GlobalService])
                ], NewPlayerContainerComponent);
                return NewPlayerContainerComponent;
            }());
            exports_1("NewPlayerContainerComponent", NewPlayerContainerComponent);
        }
    }
});
//# sourceMappingURL=new-player-container.component.js.map