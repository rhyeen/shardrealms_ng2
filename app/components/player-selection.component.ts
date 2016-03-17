import {Component, OnInit} from 'angular2/core';
import {PlayerEntriesService} from '../services/player-entries.service';
import {GlobalService} from '../services/global.service';
import {LevelContainerComponent} from './level-container.component';

@Component({
	selector: 'sr-player-selection',
	templateUrl: './app/views/player-selection.html',
	directives: [LevelContainerComponent],
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