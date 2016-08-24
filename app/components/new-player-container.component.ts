import {Component, OnInit} from '@angular/core';
import {PlayerEntriesService} from '../services/player-entries.service';
import {GlobalService} from '../services/global.service';
import {DynamicListComponent} from './dynamic-list.component';
import {LevelContainerComponent} from './level-container.component';


@Component({
	selector: 'sr-new-player-container',
	templateUrl: './app/views/new-player-container.html',
	directives: [DynamicListComponent, LevelContainerComponent]
})
export class NewPlayerContainerComponent implements OnInit {
	public players;
	public newPlayerConfig = {};
	public newPlayerUniqueConfig = {
		"avg height (in)": "?",
		"avg weight (lbs)": "?",
		"age": {
			"young adult": "?",
			"middle aged": "?",
			"old": "?",
			"max age": "?"
		}
	};

	constructor(private _playerEntriesService: PlayerEntriesService, private _globalService: GlobalService) {
	}

	getNewPlayerConfig() {
		this._playerEntriesService.getNewPlayerConfig().then(newPlayerConfig => {
			this.newPlayerConfig = newPlayerConfig;
			// since we depend on newPlayerConfig having .index set, we don't get players until it's finished
			this.getNewPlayer();
		});
	}

	playerLevelChange(newLevel) {
		// update the experience to match
		this._playerEntriesService.getExperience(newLevel).then(experience => {
			this.players.selectedPlayer['experience'] = experience;
		});	
	}

	playerRaceChange(newRace) {
		var index, race;
		if (this.newPlayerConfig['index'] && this.newPlayerConfig['index']['races'] && (this.newPlayerConfig['index']['races'][newRace] || this.newPlayerConfig['index']['races'][newRace] === 0)) {
			index = this.newPlayerConfig['index']['races'][newRace];
			race = this.newPlayerConfig['races'][index]
			this.players.selectedPlayer['size'].history.experience = race['size'];
			this._playerEntriesService.updateStatByHistory(this.players.selectedPlayer['size']);
			// this is because the view won't update without this
			this.players.selectedPlayer['race'].history.experience = newRace;
			this._playerEntriesService.updateStatByHistory(this.players.selectedPlayer['race']);
			// this.players.selectedPlayer['height (in)'] = race['avg height (in)'];
			// this.players.selectedPlayer['weight (lbs)'] = race['avg weight (lbs)'];
			this.players.selectedPlayer['languages'] = race['languages'];
			this.newPlayerUniqueConfig['eye colors'] = race['eye colors'];
			this.newPlayerUniqueConfig['skin colors'] = race['skin colors'];
			this.newPlayerUniqueConfig['hair colors'] = race['hair colors'];
			this.newPlayerUniqueConfig['avg height (in)'] = race['avg height (in)'];
			this.newPlayerUniqueConfig['avg weight (lbs)'] = race['avg weight (lbs)'];
			this.newPlayerUniqueConfig['age'] = race['age'];
		}
	}

	playerClassChange(newClass) {
		var index, cClass;
		if (this.newPlayerConfig['index'] && this.newPlayerConfig['index']['classes'] && (this.newPlayerConfig['index']['classes'][newClass] || this.newPlayerConfig['index']['classes'][newClass] === 0)) {
			index = this.newPlayerConfig['index']['classes'][newClass];
			cClass = this.newPlayerConfig['classes'][index]

			// this is because the view won't update without this
			this.players.selectedPlayer['class'].history.experience = newClass;
			this._playerEntriesService.updateStatByHistory(this.players.selectedPlayer['class']);

			this.players.selectedPlayer['gold'] = cClass['starting gold'];
		}
	}

	playerNameBlur() {
		this._playerEntriesService.updateStatByHistory(this.players.selectedPlayer['name']);
	}

	playerSizeBlur() {
		this._playerEntriesService.updateStatByHistory(this.players.selectedPlayer['size']);
	}

	playerAgeBlur() {
		this._playerEntriesService.updateStatByHistory(this.players.selectedPlayer['age']);
	}

	playerWeightBlur() {
		this._playerEntriesService.updateStatByHistory(this.players.selectedPlayer['weight (lbs)']);
	}

	playerHeightBlur() {
		this._playerEntriesService.updateStatByHistory(this.players.selectedPlayer['height (in)']);
	}

	getNewPlayer() {
		this._playerEntriesService.getPlayers().then(players => {
			this.players = players;
			this._playerEntriesService.getNewPlayer().then(newPlayer => {
				this.players.selectedPlayer = newPlayer;
			});
		});
	}

	makeNewPlayer() {
		// finish adding all race/class benefits to player as if at level 0
		this._playerEntriesService.savePlayer().then(data => {
			// jump to the level up container
			this._globalService.gotoPlayerLeveling();
		});
	}

	// on app load, do this:
	ngOnInit() {
		this.getNewPlayerConfig();
	}
}