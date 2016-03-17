System.register(['angular2/core', '../services/player-entries.service'], function(exports_1, context_1) {
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
    var core_1, player_entries_service_1;
    var LevelModifierItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_entries_service_1_1) {
                player_entries_service_1 = player_entries_service_1_1;
            }],
        execute: function() {
            LevelModifierItemComponent = (function () {
                function LevelModifierItemComponent(_playerEntriesService) {
                    this._playerEntriesService = _playerEntriesService;
                }
                // on app load, do this:
                LevelModifierItemComponent.prototype.ngOnInit = function () {
                    this.points = 0;
                    this.isGained = false;
                    this.isGainedElsewhere = false;
                    this.updateGainedSymbol();
                };
                LevelModifierItemComponent.prototype.ngOnChanges = function (changes) {
                    // determine if item should be disabled if the player already has it
                    if (changes['item']) {
                        this.item = changes['item'].currentValue;
                    }
                    // need to do it each time the player is changed, just in case a class & race both have the same pick list ability and a user picks one of them
                    if (changes['player']) {
                        this.player = changes['player'].currentValue;
                    }
                    if (this.player && this.item) {
                        this.checkPlayerHasItem();
                    }
                };
                LevelModifierItemComponent.prototype.checkPlayerHasItem = function () {
                    var _this = this;
                    this._playerEntriesService.checkPlayerHasItem(this.item).then(function (isOwned) { return _this.isGainedElsewhere = isOwned; });
                };
                LevelModifierItemComponent.prototype.updateGainedSymbol = function () {
                    this.gainedSymbol = this.isGained ? '-' : '+';
                };
                LevelModifierItemComponent.prototype.editStat = function (isAdd) {
                    var type;
                    var modifyValue = isAdd ? 1 : -1;
                    this.pickList.chosen += modifyValue;
                    this.points += modifyValue;
                    this._playerEntriesService.modifyPlayerStats(this.item, isAdd);
                };
                LevelModifierItemComponent.prototype.gainStat = function () {
                    this.isGained = !this.isGained;
                    this.updateGainedSymbol();
                    this.pickList.chosen += this.isGained ? 1 : -1;
                    this._playerEntriesService.modifyPlayerStats(this.item, this.isGained);
                };
                LevelModifierItemComponent = __decorate([
                    core_1.Component({
                        selector: 'sr-level-modifier-item',
                        templateUrl: './app/views/level-modifier-item.html',
                        // directives: [],
                        inputs: ['item', 'pickList', 'player']
                    }), 
                    __metadata('design:paramtypes', [player_entries_service_1.PlayerEntriesService])
                ], LevelModifierItemComponent);
                return LevelModifierItemComponent;
            }());
            exports_1("LevelModifierItemComponent", LevelModifierItemComponent);
        }
    }
});
//# sourceMappingURL=level-modifier-item.component.js.map