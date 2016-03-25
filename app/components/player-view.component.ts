import {Component, OnInit} from 'angular2/core';
// import {PlayerEntriesService} from '../services/player-entries.service';
// import {GlobalService} from '../services/global.service';
import {StatComponent} from './stat.component';

@Component({
	selector: 'sr-player-view',
	templateUrl: './app/views/player-view.html',
	directives: [StatComponent],
	inputs: ['player']
})
export class PlayerViewComponent implements OnInit {
	public player;
	public addedExperience

	// constructor(private _playerEntriesService: PlayerEntriesService, private _globalService: GlobalService) { }

	// on app load, do this:
	ngOnInit() {
		this.addedExperience = null;
	}

	addExperience() {
		this.addedExperience = null;
	}

	levelUp() {
		debugger;
	}

	setWiseChoicePoints() {
		debugger;
	}
}