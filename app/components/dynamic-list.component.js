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
    var DynamicListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DynamicListComponent = (function () {
                function DynamicListComponent() {
                    this.valueSetByList = false;
                    this.showList = [];
                    this.tempShowList = [];
                }
                // on app load, do this:
                DynamicListComponent.prototype.ngOnInit = function () {
                    this.showList = null;
                };
                /**
                 * Modify the shown list to have updated information based on search query
                 */
                DynamicListComponent.prototype.checkInput = function (value, index) {
                    var i, j, doesNotContain, lowerCaseListItem;
                    if (this.valueSetByList) {
                        this.valueSetByList = false;
                        return;
                    }
                    if (index || index === 0) {
                        this.value[index] = value;
                        this.showListIndex = index;
                    }
                    else {
                        this.value = value;
                    }
                    // no list means any input is valid
                    if (!this.list) {
                        return;
                    }
                    // if empty, show all options
                    if (!value) {
                        this.showList = this.list;
                        return;
                    }
                    this.showList = [];
                    value = value.toLowerCase();
                    // otherwise show options that have context with the search query
                    for (i = 0; i < this.list.length; i++) {
                        doesNotContain = false;
                        lowerCaseListItem = this.list[i].toLowerCase();
                        for (j = 0; j < value.length; j++) {
                            if (lowerCaseListItem.indexOf(value[j]) === -1) {
                                doesNotContain = true;
                                break;
                            }
                        }
                        if (!doesNotContain) {
                            this.showList.push(this.list[i]);
                        }
                    }
                };
                DynamicListComponent.prototype.addInput = function () {
                    this.value.push(null);
                };
                DynamicListComponent.prototype.deleteInput = function (index) {
                    this.value.splice(index, 1);
                };
                DynamicListComponent.prototype.trackByIndex = function (index) {
                    return index;
                };
                DynamicListComponent.prototype.setValue = function (value, index) {
                    this.valueSetByList = true;
                    if (index || index === 0) {
                        this.value[index] = value;
                        this.showListIndex = index;
                    }
                    else {
                        this.value = value;
                    }
                    this.showList = null;
                };
                DynamicListComponent.prototype.confirmInput = function () {
                    this.showList = null;
                };
                DynamicListComponent = __decorate([
                    core_1.Component({
                        selector: 'sr-dynamic-list',
                        templateUrl: './app/views/dynamic-list.html',
                        inputs: ["value", "list", "config", "disabled"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DynamicListComponent);
                return DynamicListComponent;
            }());
            exports_1("DynamicListComponent", DynamicListComponent);
        }
    }
});
//# sourceMappingURL=dynamic-list.component.js.map