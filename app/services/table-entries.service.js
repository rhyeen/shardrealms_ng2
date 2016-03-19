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
                    this.itemWindow = {
                        x: 0,
                        y: 0,
                        show: false,
                        content: {
                            title: null,
                            type: null,
                            details: null
                        }
                    };
                    this.tables = {
                        tableIndex: {}
                    };
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
                TableEntriesService.prototype.getItemWindowConfig = function () {
                    return Promise.resolve(this.itemWindow);
                };
                TableEntriesService.prototype.showItemWindow = function (x, y, type, name) {
                    var _this = this;
                    var table;
                    this.itemWindow.x = x;
                    this.itemWindow.y = y;
                    this.itemWindow.show = true;
                    this.itemWindow.content.title = name;
                    this.itemWindow.content.type = type;
                    if (type === 'ability') {
                        table = 'abilities';
                    }
                    else if (type === 'spell') {
                        table = 'spells';
                    }
                    else if (type === 'skill') {
                        table = 'skills';
                    }
                    else {
                        if (type === 'attribute') {
                            this.getAttributeTables().then(function (temp) {
                                _this.itemWindow.content.details = _this.tables['attributes'][_this.tables.tableIndex['attributes'][name]];
                            });
                        }
                        else if (type === 'weapon proficiency') {
                            this.getPoficiencyTables().then(function (temp) {
                                _this.itemWindow.content.details = _this.tables['weapon proficiencies'][_this.tables.tableIndex['weapon proficiencies'][name]];
                            });
                        }
                        else if (type === 'armor proficiency') {
                            this.getPoficiencyTables().then(function (temp) {
                                _this.itemWindow.content.details = _this.tables['armor proficiencies'][_this.tables.tableIndex['armor proficiencies'][name]];
                            });
                        }
                        else {
                            console.error("TableEntriesService.showItemWindow: invalid type: " + type);
                        }
                        return;
                    }
                    this.getTableEntries(table).then(function (temp) {
                        _this.itemWindow.content.details = _this.tables[table][_this.tables.tableIndex[table][name]];
                    });
                };
                TableEntriesService.prototype.getPoficiencyTables = function () {
                    var tableW = 'weapon proficiencies';
                    var tableA = 'armor proficiencies';
                    if (this.tables[tableW] && this.tables[tableA]) {
                        return Promise.resolve(this.tables[tableW]);
                    }
                    this.tables[tableW] = [];
                    this.tables[tableW].push({
                        "name": "light melee",
                        "description": null,
                        "details": [{
                                "key": "properties",
                                "value": "Is modified with DEX instead of STR.<br>Only requires one hand.",
                                "isObject": true
                            }]
                    });
                    this.tables[tableW].push({
                        "name": "melee",
                        "description": null,
                        "details": [{
                                "key": "properties",
                                "value": "Only requires one hand.",
                                "isObject": true
                            }]
                    });
                    this.tables[tableW].push({
                        "name": "two-handed",
                        "description": null,
                        "details": [{
                                "key": "properties",
                                "value": "Requires two hands.",
                                "isObject": true
                            }]
                    });
                    this.tables[tableW].push({
                        "name": "one-handed ranged",
                        "description": null,
                        "details": [{
                                "key": "properties",
                                "value": "Requires one hand.",
                                "isObject": true
                            }]
                    });
                    this.tables[tableW].push({
                        "name": "ranged",
                        "description": null,
                        "details": [{
                                "key": "properties",
                                "value": "Requires two hands.",
                                "isObject": true
                            }]
                    });
                    this.tables[tableW].push({
                        "name": "complex ranged",
                        "description": null,
                        "details": [{
                                "key": "properties",
                                "value": "Requires two hands.",
                                "isObject": true
                            }]
                    });
                    this.tables.tableIndex[tableW] = {};
                    this.tables.tableIndex[tableW]['light melee'] = 0;
                    this.tables.tableIndex[tableW]['melee'] = 1;
                    this.tables.tableIndex[tableW]['two-handed melee'] = 2;
                    this.tables.tableIndex[tableW]['one-handed ranged'] = 3;
                    this.tables.tableIndex[tableW]['ranged'] = 4;
                    this.tables.tableIndex[tableW]['complex ranged'] = 5;
                    this.tables[tableA] = [];
                    this.tables[tableA].push({
                        "name": "cloth",
                        "description": "Best worn by magic-users as cloth armor does not affect spell casting negatively.",
                        "details": null
                    });
                    this.tables[tableA].push({
                        "name": "light",
                        "description": "Best worn by rogues as light armor does not affect dodge negatively.",
                        "details": null
                    });
                    this.tables[tableA].push({
                        "name": "medium",
                        "description": "Best worn by warriors as medium armor balances mobility with protection.",
                        "details": null
                    });
                    this.tables[tableA].push({
                        "name": "heavy",
                        "description": "Best worn by tanks as heavy armor sacrifices offensive abilities for high protection.",
                        "details": null
                    });
                    this.tables[tableA].push({
                        "name": "shield",
                        "description": "Used to help in dodge by providing [Block].",
                        "details": null
                    });
                    this.tables[tableA].push({
                        "name": "shield",
                        "description": "Used to help in dodge by providing [Block].",
                        "details": [{
                                "key": "properties",
                                "value": "Requires one hand.",
                                "isObject": true
                            }]
                    });
                    this.tables[tableA].push({
                        "name": "other",
                        "description": "All other forms of armor that fit to a certain body slot.",
                        "details": [{
                                "key": "properties",
                                "value": "Only one armor type can be assigned to each body slot.",
                                "isObject": true
                            }]
                    });
                    this.tables.tableIndex[tableA] = {};
                    this.tables.tableIndex[tableA]['cloth'] = 0;
                    this.tables.tableIndex[tableA]['light'] = 1;
                    this.tables.tableIndex[tableA]['medium'] = 2;
                    this.tables.tableIndex[tableA]['heavy'] = 3;
                    this.tables.tableIndex[tableA]['shield'] = 4;
                    this.tables.tableIndex[tableA]['other'] = 5;
                    return Promise.resolve(this.tables[tableW]);
                };
                TableEntriesService.prototype.getAttributeTables = function () {
                    var table = 'attributes';
                    if (this.tables[table]) {
                        return Promise.resolve(this.tables[table]);
                    }
                    this.tables[table] = [];
                    this.tables[table].push({
                        "name": "STR",
                        "description": "Strength is the shear physical power of a character.  It provides constitution, stamina, and melee weapon advantages.",
                        "details": [{
                                "key": "properties",
                                "value": "If attacking with a melee weapon, AR = AR + STR <br>If attacking with a melee weapon, DMG = DMG + STR (as long as [Attuned strength] isn’t active)<br>If STR > 0, then STR/2 (rounding up) is added to the maximum health gained per level",
                                "isObject": true
                            }]
                    });
                    this.tables[table].push({
                        "name": "DEX",
                        "description": "Dexterity is the finesse of a character. It provides dodging, light weapon, and ranged weapon advantages",
                        "details": [{
                                "key": "properties",
                                "value": "If attacking with a light melee weapon or ranged weapon, AR = AR + DEX<br>If attacking with a light melee weapon or ranged weapon, AR = AR + DEX(as long as Attuned dexterity isn’t active)<br>Dodge = Dodge + DEX",
                                "isObject": true
                            }]
                    });
                    this.tables[table].push({
                        "name": "INF",
                        "description": "Influence is the magic manipulation and charisma of a character. It provides magic hit, magic damage, and magic resist advantages.",
                        "details": [{
                                "key": "properties",
                                "value": "If attacking with a spell, AR = AR + INF<br>(maybe ?) If casting a spell with a ST requirement, then INF is added to the ST requirement<br>Magic resist = Magic resist + INF",
                                "isObject": true
                            }]
                    });
                    this.tables[table].push({
                        "name": "WIS",
                        "description": "Wisdom is the intelligence and craftiness of a character. It provides many skill bonuses as well as advantages for certain classes.",
                        "details": [{
                                "key": "properties",
                                "value": "When a point is added to WIS, gain a wise choice point",
                                "isObject": true
                            }]
                    });
                    this.tables.tableIndex[table] = {};
                    this.tables.tableIndex[table]['STR'] = 0;
                    this.tables.tableIndex[table]['DEX'] = 1;
                    this.tables.tableIndex[table]['INF'] = 2;
                    this.tables.tableIndex[table]['WIS'] = 3;
                    return Promise.resolve(this.tables[table]);
                };
                TableEntriesService.prototype.getTableEntries = function (table) {
                    var jsonFile, entries, entryDetails, entry, keys, i, j;
                    // CITE: search 'read data from json file typescript'
                    // for loading the json files
                    var request = new XMLHttpRequest();
                    ////
                    // search tables object first: could have already been retrieved
                    if (this.tables[table]) {
                        return Promise.resolve(this.tables[table]);
                    }
                    // DEBUG: remove once we load json from server
                    request.onload = function () {
                        jsonFile = JSON.parse(this.responseText);
                    };
                    request.open("get", "../../jsons/" + table.toLowerCase() + ".json", false);
                    request.send();
                    // END REMOVE
                    entries = [];
                    // preserve for later
                    this.tables[table] = entries;
                    this.tables.tableIndex[table] = {};
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
                        // add mapping to each item to quickly locate in the array
                        this.tables.tableIndex[table][entry.name] = i;
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