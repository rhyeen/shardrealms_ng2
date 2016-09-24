import {Component, OnInit} from '@angular/core';
import {PlayerEntriesService} from '../services/player-entries.service';

@Component({
  selector: 'sr-stat-window',
  templateUrl: './app/views/stat-window.html',
  providers: [PlayerEntriesService]
})
export class StatWindowComponent implements OnInit {
  public config;

  constructor(private _playerEntriesService: PlayerEntriesService) { }

  hideWindow() {
    this.config.show = false;
  }

  // on app load, do this:
  ngOnInit() {
    this._playerEntriesService.getStatWindowConfig().then(config => {
      this.config = config;
    });
  }
}