import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _globalService: GlobalService
  ) {

  }

  // on app load, do this:
  ngOnInit() {
    this.mainView = this._globalService.getGlobalView();
  }

  goToPlayers() {
    this.router.navigate(['/player']);
  }

  goToTables() {
    this.router.navigate(['/table']);
  }

  goToRoot() {
    this.router.navigate(['/']);
  }
}