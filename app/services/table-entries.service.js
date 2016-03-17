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
    var TableEntriesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TableEntriesService = (function () {
                function TableEntriesService() {
                }
                TableEntriesService.prototype.getTables = function () {
                    var tables = [
                        { "name": "Creatures" },
                        { "name": "Races" },
                        { "name": "Classes" },
                        { "name": "Abilities" },
                        { "name": "Skills" },
                        { "name": "Spells" },
                        { "name": "Services" },
                        {
                            "name": "Items",
                            "subtables": [
                                { "name": "Ammunition" },
                                { "name": "Arcane" },
                                { "name": "Armor" },
                                { "name": "Consumables" },
                                { "name": "Gear" },
                                { "name": "Weapons" },
                                { "name": "Miscellaneous" },
                                { "name": "Tools" },
                                { "name": "Valuables" },
                                { "name": "Vehicles" }
                            ]
                        }
                    ];
                    return Promise.resolve(tables);
                };
                TableEntriesService.prototype.getTableEntries = function (table) {
                    var jsonFile, entries, entryDetails, entry, keys, i, j;
                    // CITE: search 'read data from json file typescript'
                    // for loading the json files
                    var request = new XMLHttpRequest();
                    // DEBUG: remove once we load json from server
                    request.onload = function () {
                        jsonFile = JSON.parse(this.responseText);
                    };
                    request.open("get", "../../jsons/" + table.toLowerCase() + ".json", false);
                    request.send();
                    // END REMOVE
                    entries = [];
                    for (i = 0; i < jsonFile.entries.length; i++) {
                        // get entries.details[]
                        entry = jsonFile.entries[i];
                        keys = Object.keys(entry);
                        entryDetails = [];
                        for (j = 0; j < keys.length; j++) {
                            // ignore name and description: they are separate parts of the entry interface
                            // and ignore null details
                            if (keys[j] !== "name" && keys[j] !== "description" && entry[keys[j]] !== null) {
                                entryDetails.push({
                                    "key": keys[j],
                                    "value": entry[keys[j]],
                                    "isObject": entry[keys[j]] !== null && typeof entry[keys[j]] === 'object',
                                    "isArray": Array.isArray(entry[keys[j]]),
                                    "isArrayOfObjects": Array.isArray(entry[keys[j]]) && entry[keys[j]].length && entry[keys[j]][0] !== null && typeof entry[keys[j]][0] === 'object'
                                });
                            }
                        }
                        entries.push({
                            "name": entry.name,
                            "description": entry.description,
                            "details": entryDetails
                        });
                    }
                    // var entries: Entry[] = [
                    // 	{
                    // 		"name": "Nightvision",
                    //      "description": "NA",
                    //      "details": [
                    //        {
                    //          "key": "range",
                    //          "value": 120
                    //        }
                    //      ]}
                    // ];
                    return Promise.resolve(entries);
                };
                TableEntriesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TableEntriesService);
                return TableEntriesService;
            }());
            exports_1("TableEntriesService", TableEntriesService);
        }
    }
});
//# sourceMappingURL=table-entries.service.js.map