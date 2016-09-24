import {Component, OnInit} from '@angular/core';
import {PlayerEntriesService} from '../services/player-entries.service';
import {GlobalService} from '../services/global.service';

@Component({
	selector: 'sr-player-selection',
	templateUrl: './app/views/player-selection.html',
	providers: [PlayerEntriesService, GlobalService]
})
export class PlayerSelectionComponent implements OnInit {
	public players;
	public mainView;

	constructor(private _playerEntriesService: PlayerEntriesService, private _globalService: GlobalService) {

	}
	
	getPlayers() {
		this._playerEntriesService.getPlayers().then(players => {
			this.players = players;
		});
	}

	// on app load, do this:
	ngOnInit() {
		this.getPlayers();
		this.mainView = this._globalService.getGlobalView();
	}

}