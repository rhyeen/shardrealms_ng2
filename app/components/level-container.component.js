System.register(['angular2/core', '../services/player-entries.service', '../components/level-modifier.component', '../components/level-modifier-item.component'], function(exports_1, context_1) {
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
    var core_1, player_entries_service_1, level_modifier_component_1, level_modifier_item_component_1;
    var LevelContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_entries_service_1_1) {
                player_entries_service_1 = player_entries_service_1_1;
            },
            function (level_modifier_component_1_1) {
                level_modifier_component_1 = level_modifier_component_1_1;
            },
            function (level_modifier_item_component_1_1) {
                level_modifier_item_component_1 = level_modifier_item_component_1_1;
            }],
        execute: function() {
            LevelContainerComponent = (function () {
                function LevelContainerComponent(_playerEntriesService) {
                    this._playerEntriesService = _playerEntriesService;
                    this.modifiersInLevelingRange = {
                        'races': false,
                        'classes': false
                    };
                    this.modifiers = {
                        'races': null,
                        'classes': null
                    };
                }
                LevelContainerComponent.prototype.getPlayerConfig = function () {
                    var _this = this;
                    this._playerEntriesService.getPlayerConfig().then(function (playerConfig) {
                        _this.playerConfig = playerConfig;
                        // needs to be after playerConfig since playerConfig needs to be set up for getMods()
                        _this.getPlayers();
                    });
                };
                LevelContainerComponent.prototype.getPlayers = function () {
                    var _this = this;
                    this._playerEntriesService.getPlayers().then(function (players) {
                        _this.players = players;
                        _this.getMods(_this.players.selectedPlayer['race'], 'races');
                        _this.getMods(_this.players.selectedPlayer['class'], 'classes');
                        _this.getAttributePoints();
                        _this.updateStatMapping();
                        _this.modifyHealth();
                    });
                };
                /**
                 * Gets the stats already added to the player object and adds them to the .temp mappings property
                 */
                LevelContainerComponent.prototype.updateStatMapping = function () {
                    this._playerEntriesService.getPredefinedStatMapping();
                };
                LevelContainerComponent.prototype.modifyHealth = function () {
                    var index, getClass, player = this.players.selectedPlayer;
                    index = this.playerConfig['index']['classes'][player.class];
                    getClass = this.playerConfig['classes'][index];
                    if (!player['max health']) {
                        player['max health'] = getClass['starting health'];
                    }
                    player['max health'] += (player['level'] - player['level up from']) * getClass["health per level"];
                };
                LevelContainerComponent.prototype.addPassiveModifier = function (levelModifiers) {
                    var i, ps;
                    if (!levelModifiers || !levelModifiers['passive list'] || !levelModifiers['passive list'].length) {
                        return;
                    }
                    ps = levelModifiers['passive list'];
                    for (i = 0; i < ps.length; i++) {
                        this._playerEntriesService.modifyPlayerStats(ps[i], true);
                    }
                };
                // on app load, do this:
                LevelContainerComponent.prototype.ngOnInit = function () {
                    this.getPlayerConfig();
                };
                LevelContainerComponent.prototype.getAttributePoints = function () {
                    var _this = this;
                    this._playerEntriesService.getAttributePoints(this.players.selectedPlayer['level up from'], this.players.selectedPlayer['level']).then(function (attributePoints) {
                        if (attributePoints <= 0) {
                            _this.attribute = null;
                            return;
                        }
                        _this.attribute = {
                            'pickList': {
                                'allowed': attributePoints,
                                'chosen': 0
                            },
                            'STR': {
                                'type': 'attribute',
                                'name': 'STR',
                                'value': 1
                            },
                            'DEX': {
                                'type': 'attribute',
                                'name': 'DEX',
                                'value': 1
                            },
                            'INF': {
                                'type': 'attribute',
                                'name': 'INF',
                                'value': 1
                            },
                            'WIS': {
                                'type': 'attribute',
                                'name': 'WIS',
                                'value': 1
                            }
                        };
                    });
                };
                LevelContainerComponent.prototype.getMods = function (type, typeKey) {
                    var index, getType, i;
                    if (this.playerConfig['index'] && this.playerConfig['index'][typeKey] && (this.playerConfig['index'][typeKey][type] || this.playerConfig['index'][typeKey][type] === 0)) {
                        index = this.playerConfig['index'][typeKey][type];
                        getType = this.playerConfig[typeKey][index];
                        this.modifiers[typeKey] = getType['level modifiers'];
                        // determine if modifiers are in leveling up range
                        this.modifiersInLevelingRange[typeKey] = false;
                        for (i = 0; i < this.modifiers[typeKey].length; i++) {
                            if (this.modifiers[typeKey][i]['level'] > this.players.selectedPlayer['level up from'] && this.modifiers[typeKey][i]['level'] <= this.players.selectedPlayer['level']) {
                                this.modifiersInLevelingRange[typeKey] = true;
                                // add passive modifiers
                                this.addPassiveModifier(this.modifiers[typeKey][i]);
                            }
                        }
                    }
                };
                LevelContainerComponent = __decorate([
                    core_1.Component({
                        selector: 'sr-level-container',
                        templateUrl: './app/views/level-container.html',
                        directives: [level_modifier_component_1.LevelModifierComponent, level_modifier_item_component_1.LevelModifierItemComponent]
                    }), 
                    __metadata('design:paramtypes', [player_entries_service_1.PlayerEntriesService])
                ], LevelContainerComponent);
                return LevelContainerComponent;
            }());
            exports_1("LevelContainerComponent", LevelContainerComponent);
        }
    }
});
//# sourceMappingURL=level-container.component.js.map