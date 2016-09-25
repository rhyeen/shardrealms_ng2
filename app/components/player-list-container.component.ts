import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {PlayerEntriesService} from '../services/player-entries.service';
import {GlobalService} from '../services/global.service';

@Component({
  selector: 'sr-player-list-container',
  templateUrl: './app/views/player-list-container.html',
  providers: [PlayerEntriesService, GlobalService]
})
export class PlayerListContainerComponent implements OnInit {
  public playerList = [];
  // public newPlayer = null;
  public players;
  public mainView;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _playerEntriesService: PlayerEntriesService,
    private _globalService: GlobalService
  ) {

  }

  getPlayerEntries() {
    this._playerEntriesService.getPlayerEntries().then(playerList => this.playerList = playerList);
    this._playerEntriesService.getPlayers().then(players => this.players = players);
  }

  // on app load, do this:
  ngOnInit() {
    this.getPlayerEntries();
    this.mainView = this._globalService.getGlobalView();
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      if (Number(id)) {
        this._playerEntriesService.updatePlayer(id).then(player => {
          this._globalService.gotoPlayerEdit();
        });
      }
    });
  }

  goToRoot() {
    this.router.navigate(['/']);
  }

  selectPlayer(playerId) {
    this.router.navigate(['/player', playerId]);
    this._playerEntriesService.updatePlayer(playerId).then(player => {
      this._globalService.gotoPlayerEdit();
    });
  }

  createNewPlayer() {
    this.players.selectedPlayer;
    this._globalService.gotoNewPlayer();
  }

  backToSelection() {
    this.router.navigate(['/player']);
    this.players.selectedPlayer = null;
    this._globalService.gotoPlayerList();
  }
}