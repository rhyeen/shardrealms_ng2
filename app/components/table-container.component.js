System.register(['angular2/core', '../services/table-entries.service', './table-selection.component'], function(exports_1, context_1) {
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
    var core_1, table_entries_service_1, table_selection_component_1;
    var TableContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_entries_service_1_1) {
                table_entries_service_1 = table_entries_service_1_1;
            },
            function (table_selection_component_1_1) {
                table_selection_component_1 = table_selection_component_1_1;
            }],
        execute: function() {
            TableContainerComponent = (function () {
                // get the service
                function TableContainerComponent(_tableEntriesService) {
                    this._tableEntriesService = _tableEntriesService;
                    this.tables = [];
                    this.selectedTable = null;
                }
                TableContainerComponent.prototype.getTables = function () {
                    var _this = this;
                    this._tableEntriesService.getTables().then(function (tables) { return _this.tables = tables; });
                };
                // on app load, do this:
                TableContainerComponent.prototype.ngOnInit = function () {
                    this.getTables();
                };
                TableContainerComponent.prototype.selectTable = function (table) {
                    this.selectedTable = table;
                };
                TableContainerComponent.prototype.backToSelection = function () {
                    this.selectedTable = null;
                };
                TableContainerComponent = __decorate([
                    core_1.Component({
                        selector: 'sr-table-container',
                        templateUrl: './app/views/table-container.html',
                        directives: [table_selection_component_1.TableSelectionComponent]
                    }), 
                    __metadata('design:paramtypes', [table_entries_service_1.TableEntriesService])
                ], TableContainerComponent);
                return TableContainerComponent;
            }());
            exports_1("TableContainerComponent", TableContainerComponent);
        }
    }
});
//# sourceMappingURL=table-container.component.js.map