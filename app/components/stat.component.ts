import {Component, OnInit} from '@angular/core';
import {PlayerEntriesService} from '../services/player-entries.service';


@Component({
	selector: 'sr-stat',
	templateUrl: './app/views/stat.html',
	inputs: ['player', 'key', 'config', 'innerKey'],
	providers: [PlayerEntriesService]
})
export class StatComponent implements OnInit {
	public player;
	public key;
	public innerKey;
	public config;

	constructor(private _playerEntriesService: PlayerEntriesService) { }

	// on app load, do this:
	ngOnInit() {

	}

	statClick(event) {
		debugger;
		// if (!this.innerKey) {
		// 	this._playerEntriesService.showStatWindow(event.pageX, event.pageY, this.key, this.player[this.key]);
		// }
		// else {
		// 	this._playerEntriesService.showStatWindow(event.pageX, event.pageY, this.innnerKey, this.player[this.key][this.innnerKey]);
		// }
	}
}