import {Injectable} from '@angular/core';
import {Entry} from '../interfaces/entry';

@Injectable()
export class PlayerEntriesService {

  public statWindow = {
    x: 0,
    y: 0,
    show: false,
    type: null,
    content: {
      
    }
  };

  public players = {
    selectedPlayer: null,
    // selectedPlayer: {
    //   "player name": "Ryan",
    //   "name": {
    //     "value": "Test char",
    //     "stackingValue": false,
    //     "history": {
    //       "experience": "Test char"
    //     }
    //   },
    //   "class": {
    //     "value": "Barbarian",
    //     "stackingValue": false,
    //     "history": {
    //       "experience": "Barbarian"
    //     }
    //   },
    //   "level": 1,
    //   "level up from": 0,
    //   "experience": 0,
    //   "race": {
    //     "value": "Wood elf",
    //     "stackingValue": false,
    //     "history": {
    //       "experience": "Wood elf"
    //     }
    //   },
    //   "size": {
    //     "value": null,
    //     "stackingValue": false,
    //     "history": {
    //       "experience": null
    //     }
    //   },
    //   "action points": {
    //     "value": 0,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": 0
    //     }
    //   },
    //   "eye color": {
    //     "value": null,
    //     "stackingValue": false,
    //     "history": {
    //       "experience": null
    //     }
    //   },
    //   "hair color": {
    //     "value": null,
    //     "stackingValue": false,
    //     "history": {
    //       "experience": null
    //     }
    //   },
    //   "skin color": {
    //     "value": null,
    //     "stackingValue": false,
    //     "history": {
    //       "experience": null
    //     }
    //   },
    //   "height (in)": {
    //     "value": null,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": null
    //     }
    //   },
    //   "weight (lbs)": {
    //     "value": 150,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": 150
    //     }
    //   },
    //   "age": {
    //     "value": null,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": null
    //     }
    //   },
    //   "attributes": {
    //     "STR": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "DEX": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "INF": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "WIS": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     }
    //   },
    //   "core skills": {
    //     "Athletics": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Intimidation": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Willpower": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Balance": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Stealth": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Sleight of hand": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Persuasion": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Deception": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Arcana": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Nature": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Perception": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Inspection": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Insight": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Lore": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     },
    //     "Survival": {
    //       "value": 0,
    //       "stackingValue": true,
    //       "history": {
    //         "experience": 0
    //       }
    //     }
    //   },
    //   "wise choice points": 0,
    //   "special skills": [null], // ngFor needs an extra, even if it is null
    //   "max health": {
    //     "value": 0,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": 0
    //     }
    //   },
    //   "armor": {
    //     "value": 0,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": 0
    //     }
    //   },
    //   "dodge": {
    //     "value": 0,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": 0
    //     }
    //   },
    //   "magic resist": {
    //     "value": 0,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": 0
    //     }
    //   },
    //   "weaknesses": [null], // ngFor needs an extra, even if it is null
    //   "resistances": [null], // ngFor needs an extra, even if it is null
    //   "immunities": [null], // ngFor needs an extra, even if it is null
    //   "STR AR": {
    //     "value": 0,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": 0
    //     }
    //   },
    //   "DEX AR": {
    //     "value": 0,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": 0
    //     }
    //   },
    //   "Spell AR": {
    //     "value": 0,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": 0
    //     }
    //   },
    //   "languages": [null], // ngFor needs an extra, even if it is null
    //   "background": null,
    //   "character ideals": [null],
    //   "character flaws": [null],
    //   "character previous accomplishments": [null],
    //   "weapon proficiencies": [null], // ngFor needs an extra, even if it is null
    //   "armor proficiencies": [null], // ngFor needs an extra, even if it is null
    //   "spells": [null],
    //   "abilities": [null], // ngFor needs an extra, even if it is null
    //   "gold": {
    //     "value": 0,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": 0
    //     }
    //   },
    //   "allowed weight": {
    //     "value": 0,
    //     "stackingValue": true,
    //     "history": {
    //       "experience": 0
    //     }
    //   },
    //   "total weight": null,
    //   "equipped": {
    //     "main": null,
    //     "other": [null] // ngFor needs an extra, even if it is null
    //   },
    //   "unequipped": [null], // ngFor needs an extra, even if it is null
    //   "weilded": {
    //     "primary": {
    //       "dominant hand": null,
    //       "off hand": null
    //     },
    //     "secondary": {
    //       "dominant hand": null,
    //       "off hand": null
    //     }
    //   },
    //   "unwielded": [null], // ngFor needs an extra, even if it is null
    //   "items on person": [null], // ngFor needs an extra, even if it is null
    //   "items off person": [null], // ngFor needs an extra, even if it is null
    //   "shards": ["soul shard"],
    //   "notes": [null], // ngFor needs an extra, even if it is null
    //   "temp": { // do not save this information, only used in view
    //     "ability": {},
    //     "spell": {},
    //     "weapon proficiency": {},
    //     "armor proficiency": {},
    //     "skill points": {}
    //   }
    // },
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

  getStatWindowConfig() {
    return Promise.resolve(this.statWindow);
  }

  showStatWindow(x, y, type, content) {
    var table;

    this.statWindow.x = x;
    this.statWindow.y = y;
    this.statWindow.type = type;
    this.statWindow.show = true;
    this.statWindow.content = content;
  }

  /** 
   * Stats of the selected player to match what is given from stats, items, curses/blessings, other 
   *
   * Expect each stat to resemble:
   * "name of stat": {
   *   "name": // if an array of stats
   *   "value": // final calculated value, will be the string: experience + bound[i].value  + " (" + conditional[x1] + ", " + conditional[x2] + ")"
   *   "stackingValue": true | false // is value a number or a string?
   *   "history": {
   *     "experience": // value given from class/race leveling. Or if stat has no value (e.g. ability/spell), either true if it comes from an ability, or false
   *     "conditional": [ // such as unequiped items or in certain circumstances
   *       {
   *         "from": { // what causes this?
   *           "type": // can be found under this table
   *           "name": // unique name identifier
   *         }
   *         "condition": // explanation of required condition to be true
   *         "value": // modifying value, not required for stats in arrays (e.g. abilities, spells)
   *         "note": // any user provided info about it
   *       }
   *     ],
   *     "bound": [ // if value does not stack (such as eye color), only length - 1 index will be value
   *       {
   *         "from": {
   *           "type":
   *           "name":
   *         }
   *         "value": // not required for stats in arrays (e.g. abilities, spells)
   *         "note":
   *       }
   *     ]
   *   }
   * }
   */
  getNewPlayer() {
    var newPlayer = {
      "player name": null,
      "name": {
        "value": null,
        "stackingValue": false,
        "history": {
          "experience": null
        }
      },
      "class": {
        "value": null,
        "stackingValue": false,
        "history": {
          "experience": null
        }
      },
      "level": 1,
      "level up from": 0,
      "experience": 0,
      "race": {
        "value": null,
        "stackingValue": false,
        "history": {
          "experience": null
        }
      },
      "size": {
        "value": null,
        "stackingValue": false,
        "history": {
          "experience": null
        }
      },
      "action points": {
        "value": 0,
        "stackingValue": true,
        "history": {
          "experience": 0
        }
      },
      "eye color": {
        "value": null,
        "stackingValue": false,
        "history": {
          "experience": null
        }
      },
      "hair color": {
        "value": null,
        "stackingValue": false,
        "history": {
          "experience": null
        }
      },
      "skin color": {
        "value": null,
        "stackingValue": false,
        "history": {
          "experience": null
        }
      },
      "height (in)": {
        "value": null, // null because if 0, it would set to the new character screen to 0 when we change race
        "stackingValue": true,
        "history": {
          "experience": null
        }
      },
      "weight (lbs)": {
        "value": null, // null because if 0, it would set to the new character screen to 0 when we change race
        "stackingValue": true,
        "history": {
          "experience": null
        }
      },
      "age": {
        "value": null, // null because if 0, it would set to the new character screen to 0 when we change race
        "stackingValue": true,
        "history": {
          "experience": null
        }
      },
      "attributes": {
        "STR": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "DEX": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "INF": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "WIS": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        }
      },
      "core skills": {
        "Athletics": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Intimidation": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Willpower": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Balance": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Stealth": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Sleight of hand": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Persuasion": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Deception": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Arcana": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Nature": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Perception": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Inspection": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Insight": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Lore": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        },
        "Survival": {
          "value": 0,
          "stackingValue": true,
          "history": {
            "experience": 0
          }
        }
      },
      "wise choice points": 0,
      "special skills": [null], // ngFor needs an extra, even if it is null
      "max health": {
        "value": 0,
        "stackingValue": true,
        "history": {
          "experience": 0
        }
      },
      "armor": {
        "value": 0,
        "stackingValue": true,
        "history": {
          "experience": 0
        }
      },
      "dodge": {
        "value": 0,
        "stackingValue": true,
        "history": {
          "experience": 0
        }
      },
      "magic resist": {
        "value": 0,
        "stackingValue": true,
        "history": {
          "experience": 0
        }
      },
      "weaknesses": [null], // ngFor needs an extra, even if it is null
      "resistances": [null], // ngFor needs an extra, even if it is null
      "immunities": [null], // ngFor needs an extra, even if it is null
      "STR AR": {
        "value": 0,
        "stackingValue": true,
        "history": {
          "experience": 0
        }
      },
      "DEX AR": {
        "value": 0,
        "stackingValue": true,
        "history": {
          "experience": 0
        }
      },
      "Spell AR": {
        "value": 0,
        "stackingValue": true,
        "history": {
          "experience": 0
        }
      },
      "languages": [null], // ngFor needs an extra, even if it is null
      "background": null,
      "character ideals": [null],
      "character flaws": [null],
      "character previous accomplishments": [null],
      "weapon proficiencies": [null], // ngFor needs an extra, even if it is null
      "armor proficiencies": [null], // ngFor needs an extra, even if it is null
      "spells": [null],
      "abilities": [null], // ngFor needs an extra, even if it is null
      "gold": {
        "value": 0,
        "stackingValue": true,
        "history": {
          "experience": 0
        }
      },
      "allowed weight": {
        "value": 0,
        "stackingValue": true,
        "history": {
          "experience": 0
        }
      },
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
      "notes": [null] // ngFor needs an extra, even if it is null
    };

    this.addTempProperty(newPlayer);

    return Promise.resolve(newPlayer);
  }

  /**
   * Adds typical temporary properties that the view uses universally, but only temporarily.
   * This information should not be saved to the db
   */
  addTempProperty(player) {
    player.temp = { // do not save this information, only used in view
      "ability": {},
      "spell": {},
      "weapon proficiency": {},
      "armor proficiency": {},
      "skill points": {}
    };
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

  getPlayerSkillList(attribute) {
    if (attribute === 'STR') {
      return [
        {
          "type": "skill",
          "name": "Athletics",
          "value": 1
        },
        {
          "type": "skill",
          "name": "Intimidation",
          "value": 1
        },
        {
          "type": "skill",
          "name": "Willpower",
          "value": 1
        }
      ];
    }
    else if (attribute === 'DEX') {
      return [
        {
          "type": "skill",
          "name": "Balance",
          "value": 1
        },
        {
          "type": "skill",
          "name": "Stealth",
          "value": 1
        },
        {
          "type": "skill",
          "name": "Sleight of hand",
          "value": 1
        }
      ];
    }
    else if (attribute === 'INF') {
      return [
        {
          "type": "skill",
          "name": "Persuasion",
          "value": 1
        },
        {
          "type": "skill",
          "name": "Deception",
          "value": 1
        },
        {
          "type": "skill",
          "name": "Arcana",
          "value": 1
        }
      ];
    }
    else if (attribute === 'WIS') {
      return [
        {
          "type": "skill",
          "name": "Nature",
          "value": 1
        },
        {
          "type": "skill",
          "name": "Perception",
          "value": 1
        },
        {
          "type": "skill",
          "name": "Inspection",
          "value": 1
        },
        {
          "type": "skill",
          "name": "Insight",
          "value": 1
        },
        {
          "type": "skill",
          "name": "Lore",
          "value": 1
        },
        {
          "type": "skill",
          "name": "Survival",
          "value": 1
        }
      ];
    }
    else {
      console.error("PlayerEntriesService.getPlayerSkillList: invalid statModifier.name for attribute: " + attribute);
      return null;
    }
  }

  modifyPlayerAttributes(statModifier, isAdd) {
    var player = this.players.selectedPlayer,
        skillList;

    player['attributes'][statModifier.name].history.experience += isAdd ? statModifier.value : -1 * statModifier.value;
    this.updateStatByHistory(player['attributes'][statModifier.name]);

    // add back in the temp, if it's been removed because of a save
    if (!player.temp) {
      this.addTempProperty(player);
    }

    if (isAdd && !player.temp['skill points'][statModifier.name]) {
      skillList = this.getPlayerSkillList(statModifier.name);
      player.temp['skill points'][statModifier.name] = [
        {
          "isSkillPoints": true,
          "level": player['level'], // has to be within leveling block
          "pick lists": [{
            "allowed": 0,
            "list": skillList
          }]
        }
      ];
    }

    // NOTE: instead, players have to get the stat above 0 before adding skill points
    // if its added, but the value is negative, ignore adding skills
    // if (isAdd && statModifier.value < 0) {
    //   statModifier.value = 0;
    // }
    // +2 to that skill point
    player.temp['skill points'][statModifier.name][0]["pick lists"][0].allowed += isAdd ? 2 * statModifier.value : -2 * statModifier.value;

    if (statModifier.name === "WIS") {
      player['wise choice points'] += isAdd ? 2 * statModifier.value : -2 * statModifier.value;
    }
    // determine carriable weight
    if (statModifier.name === "STR") {
      this.updateCarriableWeight(player);
    }
  }


  /**
   * If own weight >= 100, then carriable weight is own weight + 25*STR modifier.
   * Otherwise, if own weight >= 25, then carriable weight is own weight + 10*STR modifier.
   * Otherwise, (if own weight < 25) carriable weight is own weight + 5*STR modifier.
   */  
  updateCarriableWeight(player) {
    var magicNumber;

    if (!player["weight (lbs)"] || !player["weight (lbs)"].value) {
      console.error("PlayerEntriesService.updateCarriableWeight: player's weight is not set");
      return;
    }
    if (player["weight (lbs)"].value >= 100) {
      magicNumber = 25;
    }
    else if (player["weight (lbs)"].value >= 25) {
      magicNumber = 10;
    }
    else {
      magicNumber = 5;
    }
    player["allowed weight"].history.experience = player["weight (lbs)"].value + magicNumber * player["attributes"]["STR"].value;
    this.updateStatByHistory(player["allowed weight"]);

    // for all the people playing microscopic beings...
    if (player["allowed weight"].value < 0) {
      player["allowed weight"].value = 0;
    }
  }

  updateStatByHistory(stat) {
    var i;

    // get the base value
    stat.value = stat.history.experience;

    ////
    // check bound forms of history, since they effect the overall value 
    // starting with bound
    if (stat.stackingValue) {
      if (stat.history.bound) {
        for (i = 0; i < stat.history.bound.length; i++) {
          stat.value += stat.history.bound[i].value;
        }
      }
    }
    // non-stacking stat, such as eye-color
    else {
      if (stat.history.bound && stat.history.bound.length) {
        stat.value = stat.history.bound[stat.history.bound.length - 1];
      }
    }
    // ignore conditional forms of history since they will be shown in parathesis next to the stat.value
  }

  /**
   * Expects: {type: 
   * @param {[type]} statModifier {
   *   type: REQUIRED <'action points' | 'attribute' | 'skill' | 'ability' | 'spell' | 'weapon proficiency' | 'armor proficiency'>,
   *   name: REQUIRED,
   *   value: OPTIONAL
   * }
   */
  modifyPlayerStats(statModifier, isAdd) {
    var player, coreSkills;
    if (!statModifier || !statModifier.type || (!statModifier.name && statModifier.type !== 'action points')) {
      console.error("PlayerEntriesService.modifyPlayerStats: invalid param");
      return;
    }
    player = this.players.selectedPlayer;
    // add attributes
    if (statModifier.type === 'attribute') {
      this.modifyPlayerAttributes(statModifier, isAdd);
    }
    // add skills
    else if (statModifier.type === 'skill') { 
      coreSkills = { "Athletics": true, "Intimidation": true, "Willpower": true, "Balance": true, "Stealth": true, "Sleight of hand": true, "Persuasion": true, "Deception": true, "Arcana": true, "Nature": true, "Perception": true, "Inspection": true, "Insight": true}; 
      // core skills
      if (coreSkills[statModifier.name]) {
        player['core skills'][statModifier.name].history.experience += isAdd ? statModifier.value : -1 * statModifier.value;
        this.updateStatByHistory(player['core skills'][statModifier.name]);
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
    this.players.selectedPlayer["action points"].history.experience = statModifier.value;
    this.updateStatByHistory(this.players.selectedPlayer["action points"]);
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

    // remove the special no element condition where it's [null]
    if (isAdd && stat.length === 1 && stat[0] === null) {
      stat.splice(0, 1);
    }
    else {
      // check if already in array
      for (i = 0; i < stat.length; i++) {
        if (stat[i].name === statModifier.name) {
          // remove from array
          if (!isAdd) {
            stat.splice(i, 1);
          }
          // if adding, it's already been added, so we're done
          return;
        }
      }
    }
    if (isAdd) {
      stat.push({ 
        "name": statModifier.name,
        "stackingValue": false,
        "history": {
          "experience": true
        }
      });
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

    // remove the special no element condition where it's [null]
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
      stat.push({
        "name": statModifier.name,
        "stackingValue": false,
        "history": {
          "experience": true
        }
      });
    }
    else {
      console.error("PlayerEntriesService.addProficiency: should not be able to remove an item not in the array");
    }
  }

  modifySpecialSkill(statModifier, isAdd) {
    var stat, coreSkills, i;
    if (!statModifier || !statModifier.type || !statModifier.name || statModifier.type !== 'skill') {
      console.error("PlayerEntriesService.modifySpecialSkill: invalid param");
      return;
    }
    stat = this.players.selectedPlayer['special skills'];

    // remove the special no element skills condition where it's [null]
    if (isAdd && stat.length === 1 && stat[0] === null) {
      stat.splice(0, 1);
    }
    else {
      for (i = 0; i < stat.length; i++) {
        if (stat[i].name === statModifier.name) {
          stat[i].history.experience += isAdd ? statModifier.value : -1 * statModifier.value;
          this.updateStatByHistory(stat[i]);
          //// NOTE: not that simple.  What if the effects sum to 0, for example: your lvl gives you +1, but a cursed item gives you -1
          // remove it from the array if it's total value is 0
          // if (stat[i].value <= 0 && (!stat[i].conditional || !stat[i].conditional.length)) {
          //  stat.splice(i, 1);
          // }
          // The correct way to handle it would be to check if there is no stat[i].bound or stat[i].conditional and stat[i].value === 0 
          if ((!stat[i].bound || !stat[i].bound.length) && (!stat[i].conditional || !stat[i].conditional.length) && !stat[i].value) {
            stat.splice(i, 1);
          }
          return;
        }
      }
    }
    // if we reach this point, we assume it's a new skill being added to the list
    stat.push({
      "name": statModifier.name,
      "value": isAdd ? statModifier.value : -1 * statModifier.value,
      "stackingValue": true,
      "history": {
        "experience": isAdd ? statModifier.value : -1 * statModifier.value
      }
    });
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
    // remove temp object from player
    delete this.players.selectedPlayer.temp;

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