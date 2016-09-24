import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../services/global.service';
import {PlayerEntriesService} from '../services/player-entries.service';
import {TableEntriesService} from '../services/table-entries.service';

@Component({
  selector: 'sr-root-container',
  templateUrl: './app/views/root-container.html',
  providers: [GlobalService, PlayerEntriesService, TableEntriesService]
})
export class RootContainerComponent implements OnInit {
  public mainView;
  //public selectedView = 'players';

  constructor(private _globalService: GlobalService) {

  }


  // on app load, do this:
  ngOnInit() {
    this.mainView = this._globalService.getGlobalView();
  }

  goToPlayers() {
    this._globalService.gotoPlayerList();
  }

  goToTables() {
    this._globalService.gotoTableList();
  }

  goToRoot() {
    this._globalService.gotoMainMenu();
  }
}