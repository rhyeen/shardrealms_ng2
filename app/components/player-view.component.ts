import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sr-player-view',
  templateUrl: './app/views/player-view.html',
  inputs: ['player']
})
export class PlayerViewComponent implements OnInit {
  public player;
  public addedExperience;

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