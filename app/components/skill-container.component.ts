import {Component, OnInit} from '@angular/core';
import {PlayerEntriesService} from '../services/player-entries.service';
import {GlobalService} from '../services/global.service';


@Component({
	selector: 'sr-skill-container',
	templateUrl: './app/views/skill-container.html',
	providers: [PlayerEntriesService, GlobalService]
})
export class SkillContainerComponent implements OnInit {

	public players;

	constructor(private _playerEntriesService: PlayerEntriesService, private _globalService: GlobalService) { }

	getPlayers() {
		this._playerEntriesService.getPlayers().then(players => {
			this.players = players;
		});
	}

	finishLeveling() {
		this._playerEntriesService.savePlayer().then(function (data) {
		    // jump to the player edit/view container
			this._globalService.gotoPlayerEdit();
		});
	}

	// on app load, do this:
	ngOnInit() {
		this.getPlayers();
	}
}