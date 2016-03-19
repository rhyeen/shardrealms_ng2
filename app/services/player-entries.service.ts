import {Injectable} from 'angular2/core';
import {Entry} from '../interfaces/entry';

@Injectable()
export class PlayerEntriesService {

  public players = {
    selectedPlayer: {
      "player name": "Ryan",
      "name": "Test dude",
      "class": "Fighter",
      "level": 1,
      "level up from": 0,
      "experience": 0,
      "race": "Wood elf",
      "action points": 0,
      "size": null,
      "eye color": null,
      "hair color": null,
      "skin color": null,
      "height (in)": null,
      "weight (lbs)": null,
      "age": null,
      "attributes": {
        "STR": 0,
        "DEX": 0,
        "INF": 0,
        "WIS": 0
      },
      "core skills": {
        "Athletics": 0,
        "Intimidation": 0,
        "Willpower": 0,
        "Balance": 0,
        "Stealth": 0,
        "Sleight of hand": 0,
        "Persuasion": 0,
        "Deception": 0,
        "Arcana": 0,
        "Nature": 0,
        "Perception": 0,
        "Inspection": 0,
        "Insight": 0,
        "Lore": 0,
        "Survival": 0
      },
      "special skills": [null], // ngFor needs an extra, even if it is null
      "max health": null,
      "armor": null,
      "dodge": null,
      "magic resist": null,
      "weaknesses": [null], // ngFor needs an extra, even if it is null
      "resistances": [null], // ngFor needs an extra, even if it is null
      "immunities": [null], // ngFor needs an extra, even if it is null
      "STR AR": null,
      "DEX AR": null,
      "Spell AR": null,
      "languages": [null], // ngFor needs an extra, even if it is null
      "background": null,
      "character ideals": [null],
      "character flaws": [null],
      "character previous accomplishments": [null],
      "weapon proficiencies": [null], // ngFor needs an extra, even if it is null
      "armor proficiencies": [null], // ngFor needs an extra, even if it is null
      "spells": [null],
      "abilities": [{"name": "Sharpshooter"}], // ngFor needs an extra, even if it is null
      "gold": null,
      "allowed weight": null,
      "total weight": null,
      "equipped": {
        "main": null,
        "other": [null] // ngFor needs an extra, even if it is null
      },
      "unequipped": [null], // ngFor needs an extra, even if it is null
      "weilded": {
        "primary": {
          "dominant hand": null,
          "off hand": null
        },
        "secondary": {
          "dominant hand": null,
          "off hand": null
        }
      },
      "unwielded": [null], // ngFor needs an extra, even if it is null
      "items on person": [null], // ngFor needs an extra, even if it is null
      "items off person": [null], // ngFor needs an extra, even if it is null
      "shards": ["soul shard"],
      "notes": [null], // ngFor needs an extra, even if it is null
      "temp": { // do not save this information, only used in view
        "ability": {},
        "spell": {},
        "weapon proficiency": {},
        "armor proficiency": {}
      }
    },
    playerList: []
  };
  public playerConfig = {
    "index": {}, // indexes the name to the index location of the arrays
    "classes": [],
    "races": [],
    "skills": [],
    "special skills": [],
    "languages": ["Common", "Dwarven", "Elven", "Draconic", "Scron", "Ancient", "Demonic", "Angelic", "Druidic", "Sylvan", "Aquan", "Avian", "Undercommon"],
    "sizes": ["tiny", "small", "medium", "large", "huge", "gargantuan", "colossal"],
    "spells": {},
    "abilities": {}
  };


  getNewPlayer() {
    return Promise.resolve({
      "player name": null,
      "name": null,
      "class": null,
      "level": 1,
      "level up from": 0,
      "experience": 0,
      "race": null,
      "size": null,
      "action points": 0,
      "eye color": null,
      "hair color": null,
      "skin color": null,
      "height (in)": null,
      "weight (lbs)": null,
      "age": null,
      "attributes": {
        "STR": 0,
        "DEX": 0,
        "INF": 0,
        "WIS": 0
      },
      "core skills": {
        "Athletics": 0,
        "Intimidation": 0,
        "Willpower": 0,
        "Balance": 0,
        "Stealth": 0,
        "Sleight of hand": 0,
        "Persuasion": 0,
        "Deception": 0,
        "Arcana": 0,
        "Nature": 0,
        "Perception": 0,
        "Inspection": 0,
        "Insight": 0,
        "Lore": 0,
        "Survival": 0
      },
      "special skills": [null], // ngFor needs an extra, even if it is null
      "max health": null,
      "armor": null,
      "dodge": null,
      "magic resist": null,
      "weaknesses": [null], // ngFor needs an extra, even if it is null
      "resistances": [null], // ngFor needs an extra, even if it is null
      "immunities": [null], // ngFor needs an extra, even if it is null
      "STR AR": null,
      "DEX AR": null,
      "Spell AR": null,
      "languages": [null], // ngFor needs an extra, even if it is null
      "background": null,
      "character ideals": [null],
      "character flaws": [null],
      "character previous accomplishments": [null],
      "weapon proficiencies": [null], // ngFor needs an extra, even if it is null
      "armor proficiencies": [null], // ngFor needs an extra, even if it is null
      "spells": [null],
      "abilities": [null], // ngFor needs an extra, even if it is null
      "gold": null,
      "allowed weight": null,
      "total weight": null,
      "equipped": {
        "main": null,
        "other": [null] // ngFor needs an extra, even if it is null
      },
      "unequipped": [null], // ngFor needs an extra, even if it is null
      "weilded": {
          "primary": {
              "dominant hand": null,
              "off hand": null
          },
          "secondary": {
              "dominant hand": null,
              "off hand": null
          }
      },
      "unwielded": [null], // ngFor needs an extra, even if it is null
      "items on person": [null], // ngFor needs an extra, even if it is null
      "items off person": [null], // ngFor needs an extra, even if it is null
      "shards": ["soul shard"],
      "notes": [null], // ngFor needs an extra, even if it is null
      "temp": { // do not save this information, only used in view
        "ability": {},
        "spell": {},
        "weapon proficiency": {},
        "armor proficiency": {}
      }
    });
  }

  getExperience(level) {
    var exp = [
      null,   // level 0
      0,      // level 1
      5,
      10,
      20,
      40,
      70,
      115,
      180,
      265,
      380,
      530,
      720,
      980,
      1340,
      1770,
      2230,
      2700,
      3200,
      3800,
      4500
    ];
    if (level < 0 || level > exp.length - 1) {
      level = 0;
    }
    return Promise.resolve(exp[level]);
  }

  getAttributePoints(previousLevel, levelUpTo) {
    var i, gainedAttributePoints = 0;
    var attributePoints = [
      0, // 0
      5, // 1
      1,
      0,
      2, // 4
      0,
      2, // 6
      0,
      0, 
      2, // 9
      0,
      0,
      2, // 12
      0,
      0,
      2, // 15
      0,
      0,
      2, // 18
      0,
      0
    ];
    for (i = previousLevel + 1; i <= levelUpTo; i++) {
      gainedAttributePoints += attributePoints[i];
    }

    return Promise.resolve(gainedAttributePoints);
  }

  getPredefinedStatMapping() {
    var i, p;

    p = this.players.selectedPlayer;

    for (i = 0; i < p['abilities'].length; i++) {
      if (p['abilities'][i]) {
        this.modifyPlayerStatsMapping('ability', p['abilities'][i].name, true);
      }
    }
    for (i = 0; i < p['spells'].length; i++) {
      if (p['spells'][i]) {
        this.modifyPlayerStatsMapping('spell', p['spells'][i].name, true);
      }
    }
    for (i = 0; i < p['armor proficiencies'].length; i++) {
      if (p['armor proficiencies'][i]) {
        this.modifyPlayerStatsMapping('armor proficiency', p['armor proficiencies'][i], true);
      }
    }
    for (i = 0; i < p['weapon proficiencies'].length; i++) {
      if (p['weapon proficiencies'][i]) {
        this.modifyPlayerStatsMapping('weapon proficiency', p['weapon proficiencies'][i], true);
      }
    }
  }

  /**
   * Expects: {type: 
   * @param {[type]} statModifier {
   *   type: REQUIRED <'attribute' | 'skill' | 'ability' | 'spell' | 'weapon proficiency' | 'armor proficiency'>,
   *   name: REQUIRED,
   *   value: OPTIONAL
   * }
   */
  modifyPlayerStats(statModifier, isAdd) {
    var player, coreSkills, i, isNewSkill;
    if (!statModifier || !statModifier.type || (!statModifier.name && statModifier.type !== 'action points')) {
      console.error("PlayerEntriesService.modifyPlayerStats: invalid param");
      return;
    }
    player = this.players.selectedPlayer;
    // add attributes
    if (statModifier.type === 'attribute') {
      player['attributes'][statModifier.name] += isAdd ? statModifier.value : -1 * statModifier.value;
    }
    // add skills
    else if (statModifier.type === 'skill') { 
      coreSkills = { "Athletics": true, "Intimidation": true, "Willpower": true, "Balance": true, "Stealth": true, "Sleight of hand": true, "Persuasion": true, "Deception": true, "Arcana": true, "Nature": true, "Perception": true, "Inspection": true, "Insight": true}; 
      // core skills
      if (coreSkills[statModifier.name]) {
        player['core skills'][statModifier.name] += isAdd ? statModifier.value : -1 * statModifier.value;
      }
      else {
        this.modifySpecialSkill(statModifier, isAdd);
      }
    }
    // add weapon proficiencies
    else if (statModifier.type === 'weapon proficiency') {
    this.addProficiency(statModifier.type, statModifier, isAdd);
    }
    // add armor proficiencies
    else if (statModifier.type === 'armor proficiency') {
    this.addProficiency(statModifier.type, statModifier, isAdd);
    }
    // add abilities
    else if (statModifier.type === 'ability') {
    this.addAbilitySpell(statModifier.type, statModifier, isAdd);
    }
    // add spells
    else if (statModifier.type === 'spell') {
    this.addAbilitySpell(statModifier.type, statModifier, isAdd);
    }
    // add action points
    else if (statModifier.type === 'action points') {
      this.addActionPoints(statModifier);
    }
    else {
      console.error("PlayerEntriesService.modifyPlayerStats: invalid statModifier.type")
    }
  }

  addActionPoints(statModifier) {
    this.players.selectedPlayer["action points"] = statModifier.value;
  }

  modifyPlayerStatsMapping(type, name, isAdd) {
    this.players.selectedPlayer.temp[type][name] = isAdd;
  }

  addAbilitySpell(type, statModifier, isAdd) {
    var i,
      stat,
      playerType;

    if (type === 'ability') {
      playerType = "abilities";
    }
    else if (type === 'spell') {
      playerType = "spells";
    }
    stat = this.players.selectedPlayer[playerType];

    // add to/remove from mapping, as needed
    this.modifyPlayerStatsMapping(type, statModifier.name, isAdd);

    // remove the special no special condition where it's [null]
    if (isAdd && stat.length === 1 && stat[0] === null) {
      stat.splice(0, 1);
    }
    else {
      // check if already in array
      for (i = 0; i < stat.length; i++) {
        if (stat[i].name === statModifier.name) {
          if (!isAdd) {
            stat.splice(i, 1);
          }
          return;
        }
      }
    }
    if (isAdd) {
      stat.push({ "name": statModifier.name });
    }
    else {
      console.error("PlayerEntriesService.addAbilitySpell: should not be able to remove an item not in the array");
    }
  }

  addProficiency(type, statModifier, isAdd) {
    var i,
      stat,
      playerType;

    if (type === 'weapon proficiency') {
      playerType = "weapon proficiencies";
    }
    else if (type === 'armor proficiency') {
      playerType = "armor proficiencies";
    }

    stat = this.players.selectedPlayer[playerType];

    // add to/remove from mapping, as needed
    this.modifyPlayerStatsMapping(type, statModifier.name, isAdd);

    // remove the special no special condition where it's [null]
    if (isAdd && stat.length === 1 && stat[0] === null) {
      stat.splice(0, 1);
    }
    else {
      // check if already in array
      for (i = 0; i < stat.length; i++) {
        if (stat[i] === statModifier.name) {
          if (!isAdd) {
            stat.splice(i, 1);
          }
          return;
        }
      }
    }
    if (isAdd) {
      stat.push(statModifier.name);
    }
    else {
      console.error("PlayerEntriesService.addProficiency: should not be able to remove an item not in the array");
    }
  }

  modifySpecialSkill(statModifier, isAdd) {
    var player, coreSkills, i, isNewSkill;
    if (!statModifier || !statModifier.type || !statModifier.name || statModifier.type !== 'skill') {
      console.error("PlayerEntriesService.modifySpecialSkill: invalid param");
      return;
    }
    player = this.players.selectedPlayer;
    isNewSkill = true;

    // remove the special no special skills condition where it's [null]
    if (isAdd && player['special skills'].length === 1 && player['special skills'][0] === null) {
      player['special skills'].splice(0, 1);
    }
    else {
      for (i = 0; i < player['special skills'].length; i++) {
        if (player['special skills'][i].name === statModifier.name) {
          player['special skills'][i].value += isAdd ? statModifier.value : -1 * statModifier.value;
          isNewSkill = false;
          break;
        }
      }
    }
    if (isNewSkill) {
      player['special skills'].push({
        "name": statModifier.name,
        "value": isAdd ? statModifier.value : -1 * statModifier.value
      });
    }
  }

  getNewPlayerConfig() {
    return new Promise(resolve => {
      this.updatePlayerConfig().then(data => {
        resolve(this.playerConfig);
      });
    });
  }

  getPlayerConfig() {
    return new Promise(resolve => {
      this.updatePlayerConfig().then(data => {
        resolve(this.playerConfig);
      });
    });
  }

  updatePlayerConfig() {

    var files = ["classes", "races", "skills", "abilities", "spells"],
      i;

    for (i = 0; i < files.length; i++) {
      this.getConfigFile(files[i], i).then(data => {
        this.playerConfig[files[data.passThrough]] = data.data;
        this.indexPlayerConfigObject(files[data.passThrough], data.passThrough, "name").then(data => {
          this.playerConfig.index[files[data.passThrough]] = data.data;
        });
      });
    }
    return Promise.resolve("Player config update successful.");
  }

  indexPlayerConfigObject(filename, passThrough, identifier) {
    var i, indexMapper;
    indexMapper = {};
    for (i = 0; i < this.playerConfig[filename].length; i++) {
      indexMapper[this.playerConfig[filename][i][identifier]] = i;
    }

    return Promise.resolve({ "data": indexMapper, "passThrough": passThrough });
  }

  getConfigFile(filename, passThrough) {
    var jsonFile,
      objectList = [],
      i;
    // CITE: search 'read data from json file typescript'
    // for loading the json files
    var request = new XMLHttpRequest();

    // DEBUG: remove once we load json from server
    request.onload = function() {
      jsonFile = JSON.parse(this.responseText);
    };
    request.open("get", "../../jsons/" + filename + ".json", false);
    request.send();
    // END REMOVE

    for (i = 0; i < jsonFile.entries.length; i++) {
      objectList.push(jsonFile.entries[i]);
    }
    return Promise.resolve({ "data": objectList, "passThrough": passThrough });
  }

  getPlayerEntries() {
    //return Promise.resolve([{ "name": "Player 1" }, { "name": "Player 2" }, { "name": "Player 3" }]);
    var jsonFile,
        playerList,
        i;

    // CITE: search 'read data from json file typescript'
    // for loading the json files
    var request = new XMLHttpRequest();

    // DEBUG: remove once we load json from server
    request.onload = function() {
      jsonFile = JSON.parse(this.responseText);
    };
    request.open("get", "../../jsons/players.json", false);
    request.send();
    // END REMOVE

    this.players.playerList = [];
    playerList = [];
    for (i = 0; i < jsonFile.entries.length; i++) {
      // get entries.details[]
      this.players.playerList.push(jsonFile.entries[i]);
      playerList.push({
        "id": i,
        "name": jsonFile.entries[i].name,
        "player name": jsonFile.entries[i]["player name"]
      });
    }
    return Promise.resolve(playerList);
  }

  savePlayer() {
    // save this.players.selectedPlayer to db
    return Promise.resolve("Test save successful.");
  }

  getPlayers() {
    return Promise.resolve(this.players);
  }

  updatePlayer(playerId) {
    // mark as selected
    this.players.selectedPlayer = this.players.playerList[playerId];
    return Promise.resolve("Player update successful.");
  }
}