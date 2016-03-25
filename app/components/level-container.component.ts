import {Component, OnInit} from 'angular2/core';
import {PlayerEntriesService} from '../services/player-entries.service';
import {GlobalService} from '../services/global.service';
import {LevelModifierComponent} from '../components/level-modifier.component';
import {LevelModifierItemComponent} from '../components/level-modifier-item.component';


@Component({
	selector: 'sr-level-container',
	templateUrl: './app/views/level-container.html',
	directives: [LevelModifierComponent, LevelModifierItemComponent]
})
export class LevelContainerComponent implements OnInit {

	public attribute;
	public players;
	public playerConfig;
	public modifiersInLevelingRange = {
		'races': false,
		'classes': false
	};
	public modifiers = {
		'races': null,
		'classes': null
	};

	constructor(private _playerEntriesService: PlayerEntriesService, private _globalService: GlobalService) { }

	getPlayerConfig() {
		this._playerEntriesService.getPlayerConfig().then(playerConfig => {
			this.playerConfig = playerConfig;
			// needs to be after playerConfig since playerConfig needs to be set up for getMods()
			this.getPlayers();
		});
	}

	getPlayers() {
		this._playerEntriesService.getPlayers().then(players => {
			this.players = players;
			this.getMods(this.players.selectedPlayer['race'].value, 'races');
			this.getMods(this.players.selectedPlayer['class'].value, 'classes');
			this.getAttributePoints();
			this.updateStatMapping();
			this.modifyHealth();
		});
	}

	/**
	 * Gets the stats already added to the player object and adds them to the .temp mappings property
	 */
	updateStatMapping() {
		this._playerEntriesService.getPredefinedStatMapping();
	}

	gotoSkillPoints() {
		this._globalService.gotoPlayerSkillPoint();

		// this._playerEntriesService.savePlayer().then(function (data) {
		//     // jump to the level up container
		// });
	}

	modifyHealth() {
		var index,
			getClass,
			player = this.players.selectedPlayer;

		index = this.playerConfig['index']['classes'][player.class.value];
		getClass = this.playerConfig['classes'][index];
		if (!player['max health'].history.experience) {
			player['max health'].history.experience = getClass['starting health'];
		}
		player['max health'].history.experience += (player['level'] - player['level up from']) * getClass["health per level"];
		this._playerEntriesService.updateStatByHistory(player['max health']);
	}

	addPassiveModifier(levelModifiers) {
		var i, ps;
		if (!levelModifiers || !levelModifiers['passive list'] || !levelModifiers['passive list'].length) {
			return;
		}
		ps = levelModifiers['passive list'];
		for (i = 0; i < ps.length; i++) {
			this._playerEntriesService.modifyPlayerStats(ps[i], true);
		}
	}

	// on app load, do this:
	ngOnInit() {
		this.getPlayerConfig();
	}

	getAttributePoints() {
		this._playerEntriesService.getAttributePoints(this.players.selectedPlayer['level up from'], this.players.selectedPlayer['level']).then(attributePoints => {
			if (attributePoints <= 0) {
				this.attribute = null;
				return;
			}
			this.attribute = {
				'pickList': {
					'allowed': attributePoints,
					'chosen': 0
				},
				'STR': {
					'type': 'attribute',
					'name': 'STR',
					'value': 1
				},
				'DEX': {
					'type': 'attribute',
					'name': 'DEX',
					'value': 1
				},
				'INF': {
					'type': 'attribute',
					'name': 'INF',
					'value': 1
				},
				'WIS': {
					'type': 'attribute',
					'name': 'WIS',
					'value': 1
				}
			}
		});
	}

	getMods(type, typeKey) {
		var index, getType, i;
		if (this.playerConfig['index'] && this.playerConfig['index'][typeKey] && (this.playerConfig['index'][typeKey][type] || this.playerConfig['index'][typeKey][type] === 0)) {
			index = this.playerConfig['index'][typeKey][type];
			getType = this.playerConfig[typeKey][index];
			this.modifiers[typeKey] = getType['level modifiers'];

			// determine if modifiers are in leveling up range
			this.modifiersInLevelingRange[typeKey] = false;
			for (i = 0; i < this.modifiers[typeKey].length; i++) {
				if (this.modifiers[typeKey][i]['level'] > this.players.selectedPlayer['level up from'] && this.modifiers[typeKey][i]['level'] <= this.players.selectedPlayer['level']) {
					this.modifiersInLevelingRange[typeKey] = true;
					// add passive modifiers
					this.addPassiveModifier(this.modifiers[typeKey][i]);
				}
			}
		}
	}
}