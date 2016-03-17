import {Component, OnInit, OnChanges} from 'angular2/core';
import {PlayerEntriesService} from '../services/player-entries.service';


@Component({
	selector: 'sr-level-modifier-item',
	templateUrl: './app/views/level-modifier-item.html',
	// directives: [],
	inputs: ['item', 'pickList', 'player']
})
export class LevelModifierItemComponent implements OnInit, OnChanges {

	public item;
	public points;
	public isGained;
	public isGainedElsewhere;
	public gainedSymbol;
	public pickList;
	public player;
	
	constructor(private _playerEntriesService: PlayerEntriesService) { }

	// on app load, do this:
	ngOnInit() {
		this.points = 0;
		this.isGained = false;
		this.isGainedElsewhere = false;
		this.updateGainedSymbol();
	}

	ngOnChanges(changes) {
		// determine if item should be disabled if the player already has it
		if (changes['item']) {
			this.item = changes['item'].currentValue;			
		}
		// need to do it each time the player is changed, just in case a class & race both have the same pick list ability and a user picks one of them
		if (changes['player']) {
			this.player = changes['player'].currentValue;
		}
		if (this.player && this.item) {
			this.checkPlayerHasItem();
		}
	}

	checkPlayerHasItem() {
		this._playerEntriesService.checkPlayerHasItem(this.item).then(isOwned => this.isGainedElsewhere = isOwned);
	}

	updateGainedSymbol() {
		this.gainedSymbol = this.isGained ? '-' : '+';
	}

	editStat(isAdd) {
		var type;
		var modifyValue = isAdd ? 1 : -1;
		this.pickList.chosen += modifyValue;
		this.points += modifyValue;
		this._playerEntriesService.modifyPlayerStats(this.item, isAdd);
	}

	gainStat() {
		this.isGained = !this.isGained;
		this.updateGainedSymbol();
		this.pickList.chosen += this.isGained ? 1 : -1;
		this._playerEntriesService.modifyPlayerStats(this.item, this.isGained);
	}
}