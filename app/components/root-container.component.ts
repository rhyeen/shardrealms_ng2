import {Component, OnInit} from 'angular2/core';
import {TableContainerComponent} from './table-container.component';
import {GlobalService} from '../services/global.service';
import {PlayerListContainerComponent} from './player-list-container.component';

@Component({
  selector: 'sr-root-container',
  templateUrl: './app/views/root-container.html',
  directives: [TableContainerComponent, PlayerListContainerComponent],
  providers: [GlobalService]
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