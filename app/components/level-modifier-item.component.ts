import {Component, OnInit} from '@angular/core';
import {PlayerEntriesService} from '../services/player-entries.service';
import {TableEntriesService} from '../services/table-entries.service';


@Component({
	selector: 'sr-level-modifier-item',
	templateUrl: './app/views/level-modifier-item.html',
	// directives: [],
	inputs: ['item', 'pickList', 'player']
})
export class LevelModifierItemComponent implements OnInit {

	public item;
	public points;
	public isGained;
	public isGainedElsewhere;
	public gainedSymbol;
	public pickList;
	public player;
	
	constructor(private _playerEntriesService: PlayerEntriesService, private _tableEntriesService: TableEntriesService) { }

	// on app load, do this:
	ngOnInit() {
		this.points = 0;
		this.isGained = false;
		this.isGainedElsewhere = false;
		this.updateGainedSymbol();
	}

	updateGainedSymbol() {
		this.gainedSymbol = this.isGained ? '-' : '+';
	}

	itemNameClick(event) {
		this._tableEntriesService.showItemWindow(event.pageX, event.pageY, this.item.type, this.item.name, false);
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