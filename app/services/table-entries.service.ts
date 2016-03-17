import {Injectable} from 'angular2/core';
import {Entry} from '../interfaces/entry';

@Injectable()
export class TableEntriesService {
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

  getTableEntries(table: string) {
    var jsonFile,
        entries: Entry[],
        entryDetails,
        entry,
        keys,
        i, j;

    // CITE: search 'read data from json file typescript'
    // for loading the json files
    var request = new XMLHttpRequest();

    // DEBUG: remove once we load json from server
    request.onload = function() {
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
  }
}