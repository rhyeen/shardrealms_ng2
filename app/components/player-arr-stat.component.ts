import {Component, OnInit} from '@angular/core';
import {StatComponent} from '../components/stat.component';


@Component({
	selector: 'sr-player-arr-stat',
	templateUrl: './app/views/player-arr-stat.html',
	directives: [StatComponent],
	inputs: ['player', 'key', 'config']
})
export class PlayerArrStat implements OnInit {

	public player;
	public config;
	public key;
	
	// on app load, do this:
	ngOnInit() {

	}
}