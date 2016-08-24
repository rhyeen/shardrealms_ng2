import {Component, OnInit, OnChanges} from '@angular/core';
import {PlayerEntriesService} from '../services/player-entries.service';
import {LevelModifierItemComponent} from '../components/level-modifier-item.component';


@Component({
	selector: 'sr-level-modifier',
	templateUrl: './app/views/level-modifier.html',
	directives: [LevelModifierItemComponent],
	inputs: ['modifiers', 'player']
})
export class LevelModifierComponent implements OnInit, OnChanges {

	public player;
	public modifiers;
	public dependentModifiers;
	public modifiersPickList;

	constructor(private _playerEntriesService: PlayerEntriesService) { }

	// on app load, do this:
	ngOnInit() {

	}

	// @TODO: once you figure out to the function that's called once the component's inputs are initialized,
	// replace this function with that, calling this.getDependentModifiers();
	ngOnChanges(changes) {
		var curModifiers;
		if (changes['modifiers']) {
			this.modifiers = changes['modifiers'].currentValue;			
		}
		if (changes['player']) {
			this.player = changes['player'].currentValue;
		}
		if (this.player && this.modifiers) {
			this.getDependentModifiers();
		}
	}

	trackByIndex(index) {
		return index;
	}

	getDependentModifiers() {
		var i, j;

		this.dependentModifiers = [];
		//this.modifiersPickList = {};

		for (i = 0; i < this.modifiers.length; i++) {
			if (this.modifiers[i]['level'] > this.player['level up from'] && this.modifiers[i]['level'] <= this.player['level']) {
				//// keep a value for pick list items that are picked
				// @NOTE: I hate modifying the original reference, but it's much simpler than where the alternative was headed
				for (j = 0; j < this.modifiers[i]['pick lists'].length; j++) {
					this.modifiers[i]['pick lists'][j].chosen = 0;
				}
				// @NOTE: alternative:
				// itemPickList = [];
				// for (j = 0; j < this.modifiers[i]['pick lists'].length; j++) {
				// 	itemPickList.push({
				// 		'allowed': this.modifiers[i]['pick lists'][j]['allowed'],
				// 		'chosen': 0
				// 	});
				// }

				this.dependentModifiers.push(this.modifiers[i]);
			}
		}
	}
}