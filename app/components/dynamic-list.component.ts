import {Component, OnInit} from '@angular/core';
import {PlayerEntriesService} from '../services/player-entries.service';

@Component({
	selector: 'sr-dynamic-list',
	templateUrl: './app/views/dynamic-list.html',
	inputs: ["value", "list", "config", "disabled"]
})
export class DynamicListComponent implements OnInit {
	public value;
	public list;
	public config;
	public disabled;
	public valueSetByList = false;
	public showList = [];
	public showListIndex;
	public tempShowList = [];

	constructor(private _playerEntriesService: PlayerEntriesService) {
	}

	// on app load, do this:
	ngOnInit() {
		this.showList = null;
	}

	/**
	 * Modify the shown list to have updated information based on search query
	 */
	checkInput(value, index) {
		var i, j, doesNotContain, lowerCaseListItem;
		if (this.valueSetByList) {
			this.valueSetByList = false;
			return;
		}

		if (index || index === 0) {
			this.value[index] = value;
			this.showListIndex = index;
		}
		else {
			this.value = value;
		}

		// no list means any input is valid
		if (!this.list) {
			return;
		}

		// if empty, show all options
		if (!value) {
			this.showList = this.list;
			return;
		}

		this.showList = [];
		value = value.toLowerCase();

		// otherwise show options that have context with the search query
		for (i = 0; i < this.list.length; i++) {
			doesNotContain = false;
			lowerCaseListItem = this.list[i].toLowerCase();
			for (j = 0; j < value.length; j++) {
				if (lowerCaseListItem.indexOf(value[j]) === -1) {
					doesNotContain = true;
					break;
				}
			}
			if (!doesNotContain) {
				this.showList.push(this.list[i]);
			}
		}
	}

	addInput() {
		this.value.push(null);
	}

	deleteInput(index) {
		this.value.splice(index, 1);
	}

	trackByIndex(index) {
		return index;
	}


	setValue(value, index) {
		this.valueSetByList = true;
		if (index || index === 0) {
			this.value[index] = value;
			this.showListIndex = index;
		}
		else {
			this.value = value;
		}
		this.showList = null;
	}

	confirmInput() {
		this.showList = null;

		// if this is an object that keeps history, update that history
		if (this.config.history) {
			this.config.history.history.experience = this.value;
			this._playerEntriesService.updateStatByHistory(this.config.history);
		}
	}

	// ngOnChanges(changes) {
	// 	if (changes['list']) {
	// 		this.showList = changes['list'].currentValue;
	// 	}
	// }
}