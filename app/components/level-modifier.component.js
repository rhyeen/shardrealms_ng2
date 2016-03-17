System.register(['angular2/core', '../services/player-entries.service', '../components/level-modifier-item.component'], function(exports_1, context_1) {
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
    var core_1, player_entries_service_1, level_modifier_item_component_1;
    var LevelModifierComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_entries_service_1_1) {
                player_entries_service_1 = player_entries_service_1_1;
            },
            function (level_modifier_item_component_1_1) {
                level_modifier_item_component_1 = level_modifier_item_component_1_1;
            }],
        execute: function() {
            LevelModifierComponent = (function () {
                function LevelModifierComponent(_playerEntriesService) {
                    this._playerEntriesService = _playerEntriesService;
                }
                // on app load, do this:
                LevelModifierComponent.prototype.ngOnInit = function () {
                };
                // @TODO: once you figure out to the function that's called once the component's inputs are initialized,
                // replace this function with that, calling this.getDependentModifiers();
                LevelModifierComponent.prototype.ngOnChanges = function (changes) {
                    var curModifiers;
                    if (changes['modifiers']) {
                        this.modifiers = changes['modifiers'].currentValue;
                    }
                    if (changes['player']) {
                        this.player = changes['player'].currentValue;
                    }
                    if (this.player && this.modifiers) {
                        this.getDependentModifiers();
                    }
                };
                LevelModifierComponent.prototype.trackByIndex = function (index) {
                    return index;
                };
                LevelModifierComponent.prototype.getDependentModifiers = function () {
                    var i, j;
                    this.dependentModifiers = [];
                    //this.modifiersPickList = {};
                    for (i = 0; i < this.modifiers.length; i++) {
                        if (this.modifiers[i]['level'] > this.player['level up from'] && this.modifiers[i]['level'] <= this.player['level']) {
                            //// keep a value for pick list items that are picked
                            // @NOTE: I hate modifying the original reference, but it's much simpler than where the alternative was headed
                            for (j = 0; j < this.modifiers[i]['pick lists'].length; j++) {
                                this.modifiers[i]['pick lists'][j].chosen = 0;
                            }
                            // @NOTE: alternative:
                            // itemPickList = [];
                            // for (j = 0; j < this.modifiers[i]['pick lists'].length; j++) {
                            // 	itemPickList.push({
                            // 		'allowed': this.modifiers[i]['pick lists'][j]['allowed'],
                            // 		'chosen': 0
                            // 	});
                            // }
                            this.dependentModifiers.push(this.modifiers[i]);
                        }
                    }
                };
                LevelModifierComponent = __decorate([
                    core_1.Component({
                        selector: 'sr-level-modifier',
                        templateUrl: './app/views/level-modifier.html',
                        directives: [level_modifier_item_component_1.LevelModifierItemComponent],
                        inputs: ['modifiers', 'player']
                    }), 
                    __metadata('design:paramtypes', [player_entries_service_1.PlayerEntriesService])
                ], LevelModifierComponent);
                return LevelModifierComponent;
            }());
            exports_1("LevelModifierComponent", LevelModifierComponent);
        }
    }
});
//# sourceMappingURL=level-modifier.component.js.map