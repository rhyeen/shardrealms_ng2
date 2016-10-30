import {Injectable} from '@angular/core';
import {Entry} from '../interfaces/entry';

@Injectable()
export class TableEntriesService {
  public itemWindow = {
    x: 0,
    y: 0,
    show: false,
    content: {
      title: null,
      type: null,
      details: null
    },
    element: null,
    history: []
  };

  public tables = {
    tableIndex: {

    }
  };

  getTables() {
  	var tables = [
      {"name": "Creatures"},
      {"name": "Races"},
      {"name": "Classes"},
      {"name": "Abilities"},
      {"name": "Skills"},
      {"name": "Spells"},
      {"name": "Services"},
      {
        "name": "Items",
        "subtables": [
          {"name": "Ammunition"}, 
          {"name": "Arcane"},
          {"name": "Armor"},
          {"name": "Consumables"},
          {"name": "Gear"},
          {"name": "Weapons"},
          {"name": "Miscellaneous"},
          {"name": "Tools"},
          {"name": "Valuables"},
          {"name": "Vehicles"}
        ]
      }
    ];
    return Promise.resolve(tables);
  }

  getItemWindowConfig() {
    return Promise.resolve(this.itemWindow);
  }

  /**
   * Sets the element so that we can catch the js events fired on that element
   * @param {[type]} element should be elementRef of item-window template
   */
  setWindowElement(element) {
    this.itemWindow.element = element;
  }

  previousItem() {
    var previousItem;
    if (!this.itemWindow.history.length) {
      console.error("Attempted to go to previous item, but there is none.");
      return;
    }
    previousItem = this.itemWindow.history.pop();
    this.showItemWindow(null, null, previousItem.type, previousItem.name, true);
  }

  showItemWindow(x, y, type, name, previousItem) {
    var table;

    if (x !== null) {
      this.itemWindow.x = x;
      this.itemWindow.y = y;
    }
    // add previous item to the history
    else if (!previousItem) {
      this.itemWindow.history.push({
        "type": this.itemWindow.content.type,
        "name": this.itemWindow.content.title
      });
    }
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
        this.getAttributeTables().then(temp => {
          this.itemWindow.content.details = this.tables['attributes'][this.tables.tableIndex['attributes'][name]];
        });
      }
      else if (type === 'weapon proficiency') {
        this.getPoficiencyTables().then(temp => {
          this.itemWindow.content.details = this.tables['weapon proficiencies'][this.tables.tableIndex['weapon proficiencies'][name]];
        });
      }
      else if (type === 'armor proficiency') {
        this.getPoficiencyTables().then(temp => {
          this.itemWindow.content.details = this.tables['armor proficiencies'][this.tables.tableIndex['armor proficiencies'][name]];
        });
      }
      else {
        console.error("TableEntriesService.showItemWindow: invalid type: " + type);
      }
      return;
    }
    this.getTableEntries(table).then(temp => {
      this.itemWindow.content.details = this.tables[table][this.tables.tableIndex[table][name]];
      this.setItemClickListener(this);
    });
  }

  /** Called when we have set the itemWindow.content.details object so that the item window will be filled with the information from the .json file entry
   *  We must do a timeout to wait for the DOM to be populated, then we catch any click events on the specific "item" class selectors.
   *  From here, we'll know which element was clicked on and we can refresh the item window to display the new item.
   */
  setItemClickListener(self) {
    // timeout so it can be placed in the DOM
    setTimeout(function() {
      var allItems, i;
      allItems = self.itemWindow.element.nativeElement.querySelectorAll(".item");

      for (i = 0; i < allItems.length; i++) {
        allItems[i].addEventListener("click", itemClick, false);
      }

      function itemClick(event) {
        // x, y, are null because we want to preserve the location & this is how we know to keep history (back button)
        self.showItemWindow(null, null, event.currentTarget.firstChild.innerText, event.currentTarget.innerText);
      }
    }, 200);
  }

  

  getPoficiencyTables() {
    var tableW = 'weapon proficiencies';
    var tableA = 'armor proficiencies'
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
        "isObject": false
      }]
    });

    this.tables[tableW].push({
      "name": "melee",
      "description": null,
      "details": [{
        "key": "properties",
        "value": "Only requires one hand.",
        "isObject": false
      }]
    });

    this.tables[tableW].push({
      "name": "two-handed",
      "description": null,
      "details": [{
        "key": "properties",
        "value": "Requires two hands.",
        "isObject": false
      }]
    });

    this.tables[tableW].push({
      "name": "one-handed ranged",
      "description": null,
      "details": [{
        "key": "properties",
        "value": "Requires one hand.",
        "isObject": false
      }]
    });

    this.tables[tableW].push({
      "name": "ranged",
      "description": null,
      "details": [{
        "key": "properties",
        "value": "Requires two hands.",
        "isObject": false
      }]
    });

    this.tables[tableW].push({
      "name": "complex ranged",
      "description": null,
      "details": [{
        "key": "properties",
        "value": "Requires two hands.",
        "isObject": false
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
        "isObject": false
      }]
    });

    this.tables[tableA].push({
      "name": "other",
      "description": "All other forms of armor that fit to a certain body slot.",
      "details": [{
        "key": "properties",
        "value": "Only one armor type can be assigned to each body slot.",
        "isObject": false
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
  }

  getAttributeTables() {
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
        "isObject": false
      }]
    });
    this.tables[table].push({
      "name": "DEX",
      "description": "Dexterity is the finesse of a character. It provides dodging, light weapon, and ranged weapon advantages",
      "details": [{
        "key": "properties",
        "value": "If attacking with a light melee weapon or ranged weapon, AR = AR + DEX<br>If attacking with a light melee weapon or ranged weapon, AR = AR + DEX(as long as Attuned dexterity isn’t active)<br>Dodge = Dodge + DEX",
        "isObject": false
      }]
    });
    this.tables[table].push({
      "name": "INF",
      "description": "Influence is the magic manipulation and charisma of a character. It provides magic hit, magic damage, and magic resist advantages.",
      "details": [{
        "key": "properties",
        "value": "If attacking with a spell, AR = AR + INF<br>If casting a spell with a ST requirement, then INF is added to the ST requirement<br>Magic resist = Magic resist + INF",
        "isObject": false
      }]
    });
    this.tables[table].push({
      "name": "WIS",
      "description": "Wisdom is the intelligence and craftiness of a character. It provides many skill bonuses as well as advantages for certain classes.",
      "details": [{
        "key": "properties",
        "value": "When a point is added to WIS, gain a wise choice point",
        "isObject": false
      }]
    });

    this.tables.tableIndex[table] = {};
    this.tables.tableIndex[table]['STR'] = 0;
    this.tables.tableIndex[table]['DEX'] = 1;
    this.tables.tableIndex[table]['INF'] = 2;
    this.tables.tableIndex[table]['WIS'] = 3;
    return Promise.resolve(this.tables[table]);
  }

  convertToHtmlBoundValue(key, value, table) {
    var convertedValue = value;

    if (key === "replaces" || key === "requires") {
      // @TODO:
    }
    else if (key === "type of ammunition") {
      // @TODO:
    }
    // ignore all other cases
    return convertedValue;
  }

  getTableEntries(table: string) {
    var jsonFile,
        entries: Entry[],
        entryDetails,
        entry,
        keys,
        htmlBoundValue,
        i, j;

    // CITE: search 'read data from json file typescript'
    // for loading the json files
    var request = new XMLHttpRequest();

    ////
    // search tables object first: could have already been retrieved
    if (this.tables[table]) {
      return Promise.resolve(this.tables[table]);
    }

    // DEBUG: remove once we load json from server
    request.onload = function() {
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
        // convert [something] into <span (click)="doSomething()">something</span>
        htmlBoundValue = this.convertToHtmlBoundValue(keys[j], entry[keys[j]], table);

        // ignore name and description: they are separate parts of the entry interface
        // and ignore null details
        if (keys[j] !== "name" && keys[j] !== "description" && entry[keys[j]] !== null) {
          entryDetails.push({
            "key": keys[j],
            "value": htmlBoundValue,
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

  	return Promise.resolve(entries);
  }
}